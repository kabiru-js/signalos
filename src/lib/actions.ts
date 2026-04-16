"use server";

import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import bcrypt from "bcryptjs";

// ─── Helpers ───
async function getOrgId() {
    const session = await auth();
    const orgId = (session?.user as any)?.organizationId;
    if (!orgId) throw new Error("Unauthorized: No organization found in session");
    return orgId;
}

// ─── SaaS Auth & Onboarding ───
export async function registerUser(data: { name: string, email: string, password: string, orgName: string }) {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    return await prisma.$transaction(async (tx: any) => {
        // 1. Create User
        const user = await tx.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: hashedPassword,
            }
        });

        // 2. Create Organization
        const org = await tx.organization.create({
            data: {
                name: data.orgName,
                slug: data.orgName.toLowerCase().replace(/ /g, "-") + "-" + Math.random().toString(36).substring(2, 5),
            }
        });

        // 3. Create Membership
        await tx.membership.create({
            data: {
                userId: user.id,
                organizationId: org.id,
                role: "OWNER",
            }
        });

        return { user, org };
    });
}

// ─── Workers ───
export async function getWorkers() {
    const organizationId = await getOrgId();
    return prisma.worker.findMany({
        where: { organizationId },
        include: { accounts: { include: { account: true } } },
        orderBy: { createdAt: "desc" },
    });
}

export async function createWorker(name: string) {
    const organizationId = await getOrgId();
    const worker = await prisma.worker.create({
        data: {
            name,
            organizationId,
            productivity: Math.floor(Math.random() * 20) + 80
        },
    });
    revalidatePath("/management");
    return worker;
}

// ─── Accounts ───
export async function getAccounts() {
    const organizationId = await getOrgId();
    return prisma.account.findMany({
        where: { organizationId },
        orderBy: { createdAt: "desc" }
    });
}

export async function createAccount(name: string, platform: string) {
    const organizationId = await getOrgId();
    const account = await prisma.account.create({
        data: { name, platform, organizationId }
    });
    revalidatePath("/management");
    return account;
}

// ─── Worker ↔ Account Assignment ───
export async function assignWorkerToAccount(workerId: string, accountId: string) {
    // Note: Implicitly protected if workerId and accountId belong to the same org
    await prisma.workerAccount.create({ data: { workerId, accountId } });
    revalidatePath("/management");
}

export async function unassignWorkerFromAccount(workerId: string, accountId: string) {
    await prisma.workerAccount.delete({
        where: { workerId_accountId: { workerId, accountId } },
    });
    revalidatePath("/management");
}

// ─── Content ───
export async function getContent() {
    const organizationId = await getOrgId();
    return prisma.content.findMany({
        where: { organizationId },
        include: { worker: true, account: true },
        orderBy: { createdAt: "desc" },
    });
}

export async function createContent(data: { topic: string; hook: string; format?: string; workerId?: string; accountId?: string }) {
    const organizationId = await getOrgId();
    const content = await prisma.content.create({
        data: {
            ...data,
            organizationId,
            status: data.format ? "PLANNED" : "IDEA",
            score: 0
        },
    });
    revalidatePath("/tracker");
    revalidatePath("/planner");
    return content;
}

export async function updateContentStatus(id: string, status: string) {
    const organizationId = await getOrgId();
    // Enforce org check
    await prisma.content.update({
        where: { id, organizationId },
        data: { status }
    });
    revalidatePath("/tracker");
}

export async function updateContentRevenue(id: string, revenue: number) {
    const organizationId = await getOrgId();
    await prisma.content.update({
        where: { id, organizationId },
        data: { revenue }
    });
    revalidatePath("/tracker");
    revalidatePath("/revenue");
}

export async function updateContentScore(id: string, score: number, aiScore: number, userScore: number) {
    const organizationId = await getOrgId();
    await prisma.content.update({
        where: { id, organizationId },
        data: { score, aiScore, userScore }
    });
    revalidatePath("/tracker");
}

export async function deleteContent(id: string) {
    const organizationId = await getOrgId();
    await prisma.content.delete({
        where: { id, organizationId }
    });
    revalidatePath("/tracker");
    revalidatePath("/planner");
}

export async function getFormatInsights() {
    const organizationId = await getOrgId();
    const contents = await prisma.content.findMany({
        where: { organizationId, NOT: { format: null } },
        select: { format: true, revenue: true, views: true }
    });

    const stats: Record<string, { revenue: number; count: number }> = {};
    contents.forEach((c: { format: string | null; revenue: number; views: number }) => {
        const fmt = c.format || "Unknown";
        if (!stats[fmt]) stats[fmt] = { revenue: 0, count: 0 };
        stats[fmt].revenue += c.revenue;
        stats[fmt].count += 1;
    });

    return Object.entries(stats).map(([name, data]) => ({
        name,
        totalRevenue: data.revenue,
        score: data.count > 0 ? (data.revenue / data.count) : 0
    })).sort((a, b) => b.score - a.score);
}

// ─── Revenue ───
export async function getRevenueData() {
    const organizationId = await getOrgId();

    const allContent = await prisma.content.findMany({
        where: { organizationId },
        select: { revenue: true }
    });
    const totalRevenue = allContent.reduce((sum: number, c: { revenue: number }) => sum + c.revenue, 0);

    const accounts = await prisma.account.findMany({
        where: { organizationId },
        include: {
            content: { select: { revenue: true } },
            workers: true,
        },
    });

    return {
        totalRevenue,
        accounts: accounts.map((acc: any) => ({
            name: acc.name,
            platform: acc.platform,
            revenue: acc.content.reduce((s: number, c: { revenue: number }) => s + c.revenue, 0),
            workersCount: acc.workers.length,
        })),
    };
}

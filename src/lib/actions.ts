"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// ─── Workers ───
export async function getWorkers() {
    return prisma.worker.findMany({
        include: { accounts: { include: { account: true } } },
        orderBy: { createdAt: "desc" },
    });
}

export async function createWorker(name: string) {
    const worker = await prisma.worker.create({
        data: { name, productivity: Math.floor(Math.random() * 20) + 80 },
    });
    revalidatePath("/management");
    return worker;
}

// ─── Accounts ───
export async function getAccounts() {
    return prisma.account.findMany({ orderBy: { createdAt: "desc" } });
}

export async function createAccount(name: string, platform: string) {
    const account = await prisma.account.create({ data: { name, platform } });
    revalidatePath("/management");
    return account;
}

// ─── Worker ↔ Account Assignment ───
export async function assignWorkerToAccount(workerId: string, accountId: string) {
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
export async function createContent(data: { topic: string; hook: string; workerId?: string; accountId?: string }) {
    const content = await prisma.content.create({
        data: { ...data, status: "draft", score: 0 },
    });
    revalidatePath("/tracker");
    return content;
}

export async function updateContentStatus(id: string, status: string) {
    await prisma.content.update({ where: { id }, data: { status } });
    revalidatePath("/tracker");
}

export async function updateContentRevenue(id: string, revenue: number) {
    await prisma.content.update({ where: { id }, data: { revenue } });
    revalidatePath("/tracker");
    revalidatePath("/revenue");
}

export async function updateContentScore(id: string, score: number, aiScore: number, userScore: number) {
    await prisma.content.update({ where: { id }, data: { score, aiScore, userScore } });
    revalidatePath("/tracker");
}

export async function deleteContent(id: string) {
    await prisma.content.delete({ where: { id } });
    revalidatePath("/tracker");
}

// ─── Revenue ───
export async function getRevenueData() {
    const allContent = await prisma.content.findMany({ select: { revenue: true } });
    const totalRevenue = allContent.reduce((sum: number, c: { revenue: number }) => sum + c.revenue, 0);

    const accounts = await prisma.account.findMany({
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

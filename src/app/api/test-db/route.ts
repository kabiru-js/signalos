import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const workersCount = await prisma.worker.count();
        return NextResponse.json({ success: true, workersCount });
    } catch (error) {
        console.error("Prisma Error:", error);
        return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
    }
}

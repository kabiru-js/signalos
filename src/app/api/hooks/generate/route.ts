import { generateHooks } from "@/lib/services/hook-intelligence";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { topic } = await req.json();
        if (!topic) {
            return NextResponse.json({ error: "Topic is required" }, { status: 400 });
        }
        const result = await generateHooks(topic);
        return NextResponse.json(result);
    } catch (error) {
        console.error("Hook Intelligence Error:", error);
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}

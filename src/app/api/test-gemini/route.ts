import { generateContent } from "@/lib/gemini";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { prompt } = await req.json();
        const content = await generateContent(prompt);
        return NextResponse.json({ content });
    } catch (error: any) {
        console.error("Grok API Error:", error);
        return NextResponse.json({ error: error.message || "Unknown error" }, { status: 500 });
    }
}

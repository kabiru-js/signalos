import { getAiSignalScoring, calculateSignalScore, ScoringMetrics } from "@/lib/services/signal-scoring";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { content, userMetrics } = await req.json();
        if (!content) {
            return NextResponse.json({ error: "Content is required" }, { status: 400 });
        }

        const aiMetrics = await getAiSignalScoring(content);
        const finalScore = calculateSignalScore(userMetrics || { strength: 5, emotion: 5, relevance: 5, novelty: 5, clarity: 5 }, aiMetrics);

        return NextResponse.json({
            aiMetrics,
            finalScore
        });
    } catch (error) {
        console.error("Signal Scoring Error:", error);
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}

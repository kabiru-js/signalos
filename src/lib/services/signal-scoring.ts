export interface ScoringMetrics {
    strength: number;    // 1-10
    emotion: number;     // 1-10
    relevance: number;   // 1-10
    novelty: number;     // 1-10
    clarity: number;     // 1-10
}

export function calculateSignalScore(userMetrics: ScoringMetrics, aiMetrics: ScoringMetrics): number {
    // Simple weighted average formula
    // User metrics weight: 60%, AI metrics weight: 40%
    const userAvg = (Object.values(userMetrics).reduce((a, b) => a + b, 0) / 5) * 10;
    const aiAvg = (Object.values(aiMetrics).reduce((a, b) => a + b, 0) / 5) * 10;

    const finalScore = (userAvg * 0.6) + (aiAvg * 0.4);
    return Math.round(finalScore);
}

import { generateContent } from "@/lib/gemini";

export async function getAiSignalScoring(content: string): Promise<ScoringMetrics> {
    const prompt = `
    Analyze the following content and rate it from 1 to 10 on these 5 metrics:
    1. Strength (How powerful is the message?)
    2. Emotion (Does it evoke a strong feeling?)
    3. Relevance (Is it useful to a broad audience?)
    4. Novelty (Is it a fresh perspective?)
    5. Clarity (Is it easy to understand?)
    
    Content: "${content}"
    
    Return your response in the following JSON format:
    {
      "strength": number,
      "emotion": number,
      "relevance": number,
      "novelty": number,
      "clarity": number
    }
    
    ONLY return the JSON object.
  `;

    const responseText = await generateContent(prompt);
    try {
        const jsonMatch = responseText.match(/\{[\s\S]*\}/);
        const cleanJson = jsonMatch ? jsonMatch[0] : responseText;
        return JSON.parse(cleanJson);
    } catch (error) {
        console.error("Failed to parse AI scoring response:", responseText);
        return { strength: 5, emotion: 5, relevance: 5, novelty: 5, clarity: 5 }; // Fallback
    }
}

import { generateContent } from "@/lib/gemini";
import { z } from "zod";

const HookSchema = z.object({
    topic: z.string(),
    hooks: z.array(z.string()),
});

export type HookIntelligenceResult = z.infer<typeof HookSchema>;

export async function generateHooks(topic: string): Promise<HookIntelligenceResult> {
    const prompt = `
    You are an expert content strategist. 
    Generate 5 to 10 high-performing "hooks" for a social media post about the following topic: "${topic}".
    
    Each hook should be attention-grabbing and designed to stop the scroll.
    Return your response in the following JSON format:
    {
      "topic": "${topic}",
      "hooks": ["hook 1", "hook 2", ...]
    }
    
    ONLY return the JSON object, no other text.
  `;

    const responseText = await generateContent(prompt);

    try {
        // Attempt to extract JSON if the AI included markdown blocks
        const jsonMatch = responseText.match(/\{[\s\S]*\}/);
        const cleanJson = jsonMatch ? jsonMatch[0] : responseText;
        return HookSchema.parse(JSON.parse(cleanJson));
    } catch (error) {
        console.error("Failed to parse Gemini response for hooks:", responseText);
        throw new Error("Invalid response format from AI");
    }
}

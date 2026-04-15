import OpenAI from "openai";

const xai = new OpenAI({
  apiKey: process.env.XAI_API_KEY || "",
  baseURL: "https://api.x.ai/v1",
});

export async function generateContent(prompt: string, model: string = "grok-3-mini-fast"): Promise<string> {
  const response = await xai.chat.completions.create({
    model,
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7,
  });

  return response.choices[0]?.message?.content || "";
}

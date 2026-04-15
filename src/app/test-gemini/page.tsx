"use client";

import { useState } from "react";

export default function GeminiTest() {
    const [prompt, setPrompt] = useState("Generate 5 catchy hooks about Next.js development.");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);

    const testGemini = async () => {
        setLoading(true);
        setResult("");
        try {
            const response = await fetch("/api/test-gemini", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt }),
            });
            const data = await response.json();
            setResult(data.content || data.error);
        } catch (error) {
            setResult("Error: " + (error as Error).message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-8 max-w-2xl mx-auto dark:bg-zinc-900 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-zinc-100">Gemini Rotation Test</h1>

            <div className="space-y-4">
                <textarea
                    className="w-full p-4 rounded-xl bg-zinc-800 text-zinc-100 border border-zinc-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    rows={4}
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                />

                <button
                    onClick={testGemini}
                    disabled={loading}
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white rounded-lg font-medium transition-colors"
                >
                    {loading ? "Generating..." : "Generate Hooks"}
                </button>
            </div>

            {result && (
                <div className="mt-8 p-6 rounded-xl bg-zinc-800 border border-zinc-700 text-zinc-300 whitespace-pre-wrap">
                    {result}
                </div>
            )}
        </div>
    );
}

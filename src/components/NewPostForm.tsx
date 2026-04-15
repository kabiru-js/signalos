"use client";

import { createContent, updateContentScore } from "@/lib/actions";
import { useState } from "react";

export default function NewPostForm({ onClose }: { onClose: () => void }) {
    const [topic, setTopic] = useState("");
    const [hook, setHook] = useState("");
    const [pending, setPending] = useState(false);
    const [scoring, setScoring] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setPending(true);
        try {
            const content = await createContent({ topic, hook });

            // Auto-score with AI in the background
            setScoring(true);
            try {
                const res = await fetch("/api/score/calculate", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ content: hook }),
                });
                const data = await res.json();
                if (data.finalScore !== undefined) {
                    await updateContentScore(content.id, data.finalScore, data.finalScore, 0);
                }
            } catch {
                // Scoring failure is non-blocking
            }

            onClose();
        } catch (error) {
            console.error(error);
        } finally {
            setPending(false);
            setScoring(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-[2rem] w-full max-w-lg shadow-2xl">
                <h2 className="text-2xl font-bold mb-6">Create New Post</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-2 italic">Topic</label>
                        <input
                            autoFocus
                            required
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                            placeholder="e.g. Next.js Performance"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-2 italic">Hook</label>
                        <textarea
                            required
                            value={hook}
                            onChange={(e) => setHook(e.target.value)}
                            rows={3}
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                            placeholder="Stop scroll with a banger..."
                        />
                    </div>
                    <div className="flex gap-4 pt-4">
                        <button type="button" onClick={onClose} className="flex-1 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-xl font-bold transition-all">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={pending}
                            className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 rounded-xl font-bold transition-all shadow-lg shadow-blue-900/20"
                        >
                            {scoring ? "Scoring with AI..." : pending ? "Saving..." : "Save & Score"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

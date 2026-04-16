"use client";

import { useState } from "react";
import { createContent } from "@/lib/actions";

export default function HookEngine() {
    const [topic, setTopic] = useState("");
    const [hooks, setHooks] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [savedHooks, setSavedHooks] = useState<string[]>([]);

    const generateHooks = async () => {
        if (!topic.trim()) return;
        setLoading(true);
        setHooks([]);
        try {
            const res = await fetch("/api/hooks/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ topic }),
            });
            const data = await res.json();
            if (data.hooks) setHooks(data.hooks);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const saveHook = async (hook: string) => {
        try {
            await createContent({ topic, hook });
            setSavedHooks([...savedHooks, hook]);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="p-8 max-w-4xl mx-auto min-h-screen">
            <div className="mb-10">
                <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    Hook Intelligence Engine
                </h1>
                <p className="text-zinc-400 mt-2">AI-powered hooks that stop the scroll. Powered by Grok.</p>
            </div>

            <div className="flex gap-4 mb-10">
                <input
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && generateHooks()}
                    placeholder="Enter a topic, e.g. 'Morning routines for CEOs'"
                    className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 transition-all placeholder:text-zinc-600"
                />
                <button
                    onClick={generateHooks}
                    disabled={loading || !topic.trim()}
                    className="px-8 py-3.5 bg-yellow-600 hover:bg-yellow-500 disabled:opacity-40 rounded-xl font-bold transition-all shadow-lg shadow-yellow-900/20"
                >
                    {loading ? "Generating..." : "Generate"}
                </button>
            </div>

            {hooks.length > 0 && (
                <div className="space-y-3">
                    <p className="text-xs uppercase tracking-widest text-zinc-500 font-bold mb-4">
                        {hooks.length} hooks generated
                    </p>
                    {hooks.map((hook, i) => (
                        <div
                            key={i}
                            className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-yellow-500/30 transition-all group cursor-pointer"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex gap-4 items-start">
                                    <span className="text-yellow-500 font-black text-lg mt-0.5">{i + 1}</span>
                                    <p className="text-zinc-200 font-medium leading-relaxed">{hook}</p>
                                </div>
                                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all">
                                    <button
                                        onClick={() => navigator.clipboard.writeText(hook)}
                                        className="px-3 py-1 bg-zinc-800 hover:bg-zinc-700 rounded text-zinc-400 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest"
                                    >
                                        Copy
                                    </button>
                                    <button
                                        onClick={() => saveHook(hook)}
                                        disabled={savedHooks.includes(hook)}
                                        className="px-3 py-1 bg-yellow-600/20 hover:bg-yellow-600/40 text-yellow-500 rounded text-[10px] font-bold uppercase tracking-widest transition-all disabled:opacity-50"
                                    >
                                        {savedHooks.includes(hook) ? "Saved" : "Save as Idea"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {!loading && hooks.length === 0 && (
                <div className="text-center py-20 text-zinc-700">
                    <p className="text-6xl mb-4">🎣</p>
                    <p className="text-lg font-medium">Enter a topic above to generate scroll-stopping hooks</p>
                </div>
            )}
        </div>
    );
}

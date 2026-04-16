"use client";

import { useState } from "react";
import { updateContentStatus, deleteContent } from "@/lib/actions";
import { Calendar, Layout, Trash2, CheckCircle, TrendingUp, Sparkles } from "lucide-react";

export default function PlannerClient({ initialContent, insights }: { initialContent: any[], insights: any[] }) {
    const [content, setContent] = useState(initialContent);

    const handleDelete = async (id: string) => {
        await deleteContent(id);
        setContent(content.filter(c => c.id !== id));
    };

    return (
        <div className="p-8 max-w-6xl mx-auto min-h-screen">
            <div className="flex justify-between items-start mb-10">
                <div>
                    <h1 className="text-4xl font-black tracking-tight text-white mb-2">Content Planner</h1>
                    <p className="text-zinc-500 font-medium">Strategic scheduling based on platform signals.</p>
                </div>

                {/* Data Insights Panel */}
                <div className="bg-zinc-900/50 border border-zinc-800 p-4 rounded-2xl max-w-xs w-full">
                    <div className="flex items-center gap-2 mb-4 text-xs font-black uppercase tracking-widest text-zinc-400">
                        <TrendingUp className="w-3 h-3 text-accent" />
                        Performance Signals
                    </div>
                    <div className="space-y-3">
                        {insights.length > 0 ? insights.slice(0, 3).map((insight, i) => (
                            <div key={i} className="flex justify-between items-center text-sm">
                                <span className="text-zinc-300 font-bold">{insight.name}</span>
                                <span className="text-accent font-black">${insight.totalRevenue.toLocaleString()}</span>
                            </div>
                        )) : (
                            <p className="text-zinc-600 text-[10px] font-bold italic">No performance data yet. Post more to unlock insights.</p>
                        )}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {content.length === 0 ? (
                    <div className="text-center py-32 bg-zinc-900/20 border-2 border-dashed border-zinc-800 rounded-[2rem]">
                        <p className="text-4xl mb-4">📝</p>
                        <p className="text-zinc-500 font-bold">Your planner is empty. Generate some hooks to start planning.</p>
                    </div>
                ) : (
                    content.map((item) => (
                        <div key={item.id} className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-accent/30 transition-all group">
                            <div className="flex justify-between items-start gap-8">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${item.status === 'PLANNED' ? 'bg-accent/20 text-accent' : 'bg-zinc-800 text-zinc-500'
                                            }`}>
                                            {item.status}
                                        </span>
                                        <span className="text-zinc-600 text-xs font-bold">{new Date(item.createdAt).toLocaleDateString()}</span>
                                    </div>
                                    <h3 className="text-xl font-black text-white mb-2">{item.topic}</h3>
                                    <p className="text-zinc-400 font-medium leading-relaxed italic border-l-2 border-accent/20 pl-4">{item.hook}</p>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all">
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className="p-3 bg-zinc-800 hover:bg-red-900/20 text-zinc-500 hover:text-red-500 rounded-xl transition-all"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                        <button className="p-3 bg-accent/10 hover:bg-accent/20 text-accent rounded-xl transition-all">
                                            <Calendar className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-zinc-800 flex items-center justify-between">
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-2 text-zinc-500">
                                        <Layout className="w-4 h-4" />
                                        <span className="text-sm font-bold">{item.format || 'Format Unassigned'}</span>
                                    </div>
                                    {insights.length > 0 && !item.format && (
                                        <div className="flex items-center gap-2 px-3 py-1 bg-green-950/20 rounded-lg">
                                            <Sparkles className="w-3 h-3 text-green-500" />
                                            <span className="text-[10px] font-black text-green-500 uppercase">Recommendation: {insights[0].name}</span>
                                        </div>
                                    )}
                                </div>
                                <button className="flex items-center gap-2 text-accent hover:text-white transition-colors text-sm font-black uppercase tracking-tighter">
                                    Finalize for Production
                                    <CheckCircle className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

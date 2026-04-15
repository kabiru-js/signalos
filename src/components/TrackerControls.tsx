"use client";

import { useState } from "react";
import NewPostForm from "./NewPostForm";
import ContentDetailModal from "./ContentDetailModal";

interface ContentItem {
    id: string;
    topic: string;
    hook: string;
    status: string;
    score: number;
    views: number;
    likes: number;
    shares: number;
    revenue: number;
}

export default function TrackerControls({ content }: { content: ContentItem[] }) {
    const [showForm, setShowForm] = useState(false);
    const [selected, setSelected] = useState<ContentItem | null>(null);

    return (
        <>
            <button
                onClick={() => setShowForm(true)}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-xl font-semibold shadow-lg shadow-blue-900/20 transition-all transform hover:-translate-y-0.5"
            >
                + New Post
            </button>

            {showForm && <NewPostForm onClose={() => setShowForm(false)} />}
            {selected && <ContentDetailModal content={selected} onClose={() => setSelected(false as any)} />}

            {/* Hidden: this renders the table rows as a client component so we can handle clicks */}
            <div className="contents" id="tracker-rows">
                {content.map((item) => (
                    <tr
                        key={item.id}
                        onClick={() => setSelected(item)}
                        className="hover:bg-zinc-800/30 transition-colors cursor-pointer group"
                    >
                        <td className="px-6 py-5 font-medium">{item.topic}</td>
                        <td className="px-6 py-5 text-zinc-400 truncate max-w-xs">{item.hook}</td>
                        <td className="px-6 py-5">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${item.status === "posted" ? "bg-green-900/30 text-green-400" :
                                    item.status === "scheduled" ? "bg-blue-900/30 text-blue-400" :
                                        "bg-zinc-800 text-zinc-400"
                                }`}>
                                {item.status}
                            </span>
                        </td>
                        <td className="px-6 py-5">
                            <div className="flex items-center gap-2">
                                <div className="w-12 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500" style={{ width: `${item.score}%` }} />
                                </div>
                                <span className="text-sm font-bold text-blue-400">{item.score}</span>
                            </div>
                        </td>
                        <td className="px-6 py-5 text-zinc-300 font-mono">{item.views.toLocaleString()}</td>
                        <td className="px-6 py-5 text-emerald-400 font-bold">${item.revenue.toLocaleString()}</td>
                    </tr>
                ))}
            </div>
        </>
    );
}

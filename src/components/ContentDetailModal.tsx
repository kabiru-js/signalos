"use client";

import { updateContentStatus, updateContentRevenue, deleteContent } from "@/lib/actions";
import { useState } from "react";

interface Props {
    content: {
        id: string;
        topic: string;
        hook: string;
        status: string;
        score: number;
        views: number;
        likes: number;
        shares: number;
        revenue: number;
    };
    onClose: () => void;
}

export default function ContentDetailModal({ content, onClose }: Props) {
    const [status, setStatus] = useState(content.status);
    const [revenue, setRevenue] = useState(content.revenue.toString());
    const [saving, setSaving] = useState(false);
    const [deleting, setDeleting] = useState(false);

    const handleSave = async () => {
        setSaving(true);
        try {
            if (status !== content.status) await updateContentStatus(content.id, status);
            if (parseFloat(revenue) !== content.revenue) await updateContentRevenue(content.id, parseFloat(revenue) || 0);
            onClose();
        } catch (err) {
            console.error(err);
        } finally {
            setSaving(false);
        }
    };

    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this content?")) return;
        setDeleting(true);
        try {
            await deleteContent(content.id);
            onClose();
        } catch (err) {
            console.error(err);
        } finally {
            setDeleting(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-[2rem] w-full max-w-lg shadow-2xl">
                <h2 className="text-2xl font-bold mb-2">{content.topic}</h2>
                <p className="text-zinc-400 mb-6 leading-relaxed">{content.hook}</p>

                <div className="grid grid-cols-4 gap-4 mb-8">
                    <div className="p-3 rounded-xl bg-zinc-800 text-center">
                        <p className="text-[10px] text-zinc-500 uppercase font-bold">Score</p>
                        <p className="text-lg font-black text-blue-400">{content.score}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-zinc-800 text-center">
                        <p className="text-[10px] text-zinc-500 uppercase font-bold">Views</p>
                        <p className="text-lg font-black">{content.views}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-zinc-800 text-center">
                        <p className="text-[10px] text-zinc-500 uppercase font-bold">Likes</p>
                        <p className="text-lg font-black">{content.likes}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-zinc-800 text-center">
                        <p className="text-[10px] text-zinc-500 uppercase font-bold">Shares</p>
                        <p className="text-lg font-black">{content.shares}</p>
                    </div>
                </div>

                <div className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-2">Status</label>
                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none"
                        >
                            <option value="draft">Draft</option>
                            <option value="scheduled">Scheduled</option>
                            <option value="posted">Posted</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-2">Revenue ($)</label>
                        <input
                            type="number"
                            step="0.01"
                            min="0"
                            value={revenue}
                            onChange={(e) => setRevenue(e.target.value)}
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                        />
                    </div>
                </div>

                <div className="flex gap-3 mt-8">
                    <button
                        onClick={handleDelete}
                        disabled={deleting}
                        className="px-5 py-3 bg-red-900/30 hover:bg-red-900/50 text-red-400 rounded-xl font-bold transition-all disabled:opacity-50"
                    >
                        {deleting ? "Deleting..." : "Delete"}
                    </button>
                    <div className="flex-1" />
                    <button onClick={onClose} className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-xl font-bold transition-all">
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={saving}
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 rounded-xl font-bold transition-all shadow-lg shadow-blue-900/20"
                    >
                        {saving ? "Saving..." : "Save Changes"}
                    </button>
                </div>
            </div>
        </div>
    );
}

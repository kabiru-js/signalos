"use client";

import { createWorker } from "@/lib/actions";
import { useState } from "react";

export default function AddWorkerForm({ onClose }: { onClose: () => void }) {
    const [name, setName] = useState("");
    const [pending, setPending] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setPending(true);
        try {
            await createWorker(name);
            onClose();
        } catch (error) {
            console.error(error);
        } finally {
            setPending(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-[2rem] w-full max-w-md shadow-2xl">
                <h2 className="text-2xl font-bold mb-6">Add New Worker</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-2 italic">Worker Name</label>
                        <input
                            autoFocus
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                            placeholder="e.g. John Doe"
                        />
                    </div>
                    <div className="flex gap-4 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-xl font-bold transition-all"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={pending}
                            className="flex-1 px-6 py-3 bg-orange-600 hover:bg-orange-500 disabled:opacity-50 rounded-xl font-bold transition-all shadow-lg shadow-orange-900/20"
                        >
                            {pending ? "Creating..." : "Create Worker"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

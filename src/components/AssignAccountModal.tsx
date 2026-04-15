"use client";

import { assignWorkerToAccount } from "@/lib/actions";
import { useState } from "react";

interface Props {
    workerId: string;
    accounts: { id: string; name: string; platform: string }[];
    assignedIds: string[];
    onClose: () => void;
}

export default function AssignAccountModal({ workerId, accounts, assignedIds, onClose }: Props) {
    const [pending, setPending] = useState<string | null>(null);
    const available = accounts.filter((a) => !assignedIds.includes(a.id));

    const handleAssign = async (accountId: string) => {
        setPending(accountId);
        try {
            await assignWorkerToAccount(workerId, accountId);
            onClose();
        } catch (err) {
            console.error(err);
        } finally {
            setPending(null);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-[2rem] w-full max-w-md shadow-2xl">
                <h2 className="text-2xl font-bold mb-6">Assign Account</h2>
                {available.length === 0 ? (
                    <p className="text-zinc-500 italic py-4">All accounts are already assigned to this worker.</p>
                ) : (
                    <div className="space-y-3">
                        {available.map((acc) => (
                            <button
                                key={acc.id}
                                onClick={() => handleAssign(acc.id)}
                                disabled={pending === acc.id}
                                className="w-full p-4 rounded-xl bg-zinc-800 border border-zinc-700 hover:border-orange-500/50 text-left flex justify-between items-center transition-all disabled:opacity-50"
                            >
                                <div>
                                    <p className="font-bold">{acc.name}</p>
                                    <p className="text-xs text-zinc-500">{acc.platform}</p>
                                </div>
                                <span className="text-xs font-bold uppercase text-orange-400">
                                    {pending === acc.id ? "Assigning..." : "Assign →"}
                                </span>
                            </button>
                        ))}
                    </div>
                )}
                <button onClick={onClose} className="mt-6 w-full py-3 bg-zinc-800 hover:bg-zinc-700 rounded-xl font-bold transition-all">
                    Close
                </button>
            </div>
        </div>
    );
}

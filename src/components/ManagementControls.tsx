"use client";

import { useState } from "react";
import AddWorkerForm from "./AddWorkerForm";
import AddAccountForm from "./AddAccountForm";
import AssignAccountModal from "./AssignAccountModal";
import { unassignWorkerFromAccount } from "@/lib/actions";

interface Account { id: string; name: string; platform: string; }
interface WorkerData {
    id: string;
    name: string;
    productivity: number;
    accounts: { account: Account }[];
}

export default function ManagementControls({ allAccounts, workers }: { allAccounts: Account[]; workers: WorkerData[] }) {
    const [showWorkerForm, setShowWorkerForm] = useState(false);
    const [showAccountForm, setShowAccountForm] = useState(false);
    const [assigningWorker, setAssigningWorker] = useState<string | null>(null);

    const handleUnassign = async (workerId: string, accountId: string) => {
        if (!confirm("Remove this account assignment?")) return;
        await unassignWorkerFromAccount(workerId, accountId);
    };

    return (
        <>
            <div className="flex gap-3 mb-10">
                <button onClick={() => setShowAccountForm(true)} className="px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-xl font-semibold transition-all text-sm">
                    + Register Account
                </button>
                <button onClick={() => setShowWorkerForm(true)} className="px-5 py-2.5 bg-orange-600 hover:bg-orange-500 rounded-xl font-semibold shadow-lg shadow-orange-900/20 transition-all text-sm">
                    + Add Worker
                </button>
            </div>

            {showWorkerForm && <AddWorkerForm onClose={() => setShowWorkerForm(false)} />}
            {showAccountForm && <AddAccountForm onClose={() => setShowAccountForm(false)} />}
            {assigningWorker && (
                <AssignAccountModal
                    workerId={assigningWorker}
                    accounts={allAccounts}
                    assignedIds={workers.find((w) => w.id === assigningWorker)?.accounts.map((a) => a.account.id) || []}
                    onClose={() => setAssigningWorker(null)}
                />
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {workers.length === 0 && (
                    <div className="col-span-full py-20 text-center text-zinc-500 border-2 border-dashed border-zinc-800 rounded-3xl">
                        No workers registered yet.
                    </div>
                )}
                {workers.map((worker) => (
                    <div key={worker.id} className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-orange-500/30 transition-all group">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-xl font-black shadow-lg shadow-orange-900/40">
                                {worker.name[0]}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold group-hover:text-orange-400 transition-colors">{worker.name}</h3>
                                <p className="text-sm text-zinc-500 font-medium">Worker</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1.5">
                                    <span>Productivity</span>
                                    <span className="text-zinc-300">{worker.productivity}%</span>
                                </div>
                                <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-orange-500" style={{ width: `${worker.productivity}%` }} />
                                </div>
                            </div>
                            <div>
                                <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Assigned Accounts</p>
                                <div className="flex flex-wrap gap-2">
                                    {worker.accounts.map((wa) => (
                                        <span
                                            key={wa.account.id}
                                            onClick={() => handleUnassign(worker.id, wa.account.id)}
                                            title="Click to unassign"
                                            className="px-3 py-1 bg-zinc-800 border border-zinc-700 rounded-lg text-xs font-medium text-zinc-300 hover:border-red-500/50 hover:text-red-400 cursor-pointer transition-all"
                                        >
                                            {wa.account.name} ✕
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-zinc-800">
                            <button
                                onClick={() => setAssigningWorker(worker.id)}
                                className="w-full py-2.5 bg-zinc-800 hover:bg-zinc-700 rounded-xl text-sm font-semibold transition-colors"
                            >
                                + Assign Account
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

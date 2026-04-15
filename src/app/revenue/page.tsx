import { getRevenueData } from "@/lib/actions";
import { prisma } from "@/lib/prisma";

export default async function RevenueDashboard() {
    const data = await getRevenueData();
    const workers = await prisma.worker.findMany();

    const perAccount = data.accounts;
    const totalRevenue = data.totalRevenue;

    return (
        <div className="p-8 max-w-6xl mx-auto dark:bg-zinc-950 min-h-screen text-zinc-100">
            <div className="mb-10">
                <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                    SignalOS Revenue Engine
                </h1>
                <p className="text-zinc-400 mt-2">Connecting content output directly to revenue.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="md:col-span-2 p-8 rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 shadow-xl shadow-emerald-900/20">
                    <p className="text-emerald-100/70 text-sm font-medium uppercase tracking-wider">Total Revenue</p>
                    <h2 className="text-5xl font-black mt-2 text-white">${totalRevenue.toLocaleString()}</h2>
                    <div className="mt-6 flex items-center gap-2 text-emerald-100">
                        <span className="bg-emerald-500/30 px-2 py-1 rounded text-xs">Overall Performance</span>
                    </div>
                </div>
                <div className="p-6 rounded-3xl bg-zinc-900 border border-zinc-800">
                    <p className="text-zinc-500 text-sm font-medium uppercase tracking-wider">Active Workers</p>
                    <h2 className="text-3xl font-bold mt-1">{workers.length}</h2>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <h3 className="text-xl font-bold">Revenue by Account</h3>
                    <div className="space-y-4">
                        {perAccount.length === 0 && (
                            <p className="text-zinc-500 italic">No revenue data available yet.</p>
                        )}
                        {perAccount.map((acc: any) => (
                            <div key={acc.name} className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 flex justify-between items-center group hover:border-emerald-500/50 transition-all">
                                <div>
                                    <h4 className="font-bold text-lg">{acc.name}</h4>
                                    <p className="text-sm text-zinc-500">{acc.workersCount} workers assigned</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl font-black text-emerald-400">${acc.revenue.toLocaleString()}</p>
                                    <p className="text-xs text-zinc-500">
                                        {totalRevenue > 0 ? (acc.revenue / totalRevenue * 100).toFixed(0) : 0}% of total
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    <h3 className="text-xl font-bold">Worker Roster</h3>
                    <div className="rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden">
                        {workers.length === 0 && (
                            <p className="text-zinc-500 italic p-6">No workers registered yet.</p>
                        )}
                        {workers.map((worker: any, i: number) => (
                            <div key={worker.id} className={`p-5 flex items-center justify-between ${i !== 0 ? 'border-t border-zinc-800' : ''}`}>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-emerald-400">
                                        {worker.name[0]}
                                    </div>
                                    <div>
                                        <h4 className="font-bold">{worker.name}</h4>
                                        <div className="flex items-center gap-2 mt-1">
                                            <div className="w-24 h-1 bg-zinc-800 rounded-full overflow-hidden">
                                                <div className="h-full bg-emerald-500" style={{ width: `${worker.productivity}%` }}></div>
                                            </div>
                                            <span className="text-[10px] text-zinc-500 uppercase font-bold">{worker.productivity}% productivity</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right text-lg font-bold">
                                    ${worker.revenue.toLocaleString()}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

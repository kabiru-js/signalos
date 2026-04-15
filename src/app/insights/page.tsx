import { prisma } from "@/lib/prisma";

export default async function InsightsEngine() {
    const content = await prisma.content.findMany({ orderBy: { score: "desc" } });
    const accounts = await prisma.account.findMany({
        include: { content: { select: { revenue: true, views: true, score: true } } },
    });
    const workers = await prisma.worker.findMany({
        include: { content: { select: { revenue: true, views: true, score: true } } },
    });

    // Top hooks by score
    const topHooks = content.slice(0, 5);

    // Best accounts by revenue
    const accountStats = accounts
        .map((a) => ({
            name: a.name,
            platform: a.platform,
            revenue: a.content.reduce((s, c) => s + c.revenue, 0),
            views: a.content.reduce((s, c) => s + c.views, 0),
            avgScore: a.content.length > 0 ? Math.round(a.content.reduce((s, c) => s + c.score, 0) / a.content.length) : 0,
            posts: a.content.length,
        }))
        .sort((a, b) => b.revenue - a.revenue);

    // Best workers by revenue
    const workerStats = workers
        .map((w) => ({
            name: w.name,
            revenue: w.content.reduce((s, c) => s + c.revenue, 0),
            views: w.content.reduce((s, c) => s + c.views, 0),
            posts: w.content.length,
        }))
        .sort((a, b) => b.revenue - a.revenue);

    // Overall stats
    const totalPosts = content.length;
    const totalRevenue = content.reduce((s, c) => s + c.revenue, 0);
    const avgScore = totalPosts > 0 ? Math.round(content.reduce((s, c) => s + c.score, 0) / totalPosts) : 0;
    const revenuePerPost = totalPosts > 0 ? (totalRevenue / totalPosts).toFixed(2) : "0.00";

    return (
        <div className="p-8 max-w-6xl mx-auto min-h-screen">
            <div className="mb-10">
                <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Insights Engine
                </h1>
                <p className="text-zinc-400 mt-2">Discover top-performing hooks, high-ROI content, and productivity patterns.</p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
                    <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Total Posts</p>
                    <p className="text-3xl font-black mt-1">{totalPosts}</p>
                </div>
                <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
                    <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Total Revenue</p>
                    <p className="text-3xl font-black mt-1 text-emerald-400">${totalRevenue.toLocaleString()}</p>
                </div>
                <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
                    <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Avg Signal Score</p>
                    <p className="text-3xl font-black mt-1 text-blue-400">{avgScore}</p>
                </div>
                <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
                    <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">$ / Post</p>
                    <p className="text-3xl font-black mt-1">${revenuePerPost}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Top Hooks */}
                <div className="space-y-4">
                    <h3 className="text-lg font-bold flex items-center gap-2">🏆 Top Hooks by Score</h3>
                    {topHooks.length === 0 && <p className="text-zinc-600 italic">No content data yet.</p>}
                    {topHooks.map((c, i) => (
                        <div key={c.id} className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800">
                            <div className="flex items-start gap-3">
                                <span className={`text-sm font-black w-7 h-7 rounded-lg flex items-center justify-center ${i === 0 ? "bg-yellow-500/20 text-yellow-400" :
                                        i === 1 ? "bg-zinc-700 text-zinc-300" :
                                            "bg-zinc-800 text-zinc-500"
                                    }`}>{i + 1}</span>
                                <div className="flex-1">
                                    <p className="font-medium text-zinc-200">{c.hook}</p>
                                    <div className="flex gap-4 mt-2 text-xs text-zinc-500">
                                        <span>Score <strong className="text-blue-400">{c.score}</strong></span>
                                        <span>Views <strong className="text-zinc-300">{c.views.toLocaleString()}</strong></span>
                                        <span>Revenue <strong className="text-emerald-400">${c.revenue.toLocaleString()}</strong></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Account ROI */}
                <div className="space-y-4">
                    <h3 className="text-lg font-bold flex items-center gap-2">📊 Account ROI</h3>
                    {accountStats.length === 0 && <p className="text-zinc-600 italic">No accounts registered.</p>}
                    {accountStats.map((a) => (
                        <div key={a.name} className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 flex justify-between items-center">
                            <div>
                                <p className="font-bold">{a.name}</p>
                                <p className="text-xs text-zinc-500">{a.platform} · {a.posts} posts · Avg Score {a.avgScore}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-xl font-black text-emerald-400">${a.revenue.toLocaleString()}</p>
                                <p className="text-xs text-zinc-500">{a.views.toLocaleString()} views</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Worker Performance */}
                <div className="space-y-4 lg:col-span-2">
                    <h3 className="text-lg font-bold flex items-center gap-2">👥 Worker Performance Ranking</h3>
                    <div className="rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden">
                        {workerStats.length === 0 && <p className="text-zinc-600 italic p-6">No workers registered.</p>}
                        {workerStats.map((w, i) => (
                            <div key={w.name} className={`p-5 flex items-center justify-between ${i !== 0 ? "border-t border-zinc-800" : ""}`}>
                                <div className="flex items-center gap-4">
                                    <span className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-sm ${i === 0 ? "bg-yellow-500/20 text-yellow-400" : "bg-zinc-800 text-zinc-500"
                                        }`}>{i + 1}</span>
                                    <div>
                                        <p className="font-bold">{w.name}</p>
                                        <p className="text-xs text-zinc-500">{w.posts} posts · {w.views.toLocaleString()} views</p>
                                    </div>
                                </div>
                                <p className="text-xl font-black text-emerald-400">${w.revenue.toLocaleString()}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

import { prisma } from "@/lib/prisma";
import TrackerControls from "@/components/TrackerControls";

export default async function ContentTracker() {
    const content = await prisma.content.findMany({ orderBy: { createdAt: "desc" } });

    const totalViews = content.reduce((sum, item) => sum + item.views, 0);
    const totalRevenue = content.reduce((sum, item) => sum + item.revenue, 0);
    const avgScore = content.length > 0
        ? (content.reduce((sum, item) => sum + item.score, 0) / content.length).toFixed(1)
        : "0.0";

    // Serialize for the client component
    const serialized = content.map((c) => ({
        id: c.id, topic: c.topic, hook: c.hook, status: c.status,
        score: c.score, views: c.views, likes: c.likes, shares: c.shares, revenue: c.revenue,
    }));

    return (
        <div className="p-8 max-w-6xl mx-auto min-h-screen">
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Content Tracker
                    </h1>
                    <p className="text-zinc-400 mt-2">Click any row to edit status, revenue, or delete.</p>
                </div>
                <TrackerControls content={serialized} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
                    <p className="text-zinc-500 text-sm font-medium uppercase tracking-wider">Total Posts</p>
                    <h2 className="text-3xl font-bold mt-1">{content.length}</h2>
                </div>
                <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
                    <p className="text-zinc-500 text-sm font-medium uppercase tracking-wider">Avg Score</p>
                    <h2 className="text-3xl font-bold mt-1">{avgScore}</h2>
                </div>
                <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
                    <p className="text-zinc-500 text-sm font-medium uppercase tracking-wider">Total Views</p>
                    <h2 className="text-3xl font-bold mt-1">{totalViews.toLocaleString()}</h2>
                </div>
                <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
                    <p className="text-zinc-500 text-sm font-medium uppercase tracking-wider">Total Revenue</p>
                    <h2 className="text-3xl font-bold mt-1 text-emerald-400">${totalRevenue.toLocaleString()}</h2>
                </div>
            </div>

            <div className="rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl">
                <table className="w-full text-left">
                    <thead className="bg-zinc-800/50">
                        <tr>
                            <th className="px-6 py-4 text-zinc-400 font-semibold text-sm">Topic</th>
                            <th className="px-6 py-4 text-zinc-400 font-semibold text-sm">Hook</th>
                            <th className="px-6 py-4 text-zinc-400 font-semibold text-sm">Status</th>
                            <th className="px-6 py-4 text-zinc-400 font-semibold text-sm">Score</th>
                            <th className="px-6 py-4 text-zinc-400 font-semibold text-sm">Views</th>
                            <th className="px-6 py-4 text-zinc-400 font-semibold text-sm">Revenue</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800">
                        {content.length === 0 && (
                            <tr><td colSpan={6} className="px-6 py-16 text-center text-zinc-600">No content yet. Click &quot;+ New Post&quot; to create your first entry.</td></tr>
                        )}
                        {serialized.map((item) => (
                            <tr key={item.id} className="hover:bg-zinc-800/30 transition-colors cursor-pointer">
                                <td className="px-6 py-5 font-medium">{item.topic}</td>
                                <td className="px-6 py-5 text-zinc-400 truncate max-w-xs">{item.hook}</td>
                                <td className="px-6 py-5">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${item.status === "posted" ? "bg-green-900/30 text-green-400" :
                                            item.status === "scheduled" ? "bg-blue-900/30 text-blue-400" :
                                                "bg-zinc-800 text-zinc-400"
                                        }`}>{item.status}</span>
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
                    </tbody>
                </table>
            </div>
        </div>
    );
}

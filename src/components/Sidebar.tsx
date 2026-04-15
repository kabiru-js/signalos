"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

const navItems = [
    { label: "Dashboard", path: "/dashboard", icon: "⚡" },
    { label: "Hook Engine", path: "/hooks", icon: "🎣" },
    { label: "Content Tracker", path: "/tracker", icon: "📊" },
    { label: "Revenue", path: "/revenue", icon: "💰" },
    { label: "Management", path: "/management", icon: "👥" },
    { label: "Insights", path: "/insights", icon: "🔍" },
];

export default function Sidebar() {
    const pathname = usePathname();
    const { data: session } = useSession();

    // Don't render sidebar on login page or landing page
    if (pathname === "/login" || pathname === "/" || pathname === "/register") return null;

    const orgName = (session?.user as any)?.organizationName || "Workplace";
    const userName = session?.user?.name || "Member";

    return (
        <aside className="w-64 bg-zinc-950 border-r border-zinc-800 flex flex-col min-h-screen sticky top-0">
            <div className="p-6 border-b border-zinc-800">
                <div className="flex items-center gap-2 mb-1">
                    <span className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-[10px] font-black text-white">S</span>
                    <h1 className="text-sm font-black tracking-tight text-white uppercase truncate">{orgName}</h1>
                </div>
                <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold ml-8">SignalOS v1.0</p>
            </div>

            <nav className="flex-1 p-4 space-y-1">
                {navItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${isActive
                                ? "bg-white/10 text-white"
                                : "text-zinc-500 hover:text-zinc-200 hover:bg-white/5"
                                }`}
                        >
                            <span className="text-base">{item.icon}</span>
                            {item.label}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 space-y-3 border-t border-zinc-800">
                <div className="flex items-center gap-3 px-4 py-3">
                    <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs font-bold text-zinc-400">
                        {userName[0]}
                    </div>
                    <div className="overflow-hidden">
                        <p className="text-xs font-bold text-white truncate">{userName}</p>
                        <p className="text-[10px] text-zinc-500 truncate">{session?.user?.email}</p>
                    </div>
                </div>
                <button
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className="w-full px-4 py-2.5 text-xs text-zinc-500 hover:text-red-400 hover:bg-red-900/10 rounded-xl font-bold transition-all text-left flex items-center gap-2"
                >
                    <span>🚪</span> Sign Out
                </button>
            </div>
        </aside>
    );
}

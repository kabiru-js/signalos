"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const navItems = [
    { label: "Dashboard", path: "/", icon: "⚡" },
    { label: "Hook Engine", path: "/hooks", icon: "🎣" },
    { label: "Content Tracker", path: "/tracker", icon: "📊" },
    { label: "Revenue", path: "/revenue", icon: "💰" },
    { label: "Management", path: "/management", icon: "👥" },
    { label: "Insights", path: "/insights", icon: "🔍" },
];

export default function Sidebar() {
    const pathname = usePathname();

    // Don't render sidebar on login page
    if (pathname === "/login") return null;

    return (
        <aside className="w-64 bg-zinc-950 border-r border-zinc-800 flex flex-col min-h-screen sticky top-0">
            <div className="p-6 border-b border-zinc-800">
                <h1 className="text-xl font-black tracking-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Signal</span>
                    <span className="text-white">OS</span>
                </h1>
                <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] mt-1 font-bold">Content Distribution OS</p>
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
                <div className="px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800">
                    <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">AI Brain</p>
                    <p className="text-sm text-emerald-400 font-bold mt-1">● Grok Online</p>
                </div>
                <button
                    onClick={() => signOut({ callbackUrl: "/login" })}
                    className="w-full px-4 py-2.5 text-sm text-zinc-500 hover:text-red-400 hover:bg-red-900/10 rounded-xl font-semibold transition-all"
                >
                    Sign Out
                </button>
            </div>
        </aside>
    );
}

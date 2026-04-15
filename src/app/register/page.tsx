"use client";

import { registerUser } from "@/lib/actions";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [orgName, setOrgName] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            await registerUser({ name, email, password, orgName });
            router.push("/login?registered=true");
        } catch (err: any) {
            setError(err.message || "Registration failed. Please try again.");
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-950 p-4">
            <div className="w-full max-w-lg">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-black tracking-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Signal</span>
                        <span className="text-white">OS</span>
                    </h1>
                    <p className="text-zinc-500 text-sm mt-3 uppercase tracking-[0.2em] font-bold">Start your 14-day free trial</p>
                </div>

                <form onSubmit={handleSubmit} className="bg-zinc-900 border border-zinc-800 p-8 md:p-10 rounded-[2.5rem] shadow-2xl space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest px-1">Full Name</label>
                            <input
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-white placeholder:text-zinc-600"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest px-1">Work Email</label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-white placeholder:text-zinc-600"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest px-1">Organization Name</label>
                        <input
                            required
                            value={orgName}
                            onChange={(e) => setOrgName(e.target.value)}
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-white placeholder:text-zinc-600"
                            placeholder="Acme Content Agency"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest px-1">Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-white placeholder:text-zinc-600"
                            placeholder="••••••••"
                        />
                    </div>

                    {error && (
                        <div className="p-4 rounded-2xl bg-red-900/20 border border-red-900/30 text-red-400 text-sm font-medium">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 rounded-2xl font-black text-lg transition-all shadow-xl shadow-blue-500/10 text-white"
                    >
                        {loading ? "Creating your OS..." : "Create Workspace"}
                    </button>

                    <p className="text-center text-zinc-500 text-sm">
                        Already have an account? <Link href="/login" className="text-blue-400 font-bold hover:underline">Sign In</Link>
                    </p>
                </form>

                <p className="text-center text-zinc-700 text-[10px] mt-12 uppercase tracking-widest font-bold">
                    Join 500+ elite content agencies scaling with SignalOS
                </p>
            </div>
        </div>
    );
}

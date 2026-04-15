"use client";

import { signIn } from "next-auth/react";
import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const registered = searchParams.get("registered");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        const result = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        if (result?.error) {
            setError("Invalid email or password. Please try again.");
            setLoading(false);
        } else {
            router.push("/dashboard");
            router.refresh();
        }
    };

    return (
        <div className="w-full max-w-md">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-black tracking-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Signal</span>
                    <span className="text-white">OS</span>
                </h1>
                <p className="text-zinc-500 text-sm mt-2 uppercase tracking-[0.2em] font-bold">Sign in to your workspace</p>
            </div>

            {registered && !error && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-900/20 border border-emerald-900/30 text-emerald-400 text-sm font-medium animate-fade-in">
                    Registration successful! Please sign in with your credentials.
                </div>
            )}

            <form onSubmit={handleSubmit} className="bg-zinc-900 border border-zinc-800 p-8 rounded-[2.5rem] shadow-2xl space-y-6">
                <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest px-1">Email Address</label>
                    <input
                        type="email"
                        autoFocus
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-white"
                        placeholder="john@example.com"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest px-1">Password</label>
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all text-white"
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
                    {loading ? "Verifying..." : "Sign In"}
                </button>

                <p className="text-center text-zinc-500 text-sm">
                    Don't have an account? <Link href="/register" className="text-blue-400 font-bold hover:underline">Register Now</Link>
                </p>
            </form>

            <p className="text-center text-zinc-700 text-[10px] mt-12 uppercase tracking-widest font-bold">
                Access authorized for SignalOS members only
            </p>
        </div>
    );
}

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-950 p-4">
            <Suspense fallback={<div className="text-zinc-500 animate-pulse">Loading...</div>}>
                <LoginForm />
            </Suspense>
        </div>
    );
}

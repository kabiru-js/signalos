import Link from "next/link";
import { auth } from "@/lib/auth";

export default async function LandingPage() {
    const session = await auth();
    const isLoggedIn = !!session;

    return (
        <div className="relative min-h-screen bg-zinc-950 text-zinc-100 overflow-x-hidden selection:bg-blue-500/30">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[80%] md:w-[60%] h-[60%] bg-blue-600/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[80%] md:w-[60%] h-[60%] bg-purple-600/10 blur-[120px] rounded-full" />
            </div>

            {/* Header */}
            <header className="relative z-[100] max-w-7xl mx-auto px-6 py-10 flex justify-between items-center bg-transparent">
                <div className="flex items-center gap-2">
                    <h1 className="text-xl md:text-2xl font-black tracking-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Signal</span>
                        <span className="text-white">OS</span>
                    </h1>
                </div>
                <div className="flex items-center gap-6 md:gap-8">
                    {isLoggedIn ? (
                        <a
                            href="/dashboard"
                            className="px-6 py-2.5 bg-zinc-900 border border-zinc-700 text-white font-bold rounded-full text-xs md:text-sm hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95"
                        >
                            Go to Dashboard
                        </a>
                    ) : (
                        <>
                            <a
                                href="/login"
                                className="text-xs md:text-sm font-bold text-zinc-400 hover:text-white transition-all py-2 px-1"
                            >
                                Sign In
                            </a>
                            <a
                                href="/login"
                                className="px-5 md:px-6 py-2.5 bg-white text-black font-black rounded-full text-xs md:text-sm hover:bg-zinc-200 transition-all shadow-lg hover:scale-105 active:scale-95"
                            >
                                Get Started
                            </a>
                        </>
                    )}
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative z-50 max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-24 md:pb-32 text-center animate-fade-in">
                <div className="inline-block px-4 py-1.5 mb-10 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                    New: Signal Scoring Engine v2.0
                </div>
                <h2 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.95] md:leading-[0.9]">
                    The OS for <br className="hidden sm:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-orange-500">
                        Content Domination.
                    </span>
                </h2>
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 font-medium leading-relaxed mb-14 px-4">
                    Stop guessing. Track every hook, score every signal, and connect your content output directly to revenue. AI-powered intelligence for the creator economy.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 px-6 sm:px-0">
                    <a
                        href={isLoggedIn ? "/dashboard" : "/login"}
                        className="w-full sm:w-auto px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-black rounded-2xl text-lg hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-all transform hover:-translate-y-1 active:translate-y-0 text-center"
                    >
                        {isLoggedIn ? "Open Dashboard" : "Launch Now"}
                    </a>
                    <a
                        href="#features"
                        className="w-full sm:w-auto px-12 py-5 bg-zinc-900 border border-zinc-700 text-white font-bold rounded-2xl text-lg hover:bg-zinc-800 transition-all text-center"
                    >
                        Capabilities
                    </a>
                </div>
            </section>

            {/* Rest of features... I'll optimize them for mobile too */}
            <section id="features" className="relative z-50 max-w-7xl mx-auto px-6 py-24 md:py-32 border-t border-zinc-900">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { tag: "🎣", title: "Hook Intelligence", desc: "Generate high-converting hooks powered by Grok AI. Tested against millions of data points." },
                        { tag: "📉", title: "Signal Scoring", desc: "Know before you post. Predict engagement based on emotion, novelty, and clarity." },
                        { tag: "💰", title: "Revenue Engine", desc: "Map every view and like back to real dollar revenue across all accounts." }
                    ].map((f, i) => (
                        <div key={i} className="p-10 rounded-[2.5rem] bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm group hover:border-zinc-500/30 transition-all">
                            <div className="w-14 h-14 bg-zinc-800 border border-zinc-700 rounded-2xl flex items-center justify-center text-2xl mb-8 group-hover:scale-110 transition-transform">{f.tag}</div>
                            <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                            <p className="text-zinc-500 leading-relaxed font-medium">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <footer className="relative z-50 max-w-7xl mx-auto px-6 py-16 md:py-24 border-t border-zinc-900 text-center">
                <p className="text-zinc-600 text-sm font-medium tracking-wide">© 2026 SignalOS. Built for elite creators.</p>
            </footer>
        </div>
    );
}

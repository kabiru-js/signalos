import Link from "next/link";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
            </div>

            {/* Header */}
            <header className="relative z-10 max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-black tracking-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Signal</span>
                        <span className="text-white">OS</span>
                    </h1>
                </div>
                <div className="flex items-center gap-6">
                    <Link href="/login" className="text-sm font-semibold text-zinc-400 hover:text-white transition-colors">
                        Sign In
                    </Link>
                    <Link
                        href="/login"
                        className="px-5 py-2.5 bg-white text-black font-bold rounded-full text-sm hover:bg-zinc-200 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-white/5"
                    >
                        Get Started
                    </Link>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32 text-center">
                <div className="inline-block px-4 py-1.5 mb-8 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-bold uppercase tracking-widest text-zinc-500">
                    New: Signal Scoring Engine v2.0
                </div>
                <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
                    The OS for <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-orange-500 animate-gradient">
                        Content Domination.
                    </span>
                </h2>
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 font-medium leading-relaxed mb-12">
                    Stop guessing. Track every hook, score every signal, and connect your content output directly to revenue. AI-powered intelligence for the modern creator economy.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <Link
                        href="/login"
                        className="w-full md:w-auto px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-black rounded-2xl text-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all transform hover:-translate-y-1 active:translate-y-0"
                    >
                        Launch Dashboard
                    </Link>
                    <Link
                        href="#features"
                        className="w-full md:w-auto px-10 py-5 bg-zinc-900 border border-zinc-800 text-white font-bold rounded-2xl text-lg hover:bg-zinc-800 transition-all"
                    >
                        View Features
                    </Link>
                </div>
            </section>

            {/* Features Grid */}
            <section id="features" className="relative z-10 max-w-7xl mx-auto px-6 py-32 border-t border-zinc-900">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-10 rounded-[2.5rem] bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm group hover:border-blue-500/30 transition-all">
                        <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">🎣</div>
                        <h3 className="text-2xl font-bold mb-4">Hook Intelligence</h3>
                        <p className="text-zinc-500 leading-relaxed">Generate high-converting hooks powered by Grok AI. Tested against millions of data points to stop the scroll.</p>
                    </div>
                    <div className="p-10 rounded-[2.5rem] bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm group hover:border-purple-500/30 transition-all">
                        <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">📉</div>
                        <h3 className="text-2xl font-bold mb-4">Signal Scoring</h3>
                        <p className="text-zinc-500 leading-relaxed">Know before you post. Our proprietary algorithm predicts engagement based on emotion, novelty, and clarity.</p>
                    </div>
                    <div className="p-10 rounded-[2.5rem] bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm group hover:border-orange-500/30 transition-all">
                        <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">💰</div>
                        <h3 className="text-2xl font-bold mb-4">Revenue Engine</h3>
                        <p className="text-zinc-500 leading-relaxed">The final word on performance. Map every view and like back to real dollar revenue across all accounts.</p>
                    </div>
                </div>
            </section>

            {/* Social Proof / Numbers */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 bg-zinc-900/30 rounded-[3rem] border border-zinc-800 mb-32">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <p className="text-4xl md:text-5xl font-black mb-2 text-blue-400">12M+</p>
                        <p className="text-xs uppercase tracking-widest font-bold text-zinc-500">Hooks Scored</p>
                    </div>
                    <div>
                        <p className="text-4xl md:text-5xl font-black mb-2 text-purple-400">$2.4M</p>
                        <p className="text-xs uppercase tracking-widest font-bold text-zinc-500">Revenue Tracked</p>
                    </div>
                    <div>
                        <p className="text-4xl md:text-5xl font-black mb-2 text-orange-400">98%</p>
                        <p className="text-xs uppercase tracking-widest font-bold text-zinc-500">AI Accuracy</p>
                    </div>
                    <div>
                        <p className="text-4xl md:text-5xl font-black mb-2 text-emerald-400">24/7</p>
                        <p className="text-xs uppercase tracking-widest font-bold text-zinc-500">Worker Uptime</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 max-w-7xl mx-auto px-6 py-20 border-t border-zinc-900 text-center">
                <h1 className="text-xl font-black mb-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Signal</span>
                    <span className="text-white">OS</span>
                </h1>
                <p className="text-zinc-600 text-sm">© 2026 SignalOS. Built for the elite content economy.</p>
            </footer>
        </div>
    );
}

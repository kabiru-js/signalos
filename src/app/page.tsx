import Link from "next/link";

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100 overflow-x-hidden">
            {/* Background Decorative Elements */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[60%] md:w-[40%] h-[40%] bg-blue-500/10 blur-[80px] md:blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[60%] md:w-[40%] h-[40%] bg-purple-500/10 blur-[80px] md:blur-[120px] rounded-full" />
            </div>

            {/* Header */}
            <header className="relative z-30 max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <h1 className="text-xl md:text-2xl font-black tracking-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Signal</span>
                        <span className="text-white">OS</span>
                    </h1>
                </div>
                <div className="flex items-center gap-4 md:gap-6">
                    <Link href="/login" className="text-xs md:text-sm font-semibold text-zinc-400 hover:text-white transition-colors cursor-pointer">
                        Sign In
                    </Link>
                    <Link
                        href="/login"
                        className="px-4 md:px-5 py-2 md:py-2.5 bg-white text-black font-bold rounded-full text-xs md:text-sm hover:bg-zinc-200 transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-white/5 cursor-pointer"
                    >
                        Get Started
                    </Link>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative z-20 max-w-7xl mx-auto px-4 md:px-6 pt-12 md:pt-20 pb-20 md:pb-32 text-center animate-fade-in">
                <div className="inline-block px-3 py-1 mb-6 md:mb-8 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-500">
                    New: Signal Scoring Engine v2.0
                </div>
                <h2 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-6 md:mb-8 leading-[0.95] md:leading-[0.9]">
                    The OS for <br className="hidden sm:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-orange-500">
                        Content Domination.
                    </span>
                </h2>
                <p className="max-w-2xl mx-auto text-base md:text-xl text-zinc-400 font-medium leading-relaxed mb-8 md:mb-12 px-2">
                    Stop guessing. Track every hook, score every signal, and connect your content output directly to revenue. AI-powered intelligence for the modern creator economy.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0">
                    <Link
                        href="/login"
                        className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-black rounded-2xl text-base md:text-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all transform hover:-translate-y-1 active:translate-y-0 cursor-pointer text-center"
                    >
                        Launch Dashboard
                    </Link>
                    <Link
                        href="#features"
                        className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-zinc-900 border border-zinc-800 text-white font-bold rounded-2xl text-base md:text-lg hover:bg-zinc-800 transition-all cursor-pointer text-center"
                    >
                        View Features
                    </Link>
                </div>
            </section>

            {/* Features Grid */}
            <section id="features" className="relative z-20 max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-32 border-t border-zinc-900">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    <div className="p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm group hover:border-blue-500/30 transition-all">
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center text-xl md:text-2xl mb-6 group-hover:scale-110 transition-transform">🎣</div>
                        <h3 className="text-xl md:text-2xl font-bold mb-4">Hook Intelligence</h3>
                        <p className="text-sm md:text-base text-zinc-500 leading-relaxed">Generate high-converting hooks powered by Grok AI. Tested against millions of data points to stop the scroll.</p>
                    </div>
                    <div className="p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm group hover:border-purple-500/30 transition-all">
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center text-xl md:text-2xl mb-6 group-hover:scale-110 transition-transform">📉</div>
                        <h3 className="text-xl md:text-2xl font-bold mb-4">Signal Scoring</h3>
                        <p className="text-sm md:text-base text-zinc-500 leading-relaxed">Know before you post. Our proprietary algorithm predicts engagement based on emotion, novelty, and clarity.</p>
                    </div>
                    <div className="p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm group hover:border-orange-500/30 transition-all">
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center text-xl md:text-2xl mb-6 group-hover:scale-110 transition-transform">💰</div>
                        <h3 className="text-xl md:text-2xl font-bold mb-4">Revenue Engine</h3>
                        <p className="text-sm md:text-base text-zinc-500 leading-relaxed">The final word on performance. Map every view and like back to real dollar revenue across all accounts.</p>
                    </div>
                </div>
            </section>

            {/* Social Proof / Numbers */}
            <section className="relative z-20 max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20 bg-zinc-900/30 rounded-[2rem] md:rounded-[3rem] border border-zinc-800 mb-20 md:mb-32 mx-4 md:mx-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
                    <div>
                        <p className="text-3xl md:text-5xl font-black mb-2 text-blue-400">12M+</p>
                        <p className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-zinc-500">Hooks Scored</p>
                    </div>
                    <div>
                        <p className="text-3xl md:text-5xl font-black mb-2 text-purple-400">$2.4M</p>
                        <p className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-zinc-500">Revenue Tracked</p>
                    </div>
                    <div>
                        <p className="text-3xl md:text-5xl font-black mb-2 text-orange-400">98%</p>
                        <p className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-zinc-500">AI Accuracy</p>
                    </div>
                    <div>
                        <p className="text-3xl md:text-5xl font-black mb-2 text-emerald-400">24/7</p>
                        <p className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-zinc-500">Worker Uptime</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-20 max-w-7xl mx-auto px-6 py-12 md:py-20 border-t border-zinc-900 text-center">
                <h1 className="text-lg md:text-xl font-black mb-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Signal</span>
                    <span className="text-white">OS</span>
                </h1>
                <p className="text-zinc-600 text-xs md:text-sm">© 2026 SignalOS. Built for the elite content economy.</p>
            </footer>
        </div>
    );
}

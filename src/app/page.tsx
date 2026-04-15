import Link from "next/link";

export default function LandingPage() {
    return (
        <div className="relative min-h-screen bg-zinc-950 text-zinc-100 overflow-x-hidden selection:bg-blue-500/30">
            {/* Background Decorative Elements - Changed to Absolute inside Relative container */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse" />
            </div>

            {/* Header - Increased Z-index and added pointer-events-auto */}
            <header className="relative z-[100] max-w-7xl mx-auto px-6 py-10 flex justify-between items-center pointer-events-auto">
                <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-black tracking-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Signal</span>
                        <span className="text-white">OS</span>
                    </h1>
                </div>
                <div className="flex items-center gap-8">
                    <Link
                        href="/login"
                        className="relative z-[101] text-sm font-bold text-zinc-400 hover:text-white transition-all cursor-pointer py-2 px-4 pointer-events-auto"
                    >
                        Sign In
                    </Link>
                    <Link
                        href="/login"
                        className="relative z-[101] px-6 py-3 bg-white text-black font-black rounded-full text-sm hover:bg-zinc-200 transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] cursor-pointer pointer-events-auto"
                    >
                        Get Started
                    </Link>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative z-50 max-w-7xl mx-auto px-6 pt-20 pb-32 text-center animate-fade-in pointer-events-none">
                <div className="pointer-events-auto">
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
                        Stop guessing. Track every hook, score every signal, and connect your content output directly to revenue. AI-powered intelligence for the modern creator economy.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 px-6 sm:px-0">
                        <Link
                            href="/login"
                            className="w-full sm:w-auto px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-black rounded-2xl text-lg hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-all transform hover:-translate-y-1 active:translate-y-0 cursor-pointer text-center pointer-events-auto"
                        >
                            Launch Dashboard
                        </Link>
                        <Link
                            href="#features"
                            className="w-full sm:w-auto px-12 py-5 bg-zinc-900 border border-zinc-700 text-white font-bold rounded-2xl text-lg hover:bg-zinc-800 transition-all cursor-pointer text-center pointer-events-auto"
                        >
                            View Features
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section id="features" className="relative z-50 max-w-7xl mx-auto px-6 py-32 border-t border-zinc-900">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-10 rounded-[2.5rem] bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm group hover:border-blue-500/30 transition-all">
                        <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center text-2xl mb-8 group-hover:scale-110 transition-transform">🎣</div>
                        <h3 className="text-2xl font-bold mb-4">Hook Intelligence</h3>
                        <p className="text-zinc-500 leading-relaxed font-medium">Generate high-converting hooks powered by Grok AI. Tested against millions of data points to stop the scroll.</p>
                    </div>
                    <div className="p-10 rounded-[2.5rem] bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm group hover:border-purple-500/30 transition-all">
                        <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center text-2xl mb-8 group-hover:scale-110 transition-transform">📉</div>
                        <h3 className="text-2xl font-bold mb-4">Signal Scoring</h3>
                        <p className="text-zinc-500 leading-relaxed font-medium">Know before you post. Our proprietary algorithm predicts engagement based on emotion, novelty, and clarity.</p>
                    </div>
                    <div className="p-10 rounded-[2.5rem] bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm group hover:border-orange-500/30 transition-all">
                        <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center text-2xl mb-8 group-hover:scale-110 transition-transform">💰</div>
                        <h3 className="text-2xl font-bold mb-4">Revenue Engine</h3>
                        <p className="text-zinc-500 leading-relaxed font-medium">The final word on performance. Map every view and like back to real dollar revenue across all accounts.</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-50 max-w-7xl mx-auto px-6 py-20 border-t border-zinc-900 text-center">
                <h1 className="text-xl font-black mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Signal</span>
                    <span className="text-white">OS</span>
                </h1>
                <p className="text-zinc-600 text-sm font-medium tracking-wide">© 2026 SignalOS. Built for the elite content economy.</p>
            </footer>
        </div>
    );
}

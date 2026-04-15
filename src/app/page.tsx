import Link from "next/link";

export default function LandingPage() {
    return (
        <div className="relative min-h-screen bg-zinc-950 text-zinc-100 flex flex-col">
            {/* 
        DEBUG VERSION: 
        1. Simplified Header positioning
        2. Standard <a> tags for core CTAs (fallback for any Link hydration issues)
        3. Background at the bottom of the DOM
      */}

            {/* Simplified Header */}
            <header className="relative z-[999] max-w-7xl mx-auto w-full px-6 py-10 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-black tracking-tight cursor-default">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Signal</span>
                        <span className="text-white">OS</span>
                    </h1>
                </div>
                <div className="flex items-center gap-8">
                    {/* Using <a> tags for maximum compatibility in this debug phase */}
                    <a
                        href="/login"
                        className="text-sm font-bold text-zinc-400 hover:text-white transition-all cursor-pointer py-2 px-4 inline-block"
                    >
                        Sign In
                    </a>
                    <a
                        href="/login"
                        className="px-6 py-3 bg-white text-black font-black rounded-full text-sm hover:bg-zinc-200 transition-all transform hover:scale-105 active:scale-95 shadow-xl inline-block text-center"
                    >
                        Get Started
                    </a>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32 text-center animate-fade-in flex-1">
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
                    <a
                        href="/login"
                        className="w-full sm:w-auto px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-black rounded-2xl text-lg hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-all transform hover:-translate-y-1 active:translate-y-0 text-center inline-block"
                    >
                        Launch Dashboard
                    </a>
                    <Link
                        href="#features"
                        className="w-full sm:w-auto px-12 py-5 bg-zinc-900 border border-zinc-700 text-white font-bold rounded-2xl text-lg hover:bg-zinc-800 transition-all text-center inline-block"
                    >
                        View Features
                    </Link>
                </div>
            </section>

            {/* Features Grid */}
            <section id="features" className="relative z-10 max-w-7xl mx-auto px-6 py-32 border-t border-zinc-900">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-10 rounded-[2.5rem] bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm group transition-all">
                        <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center text-2xl mb-8">🎣</div>
                        <h3 className="text-2xl font-bold mb-4">Hook Intelligence</h3>
                        <p className="text-zinc-500 leading-relaxed font-medium">Generate high-converting hooks powered by Grok AI. Tested against millions of data points to stop the scroll.</p>
                    </div>
                    <div className="p-10 rounded-[2.5rem] bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm group transition-all">
                        <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center text-2xl mb-8">📉</div>
                        <h3 className="text-2xl font-bold mb-4">Signal Scoring</h3>
                        <p className="text-zinc-500 leading-relaxed font-medium">Know before you post. Our proprietary algorithm predicts engagement based on emotion, novelty, and clarity.</p>
                    </div>
                    <div className="p-10 rounded-[2.5rem] bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm group transition-all">
                        <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center text-2xl mb-8">💰</div>
                        <h3 className="text-2xl font-bold mb-4">Revenue Engine</h3>
                        <p className="text-zinc-500 leading-relaxed font-medium">The final word on performance. Map every view and like back to real dollar revenue across all accounts.</p>
                    </div>
                </div>
            </section>

            {/* Background Decorative Elements - Moved to the bottom of the DOM */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[10%] w-[50%] h-[50%] bg-purple-600/5 blur-[120px] rounded-full" />
            </div>

            <footer className="relative z-10 max-w-7xl mx-auto px-6 py-20 border-t border-zinc-900 text-center">
                <p className="text-zinc-600 text-sm font-medium tracking-wide">© 2026 SignalOS. Built for the elite content economy.</p>
            </footer>
        </div>
    );
}

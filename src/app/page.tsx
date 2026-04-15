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
                                href="/register"
                                className="px-5 md:px-6 py-2.5 bg-white text-black font-black rounded-full text-xs md:text-sm hover:bg-zinc-200 transition-all shadow-lg hover:scale-105 active:scale-95"
                            >
                                Get Started
                            </a>
                        </>
                    )}
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative z-50 max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-24 md:pb-32 text-center animate-fade-in text-balance">
                <div className="inline-block px-4 py-1.5 mb-10 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
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
                        href={isLoggedIn ? "/dashboard" : "/register"}
                        className="w-full sm:w-auto px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-black rounded-2xl text-lg hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-all transform hover:-translate-y-1 active:translate-y-0 text-center"
                    >
                        {isLoggedIn ? "Open Dashboard" : "Start 14-Day Free Trial"}
                    </a>
                    <a
                        href="#pricing"
                        className="w-full sm:w-auto px-12 py-5 bg-zinc-900 border border-zinc-700 text-white font-bold rounded-2xl text-lg hover:bg-zinc-800 transition-all text-center"
                    >
                        View Pricing
                    </a>
                </div>
            </section>

            {/* Social Proof */}
            <div className="relative z-50 py-10 border-y border-zinc-900 bg-zinc-950/50 backdrop-blur-xl">
                <p className="text-center text-[10px] uppercase tracking-[0.4em] font-black text-zinc-600 mb-6">Trusted by elite agencies worldwide</p>
                <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 opacity-30 grayscale invert">
                    <div className="font-black text-2xl">FORBES</div>
                    <div className="font-black text-2xl">TECHCRUNCH</div>
                    <div className="font-black text-2xl">WIRED</div>
                    <div className="font-black text-2xl">THE VERGE</div>
                </div>
            </div>

            {/* Features Grid */}
            <section id="features" className="relative z-50 max-w-7xl mx-auto px-6 py-24 md:py-32">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { tag: "🎣", title: "Hook Intelligence", desc: "Generate high-converting hooks powered by Grok AI. Tested against millions of data points." },
                        { tag: "📉", title: "Signal Scoring", desc: "Know before you post. Predict engagement based on emotion, novelty, and clarity." },
                        { tag: "💰", title: "Revenue Engine", desc: "Map every view and like back to real dollar revenue across all accounts." }
                    ].map((f, i) => (
                        <div key={i} className="p-10 rounded-[3rem] bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm group hover:border-blue-500/20 transition-all">
                            <div className="w-14 h-14 bg-zinc-800 border border-zinc-700 rounded-2xl flex items-center justify-center text-2xl mb-8 group-hover:scale-110 transition-transform">{f.tag}</div>
                            <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                            <p className="text-zinc-500 leading-relaxed font-medium">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="relative z-50 max-w-7xl mx-auto px-6 py-24 md:py-32 border-t border-zinc-900">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-balance">Simple, Transparent <br />Pricing for Scaling.</h2>
                    <p className="text-zinc-500 text-lg font-medium">Join 500+ agencies using SignalOS to dominate the attention economy.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Starter Plan */}
                    <div className="p-10 rounded-[3rem] bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm flex flex-col">
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-black">$49</span>
                                <span className="text-zinc-500 font-bold">/mo</span>
                            </div>
                        </div>
                        <ul className="space-y-4 mb-10 flex-1">
                            {["Up to 5 Workers", "Unlimited Accounts", "Core Hook Engine", "Standard Support"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-zinc-400 font-medium">
                                    <span className="text-blue-500 font-bold text-lg leading-none">✓</span> {item}
                                </li>
                            ))}
                        </ul>
                        <a href="/register" className="w-full py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-black rounded-2xl transition-all text-center">Start Free Trial</a>
                    </div>

                    {/* Pro Plan */}
                    <div className="p-10 rounded-[3rem] bg-gradient-to-b from-blue-600/10 to-transparent border-2 border-blue-600/50 backdrop-blur-sm flex flex-col relative overflow-hidden">
                        <div className="absolute top-4 right-8 px-3 py-1 bg-blue-600 text-[10px] font-black uppercase tracking-widest rounded-full text-white">Most Popular</div>
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-white mb-2">Agency Pro</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-black">$149</span>
                                <span className="text-zinc-500 font-bold">/mo</span>
                            </div>
                        </div>
                        <ul className="space-y-4 mb-10 flex-1">
                            {["Unlimited Workers", "Unlimited Accounts", "Full Revenue Engine", "Advanced Grok Insights", "Priority Support"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-zinc-300 font-medium">
                                    <span className="text-blue-500 font-bold text-lg leading-none">✓</span> {item}
                                </li>
                            ))}
                        </ul>
                        <a href="/register" className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl transition-all shadow-xl shadow-blue-500/20 text-center">Scale Now</a>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="relative z-50 max-w-3xl mx-auto px-6 py-24 md:py-32 border-t border-zinc-900">
                <h2 className="text-3xl font-black text-center mb-16">Frequently Asked Questions</h2>
                <div className="space-y-8">
                    {[
                        { q: "Is there a free trial?", a: "Yes, we offer a 14-day free trial on all plans. No credit card required to start." },
                        { q: "Can I cancel anytime?", a: "Absolutely. SignalOS is month-to-month. You can downgrade or cancel at any time from your billing portal." },
                        { q: "Do you offer enterprise plans?", a: "Yes! High-volume teams can contact our sales for custom data pipelines and white-label options." }
                    ].map((faq, i) => (
                        <div key={i}>
                            <h4 className="text-lg font-bold text-white mb-3">{faq.q}</h4>
                            <p className="text-zinc-500 font-medium leading-relaxed">{faq.a}</p>
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

import { auth } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function LandingPage() {
    const session = await auth();
    const isLoggedIn = !!session;

    return (
        <div className="relative min-h-screen bg-zinc-950 text-zinc-100 overflow-x-hidden selection:bg-blue-500/30 font-[family-name:var(--font-inter)]">
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
                    v2.0 — The Intelligence Era
                </div>
                <h2 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.95] md:leading-[0.9]">
                    The Operating System <br className="hidden sm:block" />
                    for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-orange-500">Content Revenue.</span>
                </h2>
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-zinc-400 font-medium leading-relaxed mb-14 px-4">
                    SignalOS transforms content from guesswork into infrastructure—scoring ideas before publishing, coordinating execution across teams, and attributing every impression to revenue.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 px-6 sm:px-0 mb-12">
                    <a
                        href={isLoggedIn ? "/dashboard" : "/register"}
                        className="w-full sm:w-auto px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-black rounded-2xl text-lg hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-all transform hover:-translate-y-1 active:translate-y-0 text-center"
                    >
                        Access SignalOS
                    </a>
                    <a
                        href="#problem"
                        className="w-full sm:w-auto px-12 py-5 bg-zinc-900 border border-zinc-700 text-white font-bold rounded-2xl text-lg hover:bg-zinc-800 transition-all text-center"
                    >
                        Learn the System
                    </a>
                </div>
                <p className="text-zinc-600 text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
                    Built for agencies, ghostwriters, and media operators scaling across X, LinkedIn, and Instagram.
                </p>
            </section>

            {/* Problem Section */}
            <section id="problem" className="relative z-50 max-w-5xl mx-auto px-6 py-24 md:py-32 border-t border-zinc-900">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h3 className="text-3xl md:text-4xl font-black mb-6 leading-tight">You don’t have a <br /><span className="text-zinc-600">content problem.</span></h3>
                        <h3 className="text-3xl md:text-4xl font-black text-blue-500">You have a signal problem.</h3>
                    </div>
                    <div className="space-y-6">
                        {[
                            "Hooks are written on instinct, not data",
                            "Teams execute without alignment",
                            "Winning content can’t be reliably repeated",
                            "Revenue attribution stops at 'engagement'"
                        ].map((text, i) => (
                            <div key={i} className="flex items-center gap-4 text-zinc-400 font-medium">
                                <span className="text-red-500/60 font-black text-xl leading-none">✕</span> {text}
                            </div>
                        ))}
                        <div className="pt-6 border-t border-zinc-800">
                            <p className="text-white font-bold">Result: inconsistent growth, wasted reach, and invisible ROI.</p>
                            <p className="text-blue-400 font-black mt-2 text-lg">SignalOS fixes this at the system level.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Pillars */}
            <section id="features" className="relative z-50 max-w-7xl mx-auto px-6 py-24 md:py-32 border-t border-zinc-900">
                <div className="space-y-32">
                    {/* Pillar 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="p-10 rounded-[3rem] bg-zinc-900/50 border border-zinc-800 flex items-center justify-center aspect-square text-9xl">🎣</div>
                        <div>
                            <h4 className="text-blue-400 text-sm font-black uppercase tracking-widest mb-4">Pillar 01</h4>
                            <h3 className="text-4xl md:text-5xl font-black mb-8">Hook Intelligence</h3>
                            <p className="text-zinc-400 text-lg font-medium mb-8">Generate hooks backed by real performance data—not assumptions. Trained on high-performing patterns, it doesn’t just generate ideas—it generates validated structures.</p>
                            <div className="space-y-4 mb-10">
                                <div className="text-sm font-bold text-white flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Faster ideation cycles (minutes, not hours)
                                </div>
                                <div className="text-sm font-bold text-white flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Hooks based on proven engagement frameworks
                                </div>
                                <div className="text-sm font-bold text-white flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Consistent output across multiple accounts
                                </div>
                            </div>
                            <p className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-300 font-bold italic">
                                Outcome: You stop testing blindly. You start deploying patterns that already work.
                            </p>
                        </div>
                    </div>

                    {/* Pillar 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="md:order-last p-10 rounded-[3rem] bg-zinc-900/50 border border-zinc-800 flex items-center justify-center aspect-square text-9xl">📊</div>
                        <div>
                            <h4 className="text-purple-400 text-sm font-black uppercase tracking-widest mb-4">Pillar 02</h4>
                            <h3 className="text-4xl md:text-5xl font-black mb-8">Signal Scoring</h3>
                            <p className="text-zinc-400 text-lg font-medium mb-8">Every piece of content is evaluated before it’s published. We assign a predictive score based on historical engagement signals, structure, and platform behavior.</p>
                            <div className="space-y-4 mb-10">
                                <div className="text-sm font-bold text-white flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span> Know your top-performing content before posting
                                </div>
                                <div className="text-sm font-bold text-white flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span> Prioritize high-probability ideas
                                </div>
                                <div className="text-sm font-bold text-white flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span> Reduce content waste across teams
                                </div>
                            </div>
                            <p className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-300 font-bold italic">
                                Outcome: You don’t rely on luck. You operate with pre-publish certainty.
                            </p>
                        </div>
                    </div>

                    {/* Pillar 3 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="p-10 rounded-[3rem] bg-zinc-900/50 border border-zinc-800 flex items-center justify-center aspect-square text-9xl">💰</div>
                        <div>
                            <h4 className="text-orange-400 text-sm font-black uppercase tracking-widest mb-4">Pillar 03</h4>
                            <h3 className="text-4xl md:text-5xl font-black mb-8">Revenue Mapping</h3>
                            <p className="text-zinc-400 text-lg font-medium mb-8">Finally connect content performance to actual revenue. Mapping impressions, engagement, and clicks directly to conversions and dollars.</p>
                            <div className="space-y-4 mb-10">
                                <div className="text-sm font-bold text-white flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> Identify which posts drive real revenue
                                </div>
                                <div className="text-sm font-bold text-white flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> Eliminate vanity metrics
                                </div>
                                <div className="text-sm font-bold text-white flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> Double down on profitable content types
                                </div>
                            </div>
                            <p className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 text-zinc-300 font-bold italic">
                                Outcome: Content becomes a measurable, optimizable revenue channel—not just “brand building.”
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works (Clarity Layer) */}
            <section className="relative z-50 bg-white text-black py-24 md:py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.9]">A closed-loop <br />system for execution.</h2>
                        <p className="text-xl font-bold max-w-sm">Clarity is the ultimate competitive advantage.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
                        {[
                            { step: "01", label: "Generate", desc: "Hooks backed by data." },
                            { step: "02", label: "Score", desc: "Pre-publish certainty." },
                            { step: "03", label: "Deploy", desc: "Team coordination." },
                            { step: "04", label: "Track", desc: "Cross-platform data." },
                            { step: "05", label: "Attribute", desc: "Connect to revenue." }
                        ].map((item, i) => (
                            <div key={i} className="space-y-4">
                                <div className="text-4xl font-black text-zinc-200 border-b-4 border-zinc-100 pb-2">{item.step}</div>
                                <h4 className="text-xl font-black">{item.label}</h4>
                                <p className="text-zinc-600 font-bold text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="relative z-50 max-w-7xl mx-auto px-6 py-24 md:py-32 border-t border-zinc-900">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-balance">Infrastructure for Scale.</h2>
                    <p className="text-zinc-500 text-lg font-medium">Join 500+ operators managing attention at scale—not experimenting with it.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Starter Plan */}
                    <div className="p-10 rounded-[3rem] bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm flex flex-col">
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-widest">Operator</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-black">$49</span>
                                <span className="text-zinc-500 font-bold">/month</span>
                            </div>
                            <p className="text-zinc-500 text-sm mt-4 font-semibold italic">For solo operators and ghostwriters building consistent output with structure.</p>
                        </div>
                        <ul className="space-y-4 mb-10 flex-1 border-t border-zinc-800 pt-8">
                            {["Hook Intelligence (daily limits)", "Signal Scoring (per-post limits)", "Core Analytics Dashboard", "Single Workspace"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-zinc-400 font-bold text-sm">
                                    <span className="text-blue-500">✔</span> {item}
                                </li>
                            ))}
                        </ul>
                        <a href="/register" className="w-full py-5 bg-zinc-800 hover:bg-zinc-700 text-white font-black rounded-2xl transition-all text-center">Start Free Trial</a>
                    </div>

                    {/* Pro Plan */}
                    <div className="p-10 rounded-[3rem] bg-gradient-to-b from-blue-600/10 to-transparent border-2 border-blue-600/50 backdrop-blur-sm flex flex-col relative overflow-hidden shadow-2xl shadow-blue-900/10">
                        <div className="absolute top-4 right-8 px-3 py-1 bg-blue-600 text-[10px] font-black uppercase tracking-widest rounded-full text-white">Most Popular</div>
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-widest">Command</h3>
                            <div className="flex items-baseline gap-1">
                                <span className="text-4xl font-black">$149</span>
                                <span className="text-zinc-500 font-bold">/month</span>
                            </div>
                            <p className="text-zinc-400 text-sm mt-4 font-semibold italic">For agencies and media teams running multi-account content operations.</p>
                        </div>
                        <ul className="space-y-4 mb-10 flex-1 border-t border-blue-600/20 pt-8">
                            {["Unlimited Hook Intelligence", "Unlimited Signal Scoring", "Team & Worker Management", "Multi-Account Coordination", "Advanced Revenue Mapping"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-zinc-200 font-bold text-sm">
                                    <span className="text-blue-500">✔</span> {item}
                                </li>
                            ))}
                        </ul>
                        <a href="/register" className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl transition-all shadow-xl shadow-blue-500/20 text-center">Scale Now</a>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="relative z-50 max-w-3xl mx-auto px-6 py-24 md:py-32 border-t border-zinc-900">
                <h2 className="text-3xl font-black text-center mb-16 uppercase tracking-widest">Common Questions</h2>
                <div className="space-y-12">
                    {[
                        { q: "Why not just use ChatGPT or Grok directly?", a: "Because generation isn’t the bottleneck—decision-making is. SignalOS evaluates, prioritizes, and connects output to revenue." },
                        { q: "How does Signal Scoring actually work?", a: "It analyzes structural patterns, historical engagement data, and platform-specific signals to assign a predictive performance score before publishing." },
                        { q: "Will this replace my content team?", a: "No. It upgrades them into a coordinated system—where every output is intentional, measured, and accountable." }
                    ].map((faq, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800">
                            <h4 className="text-lg font-black text-white mb-4">{faq.q}</h4>
                            <p className="text-zinc-500 font-medium leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </section>

            <footer className="relative z-50 max-w-7xl mx-auto px-6 py-16 md:py-24 border-t border-zinc-900 text-center">
                <h1 className="text-xl font-black mb-8">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Signal</span>
                    <span className="text-white">OS</span>
                </h1>
                <p className="text-zinc-600 text-sm font-medium tracking-[0.3em] uppercase mb-4 font-black italic">Content. Intelligence. Revenue.</p>
                <p className="text-zinc-800 text-[10px] font-bold tracking-[0.2em] uppercase">© 2026 SignalOS. For those managing attention at scale.</p>
                <div className="mt-4 text-[8px] text-zinc-900 font-black">BUILD: SAAS-EDITION-v1.0.4</div>
            </footer>
        </div>
    );
}

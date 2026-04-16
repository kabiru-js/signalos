'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ChevronRight,
    Zap,
    TrendingUp,
    Target,
    Sparkles,
    CheckCircle,
    ChevronDown,
    ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
};

// --- Landing Page Component ---
export default function LandingPage({ initialIsLoggedIn }: { initialIsLoggedIn: boolean }) {
    const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
    const [isLoggedIn] = useState(initialIsLoggedIn);

    return (
        <div className="min-h-screen bg-background text-foreground grid-background">
            {/* Navigation */}
            <motion.nav
                className="fixed top-0 left-0 right-0 z-[100] glass-dark"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold tracking-tight">
                        Signal<span className="text-accent">OS</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        {isLoggedIn ? (
                            <a
                                href="/dashboard"
                                className="px-6 py-2 rounded-lg bg-accent text-accent-foreground font-black text-xs uppercase tracking-widest hover:scale-105 transition-all cursor-pointer z-50"
                            >
                                Dashboard
                            </a>
                        ) : (
                            <a
                                href="/login"
                                className="px-6 py-2 rounded-lg bg-accent text-accent-foreground font-black text-xs uppercase tracking-widest hover:scale-105 transition-all cursor-pointer z-50"
                            >
                                Sign In
                            </a>
                        )}
                    </div>
                </div>
            </motion.nav>

            {/* Hero Section */}
            <motion.section
                className="relative min-h-screen flex items-center justify-center px-4 md:px-6 lg:px-8 pt-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
            >
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 right-10 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl opacity-20"></div>
                    <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl opacity-10"></div>
                </div>

                <div className="relative max-w-4xl mx-auto text-center z-10">
                    <motion.div variants={fadeInUp}>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
                            The Operating System for{' '}
                            <span className="gradient-text">Content Revenue</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-medium"
                        variants={fadeInUp}
                    >
                        SignalOS transforms content from guesswork into infrastructure. Hook
                        Intelligence, Signal Scoring, and Revenue Mapping—all in one platform.
                    </motion.p>

                    <motion.div className="flex flex-col md:flex-row gap-4 justify-center mb-16 relative z-50" variants={fadeInUp}>
                        <a
                            href={isLoggedIn ? "/dashboard" : "/register"}
                            className="px-10 py-5 rounded-2xl bg-accent text-accent-foreground font-black text-xl hover:scale-105 transition-all flex items-center justify-center gap-2 group shadow-2xl shadow-accent/40 cursor-pointer"
                        >
                            {isLoggedIn ? "Go to Dashboard" : "Start Free Trial"}
                            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#demo"
                            className="px-10 py-5 rounded-2xl border border-white/10 hover:border-accent/50 text-foreground font-black text-xl transition-all bg-white/5 cursor-pointer"
                        >
                            Watch System Demo
                        </a>
                    </motion.div>

                    <motion.div
                        className="glass-card p-6 rounded-2xl max-w-2xl mx-auto"
                        variants={fadeInUp}
                    >
                        <p className="text-xs font-bold text-muted-foreground mb-4 uppercase tracking-[0.2em]">Trusted by elite content creators</p>
                        <div className="flex justify-center gap-8 md:gap-12 opacity-50">
                            {['Substack', 'Patreon', 'Beehive', 'Creators'].map((item) => (
                                <div key={item} className="text-center">
                                    <div className="text-sm text-foreground font-black tracking-tighter italic">{item}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Problem Section */}
            <motion.section
                className="relative py-24 px-4 md:px-6 lg:px-8 bg-secondary/50"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
            >
                <div className="max-w-5xl mx-auto">
                    <motion.div className="text-center mb-16" variants={fadeInUp}>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                            You have a <span className="text-accent">signal problem</span>
                        </h2>
                        <p className="text-lg text-muted-foreground font-medium">
                            Every blind spot in your content workflow costs you revenue.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-3 gap-6"
                        variants={staggerContainer}
                    >
                        {[
                            {
                                icon: Zap,
                                title: 'Hooks Based on Instinct',
                                description:
                                    'Creating content hooks without data-driven insights leads to inconsistent performance and wasted production.',
                            },
                            {
                                icon: Target,
                                title: 'Teams Without Alignment',
                                description:
                                    'Without a unified command center, your team spends more time coordinating than creating.',
                            },
                            {
                                icon: TrendingUp,
                                title: 'Invisible ROI',
                                description:
                                    'When you cannot attribute revenue to specific pieces of content, you cannot scale what works.',
                            },
                        ].map((problem, idx) => (
                            <motion.div
                                key={idx}
                                className="glass-card p-8 rounded-2xl"
                                variants={fadeInUp}
                            >
                                <div className="p-3 rounded-xl bg-accent/10 w-fit mb-6">
                                    <problem.icon className="w-8 h-8 text-accent" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{problem.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* The 3 Pillars Section */}
            <motion.section
                className="relative py-24 px-4 md:px-6 lg:px-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
            >
                <div className="max-w-6xl mx-auto">
                    <motion.div className="text-center mb-16" variants={fadeInUp}>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                            The Three Pillars of SignalOS
                        </h2>
                        <p className="text-lg text-muted-foreground font-medium">
                            A complete framework for content revenue intelligence
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-3 gap-8"
                        variants={staggerContainer}
                    >
                        {[
                            {
                                icon: Sparkles,
                                title: 'Hook Intelligence',
                                description:
                                    'Analyze what makes your content stick. Get real-time insights on what hooks drive engagement.',
                                features: ['Pattern Recognition', 'A/B Testing', 'Trend Analysis'],
                            },
                            {
                                icon: Target,
                                title: 'Signal Scoring',
                                description:
                                    'Every piece of content gets a score. Know exactly how well your content will perform.',
                                features: ['Predictive Scoring', 'Performance Tracking', 'Benchmarking'],
                            },
                            {
                                icon: TrendingUp,
                                title: 'Revenue Mapping',
                                description:
                                    'Connect content directly to revenue. See which pieces generate the most income.',
                                features: ['Attribution', 'Forecasting', 'Optimization'],
                            },
                        ].map((pillar, idx) => (
                            <motion.div
                                key={idx}
                                className="glass-card p-8 rounded-2xl group hover:border-accent/50 transition-all cursor-default"
                                variants={fadeInUp}
                            >
                                <div className="glow-indigo p-4 rounded-xl bg-accent/5 w-fit mb-6 group-hover:scale-110 transition-transform">
                                    <pillar.icon className="w-8 h-8 text-accent" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{pillar.title}</h3>
                                <p className="text-muted-foreground text-sm mb-8 leading-relaxed">{pillar.description}</p>
                                <div className="space-y-3">
                                    {pillar.features.map((feature, fidx) => (
                                        <div key={fidx} className="flex items-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                                                <CheckCircle className="w-3 h-3 text-accent" />
                                            </div>
                                            <span className="text-sm font-semibold">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* How It Works Section */}
            <motion.section
                className="relative py-24 px-4 md:px-6 lg:px-8 bg-secondary/50"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
            >
                <div className="max-w-6xl mx-auto">
                    <motion.div className="text-center mb-16" variants={fadeInUp}>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">How It Works</h2>
                        <p className="text-lg text-muted-foreground font-medium">
                            Five simple steps to master your content revenue
                        </p>
                    </motion.div>

                    <motion.div className="relative" variants={staggerContainer}>
                        {/* Desktop Flow */}
                        <div className="hidden md:grid grid-cols-5 gap-4">
                            {[
                                { step: 1, title: 'Generate', description: 'Create content with SignalOS insights' },
                                { step: 2, title: 'Score', description: 'Get instant performance predictions' },
                                { step: 3, title: 'Deploy', description: 'Launch with confidence and timing' },
                                { step: 4, title: 'Track', description: 'Monitor real-time performance data' },
                                { step: 5, title: 'Attribute', description: 'Connect content to revenue' },
                            ].map((item, idx) => (
                                <motion.div key={idx} variants={fadeInUp}>
                                    <div className="relative">
                                        {idx < 4 && (
                                            <div className="absolute top-10 -right-2 w-4 h-0.5 bg-gradient-to-r from-accent to-transparent"></div>
                                        )}
                                        <div className="glass-card p-6 rounded-2xl text-center h-full">
                                            <div className="w-12 h-12 rounded-xl bg-accent text-accent-foreground flex items-center justify-center font-black mx-auto mb-6 shadow-lg shadow-accent/20">
                                                {item.step}
                                            </div>
                                            <h3 className="font-bold text-base mb-3 leading-tight">{item.title}</h3>
                                            <p className="text-xs text-muted-foreground leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Mobile Flow */}
                        <div className="md:hidden space-y-4">
                            {[
                                { step: 1, title: 'Generate', description: 'Create content with SignalOS insights' },
                                { step: 2, title: 'Score', description: 'Get instant performance predictions' },
                                { step: 3, title: 'Deploy', description: 'Launch with confidence and timing' },
                                { step: 4, title: 'Track', description: 'Monitor real-time performance data' },
                                { step: 5, title: 'Attribute', description: 'Connect content to revenue' },
                            ].map((item, idx) => (
                                <motion.div key={idx} variants={fadeInUp}>
                                    <div className="glass-card p-5 rounded-2xl flex gap-6 items-center">
                                        <div className="w-12 h-12 rounded-xl bg-accent text-accent-foreground flex items-center justify-center font-black flex-shrink-0">
                                            {item.step}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                                            <p className="text-sm text-muted-foreground">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Pricing Section */}
            <motion.section
                className="relative py-24 px-4 md:px-6 lg:px-8 border-t border-zinc-900"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
            >
                <div className="max-w-5xl mx-auto">
                    <motion.div className="text-center mb-16" variants={fadeInUp}>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Simple, Transparent Pricing</h2>
                        <p className="text-lg text-muted-foreground font-medium">
                            Choose the plan that fits your content operation
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-2 gap-8"
                        variants={staggerContainer}
                    >
                        {[
                            {
                                name: 'Operator',
                                price: '$49',
                                period: '/month',
                                description: 'For individual creators and small teams',
                                features: [
                                    'Hook Intelligence Analysis',
                                    'Basic Signal Scoring',
                                    'Core Revenue Mapping',
                                    'Standard Support',
                                    'Performance Dashboard',
                                ],
                                cta: 'Start Free Trial',
                                highlight: false,
                            },
                            {
                                name: 'Command',
                                price: '$149',
                                period: '/month',
                                description: 'For growing content operations',
                                features: [
                                    'Advanced Hook Intelligence',
                                    'Premium Signal Scoring',
                                    'Unlimited Workspace Hubs',
                                    'Advanced Revenue Mapping',
                                    'Priority Expert Support',
                                    'Team Collaboration Tools',
                                ],
                                cta: 'Get Started Now',
                                highlight: true,
                            },
                        ].map((plan, idx) => (
                            <motion.div
                                key={idx}
                                className={`rounded-3xl p-10 transition-all relative ${plan.highlight
                                    ? 'glass-card border-2 border-accent/40 glow-indigo'
                                    : 'glass-card'
                                    }`}
                                variants={fadeInUp}
                            >
                                {plan.highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold mb-2 uppercase tracking-tight">{plan.name}</h3>
                                <p className="text-muted-foreground text-sm mb-8 font-medium">
                                    {plan.description}
                                </p>
                                <div className="mb-8">
                                    <span className="text-5xl font-black">{plan.price}</span>
                                    <span className="text-muted-foreground font-bold">{plan.period}</span>
                                </div>
                                <a
                                    href="/register"
                                    className={`w-full py-4 rounded-xl font-black text-center mb-10 transition-all flex items-center justify-center gap-2 relative z-50 cursor-pointer ${plan.highlight
                                        ? 'bg-accent text-accent-foreground hover:scale-[1.02] shadow-xl shadow-accent/20'
                                        : 'bg-white/5 border border-white/10 text-foreground hover:bg-white/10'
                                        }`}
                                >
                                    {plan.cta}
                                    <ChevronRight className="w-4 h-4" />
                                </a>
                                <div className="space-y-4">
                                    {plan.features.map((feature, fidx) => (
                                        <div key={fidx} className="flex items-start gap-4">
                                            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                            <span className="text-sm font-bold opacity-80">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* FAQ Section */}
            <motion.section
                className="relative py-24 px-4 md:px-6 lg:px-8 bg-secondary/50"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
            >
                <div className="max-w-3xl mx-auto">
                    <motion.div className="text-center mb-16" variants={fadeInUp}>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                            Common Questions
                        </h2>
                        <p className="text-lg text-muted-foreground font-medium">
                            Everything you need to know about SignalOS
                        </p>
                    </motion.div>

                    <motion.div className="space-y-4" variants={staggerContainer}>
                        {[
                            {
                                question: 'How does Hook Intelligence work?',
                                answer:
                                    'Hook Intelligence analyzes structural patterns in your content using Grok-level processing. It identifies what makes your specific audience stick, then gives you actionable directives for the next post.',
                            },
                            {
                                question: 'Can I integrate my existing workflows?',
                                answer:
                                    'Yes. SignalOS is designed to act as the central brain. We support deep integrations for teams running multi-account strategies across Substack, X, and major media platforms.',
                            },
                            {
                                question: 'How accurate is the Signal Scoring?',
                                answer:
                                    'Predictive accuracy is currently 87% based on historical platform triggers. It improves automatically as your organization feeds more data into the system.',
                            },
                            {
                                question: 'Is there a free trial?',
                                answer:
                                    'Absolutely. Every new account starts with a 14-day Command-level trial so you can experience the full power of the OS before choosing your plan.',
                            },
                        ].map((faq, idx) => (
                            <motion.div
                                key={idx}
                                className="glass-card rounded-2xl overflow-hidden shadow-lg border border-white/5"
                                variants={fadeInUp}
                            >
                                <button
                                    onClick={() =>
                                        setExpandedFaq(expandedFaq === idx ? null : idx)
                                    }
                                    className="w-full px-8 py-6 flex items-center justify-between hover:bg-white/5 transition-colors"
                                >
                                    <span className="font-bold text-lg text-left tracking-tight">
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-6 h-6 text-accent transition-transform duration-300 ${expandedFaq === idx ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>
                                <AnimatePresence>
                                    {expandedFaq === idx && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="px-8 pb-6 text-muted-foreground text-base font-medium leading-relaxed border-t border-white/5"
                                        >
                                            {faq.answer}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
                className="relative py-24 px-4 md:px-6 lg:px-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
            >
                <div className="max-w-4xl mx-auto glass-card p-16 rounded-[3rem] text-center shadow-2xl shadow-accent/10 border-accent/20">
                    <motion.div variants={fadeInUp}>
                        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
                            Ready to Master Your <br /> Content Revenue?
                        </h2>
                        <p className="text-xl text-muted-foreground mb-10 font-medium">
                            Join elite creators transforming guessing into infrastructure.
                        </p>
                        <a
                            href="/register"
                            className="px-10 py-5 rounded-2xl bg-accent text-accent-foreground font-black text-xl hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-3 group shadow-2xl shadow-accent/30 relative z-50 cursor-pointer"
                        >
                            Access SignalOS Now
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </a>
                    </motion.div>
                </div>
            </motion.section>

            {/* Footer */}
            <footer className="border-t border-white/5 py-16 px-4 md:px-6 lg:px-8 bg-secondary/30 mt-12">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-12 mb-16">
                        <div className="col-span-1 md:col-span-1">
                            <div className="text-2xl font-black mb-6">
                                Signal<span className="text-accent">OS</span>
                            </div>
                            <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                                The content distribution operating system. Purpose-built for high-output media operations.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-base mb-6 uppercase tracking-widest text-white">Product</h4>
                            <ul className="space-y-4 text-sm font-bold text-muted-foreground">
                                <li><Link href="/hooks" className="hover:text-accent transition-colors">Hook Generation</Link></li>
                                <li><Link href="/tracker" className="hover:text-accent transition-colors">Post Tracking</Link></li>
                                <li><Link href="/revenue" className="hover:text-accent transition-colors">Revenue Attribution</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-base mb-6 uppercase tracking-widest text-white">Resources</h4>
                            <ul className="space-y-4 text-sm font-bold text-muted-foreground">
                                <li><a href="#" className="hover:text-accent transition-colors">System Updates</a></li>
                                <li><a href="#" className="hover:text-accent transition-colors">API Docs</a></li>
                                <li><a href="#" className="hover:text-accent transition-colors">Support</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-base mb-6 uppercase tracking-widest text-white">Organization</h4>
                            <ul className="space-y-4 text-sm font-bold text-muted-foreground">
                                <li><Link href="/dashboard" className="hover:text-accent transition-colors">Workspace Login</Link></li>
                                <li><Link href="/register" className="hover:text-accent transition-colors">Create Team</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        <p>&copy; 2026 SignalOS. For high-output teams.</p>
                        <div className="mt-4 md:mt-0">
                            BUILD: SAAS-EDITION-v0.6
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

import Link from "next/link";

export default function Home() {
  const modules = [
    { title: "Hook Intelligence", desc: "AI-powered hook generation", path: "/hooks", color: "from-blue-500 to-indigo-600" },
    { title: "Content Tracker", desc: "Monitor post performance", path: "/tracker", color: "from-purple-500 to-pink-600" },
    { title: "Revenue Engine", desc: "Metric-driven ROI dashboard", path: "/revenue", color: "from-emerald-500 to-teal-600" },
    { title: "Management", desc: "Worker & account profiles", path: "/management", color: "from-orange-500 to-red-600" },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8 lg:p-24 selection:bg-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-xs font-bold uppercase tracking-widest">
            <span className="flex w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Signal OS v1.0 Production Ready
          </div>
          <h1 className="text-7xl font-black tracking-tighter leading-none">
            Scale your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              Content Engine.
            </span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl font-medium leading-relaxed">
            The Content Distribution Operating System. Predict performance, track revenue, and manage your workforce in one unified command center.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {modules.map((m) => (
            <Link key={m.path} href={m.path} className="group">
              <div className="h-full p-8 rounded-[2rem] bg-zinc-900 border border-zinc-800 transition-all duration-500 hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] flex flex-col justify-between">
                <div>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${m.color} mb-8 shadow-lg shadow-black/50 group-hover:scale-110 transition-transform duration-500`}></div>
                  <h3 className="text-2xl font-bold mb-3">{m.title}</h3>
                  <p className="text-zinc-500 font-medium leading-snug">{m.desc}</p>
                </div>
                <div className="mt-12 flex items-center text-sm font-bold uppercase tracking-widest text-zinc-600 group-hover:text-white transition-colors">
                  Open Module <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-32 pt-20 border-t border-zinc-900 text-center">
          <p className="text-zinc-600 font-medium tracking-wide">
            DESIGNED & BUILT FOR HIGH-OUTPUT MEDIA TEAMS
          </p>
        </div>
      </div>
    </main>
  );
}

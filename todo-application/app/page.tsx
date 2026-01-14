import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">

      <main className="px-10">
        <section className="mx-auto max-w-6xl py-24 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-block mb-5 rounded-full bg-indigo-500/10 px-4 py-1 text-indigo-400 text-sm">
              New Beta Available
            </span>

            <h1 className="text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Organize your tasks <br />
              <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                like a pro.
              </span>
            </h1>

            <p className="text-white/60 max-w-lg mb-10">
              Taskly helps you manage priorities, track progress, and stay
              focused. Simple. Fast. Beautiful.
            </p>

            <div className="flex gap-4">
              <Link
                href="/tasks"
                className="rounded-xl bg-indigo-500 px-7 py-3 text-sm font-medium hover:bg-indigo-600 transition"
              >
                Start Managing Tasks
              </Link>
              <Link
                href="#features"
                className="rounded-xl border border-white/20 px-7 py-3 text-sm hover:bg-white/10 transition"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 to-pink-500 blur opacity-40" />
            <div className="relative rounded-3xl bg-[#111827] p-6 space-y-4">
              {[
                ["Finish UI design", 9, true],
                ["Buy groceries", 3, false],
                ["Prepare presentation", 7, false],
                ["Read 20 pages", 2, true],
              ].map(([title, prio, done], i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3"
                >
                  <span className={`text-sm ${done ? "line-through text-white/40" : ""}`}>
                    {title}
                  </span>
                  <span className="text-xs rounded-lg bg-indigo-500/20 px-2 py-1 text-indigo-300">
                    Priority {prio}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="mx-auto max-w-6xl pb-28 grid md:grid-cols-3 gap-8">
          {[
            ["🔍", "Smart Search", "Find any task instantly"],
            ["🎯", "Priority Levels", "Assign priority 1–10"],
            ["⚡", "Fast Actions", "Add, remove & complete in one click"],
            ["📊", "Status Filters", "All / Done / Undone"],
            ["📈", "Sorting", "Sort by priority"],
            ["🧠", "Minimal UI", "No clutter, pure focus"],
          ].map(([icon, title, desc], i) => (
            <div
              key={i}
              className="rounded-2xl bg-white/5 p-6 hover:bg-white/10 transition"
            >
              <div className="text-3xl mb-4">{icon}</div>
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-white/60 text-sm">{desc}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="section relative flex min-h-[100svh] items-center overflow-hidden pb-32 pt-24 sm:pt-32 lg:min-h-[112vh]"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-28 -left-20 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute right-0 bottom-6 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      <div className="grid w-full items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.25em] text-violet-300 sm:text-sm">
            Madison, Abu Dhabi, and beyond
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            Adityan Thirumani
            <br />
            <span className="text-gradient-shimmer">Srinivasan.</span>
          </h1>
          <p className="max-w-2xl text-base text-(--muted) sm:text-lg">
            I'm a Computer Science student at UW–Madison who enjoys turning ideas into real
            products. I've built productivity tools used by 700+ users, led teams in robotics and
            software development, conducted AI research in computer vision, and competed nationally
            in both chess and robotics.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-violet-500 px-5 py-2 text-sm font-semibold text-black transition-colors hover:bg-violet-400"
            >
              View projects
            </a>
            <a
              href="#about"
              className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition-colors hover:border-white/40"
            >
              About me
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-(--card-border) bg-linear-to-br from-(--card) to-(--card-border) p-6">
          <div className="mb-5 flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.2em] text-(--muted)">
              Snapshot
            </span>
            <span className="rounded-full border border-white/15 px-2 py-0.5 text-[10px] text-(--muted)">
              2026
            </span>
          </div>
          <ul className="space-y-2 text-sm text-(--muted)">
            <li>- Computer Science student at UW–Madison</li>
            <li>- Built productivity applications and browser tools used by 700+ users</li>
            <li>- Finalist in the Create Apps Championship for The best youth category (Top 12 of 4,800+ teams)</li>
            <li>- AI researcher focused on computer vision and applied machine learning</li>
          </ul>
          <div className="mt-5 grid max-w-xs grid-cols-2 justify-items-center gap-2 border-t border-white/10 pt-4 text-center sm:max-w-sm">
            <div>
              <p className="text-lg font-bold text-(--foreground)">700+</p>
              <p className="text-[10px] uppercase tracking-wider text-(--muted)">Users</p>
            </div>
            <div>
              <p className="text-lg font-bold text-(--foreground)">25+</p>
              <p className="text-[10px] uppercase tracking-wider text-(--muted)">Interns Led</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

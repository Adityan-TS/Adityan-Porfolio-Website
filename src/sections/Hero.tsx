export function Hero() {
  return (
    <section
      id="home"
      className="section relative flex min-h-[100svh] items-center overflow-hidden pb-32 pt-28 sm:pt-36 lg:min-h-[112vh]"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-28 -left-20 h-72 w-72 rounded-full blur-3xl"
          style={{ background: "var(--hero-orb-a)" }}
        />
        <div
          className="absolute right-0 bottom-6 h-72 w-72 rounded-full blur-3xl"
          style={{ background: "var(--hero-orb-b)" }}
        />
      </div>

      <div className="grid w-full items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.25em] text-(--accent) sm:text-sm">
            Madison, Abu Dhabi, and beyond
          </p>
          <h1 className="display-heading max-w-3xl text-5xl leading-none sm:text-7xl lg:text-[5.6rem]">
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
              className="rounded-full px-5 py-2 text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ background: "var(--accent)", color: "var(--button-primary-foreground)" }}
            >
              View projects
            </a>
            <a
              href="#about"
              className="rounded-full border border-(--card-border) bg-(--panel-soft) px-5 py-2 text-sm font-semibold text-(--foreground) transition-colors hover:border-(--accent)"
            >
              About me
            </a>
          </div>
        </div>

        <div className="glass-strong rounded-[28px] border border-(--card-border) p-6">
          <div className="mb-5 flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.2em] text-(--muted)">
              Snapshot
            </span>
            <span className="rounded-full border border-(--line-soft) px-2 py-0.5 text-[10px] text-(--muted)">
              2026
            </span>
          </div>
          <ul className="space-y-2 text-sm text-(--muted)">
            <li>- Computer Science student at UW–Madison</li>
            <li>- Built productivity applications and browser tools used by 700+ users</li>
            <li>- Finalist in the Create Apps Championship for The best youth category (Top 12 of 4,800+ teams)</li>
            <li>- AI researcher focused on computer vision and applied machine learning</li>
          </ul>
          <div className="mt-5 grid max-w-xs grid-cols-2 justify-items-center gap-2 border-t border-(--line-soft) pt-4 text-center sm:max-w-sm">
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

"use client";

import Image from "next/image";
import b1Image from "@/b1.svg";

const TILE_IMAGES = {
  location:
    "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop",
} as const;

export function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-5xl px-4 pb-32 pt-0"
      style={{ scrollMarginTop: "120px" }}
    >
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold sm:text-5xl md:text-6xl">
          About <span className="text-gradient-shimmer">Me</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:grid-rows-[9rem_auto_9rem]">
        <article className="md:hidden col-span-1 row-span-1 overflow-hidden rounded-2xl border border-(--card-border) bg-linear-to-br from-(--card) to-(--card-border) p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-(--accent)">Profile</p>
          <h3 className="mt-2 line-clamp-2 break-words text-xl font-black leading-tight tracking-tight sm:text-2xl">
            Adityan Thirumani Srinivasan
          </h3>
          <p className="mt-2 line-clamp-2 break-words text-xs leading-snug text-(--muted)">
            Computer Science Student at UW-Madison
          </p>
        </article>

        <article className="md:hidden aspect-square overflow-hidden rounded-2xl border border-(--card-border)">
          <Image
            src={b1Image}
            alt="Center"
            width={600}
            height={600}
            className="h-full w-full object-cover object-center"
          />
        </article>

        <article className="hidden md:flex col-span-1 row-span-1 overflow-hidden rounded-2xl border border-(--card-border) bg-linear-to-br from-(--card) to-(--card-border) p-7">
          <div className="flex w-full flex-col justify-center text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-(--accent)">Profile</p>
            <h3 className="mt-2 line-clamp-2 break-words text-2xl font-black leading-tight tracking-tight lg:text-3xl xl:text-4xl">
              Adityan Thirumani Srinivasan
            </h3>
            <p className="mt-2 line-clamp-2 break-words text-[10px] uppercase leading-snug tracking-[0.18em] text-(--muted)">
              Computer Science Student at UW-Madison
            </p>
          </div>
        </article>

        <article className="col-span-2 row-span-1 rounded-2xl border border-(--card-border) bg-linear-to-br from-(--card) to-(--card-border) p-5 transition-all duration-200 hover:border-(--accent)">
          <h3 className="text-sm font-bold uppercase text-(--foreground)">
            Education and Leadership
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-(--muted) sm:text-sm">
            I am currently studying Computer Science at the University of Wisconsin-Madison after
            graduating from Mayoor Private School in Abu Dhabi, where I served as Robotics Team
            Lead and President of the Math Club.
          </p>
        </article>

        <article className="col-span-1 row-span-2 self-start rounded-2xl border border-(--card-border) bg-linear-to-br from-(--card) to-(--card-border) p-5 md:col-start-3 md:row-start-2 transition-all duration-200 hover:border-(--accent)">
          <h3 className="text-sm font-bold">Current Focus</h3>
          <p className="mt-2 text-xs leading-relaxed text-(--muted) sm:text-sm">
            I enjoy building products that solve everyday problems. Most of my work today involves
            productivity software, browser tools, and applied AI projects that people can actually
            use.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Python", "Flutter", "Java", "MySQL", "AI Research"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/15 px-2 py-1 text-[10px] text-(--muted)"
              >
                {t}
              </span>
            ))}
          </div>
        </article>

        <article className="col-span-1 row-span-1 h-full min-h-[9rem] rounded-2xl border border-(--card-border) overflow-hidden relative transition-all duration-200 hover:border-(--accent)">
          <Image
            src={TILE_IMAGES.location}
            alt="Location"
            fill
            className="object-cover opacity-70"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/65 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full p-3">
            <p className="text-xl font-bold leading-none">Abu Dhabi / Madison</p>
            <p className="text-[11px] text-(--muted)">Computer science student</p>
          </div>
        </article>

        <article className="col-span-1 row-span-2 self-start rounded-2xl border border-(--card-border) bg-linear-to-br from-(--card) to-(--card-border) p-5 md:col-start-1 md:row-start-2 transition-all duration-200 hover:border-(--accent)">
          <h3 className="text-sm font-bold">What Drives Me</h3>
          <p className="mt-2 text-xs leading-relaxed text-(--muted) sm:text-sm">
            I’m driven by the process of turning ideas into working systems. I enjoy building
            software that solves real problems, especially in productivity, AI, and applied machine
            learning. Most of my work starts with curiosity and ends with something people can
            actually use.
          </p>
        </article>

        <article className="hidden md:block aspect-square col-start-2 row-start-2 rounded-2xl border border-(--card-border) overflow-hidden relative">
          <Image
            src={b1Image}
            alt="Center"
            fill
            className="object-cover object-center"
            sizes="(min-width: 768px) 33vw"
            priority
          />
        </article>
      </div>
    </section>
  );
}

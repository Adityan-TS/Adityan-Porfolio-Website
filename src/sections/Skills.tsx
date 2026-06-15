"use client";

import { motion } from "framer-motion";

export function Skills() {
  const beltChunk = [...Array(4)].flatMap(() => [
    "Python",
    "Flutter",
    "Java",
    "MySQL",
    "HTML",
    "CSS",
    "Figma",
    "Adobe Photoshop",
    "PyTorch",
    "Product Strategy",
  ]);

  const skillGroups = [
    {
      title: "Programming",
      summary: "Building applications across mobile, desktop, and AI workflows.",
      items: ["Python", "Flutter", "Java", "MySQL"],
    },
    {
      title: "Design",
      summary: "Turning ideas into polished interfaces and product visuals.",
      items: ["HTML", "CSS", "Figma", "Adobe Photoshop"],
    },
    {
      title: "AI Research & Product Development",
      summary: "Combining machine learning, experimentation, and leadership.",
      items: [
        "Deep learning & computer vision",
        "Productivity and scheduling systems",
        "End-to-end product development & deployment",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden pt-0 pb-28"
      style={{ scrollMarginTop: "100px" }}
    >
      <div className="section">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-(--accent) sm:text-base">
            Core strengths
          </span>
          <h2 className="mt-2 px-2 text-3xl font-bold tracking-tight text-pretty sm:text-5xl md:text-6xl">
            Skills{" "}
            <span className="text-gradient-shimmer">Overview</span>
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-(--card-border) bg-linear-to-br from-(--card) to-(--card-border) p-5"
            >
              <h3 className="text-base font-semibold">{group.title}</h3>
              <p className="mt-1 text-xs text-(--muted)">{group.summary}</p>
              <ul className="mt-3 space-y-2 text-sm text-(--muted)">
                {group.items.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-(--card-border) bg-(--card)/40 py-3">
          <div className="relative overflow-hidden">
            <motion.div
              className="flex w-max items-center gap-8 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 30,
              }}
            >
              {[0, 1].map((copy) => (
                <div key={copy} className="flex items-center gap-8 px-4">
                  {beltChunk.map((item, index) => (
                    <div key={`${copy}-${item}-${index}`} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-violet-400" />
                      <span className="text-xs uppercase tracking-wider text-(--muted)">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

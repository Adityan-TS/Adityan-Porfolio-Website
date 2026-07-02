"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isMobile = project.deviceType === "mobile";
  const screenshots = project.screenshots || [];
  const deviceLabel = project.typeLabel || (isMobile ? "Mobile App" : "Desktop App");
  const desktopImageClassName = project.desktopImageClassName || "object-contain p-2";
  const href = project.github || project.demo;

  return (
    <motion.a
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      href={href || "#"}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      className="group flex h-full flex-col cursor-pointer outline-none"
      aria-label={href ? `Open ${project.title}` : project.title}
      onClick={(e) => {
        if (!href) e.preventDefault();
      }}
    >
      <header className="mb-4 shrink-0">
        <div className="mb-2 flex items-center gap-3">
          <span className="text-xs font-mono uppercase tracking-wider text-(--muted)">
            0{index + 1}
          </span>
          <span className="h-px w-6 bg-(--card-border)" />
          <span className="text-[10px] font-mono uppercase tracking-wider text-(--muted)">
            {deviceLabel}
          </span>
        </div>

        <div className="flex flex-col gap-2 min-[380px]:flex-row min-[380px]:items-center min-[380px]:justify-between">
          <h3 className="line-clamp-2 flex-1 text-base font-bold leading-tight text-(--foreground) sm:text-lg md:text-2xl">
            {project.title}
          </h3>

          <div className="flex items-center gap-2 opacity-100 transition-opacity duration-300 xl:opacity-0 xl:group-hover:opacity-100">
            <span className="rounded-full p-1.5 text-(--muted) transition-all group-hover:bg-(--card) group-hover:text-(--foreground)">
              <ArrowUpRight size={18} />
            </span>
          </div>
        </div>
      </header>

      <div className="relative aspect-6/5 w-full rounded-[28px] border border-white/20 bg-(--card) p-1 shadow-2xl ring-1 ring-white/10 transition-all duration-500 group-hover:border-white/30">
        <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-3xl md:rounded-[28px]">
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, var(--project-surface-start), var(--project-surface-mid), var(--project-surface-end))",
            }}
          />

          <div className="relative z-10 shrink-0 px-4 pt-5 md:px-8 md:pt-8">
            <p className="line-clamp-3 max-w-2xl text-[11px] leading-snug text-(--foreground) sm:text-xs md:text-lg">
              {project.description}
            </p>
          </div>

          <div className="relative z-10 min-h-[45%] flex-1">
            <div className="absolute bottom-0 left-0 right-0 flex h-full w-full items-end justify-center">
              {isMobile ? (
                <div className="relative h-full w-full max-w-[70%] md:max-w-[80%]">
                  {screenshots[1] ? (
                    <div className="absolute -bottom-16 left-0 z-10 w-[38%] origin-bottom md:-bottom-24 md:left-4">
                      <div
                        className="relative aspect-9/19 overflow-hidden rounded-t-2xl border-x-2 border-t-2 shadow-2xl md:rounded-t-3xl md:border-x-4 md:border-t-4"
                        style={{ borderColor: "var(--card-border)", background: "var(--project-frame)" }}
                      >
                        <Image
                          src={screenshots[1]}
                          alt="Screen 2"
                          fill
                          className="rounded-t-xl object-contain p-1 opacity-90 md:rounded-t-2xl"
                          style={{ background: "var(--project-frame)" }}
                          sizes="(max-width: 768px) 30vw, 20vw"
                        />
                      </div>
                    </div>
                  ) : null}

                  {screenshots[2] ? (
                    <div className="absolute -bottom-16 right-0 z-10 w-[38%] origin-bottom md:-bottom-24 md:right-4">
                      <div
                        className="relative aspect-9/19 overflow-hidden rounded-t-2xl border-x-2 border-t-2 shadow-2xl md:rounded-t-3xl md:border-x-4 md:border-t-4"
                        style={{ borderColor: "var(--card-border)", background: "var(--project-frame)" }}
                      >
                        <Image
                          src={screenshots[2]}
                          alt="Screen 3"
                          fill
                          className="rounded-t-xl object-contain p-1 opacity-90 md:rounded-t-2xl"
                          style={{ background: "var(--project-frame)" }}
                          sizes="(max-width: 768px) 30vw, 20vw"
                        />
                      </div>
                    </div>
                  ) : null}

                  <div className="absolute -bottom-16 left-1/2 z-20 w-[48%] -translate-x-1/2 origin-bottom md:-bottom-24">
                    <div
                      className="relative aspect-9/19 overflow-hidden rounded-t-2xl border-x-4 border-t-4 shadow-2xl ring-1 ring-white/10 md:rounded-t-3xl md:border-x-6 md:border-t-6"
                      style={{ borderColor: "var(--card-border)", background: "var(--project-frame)" }}
                    >
                      <div className="absolute top-0 left-1/2 z-30 h-3 w-[35%] -translate-x-1/2 rounded-b-lg md:h-5 md:rounded-b-xl" style={{ background: "var(--background)" }} />
                      {screenshots[0] ? (
                        <Image
                          src={screenshots[0]}
                          alt="Main screen"
                          fill
                          className="rounded-t-xl object-contain p-1 md:rounded-t-2xl"
                          style={{ background: "var(--project-frame)" }}
                          sizes="(max-width: 768px) 50vw, 30vw"
                          priority={index === 0}
                        />
                      ) : null}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="absolute -bottom-2 w-[80%] origin-bottom md:w-[85%]">
                  <div
                    className="relative flex aspect-16/10 flex-col overflow-hidden rounded-t-lg border-x border-t shadow-2xl md:rounded-t-xl"
                    style={{ borderColor: "var(--line-soft)", background: "var(--project-frame)" }}
                  >
                    <div
                      className="z-20 flex h-4 shrink-0 items-center gap-1 px-2 md:h-6 md:gap-1.5 md:px-3"
                      style={{ borderBottom: "1px solid var(--line-soft)", background: "var(--project-window-bar)" }}
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-(--muted) md:h-2 md:w-2" />
                      <div className="h-1.5 w-1.5 rounded-full bg-(--muted) md:h-2 md:w-2" />
                      <div className="h-1.5 w-1.5 rounded-full bg-(--muted) md:h-2 md:w-2" />
                    </div>
                    <div className="relative flex-1" style={{ background: "var(--project-frame)" }}>
                      {screenshots[0] ? (
                        <Image
                          src={screenshots[0]}
                          alt="App screenshot"
                          fill
                          className={cn("rounded-md", desktopImageClassName)}
                          sizes="(max-width: 768px) 90vw, 50vw"
                          priority={index === 0}
                        />
                      ) : null}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-4 flex shrink-0 flex-wrap gap-2">
        {project.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-(--card-border) bg-(--card) px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-(--muted) md:text-[10px]"
          >
            {tag}
          </span>
        ))}
      </footer>
    </motion.a>
  );
}

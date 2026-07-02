"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap } from "lucide-react";

type TimelineItem = {
  key: string;
  icon: typeof GraduationCap;
  date?: string;
  title: string;
  subtitle: string;
  desc: string;
  color: string;
};

function TimelineColumn({
  heading,
  items,
}: {
  heading: string;
  items: TimelineItem[];
}) {
  return (
    <div className="glass-strong rounded-3xl border border-(--card-border) p-6 sm:p-7">
      <h3 className="text-lg font-bold text-(--foreground) sm:text-xl">{heading}</h3>

      <div className="relative mt-6">
        <div className="pointer-events-none absolute top-0 bottom-0 left-4 w-px bg-(--line-soft)" />
        <div className="space-y-5">
          {items.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="relative pl-12"
            >
              <div className="absolute left-4 top-4 h-3 w-3 -translate-x-1/2 rounded-full bg-(--background) ring-2 ring-(--line-soft)" />
              <div
                className={`absolute left-4 top-4 h-3 w-3 -translate-x-1/2 rounded-full bg-linear-to-br ${item.color} opacity-80 blur-[2px]`}
              />

              <div className="relative rounded-2xl border border-(--line-soft) bg-(--panel-soft) p-4">
                {item.date ? (
                  <span className="absolute top-3 right-3 rounded-full border border-(--line-soft) bg-(--panel-soft) px-2 py-1 text-[10px] font-semibold text-(--muted)">
                    {item.date}
                  </span>
                ) : null}

                <div className="flex items-start gap-3 pr-20">
                  <div className={`shrink-0 rounded-xl bg-linear-to-br ${item.color} p-0.5`}>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-(--background)">
                      <item.icon size={18} style={{ color: "var(--foreground)" }} />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-(--foreground)">{item.title}</p>
                    <p className="mt-0.5 text-xs text-(--muted)">{item.subtitle}</p>
                  </div>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-(--muted) sm:text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProgramsResearchGrid({ items }: { items: TimelineItem[] }) {
  return (
    <div className="glass-strong rounded-3xl border border-(--card-border) p-6 sm:p-7">
      <div className="flex items-end justify-between gap-4">
        <h3 className="text-lg font-bold text-(--foreground) sm:text-xl">Programs & Research</h3>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {items.map((item, index) => (
          <motion.div
            key={item.key}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
            className="relative rounded-2xl border border-(--line-soft) bg-(--panel-soft) p-5"
          >
            {item.date ? (
              <span className="absolute top-3 right-3 rounded-full border border-(--line-soft) bg-(--panel-soft) px-2 py-1 text-[10px] font-semibold text-(--muted)">
                {item.date}
              </span>
            ) : null}

            <div className="flex items-start gap-3 pr-32">
              <div className={`shrink-0 rounded-xl bg-linear-to-br ${item.color} p-0.5`}>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-(--background)">
                  <item.icon size={18} style={{ color: "var(--foreground)" }} />
                </div>
              </div>
              <div className="min-w-0">
                <p className="break-words text-sm font-semibold leading-snug text-(--foreground)">
                  {item.title}
                </p>
                <p className="mt-0.5 text-xs text-(--muted)">{item.subtitle}</p>
              </div>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-(--muted) sm:text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function Other() {
  const educationTimeline: TimelineItem[] = [
    {
      key: "uw",
      icon: GraduationCap,
      date: "Fall 2026 - 2030",
      title: "UW–Madison",
      subtitle: "BSc in Computer Science",
      desc: "Currently studying Computer Science while building AI-powered products and applied machine learning systems.",
      color: "from-zinc-400 to-stone-200",
    },
    {
      key: "mayoor",
      icon: GraduationCap,
      date: "Apr 2022 - Feb 2026",
      title: "Mayoor Private School",
      subtitle: "High School Diploma (Abu Dhabi)",
      desc: "Served as Robotics Team Lead and President of the Math Club, leading technical and competitive initiatives.",
      color: "from-zinc-400 to-stone-200",
    },
    {
      key: "harvard-summer",
      icon: GraduationCap,
      date: "June 2025 - Aug 2025",
      title: "Harvard Summer School",
      subtitle: "Kali Linux + Python (Abu Dhabi)",
      desc: "Completed coursework with high distinction (Ethical Hacking: 97.2%, Python: 98.7%).",
      color: "from-zinc-400 to-stone-200",
    },
  ];

  const experienceTimeline: TimelineItem[] = [
    {
      key: "zeriux",
      icon: Briefcase,
      date: "May 2024 – April 2026",
      title: "Zeriux Labs",
      subtitle: "Co-Founder & CEO",
      desc: "Leading development of ProAct+, ProSync+, and FocusForge, productivity and AI tools used by 700+ users. Managing product strategy, engineering workflows, and a 25+ member intern team across full lifecycle from ideation to deployment.",
      color: "from-zinc-400 to-stone-200",
    },
    {
      key: "dyne",
      icon: Briefcase,
      date: "Oct 2024 – Mar 2025",
      title: "Dyne Research",
      subtitle: "AI Intern (Abu Dhabi)",
      desc: "Developed NeuroMedic, a deep learning system for brain tumor prediction using CT/MRI scans, implementing CNN architectures and medical imaging pipelines, achieving 96% accuracy.",
      color: "from-zinc-400 to-stone-200",
    },
  ];

  const programsResearch: TimelineItem[] = [
    {
      key: "thinking-beyond",
      icon: Award,
      date: "Oct 2024 – Dec 2024",
      title: "ThinkingBeyond (BeyondAI Program)",
      subtitle: "AI Researcher",
      desc: "Built a Dynamic Graph Neural Network (DGNN) for satellite collision detection using PyTorch Geometric and SGP4 orbital data, achieving 1.0 F1-score and an accuracy of 99% on anomaly prediction tasks.",
      color: "from-zinc-400 to-stone-200",
    },
    {
      key: "ccir",
      icon: Award,
      date: "Nov 2024 – Feb 2025",
      title: "Cambridge Centre for International Research (Future Scholars Program)",
      subtitle: "AI Researcher",
      desc: "Developed HybridEnhancementNet for low-light image enhancement by combining Zero-DCE and CIDNet, achieving SOTA results on LOL dataset with a PSNR of 27.46 dB and SSIM of 0.956, outperforming existing methods.",
      color: "from-zinc-400 to-stone-200",
    },
    {
      key: "harvard-venture-tech",
      icon: Award,
      date: "June 2025 – Aug 2025",
      title: "Harvard Venture TECH Program",
      subtitle: "AI Intern",
      desc: "Built Ventra-AI, a Flask-based ML system for wind turbine power prediction using Random Forest, with a production-ready pipeline and R² score of 0.9927.",
      color: "from-zinc-400 to-stone-200",
    },
    {
      key: "nyas",
      icon: Award,
      date: "Sept 2024 – Nov 2025",
      title: "New York Academy of Sciences",
      subtitle: "Team Lead",
      desc: "Led development of a deepfake detection system using MobileNetV2 and TensorFlow, training on 140K+ images and achieving 95% accuracy with data augmentation and transfer learning.",
      color: "from-zinc-400 to-stone-200",
    },
  ];

  return (
    <section
      id="highlights"
      className="relative overflow-hidden pt-0 pb-24 sm:pb-32"
      style={{ scrollMarginTop: "120px" }}
    >
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <h2 className="mb-4 px-2 text-3xl font-bold text-pretty sm:text-5xl md:text-6xl">
            Career{" "}
            <span className="text-gradient-shimmer">Highlights</span>
          </h2>
          <p className="mx-auto max-w-2xl px-3 text-base text-(--muted) sm:text-lg md:text-xl">
            A concise view of my academic path, experience, research and programs.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-7xl gap-6 px-2 md:grid-cols-2 md:gap-8">
          <TimelineColumn heading="Education" items={educationTimeline} />
          <TimelineColumn heading="Experience" items={experienceTimeline} />
        </div>

        <div className="mx-auto mt-6 max-w-7xl px-2 md:mt-8">
          <ProgramsResearchGrid items={programsResearch} />
        </div>

      </div>
    </section>
  );
}

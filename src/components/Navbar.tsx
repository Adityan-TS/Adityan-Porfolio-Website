"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#highlights", label: "Highlights" },
];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const root = document.documentElement;
    const nextTheme = root.dataset.theme === "light" ? "light" : "dark";
    setTheme(nextTheme);

    const onScroll = () => {
      const ids = navItems.map((item) => item.href.replace("#", ""));
      let current = ids[0];
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top <= 130) {
          current = ids[i];
          break;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    localStorage.setItem("theme", nextTheme);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 sm:py-5">
      <nav className="section">
        <div
          className="mx-auto flex items-center justify-between gap-4 rounded-[24px] px-4 py-3 shadow-xl sm:px-5"
          style={{ background: "var(--glass-strong-bg)", border: "1px solid var(--card-border)", boxShadow: "0 18px 50px var(--shadow-color)" }}
        >
          <a href="#home" className="display-heading shrink-0 text-lg leading-none text-(--foreground) sm:text-xl">
            Adityan Srinivasan
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = active === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em]"
                  style={{ color: isActive ? "var(--accent)" : "var(--muted)" }}
                >
                  {isActive ? (
                    <motion.span
                      layoutId="portfolio-nav-indicator"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: "var(--accent)",
                        opacity: 0.08,
                        border: "1px solid var(--line-soft)",
                      }}
                      transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                    />
                  ) : null}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-(--card-border) bg-(--panel-soft) text-(--muted) transition-colors hover:text-(--foreground)"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </nav>
    </header>
  );
}

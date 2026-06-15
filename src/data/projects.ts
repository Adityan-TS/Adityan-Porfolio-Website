import type { StaticImageData } from "next/image";
import focusforgeImage from "@/focusforge.png";
import hybridNetImage from "@/HydridNet.png";
import neuroMedicImage from "@/NeuroMedic.png";
import proactImage from "@/proact.png";

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  deviceType: "desktop" | "mobile";
  typeLabel?: string;
  bgColor?: string;
  screenshots?: Array<string | StaticImageData>;
  desktopImageClassName?: string;
}

export const projects: Project[] = [
  {
    id: "proact-plus",
    title: "ProAct+",
    description:
      "AI-assisted anti-procrastination mobile application built with Flutter and Supabase.",
    tags: ["Flutter", "Supabase", "AI", "Mobile"],
    github: "https://github.com/Adityan-TS/ProAct",
    featured: true,
    deviceType: "mobile",
    bgColor: "bg-linear-to-br from-[#14111f] via-[#1a1430] to-[#211336]",
    screenshots: [proactImage, proactImage, proactImage],
  },
  {
    id: "prosync-plus",
    title: "HybridEnhancementNet",
    description:
      "AI research project focused on enhancing robotic vision in low-light environments by integrating Zero-DCE and CIDNet architectures.",
    tags: ["AI Research", "Computer Vision", "PyTorch", "Robotics"],
    github: "https://github.com/Adityan-TS/HybridEnhancementNet",
    featured: true,
    deviceType: "desktop",
    typeLabel: "AI Research",
    bgColor: "bg-linear-to-br from-[#0f1117] via-[#131827] to-[#1a1f36]",
    screenshots: [hybridNetImage],
    desktopImageClassName: "object-cover object-top bg-neutral-950",
  },
  {
    id: "focusforge",
    title: "FocusForge",
    description:
      "Chrome extension for focus mode, site blocking, and usage analytics that includes real-time tracking & AI-powered suggestions.",
    tags: ["Chrome Extension", "Analytics", "AI", "Focus Tools"],
    github: "https://github.com/Adityan-TS/FocusForge",
    featured: true,
    deviceType: "desktop",
    typeLabel: "Browser Extension",
    bgColor: "bg-linear-to-br from-[#101715] via-[#11201c] to-[#15312a]",
    screenshots: [focusforgeImage],
  },
  {
    id: "neuromedic",
    title: "NeuroMedic",
    description:
      "Deep learning system for brain tumor prediction using CT and MRI data achieving 96% accuracy.",
    tags: ["Python", "Deep Learning", "Medical Imaging", "CNNs"],
    github: "https://github.com/Adityan-TS/NeuroMedic",
    featured: true,
    deviceType: "desktop",
    typeLabel: "AI Model",
    bgColor: "bg-linear-to-br from-[#16111d] via-[#1d1327] to-[#2a1530]",
    screenshots: [neuroMedicImage],
  },
];

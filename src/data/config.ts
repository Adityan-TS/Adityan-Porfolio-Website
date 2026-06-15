import { Github, Linkedin, Mail, type LucideIcon } from "lucide-react";

export interface Social {
  name: string;
  url: string;
  icon: LucideIcon;
}

export const socials: Social[] = [
  {
    name: "GitHub",
    url: "https://github.com/Adityan-TS",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/adityan-srinivasan/",
    icon: Linkedin,
  },
  {
    name: "Email",
    url: "mailto:thirumani.adityan@gmail.com",
    icon: Mail,
  },
];

export const siteConfig = {
  name: "Adityan Thirumani Srinivasan",
  title: "Computer Science Student at University of Wisconsin-Madison",
  description:
    "I am a Computer Science student at the University of Wisconsin-Madison building AI projects, research, and productivity tools.",
};

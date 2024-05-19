import {
  Facebook,
  Github,
  Home,
  Instagram,
  Linkedin,
  Mail,
  Trophy,
  Twitter,
  UserRound,
  Zap,
} from "lucide-react";

export const NAV_ITEMS = [
  {
    link: "/",
    icon: Home,
    title: "Home",
    color: "116 98% 76%",
  },
  {
    link: "/about",
    icon: UserRound,
    title: "About",
    color: "221 83% 62%",
  },
  {
    link: "/experience",
    icon: Zap,
    title: "Experience",
    color: "352 70% 59%",
  },
  {
    link: "/achievements",
    icon: Trophy,
    title: "Achievements",
    color: "43 71% 60%",
  },
  {
    link: "/contact",
    icon: Mail,
    title: "Contact",
    color: "203 90% 77%",
  },
];

export const PROJECTS = [
  {
    name: "Stunning Portfolio",
    tags: ["react", "next", "gsap", "tailwind"],
    image: "/projects/portfolio.png",
    year: "2024",
  },
  {
    name: "Trello Clone",
    tags: ["next", "postgreSQL", "next-auth", "tailwind"],
    image: "/projects/vello.png",
    year: "2024",
  },
];

export const SOCIALS = [
  { icon: Linkedin, label: "Linkedin", href: "/" },
  { icon: Instagram, label: "Instagram", href: "/" },
  { icon: Facebook, label: "Facebook", href: "/" },
  { icon: Twitter, label: "Twitter", href: "/" },
  { icon: Github, label: "Github", href: "/" },
];

export const HOBBIES = [
  { icon: "🧑‍💻", label: "Coding" },
  { icon: "✈️", label: "Traveling" },
  { icon: "🎮", label: "Gaming" },
  { icon: "🚴", label: "Cycling" },
];

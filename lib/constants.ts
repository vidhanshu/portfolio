import {
  Facebook,
  Github,
  Home,
  Instagram,
  Linkedin,
  Mail,
  Target,
  Trophy,
  Twitter,
  UserRound,
  Zap,
} from "lucide-react";
import nextjs from "@/public/teck-stack/next.svg";
import node from "@/public/teck-stack/node.svg";
import react from "@/public/teck-stack/react.svg";
import tailwind from "@/public/teck-stack/tailwind.svg";
import gql from "@/public/teck-stack/gql.svg";
import ts from "@/public/teck-stack/ts.svg";
import aws from "@/public/teck-stack/aws.svg";
import docker from "@/public/teck-stack/docker.svg";

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
    link: "/projects",
    icon: Target,
    title: "Projects",
    color: "273 100% 29%",
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
    name: "Portfolio",
    tags: ["react", "next", "gsap", "tailwind"],
    image: "/projects/portfolio.png",
    year: "2024",
  },
  {
    name: "Eateaser",
    tags: ["redis", "aws", "mongo-db", "vite", "tailwind"],
    image: "/projects/eateaser.png",
    year: "2024",
  },
  {
    name: "Trello Clone",
    tags: ["next", "postgreSQL", "next-auth", "tailwind"],
    image: "/projects/vello.png",
    year: "2024",
  },
  {
    name: "RT Tic Tac Toe",
    tags: ["next", "node", "socket-io", "tailwind"],
    image: "/projects/ttt.png",
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

export const TECHSTACK = [
  { image: nextjs, name: "Next.js" },
  { image: react, name: "React" },
  { image: node, name: "Node.js" },
  { image: tailwind, name: "TailwindCSS" },
  { image: ts, name: "Typescript" },
  { image: aws, name: "AWS" },
  { image: gql, name: "GraphQL" },
  { image: docker, name: "Docker" },
];

// framer-motion animations
export const fmAnimations = {
  hidden: { scale: 0.8, y: 20, opacity: 0 },
  visible: { scale: 1, y: 0, opacity: 1 },
};

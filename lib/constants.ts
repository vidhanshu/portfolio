import { Facebook, Github, Home, Instagram, Linkedin, Mail, Target, Trophy, Twitter, UserRound, Zap } from "lucide-react";
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
    live: "https://vidhanshu-borade.vercel.app",
    github: "https://github.com/vidhanshu/portfolio",
  },
  {
    name: "Eateaser",
    tags: ["redis", "aws", "mongo-db", "vite", "tailwind"],
    image: "/projects/eateaser.png",
    year: "2024",
    live: "https://eat-easer-customer.vercel.app/",
    github: "https://github.com/vidhanshu/eateaser",
  },
  {
    name: "Trello Clone",
    tags: ["next", "postgreSQL", "next-auth", "tailwind"],
    image: "/projects/vello.png",
    year: "2024",
    live: "https://vello-brown.vercel.app/",
    github: "https://github.com/vidhanshu/vello",
  },
  {
    name: "RT Tic Tac Toe",
    tags: ["next", "node", "socket-io", "tailwind"],
    image: "/projects/ttt.png",
    year: "2024",
    live: "https://tic-tac-go-one.vercel.app/",
    github: "https://github.com/vidhanshu/tictacgo",
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

export const ACHIEVEMENTS = [
  {
    image: "/achievements/sih.webp",
    title: "SIH'22 Winner",
    date: "Aug 22, 2022",
    description:
      "My team named Serious wale Coders won the prize worth 1 lakh @Smart India Hackathon in August'22. Our problem statement was, Improve the attractiveness & user-friendliness of the AICTE website.",
    certificate: "https://drive.google.com/file/d/1nmezls7VzJPCa3iT_zVzSdcpgKVd-ZQi/view?usp=sharing",
    tags: ["react", "Firebase", "Scss", "framer-motion"],
    news: "https://www.aninews.in/news/business/business/grand-finale-of-smart-india-hackathon-2022-inaugurated-at-chandigarh-university-gharuan20220826101515/",
  },
  {
    image: "/achievements/appathon.webp",
    title: "Appathon'23 Winner",
    date: "Feb 22, 2023",
    description:
      "My team named “ExpertEra” won the prize worth 12k @Appathon'22 in Feb'23. Our problem statement was, “Create a portal for students, where students can select the skills and the resources & mentors should be listed for that particular skill”. It was 24 hr hackathon conducted at St. vincent palloti college of engineering.",
    certificate: "https://drive.google.com/file/d/1aWJ8B4f4W2hnTkBhvLNbQghyncZgci7N/view",
    tags: ["react-native", "my-sql", "android-studio"],
  },
  {
    image: "/achievements/uia.webp",
    title: "UIA International Hackathon finalist",
    date: "Feb 22, 2023",
    description: "My team named “Team Meeseeks” was the Finalist of UIA hackathon August'22. Our problem statement was, “Detect the soil nutrients based on the image capture from phone camera”.",
    certificate: "https://drive.google.com/file/d/1aWJ8B4f4W2hnTkBhvLNbQghyncZgci7N/view",
    tags: ["react", "react-native", "google-news-api", "ai-ml", "dyte-api"],
  },
];

// framer-motion animations
export const fmAnimations = {
  hidden: { scale: 0.8, y: 20, opacity: 0 },
  visible: { scale: 1, y: 0, opacity: 1 },
};

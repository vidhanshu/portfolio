import { Album, Facebook, Github, Home, Instagram, Linkedin, Mail, Target, Trophy, Twitter, UserRound, Zap } from "lucide-react";
import nextjs from "@/public/tech-stack/next.svg";
import node from "@/public/tech-stack/node.svg";
import react from "@/public/tech-stack/react.svg";
import tailwind from "@/public/tech-stack/tailwind.svg";
import gql from "@/public/tech-stack/gql.svg";
import ts from "@/public/tech-stack/ts.svg";
import aws from "@/public/tech-stack/aws.svg";
import docker from "@/public/tech-stack/docker.svg";

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
  {
    link: "/blogs",
    icon: Album,
    title: "Blogs",
    color: "16 88% 54%",
  },
];

export const PROJECTS = [
  {
    name: "Portfolio",
    slug: "portfolio",
    tags: ["react", "next", "gsap", "tailwind"],
    image: "/projects/portfolio.png",
    year: "2024",
    live: "https://vidhanshu-borade.vercel.app",
    github: "https://github.com/vidhanshu/portfolio",
    description:
      "This portfolio showcases my skills and projects as a software engineer with a focus on web development and DevOps. Built using modern technologies like React and ShadCN UI, the website highlights my experience in building responsive, user-friendly interfaces and deploying applications on cloud platforms like AWS. The site is designed to be a comprehensive introduction to my professional background, with sections dedicated to my work experience, educational achievements, and technical skills.",
  },
  {
    name: "Eateaser",
    slug: "eat-easer",
    tags: ["redis", "aws", "mongo-db", "vite", "tailwind"],
    image: "/projects/eateaser.png",
    year: "2024",
    live: "https://eat-easer-customer.vercel.app/",
    github: "https://github.com/vidhanshu/eateaser",
    description:
      "EatEaser is a comprehensive restaurant management system designed to streamline operations and enhance the efficiency of restaurant businesses. The system provides tools for managing reservations, orders, inventory, and customer relationships, all within a single, user-friendly platform. Built with scalability in mind, EatEaser caters to the needs of small eateries as well as larger restaurant chains. The application integrates modern web technologies to offer a responsive and intuitive interface, ensuring ease of use for staff and management alike. Whether you're handling daily operations or analyzing sales data, EatEaser provides a robust solution to manage your restaurant business effectively.",
  },
  {
    name: "Trello Clone",
    slug: "trello-clone",
    tags: ["next", "postgreSQL", "next-auth", "tailwind"],
    image: "/projects/vello.png",
    year: "2024",
    live: "https://vello-brown.vercel.app/",
    github: "https://github.com/vidhanshu/vello",
    description:
      "This Trello clone is a task management application that replicates the core functionalities of Trello, providing an intuitive and flexible platform for organizing projects and collaborating with teams. The application allows users to create boards, lists, and cards to manage tasks, track progress, and enhance productivity. With drag-and-drop functionality, users can easily move tasks between different stages of completion. The clone is built using modern web technologies, ensuring a responsive and user-friendly interface that adapts seamlessly to various devices. Whether for personal task management or team collaboration, this Trello clone offers an efficient solution for keeping projects on track.",
  },
  {
    name: "RT Tic Tac Toe",
    slug: "realtime-tic-tac-toe",
    tags: ["next", "node", "socket-io", "tailwind"],
    image: "/projects/ttt.png",
    year: "2024",
    live: "https://tic-tac-go-one.vercel.app/",
    github: "https://github.com/vidhanshu/tictacgo",
    description:
      "This real-time Tic Tac Toe game brings a modern twist to the classic game by incorporating interactive features that enhance the multiplayer experience. Players can compete in real-time, challenging friends or other online opponents to quick, engaging matches. Key features include in-game chat, allowing players to communicate during gameplay, and a set of fun emotes to express reactions, making each match more interactive and enjoyable. The game's sleek and responsive design ensures a smooth experience across devices, whether you're playing on a computer, tablet, or smartphone. Perfect for casual gaming, this Tic Tac Toe game combines simplicity with real-time interaction, offering both entertainment and a touch of friendly competition.",
  },
];

export const LEETCODE_URL = "https://leetcode.com/vidhanshu/";
export const GITHUB_URL = "https://github.com/vidhanshu";
export const EMAIL_URL = "mailto:vidhanshu7218@gmail.com";
export const LINKEDIN_URL = "https://www.linkedin.com/in/vidhanshu";
export const INSTAGRAM_URL = "https://www.instagram.com/vidhanshu_borade";
export const FACEBOOK_URL = "https://www.facebook.com/vidhanshu.borade.18/";

export const SOCIALS = [
  { icon: Linkedin, label: "Linkedin", href: LINKEDIN_URL },
  { icon: Instagram, label: "Instagram", href: INSTAGRAM_URL },
  { icon: Facebook, label: "Facebook", href: FACEBOOK_URL },
  // { icon: Twitter, label: "Leetcode", href: LEETCODE_URL },
  { icon: Github, label: "Github", href: GITHUB_URL },
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
      'My team named "Serious wale Coders" won the prize worth 1 lakh @Smart India Hackathon in August\'22. Our problem statement was, Improve the attractiveness & user-friendliness of the AICTE website.',
    certificate: "https://drive.google.com/file/d/1nmezls7VzJPCa3iT_zVzSdcpgKVd-ZQi/view?usp=sharing",
    tags: ["react", "Firebase", "Scss", "framer-motion"],
    news: "https://www.aninews.in/news/business/business/grand-finale-of-smart-india-hackathon-2022-inaugurated-at-chandigarh-university-gharuan20220826101515/",
  },
  {
    image: "/achievements/appathon.webp",
    title: "Appathon'23 Winner",
    date: "Feb 23, 2023",
    description:
      "My team named “ExpertEra” won the prize worth 12k @Appathon'23 in Feb'23. Our problem statement was, “Create a portal for students, where students can select the skills and the resources & mentors should be listed for that particular skill”. It was 24 hr hackathon conducted at St. vincent palloti college of engineering.",
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
  scaleDown: { scale: 0.8, opacity: 0.3 },
  scaleUp: { scale: 1, opacity: 1 },
};

export const EXPERIENCE = [
  {
    id: "1",
    title: "Executive memeber",
    company: "GDSC GHRCE",
    description: "I joined GDSC GHRCE (Google developer students clubs) as an executive team member. Where my role was to help the core team to conduct the events and promote the google technologies",
    from: "Aug 20",
    to: "May 22",
    link: "https://gdsc-ghrce.vercel.app",
    logo: "/experience/gdsc_logo.png",
    certificate: "https://drive.google.com/file/d/1n0DXYnBI-ivjV65i9O8zbVvE4s5_Cngx/view?usp=sharing",
  },
  {
    id: "2",
    title: "Core team member",
    company: "GDSC GHRCE",
    description: "I promoted to core team as a Technical team member where my task is to help lead in organizing the events and guiding the community.",
    from: "May 22",
    to: "current",
    link: "https://gdsc-ghrce.vercel.app",
    logo: "/experience/gdsc_logo.png",
  },
  {
    id: "3",
    title: "Web developer intern",
    company: "PlayerOrbit",
    description: "I worked as a web developer @PlayerOrbit my job was to create API end points for the website, creating front end for the website and testing the website.",
    from: "june 22",
    to: "Sept 22",
    link: "https://playerorbit.com",
    logo: "/experience/po.webp",
    certificate: "https://drive.google.com/file/d/1_F5Siv2jw9E7nUloZ9xHvAYFwitCUGlI/view?usp=sharing",
  },
  {
    id: "4",
    title: "Front end intern",
    company: "AI Planet",
    description: "I worked as a full-time frontend intern @ AiPlanet, where my job is develop the frontend of the website.",
    from: "june 23",
    to: "dec 23",
    link: "https://aiplanet.com",
    logo: "/experience/dphi.png",
  },
  {
    id: "5",
    title: "Wed Development Intern",
    company: "Lief",
    description: "I'm worked as a Wed Development Intern @ Lief, where my job is build and maintain the product end-to-end",
    from: "jan 24",
    to: "June 24",
    link: "https://home.lief.care",
    logo: "/experience/lief.avif",
  },
  {
    id: "6",
    title: "Software Engineer",
    company: "Lief",
    description: "I'm working as a Software Engineer @ Lief, where my job is build and maintain the product end-to-end",
    from: "July 24",
    to: "current",
    link: "https://home.lief.care",
    logo: "/experience/lief.avif",
  },
].reverse();

export const BLOGS = [
  {
    id: '1',
    title: ''
  }
]
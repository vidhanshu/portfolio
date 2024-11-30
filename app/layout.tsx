import CommonLayout from "@/components/common-layout";
import { PPObjectSansRegular } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import type { Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";

export const viewport: Viewport = {
  themeColor: "var(--primary)",
};

export const metadata: Metadata = {
  title: {
    template: "%s | Vidhanshu Borade",
    default: "Vidhanshu Borade",
  },
  description:
    "Vidhanshu Borade is a professional full-stack web and Android developer with extensive experience in designing software. Browse his portfolio website to learn more about his qualifications, courses, achievements, and experience.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Vidhanshu Borade",
    type: "website",
    images: ["https://i.postimg.cc/TYrMDwx5/profile.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vidhanshu Borade",
    images: ["https://i.postimg.cc/TYrMDwx5/profile.jpg"],
  },
  authors: [{ name: "Vidhanshu Borade" }],
  keywords: [
    "Vidhanshu Borade",
    "Vidhanshu",
    "portfolio",
    "borade",
    "Full-Stack Web Developer",
    "Android Developer",
    "Programming",
    "Software Design",
    "Qualifications",
    "Courses",
    "Achievements",
    "Experience",
    "Freelancer",
    "Student",
    "Competitive Programmer",
    "Competitive",
    "Programming",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("dark", PPObjectSansRegular.className)}>
        <CommonLayout>
          {children}
          <Toaster
            toastOptions={{
              duration: 3000,
              classNames: {
                error: "bg-rose-500",
                success: "bg-green-500",
                warning: "bg-yellow-500",
                info: "bg-blue-500",
              },
            }}
          />
        </CommonLayout>
        <Analytics />
      </body>
    </html>
  );
}

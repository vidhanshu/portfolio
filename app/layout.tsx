import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Vidhanshu Borade",
    default: "Vidhanshu Borade"
  },
  description: "Vidhanshu Borade is a professional full-stack web and Android developer with extensive experience in designing software. Browse his portfolio website to learn more about his qualifications, courses, achievements, and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

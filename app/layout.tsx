import CommonLayout from "@/components/common-layout";
import { PPObjectSansRegular } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Vidhanshu Borade",
    default: "Vidhanshu Borade",
  },
  description:
    "Vidhanshu Borade is a professional full-stack web and Android developer with extensive experience in designing software. Browse his portfolio website to learn more about his qualifications, courses, achievements, and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("dark", PPObjectSansRegular.className)}>
        <CommonLayout>{children}</CommonLayout>
      </body>
    </html>
  );
}

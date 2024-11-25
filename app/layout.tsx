import CommonLayout from "@/components/common-layout";
import { PPObjectSansRegular } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

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
      </body>
    </html>
  );
}

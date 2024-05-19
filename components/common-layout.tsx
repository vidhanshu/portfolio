"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Loader2,
  Minus,
  Square,
  Twitter,
  X,
} from "lucide-react";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import Logo from "@/components/logo";
import { NAV_ITEMS, SOCIALS } from "@/lib/constants";
import { NMachineRegular } from "@/lib/fonts";
import { usePathname, useRouter } from "next/navigation";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

///------------------------------------------------------------------------

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

///------------------------------------------------------------------------

const CommonLayout = ({ children }: React.PropsWithChildren) => {
  const router = useRouter();
  const pathname = usePathname();

  const container = useRef<HTMLDivElement>(null);

  // gsap animation to animate the layout window on load
  const { contextSafe } = useGSAP(
    () => {
      gsap.to(".gsap-container", { scale: 1, duration: 0.2, ease: "circ" });
    },
    { scope: container }
  );

  // set the primary color based on the route
  useLayoutEffect(() => {
    const color = NAV_ITEMS.find((item) => item.link === pathname)?.color;
    if (color) {
      document.documentElement
        .getElementsByClassName("dark")[0]
        .setAttribute("style", `--primary: ${color}`);
    }
  }, [pathname]);

  const showRouteChangeAnimationForHeroSection = contextSafe((link: string) => {
    if (link === pathname) return;

    gsap.to(".gsap-hero-container", {
      y: 100,
      opacity: 0,
      scale: 0.9,
      duration: 0.2,
      ease: "circ",
      onComplete: () => {
        router.push(link);
      },
    });
  });

  return (
    <div ref={container}>
      <LoadingUI />
      <main className="gsap-container scale-90 p-2 min-h-screen flex flex-col">
        <div className="flex border-border border rounded-tl">
          <div className="border-border border-r h-10 w-[39px] flex items-center justify-center">
            <Logo
              className="size-6 group cursor-pointer"
              pathProps={{
                className: "stroke-white group-hover:stroke-primary",
              }}
            />
          </div>
          <nav className="h-10 flex-1 flex items-center justify-center relative">
            <h1 className={cn("flex gap-x-2 items-center", NMachineRegular.className)}>
              vidhanshu
              <p className="text-primary">&lt;borade&gt;</p>
            </h1>
            <div className="flex gap-x-3 items-center absolute right-4 top-0 bottom-0 my-auto">
              <button>
                <Minus className="text-neutral-500 stroke-1 size-4 hover:text-white hover:stroke-2" />
              </button>
              <button>
                <Square className="text-neutral-500 stroke-1 size-3 hover:text-white hover:stroke-2" />
              </button>
              <button>
                <X className="text-neutral-700 stroke-2 size-4 hover:text-white hover:stroke-2" />
              </button>
            </div>
          </nav>
        </div>
        <div className="grid grid-cols-[40px_1fr] flex-1">
          <nav className="border-border border-x flex flex-col justify-center items-center gap-4 z-20">
            {NAV_ITEMS.map(({ link, icon: Icon, title, color }, idx) => {
              const active = pathname === link;

              return (
                <TooltipProvider delayDuration={0} key={idx}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={() => {
                          showRouteChangeAnimationForHeroSection(link);
                        }}
                      >
                        <Icon
                          className={cn(
                            "text-neutral-500 stroke-1 size-4 hover:text-primary hover:stroke-2",
                            { "text-primary stroke-2": active }
                          )}
                        />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent align="center" sideOffset={10} side="right">
                      {title}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              );
            })}
          </nav>
          <div className="border-border border-r max-h-[calc(100vh-99px)] overflow-auto overflow-x-hidden">
            {children}
          </div>
        </div>
        <div className="flex border-border border rounded-bl">
          <div className="border-border border-r h-10 w-[39px] flex items-center justify-center">
            <button className="size-2 bg-primary rounded-full" />
          </div>
          <footer className="flex-1 h-10 flex items-center justify-center relative">
            <p className={cn("text-neutral-500 text-sm", NMachineRegular.className)}>
              &copy; {new Date().getFullYear()} Vidhanshu Borade. All rights reserved.
            </p>
            <div className="flex gap-x-3 items-center absolute top-0 bottom-0 my-auto right-4">
              {SOCIALS.map(({ icon: Icon }, idx) => (
                <button key={idx}>
                  <Icon className="text-neutral-500 stroke-1 size-4 hover:text-primary hover:stroke-2" />
                </button>
              ))}
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default CommonLayout;

const LoadingUI = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (document.readyState !== "complete") {
      const handler = () => {
        gsap.to(".gsap-loader", {
          opacity: 0,
          duration: 0.5,
          ease: "circ",
          onComplete: () => setShow(false),
        });
      };
      window.addEventListener("load", handler);

      return () => {
        window.removeEventListener("load", handler);
      };
    } else {
      const timeout = window.setTimeout(() => {
        gsap.to(".gsap-loader", {
          opacity: 0,
          duration: 0.5,
          ease: "circ",
          onComplete: () => setShow(false),
        });
      }, 0);
      return () => window.clearTimeout(timeout);
    }
  }, []);

  return show ? (
    <main className="gsap-loader z-20 h-full w-full fixed flex items-center justify-center bg-background cursor-wait">
      <div className="inset-0 m-auto fixed w-[550px] h-[550px] bg-primary/30 blur-[150px] rounded-full" />

      <div className="flex max-w-3xl border rounded-l-sm rounded-r-sm bg-black/80">
        <div className="size-10 border-r border-border flex items-center justify-center">
          <Logo
            className="size-6 group cursor-pointer"
            pathProps={{ className: "stroke-white group-hover:stroke-primary" }}
          />
        </div>
        <div className="flex items-center justify-center px-16">
          <h1 className={cn("flex gap-x-2 items-center", NMachineRegular.className)}>
            vidhanshu
            <p className="text-primary">&lt;borade&gt;</p>
          </h1>
        </div>
        <div className="size-10 border-l border-border flex items-center justify-center">
          <Loader2 className="size-4 animate-spin" />
        </div>
      </div>
    </main>
  ) : null;
};

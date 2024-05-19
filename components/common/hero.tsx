"use client";

import React, { useRef } from "react";

import { NMachineRegular, PPNMedium, PPNUltraBold } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

///------------------------------------------------------------------------

const LETTERS = ["V", "I", "D", "H", "A", "N", "S", "H", "U"];

interface HeroSectionProps {
  pageTitle: string;
  heading: React.ReactNode;
  subheading?: string;
}

///------------------------------------------------------------------------

const HeroSection = ({
  heading,
  pageTitle,
  subheading = "I bring value to web development projects by merging technical expertise with creativity and aesthetics.",
}: HeroSectionProps) => {
  const pathname = usePathname();
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(".gsap-hero-container", {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.2,
        ease: "circ.out",
      });
    },
    { scope: container }
  );

  return (
    <div ref={container}>
      <div className="gsap-hero-container -translate-y-24" >
        <div className="relative h-[calc(100vh-99px)] w-full flex justify-center items-center overflow-hidden">
          {/* background huge infinite scrolling text */}
          <div
            className={cn(
              "absolute h-fit inset-0 my-auto flex overflow-x-hidden w-full",
              PPNUltraBold.className
            )}
          >
            <div className="animate-marquee whitespace-nowrap">
              {LETTERS.map((l, idx) => (
                <span key={idx} className="select-none text-[500px] text-[#131e14]/30 mx-4">
                  {l}
                </span>
              ))}
            </div>

            <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
              {LETTERS.map((l, idx) => (
                <span key={idx} className="select-none text-[500px] text-[#131e14]/30 mx-4">
                  {l}
                </span>
              ))}
            </div>
          </div>

          {/* main content */}
          <div className="flex flex-col gap-6 items-center justify-center z-10">
            <p
              className={cn(
                NMachineRegular.className,
                "gsap-title-text scale-90 text-base text-neutral-500 uppercase"
              )}
            >
              {pageTitle}
            </p>
            <h1
              className={cn("gsap-title-text scale-90 text-8xl text-center", PPNMedium.className)}
            >
              {heading}
            </h1>
            <p
              className={cn(
                NMachineRegular.className,
                "gsap-title-text scale-90 text-base text-neutral-500 max-w-xl text-center"
              )}
            >
              {subheading}
            </p>
          </div>
          <div className="scroll-line" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

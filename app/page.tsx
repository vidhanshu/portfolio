"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { NMachineRegular, PPNMedium, PPNUltraBold } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { useRef } from "react";

///------------------------------------------------------------------------
gsap.registerPlugin(useGSAP);

const LETTERS = ["V", "I", "D", "H", "A", "N", "S", "H", "U"];

///------------------------------------------------------------------------

const Landing = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(".gsap-left-radial", {
        top: "30%",
        left: 0,
        duration: 1,
        ease: "sine",
      });
      gsap.to(".gsap-right-radial", {
        top: 0,
        right: 0,
        duration: 1,
        ease: "sine",
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      className="relative overflow-hidden"
      ref={containerRef}
    >
      {/* blurred radials */}
      <div className="gsap-left-radial top-0 right-0 fixed w-[500px] h-[500px] bg-primary/30 blur-[150px] rounded-full" />
      <div className="gsap-right-radial bottom-0 fixed w-[500px] h-[500px] bg-primary/30 blur-[150px] rounded-full" />

      {/* background huge infinite scrolling text */}
      <div className="relative h-[calc(100vh-99px)] w-full flex justify-center items-center overflow-hidden">
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
              "text-base text-neutral-500"
            )}
          >
            HOME
          </p>
          <h1
            className={cn(
              "gsap-title-text text-8xl text-center",
              PPNMedium.className
            )}
          >
            Hi, I&apos;m Vidhanshu, <br />a{" "}
            <span className="text-primary">software </span>
            developer
          </h1>
          <p
            className={cn(
              NMachineRegular.className,
              "text-base text-neutral-500 max-w-xl text-center"
            )}
          >
            I bring value to web development projects by merging technical
            expertise with creativity and aesthetics.
          </p>
        </div>
        <div className="scroll-line" />
      </div>
    </div>
  );
};

export default Landing;

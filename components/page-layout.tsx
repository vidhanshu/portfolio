"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { PropsWithChildren, useRef } from "react";

///------------------------------------------------------------------------
gsap.registerPlugin(useGSAP);
///------------------------------------------------------------------------

const PageLayout = ({ children }: PropsWithChildren) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(".gsap-left-radial", { top: "30%", left: 0, duration: 1, ease: "sine" });
      gsap.to(".gsap-right-radial", { top: 0, right: 0, duration: 1, ease: "sine" });
    },
    { scope: containerRef },
  );

  return (
    <div className="relative overflow-hidden" ref={containerRef}>
      {/* blurred radials */}
      <div className="gsap-left-radial top-0 right-0 fixed w-[500px] h-[500px] bg-primary/30 blur-[150px] rounded-full -z-10" />
      <div className="gsap-right-radial bottom-0 fixed w-[500px] h-[500px] bg-primary/30 blur-[150px] rounded-full -z-10" />

      {children}
    </div>
  );
};

export default PageLayout;

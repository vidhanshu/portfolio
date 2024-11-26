"use client";

import { EXPERIENCE, fmAnimations } from "@/lib/constants";
import Section from "../section";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Disc2, SquareArrowUpRight, StickyNote } from "lucide-react";
import Image from "next/image";
import { PPNMedium } from "@/lib/fonts";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import Link from "next/link";

const ExperienceTimeline = () => {
  return (
    <Section className={cn("relative", PPNMedium.className)} wrapperClassName="space-y-4">
      {/* red line */}
      <div className="hidden md:block h-full min-h-[200px] w-[1px] top-0 left-0 right-0 bg-gradient-to-b from-primary/5 via-primary to-primary/5 mx-auto absolute" />
      {EXPERIENCE.map(({ company, description, from, id, link, logo, title, to, certificate }, idx) => {
        const odd = idx & 1;

        return (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: fmAnimations.hidden,
              visible: fmAnimations.visible,
            }}
            key={idx}
            className={cn("flex items-center", odd && "md:justify-end")}
          >
            <div className="relative border p-4 rounded-sm md:w-[46%]">
              <div className="space-y-4">
                <div>
                  <h1 className="flex items-center gap-x-2 justify-between">
                    <div className="flex items-center gap-x-2">
                      <h1>{EXPERIENCE.length - idx}. </h1>
                      {title} @ {company}
                    </div>
                    <div className="w-[45px] h-[38px] relative">
                      <Image
                        fill
                        src={logo}
                        alt={logo}
                        style={{
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  </h1>
                  <p className="text-muted-foreground text-xs">
                    {from} - {to}
                  </p>
                </div>
                <p className="text-sm">{description}</p>
                <div className="flex items-center gap-x-4">
                  {certificate && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="border p-2 rounded-md">
                          <Link href={certificate} target="_blank">
                            <StickyNote className="size-4" />
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent>Certificate</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                  {link && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="border p-2 rounded-md">
                          <Link href={link} target="_blank">
                            <SquareArrowUpRight className="size-4" />
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent>Link</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  )}
                </div>
              </div>
              <div
                className={cn(
                  "hidden md:block h-[1px] w-[30px] from-primary/70 to-primary/5  absolute top-0 bottom-0 my-auto",
                  odd ? "-left-[30px] bg-gradient-to-l" : "-right-[30px] bg-gradient-to-r"
                )}
              />
              <Disc2 className={cn("size-4 text-primary absolute top-0 bottom-0 my-auto", odd ? "-left-[50px]" : "-right-[50px]")} />
            </div>
          </motion.div>
        );
      })}
    </Section>
  );
};

export default ExperienceTimeline;

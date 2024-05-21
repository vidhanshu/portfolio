"use client";

import { fmAnimations } from "@/lib/constants";
import { PPNMedium } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Github, MoveUpRight, RedoIcon } from "lucide-react";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import Link from "next/link";
import { Button } from "../ui/button";

///---------------------------------------------------------------------------------------------------------

interface ProjectCardProps {
  idx: number;
  tags: string[];
  name: string;
  image: string;
  year: string;
  github: string;
  live: string;
}

///---------------------------------------------------------------------------------------------------------

const ProjectCard = ({ idx, tags, name, image, year, github, live }: ProjectCardProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: fmAnimations.hidden,
        visible: fmAnimations.visible,
      }}
      className="group/card border border-border rounded-sm px-8 py-20 bg-background/40 backdrop-blur-sm"
    >
      <div className="flex relative justify-between items-center gap-x-4">
        <div className="flex gap-x-4 items-start w-full max-w-[425px]">
          <p
            className={cn(
              PPNMedium.className,
              "w-8 ease-out duration-300 transition-all text-base text-neutral-600 group-hover/card:w-0 overflow-hidden"
            )}
          >
            {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
          </p>
          <div className="space-y-6">
            <h1 className="text-5xl max-w-md">{name}</h1>
            <div>
              {tags.length > 3 ? (
                <>
                  {tags.slice(0, 3).map((tag, idx) => (
                    <span
                      className={cn(
                        "border border-border mr-2 rounded-full py-2 px-4 bg-background/40",
                        PPNMedium.className,
                        "text-sm text-neutral-500"
                      )}
                      key={idx}
                    >
                      {tag}
                    </span>
                  ))}
                  <TooltipProvider delayDuration={0}>
                    <Tooltip>
                      <TooltipTrigger>
                        <span
                          className={cn(
                            "border border-border mr-2 rounded-full py-2 px-4 bg-background/40",
                            PPNMedium.className,
                            "text-sm text-neutral-500"
                          )}
                        >
                          +{tags.length - 3}
                        </span>
                      </TooltipTrigger>
                      <TooltipContent>{tags.slice(3).join(", ")}</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </>
              ) : (
                tags.map((tag, idx) => (
                  <span
                    className={cn(
                      "border border-border mr-2 rounded-full py-2 px-4 bg-background/40",
                      PPNMedium.className,
                      "text-sm text-neutral-500"
                    )}
                    key={idx}
                  >
                    {tag}
                  </span>
                ))
              )}
            </div>
          </div>
        </div>
        <div className="flex-1 group/image-container">
          <Image
            className="border duration-300 opacity-0 group-hover/card:opacity-50 rounded-md transition-all ease-in rotate-0 scale-75 group-hover/card:scale-100 group-hover/image-container:-rotate-0 max-w-[420px] absolute aspect-video -top-24"
            src={image}
            width={640}
            height={314}
            alt={name}
          />
          <Image
            className="border  duration-300 opacity-0 group-hover/card:opacity-75 rounded-md transition-all ease-in rotate-0 scale-75 group-hover/card:scale-100 group-hover/image-container:-rotate-2 max-w-[420px] absolute aspect-video -top-24"
            src={image}
            width={640}
            height={314}
            alt={name}
          />
          <Image
            className="border duration-300 opacity-0 group-hover/card:opacity-100 rounded-md transition-all ease-in rotate-0 scale-75 group-hover/card:scale-100 group-hover/image-container:-rotate-6 max-w-[420px] absolute aspect-video -top-24"
            src={image}
            width={640}
            height={314}
            alt={name}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1
            className={cn(
              "flex gap-x-2 items-center text-base text-neutral-600",
              PPNMedium.className
            )}
          >
            {year}
          </h1>
          <Link className="transition-all ease-in opacity-0 group-hover/card:opacity-100" href={github} target="_blank">
            <Button variant="link" className="px-0 text-neutral-500 hover:text-primary">
              github
            </Button>
          </Link>
          <Link className="transition-all ease-in opacity-0 group-hover/card:opacity-100" href={live} target="_blank">
            <Button variant="link" className="px-0 text-neutral-500 hover:text-primary">
              live
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

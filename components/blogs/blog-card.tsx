"use client";

import { fmAnimations } from "@/lib/constants";
import { PPNMedium } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import Link from "next/link";
import { Button } from "../ui/button";
import { Calendar, Timer } from "lucide-react";

///---------------------------------------------------------------------------------------------------------

interface BlogCardProps {
  idx: number;
  tags: string[];
  description: string;
  name: string;
  image: string;
  slug: string;
  ttRead: string;
  date: Date;
}

///---------------------------------------------------------------------------------------------------------

const BlogCard = ({ idx, tags, name, image, slug, ttRead, description, date }: BlogCardProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: fmAnimations.hidden,
        visible: fmAnimations.visible,
      }}
      className={cn("group/card border border-border rounded-sm px-4 md:px-8 py-4 md:py-16 bg-background/40 backdrop-blur-sm", PPNMedium.className)}
    >
      <div className="flex-col md:flex-row flex relative justify-between items-center gap-x-4">
        <Link href={`/blogs/${slug}`}>
          <Image className="md:hidden border rounded-md max-w-full md:max-w-[420px] aspect-video mb-8" src={image} width={640} height={314} alt={name} />
        </Link>
        <div className="flex gap-x-4 items-start w-full max-w-[425px]">
          <p className={cn(PPNMedium.className, "w-10 ease-out duration-300 transition-all text-base text-neutral-600 md:group-hover/card:w-0 overflow-hidden")}>
            {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
          </p>
          <div className="space-y-6">
            <h1 className="text-sm text-neutral-600">{date.toLocaleDateString()}</h1>
            <h1 className="text-3xl md:text-xl max-w-md">{name}</h1>
            {description ? (
              <p className="text-muted-foreground text-xs">
                {description.slice(0, 100)}...{" "}
                <Link href={`/blogs/${slug}`} className={`text-primary hover:underline`}>
                  Read more
                </Link>
              </p>
            ) : null}
            <div className="flex items-center flex-wrap gap-y-2">
              {tags.length > 3 ? (
                <>
                  {tags.slice(0, 3).map((tag, idx) => (
                    <span className={cn("border border-border mr-2 rounded-full h-6 flex items-center justify-center px-4 bg-background/40", "text-sm text-neutral-500")} key={idx}>
                      {tag}
                    </span>
                  ))}
                  <TooltipProvider delayDuration={0}>
                    <Tooltip>
                      <TooltipTrigger>
                        <span className={cn("border border-border mr-2 rounded-full h-6 flex items-center justify-center px-4 bg-background/40", "text-sm text-neutral-500")}>+{tags.length - 3}</span>
                      </TooltipTrigger>
                      <TooltipContent>{tags.slice(3).join(", ")}</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </>
              ) : (
                tags.map((tag, idx) => (
                  <span className={cn("border border-border mr-2 rounded-full h-6 flex items-center justify-center px-4 bg-background/40", "text-sm text-neutral-500")} key={idx}>
                    {tag}
                  </span>
                ))
              )}
            </div>
          </div>
        </div>
        <div className="hidden md:block flex-1 group/image-container">
          <Link href={`/blogs/${slug}`}>
            <>
              <Image
                className="border rounded-md transition-all ease-in rotate-0 scale-75 group-hover/card:scale-100 group-hover/image-container:-rotate-0 max-w-[420px] absolute aspect-video top-0 bottom-0 my-auto"
                src={image}
                width={640}
                height={314}
                alt={name}
              />
              <Image
                className="border  rounded-md transition-all ease-in rotate-0 scale-75 group-hover/card:scale-100 group-hover/image-container:-rotate-2 max-w-[420px] absolute aspect-video top-0 bottom-0 my-auto"
                src={image}
                width={640}
                height={314}
                alt={name}
              />
              <Image
                className="border rounded-md transition-all ease-in rotate-0 scale-75 group-hover/card:scale-100 group-hover/image-container:-rotate-6 max-w-[420px] absolute aspect-video top-0 bottom-0 my-auto"
                src={image}
                width={640}
                height={314}
                alt={name}
              />
            </>
          </Link>
        </div>
        <div className="mt-4 md:mt-0 flex items-center md:flex-col gap-2">
          <h1 className={cn("flex gap-x-2 items-center text-sm text-neutral-600", PPNMedium.className)}>
            <Timer className="size-4" /> {ttRead}min.
          </h1>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ACHIEVEMENTS, fmAnimations } from "@/lib/constants";
import { PPNMedium } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import TagsRenderer from "./tags-renderer";

const AnimatedAccordion = ({ achievements, shootingStar = false }: { achievements: typeof ACHIEVEMENTS; shootingStar?: boolean }) => {
  const [value, setValue] = useState("");

  return (
    <Accordion type="single" collapsible className={cn("w-full relative space-y-8", shootingStar && "my-32")} value={value} onValueChange={(val) => setValue(val)}>
      {shootingStar && (
        <>
          {/* shooting star before */}
          <div className="w-[1px] inset-x-0 mx-auto -top-32 h-32 bg-gradient-to-t from-primary/70 to-primary/5 absolute" />
          {/* shooting star after */}
          <div className="w-[1px] inset-x-0 mx-auto -bottom-32 h-32 bg-gradient-to-b from-primary/70 to-primary/5 absolute" />
        </>
      )}
      {achievements.map(({ title, tags, certificate, image, date, description, news }, idx) => (
        <motion.div
          key={idx}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: fmAnimations.hidden,
            visible: fmAnimations.visible,
          }}
          className="group/card border border-border rounded-sm px-4 md:px-8 bg-background/40 backdrop-blur-sm"
        >
          <AccordionItem asChild className="pb-4" value={`item-${idx + 1}`}>
            <>
              <div className="flex md:flex-row flex-col py-4 md:py-16 relative justify-between items-center gap-4">
                <div className="flex gap-x-4 items-start w-full max-w-[425px]">
                  <p className={cn(PPNMedium.className, "w-12 md:w-8 md:ease-out md:duration-300 md:transition-all text-base text-neutral-600 md:group-hover/card:w-0 overflow-hidden")}>
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </p>
                  <div className="space-y-6">
                    <h1 className="text-3xl md:text-4xl max-w-md">{title}</h1>
                    <TagsRenderer tags={tags} maxCount={2} />
                  </div>
                </div>
                <div className="flex items-center justify-center flex-col">
                  <h1 className={cn("text-xs text-neutral-600", PPNMedium.className)}>{date}</h1>
                  <AccordionTrigger open={value === `item-${idx + 1}`} />
                </div>
              </div>
              <AccordionContent className="border-t py-4 md:py-8">
                <div className="flex flex-col md:flex-row gap-x-6">
                  <Image src={image} width={471} height={266} className="aspect-square h-40 md:aspect-video object-cover rounded-sm" alt={title} />
                  <div className={cn("flex flex-col justify-between gap-6", PPNMedium.className)}>
                    <p className="text-xs text-neutral-500">{date}</p>
                    <p className="text-base">{description}</p>
                    <div className="flex gap-2 items-center flex-wrap">
                      <TagsRenderer tags={tags} maxCount={tags.length} className="text-xs py-1 px-3" />
                    </div>
                    <div className="flex gap-x-8 items-center">
                      {certificate && (
                        <Link target="_blank" href={certificate}>
                          <Button variant="link" className="px-0 hover:underline hover:text-primary">
                            Certificate
                          </Button>
                        </Link>
                      )}
                      {news && (
                        <Link href={news} target="_blank">
                          <Button variant="link" className="px-0 hover:underline hover:text-primary">
                            News
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </>
          </AccordionItem>
        </motion.div>
      ))}
    </Accordion>
  );
};

export default AnimatedAccordion;

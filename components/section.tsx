"use client";

import { fmAnimations } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { PropsWithChildren } from "react";

const Section = ({
  sectionTitle,
  children,
  className,
  wrapperClassName,
  ...props
}: { sectionTitle?: PropsWithChildren["children"]; wrapperClassName?: string } & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <section className={cn("py-16 px-4", className)} {...props}>
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: fmAnimations.hidden,
          visible: fmAnimations.visible,
        }}
        className={cn("text-4xl md:text-5xl text-center mb-12")}
      >
        {sectionTitle}
      </motion.h1>
      <div className={cn("mx-auto max-w-screen-lg", wrapperClassName)}>{children}</div>
    </section>
  );
};

export default Section;

"use client";

import { fmAnimations } from "@/lib/constants";
import { PPObjectSansRegular } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import WindowScreen from "../common/window-screen";
import Section from "../section";
import { Button } from "../ui/button";

const GetInTouch = () => {
  return (
    <Section
      id="get-in-touch-section"
      sectionTitle={
        <>
          Get in <span className="text-primary">Touch</span>
        </>
      }
      className="mx-auto max-w-screen-lg"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: fmAnimations.hidden,
          visible: fmAnimations.visible,
        }}
      >
        <WindowScreen containerProps={{ className: "w-full bg-background/40" }} title="Collaboration">
          <div className="px-4 md:px-8 py-10 flex md:flex-row flex-col gap-x-8 items-center md:items-start">
            <div className="relative">
              <Image alt="profile-pic" src="/profile.jpg" width={160} height={160} className="aspect-square max-w-[160] rounded-full" />
              <button className="size-8 absolute bottom-0 right-0 bg-background rounded-full border">👋</button>
            </div>
            <div className="flex flex-col items-center md:block">
              <h1 className={cn("mt-6 md:mt-0 text-center md:text-left text-3xl md:text-5xl mb-6", PPObjectSansRegular.className)}>Let&apos;s work together on your next project</h1>
              <Link href="/contact">
                <Button size="primary" variant="primary">
                  let&apos;s-get-in-touch
                </Button>
              </Link>
            </div>
          </div>
        </WindowScreen>
      </motion.div>
    </Section>
  );
};

export default GetInTouch;

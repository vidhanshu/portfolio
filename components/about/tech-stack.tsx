"use client";

import { TECHSTACK, fmAnimations } from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import WindowScreen from "../common/window-screen";
import Section from "../section";

const TechStack = () => {
  return (
    <Section
      id="gsap-tech-stack"
      sectionTitle={
        <>
          Some of the techs I like to <br />
          <span className="text-primary">work with</span>
        </>
      }
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
        <WindowScreen shootingStar containerProps={{ className: "w-full my-32" }} title="techs">
          <div className="grid grid-cols-4 gap-10 py-8 px-8">
            {TECHSTACK.map(({ image, name }, idx) => (
              <Image
                key={idx}
                alt={name}
                src={image}
                width={220}
                height={56}
                className="h-[30px] w-[150px] opacity-50"
              />
            ))}
          </div>
        </WindowScreen>
      </motion.div>
    </Section>
  );
};

export default TechStack;

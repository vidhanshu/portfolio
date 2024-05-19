"use client";

import Section from "../section";
import WindowScreen from "../common/window-screen";
import { TECHSTACK } from "@/lib/constants";
import Image from "next/image";

const TechStack = () => {
  return (
    <Section
      sectionTitle={
        <>
          Some of the techs I like to <br />
          <span className="text-primary">work with</span>
        </>
      }
    >
      <WindowScreen shootingStar containerProps={{ className: "w-full my-32" }} title="techs">
        <div className="grid grid-cols-4 gap-10 py-8 px-8">
          {TECHSTACK.map(({ image, name }, idx) => (
            <Image key={idx} alt={name} src={image} width={220} height={56} className="h-[30px] w-[150px] opacity-50" />
          ))}
        </div>
      </WindowScreen>
    </Section>
  );
};

export default TechStack;

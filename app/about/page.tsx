import TechStack from "@/components/about/tech-stack";
import HeroSection from "@/components/common/hero";
import AboutMe from "@/components/landing/about-me";
import GetInTouch from "@/components/landing/get-in-touch";
import PageLayout from "@/components/page-layout";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About",
  description: "About page of Vidhanshu Borade",
};

const About = () => {
  return (
    <PageLayout>
      <HeroSection
        pageTitle="ABOUT"
        heading={
          <>
            Let&apos;s get to <br />
            know <span className="text-primary">each other </span>
          </>
        }
        subheading="Let me introduce myself, my workflows, my collaborations, and the technologies I like to use to bring my projects to life."
      />
      <AboutMe />
      <TechStack />
      <GetInTouch />
    </PageLayout>
  );
};

export default About;

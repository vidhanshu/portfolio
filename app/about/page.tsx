import HeroSection from "@/components/common/hero";
import PageLayout from "@/components/page-layout";
import React from "react";

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
    </PageLayout>
  );
};

export default About;

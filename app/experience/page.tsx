import HeroSection from "@/components/common/hero";
import ExperienceTimeline from "@/components/experience/experience-timeline";
import GetInTouch from "@/components/landing/get-in-touch";
import PageLayout from "@/components/page-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description: "Experience of Vidhanshu Borade",
};

const Experience = () => {
  return (
    <PageLayout>
      <HeroSection
        pageTitle="EXPERIENCE"
        heading={
          <>
            Discover My
            <br />
            <span className="text-primary">Tech Career Timeline</span>
          </>
        }
        subheading="Embark on a Tech Odyssey: From Code Enthusiast to Seasoned Developer, Unraveling My Professional Evolution and Technical Expertise."
      />
      <ExperienceTimeline />
      <GetInTouch />
    </PageLayout>
  );
};

export default Experience;

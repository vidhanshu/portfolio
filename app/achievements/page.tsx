import HeroSection from "@/components/common/hero";
import GetInTouch from "@/components/landing/get-in-touch";
import PageLayout from "@/components/page-layout";
import Achievements from "@/components/achievements/achievement";

const Achievement = () => {
  return (
    <PageLayout>
      <HeroSection
        pageTitle="ACHIEVEMENTS"
        heading={
          <>
            Coding
            <br />
            <span className="text-primary">Milestone Moments</span>
          </>
        }
        subheading="Let me introduce myself, my workflows, my collaborations, and the technologies I like to use to bring my projects to life."
      />
      <Achievements />
      <GetInTouch />
    </PageLayout>
  );
};

export default Achievement;

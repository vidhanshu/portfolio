import HeroSection from "@/components/common/hero";
import AboutMe from "@/components/landing/about-me";
import GetInTouch from "@/components/landing/get-in-touch";
import Projects from "@/components/landing/projects";
import PageLayout from "@/components/page-layout";

const Landing = () => {
  return (
    <PageLayout>
      <HeroSection
        pageTitle="HOME"
        heading={
          <>
            Hi, I&apos;m Vidhanshu, <br />a <span className="text-primary">software </span>
            developer
          </>
        }
      />
      <Projects />
      <AboutMe />
      <GetInTouch />
    </PageLayout>
  );
};

export default Landing;

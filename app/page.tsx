import HeroSection from "@/components/common/hero";
import FullstackDeveloper from "@/components/landing/fullstack-develop";
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
      <FullstackDeveloper />
    </PageLayout>
  );
};

export default Landing;

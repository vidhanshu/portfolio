import HeroSection from "@/components/common/hero";
import AboutMe from "@/components/landing/about-me";
import GetInTouch from "@/components/landing/get-in-touch";
import Projects from "@/components/landing/projects";
import PageLayout from "@/components/page-layout";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

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
        extra={
          <Button className="transition-transform" icon={Download} variant="primary" size="primary">
            Resume
          </Button>
        }
      />
      <Projects />
      <AboutMe />
      <GetInTouch />
    </PageLayout>
  );
};

export default Landing;

import HeroSection from "@/components/common/hero";
import GetInTouch from "@/components/landing/get-in-touch";
import PageLayout from "@/components/page-layout";
import PProjects from "@/components/landing/projects";

const Projects = () => {
  return (
    <PageLayout>
      <HeroSection
        pageTitle="PROJECTS"
        heading={
          <>
            A collection my
            <br />
            <span className="text-primary">best projects</span>
          </>
        }
        subheading="Embark on a Tech Odyssey: From Code Enthusiast to Seasoned Developer, Unraveling My Professional Evolution and Technical Expertise."
      />
      <PProjects shootingStar showButton={false} />
      <GetInTouch />
    </PageLayout>
  );
};

export default Projects;

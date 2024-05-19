import Section from "@/components/section";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/lib/constants";
import ProjectCard from "./project-card";

const Projects = () => {
  return (
    <Section
      sectionTitle={
        <>
          Projects <span className="text-primary">Highlights </span>
        </>
      }
    >
      <div className="space-y-8">
        {PROJECTS.map((card, idx) => (
          <ProjectCard key={idx} idx={idx} {...card} />
        ))}
      </div>
      <div className="flex justify-center mt-5">
        <Button variant="primary" size="primary">all-projects</Button>
      </div>
    </Section>
  );
};

export default Projects;

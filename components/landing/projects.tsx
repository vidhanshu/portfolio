import Section from "@/components/section";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/lib/constants";
import ProjectCard from "./project-card";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Projects = ({
  shootingStar = false,
  showButton = true,
}: {
  shootingStar?: boolean;
  showButton?: boolean;
}) => {
  return (
    <Section
      id="projects-section"
      sectionTitle={
        <>
          Projects <span className="text-primary">Highlights </span>
        </>
      }
    >
      <div className={cn("space-y-8 relative", shootingStar ? "my-32" : "")}>
        {shootingStar && (
          <>
            {/* ं shooting star before */}
            <div className="w-[1px] inset-x-0 mx-auto -top-32 h-32 bg-gradient-to-t from-primary/70 to-primary/5 absolute" />
            {/* ं shooting star after */}
            <div className="w-[1px] inset-x-0 mx-auto -bottom-32 h-32 bg-gradient-to-b from-primary/70 to-primary/5 absolute" />
          </>
        )}
        {PROJECTS.map((card, idx) => (
          <ProjectCard key={idx} idx={idx} {...card} />
        ))}
      </div>
      {showButton && (
        <div className="flex justify-center mt-5">
          <Link href="/projects">
            <Button variant="primary" size="primary">
              all-projects
            </Button>
          </Link>
        </div>
      )}
    </Section>
  );
};

export default Projects;

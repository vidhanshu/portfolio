import PageLayout from "@/components/page-layout";
import { PROJECTS } from "@/lib/constants";
import { NMachineRegular, PPNMedium } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Section from "@/components/section";
import ProjectCard from "@/components/landing/project-card";
import GetInTouch from "@/components/landing/get-in-touch";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(params: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const slug = (await params.params).slug;
  const idx = PROJECTS.findIndex((proj) => proj.slug === slug);
  const data = PROJECTS[idx];
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: data?.name,
    description: data?.description,
    openGraph: {
      images: [data?.image, ...previousImages],
    },
    keywords: data?.tags,
  };
}

const Project = ({ params: { slug } }: { params: { slug: string } }) => {
  const idx = PROJECTS.findIndex((proj) => proj.slug === slug);

  if (idx === -1) return notFound();

  const { name, tags, github, image, live, year, description } = PROJECTS[idx];

  return (
    <PageLayout>
      <section className="pt-32 pb-8 md:pb-0 md:pt-0 md:min-h-[calc(100vh-300px)] flex flex-col gap-4 items-center justify-center z-10">
        <p className={cn(NMachineRegular.className, "text-base text-neutral-500 uppercase")}>project</p>
        <h1 className={cn("text-5xl md:text-9xl text-center", PPNMedium.className)}>{name}</h1>
        <div className="flex items-center flex-wrap gap-y-2 justify-center md:justify-start">
          {tags.map((tag, idx) => (
            <span className={cn("border border-border mr-2 rounded-full h-6 flex items-center justify-center px-4 bg-background/40", PPNMedium.className, "text-sm text-neutral-500")} key={idx}>
              {tag}
            </span>
          ))}
        </div>
      </section>
      <Image alt={name} src={image} width={300} height={150} className="md:hidden rounded-md z-10 aspect-video mx-auto" />
      <section className="relative max-w-screen-xl mx-auto h-[600px] mb-[100px] hidden md:block">
        <Image alt={name} src={image} fill className="rounded-md z-10" />
        <div className="scroll-line-na hidden md:block" />
      </section>
      <Section>
        <div className="grid md:grid-cols-6 gap-y-8 gap-x-16">
          <div className="md:col-span-6">
            <p className={cn(NMachineRegular.className, "text-sm font-bold text-neutral-500")}>year</p>
            <h1 className={cn("text-lg", PPNMedium.className)}>{year}</h1>
          </div>

          <div className="md:col-span-4">
            <p className={cn(NMachineRegular.className, "text-sm font-bold text-neutral-500")}>title</p>
            <h1 className={cn("text-lg", PPNMedium.className)}>{name}</h1>
          </div>
          <div className="md:col-span-2">
            <p className={cn(NMachineRegular.className, "text-sm font-bold text-neutral-500")}>tags</p>
            <div className="flex flex-col gap-2 mt-2">
              {tags.map((tag, idx) => (
                <span
                  className={cn("w-fit border border-border mr-2 rounded-full h-6 flex items-center justify-center px-4 bg-background/40", PPNMedium.className, "text-sm text-neutral-500")}
                  key={idx}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="md:col-span-4">
            <p className={cn(NMachineRegular.className, "text-sm font-bold text-neutral-500")}>description</p>
            <h1 className={cn("text-lg", PPNMedium.className)}>{description}</h1>
          </div>
          <div className="md:col-span-2 flex flex-col gap-4">
            <Link href={github} target="_blank">
              <Button className="transition-transform" icon={Github} variant="primary" size="default">
                Github
              </Button>
            </Link>
            <Link href={live} target="_blank">
              <Button className="transition-transform" icon={ExternalLink} variant="primary" size="default">
                Live
              </Button>
            </Link>
          </div>
        </div>
      </Section>
      <Section
        sectionTitle={
          <>
            Up <span className="text-primary">Next</span>
          </>
        }
      >
        <ProjectCard idx={idx} {...PROJECTS[(idx + 1) % PROJECTS.length]} />
      </Section>
      <GetInTouch />
    </PageLayout>
  );
};

export default Project;

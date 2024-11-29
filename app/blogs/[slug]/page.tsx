import dyn from "next/dynamic";
import { getBlogById, getBlogIds } from "@/actions/blogs";

const BlogCard = dyn(() => import("@/components/blogs/blog-card"), { ssr: false });

import RenderMarkdown from "@/components/blogs/render-markdown";
import HeroSection from "@/components/common/hero";
import PageLayout from "@/components/page-layout";
import Section from "@/components/section";
import { PPNMedium } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(params: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const slug = (await params.params).slug;
  const { data } = await getBlogById(slug);

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: data?.title,
    description: data?.description,
    openGraph: {
      images: [data?.image, ...previousImages],
    },
    keywords: data?.tags,
  };
}

const BlogPage = async ({ params }: { params: { slug: string } }) => {
  const [{ data }, { data: _ids = [] }] = await Promise.all([getBlogById(params.slug), getBlogIds()]);
  const ids = _ids.map(({ _id }) => _id);
  const nextIdx = (ids.findIndex((id) => id == params.slug) + 1) % ids.length;
  const nextId = ids[nextIdx];
  const { data: nextBlog } = await getBlogById(nextId);

  const splitted = data?.title?.split(" ") as [];
  const highlightCount = splitted.length > 3 ? splitted.length - 3 : splitted.length - 1;

  return (
    <PageLayout>
      <HeroSection
        pageTitle="BLOGS"
        heading={
          <>
            {splitted.slice(0, highlightCount).join(" ")}
            <br />
            <span className="text-primary">{splitted.slice(highlightCount).join(" ")}</span>
          </>
        }
        subheading={data.description}
      />
      <Section className={cn(PPNMedium.className, "max-w-screen-md mx-auto")}>
        <div className="space-y-4 mb-8">
          <div className="h-[1px] w-full bg-gradient-to-r from-primary/5 via-primary to-primary/5 my-4" />
          <div className="flex items-center gap-x-4 text-muted-foreground">
            {data.createdAt.toLocaleDateString()}
            {" . "}
            {data.time_to_read} min to read
          </div>
          <div className="flex gap-x-2 items-center">
            {(data.tags as string[]).map((tag, idx) => (
              <span className={cn("border border-border mr-2 rounded-full h-6 flex items-center justify-center px-4 bg-background/40", "text-sm text-neutral-500")} key={idx}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <RenderMarkdown markdown={data.markdown} />
      </Section>
      {nextBlog && (
        <Section
          sectionTitle={
            <>
              Up <span className="text-primary">Next</span>
            </>
          }
        >
          <BlogCard
            idx={nextIdx}
            date={nextBlog.createdAt}
            description={nextBlog.description}
            ttRead={nextBlog.time_to_read}
            image={nextBlog.image}
            name={nextBlog.title}
            slug={nextBlog.id}
            tags={nextBlog.tags}
          />
        </Section>
      )}
    </PageLayout>
  );
};

export default BlogPage;

export const dynamic = "force-static";

export async function generateStaticParams() {
  const { data } = await getBlogIds();
  if (!data) return [];

  return data.map(({ _id }) => ({ slug: _id.toString() })).filter((obj) => !!obj.slug) as { slug: string }[];
}

import { getBlogs } from "@/actions/blogs";
import Section from "../section";
import dynamic from "next/dynamic";
const BlogCard = dynamic(() => import("./blog-card"), { ssr: false });

const Blogs = async () => {
  const { data } = await getBlogs();

  return (
    <Section wrapperClassName="space-y-14" sectionTitle="Blogs">
      {data?.map((blog, idx) => {
        return <BlogCard key={idx} idx={idx} date={blog.createdAt} description={blog.description} ttRead={blog.time_to_read} image={blog.image} name={blog.title} slug={blog.id} tags={blog.tags} />;
      })}
    </Section>
  );
};

export default Blogs;

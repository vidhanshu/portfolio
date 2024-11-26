import Blogs from "@/components/blogs/blogs";
import HeroSection from "@/components/common/hero";
import GetInTouch from "@/components/landing/get-in-touch";
import PageLayout from "@/components/page-layout";
import React from "react";

const BlogsPage = () => {
  return (
    <PageLayout>
      <HeroSection
        pageTitle="BLOGS"
        heading={
          <>
            Insights from my <span className="text-primary"> perspective</span>
            <br /> on tech.
          </>
        }
        subheading="Whether you have a project you want to work on together or just want to have a chat, you are in the right place: let's get in touch."
      />
      <Blogs />
      <GetInTouch />
    </PageLayout>
  );
};

export default BlogsPage;

import React from "react";

import HeroSection from "@/components/common/hero";
import PageLayout from "@/components/page-layout";

const Contact = () => {
  return (
    <PageLayout>
      <HeroSection
        pageTitle="CONTACT"
        heading={
          <>
            Let&apos;s grab a virtual
            <br />
            coffee or <span className="text-primary">drop a line </span>
          </>
        }
        subheading="Whether you have a project you want to work on together or just want to have a chat, you are in the right place: let's get in touch."
      />
    </PageLayout>
  );
};

export default Contact;

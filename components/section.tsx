import { PPNMedium } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React, { PropsWithChildren } from "react";

const Section = ({
  sectionTitle,
  children,
  className,
  ...props
}: { sectionTitle?: PropsWithChildren["children"] } & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <section className={cn("py-16", className)} {...props}>
      <h1 className={cn("scope-90 text-5xl text-center mb-12")}>{sectionTitle}</h1>
      <div className="mx-auto max-w-screen-lg">{children}</div>
    </section>
  );
};

export default Section;

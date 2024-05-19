import HeroSection from "@/components/common/hero";
import PageLayout from "@/components/page-layout";

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
      />
    </PageLayout>
  );
};

export default Landing;

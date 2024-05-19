import Image from "next/image";
import WindowScreen from "../common/window-screen";
import Section from "../section";
import { cn } from "@/lib/utils";
import { PPObjectSansRegular } from "@/lib/fonts";
import { Button } from "../ui/button";
import Link from "next/link";

const GetInTouch = () => {
  return (
    <Section
      id="get-in-touch-section"
      sectionTitle={
        <>
          Get in <span className="text-primary">Touch</span>
        </>
      }
      className="mx-auto max-w-screen-lg"
    >
      <WindowScreen containerProps={{ className: "w-full bg-background/40" }} title="Collaboration">
        <div className="px-8 py-10 flex gap-x-8 items-start">
          <div className="relative">
            <Image
              alt="profile-pic"
              src="/profile.jpg"
              width={160}
              height={160}
              className="aspect-square max-w-[160] rounded-full"
            />
            <button className="size-8 absolute bottom-0 right-0 bg-background rounded-full border">
              👋
            </button>
          </div>
          <div>
            <h1 className={cn("text-5xl mb-6", PPObjectSansRegular.className)}>
              Let&apos;s work together on your next project
            </h1>
            <Link href="/contact">
              <Button size="primary" variant="primary">
                let&apos;s-get-in-touch
              </Button>
            </Link>
          </div>
        </div>
      </WindowScreen>
    </Section>
  );
};

export default GetInTouch;

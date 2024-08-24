"use client";

import { HOBBIES, SOCIALS } from "@/lib/constants";
import gsap from "gsap";
import { Draggable } from "gsap/all";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import WindowScreen from "../common/window-screen";
import Section from "../section";
import { Button } from "../ui/button";
import { useMediaQuery } from "usehooks-ts";

///-------------------------------------------------------------------------------------------------------------

gsap.registerPlugin(Draggable);

///-------------------------------------------------------------------------------------------------------------

const AboutMe = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const elems = ["#gsap-draggable-1", "#gsap-draggable-2", "#gsap-draggable-3", "#gsap-draggable-4", "#gsap-draggable-5"];
    if (isMobile) return;

    elems.forEach((id) => {
      Draggable.create(id, {
        bounds: ".gsap-container-bound",
        inertia: true,
      });
    });
    return () => {
      elems.forEach((elm) => Draggable.get(elm)?.kill());
    };
  }, [isMobile]);

  return (
    <Section
      id="fullstack-section"
      sectionTitle={
        <>
          Your <span className="text-primary">Fullstack Developer </span>
        </>
      }
    >
      <div className="relative min-h-screen md:min-h-fit md:h-screen space-y-4 gsap-container-bound flex flex-col gap-4 md:block">
        <WindowScreen
          containerProps={{
            id: "gsap-draggable-2",
            className: "md:absolute md:top-0 md:inset-x-0 md:mx-auto",
          }}
          title="about-me"
        >
          <div className="pl-4 max-w-2xl">
            <ol className="list-decimal space-y-2 text-neutral-500">
              <li>
                <div className="text-white">
                  Nice to meet you! I&apos;m Vidhanshu, I&apos;m a<span className="text-primary"> Fullstack Software Developer</span>.
                </div>
              </li>
              <li>
                <div className="text-white">
                  I&apos;m passionate about both <span className="text-blue-500">backend</span> and <span className="text-red-500">frontend</span> development, with a particular focus on creating
                  seamless user experiences. This is where both my
                  <span className="text-purple-500"> problem-solving</span> and <span className="text-yellow-500">technical skills</span> can be used at their best.
                </div>
              </li>
              <li>
                <div className="text-white">
                  I bring my <span className="text-cyan-500">expertise</span> in my collaborations with <span className="text-red-500">tech teams</span>,{" "}
                  <span className="text-blue-500">startups</span>, and <span className="text-lime-500">other professionals</span> in the field, to add value to the projects I work on.
                </div>
              </li>
              <li>
                <div className="text-white">
                  <span className="text-purple-500">Coding</span> for me is not just my work, I like <span className="text-red-500">experimenting</span> with many{" "}
                  <span className="text-orange-500">technologies</span>
                  and I also maintain some personal projects. Whenever I can, I like to contribute to <span className="text-cyan-500"> open-source</span> to give back to the community.
                </div>
              </li>
            </ol>
          </div>
        </WindowScreen>
        <WindowScreen
          containerProps={{
            id: "gsap-draggable-3",
            className: "md:absolute bottom-[10%] m-auto left-0",
          }}
          title="find-me-here"
        >
          <div className="pl-4">
            <ol className="list-decimal space-y-2 text-neutral-500">
              {SOCIALS.map(({ href, label }, idx) => (
                <li key={idx}>
                  <Link href={href} className="flex items-center gap-x-2 text-white hover:text-primary w-fit">
                    {label} <MoveUpRight className="size-4" />
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </WindowScreen>
        <WindowScreen
          containerProps={{
            id: "gsap-draggable-1",
            className: "md:absolute md:bottom-[40%] md:left-16 mx-auto md:mx-0",
          }}
          title="where-i-work"
        >
          <div className="pl-4">
            <ol className="list-decimal space-y-2 text-neutral-500">
              <li>
                <div className="text-white">
                  Currently Based in <span className="text-primary">Nagpur, IN</span>
                </div>
              </li>
              <li>
                <div className="text-white">
                  Working as Web developer at{" "}
                  <Link href="https://home.lief.care" className="text-primary">
                    Lief.Care
                  </Link>
                </div>
              </li>
            </ol>
          </div>
        </WindowScreen>
        <WindowScreen
          containerProps={{
            id: "gsap-draggable-4",
            className: "md:absolute md:bottom-[10%] md:inset-x-0 mx-auto",
          }}
          title="hobbies"
        >
          <div className="pl-4">
            <ol className="list-decimal space-y-2 text-neutral-500">
              {HOBBIES.map(({ icon, label }, idx) => (
                <li key={idx}>
                  <p className="text-white">
                    {icon} {label}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </WindowScreen>
        <WindowScreen
          containerProps={{
            id: "gsap-draggable-5",
            className: "md:absolute md:top-[40%] md:right-0 h-fit mx-auto md:mx-0",
          }}
          className="p-0 h-fit"
          title="portrait"
        >
          <Image alt="profile-pic" src="/profile.jpg" width={300} height={300} className="aspect-square max-w-full md:max-w-[300px] rounded-b-sm" />
        </WindowScreen>
      </div>
      <div className="flex justify-center mt-5">
        <Link href="/about">
          <Button variant="primary" size="primary">
            more-about-me
          </Button>
        </Link>
      </div>
    </Section>
  );
};

export default AboutMe;

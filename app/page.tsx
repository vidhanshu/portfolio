import { NMachineRegular, PPNMedium, PPNUltraBold } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const Landing = () => {
  return (
    <div>
      {/* hero section */}
      <div className="relative h-[calc(100vh-99px)] w-full flex justify-center items-center overflow-hidden">
        {/* scrolling text */}
        <div
          className={cn(
            "absolute h-fit inset-0 m-auto flex overflow-x-hidden w-full",
            PPNUltraBold.className
          )}
        >
          <div className="animate-marquee whitespace-nowrap">
            {LETTERS.map((l) => (
              <span className="text-[400px] text-[#131e14] mx-4">{l}</span>
            ))}
          </div>

          <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
            {LETTERS.map((l) => (
              <span className="text-[400px] text-[#131e14] mx-4">{l}</span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 items-center justify-center z-10">
          <p
            className={cn(
              NMachineRegular.className,
              "text-base text-neutral-500"
            )}
          >
            HOME
          </p>
          <h1 className={cn("text-8xl text-center", PPNMedium.className)}>
            Hi, I&apos;m Vidhanshu, <br />a{" "}
            <span className="text-primary">software </span>
            developer
          </h1>
          <p
            className={cn(
              NMachineRegular.className,
              "text-base text-neutral-500 max-w-xl text-center"
            )}
          >
            I bring value to web development projects by merging technical
            expertise with creativity and aesthetics.
          </p>
        </div>
        <div className="scroll-line" />
        <div className="scroll-line-1 scroll-line" />
        <div className="scroll-line-2" />
        <div className="scroll-line-3" />
      </div>
    </div>
  );
};

export default Landing;

const LETTERS = ["V", "I", "D", "H", "A", "N", "S", "H", "U"];

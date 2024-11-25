import { NMachineRegular, PPNMedium } from "@/lib/fonts";
import Logo from "../logo";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="max-w-screen-xl mx-auto py-16 px-4 md:px-8">
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between">
          <div className="flex justify-center md:justify-normal gap-x-2 items-center">
            <Logo
              className="size-6 group cursor-pointer"
              pathProps={{
                className: "stroke-primary",
              }}
            />
            <h1 className={cn("flex gap-x-2 items-center", NMachineRegular.className)}>
              vidhanshu
              <p className="text-primary">&lt;borade&gt;</p>
            </h1>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {NAV_ITEMS.slice(1, NAV_ITEMS.length).map(({ title, link }, idx) => (
              <Link className={cn(PPNMedium.className, "text-neutral-500 lowercase text-sm")} href={link} key={idx}>
                {title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

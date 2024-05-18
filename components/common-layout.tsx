import React from "react";
import {
  Facebook,
  Github,
  Home,
  Instagram,
  Laptop,
  Linkedin,
  Mail,
  Minus,
  Square,
  Trophy,
  Twitter,
  UserRound,
  X,
} from "lucide-react";

import Logo from "@/components/logo";
import { NMachineRegular } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const CommonLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <main className="p-2 min-h-screen flex flex-col">
      <div className="flex border-border border rounded-tl">
        <div className="border-border border-r h-10 w-[39px] flex items-center justify-center">
          <Logo
            className="size-6 group cursor-pointer"
            pathProps={{ className: "stroke-white group-hover:stroke-primary" }}
          />
        </div>
        <nav className="h-10 flex-1 flex items-center justify-center relative">
          <h1
            className={cn(
              "flex gap-x-2 items-center",
              NMachineRegular.className
            )}
          >
            vidhanshu
            <p className="text-primary">&lt;borade&gt;</p>
          </h1>
          <div className="flex gap-x-3 items-center absolute right-4 top-0 bottom-0 my-auto">
            <button>
              <Minus className="text-neutral-500 stroke-1 size-4 hover:text-white hover:stroke-2" />
            </button>
            <button>
              <Square className="text-neutral-500 stroke-1 size-3 hover:text-white hover:stroke-2" />
            </button>
            <button>
              <X className="text-neutral-700 stroke-2 size-4 hover:text-white hover:stroke-2" />
            </button>
          </div>
        </nav>
      </div>
      <div className="grid grid-cols-[40px_1fr] flex-1">
        <nav className="border-border border-x flex flex-col justify-center items-center gap-4">
          <button>
            <Home className="text-neutral-500 stroke-1 size-4 hover:text-primary hover:stroke-2" />
          </button>
          <button>
            <UserRound className="text-neutral-500 stroke-1 size-4 hover:text-primary hover:stroke-2" />
          </button>
          <button>
            <Laptop className="text-neutral-500 stroke-1 size-4 hover:text-primary hover:stroke-2" />
          </button>
          <button>
            <Trophy className="text-neutral-500 stroke-1 size-4 hover:text-primary hover:stroke-2" />
          </button>
          <button>
            <Mail className="text-neutral-500 stroke-1 size-4 hover:text-primary hover:stroke-2" />
          </button>
        </nav>
        <div className="border-border border-r max-h-[calc(100vh-99px)] overflow-auto overflow-x-hidden">
          {children}
        </div>
      </div>
      <div className="flex border-border border rounded-bl">
        <div className="border-border border-r h-10 w-[39px] flex items-center justify-center">
          <button className="size-2 bg-primary rounded-full" />
        </div>
        <footer className="flex-1 h-10 flex items-center justify-center relative">
          <p className={cn("text-neutral-500 text-sm", NMachineRegular.className)}>
            &copy; {new Date().getFullYear()} Vidhanshu Borade. All rights
            reserved.
          </p>
          <div className="flex gap-x-3 items-center absolute top-0 bottom-0 my-auto right-4">
            <button>
              <Linkedin className="text-neutral-500 stroke-1 size-4 hover:text-primary hover:stroke-2" />
            </button>
            <button>
              <Instagram className="text-neutral-500 stroke-1 size-4 hover:text-primary hover:stroke-2" />
            </button>
            <button>
              <Facebook className="text-neutral-500 stroke-1 size-4 hover:text-primary hover:stroke-2" />
            </button>
            <button>
              <Twitter className="text-neutral-500 stroke-1 size-4 hover:text-primary hover:stroke-2" />
            </button>
            <button>
              <Github className="text-neutral-500 stroke-1 size-4 hover:text-primary hover:stroke-2" />
            </button>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default CommonLayout;
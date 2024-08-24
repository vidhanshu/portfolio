"use client";

import { Minus, Square, X } from "lucide-react";
import React, { PropsWithChildren } from "react";

import { PPNMedium } from "@/lib/fonts";
import { cn } from "@/lib/utils";

///-------------------------------------------------------------------------------------------

interface WindowScreenProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
  shootingStar?: boolean;
}

///-------------------------------------------------------------------------------------------

const WindowScreen = ({ title, children, className, containerProps: { className: containerClassName, ...rest } = {}, shootingStar = false, ...props }: WindowScreenProps & PropsWithChildren) => {
  return (
    <div className={cn("w-fit bg-background/50 h-fit backdrop-blur-sm rounded-sm z-20 relative", PPNMedium.className, containerClassName)} {...rest}>
      {shootingStar && (
        <>
          {/* shooting star before */}
          <div className="w-[1px] inset-x-0 mx-auto -top-32 h-32 bg-gradient-to-t from-primary/70 to-primary/5 absolute" />
          {/* shooting star after */}
          <div className="w-[1px] inset-x-0 mx-auto -bottom-32 h-32 bg-gradient-to-b from-primary/70 to-primary/5 absolute" />
        </>
      )}

      <div className="rounded-t-sm border h-10 gap-x-16 flex items-center justify-between px-4">
        <p className="text-sm">{title}</p>
        <div className="flex gap-x-3 items-center">
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
      </div>
      <div className={cn("rounded-b-sm border-x border-b px-4 py-2", className)} {...props}>
        {children}
      </div>
    </div>
  );
};

export default WindowScreen;

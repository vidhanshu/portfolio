import { NMachineRegular, PPNMedium } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Minus, Square, X } from "lucide-react";
import React, { PropsWithChildren } from "react";

///-------------------------------------------------------------------------------------------

interface WindowScreenProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
}

///-------------------------------------------------------------------------------------------

const WindowScreen = ({
  title,
  children,
  className,
  containerProps: { className: containerClassName, ...rest } = {},
  ...props
}: WindowScreenProps & PropsWithChildren) => {
  return (
    <div
      className={cn(
        "w-fit bg-background/70 h-fit backdrop-blur-sm rounded-sm z-20",
        PPNMedium.className,
        containerClassName
      )}
      {...rest}
    >
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

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { PPNMedium } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ArrowRight, LucideIcon } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        primary: "px-5 py-2.5 relative rounded group overflow-hidden border-primary/50 md:border-border font-medium bg-transparent md:bg-background border text-white inline-block",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        primary: "px-8 py-3",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  showArrow?: boolean;
  icon?: LucideIcon;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, children, variant, size, asChild = false, showArrow = true, icon, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  const Icon = icon || ArrowRight;
  return (
    <Comp className={cn(buttonVariants({ variant, size, className }), "group/button")} ref={ref} {...props}>
      <div className={cn(variant === "primary" ? "relative group-hover:text-primary flex gap-x-2 items-center" + PPNMedium.className : "flex gap-x-2 items-center")}>
        {children} {showArrow && <Icon className="size-4 mt-[1px] group-hover:translate-x-1" />}
      </div>
      {variant === "primary" && (
        <span className="absolute top-0 left-0 flex w-0 h-full mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-primary/10 group-hover:w-full opacity-90"></span>
      )}
    </Comp>
  );
});
Button.displayName = "Button";

export { Button, buttonVariants };

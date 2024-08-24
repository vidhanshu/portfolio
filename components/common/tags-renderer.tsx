import { PPNMedium } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

const TagsRenderer = ({ tags, maxCount = 2, className }: { tags: string[]; maxCount?: number; className?: string }) => {
  return (
    <div className="flex gap-2 items-center flex-wrap">
      {tags.length > maxCount ? (
        <>
          {tags.slice(0, maxCount).map((tag, idx) => (
            <span
              className={cn("border border-border mr-2 rounded-full h-8 flex items-center justify-center px-4 bg-background/40 text-sm text-neutral-500", className, PPNMedium.className)}
              key={idx}
            >
              {tag}
            </span>
          ))}
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className={cn("border border-border mr-2 rounded-full h-8 flex items-center justify-center px-4 bg-background/40 text-sm text-neutral-500", className, PPNMedium.className)}>
                  +{tags.length - maxCount}
                </span>
              </TooltipTrigger>
              <TooltipContent>{tags.slice(2).join(", ")}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </>
      ) : (
        tags.map((tag, idx) => (
          <span
            key={idx}
            className={cn("border border-border mr-2 rounded-full h-8 flex items-center justify-center px-4 bg-background/40", PPNMedium.className, "text-sm text-neutral-500", className)}
          >
            {tag}
          </span>
        ))
      )}
    </div>
  );
};

export default TagsRenderer;

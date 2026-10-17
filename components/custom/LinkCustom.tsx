import { LinkType } from "@/lib/types/links.types";
import { cn } from "@sglara/cn";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

type LinkProps = {
  href: string;
  label: string;
  classname?: string;
  type?: LinkType;
  tooltipLabel?: string;
  noInteractivity?: boolean;
};

const LinkCustom = ({
  type = LinkType.external,
  href,
  label,
  classname,
  tooltipLabel,
  noInteractivity = false,
}: LinkProps) => {
  return (
    <>
      {tooltipLabel ? (
        <Tooltip>
          <TooltipTrigger
            render={
              <Link
                className={cn(
                  !noInteractivity
                    ? "hover:text-blue-600 focus:px-3 focus:outline-2 focus:outline-blue-600 md:hover:bg-blue-600 md:hover:px-3 md:hover:text-neutral-50 dark:hover:text-blue-300 dark:focus:outline-blue-50"
                    : "",
                  "after:font-bagel-fat rounded-xl py-1 transition-all duration-300",
                  // "after:content-['_↗']",
                  "text-sm font-medium",
                  "text-neutral-600",
                  "dark:text-neutral-400",
                  classname,
                )}
                href={type === LinkType.email ? `mailto:${href}` : href}
              >
                {label}
              </Link>
            }
          />
          <TooltipContent className={"text-center"} side="top" sideOffset={10}>
            <p>{tooltipLabel}</p>
          </TooltipContent>
        </Tooltip>
      ) : (
        <Link
          className={cn(
            !noInteractivity
              ? "hover:text-blue-600 focus:px-3 focus:outline-2 focus:outline-blue-600 md:hover:bg-blue-600 md:hover:px-3 md:hover:text-neutral-50 dark:hover:text-blue-300 dark:focus:outline-blue-50"
              : "",
            "after:font-bagel-fat rounded-xl py-1 transition-all duration-300",
            // "after:content-['_↗']",
            "text-sm font-medium",
            "text-neutral-600",
            "dark:text-neutral-400",
            classname,
          )}
          href={type === LinkType.email ? `mailto:${href}` : href}
        >
          {label}
        </Link>
      )}
    </>
  );
};

export default LinkCustom;

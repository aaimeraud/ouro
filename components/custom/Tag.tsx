import { projectTags } from "@/lib/types/projects.types";
import { cn } from "@sglara/cn";
import Link from "next/link";

const base = cn(
  "shrink-0 rounded-full px-2 py-1 text-xs leading-tight md:whitespace-nowrap",
  "bg-black/5 dark:bg-white/5",
);

type TagProps = {
  tag: projectTags;
  /** Translated text shown for the tag */
  label: string;
  type: "li" | "span" | "a";
  href?: string;
  classname?: string;
};

const Tag = ({ tag, label, type = "li", href, classname }: TagProps) => {
  const Type = type;
  if (Type === "a" && href) {
    return (
      <Link href={href} className={cn(classname, base)}>
        {label}
      </Link>
    );
  } else if (tag === projectTags.wip) {
    return (
      <Type
        className={cn(
          classname,
          base,
          "animate-pulse font-bold text-red-600 dark:text-red-400",
        )}
      >
        {label}
      </Type>
    );
  } else if (tag === projectTags.agentic) {
    return (
      <Type
        className={cn(
          classname,
          base,
          "animate-pulse font-bold text-teal-600 dark:text-teal-400",
        )}
      >
        {label}
      </Type>
    );
  } else {
    return <Type className={cn(classname, base)}>{label}</Type>;
  }
};

export default Tag;

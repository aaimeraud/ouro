import { projectTags } from "@/lib/types/projects.types";
import { cn } from "@sglara/cn";
import Link from "next/link";

const base = cn("text-xs md:text-md");

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
    return <Type className={cn(classname, base, "text-red-600 dark:text-red-400 font-bold animate-pulse")}>{label}</Type>;
  } else if (tag === projectTags.agentic) {
    return <Type className={cn(classname, base, "text-teal-600 dark:text-teal-400 font-bold animate-pulse")}>{label}</Type>;
  } else {
    return <Type className={cn(classname, base)}>{label}</Type>;
  }
};

export default Tag;

import { projectTags } from "@/lib/types/projects.types";
import { cn } from "@sglara/cn";
import Link from "next/link";

const base = cn("text-xs md:text-md");

type TagProps = {
  tag: projectTags;
  type: "li" | "span" | "a";
  href?: string;
  classname?: string;
};

const Tag = ({ tag, type = "li", href, classname }: TagProps) => {
  const Type = type;
  if (Type === "a" && href) {
    return (
      <Link href={href} className={cn(classname, base)}>
        {tag}
      </Link>
    );
  } else if (tag.valueOf().includes("Work in Progress")) {
    return <Type className={cn(classname, base, "text-red-600 dark:text-red-400 font-bold animate-pulse")}>{tag}</Type>;
  } else {
    return <Type className={cn(classname, base)}>{tag}</Type>;
  }
};

export default Tag;

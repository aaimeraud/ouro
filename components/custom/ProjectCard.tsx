import { Project } from "@/lib/types/projects.types";
import { cn } from "@sglara/cn";
import { Separator } from "../ui/separator";
import Tag from "./Tag";

const styles = {
  li: cn(
    "dark:bg-neutral-300 border-2 border-transparent justify-between bg-neutral-50 text-neutral-900 dark:text-neutral-50 rounded-lg flex w-full py-2 hover:px-4",
    "hover:bg-blue-600 hover:border-blue-500 hover:[&>a_h5]:text-blue-50 hover:[&>a_span]:text-blue-200 hover:[&>a_li]:text-blue-200 hover:[&>a_div#sep]:bg-blue-200 ",
    "hover:translate-y-1 hover:translate-x-1",
    "transition-all duration-300 ease-in overflow-hidden",
  ),
  name: cn("font-sans font-semibold text-md"),
  description: cn("font-sans text-sm text-neutral-600 dark:text-neutral-400"),
  ul: cn(
    "md:flex gap-3 items-center w-full justify-end",
    "grid mt-2 grid-cols-2",
  ),
  link: cn(
    "flex flex-col gap-4 md:gap-0 items-start md:flex-row md:justify-between w-full md:items-center transition-all duration-150 ease-in-out",
    // "focus:outline-2 focus:outline-neutral-300 focus:rounded-lg dark:focus:outline-blue-50",
    // "focus:p-4 "
  ),
  projectInfo: {
    year: cn("w-fit text-neutral-600 text-xs md:text-md dark:text-neutral-400"),
    tag: cn("text-neutral-600 font-normal dark:text-neutral-400"),
    div: cn("flex flex-col md:items-end gap-1"),
  },
  textDiv: cn("flex flex-col  h-fit"),
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <li
      className={cn(
        styles.li,
        "border border-neutral-200 bg-neutral-100 p-4 transition-all duration-300 ease-in-out dark:border-neutral-700 dark:bg-neutral-800",
      )}
    >
      <a className={cn(styles.link)} href={project.link?.url}>
        <div className={cn(styles.textDiv, "h-full align-top")}>
          <h5 className={styles.name}>{project.name}</h5>
          <span className={styles.description}>
            {project.description.toLowerCase()}
          </span>
        </div>
        <Separator id="sep" className={cn("md:hidden dark:bg-neutral-700 bg-neutral-200  ")} />
        <div className={cn(styles.projectInfo.div, "h-full align-bottom")}>
          <span className={cn(styles.projectInfo.year)}>{project.year}</span>
          <span
            className={cn(styles.projectInfo.year, "mt-2 font-normal md:mt-0")}
          >
            {project.type === "design"
              ? `this one's a ${project.type} project`
              : `this one's a ${project.type}`}
          </span>
          <ul className={cn(styles.ul)}>
            {project.tags.map((tag, index: number) => (
              <Tag
                classname={cn(styles.projectInfo.tag, "w-fit")}
                key={index}
                tag={tag}
                type="li"
              />
            ))}
          </ul>
        </div>
      </a>
    </li>
  );
};

export default ProjectCard;

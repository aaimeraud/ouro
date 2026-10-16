import ProjectCard from "@/components/custom/ProjectCard";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { aaimeraud } from "@/lib/data/aaimeraud.data";
import { cn } from "@sglara/cn";

const Projects = () => {
  const projects = aaimeraud.projects;

  return (
    <section className={cn("flex flex-col gap-3")}>
      <Tooltip>
        <TooltipTrigger
          render={
            <h2
              className={cn(
                "text-md font-bold w-fit text-neutral-950 lg:text-xl dark:text-neutral-50",
                "before:text-neutral-300 before:content-['##_'] dark:before:text-neutral-600",
              )}
            >
              Projects
            </h2>
          }
        />
        <TooltipContent side="top" sideOffset={10}>there&apos;s more on the way !</TooltipContent>
      </Tooltip>

      <ul className="flex flex-col gap-4">
        {projects.map((project, index) => (
          <Tooltip key={index}>
            <TooltipTrigger render={<ProjectCard project={project} />} />
            <TooltipContent side="top" sideOffset={10}>
              {project.tooltipLabel}
            </TooltipContent>
          </Tooltip>
        ))}
      </ul>
    </section>
  );
};

export default Projects;

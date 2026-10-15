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
      <h2
        className={cn(
          "text-md font-bold text-neutral-950 lg:text-xl dark:text-neutral-50",
        )}
      >
        ## Projects
      </h2>
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

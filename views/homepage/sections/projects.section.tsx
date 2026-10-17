import ProjectCard from "@/components/custom/ProjectCard";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { aaimeraud } from "@/lib/data/aaimeraud.data";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { cn } from "@sglara/cn";

type ProjectsProps = {
  locale: Locale;
};

const Projects = ({ locale }: ProjectsProps) => {
  const projects = aaimeraud.projects;
  const { projects: t } = getDictionary(locale);

  return (
    <section className={cn("flex flex-col gap-3")}>
      <Tooltip>
        <TooltipTrigger
          render={
            <h2
              className={cn(
                "text-md w-fit font-bold text-neutral-950 lg:text-xl dark:text-neutral-50",
                "before:text-neutral-300 before:content-['##_'] dark:before:text-neutral-600",
              )}
            >
              {t.title}
            </h2>
          }
        />
        <TooltipContent className={"text-center"} side="top" sideOffset={10}>
          {t.moreTooltip}
        </TooltipContent>
      </Tooltip>

      <ul className="flex flex-col gap-4">
        {projects.map((project) => (
          <Tooltip key={project.slug}>
            <TooltipTrigger
              render={<ProjectCard project={project} locale={locale} />}
            />
            <TooltipContent
              className={"text-center"}
              side="top"
              sideOffset={10}
            >
              {t.items[project.slug].tooltip}
            </TooltipContent>
          </Tooltip>
        ))}
      </ul>
    </section>
  );
};

export default Projects;

import ProjectCard from "@/components/custom/ProjectCard";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { aaimeraud } from "@/lib/data/aaimeraud.data";
import { getDictionary } from "@/lib/i18n";
import { defaultLocale, type Locale } from "@/lib/i18n/config";
import { cn } from "@sglara/cn";

type ProjectsProps = {
  /** Defaults to English: `pages/` is also scanned as Pages Router routes at build time */
  locale?: Locale;
};

const Projects = ({ locale = defaultLocale }: ProjectsProps) => {
  const projects = aaimeraud.projects;
  const { projects: t } = getDictionary(locale);

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
              {t.title}
            </h2>
          }
        />
        <TooltipContent side="top" sideOffset={10}>{t.moreTooltip}</TooltipContent>
      </Tooltip>

      <ul className="flex flex-col gap-4">
        {projects.map((project, index) => (
          <Tooltip key={index}>
            <TooltipTrigger
              render={<ProjectCard project={project} locale={locale} />}
            />
            <TooltipContent side="top" sideOffset={10}>
              {t.items[project.slug].tooltip}
            </TooltipContent>
          </Tooltip>
        ))}
      </ul>
    </section>
  );
};

export default Projects;

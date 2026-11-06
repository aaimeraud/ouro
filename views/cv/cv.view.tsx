import ProjectCard from "@/components/custom/ProjectCard";
import {
  MaybeLink,
  SubpageNav,
  SubpageSection,
  subpageStyles as styles,
} from "@/components/custom/Subpage";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { aaimeraud } from "@/lib/data/aaimeraud.data";
import { cv, type CvEntry } from "@/lib/data/cv.data";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { RESUME_PDF } from "@/lib/site";
import { cn } from "@sglara/cn";
import { FileDown } from "lucide-react";

type CvProps = {
  locale: Locale;
};

/** A job or a degree: title and dates, then the place, then the bullet points. */
const Entry = ({ entry, locale }: { entry: CvEntry; locale: Locale }) => (
  <li className={cn(styles.item, "text-base")}>
    <div className="flex flex-col justify-between gap-x-4 md:flex-row md:items-baseline">
      <h3 className="font-semibold">{entry.title[locale]}</h3>
      {entry.period ? (
        <span className={cn(styles.meta, "shrink-0 text-sm")}>
          {entry.period[locale]}
        </span>
      ) : null}
    </div>
    <p className={cn(styles.note, "text-base")}>
      <span className="font-medium text-neutral-800 dark:text-neutral-200">
        {entry.org}
      </span>
      , {entry.place[locale]}
    </p>
    {entry.points ? (
      <ul className="mt-1 flex flex-col gap-1">
        {entry.points.map((point) => (
          <li
            key={point.en}
            className={cn(
              styles.note,
              "flex gap-2 text-base before:shrink-0 before:text-neutral-300 before:content-['—'] dark:before:text-neutral-600",
            )}
          >
            {point[locale]}
          </li>
        ))}
      </ul>
    ) : null}
  </li>
);

export default function CvPage({ locale }: CvProps) {
  const dictionary = getDictionary(locale);
  const t = dictionary.cvPage;

  return (
    <main className={styles.main}>
      <SubpageNav locale={locale} path="/cv" backLabel={t.back}>
        <a
          href={RESUME_PDF}
          className="flex h-8 items-center gap-1.5 rounded-lg border border-neutral-600 bg-neutral-800 px-3 text-sm font-medium text-neutral-200 transition-colors hover:border-blue-500 hover:bg-blue-600 hover:text-blue-50"
        >
          <FileDown className="size-4" aria-hidden />
          {t.download}
        </a>
      </SubpageNav>

      <header className="flex flex-col text-neutral-800 dark:text-neutral-50">
        <h1 className={styles.h1}>{cv.name}</h1>
        <span className={cn(styles.subtitle, "text-base")}>
          &gt; {cv.headline[locale]} · {cv.location[locale]}
        </span>
        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-base">
          <li>
            <a
              href={`mailto:${cv.email}`}
              className={cn(styles.link, "font-medium")}
            >
              {cv.email}
            </a>
          </li>
          {cv.links.map((link) => (
            <li key={link.url}>
              <MaybeLink url={link.url}>{link.label}</MaybeLink>
            </li>
          ))}
        </ul>
      </header>

      <SubpageSection title={t.sections.profile} list={false}>
        <p className="text-base text-neutral-800 dark:text-neutral-50">
          {cv.profile[locale]}
        </p>
      </SubpageSection>

      <SubpageSection title={t.sections.skills} list={false}>
        <dl className="grid gap-x-6 gap-y-2 text-base md:grid-cols-[max-content_1fr]">
          {cv.skills.map((skill) => (
            <div key={skill.label.en} className="contents">
              <dt className="font-semibold text-neutral-800 dark:text-neutral-50">
                {skill.label[locale]}
              </dt>
              <dd className={cn(styles.note, "mb-2 text-base md:mb-0")}>
                {skill.items[locale]}
              </dd>
            </div>
          ))}
        </dl>
      </SubpageSection>

      <SubpageSection title={t.sections.experience}>
        {cv.experience.map((entry) => (
          <Entry key={entry.title.en} entry={entry} locale={locale} />
        ))}
      </SubpageSection>

      <SubpageSection title={t.sections.education}>
        {cv.education.map((entry) => (
          <Entry key={entry.title.en} entry={entry} locale={locale} />
        ))}
      </SubpageSection>

      <SubpageSection title={t.sections.projects}>
        {cv.projects.map((project) => {
          const homeProject = aaimeraud.projects.find(
            (p) => p.slug === project.slug,
          );
          if (!homeProject) return null;

          return (
            <Tooltip key={project.slug}>
              <TooltipTrigger
                render={
                  <ProjectCard
                    project={homeProject}
                    locale={locale}
                    description={project.description[locale]}
                    year={project.date?.[locale]}
                  />
                }
              />
              <TooltipContent
                className="text-center"
                side="top"
                sideOffset={10}
              >
                {dictionary.projects.items[project.slug].tooltip}
              </TooltipContent>
            </Tooltip>
          );
        })}
      </SubpageSection>
    </main>
  );
}

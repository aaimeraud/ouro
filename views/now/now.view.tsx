import {
  MaybeLink,
  SubpageNav,
  SubpageSection,
  subpageStyles as styles,
} from "@/components/custom/Subpage";
import { aaimeraud } from "@/lib/data/aaimeraud.data";
import { now } from "@/lib/data/now.data";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { cn } from "@sglara/cn";

type NowProps = {
  locale: Locale;
};

/** Turns "2026-11-04" into a date written the way each locale reads it. */
const formatDate = (date: string, locale: Locale) =>
  new Intl.DateTimeFormat(locale, {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(date));

export default function NowPage({ locale }: NowProps) {
  const t = getDictionary(locale).nowPage;
  const projectUrl = (slug?: string) => {
    const project = aaimeraud.projects.find((p) => p.slug === slug);
    return project?.website?.url ?? project?.repo?.url;
  };

  return (
    <main className={styles.main}>
      <SubpageNav locale={locale} path="/now" backLabel={t.back} />

      <header className="flex flex-col text-neutral-800 dark:text-neutral-50">
        <h1 className={styles.h1}>{t.title}</h1>
        <span className={styles.subtitle}>&gt; {t.subtitle}</span>
        <p className={cn(styles.meta, "mt-3")}>
          {t.lastUpdated}{" "}
          <time dateTime={now.lastUpdated}>
            {formatDate(now.lastUpdated, locale)}
          </time>
          {" · "}
          {t.basedIn} {now.location[locale]}
        </p>
      </header>

      <SubpageSection title={t.sections.work}>
        {now.work.map((job) => (
          <li key={job.role.en} className={styles.item}>
            <p>
              <span className="font-semibold">{job.role[locale]}</span> {t.at}{" "}
              <MaybeLink url={job.url}>{job.place[locale]}</MaybeLink>
              {job.since ? (
                <span className={styles.note}>
                  {" "}
                  ({t.since} {job.since})
                </span>
              ) : null}
            </p>
            {job.note ? (
              <p className={styles.note}>{job.note[locale]}</p>
            ) : null}
          </li>
        ))}
      </SubpageSection>

      <SubpageSection title={t.sections.learning}>
        {now.learning.map((item) => (
          <li
            key={item.topic}
            className={cn(styles.item, "flex-row flex-wrap gap-x-2")}
          >
            <span
              className={cn(
                "font-bold",
                "before:text-neutral-300 before:content-['**'] dark:before:text-neutral-600",
                "after:text-neutral-300 after:content-['**'] dark:after:text-neutral-600",
              )}
            >
              {item.topic}
            </span>
            {item.note ? (
              <span className={styles.note}>{item.note[locale]}</span>
            ) : null}
          </li>
        ))}
      </SubpageSection>

      <SubpageSection title={t.sections.projects}>
        {now.projects.map((project) => (
          <li key={project.name} className={cn(styles.item, styles.card)}>
            <MaybeLink url={project.url ?? projectUrl(project.slug)}>
              {project.name}
            </MaybeLink>
            <span className={styles.note}>{project.note[locale]}</span>
          </li>
        ))}
      </SubpageSection>

      <p className={styles.note}>
        {t.aboutBefore}{" "}
        <a
          href="https://nownownow.com/about"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Derek Sivers
        </a>
        {t.aboutAfter}
      </p>
    </main>
  );
}

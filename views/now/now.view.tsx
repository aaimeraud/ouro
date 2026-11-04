import { aaimeraud } from "@/lib/data/aaimeraud.data";
import { now } from "@/lib/data/now.data";
import { getDictionary } from "@/lib/i18n";
import { pagePath, type Locale } from "@/lib/i18n/config";
import { LanguageMenu } from "@/views/homepage/sections/about-actions/language-menu";
import { cn } from "@sglara/cn";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

type NowProps = {
  locale: Locale;
};

const styles = {
  h2: cn(
    "text-md w-fit font-bold text-neutral-950 lg:text-xl dark:text-neutral-50",
    "before:text-neutral-300 before:content-['##_'] dark:before:text-neutral-600",
  ),
  item: cn(
    "flex flex-col gap-0.5 text-sm text-neutral-800 dark:text-neutral-50",
    "before:text-neutral-300 dark:before:text-neutral-600",
  ),
  note: cn("text-sm text-neutral-600 dark:text-neutral-400"),
  link: cn(
    "inline-flex items-center gap-0.5 font-semibold underline decoration-neutral-300 underline-offset-4 transition-colors",
    "hover:text-blue-600 hover:decoration-blue-600 dark:decoration-neutral-600 dark:hover:text-blue-300",
  ),
};

/** Turns "2026-11-04" into a date written the way each locale reads it. */
const formatDate = (date: string, locale: Locale) =>
  new Intl.DateTimeFormat(locale, {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(date));

const Section = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <section className="flex flex-col gap-3">
    <h2 className={styles.h2}>{title}</h2>
    <ul className="flex flex-col gap-3">{children}</ul>
  </section>
);

const MaybeLink = ({ url, children }: { url?: string; children: ReactNode }) =>
  url ? (
    <a
      href={url}
      className={styles.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <ArrowUpRight className="size-3.5" aria-hidden />
    </a>
  ) : (
    <span className="font-semibold">{children}</span>
  );

export default function NowPage({ locale }: NowProps) {
  const t = getDictionary(locale).nowPage;
  const projectUrl = (slug?: string) => {
    const project = aaimeraud.projects.find((p) => p.slug === slug);
    return project?.website?.url ?? project?.repo?.url;
  };

  return (
    <main className="m-auto flex max-w-lg flex-col gap-8 p-5 transition-all duration-150 selection:bg-blue-600 selection:text-blue-50 md:max-w-3xl lg:max-w-4xl xl:max-w-6xl">
      <nav className="flex items-center justify-between gap-3">
        <Link
          href={pagePath(locale)}
          className="flex items-center gap-1 text-sm font-medium text-neutral-600 transition-colors hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-300"
        >
          <ArrowLeft className="size-4" aria-hidden />
          {t.back}
        </Link>
        <LanguageMenu
          locale={locale}
          path="/now"
          className="w-fit md:flex-none"
        />
      </nav>

      <header className="flex flex-col text-neutral-800 dark:text-neutral-50">
        <h1 className="w-fit text-xl font-bold tracking-tight text-neutral-800 before:text-neutral-300 before:content-['#_'] lg:text-3xl dark:text-neutral-200 dark:before:text-neutral-600">
          {t.title}
        </h1>
        <span className="text-sm tracking-tight text-neutral-600 dark:text-neutral-400">
          &gt; {t.subtitle}
        </span>
        <p className="mt-3 font-mono text-xs text-neutral-400 dark:text-neutral-600">
          {t.lastUpdated}{" "}
          <time dateTime={now.lastUpdated}>
            {formatDate(now.lastUpdated, locale)}
          </time>
          {" · "}
          {t.basedIn} {now.location[locale]}
        </p>
      </header>

      <Section title={t.sections.work}>
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
      </Section>

      <Section title={t.sections.learning}>
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
      </Section>

      <Section title={t.sections.projects}>
        {now.projects.map((project) => (
          <li
            key={project.name}
            className={cn(
              styles.item,
              "rounded-lg border border-neutral-200 bg-neutral-100 p-4 dark:border-neutral-700 dark:bg-neutral-800",
            )}
          >
            <MaybeLink url={project.url ?? projectUrl(project.slug)}>
              {project.name}
            </MaybeLink>
            <span className={styles.note}>{project.note[locale]}</span>
          </li>
        ))}
      </Section>

      <p className="text-sm text-neutral-600 dark:text-neutral-400">
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

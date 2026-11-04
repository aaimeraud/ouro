import { pagePath, type Locale } from "@/lib/i18n/config";
import { LanguageMenu } from "@/views/homepage/sections/about-actions/language-menu";
import { cn } from "@sglara/cn";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

/** Building blocks shared by the sub-pages (/now, /cv), in the homepage's markdown look. */
export const subpageStyles = {
  main: cn(
    "m-auto flex max-w-lg flex-col gap-8 p-5 transition-all duration-150 selection:bg-blue-600 selection:text-blue-50 md:max-w-3xl lg:max-w-4xl xl:max-w-6xl",
  ),
  h1: cn(
    "w-fit text-xl font-bold tracking-tight text-neutral-800 lg:text-3xl dark:text-neutral-200",
    "before:text-neutral-300 before:content-['#_'] dark:before:text-neutral-600",
  ),
  h2: cn(
    "text-md w-fit font-bold text-neutral-950 lg:text-xl dark:text-neutral-50",
    "before:text-neutral-300 before:content-['##_'] dark:before:text-neutral-600",
  ),
  subtitle: cn("text-sm tracking-tight text-neutral-600 dark:text-neutral-400"),
  meta: cn("font-mono text-xs text-neutral-400 dark:text-neutral-600"),
  item: cn(
    "flex flex-col gap-0.5 text-sm text-neutral-800 dark:text-neutral-50",
  ),
  card: cn(
    "rounded-lg border border-neutral-200 bg-neutral-100 p-4 dark:border-neutral-700 dark:bg-neutral-800",
  ),
  note: cn("text-sm text-neutral-600 dark:text-neutral-400"),
  link: cn(
    "inline-flex items-center gap-0.5 font-semibold underline decoration-neutral-300 underline-offset-4 transition-colors",
    "hover:text-blue-600 hover:decoration-blue-600 dark:decoration-neutral-600 dark:hover:text-blue-300",
  ),
};

/** "Back home" link on the left, extra actions and the language switcher on the right. */
export const SubpageNav = ({
  locale,
  path,
  backLabel,
  children,
}: {
  locale: Locale;
  /** This page's path, e.g. "/now", so the language switcher stays on it */
  path: string;
  backLabel: string;
  children?: ReactNode;
}) => (
  <nav className="flex items-center justify-between gap-3 print:hidden">
    <Link
      href={pagePath(locale)}
      className="flex items-center gap-1 text-sm font-medium text-neutral-600 transition-colors hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-300"
    >
      <ArrowLeft className="size-4" aria-hidden />
      {backLabel}
    </Link>
    <div className="flex items-center gap-2">
      {children}
      <LanguageMenu
        locale={locale}
        path={path}
        className="w-fit md:flex-none"
      />
    </div>
  </nav>
);

/** A `## title` section; `list` wraps the children in a <ul>. */
export const SubpageSection = ({
  title,
  list = true,
  children,
}: {
  title: string;
  list?: boolean;
  children: ReactNode;
}) => (
  <section className="flex flex-col gap-3">
    <h2 className={subpageStyles.h2}>{title}</h2>
    {list ? <ul className="flex flex-col gap-3">{children}</ul> : children}
  </section>
);

/** An external link with an arrow, or plain bold text when there's no URL. */
export const MaybeLink = ({
  url,
  children,
}: {
  url?: string;
  children: ReactNode;
}) =>
  url ? (
    <a
      href={url}
      className={subpageStyles.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <ArrowUpRight className="size-3.5" aria-hidden />
    </a>
  ) : (
    <span className="font-semibold">{children}</span>
  );

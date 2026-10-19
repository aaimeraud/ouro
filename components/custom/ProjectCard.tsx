"use client";

import type { ComponentType, ComponentProps } from "react";

import { Github } from "@/components/icons/github";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { Project } from "@/lib/types/projects.types";
import { cn } from "@sglara/cn";
import { ArrowUpRight, Globe } from "lucide-react";
import { Separator } from "../ui/separator";
import Tag from "./Tag";

const styles = {
  li: cn(
    "dark:bg-neutral-300 border-2 border-transparent justify-between bg-neutral-50 text-neutral-900 dark:text-neutral-50 rounded-lg flex w-full py-2 hover:px-4",
    "hover:bg-blue-600 hover:border-blue-500 hover:[&>button_h3]:text-blue-50 hover:[&>button_span]:text-blue-200 hover:[&>button_li]:text-blue-200 hover:[&>button_div#sep]:bg-blue-200 ",
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
    "flex flex-col gap-4 md:gap-0 items-start md:flex-row md:justify-between w-full md:items-center text-left cursor-pointer transition-all duration-150 ease-in-out",
    // "focus:outline-2 focus:outline-neutral-300 focus:rounded-lg dark:focus:outline-blue-50",
    // "focus:p-4 "
  ),
  projectInfo: {
    year: cn("w-fit text-neutral-600 text-xs md:text-md dark:text-neutral-400"),
    tag: cn("text-neutral-600 font-normal dark:text-neutral-400"),
    div: cn("flex flex-col md:items-end gap-1"),
  },
  textDiv: cn("flex flex-col  h-fit"),
  action: cn(
    "flex w-full items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition-colors",
    "border-neutral-200 bg-neutral-50 text-neutral-900",
    "hover:border-blue-500 hover:bg-blue-600 hover:text-blue-50",
    "focus-visible:outline-2 focus-visible:outline-blue-600",
    "dark:border-neutral-700 dark:bg-neutral-900/60 dark:text-neutral-50 dark:hover:border-blue-500 dark:hover:bg-blue-600 dark:hover:text-blue-50",
  ),
};

type ProjectCardProps = {
  project: Project;
  locale: Locale;
} & ComponentProps<"li">;

const ProjectCard = ({
  project,
  locale,
  className,
  ...props
}: ProjectCardProps) => {
  const t = getDictionary(locale).projects;
  const description = t.items[project.slug].description.toLowerCase();

  const links: {
    href: string;
    label: string;
    Icon: ComponentType<{ className?: string }>;
  }[] = [];

  if (project.website) {
    links.push({
      href: project.website.url,
      label: t.actions.viewSite,
      Icon: Globe,
    });
  }

  if (project.repo) {
    links.push({
      href: project.repo.url,
      label: t.actions.viewRepo,
      Icon: Github,
    });
  }

  return (
    <li
      className={cn(
        styles.li,
        "border border-neutral-200 bg-neutral-100 p-4 transition-all duration-300 ease-in-out dark:border-neutral-700 dark:bg-neutral-800",
        className,
      )}
      {...props}
    >
      <Dialog>
        <DialogTrigger className={styles.link}>
          <div className={cn(styles.textDiv, "h-full align-top")}>
            <h3 className={styles.name}>{project.name}</h3>
            <span className={styles.description}>{description}</span>
          </div>
          <Separator
            id="sep"
            className={cn("bg-neutral-200 md:hidden dark:bg-neutral-700")}
          />
          <div className={cn(styles.projectInfo.div, "h-full align-bottom")}>
            <span className={cn(styles.projectInfo.year)}>{project.year}</span>
            <span
              className={cn(
                styles.projectInfo.year,
                "mt-2 font-normal md:mt-0",
              )}
            >
              {t.kind[project.type]}
            </span>
            <ul className={cn(styles.ul)}>
              {project.tags.map((tag, index: number) => (
                <Tag
                  classname={cn(styles.projectInfo.tag, "w-fit")}
                  key={index}
                  tag={tag}
                  label={t.tags[tag]}
                  type="li"
                />
              ))}
            </ul>
          </div>
        </DialogTrigger>

        <DialogContent closeLabel={t.actions.close}>
          <DialogHeader>
            <DialogTitle>{project.name}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-2">
            {links.map(({ href, label, Icon }) => (
              <DialogClose
                key={href}
                nativeButton={false}
                render={
                  <a
                    className={styles.action}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                <Icon className="size-4" />
                <span>{label}</span>
                <ArrowUpRight className="ml-auto size-4" aria-hidden />
              </DialogClose>
            ))}
          </div>

          <DialogFooter>
            <DialogClose
              render={
                <Button
                  variant="outline"
                  size="sm"
                  className="dark:border-neutral-600 dark:hover:bg-neutral-700"
                />
              }
            >
              {t.actions.close}
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </li>
  );
};

export default ProjectCard;

import LinkCustom from "@/components/custom/LinkCustom";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { aaimeraud } from "@/lib/data/aaimeraud.data";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { cn } from "@sglara/cn";
import { ActionsButtonGroup } from "./about-actions/actions-button-group";
import { AskAiMenu } from "./about-actions/ask-ai-menu";

type AboutProps = {
  locale: Locale;
};

const About = ({ locale }: AboutProps) => {
  const t = getDictionary(locale);

  return (
    <section
      className={cn(
        "text-neutral-800 dark:text-neutral-50",
        "w-full",
        "flex flex-col gap-5",
      )}
    >
      {/* Visually hidden heading: gives the section its h2 for heading order without changing the design */}
      <h2 className="sr-only">{t.about.sectionTitle}</h2>

      <div className="flex flex-col-reverse justify-between gap-3 md:flex-row">
        <p className="content-center text-sm">
          <span
            className={cn(
              "font-bold",
              "before:text-neutral-300 before:content-['**_'] dark:before:text-neutral-600",
              "after:text-neutral-300 after:content-['_**'] dark:after:text-neutral-600",
            )}
          >
            {t.about.highlight}
          </span>{" "}
          <br />
          {t.about.intro}
        </p>
        <div className="my-5 flex w-full flex-col gap-2 md:my-0 md:w-fit md:items-end">
          <AskAiMenu locale={locale} />
          <ActionsButtonGroup locale={locale} />
        </div>
      </div>

      <Tooltip>
        <p className="text-sm">
          {t.about.currently}{" "}
          <TooltipTrigger
            render={<span className="underline">{t.about.role}</span>}
          />
          <TooltipContent sideOffset={10} className={"hover:text-blue-400"}>
            {t.about.jobTooltip} {t.about.company}
          </TooltipContent>
          <br /> {t.about.stack}
        </p>
      </Tooltip>

      <p className="text-sm">{t.about.learning}</p>

      <ul className="grid grid-cols-2 gap-2 md:flex md:flex-row md:gap-3">
        {aaimeraud.socials.map((social) => (
          <li key={social.label}>
            <LinkCustom
              href={social.url}
              type={social.type}
              label={social.label}
              tooltipLabel={t.socials[social.label].toLowerCase().trim()}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default About;

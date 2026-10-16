import { CopyPromptMenuItem } from "@/components/custom/CopyPromptMenuItem";
import { ClaudeAI } from "@/components/icons/anthropic";
import { OpenAI } from "@/components/icons/openai";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getDictionary } from "@/lib/i18n";
import { localePaths, locales, type Locale } from "@/lib/i18n/config";
import { cn } from "cn";
import { Bot, Check, FileText, Languages } from "lucide-react";
import Link from "next/link";
import { aaimeraud } from "./aaimeraud.data";

const styles = {
  buttons: cn(
    "bg-neutral-800 border w-fit text-neutral-200 border-neutral-600",
    "",
  ),
};

// The prompts are sent to external AI tools and are not translated with the UI.
const aiQueries = {
  claude:
    "Read this https://www.aaimeraud.me/llms/home.md, and tell me why I should hire Daniel Fortuné as a junior dev for an apprenticeship ? Answer in French",
  chatgpt:
    "Read this https://www.aaimeraud.me/llms/home.txt, and tell me why I should hire Daniel Fortuné as a junior dev for an apprenticeship ? Answer in French",
  clipboard:
    "Read this https://www.aaimeraud.me/llms/home.md, and tell me why I should hire Daniel Fortuné as a junior dev for an apprenticeship ? Answer in French (if you can't read markdown files read this https://www.aaimeraud.me/llms/home.txt)",
};

/**
 * Homepage copy for a locale. Wording comes from lib/i18n/dictionaries;
 * this file only holds the structure (links, tooltips, menus) around it.
 */
export const getContent = (locale: Locale) => {
  const t = getDictionary(locale);

  return {
    homepage: {
      aboutMe: {
        presentation: (
          <div className="flex flex-col-reverse justify-between gap-3 md:flex-row">
            <p className="text-sm">
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

            <ButtonGroup
              aria-label={t.ai.groupLabel}
              className="items-center align-middle"
            >
              {/* On mobile the labels are screen-reader only, so each button shows just its icon. */}
              <Button
                className={cn(styles.buttons)}
                size={"default"}
                nativeButton={false}
                render={<Link href="/pdf/daniel_fortune_[public].pdf" />}
              >
                <FileText className="md:hidden" />
                <span className="sr-only md:not-sr-only">{t.ai.resume}</span>
              </Button>

              <DropdownMenu>
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <DropdownMenuTrigger
                        render={
                          <Button className={cn(styles.buttons)} size={"default"}>
                            <Bot />
                            <span className="sr-only md:not-sr-only">
                              {t.ai.askButton}
                            </span>
                          </Button>
                        }
                      />
                    }
                  />
                  <TooltipContent className={"text-center"}>
                    {t.ai.askTooltipTitle}
                    <br /> {t.ai.askTooltipBody}
                  </TooltipContent>
                </Tooltip>
                <DropdownMenuContent
                  className={
                    "w-full border border-neutral-600 bg-neutral-800 text-neutral-200"
                  }
                >
                  <DropdownMenuItem
                    className={cn(
                      "flex w-full items-center justify-between align-middle",
                    )}
                  >
                    <a
                      href={`https://claude.ai/new?q=${aiQueries.claude}`}
                      className="flex w-full items-center justify-between gap-1.5"
                    >
                      <ClaudeAI className="text-neutral-200 group-focus/dropdown-menu-item:text-[#D97757]" />
                      <span>{t.ai.askClaude}</span>
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className={cn(
                      "flex w-full items-center justify-between align-middle",
                    )}
                  >
                    <a
                      href={`https://chatgpt.com/?q=${aiQueries.chatgpt}`}
                      className="flex w-full items-center justify-between gap-1.5"
                    >
                      <OpenAI className="text-neutral-200 group-focus/dropdown-menu-item:text-black" />
                      <span>{t.ai.askChatGpt}</span>
                    </a>
                  </DropdownMenuItem>
                  <CopyPromptMenuItem
                    prompt={aiQueries.clipboard}
                    copyLabel={t.ai.copyPrompt}
                    copiedLabel={t.ai.copiedPrompt}
                  />
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <Button
                      className={cn(styles.buttons)}
                      size={"default"}
                      aria-label={t.language.label}
                    >
                      <Languages />
                      <span className="sr-only md:not-sr-only">
                        {t.language[locale]}
                      </span>
                    </Button>
                  }
                />
                <DropdownMenuContent
                  className={
                    "w-full border border-neutral-600 bg-neutral-800 text-neutral-200"
                  }
                >
                  {locales.map((code) => (
                    <DropdownMenuItem
                      key={code}
                      className={cn(
                        "flex w-full items-center justify-between align-middle",
                      )}
                    >
                      {/* Plain links: each locale is its own root layout, so switching does a full page load. */}
                      <a
                        href={localePaths[code]}
                        hrefLang={code}
                        aria-current={code === locale ? "true" : undefined}
                        className="flex w-full items-center justify-between gap-1.5"
                      >
                        <span>{t.language[code]}</span>
                        {code === locale && <Check className="size-4" />}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </ButtonGroup>
          </div>
        ),
        about: (
          <Tooltip>
            <p className="text-sm">
              {t.about.currently}{" "}
              <TooltipTrigger
                render={<span className="underline">{t.about.role}</span>}
              />
              <TooltipContent sideOffset={10} className={"hover:text-blue-400"}>
                {t.about.jobTooltip}{" "}
                <a
                  href={aaimeraud.profile.status.job.link.url}
                  className="after:font-bagel-fat after:content-['_↗']"
                >
                  {aaimeraud.profile.status.job.link.label}
                </a>
              </TooltipContent>
              <br /> {t.about.stack}
            </p>
          </Tooltip>
        ),

        now: <p className="text-sm">{t.about.learning}</p>,
      },
    },
    footer: {
      nohello: (
        <small className="text-sm font-medium text-neutral-400 dark:text-neutral-600">
          {t.footer.nohelloBefore}{" "}
          <a href="https://nohello.net" className="underline">
            nohello.net
          </a>
          {t.footer.nohelloAfter}
        </small>
      ),
    },
  };
};

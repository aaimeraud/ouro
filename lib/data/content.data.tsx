import { CopyPromptMenuItem } from "@/components/custom/CopyPromptMenuItem";
import LinkCustom from "@/components/custom/LinkCustom";
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
import { cn } from "cn";
import { Bot } from "lucide-react";
import { LinkType } from "../types/links.types";
import { aaimeraud } from "./aaimeraud.data";

const styles = {
  buttons: cn(
    "bg-neutral-800 border w-fit text-neutral-200 border-neutral-600",
    "",
  ),
};

const aiQueries = {
  claude:
    "Read this https://www.aaimeraud.me/llms/home.md, and tell me why I should hire Daniel Fortuné as a junior dev for an apprenticeship ? Anwser in french",
  chatgpt:
    "Read this https://www.aaimeraud.me/llms/home.txt, and tell me why I should hire Daniel Fortuné as a junior dev for an apprenticeship ? Anwser in french",
  clipboard:
    "Read this https://www.aaimeraud.me/llms/home.md, and tell me why I should hire Daniel Fortuné as a junior dev for an apprenticeship ? Anwser in french (if you can't read markdown files read this https://www.aaimeraud.me/llms/home.txt)",
};

export const content = {
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
              constantly growing.
            </span>{" "}
            <br />i make websites. i&apos;m learning to make useful and
            meaningful software, and i&apos;m trying to get better at it every
            day.
          </p>

          <ButtonGroup
            aria-label="Ai related button group"
            className="items-center align-middle"
          >
            <DropdownMenu>
              <Button className={cn(styles.buttons)} size={"default"}>
                <LinkCustom
                  href="/pdf/daniel_fortune_[public].pdf"
                  label="My Resume"
                  noInteractivity={true}
                  type={LinkType.internal}
                  classname="text-neutral-200 dark:text-neutral-200"
                />
              </Button>

              <Tooltip>
                <TooltipTrigger
                  render={
                    <DropdownMenuTrigger
                      render={
                        <Button className={cn(styles.buttons)} size={"default"}>
                          <Bot />
                          Ask AI about me
                        </Button>
                      }
                    />
                  }
                />
                <TooltipContent className={"text-center"}>
                  Looking to hire ?<br /> Let AI tell you my strenghs &
                  weaknesses ^^
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
                    <span>Ask Claude</span>
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
                    <span>Ask ChatGPT</span>
                  </a>
                </DropdownMenuItem>
                <CopyPromptMenuItem prompt={aiQueries.clipboard} />
              </DropdownMenuContent>
            </DropdownMenu>
          </ButtonGroup>
        </div>
      ),
      about: (
        <Tooltip>
          <p className="text-sm">
            i&apos;m currently a{" "}
            <TooltipTrigger
              render={
                <span className="underline">
                  full-stack developer apprentice in paris,
                </span>
              }
            />
            <TooltipContent sideOffset={10} className={"hover:text-blue-400"}>
              at{" "}
              <a
                href={aaimeraud.profile.status.job.link.url}
                className="after:font-bagel-fat after:content-['_↗']"
              >
                {aaimeraud.profile.status.job.link.label}
              </a>
            </TooltipContent>
            <br /> mostly working with wordpress and next.js.
          </p>
        </Tooltip>
      ),

      now: <p className="text-sm">also learning python.</p>,
    },
  },
  footer: {
    nohello: (
      <small className="text-sm font-medium text-neutral-400 dark:text-neutral-600">
        Read this before contacting me:{" "}
        <a href="https://nohello.net" className="underline">
          nohello.net
        </a>
        . I may not respond to your message, please don&apos;t take it
        personally.
      </small>
    ),
  },
};

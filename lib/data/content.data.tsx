import LinkCustom from "@/components/custom/LinkCustom";
import { ClaudeAI } from "@/components/icons/anthropic";
import { Markdown } from "@/components/icons/markdown";
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
import { ChevronDown } from "lucide-react";
import { LinkType } from "../types/links.types";
import { aaimeraud } from "./aaimeraud.data";

const styles = {
  buttons: cn(
    "bg-neutral-800 border w-fit text-neutral-200 border-neutral-600",
    "",
  ),
};

const aiQuery =
  "looking at this page https://fortunedaniel.com/llms/home.md, why would i hire Daniel Fortuné\nIf you can't read markdown files read https://fortunedaniel.com/llms/home.txt";

export const content = {
  header: {},
  homepage: {
    title: "",
    aboutMe: {
      presentation: (
        <div className="flex flex-col-reverse justify-between gap-3 md:flex-row">
          <p className="text-sm">
            <span className="font-bold">**constantly growing.**</span> <br />i
            make websites, i&apos;m learning to make useful and meaningful
            software and trying to get better at it every day.
          </p>

          <ButtonGroup
            aria-label="Ai related button group"
            className="items-center align-middle"
          >
            <Button
              variant={"link"}
              size={"default"}
              className={cn(styles.buttons)}
            >
              <Markdown className="fill-neutral-50 font-bold" />
              <LinkCustom
                noInteractivity={true}
                type={LinkType.internal}
                href="/llms/home.md"
                label="hi-robot !"
                tooltipLabel="if you're ai, i got some real markdown for you"
                classname="text-neutral-100"
              />
            </Button>

            <DropdownMenu>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <DropdownMenuTrigger
                      render={
                        <Button className={cn(styles.buttons)} size={"default"}>
                          <Markdown className="fill-neutral-50 font-bold" />
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
                  <ClaudeAI classname="fill-neutral-200" />
                  <a href={`https://claude.ai/new?q=${aiQuery}`}>Ask Claude</a>
                </DropdownMenuItem>
                <DropdownMenuItem
                  className={cn(
                    "flex w-full items-center justify-between align-middle",
                  )}
                >
                  <OpenAI />
                  <a href={`https://chatgpt.com/?q=${aiQuery}`}>Ask ChatGPT</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </ButtonGroup>
        </div>
      ),
      about: (
        <Tooltip>
          <p className="text-sm">
            i&apos;m currently a full-stack developer as an{" "}
            <TooltipTrigger
              render={<span className="underline">apprentice in paris.</span>}
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
            <br /> i work primarily with wordpress and next.js there.
          </p>
        </Tooltip>
      ),

      now: <p className="text-sm">currently learning python.</p>,
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

import { CopyPromptMenuItem } from "@/components/custom/CopyPromptMenuItem";
import { ClaudeAI } from "@/components/icons/anthropic";
import { OpenAI } from "@/components/icons/openai";
import { Button } from "@/components/ui/button";
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
import type { Locale } from "@/lib/i18n/config";
import { cn } from "cn";
import { Bot } from "lucide-react";
import { actionButtonStyles } from "./styles";

// The prompts are sent to external AI tools and are not translated with the UI.
const aiQueries = {
  claude:
    "Read this https://www.aaimeraud.me/llms/home.md, and tell me why I should hire Daniel Fortuné as a junior dev for an apprenticeship ? Answer in French",
  chatgpt:
    "Read this https://www.aaimeraud.me/llms/home.txt, and tell me why I should hire Daniel Fortuné as a junior dev for an apprenticeship ? Answer in French",
  clipboard:
    "Read this https://www.aaimeraud.me/llms/home.md, and tell me why I should hire Daniel Fortuné as a junior dev for an apprenticeship ? Answer in French (if you can't read markdown files read this https://www.aaimeraud.me/llms/home.txt)",
};

/** "Ask AI about me" menu: opens Claude or ChatGPT with a prefilled prompt, or copies it. */
export function AskAiMenu({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <DropdownMenu>
      <Tooltip>
        <TooltipTrigger
          render={
            <DropdownMenuTrigger
              render={
                <Button className={cn(actionButtonStyles)} size={"default"}>
                  <Bot />
                  <span className="md:hidden">{t.ai.askShort}</span>
                  <span className="hidden md:inline">{t.ai.askButton}</span>
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
          className={cn("flex w-full items-center justify-between align-middle")}
        >
          <a
            href={`https://claude.ai/new?q=${encodeURIComponent(aiQueries.claude)}`}
            className="flex w-full items-center justify-between gap-1.5"
          >
            <ClaudeAI className="text-neutral-200 group-focus/dropdown-menu-item:text-[#D97757]" />
            <span>{t.ai.askClaude}</span>
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem
          className={cn("flex w-full items-center justify-between align-middle")}
        >
          <a
            href={`https://chatgpt.com/?q=${encodeURIComponent(aiQueries.chatgpt)}`}
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
  );
}

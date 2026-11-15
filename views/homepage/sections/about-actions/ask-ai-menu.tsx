import { OpenAI } from "@/components/icons/openai";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { cn } from "cn";
import { actionButtonStyles } from "./styles";

// The prompt is sent to external AI tools and are not translated with the UI.
const aiQuery =
  "Read this https://www.aaimeraud.me/home.txt, and tell me why I should hire Daniel Fortuné as a junior dev for an apprenticeship ? Answer in French";

/** "Ask ChatGPT about me" button: opens ChatGPT in a new tab with a prefilled prompt. */
export function AskAiMenu({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            nativeButton={false}
            render={
              <a
                href={`https://chatgpt.com/?q=${encodeURIComponent(aiQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            className={cn(actionButtonStyles)}
            size={"default"}
          >
            <OpenAI />
            <span className="md:hidden">{t.ai.askShort}</span>
            <span className="hidden md:inline">{t.ai.askButton}</span>
          </Button>
        }
      />
      <TooltipContent className={"text-center"}>
        {t.ai.askTooltipTitle}
        <br /> {t.ai.askTooltipBody}
      </TooltipContent>
    </Tooltip>
  );
}

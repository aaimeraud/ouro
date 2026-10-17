import { ButtonGroup } from "@/components/ui/button-group";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { LanguageMenu } from "./language-menu";
import { ResumeButton } from "./resume-button";

/** The action buttons shown next to the presentation: resume, Ask AI, language. */
export function ActionsButtonGroup({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <ButtonGroup
      aria-label={t.ai.groupLabel}
      className=" w-full  grid grid-cols-2"
    >
      <ResumeButton locale={locale} />
      <LanguageMenu locale={locale} />
    </ButtonGroup>
  );
}

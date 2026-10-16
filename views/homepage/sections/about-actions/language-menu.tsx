import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getDictionary } from "@/lib/i18n";
import { localePaths, locales, type Locale } from "@/lib/i18n/config";
import { cn } from "cn";
import { Check, Languages } from "lucide-react";
import { actionButtonStyles } from "./styles";

/** Locale switcher. Plain links: each locale is its own root layout, so switching does a full page load. */
export function LanguageMenu({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            className={cn(actionButtonStyles)}
            size={"default"}
            // Includes the visible label so the accessible name matches it (WCAG 2.5.3)
            aria-label={`${t.language[locale]} — ${t.language.label}`}
          >
            <Languages />
            <span className="md:hidden">{locale.toUpperCase()}</span>
            <span className="hidden md:inline">{t.language[locale]}</span>
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
  );
}

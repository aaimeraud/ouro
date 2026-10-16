import { TooltipProvider } from "@/components/ui/tooltip";
import type { Locale } from "@/lib/i18n/config";
import { Geist, Geist_Mono, M_PLUS_Rounded_1c } from "next/font/google";
import type { ReactNode } from "react";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  weight: "400",
  subsets: ["latin"],
});

const arrow = M_PLUS_Rounded_1c({
  variable: "--font-arrow",
  weight: "400",
  subsets: ["latin"],
});

type RootDocumentProps = {
  lang: Locale;
  children: ReactNode;
};

/**
 * Shared <html>/<body> shell. Each locale has its own root layout (see app/(en) and app/(fr)),
 * because `lang` lives on <html> and Next.js only lets a root layout render it.
 */
export default function RootDocument({ lang, children }: RootDocumentProps) {
  return (
    <html
      lang={lang}
      className={`${geist.variable} ${geistMono.variable} ${arrow.variable} antialiased`}
    >
      <body className="bg-neutral-50 dark:bg-neutral-900">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}

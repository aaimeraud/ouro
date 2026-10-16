import { Button } from "@/components/ui/button";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { cn } from "cn";
import { FileText } from "lucide-react";
import Link from "next/link";
import { actionButtonStyles } from "./styles";

/** Link to the public resume PDF, styled like the other action buttons. */
export function ResumeButton({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <Button
      className={cn(actionButtonStyles)}
      size={"default"}
      nativeButton={false}
      render={<Link href="/pdf/daniel_fortune_[public].pdf" />}
    >
      {/* Icon + short label on mobile, full label from md on */}
      <FileText className="md:hidden" />
      <span className="md:hidden">{t.ai.resumeShort}</span>
      <span className="hidden md:inline">{t.ai.resume}</span>
    </Button>
  );
}

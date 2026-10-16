"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { cn } from "cn";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

type CopyPromptMenuItemProps = {
  prompt: string;
  copyLabel: string;
  copiedLabel: string;
};

export function CopyPromptMenuItem({
  prompt,
  copyLabel,
  copiedLabel,
}: CopyPromptMenuItemProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy prompt to clipboard", error);
    }
  };

  return (
    <DropdownMenuItem
      className={cn(
        "flex w-full cursor-pointer items-center justify-between align-middle",
      )}
      closeOnClick={false}
      onClick={handleCopy}
    >
      {copied ? (
        <Check className="size-4" />
      ) : (
        <Copy className="size-4" />
      )}
      <span>{copied ? copiedLabel : copyLabel}</span>
    </DropdownMenuItem>
  );
}

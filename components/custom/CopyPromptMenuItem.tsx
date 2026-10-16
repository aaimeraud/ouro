"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { cn } from "cn";
import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Avoid a state update on an unmounted component
  useEffect(
    () => () => {
      if (timeout.current) clearTimeout(timeout.current);
    },
    [],
  );

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      if (timeout.current) clearTimeout(timeout.current);
      timeout.current = setTimeout(() => setCopied(false), 2000);
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

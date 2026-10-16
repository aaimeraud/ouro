import RootDocument from "@/components/custom/RootDocument";
import { getMetadata } from "@/lib/i18n";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../../core.css";

export const metadata: Metadata = getMetadata("fr");

export default function RootLayout({ children }: { children: ReactNode }) {
  return <RootDocument lang="fr">{children}</RootDocument>;
}

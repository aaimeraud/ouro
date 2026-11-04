import { getDictionary, getMetadata } from "@/lib/i18n";
import CvPage from "@/views/cv/cv.view";
import type { Metadata } from "next";

export const metadata: Metadata = getMetadata(
  "fr",
  "/cv",
  getDictionary("fr").cvPage.meta,
);

export default function Page() {
  return <CvPage locale="fr" />;
}

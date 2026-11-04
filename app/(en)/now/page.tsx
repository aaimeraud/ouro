import { getDictionary, getMetadata } from "@/lib/i18n";
import NowPage from "@/views/now/now.view";
import type { Metadata } from "next";

export const metadata: Metadata = getMetadata(
  "en",
  "/now",
  getDictionary("en").nowPage.meta,
);

export default function Page() {
  return <NowPage locale="en" />;
}

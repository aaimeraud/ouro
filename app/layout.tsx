import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import { Geist, Geist_Mono, M_PLUS_Rounded_1c } from "next/font/google";
import "./core.css";
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

export const metadata: Metadata = {
  title: "aaimeraud",
  description:
    "I make websites, i'm learning to make software and try getting better at it everyday.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${arrow.variable} antialiased`}
    >
      <body className="bg-neutral-50 dark:bg-neutral-900">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}

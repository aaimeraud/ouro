import { aaimeraud } from "@/lib/data/aaimeraud.data";
import type { Metadata } from "next";
import { Hedvig_Letters_Sans, Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const hedvigSans = Hedvig_Letters_Sans({
  variable: "--font-hedvig-sans",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "'raud",
  description: "aaimeraud is a web developer. ",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${hedvigSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}

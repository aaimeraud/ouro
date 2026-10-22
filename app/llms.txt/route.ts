import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const body = `# Daniel Fortuné

> Bachelor 3 student and full-stack apprentice based in Paris, aiming for backend / software engineering. Looking for a work-study position (alternance) in Paris, as a backend or frontend developer.

I mostly work with TypeScript, React and Next.js, and I am learning Rust (currently building a CLI task manager) to understand programming fundamentals in depth: architecture, design patterns, databases, authentication and authorization. I speak French and English fluently.

Skills: TypeScript, React, Next.js, PostgreSQL, Supabase, Git/GitHub, Bash/Linux. CMS: WordPress, Shopify (Liquid), PayloadCMS. Design: Figma, Penpot, Affinity, Illustrator.

## About
- [Home (Markdown)](${SITE_URL}/home.txt): presentation, skills and what I am looking for
- [Resume (Markdown)](${SITE_URL}/resume.txt): education, experience and project list

## Projects
- [AimeRSS](https://feed.fortunedaniel.com): a curated selection of RSS feeds I like, built with Next.js and React
- [t5x](https://github.com/aaimeraud/t5x): free, open-source collection of developer and design tools (in progress, not published yet)
- [Aarshi](https://github.com/aaimeraud/aarshi): command-line tool that creates a Next.js project with internationalization, and adds pages and languages with simple commands
- [ouro](https://github.com/aaimeraud/ouro): source code of this site (Next.js, App Router, i18n)

## Links
- [GitHub](https://github.com/aaimeraud)

## Optional
- [Sitemap](${SITE_URL}/sitemap.xml): full list of pages
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

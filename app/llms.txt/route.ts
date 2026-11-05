import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const body = `# Daniel Fortuné

> Bachelor 3 student and full-stack apprentice based in Paris, aiming for backend / software engineering. Looking for a work-study position (alternance) in Paris, as a backend or frontend developer.

I mostly work with TypeScript, React and Next.js, and I am learning Rust by building real projects: aarshi, a CLI that scaffolds multilingual Next.js sites, and yank, a desktop app around yt-dlp made with Tauri. I speak French and English fluently.

Skills: TypeScript, React, Next.js, TailwindCSS, PostgreSQL, Supabase, Git/GitHub, Bash/Linux. CMS: WordPress, Shopify (Liquid), PayloadCMS. Design: Figma, Penpot, Affinity, Illustrator.

## About
- [Home (Markdown)](${SITE_URL}/home.txt): presentation, skills and what I am looking for
- [Resume (Markdown)](${SITE_URL}/resume.txt): education, experience and project list
- [Resume](${SITE_URL}/cv): resume as a web page (also in French at /fr/cv)
- [Now](${SITE_URL}/now): what I am working on, learning and building at the moment

## Projects
- [Yank](https://github.com/aaimeraud/Yank): desktop app around yt-dlp to browse, watch and download YouTube videos or entire playlists (Tauri, Rust, React)
- [SpaceJo](https://spacejo.aaimeraud.me): online Skyjo clone made for friends, a full web app built with React and Rust
- [Aarshi](https://aarshi.aaimeraud.me): Rust CLI that scaffolds a multilingual Next.js App Router site, then adds pages, languages and sections without copying files by hand
- [ouro](https://github.com/aaimeraud/ouro): source code of this site (Next.js, App Router, i18n)
- [AimeRSS](https://feed.fortunedaniel.com): a curated selection of RSS feeds I like, built with Next.js and React

## Links
- [GitHub](https://github.com/aaimeraud)

## Optional
- [Sitemap](${SITE_URL}/sitemap.xml): full list of pages
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

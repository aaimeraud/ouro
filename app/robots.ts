import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: [
          "ClaudeBot",
          "Claude-User",
          "Claude-SearchBot",
          "KimiBot",
          "OAI-SearchBot",
          "GPTBot",
          "ChatGPT-User",
          "PerplexityBot",
        ],
        allow: ["/", "/llms/"],
      },
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://aaimeraud.me/sitemap.xml",
  };
}

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: [
          "ClaudeBot",
          "Claude-User",
          "Claude-SearchBot",
          "GPTBot",
          "OAI-SearchBot",
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
  };
}

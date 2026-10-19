import { GITHUB_BRANCH, GITHUB_REPO } from "./site";

/** How long the GitHub response is cached before the route revalidates. */
const REVALIDATE_SECONDS = 60 * 60;

type GitHubRefResponse = {
  object?: { sha?: string };
};

/**
 * The latest commit SHA on the repository's main branch.
 *
 * Fetched from the GitHub API and cached for an hour. When GitHub is
 * unreachable or rate-limited, falls back to the commit this deployment was
 * built from. Returns null when neither is available, so callers can omit it.
 */
export async function getLatestCommitSha(): Promise<string | null> {
  try {
    const headers: HeadersInit = { Accept: "application/vnd.github+json" };

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/git/ref/heads/${GITHUB_BRANCH}`,
      { headers, next: { revalidate: REVALIDATE_SECONDS } },
    );

    if (response.ok) {
      const data = (await response.json()) as GitHubRefResponse;
      if (data.object?.sha) return data.object.sha;
    }
  } catch {
    // Network failure: fall through to the deploy SHA.
  }

  return process.env.VERCEL_GIT_COMMIT_SHA ?? null;
}

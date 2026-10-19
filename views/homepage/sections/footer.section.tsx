import { getLatestCommitSha } from "@/lib/github";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { GITHUB_BRANCH, GITHUB_REPO } from "@/lib/site";
import { GitCommit } from "lucide-react";

type FooterProps = {
  locale: Locale;
};

const Footer = async ({ locale }: FooterProps) => {
  const t = getDictionary(locale);
  const sha = await getLatestCommitSha();
  const shortSha = sha?.slice(0, 7);

  return (
    <footer className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between md:gap-4">
      <small className="text-sm font-medium text-neutral-400 dark:text-neutral-600">
        {t.footer.nohelloBefore}{" "}
        <a href="https://nohello.net" className="underline">
          nohello.net
        </a>
        {t.footer.nohelloAfter}
      </small>

      {sha && shortSha ? (
        <a
          className="flex w-fit items-center gap-1 font-mono text-xs text-neutral-400 transition-colors hover:text-blue-600 dark:text-neutral-600 dark:hover:text-blue-300"
          href={`https://github.com/${GITHUB_REPO}/commit/${sha}`}
          target="_blank"
          rel="noopener noreferrer"
          title={t.footer.commitTitle}
        >
          <GitCommit className="size-3.5" aria-hidden />
          <span>
            {t.footer.commitLabel} {GITHUB_BRANCH}@{shortSha}
          </span>
        </a>
      ) : null}
    </footer>
  );
};

export default Footer;

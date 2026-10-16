import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";

type FooterProps = {
  locale: Locale;
};

const Footer = ({ locale }: FooterProps) => {
  const t = getDictionary(locale);

  return (
    <footer>
      <small className="text-sm font-medium text-neutral-400 dark:text-neutral-600">
        {t.footer.nohelloBefore}{" "}
        <a href="https://nohello.net" className="underline">
          nohello.net
        </a>
        {t.footer.nohelloAfter}
      </small>
    </footer>
  );
};

export default Footer;

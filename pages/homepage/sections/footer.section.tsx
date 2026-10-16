import { getContent } from "@/lib/data/content.data";
import { defaultLocale, type Locale } from "@/lib/i18n/config";

type FooterProps = {
  /** Defaults to English: `pages/` is also scanned as Pages Router routes at build time */
  locale?: Locale;
};

const Footer = ({ locale = defaultLocale }: FooterProps) => {
  const { footer } = getContent(locale);
  return <footer>{footer.nohello}</footer>;
};

export default Footer;

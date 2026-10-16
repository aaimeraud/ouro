import { getContent } from "@/lib/data/content.data";
import type { Locale } from "@/lib/i18n/config";

type FooterProps = {
  locale: Locale;
};

const Footer = ({ locale }: FooterProps) => {
  const { footer } = getContent(locale);
  return <footer>{footer.nohello}</footer>;
};

export default Footer;

import LinkCustom from "@/components/custom/LinkCustom";
import { aaimeraud } from "@/lib/data/aaimeraud.data";
import { getContent } from "@/lib/data/content.data";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { cn } from "@sglara/cn";

type AboutProps = {
  locale: Locale;
};

const About = ({ locale }: AboutProps) => {
  const { homepage } = getContent(locale);
  const { socials } = getDictionary(locale);

  return (
    <section
      className={cn(
        "text-neutral-800 dark:text-neutral-50",
        "w-full",
        "flex flex-col gap-5",
      )}
    >
      {/* Visually hidden heading: gives the section its h2 for heading order without changing the design */}
      <h2 className="sr-only">
        {getDictionary(locale).about.sectionTitle}
      </h2>
      {homepage.aboutMe.presentation}
      {homepage.aboutMe.about}
      {homepage.aboutMe.now}

      <ul className="flex gap-3">
        {aaimeraud.socials.map((social, index: number) => (
          <li key={index}>
            <LinkCustom
              href={social.url}
              type={social.type}
              label={social.label}
              tooltipLabel={socials[
                social.label as keyof typeof socials
              ]
                .toLowerCase()
                .trim()}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default About;

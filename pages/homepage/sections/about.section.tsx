import LinkCustom from "@/components/custom/LinkCustom";
import { aaimeraud } from "@/lib/data/aaimeraud.data";
import { content } from "@/lib/data/content.data";
import { cn } from "@sglara/cn";
const About = () => {
  return (
    <section
      className={cn(
        "text-neutral-800 dark:text-neutral-50",
        "w-full",
        "flex flex-col gap-5",
      )}
    >
      {content.homepage.aboutMe.presentation}
      {content.homepage.aboutMe.about}
      {content.homepage.aboutMe.now}

      <ul className="flex gap-3">
        {aaimeraud.socials.map((social, index: number) => (
          <li key={index}>
            <LinkCustom
              href={social.url}
              type={social.type}
              label={social.label}
              tooltipLabel={social.tooltipLabel?.toLowerCase().trim()}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default About;

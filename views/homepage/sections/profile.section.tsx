import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { aaimeraud } from "@/lib/data/aaimeraud.data";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import Image from "next/image";

type ProfileProps = {
  profilePicture?: boolean;
  locale: Locale;
};

const Profile = ({ profilePicture = false, locale }: ProfileProps) => {
  const { profile: t } = getDictionary(locale);

  return (
    <section className="w-full">
      <div className="flex h-full flex-col items-start gap-5 text-neutral-800 dark:text-neutral-50">
        {profilePicture && (
          <Tooltip>
            <TooltipTrigger
              render={
                <div className="w-15 overflow-hidden rounded-full border-2 border-neutral-300 transition-all duration-150 ease-in-out hover:border-blue-600">
                  <Image
                    src={aaimeraud.profile.portrait}
                    alt={`${t.portraitAlt} ${aaimeraud.profile.username}`}
                    width={500}
                    height={500}
                    loading="eager"
                    className=""
                  />
                </div>
              }
            />
            <TooltipContent side="right" sideOffset={10}>
              {t.portraitTooltip}
            </TooltipContent>
          </Tooltip>
        )}

        <div className="flex flex-col">
          <Tooltip>
            <TooltipTrigger
              render={
                <h1 className="w-fit text-xl font-bold tracking-tight text-neutral-800 before:text-neutral-300 before:content-['#_'] lg:text-3xl dark:text-neutral-200 dark:before:text-neutral-600">
                  {aaimeraud.profile.username}
                </h1>
              }
            />
            <TooltipContent side="right" sideOffset={10}>
              {t.nameTooltip}{" "}
              <span className="font-bold">
                {aaimeraud.profile.fname.toLowerCase()}
              </span>
            </TooltipContent>
          </Tooltip>
          <span className="text-sm tracking-tight text-neutral-600 dark:text-neutral-400">
            &gt; {t.description.toLowerCase()}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Profile;

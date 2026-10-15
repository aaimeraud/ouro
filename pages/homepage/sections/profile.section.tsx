import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { aaimeraud } from "@/lib/data/aaimeraud.data";
import Image from "next/image";

type ProfileProps = {
  profilePicture?: boolean;
};

const Profile = ({ profilePicture = false }: ProfileProps) => {
  return (
    <section className="w-full">
      <div className="flex flex-col items-start gap-5 text-neutral-800 dark:text-neutral-50">
        {profilePicture == true && (
          <div className="w-20 overflow-hidden rounded-full border-2 border-neutral-300">
            <Image
              src={aaimeraud.profile.portrait}
              alt={`Une photo de ${aaimeraud.profile.username}`}
              width={500}
              height={500}
              loading="eager"
              className=""
            />
          </div>
        )}
        <div className="flex flex-col">
          <Tooltip>
            <TooltipTrigger
              render={
                <h1 className="w-fit text-xl font-bold tracking-tight text-neutral-800 lg:text-3xl dark:text-neutral-200">
                  # {aaimeraud.profile.username}
                </h1>
              }
            />
            <TooltipContent side="right" sideOffset={10}>
              you can call me
              <span className="font-bold">
                {aaimeraud.profile.fname.toLowerCase()}
              </span>
            </TooltipContent>
          </Tooltip>
          <span className="text-sm tracking-tight text-neutral-600 dark:text-neutral-400">
            &gt; {aaimeraud.profile.description.toLowerCase()}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Profile;

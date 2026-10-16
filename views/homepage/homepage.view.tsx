import { getJsonLd, serializeJsonLd } from "@/lib/seo/json-ld";
import type { Locale } from "@/lib/i18n/config";
import About from "@/views/homepage/sections/about.section";
import Footer from "@/views/homepage/sections/footer.section";
import Profile from "@/views/homepage/sections/profile.section";
import Projects from "@/views/homepage/sections/projects.section";

type HomepageProps = {
  locale: Locale;
};

export default function Homepage({ locale }: HomepageProps) {
  return (
    <main className="m-auto flex max-w-lg flex-col gap-5 p-5 transition-all duration-150 selection:bg-blue-600 selection:text-blue-50 md:max-w-3xl lg:max-w-4xl xl:max-w-6xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(getJsonLd(locale)),
        }}
      />
      <Profile profilePicture={true} locale={locale} />
      <About locale={locale} />
      <Projects locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}

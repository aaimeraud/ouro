import About from "@/pages/homepage/sections/about.section";
import Footer from "@/pages/homepage/sections/footer.section";
import Profile from "@/pages/homepage/sections/profile.section";
import Projects from "@/pages/homepage/sections/projects.section";
export default function Home() {
  return (
    <main className="m-auto flex max-w-lg flex-col gap-5 px-5 py-10 transition-all duration-150 selection:bg-blue-600 selection:text-blue-50 md:max-w-3xl lg:max-w-4xl xl:max-w-6xl">
      <Profile profilePicture={true} />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}

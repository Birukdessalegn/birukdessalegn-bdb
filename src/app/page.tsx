import AboutSection from "../components/sections/About";
import ProjectsSection from "../components/sections/Projects";
import SkillsSection from "../components/sections/Skills";
import ExperienceSection from "../components/sections/Experience";
import ContactSection from "../components/sections/Contact";
import { siteConfig } from "../content/site";

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          {siteConfig.name}
        </h1>
        <p className="mt-2 text-foreground/70">{siteConfig.role}</p>
      </section>
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}

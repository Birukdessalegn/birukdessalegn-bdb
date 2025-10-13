import { experiences } from "../../content/experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24">
      <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
      <ul className="mt-6 space-y-4">
        {experiences.map((e) => (
          <li key={e.company} className="rounded-lg border border-black/5 dark:border-white/10 p-5 bg-background/50">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">{e.role} · {e.company}</h3>
              <span className="text-sm text-foreground/60">{e.period}</span>
            </div>
            <p className="mt-2 text-sm text-foreground/80">{e.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}


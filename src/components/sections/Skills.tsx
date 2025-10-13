import { skills } from "../../content/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24">
      <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-3">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group} className="rounded-lg border border-black/5 dark:border-white/10 p-5 bg-background/50">
            <h3 className="font-medium capitalize">{group}</h3>
            <ul className="mt-3 text-sm text-foreground/80 space-y-1">
              {(items as string[]).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}


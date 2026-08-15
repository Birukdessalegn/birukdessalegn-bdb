import { skills } from "../../content/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24">
      <h2 className="text-2xl font-semibold tracking-tight">Skills & Technical Expertise</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([group, items]) => {
          const list = Array.isArray(items) ? items : [items];
          return (
            <div
              key={group}
              className="rounded-xl border border-white/10 p-5 bg-background/50 backdrop-blur-sm shadow-sm transition-colors hover:border-white/20"
            >
              <h3 className="font-semibold text-sm capitalize tracking-wide text-white">{group}</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {list.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-mono rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
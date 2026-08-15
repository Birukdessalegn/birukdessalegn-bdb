import Image from "next/image";
import { experiences } from "../../content/experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24">
      <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
      <div className="mt-6 space-y-6">
        {experiences.map((e) => (
          <article
            key={e.company}
            className="rounded-xl border border-white/10 p-5 md:p-6 bg-background/50 backdrop-blur-sm shadow-sm transition-colors hover:border-white/20"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {e.image && (
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-white/5">
                    <Image
                      src={e.image}
                      alt={`${e.company} logo`}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                )}
                <div>
                  <h3 className="font-semibold text-lg text-white">{e.role}</h3>
                  <p className="text-sm font-medium text-white/70">{e.company}</p>
                </div>
              </div>
              <span className="inline-self-start sm:self-auto text-xs font-mono px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-white/70">
                {e.period}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-foreground/80">{e.summary}</p>
            {e.tech && e.tech.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {e.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs rounded-md bg-white/5 border border-white/10 px-2.5 py-1 text-white/80 font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}



import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "../../content/site";
import { experiences } from "../../content/experience";
import { skills } from "../../content/skills";

export const metadata: Metadata = {
  title: "Resume",
  description: "Résumé and download link.",
};

export default function ResumePage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">Resume</h1>
      <p className="mt-4 text-foreground/80">
        Full-Stack Developer with expertise in building web applications and cybersecurity.
      </p>
      <Link
        href={siteConfig.resumeUrl}
        className="mt-6 inline-block rounded-md border border-black/10 dark:border-white/20 px-4 py-2 hover:bg-black/5 dark:hover:bg-white/10"
      >
        Download PDF
      </Link>

      {/* Experience Section */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold tracking-tight">Experience</h2>
        <div className="mt-6 space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="border-l border-black/10 dark:border-white/10 pl-4">
              <h3 className="font-semibold">{exp.company}</h3>
              <p className="text-sm text-foreground/60">{exp.role}</p>
              <p className="text-sm text-foreground/50">{exp.period}</p>
              <p className="mt-2 text-foreground/80">{exp.summary}</p>
              {exp.tech && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs rounded-full bg-black/5 dark:bg-white/5 px-2 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold tracking-tight">Skills</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-semibold text-sm text-foreground/90">{category}</h3>
              <p className="mt-2 text-foreground/70 text-sm">
                {Array.isArray(items) ? items.join(", ") : items}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "../../content/site";
import { experiences } from "../../content/experience";
import { skills } from "../../content/skills";

export const metadata: Metadata = {
  title: "Resume & Credentials",
  description: "Professional résumé, skills, experience, and PDF download for Biruk Dessalegn.",
};

export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Résumé & Experience</h1>
          <p className="mt-2 text-sm text-foreground/80">
            Full-Stack Developer & Cybersecurity Enthusiast · {siteConfig.location}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link
            href={siteConfig.resumeUrl}
            target="_blank"
            download
            className="inline-flex items-center gap-1.5 rounded-lg bg-white text-black font-semibold px-4 py-2 text-sm transition-opacity hover:opacity-90 pressable"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
            </svg>
            Download PDF
          </Link>
        </div>
      </div>

      {/* Embedded PDF Preview */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight text-white">PDF Preview</h2>
        <div className="w-full h-[600px] rounded-xl border border-white/10 overflow-hidden bg-white/5 backdrop-blur-sm">
          <object
            data={siteConfig.resumeUrl}
            type="application/pdf"
            className="w-full h-full"
          >
            <div className="p-8 text-center space-y-4">
              <p className="text-sm text-white/70">
                Your browser does not support embedded PDFs.
              </p>
              <Link
                href={siteConfig.resumeUrl}
                target="_blank"
                className="inline-block rounded-md border border-white/20 px-4 py-2 text-sm text-white hover:bg-white/10"
              >
                Click here to view or download the PDF
              </Link>
            </div>
          </object>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold tracking-tight text-white">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-white/10 p-5 bg-background/50 backdrop-blur-sm space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-semibold text-lg text-white">
                  {exp.role} <span className="text-white/60 font-normal">at {exp.company}</span>
                </h3>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-white/70">
                  {exp.period}
                </span>
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">{exp.summary}</p>
              {exp.tech && exp.tech.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono rounded-md border border-white/10 bg-white/5 px-2.5 py-0.5 text-white/70"
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

      {/* Skills Matrix */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold tracking-tight text-white">Skills Matrix</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(skills).map(([category, items]) => {
            const list = Array.isArray(items) ? items : [items];
            return (
              <div
                key={category}
                className="rounded-xl border border-white/10 p-4 bg-background/50 backdrop-blur-sm"
              >
                <h3 className="font-semibold text-sm capitalize text-white mb-2">{category}</h3>
                <p className="text-xs font-mono text-white/70 leading-relaxed">
                  {list.join(" · ")}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}



"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects, ProjectCategory } from "../../content/projects";

const categories: ProjectCategory[] = ["All", "Full-Stack", "Mobile", "Cybersecurity"];

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="scroll-mt-24">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
        {/* Category Filters */}
        <div className="flex flex-wrap gap-1.5 p-1 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={
                "px-3 py-1 text-xs rounded-md font-medium transition-all pressable " +
                (selectedCategory === cat
                  ? "bg-white text-black shadow-sm font-semibold"
                  : "text-white/70 hover:text-white hover:bg-white/10")
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {filteredProjects.map((p) => (
          <article
            key={p.title}
            className="flex flex-col justify-between rounded-xl border border-white/10 p-5 bg-background/50 backdrop-blur-sm transition-all duration-200 hover:border-white/20 hover:shadow-md"
          >
            <div>
              {p.image && (
                <div className="relative mb-4 overflow-hidden rounded-lg ring-1 ring-white/10 aspect-[16/9] group">
                  <Image
                    src={p.image}
                    alt={`${p.title} preview`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute top-2 right-2">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-full border border-white/20 bg-black/60 backdrop-blur-md text-white">
                      {p.category}
                    </span>
                  </div>
                </div>
              )}
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-white/70 font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between gap-3 text-sm">
              {p.link ? (
                <Link
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-white font-medium hover:underline text-xs"
                >
                  Live Demo ↗
                </Link>
              ) : (
                <span className="text-xs text-white/50 italic">Private System</span>
              )}

              {p.github && (
                <Link
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs rounded-md border border-white/15 px-2.5 py-1 text-white/80 hover:bg-white/10 transition-colors pressable"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  GitHub
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}



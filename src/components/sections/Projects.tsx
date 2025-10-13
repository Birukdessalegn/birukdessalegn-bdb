import Link from "next/link";
import Image from "next/image";
import { projects } from "../../content/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24">
      <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="rounded-lg border border-white/10 p-5 bg-background/50"
          >
            {p.image && (
              <div className="relative mb-3 overflow-hidden rounded-md ring-1 ring-white/10">
                <Image
                  src={p.image}
                  alt={`${p.title} preview`}
                  width={640}
                  height={360}
                  className="object-cover w-full h-40"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
              </div>
            )}
            <h3 className="text-lg font-medium">{p.title}</h3>
            <p className="mt-2 text-sm text-foreground/80">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="text-xs rounded-full border px-2 py-1 text-foreground/70">
                  {t}
                </span>
              ))}
            </div>
            {p.link ? (
              <Link href={p.link} className="mt-3 inline-block text-sm text-white/90 hover:underline">
                Live demo →
              </Link>
            ) : (
              <span className="mt-3 inline-block text-xs rounded-md border border-white/20 px-2 py-1 text-white/60">
                No live demo
              </span>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}


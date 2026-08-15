import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "../../content/posts";

export const metadata: Metadata = {
  title: "Blog & Articles",
  description: "Technical writing, cybersecurity insights, and full-stack software development articles by Biruk Dessalegn.",
};

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">Articles & Thoughts</h1>
        <p className="mt-2 text-sm text-foreground/70">
          Insights on full-stack architecture, cybersecurity, mobile applications, and software craftsmanship.
        </p>
      </div>

      <div className="space-y-6">
        {posts.map((p) => (
          <article
            key={p.slug}
            className="group rounded-xl border border-white/10 p-6 bg-background/50 backdrop-blur-sm transition-all hover:border-white/25 hover:shadow-md"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-white/60 mb-2">
              <span>{p.date}</span>
              <span>{p.readTime}</span>
            </div>

            <h2 className="text-xl font-semibold text-white group-hover:text-amber-300 transition-colors">
              <Link href={`/blog/${p.slug}`}>{p.title}</Link>
            </h2>

            <p className="mt-3 text-sm text-foreground/80 leading-relaxed">{p.excerpt}</p>

            <div className="mt-4 flex items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono rounded-md border border-white/10 bg-white/5 px-2.5 py-0.5 text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <Link
                href={`/blog/${p.slug}`}
                className="text-xs font-medium text-white/80 hover:text-white inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
              >
                Read Article →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}



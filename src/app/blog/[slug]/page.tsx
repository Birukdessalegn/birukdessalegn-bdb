import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { posts } from "../../../content/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = posts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = posts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto space-y-8">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-xs font-mono text-white/70 hover:text-white transition-colors pressable"
      >
        ← Back to Articles
      </Link>

      <header className="space-y-4 border-b border-white/10 pb-6">
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-white/60">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap gap-2 pt-2">
          {post.tags.map((t) => (
            <span
              key={t}
              className="text-xs font-mono rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-white/80"
            >
              {t}
            </span>
          ))}
        </div>
      </header>

      <div className="space-y-6 text-foreground/90 leading-relaxed text-base">
        {post.content.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>

      <footer className="pt-8 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
        <span>Written by Biruk Dessalegn</span>
        <Link href="/blog" className="hover:underline">
          View all posts
        </Link>
      </footer>
    </article>
  );
}

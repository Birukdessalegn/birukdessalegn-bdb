import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPost, getBlogPosts } from "@/lib/blog";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-2xl">
      <Link
        href="/blog"
        className="text-sm text-foreground/60 hover:text-foreground transition-colors"
      >
        ← Back to blog
      </Link>

      <header className="mt-8 mb-8">
        <h1 className="text-3xl font-bold tracking-tight">{post.title}</h1>
        <div className="mt-4 flex items-center gap-4 text-sm text-foreground/60">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
      </header>

      <div className="prose dark:prose-invert max-w-none">
        {/* Basic markdown rendering - converts markdown to styled HTML */}
        <div className="space-y-4 text-foreground/90">
          {post.content.split("\n\n").map((paragraph, idx) => {
            // Handle headers
            if (paragraph.startsWith("### ")) {
              return (
                <h3
                  key={idx}
                  className="text-lg font-semibold mt-6 mb-2"
                >
                  {paragraph.replace("### ", "")}
                </h3>
              );
            }
            if (paragraph.startsWith("## ")) {
              return (
                <h2
                  key={idx}
                  className="text-2xl font-bold mt-8 mb-3"
                >
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }

            // Handle code blocks
            if (paragraph.startsWith("```")) {
              const code = paragraph
                .replace(/```\n?/g, "")
                .replace(/```/g, "");
              return (
                <pre
                  key={idx}
                  className="bg-black/5 dark:bg-white/5 rounded-lg p-4 overflow-auto"
                >
                  <code className="text-sm">{code}</code>
                </pre>
              );
            }

            // Handle lists
            if (paragraph.startsWith("- ")) {
              return (
                <ul
                  key={idx}
                  className="list-disc list-inside space-y-2 ml-4"
                >
                  {paragraph.split("\n").map((item, i) => (
                    <li key={i}>{item.replace("- ", "")}</li>
                  ))}
                </ul>
              );
            }

            // Regular paragraph
            return (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>
      </div>

      <footer className="mt-12 pt-8 border-t border-black/10 dark:border-white/10">
        <Link
          href="/blog"
          className="text-sm text-foreground/60 hover:text-foreground transition-colors"
        >
          ← Back to blog
        </Link>
      </footer>
    </article>
  );
}

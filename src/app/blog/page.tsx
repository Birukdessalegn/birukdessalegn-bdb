import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Posts and writing.",
};

export default function BlogPage() {
  // Placeholder list; wire to content source later
  const posts = [
    { title: "Hello World", date: "2025-01-01" },
    { title: "Building a Portfolio with Next.js", date: "2025-02-15" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">Blog</h1>
      <ul className="mt-6 space-y-4">
        {posts.map((p) => (
          <li key={p.title} className="rounded-lg border border-black/5 dark:border-white/10 p-5 bg-background/50">
            <div className="flex items-center justify-between">
              <h2 className="font-medium">{p.title}</h2>
              <span className="text-sm text-foreground/60">{p.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}


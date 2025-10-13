import Link from "next/link";
import { siteConfig } from "../content/site";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/10 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-sm text-foreground/70">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link href={siteConfig.social.github}>GitHub</Link>
          <Link href={siteConfig.social.linkedin}>LinkedIn</Link>
          <Link href={siteConfig.social.x}>X</Link>
          <Link href="/rss.xml">RSS</Link>
        </div>
      </div>
    </footer>
  );
}


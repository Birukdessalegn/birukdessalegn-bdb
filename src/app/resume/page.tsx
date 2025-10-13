import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "../../content/site";

export const metadata: Metadata = {
  title: "Resume",
  description: "Résumé and download link.",
};

export default function ResumePage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">Resume</h1>
      <p className="mt-4 text-foreground/80">Download the latest copy below.</p>
      <Link
        href={siteConfig.resumeUrl}
        className="mt-6 inline-block rounded-md border border-black/10 dark:border-white/20 px-4 py-2 hover:bg-black/5 dark:hover:bg-white/10"
      >
        Download PDF
      </Link>
    </div>
  );
}


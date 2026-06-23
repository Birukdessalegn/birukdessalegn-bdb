import Link from "next/link";
import { siteConfig } from "../../content/site";

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24">
      <h2 className="text-2xl font-semibold tracking-tight bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">Contact</h2>
      <div className="mt-4 text-foreground/90 space-y-3">
        <p>
          Reach me at <Link className="underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</Link> or via {" "}
          <Link className="underline" href={siteConfig.social.linkedin}>LinkedIn</Link>.
        </p>
        <p>Phone: <Link className="underline" href="tel:+251962841163">+251 96 284 1163</Link></p>
        <div className="flex flex-wrap gap-3 text-sm">
          <Link className="inline-flex items-center rounded-md border px-3 py-1.5 hover:bg-foreground/5" href={siteConfig.social.github}>GitHub</Link>
          <Link className="inline-flex items-center rounded-md border px-3 py-1.5 hover:bg-foreground/5" href={siteConfig.social.linkedin}>LinkedIn</Link>
        </div>
      </div>
    </section>
  );
}
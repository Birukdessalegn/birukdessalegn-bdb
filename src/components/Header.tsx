"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "../content/site";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="border-b border-white/10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-medium tracking-tight flex items-center gap-2">
          <span className="relative h-8 w-8 overflow-hidden rounded-full ring-1 ring-white/20">
            <Image
              src="/IMG_9748%20(Edited).JPG"
              alt="Biruk Dessalegn avatar"
              fill
              sizes="32px"
              className="object-cover"
              priority
            />
          </span>
          <span className="sr-only">{siteConfig.name}</span>
          <span className="hidden sm:inline text-white/60">· {siteConfig.role}</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {siteConfig.nav.map((item) => {
            const isActive = item.href === pathname;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  "text-sm transition-colors hover:text-white/90 hover-underline-glow pressable " +
                  (isActive ? "text-white" : "text-white/70")
                }
                onClick={(e) => {
                  // Add spotlight to targets within current page (anchors like #about)
                  if (item.href.startsWith("#")) {
                    // Defer to allow scroll, then spotlight
                    setTimeout(() => {
                      const target = document.querySelector(item.href) as HTMLElement | null;
                      if (target) {
                        target.classList.add("anchor-spotlight");
                        setTimeout(() => target.classList.remove("anchor-spotlight"), 1400);
                      }
                    }, 30);
                  }
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="md:hidden">
          <details className="group">
            <summary className="list-none cursor-pointer rounded-md border border-white/10 px-3 py-1.5 text-sm text-white/80 group-open:bg-white/10">
              Menu
            </summary>
            <div className="absolute right-4 mt-2 min-w-48 rounded-md border border-white/10 bg-background/95 p-2 shadow-lg">
              {siteConfig.nav.map((item) => {
                const isActive = item.href === pathname;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={
                      "block rounded px-3 py-2 text-sm hover:bg-white/10 hover-underline-glow pressable " +
                      (isActive ? "text-white" : "text-white/80")
                    }
                    onClick={(e) => {
                      if (item.href.startsWith("#")) {
                        setTimeout(() => {
                          const target = document.querySelector(item.href) as HTMLElement | null;
                          if (target) {
                            target.classList.add("anchor-spotlight");
                            setTimeout(() => target.classList.remove("anchor-spotlight"), 1400);
                          }
                        }, 30);
                      }
                    }}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}


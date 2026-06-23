"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

export default function PageTransition({ children }: Props) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.classList.remove("page-fade-enter-active");
    void el.offsetHeight;
    el.classList.add("page-fade-enter-active");
  }, [pathname]);

  return (
    <div key={pathname} ref={containerRef} className="page-fade-enter">
      {children}
    </div>
  );
}


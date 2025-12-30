"use client";

import { ReactNode } from "react";

export function CrossZoneLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  const prefetch = () => {
    const existing = document.querySelector(`link[href="${href}"]`);
    if (!existing) {
      const link = document.createElement("link");
      link.rel = "prefetch";
      link.href = href;
      document.head.appendChild(link);
    }
  };

  return (
    <a href={href} className={className} onMouseEnter={prefetch} onFocus={prefetch}>
      {children}
    </a>
  );
}


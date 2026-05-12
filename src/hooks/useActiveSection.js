import { useEffect, useState } from "react";

export function useActiveSection(items) {
  const [active, setActive] = useState(items[0].href);

  useEffect(() => {
    const sections = items
      .map(item => document.querySelector(item.href))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-28% 0px -56% 0px", threshold: [0.08, 0.2, 0.45] }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return active;
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

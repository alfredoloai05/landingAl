import { useEffect, useState } from "react";

export function useActiveSection(items) {
  const [active, setActive] = useState(items[0].href);

  useEffect(() => {
    const sections = items.map(item => ({ ...item, element: document.querySelector(item.href) })).filter(item => item.element);
    if (!sections.length) return undefined;

    let frame;
    const update = () => {
      const marker = window.innerHeight * .42;
      const current = sections.find(({ element }) => {
        const rect = element.getBoundingClientRect();
        return rect.top <= marker && rect.bottom >= marker;
      });
      if (current) setActive(current.href);
      frame = undefined;
    };
    const onScroll = () => { if (!frame) frame = window.requestAnimationFrame(update); };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items]);

  return active;
}

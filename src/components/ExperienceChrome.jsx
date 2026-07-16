import { useEffect, useRef } from "react";

function CustomCursor() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const supportsFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!supportsFinePointer || reducedMotion) return undefined;

    const ring = ringRef.current;
    const dot = dotRef.current;
    const label = labelRef.current;
    if (!ring || !dot || !label) return undefined;

    document.body.classList.add("has-experience-cursor");
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let frame;
    let currentTarget = null;

    const tick = () => {
      currentX += (targetX - currentX) * 0.16;
      currentY += (targetY - currentY) * 0.16;
      ring.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      frame = window.requestAnimationFrame(tick);
    };

    const onPointerMove = event => {
      targetX = event.clientX;
      targetY = event.clientY;
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
      ring.classList.add("is-visible");
      dot.classList.add("is-visible");

      const interactive = event.target.closest?.("[data-cursor], a, button");
      if (interactive === currentTarget) return;
      currentTarget = interactive;
      const message = interactive?.dataset?.cursor || (interactive ? "ABRIR" : "");
      label.textContent = message;
      ring.classList.toggle("is-interactive", Boolean(interactive));
    };

    const onPointerLeave = () => {
      ring.classList.remove("is-visible");
      dot.classList.remove("is-visible");
    };
    const onPointerDown = () => ring.classList.add("is-pressed");
    const onPointerUp = () => ring.classList.remove("is-pressed");

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onPointerLeave);
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    frame = window.requestAnimationFrame(tick);

    return () => {
      document.body.classList.remove("has-experience-cursor");
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("mouseleave", onPointerLeave);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, []);

  return (
    <div className="cursor-layer" aria-hidden="true">
      <div ref={ringRef} className="cursor-ring"><span ref={labelRef} /></div>
      <div ref={dotRef} className="cursor-dot" />
    </div>
  );
}

export default function ExperienceChrome() {
  return <CustomCursor />;
}

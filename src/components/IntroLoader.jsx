import { useEffect, useState } from "react";
import { createTimeline, stagger } from "animejs";

export default function IntroLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
    if (window.location.hash) {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    }
    window.scrollTo(0, 0);

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setVisible(false);
      return undefined;
    }

    document.body.classList.add("intro-running");
    const timeline = createTimeline({ defaults: { ease: "out(4)" }, onComplete: () => setVisible(false) })
      .add(".intro-brand", { opacity: { from: 0 }, y: { from: -12 }, duration: 480 })
      .add(".intro-statement span", { y: { from: "115%" }, delay: stagger(90), duration: 720 }, 120)
      .add(".intro-mark", { scale: { from: .65 }, rotate: { from: "-.08turn" }, duration: 780 }, 180)
      .add(".intro-progress i", { scaleX: { from: 0 }, duration: 1850, ease: "inOut(3)" }, 260)
      .add(".intro-loader", { clipPath: ["inset(0 0 0 0)", "inset(0 0 100% 0)"], duration: 900, ease: "inOut(4)" }, 2250);

    return () => {
      timeline.pause?.();
      document.body.classList.remove("intro-running");
    };
  }, []);

  useEffect(() => {
    if (!visible) {
      document.body.classList.remove("intro-running");
      window.scrollTo(0, 0);
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="intro-loader" aria-hidden="true">
      <div className="intro-brand"><strong>VENCODEX</strong><span>SOFTWARE SOLUTIONS</span></div>
      <div className="intro-center">
        <div className="intro-mark">V</div>
        <p className="intro-statement"><span>DE UNA IDEA.</span><span>A ALGO QUE AVANZA.</span></p>
      </div>
      <div className="intro-footer"><span>PONIENDO TODO EN MARCHA</span><div className="intro-progress"><i /></div><strong>VX · 2026</strong></div>
    </div>
  );
}

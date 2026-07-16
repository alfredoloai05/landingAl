import { useEffect, useState } from "react";
import { createTimeline, stagger } from "animejs";

const INTRO_KEY = "vencodex_intro_seen";

function shouldShowIntro() {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  try {
    return window.sessionStorage.getItem(INTRO_KEY) !== "true";
  } catch {
    return true;
  }
}

export default function IntroLoader() {
  const [visible, setVisible] = useState(shouldShowIntro);

  useEffect(() => {
    if (!visible) {
      document.body.classList.remove("intro-running");
      return undefined;
    }

    const previousScrollRestoration = "scrollRestoration" in window.history
      ? window.history.scrollRestoration
      : null;
    if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    try {
      window.sessionStorage.setItem(INTRO_KEY, "true");
    } catch {}

    const mobile = window.matchMedia("(max-width: 767px)").matches;
    const timings = mobile
      ? { brand: 260, statement: 430, mark: 420, progress: 920, exit: 450, statementAt: 70, markAt: 100, progressAt: 150, exitAt: 1050, total: 1500 }
      : { brand: 380, statement: 650, mark: 650, progress: 1650, exit: 650, statementAt: 110, markAt: 160, progressAt: 220, exitAt: 1850, total: 2500 };

    document.body.classList.add("intro-running");
    const finish = () => {
      document.body.classList.remove("intro-running");
      setVisible(false);
    };
    const timeline = createTimeline({ defaults: { ease: "out(4)" }, onComplete: finish })
      .add(".intro-brand", { opacity: { from: 0 }, y: { from: -12 }, duration: timings.brand })
      .add(".intro-statement span", { y: { from: "115%" }, delay: stagger(mobile ? 55 : 80), duration: timings.statement }, timings.statementAt)
      .add(".intro-mark", { scale: { from: .65 }, rotate: { from: "-.08turn" }, duration: timings.mark }, timings.markAt)
      .add(".intro-progress i", { scaleX: { from: 0 }, duration: timings.progress, ease: "inOut(3)" }, timings.progressAt)
      .add(".intro-loader", { clipPath: ["inset(0 0 0 0)", "inset(0 0 100% 0)"], duration: timings.exit, ease: "inOut(4)" }, timings.exitAt);
    const failsafe = window.setTimeout(finish, timings.total + 350);

    return () => {
      timeline.pause?.();
      window.clearTimeout(failsafe);
      document.body.classList.remove("intro-running");
      if (previousScrollRestoration !== null) window.history.scrollRestoration = previousScrollRestoration;
    };
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

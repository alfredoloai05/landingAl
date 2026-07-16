import { useEffect } from "react";
import { animate, createTimeline, stagger } from "animejs";

export function useMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".reveal").forEach(element => element.classList.add("is-visible"));
      return undefined;
    }

    const running = [];
    const scrambleFrames = new Set();
    const scrambleText = element => {
      if (!element || element.dataset.scrambling === "true") return;
      const original = element.dataset.originalText || element.textContent;
      element.dataset.originalText = original;
      element.dataset.scrambling = "true";
      const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      const start = performance.now();
      const duration = 560;
      let frame;
      const draw = now => {
        const progress = Math.min(1, (now - start) / duration);
        const revealed = Math.floor(progress * original.length);
        element.textContent = [...original].map((character, index) => {
          if (character === " " || index < revealed) return character;
          return glyphs[Math.floor(Math.random() * glyphs.length)];
        }).join("");
        if (progress < 1) {
          frame = window.requestAnimationFrame(draw);
          scrambleFrames.add(frame);
        } else {
          element.textContent = original;
          element.dataset.scrambling = "false";
        }
      };
      frame = window.requestAnimationFrame(draw);
      scrambleFrames.add(frame);
    };
    const intro = createTimeline({ defaults: { ease: "out(4)" } })
      .add(".navbar", { opacity: { from: 0 }, y: { from: -18 }, duration: 700 })
      .add(".hero-kicker", { opacity: { from: 0 }, y: { from: 18 }, duration: 600 }, 120)
      .add(".hero-title .line > span", {
        y: { from: "110%" }, rotate: { from: 2 }, duration: 1050, delay: stagger(95),
      }, 170)
      .add(".hero-intro, .hero-actions, .hero-proof", {
        opacity: { from: 0 }, y: { from: 22 }, duration: 760, delay: stagger(90),
      }, 510)
      .add(".system-stage", {
        opacity: { from: 0 }, scale: { from: 0.92 }, rotate: { from: 2 }, duration: 1150,
      }, 250)
      .add(".system-node", {
        opacity: { from: 0 }, scale: { from: 0.3 }, duration: 520, delay: stagger(90, { from: "center" }),
      }, 720)
      .add(".signal-line", {
        strokeDashoffset: { from: 160, to: 0 }, duration: 900, delay: stagger(70),
      }, 720);

    running.push(intro);
    document.querySelectorAll(".core-ring").forEach((ring, index) => {
      running.push(animate(ring, {
        rotate: index % 2 ? "-1turn" : "1turn",
        duration: 14000 + index * 3400, loop: true, ease: "linear",
      }));
    });
    running.push(animate(".core-pulse", {
      scale: [1, 1.22], opacity: [0.38, 0], duration: 2100, loop: true, ease: "out(3)",
    }));
    running.push(animate(".data-particle", {
      translateX: [0, 120], opacity: [0, 1, 0], duration: 2300,
      delay: stagger(360), loop: true, ease: "inOut(2)",
    }));

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting || entry.target.classList.contains("is-visible")) return;
        entry.target.classList.add("is-visible");
        const isEditorialGroup = entry.target.matches(".experience-heading, .workflow-heading, .contact-shell");
        if (isEditorialGroup) {
          const children = entry.target.querySelectorAll(":scope > *");
          animate(children, {
            y: { from: 36 }, delay: stagger(90), duration: 900, ease: "out(4)",
          });
        } else {
          animate(entry.target, {
            y: { from: 34 }, duration: 850, ease: "out(4)",
          });
        }
        scrambleText(entry.target.querySelector(".section-label"));
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -40px" });

    document.querySelectorAll(".reveal").forEach(element => observer.observe(element));
    const scrambleLabels = [...document.querySelectorAll(".section-label")];
    const onScrambleHover = event => scrambleText(event.currentTarget);
    scrambleLabels.forEach(label => label.addEventListener("pointerenter", onScrambleHover));

    const magneticItems = window.matchMedia("(hover: hover) and (pointer: fine)").matches
      ? [...document.querySelectorAll(".button, .nav-contact")]
      : [];
    const magneticHandlers = magneticItems.map(element => {
      const move = event => {
        const rect = element.getBoundingClientRect();
        const x = (event.clientX - rect.left - rect.width / 2) * .16;
        const y = (event.clientY - rect.top - rect.height / 2) * .18;
        element.style.translate = `${x}px ${y}px`;
      };
      const leave = () => { element.style.translate = "0 0"; };
      element.addEventListener("pointermove", move, { passive: true });
      element.addEventListener("pointerleave", leave);
      return { element, move, leave };
    });

    const stage = document.querySelector(".system-stage");
    const onPointerMove = event => {
      if (!stage || window.innerWidth < 900) return;
      const x = (event.clientX / window.innerWidth - 0.5) * 10;
      const y = (event.clientY / window.innerHeight - 0.5) * -8;
      animate(stage, { rotateY: x, rotateX: y, duration: 900, ease: "out(3)" });
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      scrambleLabels.forEach(label => label.removeEventListener("pointerenter", onScrambleHover));
      magneticHandlers.forEach(({ element, move, leave }) => {
        element.removeEventListener("pointermove", move);
        element.removeEventListener("pointerleave", leave);
      });
      scrambleFrames.forEach(frame => window.cancelAnimationFrame(frame));
      running.forEach(instance => instance?.pause?.());
    };
  }, []);
}

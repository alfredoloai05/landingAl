import { useEffect, useRef, useState } from "react";
import { animate, stagger } from "animejs";
import { Compass, Radio, Sparkles } from "lucide-react";

const steps = [
  {
    key: "discover", label: "Descubrir", signal: "FOCO", eyebrow: "MIRAR / ESCUCHAR",
    title: "Primero encontramos el nudo.",
    text: "Antes de hablar de funciones, entendemos dónde se pierde tiempo, qué confunde y qué vale la pena cambiar.",
  },
  {
    key: "define", label: "Definir", signal: "RUMBO", eyebrow: "ORDENAR / DECIDIR",
    title: "Ponemos en orden lo que realmente importa.",
    text: "Definimos prioridades, alcance y decisiones clave para construir con una dirección compartida.",
  },
  {
    key: "build", label: "Construir", signal: "TRACCIÓN", eyebrow: "CREAR / PROBAR",
    title: "Lo volvemos real sin desaparecer por meses.",
    text: "Cada ciclo deja algo que puedes abrir, usar y comentar. El avance no se promete: se muestra.",
  },
  {
    key: "evolve", label: "Evolucionar", signal: "EVOLUCIÓN", eyebrow: "LANZAR / APRENDER",
    title: "Lo lanzamos listo para aprender.",
    text: "Miramos cómo se usa, corregimos la fricción y dejamos una base que puede cambiar sin empezar de cero.",
  },
];

export default function Process() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const active = steps[activeIndex];

  useEffect(() => {
    let frame;
    const update = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const distance = Math.max(1, section.offsetHeight - window.innerHeight);
      const nextProgress = Math.max(0, Math.min(1, -rect.top / distance));
      const nextIndex = Math.min(steps.length - 1, Math.floor(nextProgress * steps.length));
      setProgress(nextProgress);
      setActiveIndex(nextIndex);
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
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    animate(".journey-word > *, .journey-copy > *", {
      y: { from: 30 }, delay: stagger(75), duration: 720, ease: "out(4)",
    });
    animate(".journey-signal > *", { scale: { from: .7 }, delay: stagger(70), duration: 620, ease: "out(4)" });
  }, [activeIndex]);

  return (
    <section
      ref={sectionRef}
      className={`process-journey section step-${active.key}`}
      id="proceso"
      style={{ "--journey-progress": progress, "--journey-turn": `${progress * 1.35}turn`, "--journey-turn-reverse": `${progress * -1.35}turn` }}
    >
      <div className="journey-sticky">
        <div className="journey-grid" aria-hidden="true" />
        <div className="section-shell journey-shell">
          <header className="journey-heading">
            <span className="section-label light">ASÍ SE MUEVE UN PROYECTO</span>
            <h2>Cada etapa deja<br /><em>algo que puedes probar.</em></h2>
            <span className="journey-scroll-hint"><i /> SIGUE BAJANDO</span>
          </header>

          <div className="journey-stage" aria-live="polite">
            <div className="journey-word" key={`word-${active.key}`}>
              <small>{active.eyebrow}</small>
              <strong>{active.label}</strong>
              <span>{active.signal}</span>
            </div>

            <div className="journey-engine" aria-hidden="true">
              <div className="journey-orbit orbit-a"><i /><i /></div>
              <div className="journey-orbit orbit-b"><i /></div>
              <div className="journey-signal" key={`signal-${active.key}`}><Radio /><span>{active.signal}</span></div>
              <Compass className="journey-compass" />
            </div>

            <div className="journey-copy" key={`copy-${active.key}`}>
              <Sparkles />
              <h3>{active.title}</h3>
              <p>{active.text}</p>
            </div>
          </div>

          <div className="journey-progress">
            <div className="journey-progress-line"><i /></div>
            <div className="journey-steps">
              {steps.map((step, index) => <span key={step.key} className={index === activeIndex ? "active" : index < activeIndex ? "passed" : ""}><i />{step.label}</span>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

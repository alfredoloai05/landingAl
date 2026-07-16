import { useEffect, useRef, useState } from "react";
import { animate, stagger } from "animejs";
import { Cog, Sparkles } from "lucide-react";

const steps = [
  {
    key: "discover", label: "Descubrir", signal: "FOCO", eyebrow: "MIRAR / ESCUCHAR",
    destination: "un rumbo claro.",
    title: "Encontramos dónde vale la pena intervenir.",
    text: "Escuchamos cómo funciona hoy, qué está frenando el avance y qué conviene conservar antes de hablar de funciones.",
  },
  {
    key: "define", label: "Definir", signal: "RUMBO", eyebrow: "ORDENAR / DECIDIR",
    destination: "un plan compartido.",
    title: "Convertimos el problema en decisiones concretas.",
    text: "Definimos prioridades, alcance y criterios claros para que cada parte tenga una razón antes de construirla.",
  },
  {
    key: "build", label: "Construir", signal: "TRACCIÓN", eyebrow: "CREAR / PROBAR",
    destination: "un sistema real.",
    title: "Construimos en ciclos que puedes revisar.",
    text: "Cada ciclo entrega una parte funcional para probar, ajustar y continuar sin perder la dirección del proyecto.",
  },
  {
    key: "evolve", label: "Evolucionar", signal: "EVOLUCIÓN", eyebrow: "LANZAR / APRENDER",
    destination: "un negocio que crece.",
    title: "Mejoramos sobre lo que ya funciona.",
    text: "Con el sistema en uso, incorporamos aprendizaje real y lo preparamos para nuevos procesos, usuarios y conexiones.",
  },
];

export default function Process() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const active = steps[activeIndex];
  const percentage = Math.round(progress * 100);

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
    const section = sectionRef.current;
    if (!section) return undefined;
    const animations = [];
    animations.push(animate(section.querySelectorAll(".journey-word > *, .journey-copy > *"), {
      y: { from: 30 }, delay: stagger(75), duration: 720, ease: "out(4)",
    }));
    animations.push(animate(section.querySelectorAll(".journey-counter small"), { opacity: { from: 0 }, y: { from: 8 }, duration: 520, ease: "out(4)" }));
    animations.push(animate(section.querySelectorAll(".engine-gear svg"), { scale: [0.9, 1], duration: 620, ease: "out(4)" }));
    animations.push(animate(section.querySelectorAll(".journey-heading em"), { opacity: { from: 0 }, y: { from: 14 }, duration: 620, ease: "out(4)" }));
    return () => animations.forEach(animation => animation?.cancel?.());
  }, [activeIndex]);

  return (
    <section
      ref={sectionRef}
      className={`process-journey section step-${active.key}`}
      id="proceso"
      style={{
        "--journey-progress": progress,
        "--journey-angle": `${progress * 360}deg`,
        "--journey-turn": `${progress * 2.15}turn`,
        "--journey-turn-reverse": `${progress * -1.55}turn`,
      }}
    >
      <div className="journey-sticky">
        <div className="journey-grid" aria-hidden="true" />
        <div className="section-shell journey-shell">
          <header className="journey-heading">
            <span className="section-label light">ASÍ SE MUEVE UN PROYECTO</span>
            <h2>De una idea a<br /><em key={`destination-${active.key}`}>{active.destination}</em></h2>
            <span className="journey-scroll-hint"><i /> SIGUE BAJANDO</span>
          </header>

          <div className="journey-stage" aria-live="polite">
            <div className="journey-word" key={`word-${active.key}`}>
              <small>{active.eyebrow}</small>
              <strong>{active.label}</strong>
              <span>{active.signal}</span>
            </div>

            <div className="journey-engine" aria-hidden="true">
              <div className="engine-energy" />
              <div className="engine-ticks" />
              <div className="engine-progress-ring" />
              <div className="engine-progress-head"><i /></div>
              <div className="engine-gear gear-large"><Cog /></div>
              <div className="engine-gear gear-small"><Cog /></div>
              <div className="journey-counter">
                <div><strong>{percentage}</strong><span>%</span></div>
                <small key={`counter-${active.key}`}>{active.signal}</small>
              </div>
              <div className="engine-stage-lights">
                {steps.map((step, index) => (
                  <i key={step.key} className={index === activeIndex ? "active" : index < activeIndex ? "passed" : ""} />
                ))}
              </div>
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
      <div className="journey-mobile">
        <div className="journey-grid" aria-hidden="true" />
        <div className="section-shell journey-mobile-shell">
          <header className="journey-mobile-heading">
            <span className="section-label light">ASÍ SE MUEVE UN PROYECTO</span>
            <h2>De una idea a<br /><em>un sistema que avanza.</em></h2>
          </header>
          <div className="journey-mobile-steps">
            {steps.map(step => (
              <article className="journey-mobile-step" key={`mobile-${step.key}`}>
                <div className="journey-mobile-signal"><Sparkles aria-hidden="true" /><span>{step.eyebrow}</span></div>
                <strong>{step.label}</strong>
                <small>{step.signal}</small>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

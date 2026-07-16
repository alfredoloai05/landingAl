import { useEffect, useRef, useState } from "react";
import { animate, stagger } from "animejs";
import { ArrowRight, ArrowUpRight, Blocks, Bot, Cable, MonitorSmartphone } from "lucide-react";

const CYCLE_DURATION = 8000;

const solutions = [
  {
    key: "software", icon: Blocks, label: "Software a medida", orbitLabel: "SISTEMAS",
    title: "Un sistema que trabaja como trabaja tu equipo.",
    description: "No obligamos a tu negocio a encajar en una herramienta. Construimos la herramienta alrededor de tus reglas, tu gente y la forma en que quieres crecer.",
    stages: ["Trabajo disperso", "Sistema propio", "Todo en su sitio"],
    outcomes: ["Usuarios y permisos", "Operación centralizada", "Conexiones por API"],
  },
  {
    key: "automation", icon: Cable, label: "Automatización", orbitLabel: "AUTOMATIZAR",
    title: "Lo repetitivo deja de depender de alguien.",
    description: "Conectamos lo que hoy vive separado para que la información viaje sola, las tareas sucedan a tiempo y el equipo pueda concentrarse en decidir.",
    stages: ["Tarea manual", "Flujo conectado", "Sucede solo"],
    outcomes: ["Menos pasos", "Menos errores", "Más tiempo útil"],
  },
  {
    key: "intelligence", icon: Bot, label: "Inteligencia aplicada", orbitLabel: "IA ÚTIL",
    title: "Tus datos empiezan a responder.",
    description: "Usamos inteligencia artificial para encontrar, clasificar, explicar o anticipar. Siempre con un propósito claro y una persona tomando la decisión final.",
    stages: ["Datos con contexto", "Inteligencia útil", "Respuesta clara"],
    outcomes: ["Asistentes", "Análisis", "Visión artificial"],
  },
  {
    key: "experience", icon: MonitorSmartphone, label: "Experiencias digitales", orbitLabel: "EXPERIENCIAS",
    title: "Cada pantalla sabe qué debe lograr.",
    description: "Diseñamos experiencias que explican, orientan y responden rápido. Tu marca se siente propia y el siguiente paso nunca queda escondido.",
    stages: ["Algo que decir", "Experiencia clara", "Una acción natural"],
    outcomes: ["UX/UI", "Desarrollo web", "Todo dispositivo"],
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cycleKey, setCycleKey] = useState(0);
  const [autoplayAllowed, setAutoplayAllowed] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [pointerActive, setPointerActive] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const sectionRef = useRef(null);
  const copyRef = useRef(null);
  const active = solutions[activeIndex];
  const ActiveIcon = active.icon;
  const paused = hovered || focused || pointerActive || !pageVisible;

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateAutoplay = () => setAutoplayAllowed(desktop.matches && !reducedMotion.matches);
    const updateVisibility = () => setPageVisible(document.visibilityState === "visible");

    updateAutoplay();
    updateVisibility();
    desktop.addEventListener("change", updateAutoplay);
    reducedMotion.addEventListener("change", updateAutoplay);
    document.addEventListener("visibilitychange", updateVisibility);

    return () => {
      desktop.removeEventListener("change", updateAutoplay);
      reducedMotion.removeEventListener("change", updateAutoplay);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (!autoplayAllowed || paused) return undefined;
    const timer = window.setTimeout(() => {
      setActiveIndex(index => (index + 1) % solutions.length);
      setCycleKey(key => key + 1);
    }, CYCLE_DURATION);
    return () => window.clearTimeout(timer);
  }, [activeIndex, autoplayAllowed, cycleKey, paused]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const content = copyRef.current?.querySelectorAll(":scope > *");
    const animations = [
      content?.length && animate(content, { opacity: [0, 1], y: [20, 0], delay: stagger(55), duration: 560, ease: "out(4)" }),
    ].filter(Boolean);
    return () => animations.forEach(animation => animation.cancel?.());
  }, [activeIndex]);

  const selectSolution = index => {
    setActiveIndex(index);
    setCycleKey(key => key + 1);
  };

  return (
    <section
      ref={sectionRef}
      className={`solutions-experience section ${autoplayAllowed ? "has-autoplay" : "manual-only"} ${paused ? "is-paused" : ""}`}
      id="servicios"
      style={{ "--capability-duration": `${CYCLE_DURATION}ms` }}
      onPointerEnter={event => event.pointerType === "mouse" && setHovered(true)}
      onPointerLeave={() => { setHovered(false); setPointerActive(false); }}
      onPointerDown={event => event.pointerType !== "mouse" && setPointerActive(true)}
      onPointerUp={() => setPointerActive(false)}
      onPointerCancel={() => setPointerActive(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={event => !event.currentTarget.contains(event.relatedTarget) && setFocused(false)}
    >
      <div className="section-shell">
        <header className="experience-heading reveal">
          <div>
            <span className="section-label">DONDE ENTRA VENCODEX</span>
            <h2>Cuatro formas de hacer que <em>el trabajo pese menos.</em></h2>
          </div>
        </header>

        <div className={`capability-sequence active-${active.key}`}>
          <div className="capability-open">
            <div className="capability-story" ref={copyRef}>
              <span className="capability-active"><ActiveIcon /> {active.label}</span>
              <h3>{active.title}</h3>
              <p>{active.description}</p>
              <div className="capability-outcomes">{active.outcomes.map(item => <span key={item}>{item}</span>)}</div>
              <div className="capability-route" aria-label="Flujo de la solución">
                {active.stages.map((stage, index) => (
                  <div key={stage}>
                    <small>{index === 0 ? "ORIGEN" : index === 1 ? "TRANSFORMACIÓN" : "RESULTADO"}</small>
                    <strong>{stage}</strong>
                    {index < active.stages.length - 1 && <ArrowRight />}
                  </div>
                ))}
              </div>
              <a href="#contacto" className="capability-link" data-cursor="HABLAR">Hablemos de lo que quieres crear <ArrowUpRight /></a>
            </div>

            <div className="capability-choice-field" role="group" aria-label="Seleccionar una capacidad">
              <span className="capability-watermark" aria-hidden="true">{active.orbitLabel}</span>
              <div className="capability-system-label"><i /> VENCODEX / {active.orbitLabel}</div>
              <div className="capability-choices">
                {solutions.map((solution, index) => {
                  const Icon = solution.icon;
                  const selected = index === activeIndex;
                  return (
                    <button
                      type="button"
                      key={solution.key}
                      className={`capability-choice ${selected ? "active" : ""}`}
                      onClick={() => selectSolution(index)}
                      aria-pressed={selected}
                      data-cursor="ELEGIR"
                    >
                      <Icon />
                      <span>{solution.label}</span>
                      <i />
                      {selected && autoplayAllowed && <b key={`choice-progress-${activeIndex}-${cycleKey}`} aria-hidden="true" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

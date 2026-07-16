import { useEffect, useRef, useState } from "react";
import { animate, stagger } from "animejs";
import { ArrowRight, ArrowUpRight, Blocks, Bot, Cable, MonitorSmartphone } from "lucide-react";

const CYCLE_DURATION = 5200;

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
  const copyRef = useRef(null);
  const active = solutions[activeIndex];
  const ActiveIcon = active.icon;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const timer = window.setTimeout(() => {
      setActiveIndex(index => (index + 1) % solutions.length);
      setCycleKey(key => key + 1);
    }, CYCLE_DURATION);
    return () => window.clearTimeout(timer);
  }, [activeIndex, cycleKey]);

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
    <section className="solutions-experience section" id="servicios">
      <div className="section-shell">
        <header className="experience-heading reveal">
          <div>
            <span className="section-label">DONDE ENTRA VENCODEX</span>
            <h2>Cuatro formas de hacer que <em>el trabajo pese menos.</em></h2>
          </div>
          <p><strong>CAMBIA SOLA</strong><span>O elige una forma para verla a tu ritmo.</span></p>
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
                      {selected && <b key={`choice-progress-${activeIndex}-${cycleKey}`} aria-hidden="true" />}
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

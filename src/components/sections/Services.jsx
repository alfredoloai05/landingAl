import { useEffect, useRef, useState } from "react";
import { animate, stagger } from "animejs";
import { ArrowRight, ArrowUpRight, Blocks, Bot, Cable, MonitorSmartphone } from "lucide-react";

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
  const copyRef = useRef(null);
  const coreRef = useRef(null);
  const active = solutions[activeIndex];
  const ActiveIcon = active.icon;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const content = copyRef.current?.querySelectorAll(":scope > *");
    const route = copyRef.current?.querySelectorAll(".capability-route > *");
    const core = coreRef.current?.querySelectorAll(":scope > *");
    const animations = [
      content?.length && animate(content, { opacity: [0, 1], y: [20, 0], delay: stagger(55), duration: 560, ease: "out(4)" }),
      route?.length && animate(route, { opacity: [0, 1], scale: [.9, 1], delay: stagger(70), duration: 480, ease: "out(4)" }),
      core?.length && animate(core, { opacity: [0, 1], scale: [.76, 1], delay: stagger(45), duration: 540, ease: "out(4)" }),
    ].filter(Boolean);
    return () => animations.forEach(animation => animation.cancel?.());
  }, [activeIndex]);

  return (
    <section className="solutions-experience section" id="servicios">
      <div className="section-shell">
        <header className="experience-heading reveal">
          <div>
            <span className="section-label">DONDE ENTRA VENCODEX</span>
            <h2>Cuatro formas de hacer que <em>el trabajo pese menos.</em></h2>
          </div>
          <p><strong>TOCA UN PUNTO</strong><span>Explora qué entra, qué transformamos y qué cambia.</span></p>
        </header>

        <div className={`capability-experience active-${active.key}`}>
          <div className="capability-copy" ref={copyRef}>
            <span className="capability-active"><i /> {active.label}</span>
            <h3>{active.title}</h3>
            <p>{active.description}</p>
            <div className="capability-outcomes">{active.outcomes.map(item => <span key={item}>{item}</span>)}</div>
            <div className="capability-route" aria-label="Flujo de la solución">
              {active.stages.map((stage, index) => (
                <div key={stage}><small>{index === 0 ? "ORIGEN" : index === 1 ? "TRANSFORMACIÓN" : "RESULTADO"}</small><strong>{stage}</strong>{index < active.stages.length - 1 && <ArrowRight />}</div>
              ))}
            </div>
            <a href="#contacto" className="capability-link" data-cursor="HABLAR">Hablemos de lo que quieres crear <ArrowUpRight /></a>
          </div>

          <div className="capability-map" role="group" aria-label="Seleccionar una capacidad">
            <span className="capability-instruction">SELECCIONA UN PUNTO</span>
            <svg viewBox="0 0 600 600" aria-hidden="true">
              <circle cx="300" cy="300" r="214" />
              <circle cx="300" cy="300" r="144" />
              <path d="M142 154 L300 300 L458 154 M142 446 L300 300 L458 446" />
            </svg>
            <div className="capability-sweep" />
            <div className="capability-core" ref={coreRef}>
              <ActiveIcon />
              <strong>VENCODEX</strong>
              <small>{active.orbitLabel}</small>
              <i /><i />
            </div>
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <button
                  type="button"
                  key={solution.key}
                  className={`capability-node node-${index + 1} ${index === activeIndex ? "active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={index === activeIndex}
                  data-cursor="ACTIVAR"
                ><Icon /><span>{solution.orbitLabel}</span><i /></button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

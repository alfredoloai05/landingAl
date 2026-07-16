import { ArrowDownRight, Blocks, Cable, Clock3, Lightbulb } from "lucide-react";

const scenarios = [
  {
    icon: Clock3,
    signal: "TIEMPO / CONTINUIDAD",
    title: "Procesos que consumen demasiado tiempo",
    situation: "Tareas repetitivas, archivos dispersos y controles manuales terminan dependiendo de seguimiento constante. Así aparecen errores, demoras e información difícil de encontrar.",
    advance: "Un sistema o una automatización puede ordenar el flujo y reducir pasos innecesarios.",
  },
  {
    icon: Blocks,
    signal: "REGLAS / OPERACIÓN",
    title: "Software que debe adaptarse al negocio",
    situation: "Cuando una herramienta genérica no representa los permisos ni la forma real de trabajar, el equipo compensa con tareas duplicadas y controles por fuera del sistema.",
    advance: "Una solución a medida puede construirse alrededor de la operación real del negocio.",
  },
  {
    icon: Cable,
    signal: "DATOS / CONEXIONES",
    title: "Herramientas y datos desconectados",
    situation: "La información vive en plataformas, archivos o sistemas que no se comunican. Los datos se duplican, pierden vigencia y deben moverse manualmente.",
    advance: "Las integraciones y APIs pueden conectar la información en un flujo más coherente.",
  },
  {
    icon: Lightbulb,
    signal: "IDEA / PRODUCTO",
    title: "Ideas listas para convertirse en producto",
    situation: "Existe una oportunidad clara, pero todavía falta ordenar el alcance, priorizar funciones y tomar decisiones técnicas antes de construir.",
    advance: "Diseño, estrategia y desarrollo pueden convertirla en un producto digital preparado para evolucionar.",
  },
];

export default function Audience() {
  return (
    <section className="audience section" id="para-quien">
      <div className="audience-grid" aria-hidden="true" />
      <div className="section-shell audience-shell">
        <header className="audience-intro reveal">
          <span className="section-label">CUANDO LA TECNOLOGÍA DEBE AYUDAR</span>
          <h2>Tecnología para negocios que necesitan <em>avanzar.</em></h2>
          <p>Trabajamos con empresas y emprendedores que necesitan ordenar sus procesos, reducir tareas manuales, conectar herramientas o convertir una idea en un producto digital útil.</p>
        </header>

        <div className="audience-scenarios">
          {scenarios.map(({ icon: Icon, signal, title, situation, advance }) => (
            <article className="audience-scenario reveal" key={title}>
              <div className="audience-signal"><Icon aria-hidden="true" /><span>{signal}</span></div>
              <div className="audience-copy">
                <h3>{title}</h3>
                <p>{situation}</p>
              </div>
              <p className="audience-advance"><ArrowDownRight aria-hidden="true" /> <span>{advance}</span></p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

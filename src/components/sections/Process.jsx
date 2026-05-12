import { Code2, Globe, Layout, LifeBuoy } from "lucide-react";
import { useFadeUp } from "../../hooks/useFadeUp";

export default function Process() {
  const ref = useFadeUp();
  const steps = [
    { n: "01", icon: <Globe size={22} />, title: "Descubrimiento", desc: "Entendemos tu negocio, objetivos y necesidades." },
    { n: "02", icon: <Layout size={22} />, title: "Planificación", desc: "Definimos estrategia, funcionalidades y estructura." },
    { n: "03", icon: <Code2 size={22} />, title: "Desarrollo", desc: "Creamos una solución moderna, eficiente y escalable." },
    { n: "04", icon: <LifeBuoy size={22} />, title: "Entrega y Soporte", desc: "Lanzamos, medimos y seguimos mejorando." },
  ];

  return (
    <section id="proceso" style={{ padding: "120px 0" }}>
      <div className="section-inner">
        <div ref={ref} className="fade-up">
          <span className="section-eyebrow">Proceso</span>
          <h2 className="section-title">Un proceso claro.<br />Resultados excepcionales.</h2>
        </div>
        <div className="process-row">
          <div className="process-track" aria-hidden="true">
            {[0, 1, 2].map(i => (
              <span key={i} className="process-segment">
                <span className="process-fill" style={{ "--segment-delay": `${0.75 + i * 2.1}s` }} />
              </span>
            ))}
          </div>
          {steps.map((s, i) => (
            <ProcessStep
              key={s.title}
              {...s}
              delay={i * 100}
              stepDelay={i * 2.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ n, icon, title, desc, delay, stepDelay }) {
  const ref = useFadeUp();
  return (
    <div
      ref={ref}
      className="fade-up process-step"
      style={{ transitionDelay: `${delay}ms`, "--step-delay": `${stepDelay}s` }}
    >
      <div className="process-num-wrap">{icon}</div>
      <div className="process-step-num">{n}</div>
      <div className="process-step-title">{title}</div>
      <p className="process-step-desc">{desc}</p>
    </div>
  );
}

// ─── About ───────────────────────────────────────────────────────────────────

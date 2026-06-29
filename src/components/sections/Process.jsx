import { Blocks, Compass, Rocket, ScanSearch } from "lucide-react";
import { useFadeUp } from "../../hooks/useFadeUp";

export default function Process() {
  const ref = useFadeUp();
  const steps = [
    { n: "01", icon: <ScanSearch size={21} />, title: "Entender", desc: "Mapeamos el proceso, los usuarios y el costo real del problema." },
    { n: "02", icon: <Compass size={21} />, title: "Diseñar", desc: "Definimos alcance, experiencia, arquitectura y una ruta de entregas." },
    { n: "03", icon: <Blocks size={21} />, title: "Construir", desc: "Desarrollamos por etapas visibles, con validación y comunicación continua." },
    { n: "04", icon: <Rocket size={21} />, title: "Evolucionar", desc: "Lanzamos, documentamos y mejoramos con base en el uso real." },
  ];

  return (
    <section id="proceso" className="process-section section-light">
      <div className="section-inner">
        <div ref={ref} className="fade-up">
          <span className="section-eyebrow">Cómo trabajamos</span>
          <div className="section-heading-row">
            <h2 className="section-title">Menos incertidumbre. Más avances que puedes ver.</h2>
            <p className="section-sub">No desaparecemos durante meses para volver con una sorpresa. El proyecto avanza mediante decisiones y entregas concretas.</p>
          </div>
        </div>
        <div className="process-row">
          <div className="process-track" aria-hidden="true">
            {[0, 1, 2].map(i => (
              <span key={i} className="process-segment">
                <span className="process-fill" style={{ "--segment-delay": `${0.15 + i * 0.18}s` }} />
              </span>
            ))}
          </div>
          {steps.map((s, i) => (
            <ProcessStep
              key={s.title}
              {...s}
              delay={i * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ n, icon, title, desc, delay }) {
  const ref = useFadeUp();
  return (
    <div
      ref={ref}
      className="fade-up process-step"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="process-num-wrap">{icon}</div>
      <div className="process-step-num">{n}</div>
      <div className="process-step-title">{title}</div>
      <p className="process-step-desc">{desc}</p>
    </div>
  );
}

// ─── About ───────────────────────────────────────────────────────────────────

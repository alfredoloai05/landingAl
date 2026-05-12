import { CheckCircle, Code2, Globe, Layout, Plug, Zap } from "lucide-react";
import { useFadeUp } from "../../hooks/useFadeUp";

export default function Services() {
  const ref = useFadeUp();
  const items = [
    {
      icon: <Code2 size={22} />,
      title: "Sistemas internos a medida",
      desc: "Aplicaciones para administrar operaciones, usuarios, permisos, inventario, ventas, turnos y procesos específicos del negocio.",
    },
    {
      icon: <Zap size={22} />,
      title: "Automatización de procesos",
      desc: "Soluciones para reducir tareas repetitivas, ordenar flujos de trabajo y disminuir dependencia de procesos manuales.",
    },
    {
      icon: <Globe size={22} />,
      title: "Dashboards y reportería",
      desc: "Paneles, reportes y consolidación de información para visualizar datos clave y apoyar la toma de decisiones.",
    },
    {
      icon: <Plug size={22} />,
      title: "Integraciones y APIs",
      desc: "Conexión entre sistemas, bases de datos, servicios externos, plataformas web y herramientas internas.",
    },
    {
      icon: <Layout size={22} />,
      title: "Desarrollo web profesional",
      desc: "Landings, sitios corporativos y plataformas web modernas, rápidas, responsivas y orientadas a conversión.",
    },
    {
      icon: <CheckCircle size={22} />,
      title: "IA y visión por computadora",
      desc: "Prototipos y soluciones con inteligencia artificial para análisis de imágenes, detección, conteo y clasificación.",
    },
  ];

  return (
    <section id="servicios" style={{ padding: "120px 0" }}>
      <div className="section-inner">
        <div ref={ref} className="fade-up">
          <span className="section-eyebrow">Servicios</span>
          <h2 className="section-title">Software práctico<br />para procesos reales</h2>
          <p className="section-sub">Creamos soluciones digitales para ordenar operaciones, conectar herramientas y convertir datos dispersos en información útil.</p>
        </div>
        <div className="services-grid">
          {items.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={i * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, desc, delay }) {
  const ref = useFadeUp();
  return (
    <div ref={ref} className="fade-up service-card" style={{ transitionDelay: `${delay}ms` }}>
      <div className="service-icon-wrap">{icon}</div>
      <div className="service-title">{title}</div>
      <p className="service-desc">{desc}</p>
    </div>
  );
}

// ─── Projects ────────────────────────────────────────────────────────────────

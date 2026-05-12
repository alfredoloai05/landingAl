import { Code2, Globe, Layout, LifeBuoy, Plug, Zap } from "lucide-react";
import { useFadeUp } from "../../hooks/useFadeUp";

export default function Services() {
  const ref = useFadeUp();
  const items = [
    { icon: <Globe size={22} />, title: "Desarrollo Web", desc: "Sitios web modernos, rápidos, responsivos y optimizados para convertir." },
    { icon: <Code2 size={22} />, title: "Aplicaciones a Medida", desc: "Software personalizado para resolver necesidades específicas de tu negocio." },
    { icon: <Zap size={22} />, title: "Automatizaciones", desc: "Flujos inteligentes que ahorran tiempo y reducen tareas repetitivas." },
    { icon: <Plug size={22} />, title: "Integraciones", desc: "Conexión entre herramientas, APIs, sistemas internos y plataformas digitales." },
    { icon: <Layout size={22} />, title: "UI/UX & Prototipos", desc: "Diseños claros, funcionales y centrados en la experiencia del usuario." },
    { icon: <LifeBuoy size={22} />, title: "Soporte y Escalabilidad", desc: "Mejoras, mantenimiento y evolución continua de tus soluciones digitales." },
  ];

  return (
    <section id="servicios" style={{ padding: "120px 0" }}>
      <div className="section-inner">
        <div ref={ref} className="fade-up">
          <span className="section-eyebrow">Servicios</span>
          <h2 className="section-title">Soluciones completas<br />para tu negocio</h2>
          <p className="section-sub">Desde la idea hasta la implementación, te acompañamos en cada etapa del proceso.</p>
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

import { ArrowUpRight, Blocks, Bot, Check, MonitorSmartphone, Workflow } from "lucide-react";
import { useFadeUp } from "../../hooks/useFadeUp";

export default function Services() {
  const ref = useFadeUp();
  const items = [
    {
      n: "01",
      icon: <Blocks size={24} />,
      title: "Sistemas empresariales a medida",
      desc: "Plataformas web construidas alrededor de tu operación: usuarios, permisos, ventas, inventarios, reportería y flujos internos.",
      benefits: ["Arquitectura preparada para crecer", "Interfaces claras para el equipo", "Control y trazabilidad de procesos"],
    },
    {
      n: "02",
      icon: <Workflow size={24} />,
      title: "Automatización e integraciones",
      desc: "Conectamos archivos, bases de datos, APIs y herramientas existentes para eliminar trabajo repetitivo y reducir errores.",
      benefits: ["Menos tareas manuales", "Información sincronizada", "Procesos más rápidos y consistentes"],
    },
    {
      n: "03",
      icon: <Bot size={24} />,
      title: "Inteligencia artificial aplicada",
      desc: "Integramos IA cuando aporta valor real: visión por computadora, clasificación, análisis y asistencia inteligente.",
      benefits: ["Prototipos orientados al negocio", "Integración con sistemas existentes", "Validación antes de escalar"],
    },
    {
      n: "04",
      icon: <MonitorSmartphone size={24} />,
      title: "Diseño y desarrollo web",
      desc: "Creamos sitios corporativos, landing pages y experiencias digitales que comunican con claridad y funcionan en cualquier dispositivo.",
      benefits: ["Diseño UX/UI profesional", "Carga rápida y responsive", "Enfoque en contacto y conversión"],
    },
  ];

  return (
    <section id="servicios" className="services-section section-light">
      <div className="section-inner">
        <div className="problem-strip">
          <span className="problem-kicker">EL PROBLEMA</span>
          <p>Si tu equipo repite tareas, cruza datos manualmente o depende de hojas dispersas, no necesitas otra herramienta genérica.</p>
          <strong>Necesitas un sistema que entienda cómo trabaja tu negocio.</strong>
        </div>
        <div ref={ref} className="fade-up">
          <span className="section-eyebrow">Lo que resolvemos</span>
          <div className="section-heading-row">
            <h2 className="section-title">Soluciones digitales para construir, conectar y hacer crecer tu negocio.</h2>
            <p className="section-sub">Desarrollamos productos claros, modernos y mantenibles: desde una presencia web profesional hasta sistemas, automatizaciones e inteligencia artificial.</p>
          </div>
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

function ServiceCard({ n, icon, title, desc, benefits, delay }) {
  const ref = useFadeUp();
  return (
    <div ref={ref} className="fade-up service-card" style={{ transitionDelay: `${delay}ms` }}>
      <div className="service-card-top"><span>{n}</span><div className="service-icon-wrap">{icon}</div></div>
      <h3 className="service-title">{title}</h3>
      <p className="service-desc">{desc}</p>
      <ul>{benefits.map(item => <li key={item}><Check size={14} />{item}</li>)}</ul>
      <a href="#contacto">Explorar una solución <ArrowUpRight size={15} /></a>
    </div>
  );
}

// ─── Projects ────────────────────────────────────────────────────────────────

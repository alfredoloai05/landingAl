import { CheckCircle } from "lucide-react";
import { useFadeUp } from "../../hooks/useFadeUp";

export default function Projects() {
  const ref = useFadeUp();
  const projects = [
    {
      cat: "Automatización empresarial",
      title: "Sistema de reportería y control operativo para RIOSAC",
      desc: "Solución interna para automatizar la descarga, limpieza, consolidación y comparación de información operativa, reduciendo procesos manuales y centralizando reportes clave para la toma de decisiones.",
      result: "Automatización de reportería y control interno",
      colors: ["#0A84FF", "#062B5F", "#18D6FF"],
      icon: "dashboard",
    },
    {
      cat: "Desarrollo web",
      title: "Solución digital para Saizna",
      desc: "Diseño y desarrollo de una plataforma web orientada a presentar servicios, mejorar la presencia digital y facilitar el contacto con clientes potenciales.",
      result: "Presencia digital profesional",
      colors: ["#18D6FF", "#0A84FF", "#06111F"],
      icon: "landing",
    },
    {
      cat: "Sistema operativo",
      title: "Plataforma web para gestión de gasolinera",
      desc: "Aplicación web en React pensada para controlar operaciones de caja, turnos, administración, ventas y monitoreo de dispensadores, con arquitectura preparada para integración con APIs externas.",
      result: "Prototipo funcional de gestión operativa",
      colors: ["#062B5F", "#0A84FF", "#18D6FF"],
      icon: "system",
    },
    {
      cat: "Inteligencia artificial",
      title: "Modelos híbridos para detección de enfermedades oculares",
      desc: "Investigación y desarrollo de modelos basados en visión por computadora para comparar arquitecturas híbridas en la detección de retinopatía diabética y glaucoma usando datasets públicos.",
      result: "IA aplicada a análisis de imágenes médicas",
      colors: ["#0A84FF", "#18D6FF", "#062B5F"],
      icon: "dashboard",
    },
    {
      cat: "Computer Vision",
      title: "Sistema de conteo de personas",
      desc: "Solución basada en visión por computadora para detectar y contabilizar personas en espacios físicos, útil para control de aforo, análisis de flujo y monitoreo operativo.",
      result: "Analítica visual automatizada",
      colors: ["#18D6FF", "#062B5F", "#0A84FF"],
      icon: "system",
    },
  ];

  return (
    <section id="proyectos" style={{ padding: "120px 0" }}>
      <div className="section-inner">
        <div ref={ref} className="fade-up">
          <span className="section-eyebrow">Proyectos</span>
          <h2 className="section-title">Proyectos reales.<br />Soluciones aplicadas.</h2>
          <p className="section-sub">Experiencia desarrollando sistemas internos, automatizaciones, plataformas web e inteligencia artificial aplicada a problemas reales.</p>
        </div>
        <div className="projects-grid">
          {projects.map((p, i) => <ProjectCard key={p.title} {...p} delay={i * 80} />)}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ cat, title, desc, result, colors, icon, delay }) {
  const ref = useFadeUp();
  return (
    <div ref={ref} className="fade-up project-card" style={{ transitionDelay: `${delay}ms` }}>
      <div className="project-mockup">
        <ProjectMockup colors={colors} icon={icon} />
      </div>
      <div className="project-body">
        <div className="project-cat">{cat}</div>
        <div className="project-title">{title}</div>
        <p className="project-desc">{desc}</p>
        <span className="project-result">
          <CheckCircle size={11} /> {result}
        </span>
      </div>
    </div>
  );
}

function ProjectMockup({ colors, icon }) {
  if (icon === "dashboard") {
    return (
      <svg viewBox="0 0 380 200" style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}>
        <defs>
          <linearGradient id="dbg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={colors[1]} />
            <stop offset="100%" stopColor={colors[0]} stopOpacity="0.4" />
          </linearGradient>
        </defs>
        <rect width="380" height="200" fill="url(#dbg)" />
        {/* Bar chart */}
        {[40,70,55,90,65,80,45].map((h, i) => (
          <rect key={i} x={28 + i * 40} y={160 - h} width={22} height={h}
            fill={i === 3 ? colors[2] : colors[0]} rx="3" opacity="0.8" />
        ))}
        {/* Line */}
        <polyline points="20,120 80,90 140,100 200,70 260,80 320,50 360,60"
          fill="none" stroke={colors[2]} strokeWidth="2" opacity="0.7" />
        {/* Dots */}
        {[[20,120],[80,90],[200,70],[320,50]].map(([x,y],i) => (
          <circle key={i} cx={x} cy={y} r="4" fill={colors[2]} opacity="0.9" />
        ))}
        {/* Cards */}
        {[0,1,2].map(i => (
          <rect key={i} x={20 + i * 110} y="8" width="95" height="28" rx="6"
            fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        ))}
        <rect x="0" y="0" width="380" height="200" fill="rgba(6,17,31,0.2)" />
      </svg>
    );
  }
  if (icon === "landing") {
    return (
      <svg viewBox="0 0 380 200" style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}>
        <defs>
          <linearGradient id="lbg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={colors[1]} />
            <stop offset="100%" stopColor={colors[0]} stopOpacity="0.6" />
          </linearGradient>
          <radialGradient id="lglow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={colors[0]} stopOpacity="0.3" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <rect width="380" height="200" fill="url(#lbg)" />
        <ellipse cx="190" cy="100" rx="140" ry="80" fill="url(#lglow)" />
        <rect x="100" y="60" width="180" height="12" rx="4" fill="rgba(255,255,255,0.7)" />
        <rect x="130" y="82" width="120" height="8" rx="3" fill="rgba(255,255,255,0.3)" />
        <rect x="140" y="98" width="100" height="6" rx="3" fill="rgba(255,255,255,0.2)" />
        <rect x="148" y="118" width="84" height="26" rx="8" fill={colors[0]} opacity="0.9" />
        <rect x="0" y="0" width="380" height="200" fill="rgba(6,17,31,0.15)" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 380 200" style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}>
      <defs>
        <linearGradient id="sbg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={colors[0]} />
          <stop offset="100%" stopColor={colors[2]} stopOpacity="0.5" />
        </linearGradient>
      </defs>
      <rect width="380" height="200" fill="url(#sbg)" />
      {/* Table rows */}
      {[0,1,2,3,4].map(i => (
        <rect key={i} x="20" y={30 + i * 30} width="340" height="22" rx="4"
          fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      ))}
      {/* Side nav */}
      <rect x="20" y="12" width="60" height="160" rx="8" fill="rgba(0,0,0,0.2)" />
      {[0,1,2,3,4].map(i => (
        <rect key={i} x="28" y={22 + i * 28} width="44" height="12" rx="4"
          fill={i === 1 ? colors[2] : "rgba(255,255,255,0.1)"} opacity="0.8" />
      ))}
      <rect x="0" y="0" width="380" height="200" fill="rgba(6,17,31,0.2)" />
    </svg>
  );
}

// ─── Process ─────────────────────────────────────────────────────────────────

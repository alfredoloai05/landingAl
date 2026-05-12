import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle, Code2, Globe, Layout, LifeBuoy, Plug, Zap } from "lucide-react";
import { useFadeUp } from "../hooks/useFadeUp";

export default function Hero() {
  const ref = useFadeUp(0.05);
  const [highlightIndex, setHighlightIndex] = useState(0);
  const techs = ["Next.js", "React", "TypeScript", "Node.js", "APIs", "PostgreSQL"];
  const heroTags = [
    { icon: <div className="dot" />, text: "Disponible para proyectos" },
    { icon: <Plug size={12} style={{ color: "var(--cyan)" }} />, text: "APIs e integraciones" },
    { icon: <Zap size={12} style={{ color: "var(--cyan)" }} />, text: "Automatizaciones reales" },
    { icon: <Globe size={12} style={{ color: "var(--cyan)" }} />, text: "Web apps completas" },
    { icon: <Code2 size={12} style={{ color: "var(--cyan)" }} />, text: "Código limpio y escalable" },
    { icon: <Layout size={12} style={{ color: "var(--cyan)" }} />, text: "Frontend cuidado" },
    { icon: <LifeBuoy size={12} style={{ color: "var(--cyan)" }} />, text: "Backend mantenible" },
    { icon: <CheckCircle size={12} style={{ color: "var(--cyan)" }} />, text: "Full stack de punta a punta" },
  ];
  const visiblePatterns = [
    [0, 2, 4],
    [1, 3],
    [0],
    [2, 3, 4],
    [1, 4],
    [0, 1, 3],
  ];
  const visibleSlots = visiblePatterns[highlightIndex % visiblePatterns.length];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setHighlightIndex(index => index + 1);
    }, 1700);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="inicio">
      <div className="hero-grid">
        {/* Left */}
        <div ref={ref} className="fade-up">
          <span className="hero-eyebrow">Soluciones Tecnológicas</span>
          <h1 className="hero-title">
            Software a medida para negocios que quieren{" "}
            <span className="gradient-text">operar mejor.</span>
          </h1>
          <p className="hero-sub">
            En AL desarrollamos sistemas internos, automatizaciones, dashboards,
            integraciones y plataformas web para negocios que necesitan operar
            mejor, ahorrar tiempo y tomar decisiones con datos.
          </p>
          <div className="hero-btns">
            <a href="#contacto" className="btn-primary">Cotizar mi proyecto <ArrowRight size={15} /></a>
            <a href="#proyectos" className="btn-secondary">Ver proyectos</a>
          </div>
          <div className="tech-strip">
            <span className="tech-label">Stack</span>
            {techs.map(t => <span key={t} className="tech-tag">{t}</span>)}
          </div>
        </div>

        {/* Right — Logo visual */}
        <div className="hero-visual">
          <div className="logo-3d-wrap">
            <div className="logo-glow-ring-3" />
            <div className="logo-glow-ring-2" />
            <div className="logo-glow-ring" />

            {/* Orbits */}
            <div className="orbit-path orbit-1" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
              <div className="orbit-dot orbit-dot-1" />
            </div>
            <div className="orbit-path orbit-2" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
              <div className="orbit-dot orbit-dot-2" />
            </div>

            <div className="logo-core">
              <span className="logo-text-3d">AL</span>
            </div>
          </div>

          <div className="platform-base" />

          {/* Floating tags */}
          {[0, 1, 2, 3, 4].map(slot => {
            const tag = heroTags[(highlightIndex + slot) % heroTags.length];
            const active = visibleSlots.includes(slot);
            return (
              <div key={slot} className={`corner-tag tag-slot-${slot + 1} ${active ? "active" : ""}`}>
                {tag.icon}
                {tag.text}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Services ────────────────────────────────────────────────────────────────

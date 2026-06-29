import { ArrowUpRight, Award, BriefcaseBusiness, Check, GraduationCap, MapPin } from "lucide-react";
import { useFadeUp } from "../../hooks/useFadeUp";
import { CONTACT } from "../../config/contact";

export default function About() {
  const ref = useFadeUp();
  const experience = [
    { area: "Desarrollo de software empresarial", role: "Sistemas full stack, APIs, bases de datos y aplicaciones internas", kind: "Experiencia profesional" },
    { area: "Automatización y datos", role: "Reportería, procesos automáticos, SQL e integración de información", kind: "Proyectos aplicados" },
    { area: "Desarrollo freelance", role: "Sistemas web, sitios corporativos, integraciones y soluciones a medida", kind: "Trabajo independiente" },
  ];
  const education = [
    { degree: "Ingeniería en Software", institution: "Universidad Católica de Cuenca", period: "2021 — 2024" },
    { degree: "Máster en Inteligencia Artificial", institution: "Universidad Internacional de La Rioja", period: "2025 — 2026" },
  ];

  return (
    <section id="sobre" className="about-section">
      <div className="section-inner">
        <div className="about-grid">
          <div ref={ref} className="fade-up">
            <span className="section-eyebrow">El estudio</span>
            <h2 className="section-title">Un estudio tecnológico cercano. Serio en la ejecución.</h2>
            <p className="about-lead">AL Software Studio crea soluciones digitales con comunicación directa, criterio técnico y una metodología flexible que se adapta a las necesidades de cada proyecto.</p>
            <div className="about-principles">
              <span><Check size={15} /> Sin capas comerciales innecesarias</span>
              <span><Check size={15} /> Equipo especializado por proyecto</span>
              <span><Check size={15} /> Decisiones técnicas explicadas con claridad</span>
            </div>
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="text-link">Conocer el perfil del fundador <ArrowUpRight size={16} /></a>
          </div>
          <div className="founder-card">
            <div className="founder-header">
              <div className="founder-monogram">AL</div>
              <div><small>FUNDADOR / DIRECCIÓN TÉCNICA</small><h3>Alfredo Loaiza</h3><p>Ingeniero de Software · Máster en IA</p></div>
            </div>
            <div className="founder-meta">
              <span><MapPin size={15} /> Loja, Ecuador</span>
              <span><GraduationCap size={15} /> Formación en software e inteligencia artificial</span>
            </div>
            <div className="experience-list">
              <div className="experience-title"><BriefcaseBusiness size={17} /> Experiencia profesional</div>
              {experience.map(item => (
                <div className="experience-item" key={item.area}>
                  <i /><div><strong>{item.area}</strong><span>{item.role}</span></div><small>{item.kind}</small>
                </div>
              ))}
            </div>
            <div className="education-list">
              <div className="experience-title"><Award size={17} /> Formación académica</div>
              {education.map(item => (
                <div className="education-item" key={item.degree}>
                  <GraduationCap size={17} />
                  <div><strong>{item.degree}</strong><span>{item.institution}</span></div>
                  <small>{item.period}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA ─────────────────────────────────────────────────────────────────────

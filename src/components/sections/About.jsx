import { CheckCircle } from "lucide-react";
import { useFadeUp } from "../../hooks/useFadeUp";

export default function About() {
  const ref = useFadeUp();
  const points = [
    "Sistemas internos y automatizaciones",
    "Dashboards, reportería e integración de datos",
    "Aplicaciones web operativas y mantenibles",
    "IA aplicada y visión por computadora",
    "Comunicación clara durante todo el proceso",
  ];

  return (
    <section id="sobre" style={{ padding: "120px 0" }}>
      <div className="section-inner">
        <div className="about-grid">
          <div ref={ref} className="fade-up">
            <span className="section-eyebrow">Sobre AL</span>
            <h2 className="section-title">Una marca de desarrollo enfocada en sistemas útiles, mantenibles y listos para crecer</h2>
            <p style={{ color: "var(--gray)", fontSize: "0.95rem", lineHeight: 1.75, marginTop: "1rem", maxWidth: "480px" }}>
              AL Soluciones Tecnológicas es una marca de desarrollo de software liderada por Alfredo Loaiza, enfocada en construir sistemas internos, automatizaciones y plataformas digitales a medida para negocios reales.
            </p>
            <ul className="about-points">
              {points.map(p => (
                <li key={p}><CheckCircle size={16} />{p}</li>
              ))}
            </ul>
          </div>
          <div className="about-visual">
            <WaveVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function WaveVisual() {
  return (
    <svg viewBox="0 0 440 380" className="wave-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="wglow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0A84FF" stopOpacity="0.2" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <ellipse cx="220" cy="190" rx="200" ry="160" fill="url(#wglow)" />
      {/* Wave lines */}
      {[0,1,2,3,4,5].map(i => (
        <path key={i}
          d={`M ${30 + i*5} ${80 + i*10} Q ${110 + i*8} ${20 + i*6} ${220} ${100 + i*12} T ${410 - i*5} ${90 + i*10}`}
          fill="none"
          stroke={i % 2 === 0 ? "#0A84FF" : "#18D6FF"}
          strokeWidth={i === 2 ? "2" : "1"}
          opacity={0.15 + i * 0.06}
        />
      ))}
      {/* Dot grid */}
      {Array.from({ length: 8 * 7 }, (_, k) => {
        const col = k % 8, row = Math.floor(k / 8);
        const x = 60 + col * 48, y = 60 + row * 44;
        return <circle key={k} cx={x} cy={y} r="1.5" fill="#18D6FF" opacity={Math.random() * 0.4 + 0.1} />;
      })}
      {/* Central glow circle */}
      <circle cx="220" cy="190" r="70" fill="none" stroke="#0A84FF" strokeWidth="1" opacity="0.2" />
      <circle cx="220" cy="190" r="110" fill="none" stroke="#18D6FF" strokeWidth="0.5" strokeDasharray="4 6" opacity="0.15" />
      <circle cx="220" cy="190" r="20" fill="rgba(10,132,255,0.15)" />
      <text x="220" y="196" textAnchor="middle" fontFamily="Sora, sans-serif" fontSize="14" fontWeight="800"
        fill="url(#grad1)">AL</text>
      <defs>
        <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0A84FF" />
          <stop offset="100%" stopColor="#18D6FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// ─── CTA ─────────────────────────────────────────────────────────────────────

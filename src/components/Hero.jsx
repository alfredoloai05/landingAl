import { useEffect, useState } from "react";
import { animate } from "animejs";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import { whatsappHref } from "../config/contact";

const nodes = [
  { label: "PRODUCTO", className: "node-web", readout: "Una idea que ya se puede usar" },
  { label: "DATOS", className: "node-data", readout: "Información que sí responde" },
  { label: "FLUJOS", className: "node-api", readout: "Menos pasos. Menos espera." },
  { label: "ESCALA", className: "node-cloud", readout: "Crecer sin volver a empezar" },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeNode = nodes[activeIndex];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const cycle = window.setInterval(() => {
      setActiveIndex(index => (index + 1) % nodes.length);
    }, 1900);
    return () => window.clearInterval(cycle);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    animate(".system-stage .stage-readout", { opacity: { from: 0 }, y: { from: 9 }, duration: 520, ease: "out(4)" });
    animate(".system-stage .core-mark", { scale: [0.92, 1], duration: 540, ease: "out(4)" });
  }, [activeIndex]);

  return (
    <section className="hero" id="inicio">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-shell">
        <div className="hero-copy">
          <p className="hero-kicker"><span /> Software a medida · Automatización · Inteligencia artificial</p>
          <h1 className="hero-title" aria-label="Creamos software para que tu negocio avance.">
            <span className="line"><span>Creamos software</span></span>
            <span className="line"><span>para que tu negocio</span></span>
            <span className="line"><span><em>avance.</em></span></span>
          </h1>
          <p className="hero-intro">
            Diseñamos y desarrollamos sistemas, automatizaciones y experiencias digitales para reducir tareas manuales, conectar información y hacer más simples los procesos de tu empresa.
          </p>
          <div className="hero-actions" data-nosnippet>
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="button button-light" data-cursor="HABLAR">
              Cuéntanos qué necesitas resolver <ArrowUpRight size={17} />
            </a>
            <a href="#servicios" className="button button-ghost" data-cursor="EXPLORAR">
              Ver nuestras soluciones <ArrowDown size={17} />
            </a>
          </div>
          <div className="hero-proof">
            <span><Check size={14} /> Sin humo técnico</span>
            <span><Check size={14} /> Avances que puedes probar</span>
            <span><Check size={14} /> Decisiones bien explicadas</span>
          </div>
        </div>

        <div className="hero-system" aria-label="Sistema Vencodex que conecta producto, datos, flujos y escala automáticamente" role="img">
          <div className="system-stage">
            <div className="stage-index">VX / FLOW SYSTEM</div>
            <div className="stage-status"><i /> MOVEMENT ONLINE</div>
            <svg className="system-lines" viewBox="0 0 600 600" aria-hidden="true">
              <path className={`signal-line ${activeIndex === 0 ? "active" : ""}`} d="M88 170 C180 170 190 250 300 300" />
              <path className={`signal-line ${activeIndex === 1 ? "active" : ""}`} d="M510 158 C420 158 420 252 300 300" />
              <path className={`signal-line ${activeIndex === 2 ? "active" : ""}`} d="M94 454 C190 454 200 350 300 300" />
              <path className={`signal-line ${activeIndex === 3 ? "active" : ""}`} d="M506 442 C410 442 400 350 300 300" />
            </svg>
            <div className="system-core">
              <span className="core-pulse" />
              <span className="core-ring ring-one"><i /><i /><i /></span>
              <span className="core-ring ring-two"><i /><i /></span>
              <div className="core-mark">
                <svg viewBox="0 0 64 64" aria-hidden="true"><path d="M13 13l19 38 19-38h-12l-7 16-7-16z" /><path d="M32 35l8 16h11L38 25z" /></svg>
                <span>MOTION CORE</span>
              </div>
            </div>
            {nodes.map(node => (
              <div
                key={node.label}
                className={`system-node ${node.className} ${activeNode.label === node.label ? "active" : ""}`}
                aria-hidden="true"
              ><i />{node.label}</div>
            ))}
            <div className="data-stream"><i className="data-particle" /><i className="data-particle" /><i className="data-particle" /></div>
            <span className="stage-coordinate coord-one">FRICTION ↓ / MOMENTUM ↑</span>
            <span className="stage-readout" key={activeNode.label}>{activeNode.readout}</span>
            <span className="stage-hint">SECUENCIA AUTOMÁTICA</span>
          </div>
        </div>
      </div>
      <div className="capability-bar">
        <span>NUESTRO OFICIO</span>
        <div className="capability-marquee"><div>Entender <i /> Diseñar <i /> Conectar <i /> Construir <i /> Simplificar <i /> Mejorar <i /> Entender <i /> Diseñar <i /> Conectar</div></div>
      </div>
    </section>
  );
}

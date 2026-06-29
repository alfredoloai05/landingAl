import { ArrowRight, Braces, Check, Database, FileSpreadsheet, Sparkles } from "lucide-react";
import { useFadeUp } from "../hooks/useFadeUp";
import { whatsappHref } from "../config/contact";

export default function Hero() {
  const ref = useFadeUp(0.05);

  return (
    <section className="hero" id="inicio">
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <div className="hero-grid">
        <div ref={ref} className="fade-up hero-copy">
          <span className="hero-eyebrow"><i /> Software studio · Ecuador / remoto</span>
          <h1 className="hero-title">
            Software que pone tu operación <span className="accent-underline">en movimiento.</span>
          </h1>
          <p className="hero-sub">
            Diseñamos sistemas a medida, automatizaciones e inteligencia artificial para convertir procesos dispersos en operaciones claras, conectadas y escalables.
          </p>
          <div className="hero-btns">
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn-primary">
              Cuéntanos tu proceso <ArrowRight size={17} />
            </a>
          </div>
          <div className="trust-row" aria-label="Nuestra forma de trabajar">
            <span><Check size={14} /> Diagnóstico antes de construir</span>
            <span><Check size={14} /> Entregas por etapas</span>
            <span><Check size={14} /> Soporte directo</span>
          </div>
        </div>

        <div className="hero-visual" role="img" aria-label="Visualización de archivos, datos y APIs conectados mediante un proceso automatizado">
          <div className="system-window">
            <div className="system-topbar">
              <div className="window-dots"><i /><i /><i /></div>
              <span>AL / OPERATIONS ENGINE</span>
              <small><i /> EN LÍNEA</small>
            </div>
            <div className="system-body">
              <div className="system-label">ENTRADAS</div>
              <div className="source-row">
                <div className="source-chip"><FileSpreadsheet size={17} /><span>Archivos</span></div>
                <div className="source-chip"><Database size={17} /><span>Datos</span></div>
                <div className="source-chip"><Braces size={17} /><span>APIs</span></div>
              </div>
              <div className="flow-line"><i /><i /><i /></div>
              <div className="engine-card">
                <div className="engine-icon"><Sparkles size={21} /></div>
                <div><small>MOTOR AL</small><strong>Proceso automatizado</strong></div>
                <span>ACTIVO</span>
              </div>
              <div className="output-grid">
                <div className="metric-card">
                  <small>Tareas procesadas</small>
                  <strong>1.248</strong>
                  <span>+18.4%</span>
                </div>
                <div className="chart-card" aria-hidden="true">
                  {[42, 58, 50, 74, 68, 91, 82].map((height, i) => <i key={i} style={{ height: `${height}%` }} />)}
                </div>
              </div>
              <div className="activity-row"><span><i /> Sincronización completada</span><small>ahora</small></div>
            </div>
          </div>
          <div className="floating-note note-one"><span>01</span> Datos conectados</div>
          <div className="floating-note note-two"><span>02</span> Decisiones claras</div>
        </div>
      </div>
      <div className="hero-proof">
        <span className="proof-label">CAPACIDADES</span>
        <div>React</div><i />
        <div>Python</div><i />
        <div>APIs</div><i />
        <div>SQL</div><i />
        <div>Inteligencia artificial</div>
      </div>
    </section>
  );
}

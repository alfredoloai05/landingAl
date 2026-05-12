import { MessageCircle } from "lucide-react";
import { useFadeUp } from "../../hooks/useFadeUp";

export default function CTA() {
  const ref = useFadeUp();
  return (
    <section id="contacto" className="cta-section">
      <div className="cta-bg" />
      {/* Subtle decorative lines */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.08, pointerEvents: "none" }}
        viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid slice">
        {[0,1,2].map(i => (
          <line key={i} x1={200 + i*300} y1="0" x2={200 + i*300} y2="400"
            stroke="#18D6FF" strokeWidth="1" />
        ))}
        <ellipse cx="600" cy="200" rx="400" ry="180" fill="none" stroke="#0A84FF" strokeWidth="1" />
      </svg>

      <div className="section-inner">
        <div ref={ref} className="fade-up cta-inner">
          <span className="section-eyebrow">Contacto</span>
          <h2 className="cta-title">
            Hablemos del proceso que quieres <span className="gradient-text">ordenar</span>
          </h2>
          <p className="cta-sub">
            Podemos convertir una operación manual, una idea de plataforma o un flujo de datos desordenado en una solución clara y mantenible.
          </p>
          <div className="cta-btns">
            <a
              href="https://wa.me/593000000000"
              className="btn-primary"
              style={{ fontSize: "0.95rem", padding: "0.75rem 1.75rem" }}
            >
              <MessageCircle size={16} /> Enviar idea por WhatsApp
            </a>
            <span className="cta-divider">o</span>
            <a
              href="mailto:contacto@alsoluciones.dev"
              className="btn-secondary"
              style={{ fontSize: "0.95rem", padding: "0.75rem 1.75rem" }}
            >
              Enviar correo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

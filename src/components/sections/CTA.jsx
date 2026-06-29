import { ArrowRight, Check, Mail, MessageCircle } from "lucide-react";
import { useFadeUp } from "../../hooks/useFadeUp";
import { mailHref, whatsappHref } from "../../config/contact";

export default function CTA() {
  const ref = useFadeUp();
  return (
    <section id="contacto" className="cta-section">
      <div className="section-inner">
        <div className="cta-panel">
        <div ref={ref} className="fade-up cta-inner">
          <span className="section-eyebrow">Empecemos por el problema</span>
          <h2 className="cta-title">
            ¿Qué parte de tu operación debería funcionar mejor?
          </h2>
          <p className="cta-sub">
            En una primera conversación revisamos el proceso, el objetivo y si tiene sentido construir una solución. Sin presentaciones eternas ni compromiso.
          </p>
          <div className="cta-checks"><span><Check size={14} /> Respuesta directa</span><span><Check size={14} /> Alcance inicial</span><span><Check size={14} /> Siguiente paso claro</span></div>
          <div className="cta-btns">
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn-primary cta-main-btn">
              <MessageCircle size={17} /> Conversar por WhatsApp <ArrowRight size={16} />
            </a>
            <a href={mailHref} className="btn-secondary cta-main-btn">
              <Mail size={17} /> Escribir por correo
            </a>
          </div>
        </div>
        <div className="cta-brief" aria-label="Información útil para iniciar">
          <span>PARA EMPEZAR</span>
          <ol><li><i>01</i><div><strong>El proceso</strong><small>¿Qué sucede hoy y quién participa?</small></div></li><li><i>02</i><div><strong>El obstáculo</strong><small>¿Qué consume tiempo, genera errores o limita?</small></div></li><li><i>03</i><div><strong>El resultado</strong><small>¿Qué debería cambiar cuando funcione?</small></div></li></ol>
        </div>
        </div>
      </div>
    </section>
  );
}

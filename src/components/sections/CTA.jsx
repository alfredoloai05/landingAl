import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { mailHref, whatsappHref } from "../../config/contact";

export default function CTA() {
  return (
    <section className="contact section" id="contacto">
      <div className="section-shell contact-shell reveal">
        <div className="contact-copy">
          <span className="section-label light">PONGÁMOSLO EN MARCHA</span>
          <h2>Tienes una idea.<br /><em>Hagamos que funcione.</em></h2>
          <p>No necesitas tener todo definido. Cuéntanos el problema, la idea o el proceso que quieres mejorar y te ayudaremos a ordenar los siguientes pasos.</p>
          <div className="contact-actions">
            <a className="button button-light" href={whatsappHref} target="_blank" rel="noreferrer" data-cursor="HABLAR"><MessageCircle size={18} /> Hablemos por WhatsApp <ArrowUpRight size={17} /></a>
            <a className="button button-outline" href={mailHref} data-cursor="ESCRIBIR"><Mail size={18} /> Enviar un correo</a>
          </div>
          <div className="contact-note"><i /> Una conversación directa · Sin formulario · Sin discurso de ventas</div>
        </div>
        <div className="contact-kinetic" aria-hidden="true">
          <div className="kinetic-coordinate"><span>VX / 07</span><span>IDEA → MOVIMIENTO</span></div>
          <div className="kinetic-type">
            <strong className="kinetic-word word-idea" data-word="IDEA">IDEA</strong>
            <strong className="kinetic-word word-action" data-word="EN MARCHA">EN MARCHA</strong>
            <span className="kinetic-scan"><i /></span>
          </div>
          <div className="kinetic-footer">
            <span><i /> ESPACIO PARA EMPEZAR</span>
            <b>CUÉNTANOS QUÉ TIENES EN MENTE</b>
          </div>
        </div>
      </div>
    </section>
  );
}

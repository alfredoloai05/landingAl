import { ArrowUpRight, Braces, Lightbulb, Mail, MessageCircle, Workflow } from "lucide-react";
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
        <div className="contact-signal" aria-hidden="true">
          <svg viewBox="0 0 560 560">
            <path d="M88 126 C174 126 181 244 280 280" />
            <path d="M472 142 C390 142 384 248 280 280" />
            <path d="M463 438 C382 438 376 329 280 280" />
          </svg>
          <span className="contact-orbit contact-orbit-one"><i /><i /><i /></span>
          <span className="contact-orbit contact-orbit-two"><i /><i /></span>
          <div className="contact-signal-core">
            <MessageCircle />
            <strong>VENCODEX</strong>
            <small>LISTO PARA ESCUCHAR</small>
          </div>
          <span className="contact-signal-node contact-node-idea"><Lightbulb /> IDEA</span>
          <span className="contact-signal-node contact-node-flow"><Workflow /> PROCESO</span>
          <span className="contact-signal-node contact-node-code"><Braces /> SISTEMA</span>
          <span className="contact-packet packet-one" />
          <span className="contact-packet packet-two" />
          <span className="contact-packet packet-three" />
          <small className="contact-signal-status"><i /> CANAL ABIERTO</small>
        </div>
      </div>
    </section>
  );
}

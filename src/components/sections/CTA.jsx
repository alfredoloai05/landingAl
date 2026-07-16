import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { mailHref, whatsappHref } from "../../config/contact";

export default function CTA() {
  return (
    <section className="contact section" id="contacto">
      <div className="section-shell contact-shell reveal">
        <span className="section-label light">PONGÁMOSLO EN MARCHA</span>
        <h2>Tienes una idea.<br /><em>Hagamos que funcione.</em></h2>
        <p>Cuéntanos qué quieres lograr. Encontraremos la forma más clara de convertirlo en un producto real, útil y preparado para crecer.</p>
        <div className="contact-actions">
          <a className="button button-light" href={whatsappHref} target="_blank" rel="noreferrer" data-cursor="HABLAR"><MessageCircle size={18} /> Hablemos por WhatsApp <ArrowUpRight size={17} /></a>
          <a className="button button-outline" href={mailHref} data-cursor="ESCRIBIR"><Mail size={18} /> Enviar un correo</a>
        </div>
        <div className="contact-note"><i /> Una conversación directa · Sin formulario · Sin discurso de ventas</div>
      </div>
    </section>
  );
}

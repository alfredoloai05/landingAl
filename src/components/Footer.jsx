import { ArrowUp, Mail, MapPin } from "lucide-react";
import { CONTACT, mailHref } from "../config/contact";

const asset = name => `${import.meta.env.BASE_URL}assets/${name}`;

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-identity">
          <a className="brand footer-brand" href="#inicio"><img src={asset("vencodex-mark.svg")} alt="" /><span><strong>VENCODEX</strong><small>SOFTWARE SOLUTIONS</small></span></a>
          <p>De una idea.<br /><em>A algo que avanza.</em></p>
        </div>
        <div className="footer-column"><span>EXPLORAR</span><a href="#servicios">Soluciones</a><a href="#para-quien">Para quién</a><a href="#proceso">Proceso</a><a href="#contacto">Hablemos</a></div>
        <div className="footer-column"><span>CONTACTO</span><a href={mailHref}><Mail /> {CONTACT.email}</a><p><MapPin /> {CONTACT.location}</p></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Vencodex. Todos los derechos reservados.</span><a href="#inicio">VOLVER ARRIBA <ArrowUp /></a></div>
    </footer>
  );
}

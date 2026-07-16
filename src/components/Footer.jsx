import { ArrowUp, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { CONTACT, mailHref } from "../config/contact";

const asset = name => `${import.meta.env.BASE_URL}assets/${name}`;

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-identity">
          <a className="brand footer-brand" href="#inicio"><img src={asset("vencodex-mark.svg")} alt="" /><span><strong>VENCODEX</strong><small>SOFTWARE SOLUTIONS</small></span></a>
          <p>Menos fricción.<br />Más movimiento.</p>
        </div>
        <div className="footer-column"><span>EXPLORAR</span><a href="#proceso">Cómo avanzamos</a><a href="#contacto">Hablemos</a><a href="#servicios">Qué hacemos</a></div>
        <div className="footer-column"><span>CONTACTO</span><a href={mailHref}><Mail /> {CONTACT.email}</a><p><MapPin /> {CONTACT.location}</p></div>
        <div className="footer-column"><span>CONECTAR</span><a href={CONTACT.linkedin} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a><a href={CONTACT.github} target="_blank" rel="noreferrer"><Github /> GitHub</a></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Vencodex. Todos los derechos reservados.</span><a href="#inicio">VOLVER ARRIBA <ArrowUp /></a></div>
    </footer>
  );
}

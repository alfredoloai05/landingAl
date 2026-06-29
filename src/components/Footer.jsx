import { ArrowUp, Github, Instagram, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";
import { CONTACT, mailHref, whatsappHref } from "../config/contact";

const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`;

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialItems = [
    { label: "GitHub", icon: Github, href: CONTACT.github },
    { label: "LinkedIn", icon: Linkedin, href: CONTACT.linkedin },
    { label: "Instagram", icon: Instagram, href: CONTACT.instagram },
  ];

  return (
    <footer className="site-footer" id="footer">
      <div className="footer">
        <div className="footer-brand-block">
          <a className="footer-brand" href="#inicio" aria-label={CONTACT.brand}>
            <img src={asset("al-logo.svg")} alt="" />
            <span>
              <strong>{CONTACT.brand}</strong>
              <small>Software · Automatización · Inteligencia artificial</small>
            </span>
          </a>
          <p className="footer-note">
            Construimos tecnología alrededor de operaciones reales. Desde Loja, Ecuador, para equipos que quieren trabajar mejor.
          </p>
        </div>

        <div className="footer-column">
          <h4>Explorar</h4>
          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#proceso">Proceso</a>
          <a href="#sobre">El estudio</a>
          <a href="#contacto">Contacto</a>
        </div>

        <div className="footer-column">
          <h4>Contacto</h4>
          <a href={whatsappHref} target="_blank" rel="noreferrer"><MessageCircle size={16} /> {CONTACT.phoneDisplay}</a>
          <a href={mailHref}><Mail size={16} /> {CONTACT.email}</a>
          <span className="footer-info"><MapPin size={16} /> {CONTACT.location}</span>
        </div>

        <div className="footer-column">
          <h4>Redes</h4>
          <div className="footer-social">
            {socialItems.map(({ label, icon: Icon, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {currentYear} {CONTACT.brand}. Construido con criterio y café.</span>
        <a href="#inicio">Volver arriba <ArrowUp size={14} /></a>
      </div>
    </footer>
  );
}

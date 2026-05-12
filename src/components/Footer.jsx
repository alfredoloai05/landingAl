import { Github, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialItems = [
    { label: "GitHub próximamente", icon: Github },
    { label: "LinkedIn próximamente", icon: Linkedin },
    { label: "Instagram próximamente", icon: Instagram },
  ];

  return (
    <footer style={{ borderTop: "1px solid var(--card-bd)" }}>
      <div className="footer">
        <div className="footer-left">
          <span className="logo-mark"><span>AL</span></span>
          <span className="footer-tagline">Soluciones Tecnológicas</span>
        </div>
        <ul className="footer-links">
          {["Inicio","Servicios","Proyectos","Contacto"].map((l, i) => (
            <li key={l}>
              <a href={["#inicio","#servicios","#proyectos","#contacto"][i]}>{l}</a>
            </li>
          ))}
        </ul>
        <div className="footer-social">
          {socialItems.map(({ label, icon: Icon }) => (
            <button key={label} type="button" aria-label={label} title="Próximamente" disabled>
              <Icon size={18} />
            </button>
          ))}
        </div>
        <span className="footer-copy">© {currentYear} AL Soluciones Tecnológicas. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

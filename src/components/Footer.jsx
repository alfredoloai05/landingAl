import { Github, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
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
          <a href="#" aria-label="GitHub"><Github size={18} /></a>
          <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
        </div>
        <span className="footer-copy">© 2025 AL Soluciones Tecnológicas. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

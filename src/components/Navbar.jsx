import { useState } from "react";
import { ChevronRight, Menu, X } from "lucide-react";
import { NAV_ITEMS } from "../data/navigation";
import { useActiveSection } from "../hooks/useActiveSection";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(NAV_ITEMS);

  return (
    <>
      <nav className="navbar">
        <a className="logo-mark" href="#inicio" aria-label="AL Soluciones Tecnológicas">
          <span>AL</span>
        </a>
        <ul className="nav-links">
          {NAV_ITEMS.map(item => (
            <li key={item.href}>
              <a className={active === item.href ? "active" : ""} href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contacto" className="btn-primary nav-cta" style={{ display: "flex" }}>
          Cotizar proyecto <ChevronRight size={14} />
        </a>
        <button
          className="mobile-toggle"
          onClick={() => setOpen(o => !o)}
          style={{ background: "none", border: "none", color: "var(--white)", cursor: "pointer" }}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        {NAV_ITEMS.map(item => (
          <a
            key={item.href}
            className={active === item.href ? "active" : ""}
            href={item.href}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a href="#contacto" className="btn-primary nav-cta" onClick={() => setOpen(false)}>
          Cotizar proyecto
        </a>
      </div>
    </>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

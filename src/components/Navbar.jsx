import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV_ITEMS } from "../data/navigation";
import { useActiveSection } from "../hooks/useActiveSection";

const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(NAV_ITEMS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    const onKeyDown = event => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <nav className={`navbar ${scrolled ? "is-scrolled" : ""}`} aria-label="Navegación principal">
        <a className="brand-lockup" href="#inicio" aria-label="AL Software Studio, inicio">
          <img src={asset("al-logo.svg")} alt="" />
          <span className="brand-copy">
            <strong>AL</strong>
            <small>Software Studio</small>
          </span>
        </a>
        <ul className="nav-links">
          {NAV_ITEMS.map(item => (
            <li key={item.href}>
              <a className={active === item.href ? "active" : ""} href={item.href} aria-current={active === item.href ? "page" : undefined}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contacto" className="btn-primary nav-cta">
          Hablemos <ArrowUpRight size={15} />
        </a>
        <button
          className="mobile-toggle"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      <div id="mobile-navigation" className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open}>
        {NAV_ITEMS.map(item => (
          <a
            key={item.href}
            className={active === item.href ? "active" : ""}
            href={item.href}
            aria-current={active === item.href ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a href="#contacto" className="btn-primary" onClick={() => setOpen(false)}>
          Cuéntanos tu proyecto <ArrowUpRight size={16} />
        </a>
      </div>
    </>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

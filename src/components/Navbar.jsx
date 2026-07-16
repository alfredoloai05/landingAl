import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV_ITEMS } from "../data/navigation";
import { useActiveSection } from "../hooks/useActiveSection";

const asset = name => `${import.meta.env.BASE_URL}assets/${name}`;
const ACTIVE_ITEMS = [...NAV_ITEMS, { label: "Hablemos", href: "#contacto" }];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(ACTIVE_ITEMS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    const onKeyDown = event => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <nav className={`navbar ${scrolled ? "is-scrolled" : ""}`} aria-label="Navegación principal">
        <a className="brand" href="#inicio" aria-label="Vencodex, inicio" data-cursor="INICIO">
          <img src={asset("vencodex-mark.svg")} alt="" />
          <span><strong>VENCODEX</strong><small>SOFTWARE SOLUTIONS</small></span>
        </a>
        <div className="nav-center">
          {NAV_ITEMS.map(item => (
            <a key={item.href} className={active === item.href ? "active" : ""} href={item.href} data-cursor="IR">{item.label}</a>
          ))}
        </div>
        <a href="#contacto" className={`nav-contact ${active === "#contacto" ? "active" : ""}`} data-cursor="HABLAR">Hablemos <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" onClick={() => setOpen(value => !value)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Cerrar menú" : "Abrir menú"}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <div className={`mobile-menu ${open ? "open" : ""}`} id="mobile-menu" aria-hidden={!open}>
        <span className="mobile-menu-label">NAVEGACIÓN</span>
        {NAV_ITEMS.map(item => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
        ))}
        <a className="mobile-contact" href="#contacto" onClick={() => setOpen(false)}>Iniciar un proyecto <ArrowUpRight /></a>
      </div>
    </>
  );
}

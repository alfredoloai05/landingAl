import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV_ITEMS } from "../data/navigation";
import { useActiveSection } from "../hooks/useActiveSection";

const asset = name => `${import.meta.env.BASE_URL}assets/${name}`;
const ACTIVE_ITEMS = [...NAV_ITEMS, { label: "Hablemos", href: "#contacto" }];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef(null);
  const firstMobileLinkRef = useRef(null);
  const active = useActiveSection(ACTIVE_ITEMS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    const inertTargets = [
      document.querySelector("main"),
      document.querySelector("footer"),
      document.querySelector(".navbar .brand"),
      document.querySelector(".nav-center"),
      document.querySelector(".nav-contact"),
    ].filter(Boolean);
    inertTargets.forEach(element => { element.inert = open; });

    const focusTimer = open
      ? window.setTimeout(() => firstMobileLinkRef.current?.focus(), 50)
      : null;
    const onKeyDown = event => {
      if (event.key !== "Escape" || !open) return;
      setOpen(false);
      window.requestAnimationFrame(() => toggleRef.current?.focus());
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      if (focusTimer) window.clearTimeout(focusTimer);
      document.body.classList.remove("menu-open");
      inertTargets.forEach(element => { element.inert = false; });
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 821px)");
    const closeOnDesktop = event => event.matches && setOpen(false);
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

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
        <button ref={toggleRef} className="menu-toggle" onClick={() => setOpen(value => !value)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Cerrar menú" : "Abrir menú"}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <div className={`mobile-menu ${open ? "open" : ""}`} id="mobile-menu" role="dialog" aria-modal={open ? "true" : undefined} aria-label="Navegación móvil" aria-hidden={!open}>
        <span className="mobile-menu-label">NAVEGACIÓN</span>
        {NAV_ITEMS.map((item, index) => (
          <a ref={index === 0 ? firstMobileLinkRef : undefined} key={item.href} href={item.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>{item.label}</a>
        ))}
        <a className="mobile-contact" href="#contacto" tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>Iniciar un proyecto <ArrowUpRight /></a>
      </div>
    </>
  );
}

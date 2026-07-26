import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import LangToggle from "./LangToggle.jsx";
import { useT } from "../context/LangContext.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const t = useT();
  const linkClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-box">{t({ es: "Viaje India", en: "India trip" })}</span>
          <span className="brand-sub">Planeta</span>
        </Link>
        <div className={`nav-links ${open ? "open" : ""}`}>
          <NavLink to="/viajes" className={linkClass} onClick={() => setOpen(false)}>{t({ es: "Tours", en: "Tours" })}</NavLink>
          <NavLink to="/nosotros" className={linkClass} onClick={() => setOpen(false)}>{t({ es: "Por qué nosotros", en: "Why us" })}</NavLink>
          <NavLink to="/contacto" className={linkClass} onClick={() => setOpen(false)}>{t({ es: "Contacto", en: "Contact" })}</NavLink>
          <LangToggle />
          <a href="https://wa.me/918949454247" target="_blank" rel="noopener noreferrer" className="nav-cta" onClick={() => setOpen(false)}>WhatsApp</a>
        </div>
        <button className="nav-toggle" aria-label="Menu" onClick={() => setOpen(v => !v)}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
}

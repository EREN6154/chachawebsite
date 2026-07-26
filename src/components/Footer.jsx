import { Link } from "react-router-dom";
import { useT } from "../context/LangContext.jsx";

export default function Footer() {
  const t = useT();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand" style={{ color: "var(--ivory)" }}>Viaje India <small>Planeta</small></div>
            <p style={{ marginTop: 18, color: "rgba(246,240,228,0.65)", fontSize: 14, maxWidth: 280 }}>
              {t({
                es: "Tours privados por India diseñados y guiados en español. 18 años acompañando viajeros por el subcontinente.",
                en: "Private tours across India designed and led in Spanish. 18 years guiding travelers through the subcontinent."
              })}
            </p>
          </div>
          <div>
            <h5>{t({ es: "Explorar", en: "Explore" })}</h5>
            <ul>
              <li><Link to="/viajes">{t({ es: "Todos los tours", en: "All tours" })}</Link></li>
              <li><Link to="/nosotros">{t({ es: "Por qué nosotros", en: "Why us" })}</Link></li>
              <li><Link to="/contacto">{t({ es: "Contacto", en: "Contact" })}</Link></li>
            </ul>
          </div>
          <div>
            <h5>{t({ es: "Regiones", en: "Regions" })}</h5>
            <ul>
              <li>{t({ es: "Norte de India", en: "North India" })}</li>
              <li>{t({ es: "Sur de India", en: "South India" })}</li>
              <li>{t({ es: "Este de India", en: "East India" })}</li>
            </ul>
          </div>
          <div>
            <h5>{t({ es: "Contacto", en: "Contact" })}</h5>
            <ul>
              <li><a href="mailto:vickyguide951@gmail.com">vickyguide951@gmail.com</a></li>
              <li><a href="tel:+918949454247">+91 894 945 4247</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>Viaje India Planeta © 2026</span>
          <span>{t({ es: "Tours privados por India en español e inglés", en: "Private tours across India in Spanish and English" })}</span>
        </div>
      </div>
    </footer>
  );
}

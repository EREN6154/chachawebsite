import { Link } from "react-router-dom";
import MonumentMotif from "../components/MonumentMotif.jsx";
import useReveal from "../hooks/useReveal.js";
import { useT } from "../context/LangContext.jsx";

export default function About() {
  useReveal();
  const t = useT();

  return (
    <>
      <header className="page-hero" style={{ background: "var(--ink)" }}>
        <MonumentMotif opacity={0.4} />
        <div className="container page-hero-inner">
          <span className="eyebrow">{t({ es: "Nosotros", en: "About us" })}</span>
          <h1>{t({ es: "Dieciocho años enseñando India a quienes hablan mi idioma.", en: "Eighteen years showing India to people who speak my language." })}</h1>
        </div>
      </header>

      <section>
        <div className="container two-col">
          <div className="reveal">
            <span className="eyebrow">{t({ es: "La guía", en: "The guide" })}</span>
            <h2 style={{ color: "var(--indigo)" }}>{t({ es: "Un acompañante, no solo un chófer", en: "A companion, not just a driver" })}</h2>
            <p style={{ marginTop: 22, color: "var(--ink-soft)", fontSize: 16, lineHeight: 1.7 }}>
              {t({
                es: "Llevo 18 años recibiendo viajeros hispanohablantes en el aeropuerto, explicándoles por qué Delhi tiene dos ciudades dentro de sí misma, por qué el Taj Mahal cambia de color según la hora, y por qué en Varanasi la gente viaja para morir en paz.",
                en: "I've spent 18 years welcoming Spanish-speaking travelers at the airport, explaining why Delhi holds two cities within itself, why the Taj Mahal changes color with the hour, and why people travel to Varanasi to die in peace."
              })}
            </p>
            <p style={{ marginTop: 16, color: "var(--ink-soft)", fontSize: 16, lineHeight: 1.7 }}>
              {t({
                es: "No trabajo con guiones. Cada grupo tiene su ritmo, sus preguntas y su curiosidad particular — y mi trabajo es traducir India para que se entienda de verdad, no solo se vea de pasada.",
                en: "I don't work from a script. Every group has its own pace, questions and curiosity — my job is to translate India so it's truly understood, not just glimpsed in passing."
              })}
            </p>
            <div className="stat-row">
              <div className="stat"><b>18</b><span>{t({ es: "años de experiencia", en: "years of experience" })}</span></div>
              <div className="stat"><b>ES · EN</b><span>{t({ es: "idiomas de guía", en: "guide languages" })}</span></div>
              <div className="stat"><b>13</b><span>{t({ es: "itinerarios propios", en: "original itineraries" })}</span></div>
            </div>
          </div>
          <div className="reveal" style={{ background: "var(--ivory-dim)", padding: 40 }}>
            <span className="eyebrow">{t({ es: "Contacto directo", en: "Direct contact" })}</span>
            <ul style={{ marginTop: 20, fontSize: 15, lineHeight: 2.2 }}>
              <li>📧 <a href="mailto:vickyguide951@gmail.com">vickyguide951@gmail.com</a></li>
              <li>📱 <a href="tel:+918949454247">+91 894 945 4247</a></li>
              <li>💬 <a href="https://wa.me/918949454247" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li>🗣️ {t({ es: "Guía y acompañamiento en español e inglés", en: "Guiding and support in Spanish and English" })}</li>
            </ul>
            <Link to="/contacto" className="btn btn-dark" style={{ marginTop: 26, width: "100%", justifyContent: "center" }}>
              {t({ es: "Planifica tu viaje", en: "Plan your trip" })}
            </Link>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="label" style={{ color: "var(--marigold)" }}>{t({ es: "Cómo trabajamos", en: "How we work" })}</span>
              <h2 style={{ marginTop: 6 }}>{t({ es: "Tres principios simples", en: "Three simple principles" })}</h2>
            </div>
          </div>
          <div className="feature-grid reveal">
            <div className="feature">
              <span className="num">01</span>
              <h4>{t({ es: "Sin sorpresas", en: "No surprises" })}</h4>
              <p>{t({ es: "Hoteles, traslados y entradas confirmados antes de salir de casa.", en: "Hotels, transfers and entrance fees confirmed before you leave home." })}</p>
            </div>
            <div className="feature">
              <span className="num">02</span>
              <h4>{t({ es: "Ritmo humano", en: "A human pace" })}</h4>
              <p>{t({ es: "Ningún día se siente apurado. El itinerario respira.", en: "No day ever feels rushed. The itinerary breathes." })}</p>
            </div>
            <div className="feature">
              <span className="num">03</span>
              <h4>{t({ es: "Disponibilidad real", en: "Real availability" })}</h4>
              <p>{t({ es: "Respuesta directa, sin intermediarios ni bots.", en: "A direct reply, no middlemen or bots." })}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

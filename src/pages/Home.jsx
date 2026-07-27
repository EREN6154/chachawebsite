import { Link } from "react-router-dom";
import { TOURS } from "../data/tours.js";
import TourCard from "../components/TourCard.jsx";
import PhotoHeroCluster from "../components/PhotoHeroCluster.jsx";
import useReveal from "../hooks/useReveal.js";
import { useT } from "../context/LangContext.jsx";

export default function Home() {
  useReveal();
  const t = useT();

  const featured = TOURS.slice(0, 3);
  const regionPicks = [
    TOURS.find(t => t.slug === "triangulo-dorado-clasico"),
    TOURS.find(t => t.slug === "nepal-esencial-katmandu-pokhara"),
    TOURS.find(t => t.slug === "reino-de-butan-nido-del-tigre"),
    TOURS.find(t => t.slug === "sri-lanka-isla-esmeralda")
  ];
  const teaserTour = TOURS.find(t => t.slug === "delhi-agra-jaipur-varanasi");

  return (
    <>
      <header className="hero hero-centered">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <div className="hero-center-header">
            <span className="hero-eyebrow">
              {t({ es: "GUÍA CERTIFICADO · ESPAÑOL E INGLÉS · 18 AÑOS DE EXPERIENCIA", en: "CERTIFIED GUIDE · SPANISH AND ENGLISH · 18 YEARS OF EXPERIENCE" })}
            </span>
            <h1>
              {t({ es: "La India que solo un ", en: "The India that only a " })}
              <em>{t({ es: "guía local", en: "local guide" })}</em>
              {t({ es: " puede mostrarte", en: " can show you" })}
            </h1>
          </div>

          <PhotoHeroCluster />

          <div className="hero-cta hero-cta-centered">
            <Link to="/viajes" className="btn btn-primary">{t({ es: "Ver todos los tours", en: "View all tours" })}</Link>
            <Link to="/contacto" className="btn btn-on-dark">{t({ es: "Planear mi viaje", en: "Plan my trip" })}</Link>
          </div>
        </div>
        <div className="scroll-cue"><span>{t({ es: "Descubre", en: "Discover" })}</span><span className="line"></span></div>
      </header>

      <section className="section-tight">
        <div className="container two-col">
          <div className="reveal">
            <span className="label" style={{ color: "var(--sandstone)" }}>{t({ es: "Sobre nosotros", en: "About us" })}</span>
            <h2 style={{ fontSize: "clamp(28px,3.2vw,40px)", color: "var(--indigo)", lineHeight: 1.15, marginTop: 14 }}>
              {t({ es: "No vendemos paquetes. Acompañamos viajes.", en: "We don't sell packages. We travel with you." })}
            </h2>
          </div>
          <div className="reveal">
            <p style={{ fontSize: 16, color: "#4a4740", marginBottom: 18 }}>
              <strong style={{ color: "var(--indigo)", fontWeight: 500 }}>Viaje India Planeta</strong>{" "}
              {t({
                es: "nace de 18 años guiando viajeros de habla hispana e inglesa por Delhi, Rajastán, Agra, Varanasi, el sur de India, Nepal, Bután y Sri Lanka. Cada itinerario está pensado por alguien que ha caminado esas calles cientos de veces — no copiado de un catálogo.",
                en: "comes from 18 years guiding Spanish and English speaking travelers through Delhi, Rajasthan, Agra, Varanasi, South India, Nepal, Bhutan, and Sri Lanka. Every itinerary is built by someone who has walked those streets hundreds of times — not copied from a catalog."
              })}
            </p>
            <p style={{ fontSize: 16, color: "#4a4740" }}>
              {t({
                es: "Servicio privado, guía y conductor de confianza, y la flexibilidad de ajustar el ritmo del viaje a lo que realmente quieres ver.",
                en: "Private service, a driver and guide you can trust, and the flexibility to shape the pace of the trip around what you actually want to see."
              })}
            </p>
            <div className="stat-row">
              <div className="stat"><b>18</b><span>{t({ es: "años de experiencia", en: "years of experience" })}</span></div>
              <div className="stat"><b>16</b><span>{t({ es: "rutas por región & país", en: "routes by region & country" })}</span></div>
              <div className="stat"><b>100%</b><span>{t({ es: "servicio privado", en: "private service" })}</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="label" style={{ color: "var(--marigold)" }}>{t({ es: "Tours destacados", en: "Featured tours" })}</span>
              <h2 style={{ marginTop: 6 }}>{t({ es: "Rutas diseñadas por región, no por lista de monumentos", en: "Routes built by region, not a checklist of monuments" })}</h2>
            </div>
          </div>
          <div className="tour-grid">
            {featured.map(tr => <TourCard key={tr.slug} tour={tr} />)}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">{t({ es: "Un día cualquiera", en: "A day in the life" })}</span>
              <h2>{t({ es: "Así se ve el Triángulo Dorado con Varanasi", en: "Here's what the Golden Triangle with Varanasi looks like" })}</h2>
            </div>
          </div>
          <div className="day-scroll reveal">
            {teaserTour.days.map(d => (
              <div className="day-card" key={d.d}>
                <span className="day-num">{String(d.d).padStart(2, "0")}</span>
                <h4>{t(d.title)}</h4>
                <p>{t(d.text)}</p>
              </div>
            ))}
          </div>
          <Link to={`/viajes/${teaserTour.slug}`} className="btn btn-outline" style={{ marginTop: 20 }}>
            {t({ es: "Ver este tour completo →", en: "See this full tour →" })}
          </Link>
        </div>
      </section>

      <section style={{ background: "var(--ivory-dim)" }}>
        <div className="container two-col">
          <div className="reveal">
            <span className="label" style={{ color: "var(--teal)" }}>{t({ es: "Por qué viajar con nosotros", en: "Why travel with us" })}</span>
            <h2 style={{ fontSize: "clamp(26px,3vw,36px)", color: "var(--indigo)", marginTop: 14, marginBottom: 20 }}>
              {t({ es: "Un guía, no una plataforma", en: "A guide, not a platform" })}
            </h2>
            <ul>
              {[
                { es: ["Servicio privado", "Vehículo, guía y ritmo solo para tu grupo — nunca compartido con desconocidos."], en: ["Private service", "Vehicle, guide and pace for your group only — never shared with strangers."] },
                { es: ["Español e inglés", "Guía certificado por el Ministerio de Turismo de India, fluido en español e inglés."], en: ["Spanish & English", "Guide certified by the Ministry of Tourism of India, fluent in Spanish and English."] },
                { es: ["18 años en ruta", "Los mismos hoteles, choferes y contactos de confianza, probados durante casi dos décadas."], en: ["18 years on the road", "The same hotels, drivers and trusted contacts, tested for almost two decades."] },
                { es: ["Itinerarios reales", "Cada tour de esta web es un recorrido que hemos hecho, no una plantilla genérica."], en: ["Actual itineraries", "Every tour on this website is a route we have taken, not a generic template."] }
              ].map((item, i) => (
                <li key={i} style={{ padding: "16px 0", borderBottom: "1px solid rgba(20,24,31,0.1)", fontSize: 15, color: "#4a4740", display: "flex", flexWrap: "wrap", gap: "6px 14px" }}>
                  <b style={{ color: "var(--indigo)", fontWeight: 500, minWidth: 130 }}>{t(item)[0]}</b>
                  <span>{t(item)[1]}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal" style={{ background: "var(--indigo)", color: "var(--ivory)", padding: 40 }}>
            <span className="label" style={{ color: "var(--marigold)" }}>{t({ es: "Tu guía", en: "Your guide" })}</span>
            <h3 style={{ fontSize: 24, margin: "12px 0 6px", color: "var(--ivory)" }}>
              {t({ es: "Victor — Guía y escolta turístico", en: "Victor — Tourist guide and escort" })}
            </h3>
            <p style={{ fontSize: 14, color: "rgba(246,240,228,0.7)" }}>
              {t({ es: "Español e inglés · 18 años de experiencia", en: "Spanish and English · 18 years of experience" })}
            </p>
            <p style={{ marginTop: 20, fontSize: 14 }}>vickyguide951@gmail.com</p>
            <p style={{ fontSize: 14 }}>+91 894 945 4247</p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">{t({ es: "Regiones & Destinos", en: "Regions & Destinations" })}</span>
              <h2>{t({ es: "India, Nepal, Bután y Sri Lanka", en: "India, Nepal, Bhutan & Sri Lanka" })}</h2>
            </div>
            <p>{t({ es: "Cuatro destinos inolvidables del subcontinente diseñados con servicio privado y guía en español e inglés.", en: "Four unforgettable destinations of the subcontinent designed with private service and a Spanish & English speaking guide." })}</p>
          </div>
          <div className="tour-grid">
            {regionPicks.map(tr => <TourCard key={tr.slug} tour={tr} />)}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">{t({ es: "Testimonios", en: "Testimonials" })}</span>
              <h2>{t({ es: "Lo que cuentan al volver", en: "What they say when they get back" })}</h2>
            </div>
          </div>
          <div className="testi-track reveal">
            <div className="testi">
              <div className="stars">★★★★★</div>
              <p className="quote">{t({ es: "\u201CCada día estaba resuelto de antemano y aun así se sentía como una aventura propia. El guía se convirtió en parte del grupo.\u201D", en: "\u201CEvery day was planned ahead and it still felt like our own adventure. The guide became part of the group.\u201D" })}</p>
              <div className="who">Marta S. — {t({ es: "Triángulo Dorado con Varanasi", en: "Golden Triangle with Varanasi" })}</div>
            </div>
            <div className="testi">
              <div className="stars">★★★★★</div>
              <p className="quote">{t({ es: "\u201CTrece días por Rajastán y ni un solo momento de duda o improvisación. Todo funcionó como estaba prometido.\u201D", en: "\u201CThirteen days across Rajasthan without a single moment of doubt or improvising. Everything worked exactly as promised.\u201D" })}</p>
              <div className="who">Javier R. — Royal Rajasthan</div>
            </div>
            <div className="testi">
              <div className="stars">★★★★★</div>
              <p className="quote">{t({ es: "\u201CEl sur de India es otro mundo por completo. Los templos, los backwaters, el ritmo... una experiencia muy distinta al norte.\u201D", en: "\u201CSouth India is a completely different world. The temples, the backwaters, the pace... a very different experience from the north.\u201D" })}</p>
              <div className="who">Carolina M. — {t({ es: "Sur de India Clásico", en: "Classic South India" })}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="container text-center reveal" style={{ maxWidth: 620 }}>
          <span className="label" style={{ color: "var(--marigold)", display: "block" }}>{t({ es: "¿Empezamos a planear?", en: "Shall we start planning?" })}</span>
          <h2 style={{ marginTop: 18 }}>{t({ es: "Cuéntanos qué buscas y diseñamos el resto.", en: "Tell us what you're looking for and we'll design the rest." })}</h2>
          <p style={{ marginTop: 18, color: "rgba(246,240,228,0.7)" }}>{t({ es: "Respondemos en español o inglés, con fechas y disponibilidad reales.", en: "We reply in Spanish or English, with real dates and availability." })}</p>
          <div style={{ marginTop: 36, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/contacto" className="btn btn-primary">{t({ es: "Planifica tu viaje", en: "Plan your trip" })}</Link>
            <a href="https://wa.me/918949454247" target="_blank" rel="noopener noreferrer" className="btn btn-on-dark">WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}

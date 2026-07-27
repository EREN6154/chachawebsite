import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { TOURS, getTourBySlug } from "../data/tours.js";
import TourCard from "../components/TourCard.jsx";
import TourMedia from "../components/TourMedia.jsx";
import { CARD_ICONS, TOUR_ICON, gradientFor } from "../data/icons.js";
import { maskPrice } from "../utils/priceMask.js";
import useReveal from "../hooks/useReveal.js";
import { useT } from "../context/LangContext.jsx";

export default function TourDetail() {
  const { slug } = useParams();
  const tour = getTourBySlug(slug);
  useReveal();
  const t = useT();

  useEffect(() => {
    if (tour) document.title = `${t(tour.title)} — Viaje India Planeta`;
  }, [tour, t]);

  if (!tour) return <Navigate to="/viajes" replace />;

  const icon = CARD_ICONS[TOUR_ICON[tour.slug] || "taj"];
  const related = TOURS.filter(tr => tr.slug !== tour.slug && tr.region.es === tour.region.es).slice(0, 3);
  const relatedFinal = related.length ? related : TOURS.filter(tr => tr.slug !== tour.slug).slice(0, 3);
  const waMsg = `${t({ es: "Hola, me interesa el tour", en: "Hi, I'm interested in the tour" })} "${t(tour.title)}" — ${t({ es: "¿me pueden pasar el precio exacto?", en: "could you send me the exact price?" })}`;

  return (
    <>
      <header className="page-hero" style={{ background: gradientFor(tour.slug), position: "relative", overflow: "hidden" }}>
        <div
          style={{ position: "absolute", right: -40, top: -20, width: 300, height: 300, opacity: 0.16, color: "#F1E7D2" }}
          dangerouslySetInnerHTML={{ __html: icon }}
        />
        <div className="container page-hero-inner" style={{ position: "relative" }}>
          <div className="breadcrumb">
            <Link to="/viajes">{t({ es: "Tours", en: "Tours" })}</Link> / {t(tour.title)}
          </div>
          <span className="eyebrow">{t(tour.region)}</span>
          <h1>{t(tour.title)}</h1>
          <p style={{ marginTop: 16, maxWidth: 560, color: "rgba(246,240,228,0.82)", fontSize: 16 }}>{t(tour.tagline)}</p>
          <div className="meta">
            <div><b>{t({ es: "Duración", en: "Duration" })}</b>{tour.duration} {t({ es: "días", en: "days" })} / {tour.nights} {t({ es: "noches", en: "nights" })}</div>
            <div><b>{t({ es: "Ruta", en: "Route" })}</b>{tour.cities.join(" · ")}</div>
            <div><b>{t({ es: "Precio desde", en: "Price from" })}</b>USD {maskPrice(tour.priceFrom)}</div>
          </div>
          <div style={{ marginTop: 32, display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link to={`/contacto?tour=${encodeURIComponent(t(tour.title))}`} className="btn btn-primary">
              {t({ es: "Consultar este tour", en: "Ask about this tour" })}
            </Link>
            <a href={`https://wa.me/918949454247?text=${encodeURIComponent(waMsg)}`} target="_blank" rel="noopener noreferrer" className="btn btn-on-dark">WhatsApp</a>
          </div>
        </div>
      </header>

      {tour.image && (
        <div style={{ maxWidth: "var(--container)", margin: "-40px auto 0", padding: "0 32px", position: "relative", zIndex: 2 }}>
          <TourMedia tour={tour} className="tour-hero-media" />
        </div>
      )}

      <section style={{ paddingTop: 70 }}>
        <div className="container tour-detail-layout">
          <div>
            <div className="reveal">
              <span className="eyebrow">{t({ es: "Lo más destacado", en: "Highlights" })}</span>
              <ul>
                {tour.highlights.map((h, i) => (
                  <li key={i} style={{ padding: "10px 0", borderTop: "1px solid var(--line)", fontSize: 15, color: "#4a4740" }}>{t(h)}</li>
                ))}
              </ul>
            </div>

            <div className="reveal" style={{ marginTop: 56 }}>
              <span className="eyebrow">{t({ es: "Itinerario día a día", en: "Day-by-day itinerary" })}</span>
              <div className="timeline" style={{ marginTop: 6 }}>
                {tour.days.map(d => (
                  <div className="tl-item reveal" key={d.d}>
                    <div className="tl-day"><b>{String(d.d).padStart(2, "0")}</b><span>{t({ es: "Día", en: "Day" })}</span></div>
                    <div>
                      <h4>{t(d.title)}</h4>
                      <p>{t(d.text)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside>
            <div className="reveal" style={{ position: "sticky", top: 100, background: "var(--ivory-dim)", border: "1px solid var(--line)", padding: 30 }}>
              <span className="label" style={{ color: "var(--ink-soft)" }}>{t({ es: "Precio desde", en: "Price from" })}</span>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 36, margin: "6px 0 4px", color: "var(--indigo)" }}>
                USD {maskPrice(tour.priceFrom)}
                <span style={{ fontSize: 14, fontFamily: "var(--font-body)", color: "var(--ink-soft)" }}> / {t({ es: "persona", en: "person" })}</span>
              </div>
              <p style={{ fontSize: 13, color: "var(--ink-soft)", marginBottom: 18 }}>
                {t({ es: "Escríbenos para el precio exacto según fechas y número de viajeros.", en: "Message us for the exact price based on dates and group size." })}
              </p>
              <Link to={`/contacto?tour=${encodeURIComponent(t(tour.title))}`} className="btn btn-dark" style={{ width: "100%", justifyContent: "center", marginBottom: 12 }}>
                {t({ es: "Solicitar disponibilidad", en: "Check availability" })}
              </Link>
              <a href={`https://wa.me/918949454247?text=${encodeURIComponent(waMsg)}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ width: "100%", justifyContent: "center" }}>
                {t({ es: "Escribir por WhatsApp", en: "Message on WhatsApp" })}
              </a>

              <div className="incl-grid" style={{ display: "block", marginTop: 26, paddingTop: 22, borderTop: "1px solid var(--line)" }}>
                <h3 style={{ fontSize: 14 }}>{t({ es: "Incluye", en: "Includes" })}</h3>
                <ul>{tour.includes.map((i, idx) => <li key={idx}>✓ {t(i)}</li>)}</ul>
              </div>
              <div className="incl-grid" style={{ display: "block", marginTop: 16, paddingTop: 16, borderTop: "1px solid var(--line)" }}>
                <h3 style={{ fontSize: 14 }}>{t({ es: "No incluye", en: "Not included" })}</h3>
                <ul>{tour.excludes.map((i, idx) => <li key={idx}>— {t(i)}</li>)}</ul>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-cream mt-xl">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">{t({ es: "También te puede interesar", en: "You might also like" })}</span>
              <h2>{t({ es: "Otros tours en", en: "Other tours in" })} {t(tour.region)}</h2>
            </div>
          </div>
          <div className="tour-grid">
            {relatedFinal.map(tr => <TourCard key={tr.slug} tour={tr} />)}
          </div>
        </div>
      </section>
    </>
  );
}

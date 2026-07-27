import { useState, useEffect } from "react";
import { useT } from "../context/LangContext.jsx";

const GALLERY_ITEMS = [
  {
    id: "qutub-minar",
    img: "/images/gallery/qutub-minar.jpg",
    title: { es: "Qutub Minar y Ruinas Históricas", en: "Qutub Minar & Historic Ruins" },
    location: { es: "Nueva Delhi", en: "New Delhi" },
    caption: {
      es: "«Victor nos explicó la fascinante historia de las dinastías de Delhi mientras las aves volaban sobre el minarete.»",
      en: "“Victor explained the fascinating history of Delhi's dynasties while birds circled over the minaret.”"
    },
    guest: "María & Gonzalo (Madrid)"
  },
  {
    id: "jal-mahal",
    img: "/images/gallery/jal-mahal.jpg",
    title: { es: "Jal Mahal — Palacio Flotante", en: "Jal Mahal — Floating Palace" },
    location: { es: "Jaipur, Rajastán", en: "Jaipur, Rajasthan" },
    caption: {
      es: "«Un momento mágico contemplando el palacio del agua al atardecer en Jaipur con nuestro coche y guía privado.»",
      en: "“A magical moment looking out at the water palace at sunset in Jaipur with our private car & guide.”"
    },
    guest: "Familia Ramos (Barcelona)"
  },
  {
    id: "humayun-tomb",
    img: "/images/gallery/humayun-tomb.jpg",
    title: { es: "Tumba de Humayun", en: "Humayun's Tomb" },
    location: { es: "Delhi", en: "Delhi" },
    caption: {
      es: "«El precursor del Taj Mahal impresiona aún más en persona. Todo organizado con tiempo para disfrutar sin prisa.»",
      en: "“The precursor to the Taj Mahal is even more impressive in person. Everything arranged unhurried.”"
    },
    guest: "Carlos & Elena (Valencia)"
  },
  {
    id: "taj-mahal-sunset",
    img: "/images/gallery/taj-mahal-sunset.jpg",
    title: { es: "Taj Mahal al Atardecer desde Mehtab Bagh", en: "Taj Mahal at Sunset from Mehtab Bagh" },
    location: { es: "Agra", en: "Agra" },
    caption: {
      es: "«Una perspectiva tranquila y distinta del Taj Mahal al atardecer sobre el río Yamuna. Inolvidable.»",
      en: "“A peaceful, unique perspective of the Taj Mahal at sunset across the Yamuna river. Unforgettable.”"
    },
    guest: "Sofía G. (Sevilla)"
  },
  {
    id: "hawa-mahal",
    img: "/images/gallery/hawa-mahal.jpg",
    title: { es: "Hawa Mahal al Anochecer", en: "Hawa Mahal at Dusk" },
    location: { es: "Jaipur, Rajastán", en: "Jaipur, Rajasthan" },
    caption: {
      es: "«Los colores del Palacio de los Vientos iluminado al anochecer son deslumbrantes.»",
      en: "“The colors of the illuminated Palace of Winds at dusk are mesmerizing.”"
    },
    guest: "David & Laura (Bilbao)"
  }
];

export default function GallerySection() {
  const t = useT();
  const [selectedIdx, setSelectedIdx] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIdx === null) return;
      if (e.key === "Escape") setSelectedIdx(null);
      if (e.key === "ArrowLeft") setSelectedIdx((i) => (i > 0 ? i - 1 : GALLERY_ITEMS.length - 1));
      if (e.key === "ArrowRight") setSelectedIdx((i) => (i < GALLERY_ITEMS.length - 1 ? i + 1 : 0));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx]);

  const activeItem = selectedIdx !== null ? GALLERY_ITEMS[selectedIdx] : null;

  return (
    <section className="section-cream">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">
              {t({ es: "Galería de Experiencias · Viajeros Reales", en: "Traveler Experiences · Guest Gallery" })}
            </span>
            <h2>
              {t({ es: "Momentos en ruta acompañados por Victor", en: "Moments on the road with Victor" })}
            </h2>
          </div>
          <p>
            {t({
              es: "Fotografías reales compartidas por viajeros en sus itinerarios privados por Delhi, Jaipur, Agra y el subcontinente.",
              en: "Real photographs shared by guests on their private itineraries across Delhi, Jaipur, Agra, and the subcontinent."
            })}
          </p>
        </div>

        <div className="gallery-grid reveal">
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={item.id}
              className={`gallery-card gallery-card-${idx + 1}`}
              onClick={() => setSelectedIdx(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setSelectedIdx(idx)}
            >
              <img src={item.img} alt={t(item.title)} loading="lazy" />
              <div className="gallery-card-overlay">
                <span className="gallery-badge">{t(item.location)}</span>
                <h4>{t(item.title)}</h4>
                <p>{t(item.caption)}</p>
                <span className="gallery-guest">— {item.guest}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeItem && (
        <div className="gallery-modal-backdrop" onClick={() => setSelectedIdx(null)}>
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="gallery-modal-close"
              aria-label="Close modal"
              onClick={() => setSelectedIdx(null)}
            >
              ✕
            </button>
            <button
              className="gallery-modal-nav prev"
              aria-label="Previous image"
              onClick={() => setSelectedIdx((i) => (i > 0 ? i - 1 : GALLERY_ITEMS.length - 1))}
            >
              ‹
            </button>
            <button
              className="gallery-modal-nav next"
              aria-label="Next image"
              onClick={() => setSelectedIdx((i) => (i < GALLERY_ITEMS.length - 1 ? i + 1 : 0))}
            >
              ›
            </button>

            <div className="gallery-modal-body">
              <div className="gallery-modal-image-wrap">
                <img src={activeItem.img} alt={t(activeItem.title)} />
              </div>
              <div className="gallery-modal-info">
                <span className="eyebrow" style={{ color: "var(--marigold-soft)" }}>{t(activeItem.location)}</span>
                <h3>{t(activeItem.title)}</h3>
                <p className="gallery-modal-quote">{t(activeItem.caption)}</p>
                <span className="gallery-modal-guest">— {activeItem.guest}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

import { useState, useEffect } from "react";
import { useT } from "../context/LangContext.jsx";

const GALLERY_ITEMS = [
  {
    id: "group-jama-masjid",
    img: "/images/gallery/group-jama-masjid.jpg",
    title: { es: "Grupo de Viajeros en Jama Masjid", en: "Travel Group at Jama Masjid" },
    location: { es: "Vieja Delhi", en: "Old Delhi" },
    caption: {
      es: "«Nuestro grupo explorando la majestuosa mezquita Jama Masjid con Victor. Una experiencia privada e inolvidable juntos.»",
      en: "“Our group exploring the majestic Jama Masjid mosque with Victor. A private and unforgettable experience together.”"
    },
    guest: "Grupo de Viajeros (España)"
  },
  {
    id: "traveler-rajasthan",
    img: "/images/gallery/traveler-rajasthan.jpg",
    title: { es: "Encuentros Culturales en Rajastán", en: "Cultural Encounters in Rajasthan" },
    location: { es: "Jaipur, Rajastán", en: "Jaipur, Rajasthan" },
    caption: {
      es: "«Compartir sonrisas con las mujeres locales en Jaipur. Victor nos conectó con la gente real de una forma entrañable.»",
      en: "“Sharing smiles with local women in Jaipur. Victor connected us with real people in a warm, genuine way.”"
    },
    guest: "Clara M. (Madrid)"
  },
  {
    id: "ganga-aarti-night",
    img: "/images/gallery/ganga-aarti-night.jpg",
    title: { es: "Ceremonia Ganga Aarti Nocturna", en: "Night Ganga Aarti Ceremony" },
    location: { es: "Dashashwamedh Ghat, Varanasi", en: "Dashashwamedh Ghat, Varanasi" },
    caption: {
      es: "«Observar el ritual del fuego y luces desde una barca al anochecer en el Ganges quita el aliento.»",
      en: "“Watching the ritual of fire and lights from a boat at dusk on the Ganges is breathtaking.”"
    },
    guest: "Isabel & Fernando (Valencia)"
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
    guest: "Sofía G. (Valencia)"
  },
  {
    id: "sadhu-yellow-robe",
    img: "/images/gallery/sadhu-yellow-robe.jpg",
    title: { es: "Monje en las Escalinatas del Ganges", en: "Monk on the Ganges Steps" },
    location: { es: "Varanasi", en: "Varanasi" },
    caption: {
      es: "«Caminar por los ghats de Varanasi al amanecer permite capturar estampas únicas de devoción y paz.»",
      en: "“Walking the ghats of Varanasi at sunrise allows capturing unique scenes of devotion and peace.”"
    },
    guest: "Rodrigo M. (Bilbao)"
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
  },
  {
    id: "sadhu-smiling",
    img: "/images/gallery/sadhu-smiling.jpg",
    title: { es: "Sonrisa y Color en la India Espiritual", en: "Smile & Color in Spiritual India" },
    location: { es: "Varanasi", en: "Varanasi" },
    caption: {
      es: "«La amabilidad de la gente local e itinerantes sagrados nos cautivó durante todo el recorrido.»",
      en: "“The friendliness of the local people and holy wanderers captivated us throughout the trip.”"
    },
    guest: "Carmen & Tomás (Alicante)"
  },
  {
    id: "varanasi-boat-sadhu",
    img: "/images/gallery/varanasi-boat-sadhu.jpg",
    title: { es: "Amanecer Espiritual en Varanasi", en: "Spiritual Sunrise in Varanasi" },
    location: { es: "Varanasi, Uttar Pradesh", en: "Varanasi, Uttar Pradesh" },
    caption: {
      es: "«Navegando al amanecer por los ghats sagrados del río Ganges. Una experiencia mística irrepetible.»",
      en: "“Sailing at sunrise along the sacred ghats of the Ganges River. A truly mystical experience.”"
    },
    guest: "Pedro & Lucía (Sevilla)"
  },
  {
    id: "elephant-eye",
    img: "/images/gallery/elephant-eye.jpg",
    title: { es: "Mirada Salvaje — Fauna en India", en: "Wild Gaze — Wildlife in India" },
    location: { es: "Parque Nacional Ranthambore", en: "Ranthambore National Park" },
    caption: {
      es: "«La conexión íntima con la naturaleza y fauna salvaje durante nuestras excursiones en la selva.»",
      en: "“The intimate connection with nature and wildlife during our jungle excursions.”"
    },
    guest: "Álvaro T. (Madrid)"
  },
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
    guest: "Javier R. (Zaragoza)"
  },
  {
    id: "sadhu-trishul",
    img: "/images/gallery/sadhu-trishul.jpg",
    title: { es: "Sadhu con Trishul a Orillas del Ganges", en: "Sadhu with Trishul by the Ganges" },
    location: { es: "Varanasi", en: "Varanasi" },
    caption: {
      es: "«Capturando la esencia mística del hinduismo a orillas del río sagrado en Varanasi.»",
      en: "“Capturing the mystical essence of Hinduism on the banks of the sacred river in Varanasi.”"
    },
    guest: "Marta & Marcos (Alicante)"
  },
  {
    id: "sadhu-marigold",
    img: "/images/gallery/sadhu-marigold.jpg",
    title: { es: "Retrato de Sadhu con Flores de Caléndula", en: "Sadhu Portrait with Marigold Flowers" },
    location: { es: "Varanasi", en: "Varanasi" },
    caption: {
      es: "«Conocer la devoción y tradiciones de los hombres sagrados de India con el respeto que inspira nuestro guía Victor.»",
      en: "“Learning about the devotion and traditions of India's holy men with the deep respect guided by Victor.”"
    },
    guest: "Familia Ramos (Barcelona)"
  },
  {
    id: "sadhu-dreadlocks",
    img: "/images/gallery/sadhu-dreadlocks.jpg",
    title: { es: "Tradición y Misticismo en India", en: "Tradition & Mysticism in India" },
    location: { es: "Varanasi", en: "Varanasi" },
    caption: {
      es: "«Fotografiando momentos únicos de vida y espiritualidad que jamás habríamos descubierto sin un guía local.»",
      en: "“Photographing unique moments of life and spirituality we would never have discovered without a local guide.”"
    },
    guest: "Hugo & Irene (San Sebastián)"
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
              es: "Fotografías reales e historias compartidas por nuestros viajeros durante sus recorridos privados por India.",
              en: "Real photographs and stories shared by our travelers during their private tours across India."
            })}
          </p>
        </div>

        <div className="gallery-grid reveal">
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={item.id}
              className={`gallery-card gallery-card-${(idx % 5) + 1}`}
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

import { useT } from "../context/LangContext.jsx";

export default function PhotoHeroCluster() {
  const t = useT();

  const satellites = [
    {
      id: "agra",
      img: "/images/hero/hero-agra-spice.jpg",
      posClass: "sat-top-left",
      title: { es: "Secretos de Agra", en: "Agra Secrets" },
      sub: { es: "Mercados de especias escondidos", en: "Hidden spice markets" },
      captionSide: "left"
    },
    {
      id: "kerala",
      img: "/images/hero/hero-kerala-backwaters.jpg",
      posClass: "sat-bottom-left",
      title: { es: "Canales de Kerala", en: "Kerala Backwaters" },
      sub: { es: "Silencio sobre el agua", en: "Silent water serenity" },
      captionSide: "right"
    },
    {
      id: "desert",
      img: "/images/hero/hero-desert-campfire.jpg",
      posClass: "sat-top-right",
      title: { es: "Fogatas del desierto", en: "Desert Campfires" },
      sub: { es: "Historias bajo la Vía Láctea", en: "Tales under the Milky Way" },
      captionSide: "left",
      hasCompass: true
    },
    {
      id: "odisha",
      img: "/images/hero/hero-odisha-tribal.jpg",
      posClass: "sat-bottom-right",
      title: { es: "Aldeas de Odisha", en: "Odisha Tribal Villages" },
      sub: { es: "Tierra de arte vivo", en: "Land of living art" },
      captionSide: "left"
    }
  ];

  return (
    <div className="hero-cluster">
      <svg className="hero-cluster-lines" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="goldLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e8a33d" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#c58a2d" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        {/* Center: (500, 250) */}
        {/* Top Left spoke */}
        <line x1="500" y1="250" x2="220" y2="100" stroke="url(#goldLineGrad)" strokeWidth="1.5" />
        {/* Bottom Left spoke */}
        <line x1="500" y1="250" x2="180" y2="390" stroke="url(#goldLineGrad)" strokeWidth="1.5" />
        {/* Top Right spoke */}
        <line x1="500" y1="250" x2="780" y2="100" stroke="url(#goldLineGrad)" strokeWidth="1.5" />
        {/* Bottom Right spoke */}
        <line x1="500" y1="250" x2="820" y2="390" stroke="url(#goldLineGrad)" strokeWidth="1.5" />
      </svg>

      <div className="hero-cluster-center">
        <div className="center-photo-ring"></div>
        <img src="/images/hero/hero-center-guide.jpg" alt={t({ es: "Guía con viajeros en India", en: "Guide with travelers in India" })} />
      </div>

      {satellites.map((s) => (
        <div className={`hero-satellite ${s.posClass}`} key={s.id}>
          {s.captionSide === "left" && (
            <div className="hero-satellite-caption caption-left">
              <b>{t(s.title)}:</b>
              <span>{t(s.sub)}</span>
            </div>
          )}
          <div className="hero-satellite-photo-wrap">
            <div className="hero-satellite-photo">
              <img src={s.img} alt={t(s.title)} />
            </div>
            {s.hasCompass && (
              <div className="satellite-badge compass-badge">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" stroke="#e8a33d" />
                  <polygon points="16,8 14,14 8,16 10,10" fill="#e8a33d" />
                </svg>
              </div>
            )}
          </div>
          {s.captionSide === "right" && (
            <div className="hero-satellite-caption caption-right">
              <b>{t(s.title)}:</b>
              <span>{t(s.sub)}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}


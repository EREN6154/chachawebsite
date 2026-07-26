import { useState } from "react";
import { CARD_ICONS, TOUR_ICON, gradientFor } from "../data/icons.js";
import { useT } from "../context/LangContext.jsx";

/**
 * Shows a real photo if one exists at tour.image; if that file is missing
 * (404 — e.g. before real photos have been added), it quietly falls back
 * to a brand-consistent line-art illustration instead of a broken image.
 */
export default function TourMedia({ tour, className = "", children }) {
  const [broken, setBroken] = useState(false);
  const t = useT();
  const icon = CARD_ICONS[TOUR_ICON[tour.slug] || "taj"];

  return (
    <div className={`tour-media ${className}`} style={{ background: gradientFor(tour.slug) }}>
      {!broken && (
        <img
          src={tour.image}
          alt={t(tour.title)}
          loading="lazy"
          onError={() => setBroken(true)}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
      )}
      {broken && (
        <div
          style={{
            position: "absolute", inset: 0, display: "flex", alignItems: "center",
            justifyContent: "center", color: "#F1E7D2", opacity: 0.85, width: "56%", margin: "auto"
          }}
          dangerouslySetInnerHTML={{ __html: icon }}
        />
      )}
      {children}
    </div>
  );
}

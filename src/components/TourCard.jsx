import { Link } from "react-router-dom";
import TourMedia from "./TourMedia.jsx";
import { useT } from "../context/LangContext.jsx";

export default function TourCard({ tour }) {
  const t = useT();
  return (
    <Link to={`/viajes/${tour.slug}`} className="tour-card reveal">
      <TourMedia tour={tour} className="tour-card-media">
        <span className="tour-card-region">{t(tour.region)}</span>
      </TourMedia>
      <div className="tour-card-body">
        <h3>{t(tour.title)}</h3>
        <p className="tour-card-route">{tour.cities.join(" · ")}</p>
        <p className="tour-card-route">
          {tour.duration} {t({ es: "días", en: "days" })} / {tour.nights} {t({ es: "noches", en: "nights" })}
        </p>
        <div className="tour-card-foot">
          <span style={{ fontSize: 13, fontFamily: "var(--font-mono)", color: "var(--sandstone)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            {t({ es: "Tour Privado", en: "Private Tour" })}
          </span>
          <div className="tour-card-arrow">→</div>
        </div>
      </div>
    </Link>
  );
}

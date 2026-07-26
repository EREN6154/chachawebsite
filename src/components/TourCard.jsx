import { Link } from "react-router-dom";
import TourMedia from "./TourMedia.jsx";
import { useT } from "../context/LangContext.jsx";
import { maskPrice } from "../utils/priceMask.js";

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
          <div className="tour-card-price"><span>{t({ es: "Desde", en: "From" })}</span><b>USD {maskPrice(tour.priceFrom)}</b></div>
          <div className="tour-card-arrow">→</div>
        </div>
      </div>
    </Link>
  );
}

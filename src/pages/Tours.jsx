import { useMemo, useState } from "react";
import { TOURS } from "../data/tours.js";
import TourCard from "../components/TourCard.jsx";
import MonumentMotif from "../components/MonumentMotif.jsx";
import useReveal from "../hooks/useReveal.js";
import { useT } from "../context/LangContext.jsx";

export default function Tours() {
  useReveal();
  const t = useT();
  const [search, setSearch] = useState("");
  const [regionKey, setRegionKey] = useState("all");
  const [duration, setDuration] = useState("all");

  // Use the Spanish text as a stable key so filtering doesn't reset when the language toggle changes.
  const regionOptions = useMemo(() => {
    return [
      { es: "India", en: "India" },
      { es: "Nepal", en: "Nepal" },
      { es: "Bután", en: "Bhutan" },
      { es: "Sri Lanka", en: "Sri Lanka" }
    ];
  }, []);

  const filtered = useMemo(() => {
    let list = TOURS.slice();
    const q = search.toLowerCase().trim();
    if (q) {
      list = list.filter(tr =>
        t(tr.title).toLowerCase().includes(q) ||
        tr.cities.join(" ").toLowerCase().includes(q) ||
        t(tr.region).toLowerCase().includes(q)
      );
    }
    if (regionKey !== "all") list = list.filter(tr => tr.region.es.includes(regionKey));
    if (duration !== "all") {
      const [min, max] = duration.split("-").map(Number);
      list = list.filter(tr => tr.duration >= min && tr.duration <= (max || 999));
    }
    return list;
  }, [search, regionKey, duration, t]);

  return (
    <>
      <header className="page-hero" style={{ background: "var(--indigo)" }}>
        <MonumentMotif opacity={0.5} />
        <div className="container page-hero-inner">
          <span className="eyebrow">{t({ es: "Catálogo completo", en: "Full catalog" })}</span>
          <h1>{t({ es: "Trece itinerarios, tres regiones, un mismo cuidado por el detalle.", en: "Thirteen itineraries, three regions, the same care for detail." })}</h1>
        </div>
      </header>

      <section style={{ paddingTop: 60 }}>
        <div className="container">
          <div className="filter-bar reveal">
            <input
              type="text"
              placeholder={t({ es: "Buscar por ciudad o nombre del viaje…", en: "Search by city or tour name…" })}
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <select value={regionKey} onChange={e => setRegionKey(e.target.value)}>
              <option value="all">{t({ es: "Todas las regiones", en: "All regions" })}</option>
              {regionOptions.map(r => <option key={r.es} value={r.es}>{t(r)}</option>)}
            </select>
            <select value={duration} onChange={e => setDuration(e.target.value)}>
              <option value="all">{t({ es: "Cualquier duración", en: "Any duration" })}</option>
              <option value="1-7">{t({ es: "Hasta 7 días", en: "Up to 7 days" })}</option>
              <option value="8-10">8–10 {t({ es: "días", en: "days" })}</option>
              <option value="11-999">11+ {t({ es: "días", en: "days" })}</option>
            </select>
          </div>
          <span className="result-count">
            {filtered.length} {filtered.length === 1 ? t({ es: "viaje encontrado", en: "trip found" }) : t({ es: "viajes encontrados", en: "trips found" })}
          </span>
          <div className="tour-grid">
            {filtered.map(tr => <TourCard key={tr.slug} tour={tr} />)}
          </div>
        </div>
      </section>
    </>
  );
}

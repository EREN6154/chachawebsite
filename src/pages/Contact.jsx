import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { TOURS } from "../data/tours.js";
import MonumentMotif from "../components/MonumentMotif.jsx";
import useReveal from "../hooks/useReveal.js";
import { useT } from "../context/LangContext.jsx";

const BRAND_PHONE = "918949454247";
const BRAND_EMAIL = "vickyguide951@gmail.com";
// Get a free key at https://web3forms.com (no signup email verification needed
// beyond confirming your inbox) and paste it here to enable direct email
// delivery with no backend of your own. Until you do, the form falls back
// to opening the visitor's email app instead — it still works either way.
const WEB3FORMS_KEY = "19d998c1-d89c-4d04-86a0-35689f44064a";

export default function Contact() {
  useReveal();
  const t = useT();
  const [params] = useSearchParams();
  const preselected = params.get("tour") || "";
  const [status, setStatus] = useState(null); // null | "sending" | "sent" | "fallback"
  const [waUrl, setWaUrl] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = Object.fromEntries(new FormData(form).entries());
    const tourLine = data.tour ? `${t({ es: "Tour de interés", en: "Tour of interest" })}: ${data.tour}\n` : "";
    const body =
`${t({ es: "Nombre", en: "Name" })}: ${data.nombre || ""}
Email: ${data.email || ""}
${t({ es: "Teléfono", en: "Phone" })}: ${data.telefono || ""}
${tourLine}
${t({ es: "Mensaje", en: "Message" })}:
${data.mensaje || ""}`;

    const subject = `${t({ es: "Nueva consulta", en: "New inquiry" })} — ${data.nombre || (t({ es: "Cliente", en: "Client" }))}`;
    const wa = `https://wa.me/${BRAND_PHONE}?text=${encodeURIComponent(subject + "\n\n" + body)}`;
    setWaUrl(wa);

    if (WEB3FORMS_KEY && WEB3FORMS_KEY !== "REPLACE_WITH_YOUR_WEB3FORMS_KEY") {
      setStatus("sending");
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ access_key: WEB3FORMS_KEY, subject, ...data })
        });
        const result = await res.json();
        setStatus(result.success ? "sent" : "fallback");
      } catch {
        setStatus("fallback");
      }
    } else {
      // No Web3Forms key configured yet — use mailto so the form still works today.
      const mailtoUrl = `mailto:${BRAND_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus("fallback");
      window.location.href = mailtoUrl;
    }
  }

  return (
    <>
      <header className="page-hero" style={{ background: "var(--ink)" }}>
        <MonumentMotif opacity={0.4} />
        <div className="container page-hero-inner">
          <span className="eyebrow">{t({ es: "Planifica tu viaje", en: "Plan your trip" })}</span>
          <h1>{t({ es: "Cuéntanos qué quieres ver en India.", en: "Tell us what you want to see in India." })}</h1>
        </div>
      </header>

      <section>
        <div className="container">
          <div className="enquiry reveal" style={{ maxWidth: 820, margin: "0 auto" }}>
            <h3>{t({ es: "Cuéntanos qué quieres ver en India", en: "Tell us what you want to see in India" })}</h3>
            <p className="sub">{t({ es: "Respondemos por WhatsApp o correo en menos de 24 horas, en español o inglés.", en: "We reply via WhatsApp or email in less than 24 hours, in Spanish or English." })}</p>
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="field">
                  <label>{t({ es: "Nombre completo", en: "Full name" })}</label>
                  <input type="text" name="nombre" required />
                </div>
                <div className="field">
                  <label>{t({ es: "Correo electrónico", en: "Email" })}</label>
                  <input type="email" name="email" required />
                </div>
                <div className="field">
                  <label>{t({ es: "Teléfono / WhatsApp", en: "Phone / WhatsApp" })}</label>
                  <input type="tel" name="telefono" />
                </div>
                <div className="field">
                  <label>{t({ es: "Tour de interés", en: "Tour of interest" })}</label>
                  <select name="tour" defaultValue={preselected}>
                    <option value="">{t({ es: "Aún no lo sé", en: "Not sure yet" })}</option>
                    {TOURS.map(tr => <option key={tr.slug} value={t(tr.title)}>{t(tr.title)}</option>)}
                  </select>
                </div>
                <div className="field full">
                  <label>{t({ es: "Mensaje", en: "Message" })}</label>
                  <textarea name="mensaje" placeholder={t({ es: "Fechas aproximadas, número de viajeros…", en: "Approximate dates, number of travelers…" })}></textarea>
                </div>
              </div>
              <button type="submit" className="btn btn-dark" style={{ marginTop: 18 }} disabled={status === "sending"}>
                {status === "sending" ? t({ es: "Enviando…", en: "Sending…" }) : t({ es: "Enviar consulta", en: "Send inquiry" })}
              </button>
              <span className="form-note" style={{ display: "block", marginTop: 14 }}>
                {t({ es: "Nunca compartimos tus datos. Respuesta garantizada en 24 horas.", en: "We never share your data. Guaranteed response within 24 hours." })}
              </span>

              {status === "sent" && (
                <div style={{ marginTop: 16, background: "var(--teal)", color: "#fff", padding: "14px 18px", borderRadius: 2, fontSize: 14 }}>
                  {t({ es: "¡Gracias! Tu consulta fue enviada. Te responderemos pronto.", en: "Thank you! Your inquiry has been sent. We'll get back to you soon." })}
                </div>
              )}
              {status === "fallback" && (
                <div style={{ marginTop: 16, fontSize: 14, color: "var(--ink-soft)" }}>
                  {t({ es: "Se abrió tu app de correo para enviar la consulta.", en: "Your email app should have opened to send the inquiry." })}{" "}
                  {waUrl && (
                    <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: 14, display: "inline-flex" }}>
                      {t({ es: "Enviar por WhatsApp en su lugar →", en: "Send via WhatsApp instead →" })}
                    </a>
                  )}
                </div>
              )}
            </form>
          </div>

          <div className="text-center" style={{ marginTop: 36 }}>
            <a href="https://wa.me/918949454247" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              {t({ es: "O escríbenos directo por WhatsApp", en: "Or write to us directly via WhatsApp" })}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

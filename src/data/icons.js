// Illustrated line-art icons used as a branded placeholder behind real photos.
// If a real photo exists at tour.image, it's shown on top; if it 404s, it
// hides itself automatically and this illustration shows through underneath.

export const CARD_ICONS = {
  taj: `<svg viewBox="0 0 120 120" fill="none"><path d="M60 100V60M40 100V70a20 20 0 0140 0v30" stroke="currentColor" stroke-width="2"/><path d="M60 60c-8 0-14-8-14-18s6-22 14-22 14 12 14 22-6 18-14 18z" stroke="currentColor" stroke-width="2"/><circle cx="60" cy="16" r="3" stroke="currentColor" stroke-width="2"/><path d="M20 100h80M30 100V80h12v20M78 100V80h12v20" stroke="currentColor" stroke-width="2"/></svg>`,
  fort: `<svg viewBox="0 0 120 120" fill="none"><path d="M15 100V50l10-10 10 10v-8l10-10 10 10v-8l10-10 10 10v-8l10-10 10 10v-8l10 10v54z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M15 100h90" stroke="currentColor" stroke-width="2"/></svg>`,
  elephant: `<svg viewBox="0 0 120 120" fill="none"><path d="M30 95c-8 0-14-7-14-16 0-12 8-20 18-24 6-14 20-22 34-22 18 0 32 14 32 32 0 6-2 11-5 15l3 15h-14l-2-10c-3 1-6 1-9 1H50l-2 9H34z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M40 55c-4 4-6 10-4 18" stroke="currentColor" stroke-width="2"/><circle cx="70" cy="45" r="2.5" fill="currentColor"/></svg>`,
  ghat: `<svg viewBox="0 0 120 120" fill="none"><path d="M10 80h100M20 80l6-10h68l6 10M30 70l4-10h52l4 10" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M50 60V30c0-6 4-10 10-10s10 4 10 10v30" stroke="currentColor" stroke-width="2"/><path d="M10 92c8-4 16 4 24 0s16-4 24 0 16-4 24 0 16-4 24 0" stroke="currentColor" stroke-width="2"/></svg>`,
  backwater: `<svg viewBox="0 0 120 120" fill="none"><path d="M15 70c30-14 60 10 90-4v20c-30 14-60-10-90 4z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M40 70V40M40 40c-8 0-12-6-12-6s10-6 18 0c4-6 14-6 14-6s-2 10-10 12" stroke="currentColor" stroke-width="2"/><path d="M10 90c8-4 16 4 24 0s16-4 24 0 16-4 24 0 16-4 24 0" stroke="currentColor" stroke-width="2"/></svg>`,
  palace: `<svg viewBox="0 0 120 120" fill="none"><path d="M60 20c-6 0-10 6-10 12h20c0-6-4-12-10-12z" stroke="currentColor" stroke-width="2"/><path d="M25 100V55h15V45h10V35h20v10h10v10h15v45z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M25 100h70" stroke="currentColor" stroke-width="2"/></svg>`,
  tribal: `<svg viewBox="0 0 120 120" fill="none"><circle cx="60" cy="60" r="34" stroke="currentColor" stroke-width="2"/><path d="M60 26v10M60 84v10M26 60h10M84 60h10M38 38l7 7M75 75l7 7M82 38l-7 7M45 75l-7 7" stroke="currentColor" stroke-width="2"/><circle cx="60" cy="60" r="10" stroke="currentColor" stroke-width="2"/></svg>`,
  tiger: `<svg viewBox="0 0 120 120" fill="none"><ellipse cx="60" cy="65" rx="34" ry="20" stroke="currentColor" stroke-width="2"/><circle cx="34" cy="50" r="10" stroke="currentColor" stroke-width="2"/><path d="M46 62l14 8M50 70l10 4M56 55l12 10" stroke="currentColor" stroke-width="1.6"/></svg>`
};

export const TOUR_ICON = {
  "triangulo-dorado-clasico": "taj",
  "triangulo-dorado-mandawa": "fort",
  "triangulo-dorado-ranthambore": "tiger",
  "triangulo-dorado-khajuraho-varanasi": "ghat",
  "delhi-agra-jaipur-varanasi": "ghat",
  "golden-triangle-culture-tour": "ghat",
  "royal-rajasthan": "elephant",
  "mini-rajasthan": "fort",
  "lo-mejor-de-la-india": "taj",
  "karnataka-tamil-nadu-gran-sur": "palace",
  "sur-de-india-clasico": "backwater",
  "la-danza-de-shiva": "palace",
  "odisha-chhattisgarh-tribal": "tribal"
};

const GRADIENTS = [
  "linear-gradient(135deg,#28524C,#181B2E)",
  "linear-gradient(135deg,#9B3B21,#181B2E)",
  "linear-gradient(135deg,#181B2E,#33375A)",
  "linear-gradient(135deg,#C6952C,#181B2E)"
];

export function gradientFor(slug) {
  let h = 0;
  for (const c of slug) h = (h * 31 + c.charCodeAt(0)) % GRADIENTS.length;
  return GRADIENTS[h];
}

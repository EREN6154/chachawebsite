VIAJE INDIA PLANETA — React version (merged design)
=====================================================

WHAT'S IN THIS VERSION
-------------------------
- Same 13 tours, now fully bilingual (Spanish/English) with a toggle in
  the top nav (remembers the visitor's choice next time they return).
- Merged visual design: indigo/marigold/sandstone palette, Fraunces +
  Work Sans + IBM Plex Mono type, monument-skyline hero motif.
- Real working contact form via Web3Forms (see setup below) with an
  automatic fallback to opening the visitor's email app, plus a
  WhatsApp button, so it works even before you set anything up.

OPTION A — Just want to see it, no installs
------------------------------------------------
Use the "dist-listo-para-publicar" folder delivered alongside this
project. Double-click index.html inside it, or drag the folder onto
https://app.netlify.com/drop to publish it for free in seconds.

OPTION B — Want to edit the code
--------------------------------------
Requires Node.js (https://nodejs.org, LTS version).

  npm install       (first time only)
  npm run dev        (live preview while editing)
  npm run build      (produces a fresh dist/ folder to publish)

HOW TO TURN ON REAL EMAIL DELIVERY (Web3Forms)
--------------------------------------------------
Right now the contact form opens the visitor's email app when
submitted (works everywhere, no setup). To have it send email
directly instead:

1. Go to https://web3forms.com and enter your email — no account
   needed, they email you an access key instantly.
2. Open: src/pages/Contact.jsx
3. Find this line near the top:
     const WEB3FORMS_KEY = "REPLACE_WITH_YOUR_WEB3FORMS_KEY";
4. Paste your key between the quotes.
5. Run `npm run build` again (or ask me to do it) and re-publish.

That's it — no server, no database, completely free for normal
volumes of enquiries.

HOW TO ADD YOUR REAL PHOTOS
--------------------------------
Go to: public/images/tours/ — there's a README.txt there with the
exact filename each tour expects. Drop in a photo with that name and
it replaces the illustrated placeholder automatically. Or just send
me the photos and I'll place them for you.

HOW TO CHANGE TEXT, PRICES, OR ADD A TOUR
----------------------------------------------
Everything lives in one file: src/data/tours.js
Every piece of text is written as a {es, en} pair — tell me what to
change and I'll edit it directly, in both languages.

PROJECT STRUCTURE
--------------------
src/pages/            Home, Tours, Tour detail, About, Contact
src/components/       Navbar, Footer, TourCard, LangToggle, etc.
src/context/          Language (ES/EN) state, shared app-wide
src/data/tours.js      All 13 tours' bilingual content — edit here
src/index.css          All site styling
public/images/tours/   Drop real photos here (see its README.txt)

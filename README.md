# zjoskekanters.nl

De website van Zjoske Kanters: lichaamsgerichte (trauma)therapie en begeleiding in Breda.
Een statische site (HTML, CSS en een beetje JavaScript), zonder build-stap. Je kunt hem met Claude bijhouden.

## Wat zit waar

| Bestand | Inhoud |
|---|---|
| `index.html` | Home |
| `sessies.html` | BRTT, TRB, combinatie, Playdate, stilteretraite en de sessiewijzer |
| `trajecten.html` | Way to Freedom 1.0 en 2.0, Sparkly Frequency Lane, On location |
| `voor-thuis.html` | Meditaties, gratis meditatie, Stress release online |
| `zakelijk.html` | Leiders en professionals, Play & Connect voor teams |
| `over.html` | Het verhaal van Zjoske |
| `kennismaken.html` | Adventure Call, contactformulier en alle veelgestelde vragen |
| `main.js` | **Menu, footer en contactgegevens.** Pas je ze hier aan, dan verandert het op elke pagina. Ook de ademoefening en de sessiewijzer staan hier. |
| `style.css` | Kleuren, letters, vormen en beweging. De huisstijlkleuren staan bovenaan. |
| `img/` | Foto's en logo |
| `fonts/` | Hier hoort TAN Meringue in (zie hieronder) |

## Font: TAN Meringue

De koppen gebruiken **TAN Meringue**, een betaald font. De fontbestanden staan bewust niet in deze openbare repository.
Zet `TanMeringue.woff2` en `TanMeringue.ttf` in de map `fonts/` op de plek waar de site gehost wordt.
Zonder die bestanden valt de site terug op Fraunces.

## Zo pas je iets aan (met Claude)

Open deze repository in Claude en zeg in je eigen woorden wat je wilt. Bijvoorbeeld:

- "Verander de prijs van de BRTT-sessie naar €275."
- "Zet de Playdate weer open: nieuwe datum 14 maart, 10:00 tot 13:00."
- "Voeg een nieuwe meditatie toe: Grounding in 7 minuten, €11, met deze tekst: …"
- "Zet deze nieuwe review van Sanne op de homepage."

In `CLAUDE.md` staan de huisstijlregels die Claude daarbij aanhoudt.

## Online zetten

Elke statische host werkt, bijvoorbeeld GitHub Pages, Netlify of Cloudflare Pages. De map is de site, zonder build-stap.
Koppel daarna het domein zjoskekanters.nl.

## Nog te koppelen (deed Wix eerst)

| Functie | Voorstel |
|---|---|
| Afspraak plannen (Adventure Call, sessies) | Cal.com of Calendly: link achter de knoppen |
| Meditaties verkopen en downloaden | Stripe Payment Links of Lemon Squeezy |
| Nieuwsbrief en gratis meditatie | MailerLite of Kit |
| Contactformulier | Formspree of Netlify Forms |
| Online programma / challenge | Eigen cursusplatform |

De formulieren tonen nu een bevestiging, maar versturen nog niets.
De knoppen "Bestel" en "Boek" sturen naar het contactformulier en vullen daar al in wat iemand koos.

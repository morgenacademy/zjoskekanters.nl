# Werken aan zjoskekanters.nl

Statische site, geen build-stap. Zjoske (de eigenaar) is geen ontwikkelaar: zij vraagt wijzigingen in gewone taal.
Laat na een wijziging altijd zien hoe het eruitziet, en leg in één of twee zinnen uit wat er veranderd is.

## Huisstijl (niet van afwijken zonder dat Zjoske erom vraagt)

- **Merk in één zin:** kalmte + speelsheid.
- **Kleuren** (uit haar kleurenpalet; tokens staan bovenaan `style.css`):
  - Basis: aardetinten. Bordeaux `#7d0500`, bruin `#884133`, poederroze `#ca817b`, beige `#d9bda9`, off-white `#f8ebde`.
  - Accent: roze `#fb295a` en oranje `#fc8103`. Alleen gebruiken voor knoppen, hartjes, één accentwoord per kop of een gloed. Nooit voor hele vlakken.
- **Lettertypes:**
  - TAN Meringue (`--f-display`) alleen voor koppen, grote cijfers, prijzen, quotes, de lopende band en de handtekening.
  - Montserrat (`--f-body`) voor al het andere.
  - Een accentwoord in een kop zet je in `<em>`; dat wordt roze, met een krul eronder.
- **Foto's:** grote afgeronde vormen (boog `.arch`, `.photo`), soms als collage (`.collage`).
- **Toon:** warm, nuchter, met een knipoog. Zjoske schrijft in de jij-vorm, soms met een Engels zinnetje. Geen zweverige taal.

## Structuur

- Menu, footer en contactgegevens staan op één plek: de constanten `CONTACT` en `MENU` bovenin `main.js`. Header en footer worden daar in elke pagina gezet (`<header data-header>`, `<footer data-footer>`).
- Herbruikbare blokken staan in `style.css`:
  - `.head`: sectiekop met label, titel en toelichting.
  - `.detail`: sessie- of trajectblok met `aside` en `.facts`.
  - `.product`: kaart voor een meditatie of programma.
  - `.quote`: review.
  - `.steps`: genummerde stappen. Alleen gebruiken voor een echte volgorde.
  - `.faq details`: veelgestelde vraag.
- Nieuwe pagina: kopieer de `<head>` van een bestaande pagina, voeg de pagina toe aan `MENU` in `main.js`.
- Animaties en beweging respecteren `prefers-reduced-motion`. Houd dat zo.

## Openstaande punten

- **Prijzen:** de prijzen in haar Word-documenten en op de oude Wix-site verschillen hier en daar. Check bij twijfel met Zjoske.
- **Font:** TAN Meringue is een betaald font en staat niet in deze openbare repo (`.gitignore`). Het hoort in `fonts/` op de host.

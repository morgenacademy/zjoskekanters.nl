/* =========================================================
   ZJOSKE KANTERS — gedeeld script voor alle pagina's
   - MENU en FOOTER staan hieronder op één plek: pas je ze hier
     aan, dan verandert het op elke pagina.
   - CONTACT: telefoon, mail en adres staan in CONTACT.
   ========================================================= */

const CONTACT = {
  adres: "Spinveld 62, 4815 HT Breda",
  mail: "info@zjoskekanters.nl",
  tel: "+31 6 40285436",
  whatsapp: "https://wa.me/31640285436",
  instagram: "https://www.instagram.com/zjoskekanters",
  insightTimer: "https://insighttimer.com/",
};

const MENU = [
  { href: "index.html", label: "Home" },
  { href: "sessies.html", label: "Sessies" },
  { href: "trajecten.html", label: "Trajecten" },
  { href: "voor-thuis.html", label: "Voor thuis" },
  { href: "zakelijk.html", label: "Zakelijk" },
  { href: "over.html", label: "Over Zjoske" },
];

const LOGO = `<svg role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1552 758"><path fill="currentColor" fill-rule="evenodd" d="M401.5,756.9C390.7,755.8 358.0,748.8 358.0,747.5C358.0,747.4 361.2,740.6 365.1,732.4C432.0,592.3 453.7,462.3 429.4,346.6C417.6,290.3 394.0,227.2 363.6,170.1C360.0,163.2 357.0,157.5 357.0,157.3C357.0,157.1 386.1,157.0 421.6,157.0C482.7,157.0 486.2,157.1 485.5,158.7C482.6,166.3 474.5,192.0 471.6,203.0C460.7,244.8 456.5,279.7 456.5,329.5C456.5,374.4 458.2,390.0 471.5,470.0C482.9,538.9 484.9,555.4 485.7,591.5C486.5,626.0 484.8,643.3 477.9,670.3C471.9,694.5 458.1,726.5 444.7,748.0L439.4,756.5L434.0,757.2C426.7,758.0 411.3,757.9 401.5,756.9ZM613.5,607.6C566.5,598.4 528.9,550.2 510.5,475.5C498.8,428.1 495.9,365.8 503.0,314.9C515.5,225.2 553.9,165.7 608.5,151.4C618.8,148.7 641.7,148.9 652.2,151.8C689.1,161.9 718.6,193.2 738.1,243.3C764.9,312.3 767.0,420.2 743.0,495.5C723.5,556.4 690.6,595.5 649.4,606.5C641.2,608.7 622.2,609.3 613.5,607.6ZM850.0,607.9C814.3,606.0 770.8,602.1 769.5,600.8C769.2,600.5 771.3,593.8 774.1,585.9C784.5,556.4 793.9,520.3 801.5,480.5C803.5,470.1 805.3,461.4 805.4,461.2C805.6,461.1 807.4,463.7 809.5,467.1C827.5,496.3 867.1,531.8 899.4,547.5C938.2,566.5 954.4,557.5 959.1,514.0C961.2,494.5 959.1,475.7 953.0,460.8C940.6,430.3 918.4,407.6 854.0,359.5C805.3,323.1 787.2,305.5 776.5,284.1C765.3,261.7 766.6,235.1 780.1,210.2C795.5,181.5 828.6,159.3 867.7,151.3C880.7,148.6 915.8,148.9 942.5,151.9C976.8,155.7 979.1,155.9 994.1,156.6L1008.7,157.3L1004.3,169.9C997.3,189.8 987.6,224.6 982.5,248.0C980.0,259.8 977.6,270.8 977.2,272.3L976.5,275.2L963.5,264.9C920.0,230.8 876.1,208.8 838.3,202.4C821.3,199.5 815.2,201.4 809.2,211.3C802.8,221.8 799.2,246.0 802.0,259.4C803.9,268.4 811.0,281.3 820.4,292.5C834.1,308.8 851.5,323.6 903.6,363.2C938.4,389.6 946.9,396.7 964.5,414.4C993.8,443.9 1005.0,465.5 1005.0,492.5C1005.0,543.2 972.8,589.0 927.2,603.4C909.3,609.0 890.4,610.1 850.0,607.9ZM1412.5,608.3C1363.0,601.4 1321.9,551.8 1303.5,476.7C1296.4,447.5 1293.2,421.0 1292.3,384.5C1289.0,245.5 1342.7,148.7 1422.9,149.0C1487.3,149.3 1537.6,217.8 1549.5,321.5C1551.6,339.8 1552.3,338.0 1543.2,338.0C1531.9,338.0 1510.5,339.8 1495.2,342.0C1416.6,353.5 1375.0,386.3 1380.9,432.0C1382.9,447.6 1388.0,461.0 1401.1,484.7C1425.8,529.2 1452.7,553.8 1479.9,556.6C1490.6,557.8 1495.6,554.5 1500.9,543.0C1508.7,526.1 1512.2,485.2 1509.0,447.5C1508.5,441.4 1507.8,432.8 1507.4,428.2L1506.7,420.0L1528.9,420.0C1547.5,420.0 1551.0,420.2 1551.0,421.4C1551.0,422.2 1550.3,428.2 1549.5,434.7C1538.3,520.8 1503.1,584.1 1456.0,602.9C1442.8,608.1 1426.1,610.2 1412.5,608.3ZM12.3,598.2C10.6,591.9 11.6,552.9 13.8,538.5C22.2,483.8 44.9,433.8 86.5,378.0C105.8,352.1 121.1,334.9 160.5,295.0C209.9,244.9 226.6,224.8 243.9,194.6C280.6,130.3 259.6,88.0 202.2,110.6C160.9,126.9 105.3,180.8 63.5,245.3C60.8,249.5 58.3,253.0 57.9,253.0C57.6,253.0 56.8,247.7 56.1,241.3C50.2,186.0 32.1,119.0 6.2,55.6L0.1,40.8L3.3,41.4C9.1,42.4 61.1,47.9 80.0,49.4C148.4,55.1 211.7,53.7 291.0,44.9C306.1,43.2 319.6,41.6 321.1,41.3C324.5,40.7 324.7,41.8 325.6,64.5C328.0,125.1 308.8,175.8 264.8,225.0C260.2,230.2 244.0,246.4 228.9,261.0C182.7,305.7 172.0,316.9 152.3,341.5C98.5,408.7 78.6,476.7 107.4,494.5C120.3,502.4 143.3,495.7 168.4,476.6C194.7,456.8 226.4,420.5 253.5,379.2C257.9,372.5 261.8,367.0 262.1,367.0C262.4,367.0 263.2,371.8 263.9,377.8C266.9,403.8 274.9,438.6 284.4,467.3C294.6,498.0 304.8,521.7 329.0,570.1C337.3,586.6 344.0,600.4 343.8,600.5C343.6,600.7 338.8,600.2 333.0,599.5C301.6,595.4 255.3,591.5 220.0,589.9C164.5,587.5 83.6,591.4 24.7,599.5C18.8,600.3 13.7,601.0 13.5,601.0C13.2,601.0 12.7,599.8 12.3,598.2ZM1027.0,600.5C1027.0,600.2 1029.4,592.6 1032.4,583.7C1054.6,517.1 1062.0,439.2 1053.0,366.0C1050.3,344.3 1048.3,331.2 1040.1,281.2C1029.2,215.7 1026.8,193.0 1026.7,156.5C1026.6,131.8 1027.7,119.5 1031.5,100.5C1037.6,70.1 1048.5,42.5 1065.7,13.8L1073.3,1.2L1083.4,0.5C1094.4,-0.2 1114.5,1.2 1127.4,3.6C1134.5,4.9 1154.1,9.8 1154.8,10.4C1154.9,10.6 1150.8,19.4 1145.6,30.1C1108.1,107.9 1086.3,177.1 1077.6,246.5C1071.8,292.4 1073.1,348.7 1081.0,395.1C1091.2,454.7 1111.5,513.7 1143.5,576.8L1155.8,601.0L1091.4,601.0C1056.0,601.0 1027.0,600.8 1027.0,600.5ZM1162.0,600.7C1162.0,600.5 1163.8,593.3 1165.9,584.8C1179.7,530.7 1182.4,459.1 1172.1,419.0C1165.9,394.6 1155.4,378.9 1141.0,372.2C1136.3,370.0 1133.6,369.5 1122.0,369.0C1100.4,367.9 1093.0,363.0 1093.0,349.7C1093.0,335.4 1103.9,324.3 1133.1,308.6C1161.7,293.4 1173.4,272.9 1174.7,236.4C1175.5,214.4 1172.9,195.9 1165.4,169.7C1163.5,163.2 1162.0,157.7 1162.0,157.4C1162.0,157.2 1189.5,157.0 1223.0,157.0C1256.5,157.0 1284.0,157.2 1284.0,157.5C1284.0,157.8 1282.6,164.8 1280.9,173.1C1271.9,218.1 1254.2,249.3 1223.8,274.2C1204.2,290.3 1187.8,299.8 1153.9,315.0C1128.4,326.4 1122.6,329.6 1115.3,336.7C1110.6,341.2 1110.0,342.3 1110.0,345.8C1110.0,354.7 1117.7,355.9 1144.8,351.3C1166.8,347.6 1183.2,347.6 1194.6,351.3C1233.6,364.2 1259.0,414.7 1284.9,531.5C1288.5,547.7 1299.0,599.1 1299.0,600.4C1299.0,600.8 1268.2,601.0 1230.5,601.0C1192.8,601.0 1162.0,600.8 1162.0,600.7ZM694.4,555.6C701.1,552.8 706.2,543.9 709.7,528.6C712.3,517.5 712.0,477.5 709.2,456.5C694.8,349.0 650.5,247.0 603.7,213.6C586.9,201.6 566.9,197.7 558.2,204.7C527.7,229.2 549.3,375.4 597.6,471.9C625.2,527.1 655.6,556.2 686.3,556.9C688.9,557.0 692.5,556.4 694.4,555.6ZM1366.5,390.9C1373.6,380.1 1392.1,363.4 1409.5,352.0C1420.4,344.9 1445.1,333.0 1458.5,328.4C1464.5,326.3 1469.7,324.5 1469.9,324.3C1470.5,323.9 1460.5,301.2 1453.4,287.0C1426.6,233.3 1393.5,201.9 1363.4,201.6C1353.4,201.5 1349.6,203.9 1345.0,213.1C1339.3,224.3 1338.5,229.8 1338.6,258.0C1338.6,286.4 1339.6,295.2 1347.1,332.5C1352.0,357.2 1361.9,395.0 1363.4,395.0C1363.6,395.0 1365.0,393.1 1366.5,390.9ZM405.0,126.6C379.4,121.2 362.0,104.1 358.9,81.5C355.1,53.2 376.4,28.7 408.9,24.0C419.0,22.5 437.1,23.2 445.5,25.4C488.4,36.8 502.6,83.0 471.9,111.4C465.5,117.4 454.9,123.0 445.5,125.6C437.3,127.8 413.6,128.4 405.0,126.6Z"/></svg>`;

(function () {
  const here = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  const isHere = (href) => href === here || (here === "" && href === "index.html");

  /* ---------- Header ---------- */
  const header = document.querySelector("[data-header]");
  if (header) {
    header.className = "site-header";
    header.innerHTML = `
      <div class="wrap">
        <a class="logo" href="index.html" aria-label="Zjoske Kanters, naar home">${LOGO}</a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="hoofdmenu">Menu</button>
        <nav class="nav" id="hoofdmenu" aria-label="Hoofdmenu">
          ${MENU.map((m) => `<a href="${m.href}"${isHere(m.href) ? ' aria-current="page"' : ""}>${m.label}</a>`).join("")}
          <a class="btn" href="kennismaken.html">Gratis Adventure Call</a>
        </nav>
      </div>`;
    const t = header.querySelector(".menu-toggle");
    const n = header.querySelector(".nav");
    t.addEventListener("click", () => {
      const open = n.classList.toggle("open");
      t.setAttribute("aria-expanded", open);
      t.textContent = open ? "Sluiten" : "Menu";
    });
  }

  /* ---------- Footer ---------- */
  const footer = document.querySelector("[data-footer]");
  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML = `
      <div class="wrap">
        <div class="news" style="margin-bottom:clamp(48px,6vw,80px)">
          <div class="stack">
            <span class="eyebrow">Nieuwsbrief</span>
            <h2>Start jouw <em>reis.</em></h2><p class="lead">Ontvang regelmatig ontspanning in je mailbox.</p>
          </div>
          <form data-demo-form="news" novalidate>
            <label class="sr" for="news-mail" style="position:absolute;left:-9999px">Je e-mailadres</label>
            <input id="news-mail" type="email" placeholder="Je e-mailadres" required autocomplete="email">
            <button class="btn" type="submit">Ja, ik doe mee <span class="arr">→</span></button>
            <p class="form-note" style="flex-basis:100%;color:var(--deep-soft)">Je kunt je altijd met één klik weer afmelden.</p>
          </form>
        </div>
        <div class="foot-grid">
          <div class="stack">
            <h4>Praktijk</h4>
            <p>Lichaamsgerichte (trauma)therapie en begeleiding.<br>${CONTACT.adres}</p>
            <p><a href="${CONTACT.whatsapp}" target="_blank" rel="noopener">WhatsApp ${CONTACT.tel}</a><br>${CONTACT.mail}</p>
          </div>
          <div>
            <h4>Werk met mij</h4>
            <ul>${MENU.slice(1).map((m) => `<li><a href="${m.href}">${m.label}</a></li>`).join("")}<li><a href="kennismaken.html">Adventure Call</a></li></ul>
          </div>
          <div>
            <h4>Handig</h4>
            <ul>
              <li><a href="kennismaken.html#faq">Veelgestelde vragen</a></li>
              <li><a href="${CONTACT.instagram}" target="_blank" rel="noopener">Instagram</a></li>
              <li><a href="https://www.zjoskekanters.nl/privacy" target="_blank" rel="noopener">Privacy</a></li>
              <li><a href="https://www.zjoskekanters.nl/algemenevoorwaarden" target="_blank" rel="noopener">Algemene voorwaarden</a></li>
            </ul>
          </div>
        </div>
        <div class="foot-logo" aria-hidden="true">${LOGO}</div>
        <div class="foot-bottom"><span>© ${new Date().getFullYear()} Zjoske Kanters · Breda</span><span>Website door <a href="http://www.morgencompany.com" target="_blank" rel="noopener">Morgen Company</a></span></div>
      </div>`;
  }

  /* ---------- Plakkende knop (mobiel) ---------- */
  if (!document.body.hasAttribute("data-no-sticky")) {
    const s = document.createElement("a");
    s.className = "btn sticky-cta";
    s.href = "kennismaken.html";
    s.innerHTML = 'Plan je gratis Adventure Call <span class="arr">→</span>';
    document.body.appendChild(s);
    const f = document.querySelector(".site-footer");
    if (f && "IntersectionObserver" in window) {
      new IntersectionObserver(([e]) => s.classList.toggle("hide", e.isIntersecting)).observe(f);
    }
  }

  /* ---------- Rustig inschuiven bij scrollen ----------
     Alles wat al in beeld staat blijft gewoon staan; alleen
     wat verderop staat schuift zacht naar binnen. */
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const reveals = [...document.querySelectorAll(".reveal")];
  if ("IntersectionObserver" in window && !reduce) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.remove("pending"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    reveals.forEach((el) => {
      if (el.getBoundingClientRect().top > innerHeight * 0.95) { el.classList.add("pending"); io.observe(el); }
    });
    setTimeout(() => reveals.forEach((el) => el.classList.remove("pending")), 6000);
  }

  /* ---------- Tellende cijfers ---------- */
  document.querySelectorAll("[data-count]").forEach((el) => {
    const target = parseFloat(el.dataset.count);
    const dec = (el.dataset.count.split(".")[1] || "").length;
    const fmt = (v) => (el.dataset.prefix || "") + v.toLocaleString("nl-NL", { minimumFractionDigits: dec, maximumFractionDigits: dec }) + (el.dataset.suffix || "");
    el.textContent = fmt(target);
    if (reduce || !("IntersectionObserver" in window)) return;
    if (el.getBoundingClientRect().top < innerHeight) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const step = (now) => {
        const p = Math.min(1, (now - t0) / 1400);
        el.textContent = fmt(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
    io.observe(el);
  });

  /* ---------- Adem mee ---------- */
  const stage = document.querySelector("[data-breathe]");
  if (stage) {
    const ball = stage.querySelector(".breath-ball");
    const word = stage.querySelector(".breath-label b");
    const sub = stage.querySelector(".breath-label small");
    const btn = document.querySelector("[data-breathe-btn]");
    const dots = [...document.querySelectorAll(".dots i")];
    const ROUNDS = dots.length || 5;
    const PHASES = [
      { t: 4, w: "Adem in", s: "door je neus", scale: 1.9 },
      { t: 2, w: "Even stil", s: "zacht vasthouden", scale: 1.9 },
      { t: 6, w: "Adem uit", s: "langzaam, door je mond", scale: 1 },
    ];
    let timer = null, running = false;
    const stop = (done) => {
      running = false; clearTimeout(timer);
      ball.style.transitionDuration = "1.2s"; ball.style.transform = "scale(1)";
      word.textContent = done ? "Mooi zo." : "Klaar?"; sub.textContent = done ? "voel even na" : "druk op start";
      btn.textContent = done ? "Nog een keer" : "Start één minuut";
    };
    const run = (round, phase) => {
      if (!running) return;
      if (round >= ROUNDS) { stop(true); return; }
      const p = PHASES[phase];
      ball.style.transitionDuration = p.t + "s";
      ball.style.transform = `scale(${p.scale})`;
      word.textContent = p.w; sub.textContent = p.s;
      dots.forEach((d, i) => d.classList.toggle("on", i <= round));
      timer = setTimeout(() => (phase === 2 ? run(round + 1, 0) : run(round, phase + 1)), p.t * 1000);
    };
    btn.addEventListener("click", () => {
      if (running) { stop(false); dots.forEach((d) => d.classList.remove("on")); return; }
      running = true; btn.textContent = "Stop"; dots.forEach((d) => d.classList.remove("on"));
      run(0, 0);
    });
  }

  /* ---------- Sessiewijzer ---------- */
  const finder = document.querySelector("[data-finder]");
  if (finder) {
    const R = {
      brtt: { t: "Body Remembers Trauma Therapy", p: "1-op-1 in Breda · €250 ex. btw", w: "Je systeem staat al lang 'aan'. BRTT werkt direct met je zenuwstelsel, zacht en precies, zodat je lijf weer kan zakken.", h: "sessies.html#brtt" },
      trb: { t: "Trauma Release Breathwork", p: "1-op-1 in Breda · €250 ex. btw", w: "Er zit veel vast en je wilt niet nóg meer praten. Via de adem maken we ruimte, zodat je lichaam kan afmaken wat het toen niet kon.", h: "sessies.html#trb" },
      combi: { t: "Combinatie BRTT & TRB", p: "1-op-1 in Breda · €350 ex. btw", w: "Je voelt dat je echt wat lagen de diepte in mag. We combineren regulatie en ontlading, afgestemd op wat jouw systeem nodig heeft.", h: "sessies.html#combi" },
      play: { t: "Playdate", p: "Groepsworkshop in Tilburg", w: "Je mist lichtheid en plezier. Playdate zet je interne speelsheidknop weer AAN. Geen therapie, wel een ruimte om te spelen, bewegen en lachen.", h: "sessies.html#playdate" },
      wtf: { t: "Way to Freedom", p: "Traject van 4 maanden · Breda", w: "Je wilt echt opruimen wat steeds terugkomt. We werken met je lijf, je onderbewuste en je familiesysteem.", h: "trajecten.html#way-to-freedom" },
      sparkly: { t: "Sparkly Frequency Lane", p: "Traject van 2 of 4 maanden · Breda", w: "Je wilt niet alleen heel zijn, je wilt weer sprankelen. Release the old, program the new.", h: "trajecten.html#sparkly" },
      sleep: { t: "Drifting into a very deep sleep", p: "Meditatie voor thuis · €11", w: "Je hoofd begint pas als je in bed ligt. Ruim twintig minuten om zacht weg te zakken.", h: "voor-thuis.html#meditaties" },
      clean: { t: "Energy Cleansing", p: "Meditatie voor thuis · €11", w: "Je neemt veel mee van anderen. Tien minuten om los te laten wat niet van jou is.", h: "voor-thuis.html#meditaties" },
      trigger: { t: "From Trigger to Insight and Release", p: "Meditatie voor thuis · €11", w: "Voor als dat oude steekje van binnen weer opspeelt. Er met liefde doorheen in plaats van wegduwen.", h: "voor-thuis.html#meditaties" },
      morning: { t: "Good Morning Sweet Soul", p: "Meditatie voor thuis · €11", w: "Je wilt lichter beginnen. Start je dag van binnenuit, niet van je telefoon af.", h: "voor-thuis.html#meditaties" },
      biz: { t: "Doorbreek je patronen", p: "Zakelijke begeleiding · maatwerk", w: "Je ziet je patronen allang, maar ze blijven terugkomen onder druk. We ontladen eerst je lijf en herprogrammeren daarna de overtuiging eronder.", h: "zakelijk.html" },
    };
    const steps = [...finder.querySelectorAll("fieldset")];
    const bars = [...finder.querySelectorAll(".progress i")];
    const back = finder.querySelector("[data-back]");
    const out = finder.querySelector(".finder-result");
    let i = 0;
    const show = () => {
      steps.forEach((s, k) => (s.hidden = k !== i));
      bars.forEach((b, k) => b.classList.toggle("on", k <= i));
      back.hidden = i === 0 || i >= steps.length;
    };
    const val = (n) => (finder.querySelector(`input[name="${n}"]:checked`) || {}).value;
    const decide = () => {
      const a = val("wat"), b = val("hoe"), c = val("voor");
      if (c === "werk") return R.biz;
      if (b === "thuis") return R[{ aan: "sleep", vast: "clean", diep: "trigger", licht: "morning" }[a]];
      if (b === "proces") return a === "licht" ? R.sparkly : R.wtf;
      return R[{ aan: "brtt", vast: "trb", diep: "combi", licht: "play" }[a]];
    };
    finder.addEventListener("change", (e) => {
      if (e.target.type !== "radio") return;
      setTimeout(() => {
        i++;
        if (i >= steps.length) {
          const r = decide();
          steps.forEach((s) => (s.hidden = true));
          bars.forEach((b) => b.classList.add("on"));
          out.hidden = false;
          out.innerHTML = `<span class="eyebrow">Mijn tip voor jou</span><h3>${r.t}</h3><p><b style="color:var(--deep-ink)">${r.p}</b></p><p>${r.w}</p>
            <div class="btn-row"><a class="btn" href="${r.h}">Lees meer <span class="arr">→</span></a><a class="btn btn--ghost" href="kennismaken.html">Twijfel? Plan een gratis call</a></div>
            <button type="button" class="textlink" data-restart style="background:none;border:0;color:var(--deep-soft);cursor:pointer;justify-self:start;font:inherit;padding:0">Opnieuw beginnen</button>`;
          back.hidden = true;
        } else show();
      }, 220);
    });
    back.addEventListener("click", () => { i = Math.max(0, i - 1); show(); });
    finder.addEventListener("click", (e) => {
      if (!e.target.matches("[data-restart]")) return;
      finder.querySelectorAll("input").forEach((x) => (x.checked = false));
      out.hidden = true; i = 0; show();
    });
    show();
  }

  /* ---------- FAQ-filter ---------- */
  const filter = document.querySelector(".faq-filter");
  if (filter) {
    const items = [...document.querySelectorAll(".faq details[data-cat]")];
    filter.addEventListener("click", (e) => {
      const b = e.target.closest("button"); if (!b) return;
      filter.querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", x === b));
      items.forEach((d) => (d.hidden = b.dataset.cat !== "alle" && !d.dataset.cat.split(" ").includes(b.dataset.cat)));
    });
  }

  /* ---------- Bestellen / boeken: onthoudt wat je koos ---------- */
  document.addEventListener("click", (e) => {
    const a = e.target.closest("[data-want]");
    if (!a) return;
    try { sessionStorage.setItem("zk-want", a.dataset.want); } catch (_) {}
  });
  const wantField = document.querySelector("#c-onderwerp");
  if (wantField) {
    let w = null;
    try { w = sessionStorage.getItem("zk-want"); } catch (_) {}
    if (w) {
      const opt = [...wantField.options].find((o) => o.value === w || o.text === w);
      if (opt) wantField.value = opt.value;
      else { const o = new Option(w, w, true, true); wantField.add(o); }
    }
  }

  /* ---------- Formulieren (demo: nog niet gekoppeld) ---------- */
  document.querySelectorAll("[data-demo-form]").forEach((f) => {
    f.addEventListener("submit", (e) => {
      e.preventDefault();
      const req = [...f.querySelectorAll("[required]")];
      const bad = req.find((x) => !x.value.trim() || (x.type === "email" && !/^\S+@\S+\.\S+$/.test(x.value)));
      let msg = f.querySelector(".form-ok");
      if (!msg) { msg = document.createElement("p"); msg.className = "form-ok"; msg.setAttribute("role", "status"); f.appendChild(msg); }
      msg.style.flexBasis = "100%";
      msg.style.color = "#3a110b";
      if (bad) { msg.textContent = bad.type === "email" ? "Vul een geldig e-mailadres in, dan kan ik je bereiken." : "Vul je naam en e-mailadres in, dan kan ik je bereiken."; bad.focus(); return; }
      msg.textContent = f.dataset.demoForm === "news"
        ? "Dankjewel! In de echte site zet je je hier direct op de lijst. (Voorbeeld: de koppeling met de nieuwsbrief volgt nog.)"
        : "Dankjewel! In de echte site komt je bericht nu bij Zjoske binnen. (Voorbeeld: de koppeling volgt nog.)";
    });
  });

  /* ---------- Speelse beweging ---------- */
  // 1. Kaarten in een rij komen een voor een binnen
  document.querySelectorAll(".offer-grid, .quotes, .work, .stats, .products, .steps").forEach((g) => {
    [...g.children].forEach((c, i) => {
      if (!c.classList.contains("pending")) return;
      c.style.transitionDelay = (i * 90) + "ms";
      c.addEventListener("transitionend", () => (c.style.transitionDelay = ""), { once: true });
    });
  });
  // 2. Zwevende hartjes in donkere vlakken
  if (!reduce) document.querySelectorAll("[data-floaties], .site-footer").forEach((sec) => {
    const box = document.createElement("div");
    box.className = "floaties"; box.setAttribute("aria-hidden", "true");
    for (let k = 0; k < 9; k++) {
      const h = document.createElement("i");
      h.textContent = "♥";
      h.style.left = (5 + Math.random() * 90) + "%";
      h.style.fontSize = (10 + Math.random() * 18) + "px";
      h.style.animationDuration = (14 + Math.random() * 14) + "s";
      h.style.animationDelay = (-Math.random() * 20) + "s";
      box.appendChild(h);
    }
    sec.prepend(box);
  });
  // 3. Foto's bewegen zacht mee met scrollen
  const par = [...document.querySelectorAll("[data-parallax]")];
  if (par.length && !reduce) {
    let ticking = false;
    const upd = () => {
      par.forEach((el) => {
        const r = el.parentElement.getBoundingClientRect();
        const off = (r.top + r.height / 2 - innerHeight / 2) * parseFloat(el.dataset.parallax || 0.05);
        el.style.transform = `translateY(${off.toFixed(1)}px) scale(1.12)`;
      });
      ticking = false;
    };
    addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(upd); } }, { passive: true });
    upd();
  }
  // 4. Menubalk krijgt meer schaduw zodra je scrolt
  const hb = document.querySelector(".site-header .wrap");
  if (hb) addEventListener("scroll", () => { hb.style.boxShadow = scrollY > 40 ? "0 18px 40px -18px rgba(125,5,0,.55)" : ""; }, { passive: true });

  /* ---------- Kopieerknoppen ---------- */
  document.querySelectorAll("[data-copy]").forEach((b) => {
    b.addEventListener("click", () => {
      const done = () => { const o = b.textContent; b.textContent = "Gekopieerd"; setTimeout(() => (b.textContent = o), 1600); };
      const sel = () => { const r = document.createRange(); r.selectNodeContents(b.previousElementSibling); const s = getSelection(); s.removeAllRanges(); s.addRange(r); };
      try { navigator.clipboard.writeText(b.dataset.copy).then(done, sel); } catch (_) { sel(); }
    });
  });
})();

/* Laurenz Zäch — lightweight i18n (translate by English source text) */
(function () {
  // English source -> { de, es, pt }
  const MAP = {
    // ---- Navigation ----
    "Home": { de: "Start", es: "Inicio", pt: "Início" },
    "Training": { de: "Training", es: "Entrenamiento", pt: "Treino" },
    "Pricing": { de: "Preise", es: "Precios", pt: "Preços" },
    "About Me": { de: "Über mich", es: "Sobre mí", pt: "Sobre mim" },
    "Location": { de: "Standort", es: "Ubicación", pt: "Local" },
    "Book": { de: "Buchen", es: "Reservar", pt: "Reservar" },
    "Contact": { de: "Kontakt", es: "Contacto", pt: "Contato" },

    // ---- Buttons / CTAs ----
    "Book now": { de: "Jetzt buchen", es: "Reservar ahora", pt: "Reservar agora" },
    "Book a trial": { de: "Probetraining buchen", es: "Reservar clase de prueba", pt: "Agendar aula experimental" },
    "Book a Trial": { de: "Probetraining", es: "Reservar prueba", pt: "Aula experimental" },
    "Book Private": { de: "Privat buchen", es: "Reservar privada", pt: "Reservar individual" },
    "Book Semi-private": { de: "Semi-privat buchen", es: "Reservar semiprivada", pt: "Reservar semi-individual" },
    "Book a session with me": { de: "Session mit mir buchen", es: "Reserva una sesión conmigo", pt: "Reserve uma sessão comigo" },
    "Send": { de: "Senden", es: "Enviar", pt: "Enviar" },

    // ---- Hero ----
    "Personal Training in Zurich": { de: "Personal Training in Zürich", es: "Entrenamiento personal en Zúrich", pt: "Treino personalizado em Zurique" },
    "No-Gi BJJ and grappling in Zürich. Whether you have never stepped on the mat or have trained for a while, I work in a personal setting built for you.": {
      de: "No-Gi BJJ und Grappling in Zürich. Ob du noch nie auf der Matte standest oder schon eine Weile trainierst – ich arbeite in einem persönlichen Rahmen, der auf dich zugeschnitten ist.",
      es: "BJJ No-Gi y grappling en Zúrich. Tanto si nunca has pisado el tatami como si llevas tiempo entrenando, trabajo en un entorno personal hecho a tu medida.",
      pt: "BJJ No-Gi e grappling em Zurique. Se você nunca pisou no tatame ou já treina há algum tempo, trabalho num ambiente pessoal feito para você." },

    // ---- Info columns ----
    "Coaching built around you": { de: "Training, das sich nach dir richtet", es: "Entrenamiento pensado para ti", pt: "Treino feito para você" },
    "No-Gi Jiu Jitsu and grappling, one to one or with a partner. Beginner friendly, at your own pace.": {
      de: "No-Gi Jiu Jitsu und Grappling, eins zu eins oder mit Partner. Anfängerfreundlich, in deinem Tempo.",
      es: "Jiu Jitsu No-Gi y grappling, individual o con pareja. Apto para principiantes, a tu ritmo.",
      pt: "Jiu Jitsu No-Gi e grappling, individual ou com parceiro. Ideal para iniciantes, no seu ritmo." },
    "Rates and packs": { de: "Preise und Pakete", es: "Tarifas y packs", pt: "Preços e pacotes" },
    "Simple, fair rates with no memberships and no lock in. See what works for you.": {
      de: "Einfache, faire Preise ohne Mitgliedschaft und ohne Bindung. Finde, was zu dir passt.",
      es: "Tarifas simples y justas, sin membresías ni permanencia. Elige lo que te convenga.",
      pt: "Preços simples e justos, sem mensalidade e sem fidelidade. Veja o que funciona para você." },
    "Who I am": { de: "Wer ich bin", es: "Quién soy", pt: "Quem sou eu" },
    "Purple belt, ten years of Jiu Jitsu, and a real love of coaching beginners and experienced grapplers.": {
      de: "Lila Gurt, zehn Jahre Jiu Jitsu und echte Freude daran, Anfänger und erfahrene Grappler zu coachen.",
      es: "Cinturón violeta, diez años de Jiu Jitsu y una verdadera pasión por enseñar a principiantes y a grapplers experimentados.",
      pt: "Faixa roxa, dez anos de Jiu Jitsu e um amor genuíno por ensinar iniciantes e grapplers experientes." },

    // ---- About "Hi," ----
    "Hi,": { de: "Hallo,", es: "Hola,", pt: "Oi," },
    "I am Laurenz.": { de: "Ich bin Laurenz.", es: "Soy Laurenz.", pt: "Eu sou o Laurenz." },
    "Grappling has been part of my life for ten years, and helping others find their way into it the part I enjoy most. I coach No-Gi Jiu Jitsu and grappling in a calm, friendly setting. You do not need any experience, just a bit of curiosity. The rest we figure out together on the mat.": {
      de: "Grappling ist seit zehn Jahren Teil meines Lebens, und anderen den Einstieg zu ermöglichen, macht mir am meisten Freude. Ich unterrichte No-Gi Jiu Jitsu und Grappling in einer ruhigen, freundlichen Atmosphäre. Du brauchst keine Erfahrung, nur ein bisschen Neugier. Den Rest finden wir gemeinsam auf der Matte heraus.",
      es: "El grappling forma parte de mi vida desde hace diez años, y ayudar a otros a iniciarse es lo que más disfruto. Enseño Jiu Jitsu No-Gi y grappling en un ambiente tranquilo y cercano. No necesitas experiencia, solo un poco de curiosidad. El resto lo descubrimos juntos en el tatami.",
      pt: "O grappling faz parte da minha vida há dez anos, e ajudar os outros a começar é o que mais gosto. Ensino Jiu Jitsu No-Gi e grappling num ambiente calmo e acolhedor. Você não precisa de experiência, só um pouco de curiosidade. O resto a gente descobre junto no tatame." },

    // ---- Choose ----
    "Choose what suits you": { de: "Wähle, was zu dir passt", es: "Elige lo que más te convenga", pt: "Escolha o que combina com você" },
    "Every session is built around you": { de: "Jede Einheit dreht sich um dich", es: "Cada sesión gira en torno a ti", pt: "Cada sessão é feita em torno de você" },
    "You can do that on your own, or together with a partner. Both work well, and many people move between the two over time.": {
      de: "Das kannst du allein machen oder gemeinsam mit einem Partner. Beides funktioniert gut, und viele wechseln mit der Zeit zwischen beidem.",
      es: "Puedes hacerlo por tu cuenta o junto a una pareja. Ambas opciones funcionan bien, y muchas personas alternan entre las dos con el tiempo.",
      pt: "Você pode fazer isso sozinho ou com um parceiro. As duas formas funcionam bem, e muita gente alterna entre elas com o tempo." },
    "Private": { de: "Privat", es: "Privada", pt: "Individual" },
    "Semi-Private": { de: "Semi-privat", es: "Semiprivada", pt: "Semi-individual" },
    "Moving entirely at your pace. We focus on exactly what you are working on. A great choice if you prefer full attention on your own game, or would simply rather start solo.": {
      de: "Ganz in deinem Tempo. Wir konzentrieren uns genau auf das, woran du arbeitest. Ideal, wenn du volle Aufmerksamkeit für dein eigenes Spiel möchtest oder lieber allein anfängst.",
      es: "Totalmente a tu ritmo. Nos centramos exactamente en lo que estás trabajando. Una gran opción si prefieres toda la atención en tu propio juego, o simplemente empezar en solitario.",
      pt: "Totalmente no seu ritmo. Focamos exatamente no que você está treinando. Uma ótima escolha se você prefere atenção total ao seu jogo, ou simplesmente começar sozinho." },
    "You learn with a partner, keep each other motivated, and share your learning. Bring a friend, partner or colleague, or get in touch and we will find a good fit.": {
      de: "Du lernst mit einem Partner, ihr motiviert euch gegenseitig und teilt euren Fortschritt. Bring einen Freund, Partner oder Kollegen mit – oder melde dich, und wir finden die passende Ergänzung.",
      es: "Aprendes con una pareja, os motiváis mutuamente y compartís el aprendizaje. Trae a un amigo, pareja o compañero, o escríbeme y encontraremos a alguien que encaje.",
      pt: "Você aprende com um parceiro, um motiva o outro e vocês compartilham o aprendizado. Traga um amigo, parceiro ou colega, ou entre em contato que a gente encontra alguém." },

    // ---- Closing ----
    "Ready to step on the mat?": { de: "Bereit für die Matte?", es: "¿Listo para pisar el tatami?", pt: "Pronto para pisar no tatame?" },
    "Start with a trial. No experience needed, no memberships, no pressure — just you, the mat, and a plan built around your goals.": {
      de: "Starte mit einem Probetraining. Keine Erfahrung nötig, keine Mitgliedschaft, kein Druck – nur du, die Matte und ein Plan, der auf deine Ziele zugeschnitten ist.",
      es: "Empieza con una clase de prueba. Sin experiencia, sin membresías, sin presión: solo tú, el tatami y un plan hecho para tus objetivos.",
      pt: "Comece com uma aula experimental. Sem experiência, sem mensalidade, sem pressão — só você, o tatame e um plano feito para os seus objetivos." },

    // ---- Footer ----
    "Info": { de: "Info", es: "Info", pt: "Info" },
    "Help": { de: "Hilfe", es: "Ayuda", pt: "Ajuda" },
    "Reach Out": { de: "Kontakt", es: "Contacto", pt: "Fale comigo" },
    "Contact Me": { de: "Kontaktiere mich", es: "Contáctame", pt: "Fale comigo" },
    "© 2026 Laurenz Zäch · Brazilian Jiu Jitsu, Zürich": { de: "© 2026 Laurenz Zäch · Brazilian Jiu Jitsu, Zürich", es: "© 2026 Laurenz Zäch · Brazilian Jiu Jitsu, Zúrich", pt: "© 2026 Laurenz Zäch · Brazilian Jiu Jitsu, Zurique" }
  };

  const SEL = 'h1,h2,h3,h4,h5,h6,p,a,button,summary,label,option,li,.k,.hint,.form-note,.eyebrow,.footer-bottom .wrap,.request-banner';
  const orig = new WeakMap();
  const ph = new WeakMap();

  function apply(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll(SEL).forEach(el => {
      if (el.children.length) return;               // leaf text only
      if (!orig.has(el)) orig.set(el, el.textContent);
      const src = orig.get(el).trim();
      if (lang === 'en') { el.textContent = orig.get(el); return; }
      const t = MAP[src] && MAP[src][lang];
      el.textContent = t ? t : orig.get(el);
    });
    document.querySelectorAll('input[placeholder],textarea[placeholder]').forEach(el => {
      if (!ph.has(el)) ph.set(el, el.getAttribute('placeholder'));
      const base = ph.get(el);
      const t = lang !== 'en' && MAP[base] && MAP[base][lang];
      el.setAttribute('placeholder', t || base);
    });
    try { localStorage.setItem('lz-lang', lang); } catch (e) {}
    document.querySelectorAll('.lang-switch button').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  }
  window.__setLang = apply;

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.lang-switch button').forEach(b =>
      b.addEventListener('click', () => apply(b.dataset.lang)));
    let saved = 'en';
    try { saved = localStorage.getItem('lz-lang') || 'en'; } catch (e) {}
    apply(saved);
  });
})();

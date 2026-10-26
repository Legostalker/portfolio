/* ==========================================================
   bedkoarts — sayfanın davranışı
   Oyun içerikleri js/games.js, metinler aşağıdaki STRINGS içinde.
   ========================================================== */

const CONTACT_EMAIL = ['bedirhankose7', 'gmail.com'];   // [ad, alan adı]: botlar düz metin olarak bulamasın diye parçalı

const STRINGS = {
  tr: {
    skip: 'İçeriğe geç',
    nav_games: 'Oyunlar',
    nav_studio: 'Stüdyo',
    nav_contact: 'İletişim',
    kicker: 'Bağımsız oyun stüdyosu',
    index_label: 'Şövalede',
    hero_line: 'Her biri kendi ışığıyla yanan dünyalar.',
    games_label: 'Oyunlar',
    games_title: 'Üzerinde çalışılan dünyalar',
    placeholder: 'Görseller hazırlanıyor',
    studio_label: 'Stüdyo',
    studio_title: 'Her oyun kendi iklimini getirir. <em>Ortak olan, elin izi.</em>',
    studio_p1: 'bedkoarts bağımsız bir oyun stüdyosu. Kimi oyunu soğuk ve sessiz, kimi sıcak ve kalabalık; hiçbiri bir diğerinin kalıbına sokulmaz.',
    studio_p2: 'Her dünya önce kâğıt üzerinde, fırçayla başlar. Gerisi, o dünyanın kendi kurallarını bulmasına kalır.',
    contact_label: 'İletişim',
    contact_title: 'Bir not bırak.',
    lang_switch: 'Switch to English',
    home: 'bedkoarts — başa dön',
  },
  en: {
    skip: 'Skip to content',
    nav_games: 'Games',
    nav_studio: 'Studio',
    nav_contact: 'Contact',
    kicker: 'Independent game studio',
    index_label: 'On the easel',
    hero_line: 'Worlds, each lit by a light of its own.',
    games_label: 'Games',
    games_title: 'Worlds in the making',
    placeholder: 'Visuals in progress',
    studio_label: 'Studio',
    studio_title: 'Every game brings its own climate. <em>What they share is the trace of a hand.</em>',
    studio_p1: 'bedkoarts is an independent game studio. Some of its games are cold and quiet, some warm and crowded; none is pressed into the mould of another.',
    studio_p2: 'Every world starts on paper, with a brush. The rest is up to the world finding its own rules.',
    contact_label: 'Contact',
    contact_title: 'Leave a note.',
    lang_switch: 'Türkçeye geç',
    home: 'bedkoarts — back to top',
  },
};

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];

const $ = (sel, root = document) => root.querySelector(sel);
const el = (tag, cls, text) => {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (text) node.textContent = text;
  return node;
};

let lang = 'tr';
try {
  lang = localStorage.getItem('lang') || (navigator.language || '').slice(0, 2);
} catch (e) { /* depolama kapalıysa tarayıcı dili */ }
if (!STRINGS[lang]) lang = 'tr';

/* ---------- Oyunlar ---------- */

function renderIndex() {
  $('#index').replaceChildren(...GAMES.map((g, i) => {
    const li = el('li');
    const a = el('a');
    a.href = `#${g.slug}`;
    a.append(el('span', 'no', ROMAN[i]), el('span', 'name', g.title));
    li.append(a);
    return li;
  }));
  $('#count').textContent = String(GAMES.length).padStart(2, '0');
}

function picture(src, alt) {
  const img = el('img');
  img.src = src;
  img.alt = alt;
  img.loading = 'lazy';
  img.decoding = 'async';
  return img;
}

function renderArt(g) {
  const fig = el('figure', 'game-art');
  if (g.cover) {
    fig.append(picture(g.cover, g.title));
  } else {
    // Görsel yokken oyunun tonlarıyla boyanmış bir yer tutucu
    fig.classList.add('is-placeholder');
    if (g.light) fig.classList.add('is-dark');
    const note = el('figcaption', 'ph-note', STRINGS[lang].placeholder);
    note.dataset.i18n = 'placeholder';
    fig.append(el('span', 'ph-wash'), note);
  }
  return fig;
}

function renderGames() {
  $('#games').replaceChildren(...GAMES.map((g, i) => {
    const art = el('article', `game game--${g.layout || 'wide'} reveal`);
    art.id = g.slug;
    art.style.setProperty('--tone-a', g.tone[0]);
    art.style.setProperty('--tone-b', g.tone[1]);

    const info = el('div', 'game-info');
    info.append(el('span', 'game-no', ROMAN[i]), el('h3', 'game-title', g.title));

    const text = g[lang] || g.tr || g.en;
    if (text) info.append(el('p', 'game-text', text));

    if (g.links && g.links.length) {
      const links = el('ul', 'game-links');
      g.links.forEach((l) => {
        const a = el('a', null, `${l.label} ↗`);
        a.href = l.url;
        a.target = '_blank';
        a.rel = 'noopener';
        const li = el('li');
        li.append(a);
        links.append(li);
      });
      info.append(links);
    }

    art.append(renderArt(g), info);

    if (g.images && g.images.length) {
      const strip = el('div', 'game-strip');
      g.images.forEach((src) => strip.append(picture(src, g.title)));
      art.append(strip);
    }
    return art;
  }));
}

/* ---------- Dil ---------- */

function applyLang() {
  const t = STRINGS[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((n) => { n.textContent = t[n.dataset.i18n]; });
  document.querySelectorAll('[data-i18n-html]').forEach((n) => { n.innerHTML = t[n.dataset.i18nHtml]; });
  const btn = $('#lang');
  btn.textContent = lang === 'tr' ? 'EN' : 'TR';
  btn.setAttribute('aria-label', t.lang_switch);
  $('.bar-mark').setAttribute('aria-label', t.home);
}

$('#lang').addEventListener('click', () => {
  lang = lang === 'tr' ? 'en' : 'tr';
  try { localStorage.setItem('lang', lang); } catch (e) { /* yoksay */ }
  applyLang();
  // Oyun metinleri dile göre değişir; görünmüş olanlar yeniden gizlenmesin
  GAMES.forEach((g) => {
    const p = $(`#${g.slug} .game-text`);
    if (p) p.textContent = g[lang] || g.tr || g.en;
  });
});

/* ---------- Sakin görünme hareketi ---------- */

const io = 'IntersectionObserver' in window
  ? new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add('is-in');
      io.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px -10% 0px' })
  : null;

function observeReveals() {
  document.querySelectorAll('.reveal:not(.is-in)').forEach((n) => {
    if (io) io.observe(n);
    else n.classList.add('is-in');
  });
}

/* ---------- Üst çubuk: sayfa kayınca ince bir zemin alır ---------- */

const bar = $('#bar');
const onScroll = () => bar.classList.toggle('is-scrolled', window.scrollY > 24);
window.addEventListener('scroll', onScroll, { passive: true });

/* ---------- Başlat ---------- */

$('#mail').href = `mailto:${CONTACT_EMAIL.join('@')}`;
$('#mail-text').textContent = CONTACT_EMAIL.join('@');
$('#year').textContent = new Date().getFullYear();

document.querySelectorAll('.section-head, .studio, .contact').forEach((n) => n.classList.add('reveal'));

renderIndex();
renderGames();
applyLang();
observeReveals();
onScroll();

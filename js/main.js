/* ==========================================================
   AYARLAR
   ========================================================== */

// "E-posta gönder" düğmesinin açacağı adres
const CONTACT_EMAIL = 'bedirhankose7@gmail.com';

// Giriş bölümündeki kolajda görünecek eserler (data.js'teki slug değerleri)
const FEATURED = ['fun-world', 'void-man', 'flying-island', 'mascot-players'];

/* ---------- Arayüz metinleri ---------- */
const STRINGS = {
  tr: {
    skip: 'İçeriğe geç',
    nav_gallery: 'Galeri',
    nav_about: 'Hakkımda',
    nav_contact: 'İletişim',
    hero_eyebrow: 'Game Artist · 3D Çevre & Karakter',
    hero_title: 'Oyunlar için <mark class="m-teal">dünyalar</mark> ve <mark class="m-pink">karakterler</mark> yaratıyorum.',
    hero_lead: 'Merhaba, ben Bedirhan. Çevre, karakter ve level tasarımı yapıyor, boş zamanlarımda kendi oyunlarımı geliştiriyorum. Galeriyi salon salon gezmeye davetlisin.',
    hero_cta: 'Galeriyi gez',
    collage_label: 'Öne çıkan eserler',
    gallery_kicker: 'Galeri haritası',
    gallery_title: 'Hangi salondan başlayalım?',
    gallery_lead: 'Her salonun kendi rengi var. Bir esere tıkla, sonra oklarla bir sonrakine geçerek galeriyi baştan sona gez.',
    hall: 'Salon',
    halls: 'salon',
    works: 'eser',
    images: 'görsel',
    enter: 'Salona gir',
    fact_focus: 'Odak',
    fact_focus_v: 'Çevre, karakter, level tasarımı',
    fact_bg: 'Geçmiş',
    fact_bg_v: 'İç mimarlık, endüstriyel tasarım',
    fact_where: 'Deneyim',
    fact_where_v: 'Türkiye ve İtalya',
    fact_works: 'Galeride',
    fact_works_v: 'eser',
    about_title: 'Her dönemimi bir oyunla anlatabilirim.',
    about_p1: 'İç mimar olarak mezun oldum ve İtalya ile Türkiye’de çeşitli şirketlerde iç mimarlık, endüstriyel tasarım ve görsel sanat üzerine çalıştım. Farklı kültürlerle tanışmak, tasarıma ve dijital üretime bakışımı tamamen değiştirdi.',
    about_p2: 'Oyunları hep sevdim. Zamanla kendimi oyunlara yönelik modelleme, render ve post-prodüksiyon üzerine uzmanlaştırdım: modeller, iç ve dış mekânlar, konseptler… Kısacası oyunlar için her türlü görselleştirme. Oynadığım oyunlar, izlediğim filmler, bir kez dinlediğim bir müzik bile bana referans olabiliyor.',
    about_p3: 'Bugünlerde yeni bağımsız oyun fikirlerim için 3D ve 2D sanat üretiyor, kod yazıyorum.',
    contact_title: 'Birlikte bir dünya kuralım mı?',
    contact_lead: 'Bir oyun projesi, iş birliği ya da sadece merhaba demek için yazabilirsin.',
    contact_email: 'E-posta gönder',
    back_top: 'Başa dön ↑',
    viewer_hint: '← → tuşlarıyla eserler arasında gezebilirsin.',
    prev_work: 'Önceki eser',
    next_work: 'Sonraki eser',
    close: 'Kapat',
    view_full: 'tam boyut aç',
    menu_open: 'Menüyü aç',
    menu_close: 'Menüyü kapat',
    lang_switch: 'Switch to English',
  },
  en: {
    skip: 'Skip to content',
    nav_gallery: 'Gallery',
    nav_about: 'About',
    nav_contact: 'Contact',
    hero_eyebrow: 'Game Artist · 3D Environment & Character',
    hero_title: 'I create <mark class="m-teal">worlds</mark> and <mark class="m-pink">characters</mark> for games.',
    hero_lead: 'Hi, I’m Bedirhan. I work on environment, character and level design, and build my own games on the side. Come in and explore the gallery, one hall at a time.',
    hero_cta: 'Explore the gallery',
    collage_label: 'Featured works',
    gallery_kicker: 'Gallery map',
    gallery_title: 'Which hall shall we start with?',
    gallery_lead: 'Every hall has its own colour. Open a work, then use the arrows to walk through the whole gallery.',
    hall: 'Hall',
    halls: 'halls',
    works: 'works',
    images: 'images',
    enter: 'Enter hall',
    fact_focus: 'Focus',
    fact_focus_v: 'Environment, character, level design',
    fact_bg: 'Background',
    fact_bg_v: 'Interior & industrial design',
    fact_where: 'Experience',
    fact_where_v: 'Turkey and Italy',
    fact_works: 'In the gallery',
    fact_works_v: 'works',
    about_title: 'I can describe every chapter of my life with a game.',
    about_p1: 'I graduated as an interior designer and worked for several companies in Italy and Turkey on interior design, industrial design and visual art. Meeting different cultures completely changed how I look at design and digital creation.',
    about_p2: 'I have always loved games. Over time I specialised in modelling, rendering and post-production for games: models, interiors, exteriors, concepts — in short, every kind of visualisation a game needs. The games I play, the films I watch, even a song I heard once can become a reference.',
    about_p3: 'These days I create 3D and 2D art and write code for my new indie game ideas.',
    contact_title: 'Shall we build a world together?',
    contact_lead: 'Write to me about a game project, a collaboration, or just to say hi.',
    contact_email: 'Send an email',
    back_top: 'Back to top ↑',
    viewer_hint: 'Use the ← → keys to walk between works.',
    prev_work: 'Previous work',
    next_work: 'Next work',
    close: 'Close',
    view_full: 'open full size',
    menu_open: 'Open menu',
    menu_close: 'Close menu',
    lang_switch: 'Türkçeye geç',
  },
};

/* ==========================================================
   Yardımcılar
   ========================================================== */

const $ = (sel) => document.querySelector(sel);

const storage = {
  get(key) { try { return localStorage.getItem(key); } catch { return null; } },
  set(key, value) { try { localStorage.setItem(key, value); } catch { /* özel pencere vb. */ } },
};

let lang = storage.get('lang') || ((navigator.language || '').toLowerCase().startsWith('tr') ? 'tr' : 'en');
const t = (key) => STRINGS[lang][key] ?? STRINGS.tr[key] ?? key;

// Dosya adı tek başına yazılmışsa Wix'teki görseldir; "/" içeriyorsa kendi dosyan ya da tam adres
const isWix = (file) => !/[/:]/.test(file);
const wixId = (file) => 'da1e3e_' + file.replace(/\.(\w+)$/, '~mv2.$1');

function imgUrl(file, size) {
  if (!isWix(file)) return file;
  const id = wixId(file);
  return `https://static.wixstatic.com/media/${id}/v1/fit/w_${size},h_${size},q_90/${id}`;
}

const fullUrl = (file) => (isWix(file) ? `https://static.wixstatic.com/media/${wixId(file)}` : file);

const imagesOf = (p) => [...new Set([p.cover, ...(p.images || [])])];

// Kartlar ve küçük önizlemeler için hafif görsel; "thumb" yoksa kapak kullanılır
const thumbOf = (p, size) => p.thumb || imgUrl(p.cover, size);

function formatDate(date, withMonth) {
  const d = new Date(`${date}-01T00:00:00`);
  return new Intl.DateTimeFormat(lang === 'tr' ? 'tr-TR' : 'en-GB', withMonth ? { month: 'long', year: 'numeric' } : { year: 'numeric' }).format(d);
}

const pad = (n) => String(n).padStart(2, '0');

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([k, v]) => {
    if (k === 'class') node.className = v;
    else if (k === 'text') node.textContent = v;
    else if (k === 'style') Object.entries(v).forEach(([p, val]) => node.style.setProperty(p, val));
    else node.setAttribute(k, v);
  });
  [].concat(children).filter(Boolean).forEach((c) => node.append(c));
  return node;
}

function lazyImg(src, alt, eager = false) {
  const img = el('img', { src, alt, loading: eager ? 'eager' : 'lazy', decoding: 'async' });
  const done = () => img.classList.add('loaded');
  if (img.complete) done();
  img.addEventListener('load', done);
  img.addEventListener('error', done);
  return img;
}

/* ---------- Salonlar ve gezinti sırası ---------- */
const HALL_DATA = HALLS.map((hall, i) => ({
  ...hall,
  num: pad(i + 1),
  items: PROJECTS.filter((p) => p.hall === hall.id).sort((a, b) => b.date.localeCompare(a.date)),
}));

// Görüntüleyicide oklarla gezilen sıra: salon salon, yeniden eskiye
const TOUR = HALL_DATA.flatMap((h) => h.items);
const hallOf = (p) => HALL_DATA.find((h) => h.id === p.hall);
const hallVars = (h) => ({ '--hall': h.color, '--tint': h.tint });

/* ==========================================================
   Sayfa bölümleri
   ========================================================== */

function renderCollage() {
  const box = $('#collage');
  box.replaceChildren();
  box.setAttribute('aria-label', t('collage_label'));

  FEATURED.map((slug) => TOUR.find((p) => p.slug === slug)).filter(Boolean).forEach((p) => {
    box.append(el('a', { class: 'c-card', href: `#/${p.slug}`, style: hallVars(hallOf(p)) }, [
      lazyImg(thumbOf(p, 900), p.title, true),
      el('span', { class: 'c-label', text: p.title }),
    ]));
  });

  const sticker = el('div', { class: 'sticker', 'aria-hidden': 'true' });
  sticker.innerHTML = `${PROJECTS.length} ${t('works')}<br>${HALLS.length} ${t('halls')}`;
  box.append(sticker);
}

function renderDoors() {
  const box = $('#doors');
  box.replaceChildren();

  HALL_DATA.forEach((h) => {
    const sample = h.items[0];
    box.append(el('a', { class: 'door', href: `#salon-${h.id}`, style: hallVars(h) }, [
      el('div', { class: 'door-img' }, sample ? lazyImg(thumbOf(sample, 700), '') : null),
      el('div', { class: 'door-body' }, [
        el('span', { class: 'door-num', text: `${t('hall')} ${h.num}` }),
        el('h3', { text: h.name[lang] }),
        el('div', { class: 'door-foot' }, [
          el('span', { text: `${h.items.length} ${t('works')}` }),
          el('span', { class: 'door-arrow', 'aria-hidden': 'true', text: '→' }),
        ]),
      ]),
    ]));
  });
}

function projectCard(p, hall) {
  const count = imagesOf(p).length;
  const wide = hall.layout === 'wide';

  return el('a', { class: 'card', href: `#/${p.slug}`, style: { '--tilt': `${(p.slug.length % 3) - 1}deg` } }, [
    el('div', { class: 'card-img' }, [
      lazyImg(thumbOf(p, wide ? 1200 : 800), p.title),
      p.status ? el('span', { class: 'card-status', text: p.status[lang] }) : null,
      count > 1 ? el('span', { class: 'card-count', text: `${count} ${t('images')}` }) : null,
    ]),
    el('div', { class: 'card-body' }, [
      el('div', { class: 'card-top' }, [
        el('h3', { text: p.title }),
        el('span', { class: 'card-year', text: formatDate(p.date) }),
      ]),
      wide ? el('p', { class: 'card-desc', text: p[lang] || p.en }) : null,
      el('ul', { class: 'tags' }, (p.tags || []).map((tag) => el('li', { text: tag }))),
    ]),
  ]);
}

function renderHalls() {
  const box = $('#halls');
  box.replaceChildren();

  HALL_DATA.forEach((h) => {
    box.append(el('section', { class: 'hall', id: `salon-${h.id}`, style: hallVars(h), 'aria-labelledby': `t-${h.id}` }, [
      el('div', { class: 'hall-head reveal' }, [
        el('span', { class: 'hall-num', 'aria-hidden': 'true', text: h.num }),
        el('div', { class: 'hall-title' }, [
          el('h2', { id: `t-${h.id}`, text: h.name[lang] }),
          el('p', { text: h.desc[lang] }),
        ]),
        el('span', { class: 'hall-count', text: `${h.items.length} ${t('works')}` }),
      ]),
      el('div', { class: `grid reveal${h.layout === 'wide' ? ' wide' : ''}` }, h.items.map((p) => projectCard(p, h))),
    ]));
  });
}

function applyStrings() {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((node) => { node.textContent = t(node.dataset.i18n); });
  document.querySelectorAll('[data-i18n-html]').forEach((node) => { node.innerHTML = t(node.dataset.i18nHtml); });

  const langBtn = $('#lang-btn');
  langBtn.textContent = lang === 'tr' ? 'EN' : 'TR';
  langBtn.setAttribute('aria-label', t('lang_switch'));
  $('#nav-toggle').setAttribute('aria-label', header.classList.contains('open') ? t('menu_close') : t('menu_open'));
  $('#v-prev').setAttribute('aria-label', t('prev_work'));
  $('#v-next').setAttribute('aria-label', t('next_work'));
  $('#v-close').setAttribute('aria-label', t('close'));
}

function renderAll(instant = false) {
  applyStrings();
  renderCollage();
  renderDoors();
  renderHalls();
  document.querySelectorAll('.reveal').forEach((node) => (instant ? node.classList.add('is-visible') : reveal(node)));
}

/* ---------- Kaydırınca belirme ---------- */
const revealer = 'IntersectionObserver' in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -6% 0px' })
  : null;

const reveal = (node) => (revealer ? revealer.observe(node) : node.classList.add('is-visible'));

/* ---------- Üst menü ---------- */
const header = $('#header');
const navToggle = $('#nav-toggle');

const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 10);
window.addEventListener('scroll', onScroll, { passive: true });

function setMenu(open) {
  header.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', open ? t('menu_close') : t('menu_open'));
  document.body.classList.toggle('locked', open);
}

navToggle.addEventListener('click', () => setMenu(!header.classList.contains('open')));
document.querySelectorAll('#nav a').forEach((a) => a.addEventListener('click', () => setMenu(false)));

$('#lang-btn').addEventListener('click', () => {
  lang = lang === 'tr' ? 'en' : 'tr';
  storage.set('lang', lang);
  renderAll(true);
  if (current) showProject(current.slug, false);
});

/* ==========================================================
   Eser görüntüleyici — adres çubuğunda #/eser-adi olarak açılır,
   böylece her eserin paylaşılabilir bir bağlantısı olur
   ========================================================== */

const viewer = $('#viewer');
const vScroll = $('#v-scroll');
const vStatus = el('p', { class: 'v-status' });
$('.v-info').prepend(vStatus);

const baseTitle = document.title;
let current = null;
let lastFocus = null;
let pushedFromPage = false;

function showProject(slug, resetScroll = true) {
  const index = TOUR.findIndex((p) => p.slug === slug);
  if (index < 0) return;

  const p = TOUR[index];
  const hall = hallOf(p);
  const images = imagesOf(p);
  current = p;

  viewer.style.setProperty('--hall', hall.color);
  viewer.style.setProperty('--tint', hall.tint);
  $('#v-hall').textContent = `${t('hall')} ${hall.num} · ${hall.name[lang]}`;
  $('#v-pos').textContent = `${index + 1} / ${TOUR.length}`;
  $('#v-title').textContent = p.title;
  $('#v-meta').textContent = `${formatDate(p.date, true)} · ${images.length} ${t('images')}`;
  $('#v-desc').textContent = p[lang] || p.en;
  $('#v-tags').className = 'tags v-tags';
  $('#v-tags').replaceChildren(...(p.tags || []).map((tag) => el('li', { text: tag })));
  vStatus.hidden = !p.status;
  vStatus.textContent = p.status ? p.status[lang] : '';

  const media = $('#v-media');
  media.replaceChildren();
  if (p.video) {
    media.append(el('figure', { class: 'v-figure v-video' }, el('iframe', {
      src: `https://www.youtube-nocookie.com/embed/${p.video}`,
      title: p.title,
      allow: 'accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen',
      loading: 'lazy',
    })));
  }
  images.forEach((file, i) => {
    const link = el('a', { href: fullUrl(file), target: '_blank', rel: 'noopener', 'aria-label': `${p.title} ${i + 1} — ${t('view_full')}` },
      lazyImg(imgUrl(file, 1800), `${p.title} — ${i + 1}`, i === 0));
    media.append(el('figure', { class: 'v-figure' }, link));
  });

  const prev = TOUR[(index - 1 + TOUR.length) % TOUR.length];
  const next = TOUR[(index + 1) % TOUR.length];
  const tourLink = (target, label, cls) => el('a', { class: `tour-link ${cls}`, href: `#/${target.slug}`, 'data-replace': '' }, [
    el('img', { src: thumbOf(target, 300), alt: '', loading: 'lazy' }),
    el('span', {}, [el('small', { text: label }), el('strong', { text: target.title })]),
  ]);
  $('#v-tour').replaceChildren(tourLink(prev, `← ${t('prev_work')}`, 'prev'), tourLink(next, `${t('next_work')} →`, 'next'));

  // Bir sonraki eserin kapağını önceden yükle
  new Image().src = imgUrl(next.cover, 1800);

  if (resetScroll) vScroll.scrollTop = 0;
  document.title = `${p.title} — Bedko`;
}

function openViewer(slug) {
  if (viewer.hidden) {
    lastFocus = document.activeElement;
    viewer.hidden = false;
    document.body.classList.add('locked');
    requestAnimationFrame(() => viewer.classList.add('open'));
  }
  showProject(slug);
  $('#v-close').focus({ preventScroll: true });
}

function hideViewer() {
  viewer.classList.remove('open');
  document.body.classList.remove('locked');
  document.title = baseTitle;
  current = null;
  setTimeout(() => { if (!current) viewer.hidden = true; }, 300);
  if (lastFocus && document.contains(lastFocus)) lastFocus.focus({ preventScroll: true });
}

let closing = false;

function closeViewer() {
  if (pushedFromPage) {
    closing = true;
    history.back();
  } else {
    history.replaceState(null, '', location.pathname + location.search);
    hideViewer();
  }
}

// Eserler arasında geçiş geçmişe yeni kayıt eklemez; "geri" tuşu doğrudan galeriye döner
const goTo = (slug) => location.replace(`#/${slug}`);
const step = (dir) => {
  if (!current) return;
  const i = TOUR.indexOf(current);
  goTo(TOUR[(i + dir + TOUR.length) % TOUR.length].slug);
};

function route() {
  const match = location.hash.match(/^#\/([\w-]+)$/);
  const isProject = match && TOUR.some((p) => p.slug === match[1]);

  // Kapatırken "geri" bizi yine bir esere götürdüyse (ör. adres elle değiştirilmişse) yine de kapat
  if (closing) {
    closing = false;
    pushedFromPage = false;
    if (isProject) history.replaceState(null, '', location.pathname + location.search);
    hideViewer();
    return;
  }

  if (isProject) {
    openViewer(match[1]);
  } else if (!viewer.hidden) {
    pushedFromPage = false;
    hideViewer();
  }
}

document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href^="#/"]');
  if (!link || e.ctrlKey || e.metaKey || e.shiftKey) return;
  if (link.hasAttribute('data-replace')) {
    e.preventDefault();
    goTo(link.getAttribute('href').slice(2));
  } else if (viewer.hidden) {
    pushedFromPage = true;
  }
});

$('#v-close').addEventListener('click', closeViewer);
$('#v-prev').addEventListener('click', () => step(-1));
$('#v-next').addEventListener('click', () => step(1));

document.addEventListener('keydown', (e) => {
  if (viewer.hidden) {
    if (e.key === 'Escape' && header.classList.contains('open')) setMenu(false);
    return;
  }
  if (e.key === 'Escape') closeViewer();
  else if (e.key === 'ArrowLeft') step(-1);
  else if (e.key === 'ArrowRight') step(1);
  else if (e.key === 'Tab') {
    // Odak görüntüleyicinin dışına çıkmasın
    const focusables = [...viewer.querySelectorAll('button, a[href], iframe')];
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }
});

window.addEventListener('hashchange', route);

/* ---------- Başlat ---------- */
const emailBtn = $('#email-btn');
emailBtn.href = `mailto:${CONTACT_EMAIL}`;
$('#work-count').textContent = PROJECTS.length;
$('#year').textContent = new Date().getFullYear();

renderAll();
onScroll();
route();

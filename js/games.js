/* ==========================================================
   OYUNLAR — stüdyonun oyunları buradan düzenlenir
   ----------------------------------------------------------
   Sıra, sayfadaki sıradır. Boş bırakılan alanlar sayfada görünmez:
   kapak yoksa oyunun tonlarıyla boyanmış bir yer tutucu çıkar,
   metin yoksa yalnızca oyunun adı görünür.

   Görselleri images/oyun-adi/ klasörüne koy:
     kapak  → images/oyun-adi/kapak.jpg   (geniş, en az 2400 px)
     diğerleri → images/oyun-adi/01.jpg, 02.jpg …

   layout — oyunun sayfadaki yerleşimi:
     'wide'   tam genişlikte, alt kenarı fırçayla biten görsel
     'right'  solda başlık, sağda büyük görsel
     'left'   solda uzun dikey görsel, sağda başlık
     'banner' geniş görsel, köşesine iliştirilmiş müze etiketi gibi başlık

   tone — yer tutucunun ve oyunun vurgu renkleri: [açık, koyu]
   light — tonlar koyuysa true (yer tutucudaki yazı açık renk olur)
   ========================================================== */

const GAMES = [
  {
    slug: 'expedition-salt',
    title: 'Expedition – Salt',
    layout: 'wide',
    tone: ['#eceae4', '#aeb6b9'],
    cover: '',
    images: [],
    tr: '',
    en: '',
    links: [],   // ör. { label: 'Steam', url: 'https://…' }
  },
  {
    slug: 'overnight',
    title: 'Overnight',
    layout: 'right',
    tone: ['#3a4150', '#101217'],
    light: true,
    cover: '',
    images: [],
    tr: '',
    en: '',
    links: [],
  },
  {
    slug: 'the-last-lit-tower',
    title: 'The Last Lit Tower',
    layout: 'left',
    tone: ['#4a4038', '#141210'],
    light: true,
    cover: '',
    images: [],
    tr: '',
    en: '',
    links: [],
  },
  {
    slug: 'otel-tycoon',
    title: 'Otel Tycoon',
    layout: 'banner',
    tone: ['#f3d2a8', '#d98a66'],
    cover: '',
    images: [],
    tr: '',
    en: '',
    links: [],
  },
];

# bedkoarts — stüdyo sitesi

bedkoarts bağımsız oyun stüdyosunun tek sayfalık sitesi: www.bedkoarts.com. Kurulum gerektirmez; sade HTML, CSS ve JavaScript ile yazıldı. Türkçe ve İngilizce arasında geçiş yapılabilir.

Eski kişisel portfolyo (Bedirhan Köse · Game Artist) `bedirhan-kose-portfolyo` dalında, bütün görselleriyle birlikte duruyor.

## Tasarımın dili

- **Renkler:** Kırık beyaz zemin, taş grisi yüzeyler, kömür rengi yazı. Tek vurgu rengi kor turuncusu; yalnızca adın sonundaki nokta, etiket çizgileri ve bağlantı altı çizgilerinde kullanılıyor.
- **Yazı:** Başlıklarda Fraunces, metinlerde Schibsted Grotesk.
- **Fırça izleri:** `assets/` içindeki SVG'ler. Hepsi tek renkli maske olarak kullanılıyor, rengini `css/style.css` belirliyor. Adın arkasındaki geniş darbe (`sweep.svg`), etiketlerin önündeki kısa darbe (`underline.svg`), kor noktası (`daub.svg`) ve görsellerin fırçayla biten kenarları (`edge-*.svg`) bunlardan oluşuyor.
- **Hareket:** Yalnızca yavaş belirme ve açılışta fırça darbesinin boyanması. "Hareketi azalt" ayarı açık olan ziyaretçilerde hiçbiri oynamaz.

Fırça izleri şimdilik kodla üretildi. Kendi boyadığın parçalar gelince aynı adla, siyah ya da tek renk ve şeffaf zeminli PNG veya SVG olarak `assets/` klasörüne koyman yeterli. CSS'te dosya uzantısını değiştirmen gerekebilir.

## Oyun ekleme ve düzenleme

Bütün oyunlar `js/games.js` içindeki `GAMES` listesinde. Dosyanın başındaki açıklama her alanı anlatıyor. Kısaca:

| Alan | Ne işe yarar |
|---|---|
| `title` | Oyunun adı |
| `layout` | Yerleşim: `wide`, `right`, `left` ya da `banner` |
| `tone` | Görsel gelene kadar yer tutucuyu boyayan iki renk |
| `cover` | Kapak görseli, ör. `images/overnight/kapak.jpg` |
| `images` | Kapağın altında görünecek diğer görseller |
| `tr`, `en` | Kısa açıklama; boş bırakılırsa görünmez |
| `links` | Steam, itch.io, fragman gibi bağlantılar |

Kapak görseli yokken oyun, kendi tonlarıyla boyanmış ve "Görseller hazırlanıyor" yazan bir yer tutucuyla görünür.

Görseller için klasör yapısı:

```
images/
  overnight/
    kapak.jpg   ← geniş kapak (en az 2400 px genişlik)
    01.jpg …    ← diğer görseller
```

## Diğer metinler

| Ne değişecek | Nerede |
|---|---|
| Arayüz metinleri (Türkçe/İngilizce) | `js/main.js` içindeki `STRINGS` |
| E-posta adresi | `js/main.js` içindeki `CONTACT_EMAIL` |
| Renkler ve yazı tipleri | `css/style.css` en üstteki `:root` bölümü |

## Yayın

Site GitHub Pages üzerinden yayınlanıyor. Bakım sırasında Pages `bakim` dalını yayınlıyor; o dalda yalnızca bakım sayfası var. Asıl site `main` dalında. Siteyi yeniden açmak için GitHub'da Settings → Pages bölümünde kaynağı `main` dalına almak yeterli.

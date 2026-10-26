# Bedko — Game Artist Portfolyosu

Renkli, galeri gibi gezilen tek sayfalık portfolyo sitesi. Kurulum gerektirmez; sade HTML, CSS ve JavaScript ile yazıldı. Türkçe ve İngilizce arasında geçiş yapılabilir.

## Nasıl çalışıyor

- **Salonlar:** Eserler dört renkli salonda sergileniyor: Çevre & Level, Karakterler, Oyunlarım ve Animasyon.
- **Sergi odası:** Bir esere tıklayınca tüm görselleri büyük boyutta açılır. Önceki/sonraki okları ve klavyedeki ← → tuşlarıyla bütün galeri baştan sona gezilebilir.
- **Paylaşılabilir bağlantılar:** Her eserin kendi adresi var, örneğin `index.html#/fun-world`.
- **Dil:** Ziyaretçinin tarayıcı diline göre Türkçe ya da İngilizce açılır, sağ üstteki düğmeyle değiştirilebilir.

## Görüntüleme

`index.html` dosyasına çift tıkla, tarayıcıda açılır.

## Kendi içeriğini düzenleme

| Ne değişecek | Nerede |
|---|---|
| Eserler, açıklamalar, görseller, etiketler | `js/data.js` içindeki `PROJECTS` listesi |
| Salon adları, açıklamaları, renkleri | `js/data.js` içindeki `HALLS` listesi |
| E-posta adresi | `js/main.js` içindeki `CONTACT_EMAIL` |
| Girişteki kolajda görünen eserler | `js/main.js` içindeki `FEATURED` |
| Arayüz metinleri (Türkçe/İngilizce) | `js/main.js` içindeki `STRINGS` |
| Hakkımda bölümündeki araçlar | `index.html` içindeki `chips` listesi |
| Genel renkler ve yazı tipleri | `css/style.css` en üstteki `:root` bölümü |

Yeni bir eser eklemek için `js/data.js` dosyasının başındaki örnek bloğu kopyalayıp doldurman yeterli. Eser kendi salonunda tarihine göre otomatik sıralanır. Sergi odasındaki gezinti sırası da buna göre oluşur.

Eserin bir videosu varsa YouTube kimliğini ekle: `video: 'dQw4w9WgXcQ'`. Kimlik, `youtube.com/watch?v=` ifadesinden sonra gelen kısımdır. Video, sergi odasında görsellerin üstünde gösterilir.

## Görseller

Bütün görseller eski Wix sitesinden orijinal boyutlarıyla `images/` klasörüne indirildi. Site artık Wix'e bağlı değil. Klasör yapısı:

```
images/
  fun-world/
    01.jpg      ← kapak (sergi odasında ilk görsel)
    02.jpg …    ← albümün geri kalanı
    thumb.jpg   ← kartlarda görünen küçük sürüm (~1000 px)
```

Yeni bir eser eklerken `thumb.jpg` hazırlamak zorunlu değil; yoksa kapak görseli kullanılır. Ama sayfanın hızlı açılması için kapak görselinin genişliği 1000 px civarında olan bir kopyasını `thumb.jpg` olarak eklemen iyi olur. Büyük görseller için genişlik 2000–2500 px yeterli.

## Yayınlama (ücretsiz)

- **Netlify:** [app.netlify.com/drop](https://app.netlify.com/drop) adresine `portfolio` klasörünü sürükleyip bırak. Sonra Domain settings bölümünden `bedkoarts.com` alan adını bağlayabilirsin.
- **GitHub Pages:** Dosyaları bir GitHub deposuna yükle ve Settings → Pages bölümünden yayına al.
- **Alan adı:** `bedkoarts.com` Wix üzerinden alındıysa, Wix'ten başka bir sağlayıcıya taşıyabilir ya da DNS kayıtlarını Netlify'a yönlendirebilirsin.

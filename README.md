# 📺 Samsung TV Smart Dashboard & Ambient Art Mode (TizenBrew Uyumlu)

Samsung Smart TV (Tizen) ve TizenBrew için özel olarak tasarlanmış; **hiçbir üyelik veya API anahtarı gerektirmeyen**, TV kullanılmadığında lüks bir **resim tablosuna (The Frame moduna)** dönüşen, 3-5 dakikada bir sağ üst köşeden **10 saniye aralıklarla hava durumu, namaz vakitleri ve günün bilgilerini döndüren** akıllı bir günlük dashboard uygulaması.

---

## ✨ Özellikler

- 🔑 **%100 Ücretsiz & API Keysiz (Public APIs):**
  - **Hava Durumu:** Open-Meteo API (Anlık derece, hissedilen, nem, rüzgar hızı, gün doğumu/batımı, 3 günlük tahmin).
  - **Namaz Vakitleri:** Aladhan API (Diyanet İşleri Başkanlığı hesaplama metodu 13, İmsak, Güneş, Öğle, İkindi, Akşam, Yatsı, Hicri takvim).
  - **Canlı Geri Sayım:** Bir sonraki vakte kalan süreyi saniye saniye canlı sayar.
  - **Döviz Kurları:** Açık kur servisinden USD/TRY ve EUR/TRY kurları.
  - **Sanat Koleksiyonu:** Van Gogh, Claude Monet, Osman Hamdi Bey, Hokusai, Rembrandt ve doğa manzaraları.
  - **Günün Sözü:** Her gün değişen ilham verici sözler ve hikmetler.

- 🖼️ **Resim Tablosu Modu (Ambient Art Mode - The Frame Hissi):**
  - TV'de tuşlama yapılmadığında (varsayılan 45 saniye) ekran otomatik olarak yüksek çözünürlüklü bir resim tablosuna dönüşür.
  - Ekranın sol altında eserin adı ve ressamı (örneğin: *"Yıldızlı Gece — Vincent van Gogh"*) zarif bir cam etiketle gösterilir.
  - Tablolar belirli aralıklarla yumuşak crossfade animasyonu ile değişir.

- ⏱️ **Periyodik Bilgi Popup Döngüsü (10sn Aralıklarla):**
  - Resim tablosu modundayken her **3-5 dakikada bir** (ayarlanabilir):
  - Ekranın sağ üst köşesinden pürüzsüz bir slide-in animasyonuyla cam/glassmorphism bilgi kartı açılır.
  - **1. Kart (10 saniye):** Hava Durumu (Sıcaklık, durum, ikon, nem, rüzgar).
  - **2. Kart (10 saniye):** Namaz Vakitleri & Sıradaki Vakte Geri Sayım.
  - **3. Kart (10 saniye):** Saat, Tarih, Döviz Kurları ve Günün Sözü.
  - Her kartın altında 10 saniyelik şık neon ilerleme çubuğu akar.
  - 3 adım tamamlandığında popup pürüzsüzce kapanır, **resim tablosu ekranda kalmaya devam eder!**

- 🎮 **Kumanda Etkileşimi:**
  - Tablo modundayken kumandadan **HERHANGİ BİR TUŞA** basıldığında anında tam Dashboard ekranına döner.
  - Tuşlama bırakıldığında süre dolunca tekrar tablo moduna geçer.

---

## 🚀 Tizen TV ve TizenBrew ile Kullanım Yöntemleri

### Yöntem 1: TizenBrew Web Linki (En Kolay & Hızlı)

1. Projeyi ücretsiz olarak **GitHub Pages**, **Vercel** veya **Netlify**'a deploy edin (yalnızca statik HTML/CSS/JS dosyalarıdır, build gerektirmez).
2. Samsung TV'nizde **TizenBrew** uygulamasını açın.
3. TizenBrew ayarlarından veya URL girişinden yayınladığınız linki (örn: `https://kullaniciadi.github.io/tizen-dashboard/`) girin.
4. Dashboard TV'nizde tam ekran olarak açılacaktır.

### Yöntem 2: Ev İçi Yerel Ağ Üzerinden Çalıştırma

Bilgisayarınız TV ile aynı Wi-Fi ağına bağlıysa:
1. Bu proje klasöründe terminal açın:
   ```bash
   npm start
   # veya
   python -m http.server 3000
   ```
2. Bilgisayarınızın yerel IP adresini öğrenin (örneğin: `192.168.1.50`).
3. TV'deki TizenBrew veya Samsung İnternet Tarayıcısından `http://192.168.1.50:3000` adresine girin.

### Yöntem 3: Tizen Studio ile WGT Paketi Olarak Yükleme

Proje içerisinde hazır `config.xml` bulunmaktadır:
1. Tizen Studio'da **File > Import > Tizen > Web Projects into Workspace** seçeneğini kullanın.
2. Projeyi seçip **Build Package (.wgt)** oluşturun.
3. Tizen Device Manager ile TV'nize gönderin (Deploy / Run as Tizen Web Application).

---

## 🎮 Kumanda ve Klavye Kısayolları

| Tuş | İşlev |
|---|---|
| **Herhangi Bir Tuş** | Resim tablosu modundan çıkıp tam Dashboard'a döner |
| **OK / Enter / Boşluk** | Dashboard modundayken hemen Resim Tablosu Moduna geçer |
| **Kırmızı Tuş / S** | Ayarlar Menüsünü Açar (Şehir ve süre ayarları) |
| **Yeşil Tuş / T** | Test: 10 saniyelik Popup Bilgi Döngüsünü hemen başlatır |
| **Return / Geri / ESC** | Açık menüyü kapatır |

---

## ⚙️ Ayarlar Menüsü

Dashboard açıkken **⚙️ Ayarlar** butonuna (veya kumandadan `Kırmızı` / klavyeden `S` tuşuna) basarak:
- **Şehir:** Türkiye'nin 81 ilinden birini seçebilirsiniz (Varsayılan: İstanbul).
- **İnaktivite Süresi:** Tablo moduna geçmeden önce ne kadar bekleneceği (15 sn, 30 sn, 45 sn, 1 dk, 2 dk).
- **Popup Sıklığı:** Tablo modundayken sağ üstteki bilgi kartlarının kaç dakikada bir çıkacağı (1 dk, 2 dk, 3 dk, 5 dk).
- Tercihler TV'nin yerel hafızasına (`localStorage`) kaydedilir, TV kapatılıp açılsa bile hatırlanır.

---

## 🛠️ Proje Mimarisi

```
tizen-dashboard/
├── index.html           # TV Arayüzü (Dashboard + Ambient View + Popup Kartı)
├── config.xml           # Tizen Web App / Samsung TV paket yapılandırması
├── tizenbrew-module.json# TizenBrew modül metadataları
├── package.json         # Yerel sunucu komutları
├── css/
│   └── style.css        # OLED/QLED optimize, 1080p/4K glassmorphic stiller
├── data/
│   ├── cities.js        # 81 ilin koordinat ve Aladhan eşleşmeleri
│   ├── artworks.js      # Dünyaca ünlü yüksek çözünürlüklü tablolar
│   └── quotes.js        # İlham verici sözler ve günün hikmetleri
└── js/
    ├── api.js           # Open-Meteo, Aladhan & Döviz API istemcisi
    ├── state.js         # Durum, süreler ve namaz vakti hesaplamaları
    ├── dashboard.js     # Dashboard panelleri ve saat render'ı
    ├── ambient.js       # Resim tablosu & 10sn aralıklı popup döngüsü
    ├── remote.js        # Kumanda tuşları & inaktivite (idle) yöneticisi
    └── app.js           # Ana başlatıcı
```

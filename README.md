# 📺 Samsung TV Smart Dashboard & Ambient Art Mode (Hosted App)

Samsung Smart TV (Tizen) için özel olarak hazırlanmış; **hiçbir üyelik veya API anahtarı gerektirmeyen**, TV kullanılmadığında lüks bir **resim tablosuna (The Frame moduna)** dönüşen, 3-5 dakikada bir sağ üst köşeden **10 saniye aralıklarla hava durumu, namaz vakitleri ve günün bilgilerini döndüren** akıllı bir günlük dashboard uygulaması.

> 🚀 **Hosted App Mimarisi Sayesinde:** TV'nize sadece bir kez mini `.wgt` paketini yüklersiniz ve TV ana ekranına (Smart Hub) sabitlersiniz. Yapacağınız tüm güncellemeler GitHub (`kocsefa/tizen-dashboard`) üzerinden anında TV'ye yansır; **tekrardan TV'ye WGT yüklemeniz gerekmez!**

---

## ✨ Temel Özellikler

- 🔑 **%100 Ücretsiz & API Keysiz Public Servisler:**
  - **Hava Durumu:** Open-Meteo API (Anlık derece, hissedilen, nem, rüzgar hızı, gün doğumu/batımı, 3 günlük tahmin).
  - **Namaz Vakitleri:** Aladhan API (Diyanet İşleri Başkanlığı metodu 13 ile İmsak, Güneş, Öğle, İkindi, Akşam, Yatsı, Hicri takvim).
  - **Canlı Geri Sayım:** Bir sonraki vakte kalan süreyi saniye saniye canlı sayar.
  - **Döviz Kurları:** Açık kur servisinden USD/TRY ve EUR/TRY kurları.
  - **Sanat Koleksiyonu:** Van Gogh, Claude Monet, Osman Hamdi Bey, Hokusai, Rembrandt ve doğa manzaraları.
  - **Günün Sözü:** Her gün değişen ilham verici sözler ve hikmetler.

- 🖼️ **Resim Tablosu Modu (Ambient Art Mode — The Frame Hissi):**
  - TV'de herhangi bir tuşlama yapılmadığında (varsayılan 45 saniye, ayarlardan seçilebilir) ekran otomatik olarak yüksek çözünürlüklü bir resim tablosuna dönüşür.
  - Ekranın sol altında eserin adı ve ressamı (örneğin: *"Yıldızlı Gece — Vincent van Gogh"*) zarif bir cam etiketle gösterilir.
  - Tablolar belirli aralıklarla yumuşak crossfade animasyonu ile değişir.

- ⏱️ **Periyodik Bilgi Popup Döngüsü (10sn Aralıklarla):**
  - Resim tablosu modundayken her **3-5 dakikada bir** (ayarlanabilir):
  - Ekranın sağ üst köşesinden pürüzsüz bir slide-in animasyonuyla cam bilgi kartı açılır:
    - **1. Kart (10 saniye):** Hava Durumu (Sıcaklık, durum, ikon, nem, rüzgar).
    - **2. Kart (10 saniye):** Namaz Vakitleri & Sıradaki Vakte Geri Sayım.
    - **3. Kart (10 saniye):** Saat, Tarih, Döviz Kurları ve Günün Sözü.
    - Her kartın altında 10 saniyelik şık bir neon ilerleme çubuğu (progress bar) akar.
  - 3 adım tamamlandığında popup pürüzsüzce kapanır, **resim tablosu ekranda kalmaya devam eder!**

- 🎮 **Kumanda Etkileşimi & Çıkış:**
  - Tablo modundayken kumandadan **HERHANGİ BİR TUŞA** basıldığında anında Dashboard ekranına döner.
  - Dashboard modundayken **[Geri / Return]** tuşuna iki kez basıldığında uygulamadan TV ana ekranına güvenle çıkılır.

---

## 🌐 1. Adım: GitHub Pages'i Aktifleştirme (1 Seferlik)

Uygulamanın internet üzerinden TV'ye akması için repo ayarlarından GitHub Pages'i açın:
1. GitHub'da `kocsefa/tizen-dashboard` deponuza gidin.
2. **Settings** > **Pages** menüsünü açın.
3. **Build and deployment** > **Branch** kısmından `main` dalını ve `/ (root)` klasörünü seçip **Save** deyin.
4. Birkaç dakika içinde siteniz şu adreste yayında olacaktır:
   👉 **`https://kocsefa.github.io/tizen-dashboard/`**

---

## 📺 2. Adım: Mini WGT Paketini TV'ye Yükleme

Proje kök dizininde hazır paketlenmiş **`tizen-dashboard-hosted.wgt`** (sadece ~26 KB) dosyası bulunmaktadır.

### Yükleme Yöntemleri:

#### Yöntem A: Tizen Device Manager / SDB ile (Önerilen)
1. Samsung TV'nizde Geliştirici Modunu (Developer Mode) açın ve bilgisayarınızın IP adresini girin.
2. Bilgisayarınızdan TV'ye bağlanın:
   ```bash
   sdb connect <TV_IP_ADRESI>
   ```
3. WGT paketini TV'ye kurun:
   ```bash
   tizen install -n tizen-dashboard-hosted.wgt -t <HEDEF_CIHAZ>
   # veya
   sdb install tizen-dashboard-hosted.wgt
   ```

#### Yöntem B: Tizen Studio ile
1. Tizen Studio'da **File > Import > Tizen > Web Projects into Workspace** seçin.
2. `hosted-wgt` klasörünü gösterip projeyi içeri aktarın.
3. Projeye sağ tıklayıp **Run As > Tizen Web Application** diyerek TV'nize gönderin.

#### Yöntem C: WGT'yi Yeniden Paketlemek İsterseniz
Proje klasöründeki `build-wgt.bat` dosyasına çift tıklamanız (veya terminalde `.\build-wgt.ps1` çalıştırmanız) yeterlidir. Otomatik olarak güncel `tizen-dashboard-hosted.wgt` dosyasını üretir.

---

## 📌 3. Adım: TV Ana Ekranına Sabitleme

1. TV'nizin Smart Hub menüsünde **Apps (Uygulamalarım)** bölümüne gidin.
2. **Smart Dashboard** uygulamasını bulun.
3. Kumandadan üzerine basılı tutarak veya seçeneklerden **"Ana Ekrana Ekle (Pin to Home)"** seçin.
4. Artık TV açıldığında veya kumandadan tek tıkla doğrudan dashboard'unuza girebilirsiniz!

---

## 🔄 Güncelleme Yapmak İstediğinizde

Artık WGT ile işiniz bitti!
Projede herhangi bir tasarım, yeni özellik veya ayar değişikliği yaptığınızda:
```bash
git add .
git commit -m "Yeni guncelleme"
git push origin main
```
TV'nizdeki uygulama açıldığı anda en son kodları otomatik olarak GitHub'dan çekecektir!

---

## 🎮 Kumanda Kısayolları

| Tuş | İşlev |
|---|---|
| **Herhangi Bir Tuş** | Resim tablosu modundan çıkıp tam Dashboard'a döner |
| **OK / Enter** | Dashboard modundayken hemen Resim Tablosu Moduna geçer |
| **Kırmızı Tuş / S** | Ayarlar Menüsünü Açar (Şehir ve süre ayarları) |
| **Yeşil Tuş / T** | Test: 10 saniyelik Popup Bilgi Döngüsünü hemen test eder |
| **Return / Geri (2x)** | TV Ana Ekranına Çıkış Yapar |

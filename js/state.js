// ==========================================
// Tizen TV Dashboard - Uygulama Durum Yönetimi
// Samsung Tizen TV Uyumlu (Chrome 56+ Güvenli ES6)
// ==========================================

const State = {
  // Varsayılan Ayarlar
  config: {
    cityId: "istanbul",
    cityName: "İstanbul",
    cityLat: 41.0082,
    cityLon: 28.9784,
    idleTimeoutSec: 45, // Resim tablosuna geçiş inaktivite süresi (saniye)
    ambientPopupIntervalMin: 3, // Resim tablosundayken popup döngüsünün sıklığı (dakika, örn 3-5 dk)
    ambientPopupStepSec: 10, // Her bir bilgi kartının ekranda kalma süresi (10 saniye)
    artworkIntervalSec: 60, // Tablonun değişme süresi (saniye)
    popupCorner: "top-right", // Popup köşesi: 'top-right' veya 'bottom-right'
  },

  // Çalışma Zamanı Verileri
  data: {
    weather: null,
    prayer: null,
    rates: null,
    quote: null,
    artworks: [],
    currentArtworkIndex: 0,
    nextPrayerInfo: null // { name, time, diffMinutes, diffFormatted }
  },

  // Mod Durumu: 'dashboard' | 'ambient'
  currentMode: "dashboard",
  
  // Resim tablosu modundaki popup gösterim durumu
  isPopupActive: false,

  // Ayarları Yükle / Kaydet
  init() {
    try {
      const saved = localStorage.getItem("tizen_dash_config");
      if (saved) {
        this.config = Object.assign({}, this.config, JSON.parse(saved));
      }
    } catch (e) {
      console.warn("Ayarlar yüklenemedi:", e);
    }

    // Şehir bilgisini doğrula
    this.updateCity(this.config.cityId);

    // Sanat eserlerini ata
    if (window.ARTWORKS && window.ARTWORKS.length > 0) {
      this.data.artworks = window.ARTWORKS.slice(0);
    }

    // Rastgele ilk günün sözünü seç
    if (window.DAILY_QUOTES && window.DAILY_QUOTES.length > 0) {
      const randIdx = Math.floor(Math.random() * window.DAILY_QUOTES.length);
      this.data.quote = window.DAILY_QUOTES[randIdx];
    }
  },

  updateCity(cityId) {
    if (!window.TURKEY_CITIES) return;
    const found = window.TURKEY_CITIES.find(c => c.id === cityId);
    if (found) {
      this.config.cityId = found.id;
      this.config.cityName = found.name;
      this.config.cityLat = found.lat;
      this.config.cityLon = found.lon;
    }
  },

  saveConfig() {
    try {
      localStorage.setItem("tizen_dash_config", JSON.stringify(this.config));
    } catch (e) {
      console.warn("Ayarlar kaydedilemedi:", e);
    }
  },

  // Namaz için sonraki vakti ve kalan süreyi hesapla
  calculateNextPrayer() {
    if (!this.data.prayer) return null;
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const currentSeconds = now.getSeconds();

    const prayerOrder = [
      { key: "Imsak", label: "İmsak", time: this.data.prayer.Imsak },
      { key: "Gunes", label: "Güneş", time: this.data.prayer.Gunes },
      { key: "Ogle", label: "Öğle", time: this.data.prayer.Ogle },
      { key: "Ikindi", label: "İkindi", time: this.data.prayer.Ikindi },
      { key: "Aksam", label: "Akşam", time: this.data.prayer.Aksam },
      { key: "Yatsi", label: "Yatsı", time: this.data.prayer.Yatsi },
    ];

    let next = null;
    let nextDiffMin = Infinity;

    for (let i = 0; i < prayerOrder.length; i++) {
      const p = prayerOrder[i];
      const parts = p.time.split(":").map(Number);
      const h = parts[0];
      const m = parts[1];
      if (isNaN(h) || isNaN(m)) continue;
      const prayerMinutes = h * 60 + m;

      if (prayerMinutes > currentMinutes) {
        next = p;
        nextDiffMin = prayerMinutes - currentMinutes;
        break;
      }
    }

    // Eğer yatsı da geçtiyse sonraki vakit yarınki İmsak'tır
    if (!next) {
      const p = prayerOrder[0];
      const parts = p.time.split(":").map(Number);
      const h = parts[0];
      const m = parts[1];
      const tomorrowImsakMin = (24 * 60) - currentMinutes + (h * 60 + m);
      next = Object.assign({}, p, { isTomorrow: true });
      nextDiffMin = tomorrowImsakMin;
    }

    // Kalan saat, dakika, saniye
    const totalRemainingSeconds = (nextDiffMin * 60) - currentSeconds;
    const safeTotal = Math.max(0, totalRemainingSeconds);
    const remHours = Math.floor(safeTotal / 3600);
    const remMinutes = Math.floor((safeTotal % 3600) / 60);
    const remSeconds = safeTotal % 60;

    // Tizen TV uyumlu güvenli 2 basamak formatı (padStart yerine)
    const pad = (n) => (n < 10 ? "0" : "") + n;
    const diffFormatted = pad(remHours) + ":" + pad(remMinutes) + ":" + pad(remSeconds);

    this.data.nextPrayerInfo = {
      label: next.label,
      time: next.time,
      isTomorrow: next.isTomorrow || false,
      diffFormatted: diffFormatted,
      remHours: remHours,
      remMinutes: remMinutes,
      remSeconds: remSeconds
    };

    return this.data.nextPrayerInfo;
  }
};

window.State = State;

// ==========================================
// Tizen TV Dashboard - Ana Başlatıcı (App)
// Samsung Tizen TV Uyumlu (Chrome 56+ Güvenli ES6)
// ==========================================

const App = {
  async init() {
    console.log("Tizen Dashboard başlatılıyor...");

    // 1. Durum ve Modülleri Başlat
    State.init();
    Dashboard.init();
    Ambient.init();
    Remote.init();

    // 2. Ayarlar Modalını ve Kontrollerini Bağla
    this.setupSettingsUI();

    // 3. İlk Render (Boş veya Cache verilerle hızlı ekran açılışı)
    Dashboard.render();

    // 4. Canlı Verileri Çek
    await this.refreshAllData();

    // 5. Periyodik Veri Yenileme
    // Hava durumu her 30 dakikada bir
    setInterval(() => this.refreshWeather(), 30 * 60 * 1000);
    // Namaz vakitleri her 4 saatte bir
    setInterval(() => this.refreshPrayer(), 4 * 60 * 60 * 1000);
    // Döviz kurları her 1 saatte bir
    setInterval(() => this.refreshRates(), 60 * 60 * 1000);

    console.log("Tizen Dashboard hazır!");
  },

  async refreshAllData() {
    // Tizen TV uyumlu Promise.all (allSettled eski Tizen Chromium'da hata verir)
    try {
      await Promise.all([
        this.refreshWeather().catch(err => console.warn("Hava durumu yenilenirken hata:", err)),
        this.refreshPrayer().catch(err => console.warn("Namaz vakitleri yenilenirken hata:", err)),
        this.refreshRates().catch(err => console.warn("Kurlar yenilenirken hata:", err))
      ]);
    } catch (e) {
      console.warn("Veri güncelleme hatası:", e);
    }
    Dashboard.render();
  },

  async refreshWeather() {
    try {
      const weather = await API.fetchWeather(State.config.cityLat, State.config.cityLon);
      State.data.weather = weather;
      Dashboard.renderWeather();
    } catch (e) {
      console.warn("Hava durumu yenilenirken hata:", e);
    }
  },

  async refreshPrayer() {
    try {
      const prayer = await API.fetchPrayerTimes(
        State.config.cityName,
        "Turkey",
        State.config.cityLat,
        State.config.cityLon
      );
      State.data.prayer = prayer;
      Dashboard.renderPrayerTimes();
    } catch (e) {
      console.warn("Namaz vakitleri yenilenirken hata:", e);
    }
  },

  async refreshRates() {
    try {
      const rates = await API.fetchExchangeRates();
      State.data.rates = rates;
      Dashboard.renderBottomWidgets();
    } catch (e) {
      console.warn("Kurlar yenilenirken hata:", e);
    }
  },

  setupSettingsUI() {
    const citySelect = document.getElementById("setting-city-select");
    const idleSelect = document.getElementById("setting-idle-select");
    const popupIntervalSelect = document.getElementById("setting-popup-interval-select");
    const saveBtn = document.getElementById("setting-save-btn");
    const closeBtn = document.getElementById("setting-close-btn");
    const openSettingsBtn = document.getElementById("btn-open-settings");
    const triggerAmbientBtn = document.getElementById("btn-trigger-ambient");
    const testPopupBtn = document.getElementById("btn-test-popup");

    // Şehir listesini doldur
    if (citySelect && window.TURKEY_CITIES) {
      citySelect.innerHTML = window.TURKEY_CITIES.map(c => `
        <option value="${c.id}" ${c.id === State.config.cityId ? 'selected' : ''}>${c.name}</option>
      `).join("");
    }

    if (idleSelect) {
      idleSelect.value = String(State.config.idleTimeoutSec);
    }

    if (popupIntervalSelect) {
      popupIntervalSelect.value = String(State.config.ambientPopupIntervalMin);
    }

    // Buton Olayları
    if (openSettingsBtn) {
      openSettingsBtn.addEventListener("click", () => Remote.openSettings());
    }

    if (closeBtn) {
      closeBtn.addEventListener("click", () => Remote.closeSettings());
    }

    if (triggerAmbientBtn) {
      triggerAmbientBtn.addEventListener("click", () => Ambient.enterAmbientMode());
    }

    if (testPopupBtn) {
      testPopupBtn.addEventListener("click", () => {
        Ambient.enterAmbientMode();
        setTimeout(() => Ambient.startPopupSequence(), 500);
      });
    }

    if (saveBtn) {
      saveBtn.addEventListener("click", async () => {
        if (citySelect) {
          State.updateCity(citySelect.value);
        }
        if (idleSelect) {
          State.config.idleTimeoutSec = parseInt(idleSelect.value, 10);
        }
        if (popupIntervalSelect) {
          State.config.ambientPopupIntervalMin = parseInt(popupIntervalSelect.value, 10);
        }

        State.saveConfig();
        Remote.closeSettings();

        // Yeni verileri çek ve dashboard'u güncelle
        await this.refreshAllData();
      });
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  App.init();
});

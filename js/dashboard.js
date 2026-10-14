// ==========================================
// Tizen TV Dashboard - Dashboard UI Modülü
// ==========================================

const Dashboard = {
  elements: {},

  init() {
    this.cacheElements();
    this.startClock();
  },

  cacheElements() {
    this.elements = {
      container: document.getElementById("dashboard-view"),
      clockTime: document.getElementById("dash-clock-time"),
      clockDate: document.getElementById("dash-clock-date"),
      hijriDate: document.getElementById("dash-hijri-date"),
      cityName: document.getElementById("dash-city-name"),

      // Hava Durumu
      weatherTemp: document.getElementById("dash-weather-temp"),
      weatherDesc: document.getElementById("dash-weather-desc"),
      weatherIcon: document.getElementById("dash-weather-icon"),
      weatherFeels: document.getElementById("dash-weather-feels"),
      weatherHumidity: document.getElementById("dash-weather-humidity"),
      weatherWind: document.getElementById("dash-weather-wind"),
      weatherSun: document.getElementById("dash-weather-sun"),
      weatherForecast: document.getElementById("dash-weather-forecast"),

      // Namaz Vakitleri
      prayerGrid: document.getElementById("dash-prayer-grid"),
      nextPrayerLabel: document.getElementById("dash-next-prayer-label"),
      nextPrayerCountdown: document.getElementById("dash-next-prayer-countdown"),

      // Alt Kartlar
      quoteText: document.getElementById("dash-quote-text"),
      quoteAuthor: document.getElementById("dash-quote-author"),
      usdRate: document.getElementById("dash-rate-usd"),
      eurRate: document.getElementById("dash-rate-eur"),
      artPreviewImg: document.getElementById("dash-art-preview-img"),
      artPreviewTitle: document.getElementById("dash-art-preview-title"),
      artPreviewArtist: document.getElementById("dash-art-preview-artist")
    };
  },

  // Canlı Saat & Tarih
  startClock() {
    const updateTime = () => {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, "0");
      const m = String(now.getMinutes()).padStart(2, "0");
      const s = String(now.getSeconds()).padStart(2, "0");

      if (this.elements.clockTime) {
        this.elements.clockTime.innerHTML = `${h}:${m}<span class="dash-clock-sec">:${s}</span>`;
      }

      if (this.elements.clockDate) {
        const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
        this.elements.clockDate.textContent = now.toLocaleDateString("tr-TR", options);
      }

      // Namaz geri sayımını her saniye güncelle
      this.updatePrayerCountdown();
    };

    updateTime();
    setInterval(updateTime, 1000);
  },

  // Tüm Dashboard'u Render Et
  render() {
    this.renderHeader();
    this.renderWeather();
    this.renderPrayerTimes();
    this.renderBottomWidgets();
  },

  renderHeader() {
    if (this.elements.cityName) {
      this.elements.cityName.textContent = State.config.cityName;
    }
  },

  renderWeather() {
    const w = State.data.weather;
    if (!w) return;

    if (this.elements.weatherTemp) this.elements.weatherTemp.textContent = `${w.temp}°`;
    if (this.elements.weatherDesc) this.elements.weatherDesc.textContent = w.desc;
    if (this.elements.weatherIcon) this.elements.weatherIcon.textContent = w.icon;
    if (this.elements.weatherFeels) this.elements.weatherFeels.textContent = `${w.feelsLike}°`;
    if (this.elements.weatherHumidity) this.elements.weatherHumidity.textContent = `%${w.humidity}`;
    if (this.elements.weatherWind) this.elements.weatherWind.textContent = `${w.windSpeed} km/s`;
    if (this.elements.weatherSun) this.elements.weatherSun.textContent = `${w.sunrise} / ${w.sunset}`;

    // 3 Günlük Tahmin
    if (this.elements.weatherForecast && w.forecast) {
      this.elements.weatherForecast.innerHTML = w.forecast.map(f => `
        <div class="forecast-item">
          <span class="forecast-day">${f.day}</span>
          <span class="forecast-icon">${f.icon}</span>
          <span class="forecast-temp">${f.max}° / <small>${f.min}°</small></span>
        </div>
      `).join("");
    }
  },

  renderPrayerTimes() {
    const p = State.data.prayer;
    if (!p) return;

    if (this.elements.hijriDate && p.hijriDate) {
      this.elements.hijriDate.textContent = `Hicri: ${p.hijriDate}`;
    }

    const nextInfo = State.calculateNextPrayer();

    const prayers = [
      { key: "Imsak", label: "İmsak", time: p.Imsak, icon: "🌙" },
      { key: "Gunes", label: "Güneş", time: p.Gunes, icon: "🌅" },
      { key: "Ogle", label: "Öğle", time: p.Ogle, icon: "☀️" },
      { key: "Ikindi", label: "İkindi", time: p.Ikindi, icon: "🌤️" },
      { key: "Aksam", label: "Akşam", time: p.Aksam, icon: "🌇" },
      { key: "Yatsi", label: "Yatsı", time: p.Yatsi, icon: "🌃" },
    ];

    if (this.elements.prayerGrid) {
      this.elements.prayerGrid.innerHTML = prayers.map(item => {
        const isNext = nextInfo && nextInfo.label === item.label;
        return `
          <div class="prayer-card ${isNext ? 'is-active-prayer' : ''}">
            <div class="prayer-card-header">
              <span class="prayer-icon">${item.icon}</span>
              <span class="prayer-name">${item.label}</span>
            </div>
            <div class="prayer-time">${item.time}</div>
            ${isNext ? '<div class="prayer-badge">Sıradaki Vakit</div>' : ''}
          </div>
        `;
      }).join("");
    }

    this.updatePrayerCountdown();
  },

  updatePrayerCountdown() {
    const nextInfo = State.calculateNextPrayer();
    if (!nextInfo) return;

    if (this.elements.nextPrayerLabel) {
      this.elements.nextPrayerLabel.textContent = `${nextInfo.label} Vaktine Kalan:`;
    }

    if (this.elements.nextPrayerCountdown) {
      this.elements.nextPrayerCountdown.textContent = nextInfo.diffFormatted;
    }
  },

  renderBottomWidgets() {
    // Günün Sözü
    if (State.data.quote) {
      if (this.elements.quoteText) this.elements.quoteText.textContent = `"${State.data.quote.text}"`;
      if (this.elements.quoteAuthor) this.elements.quoteAuthor.textContent = `— ${State.data.quote.author}`;
    }

    // Döviz Kurları
    if (State.data.rates) {
      if (this.elements.usdRate) this.elements.usdRate.textContent = `₺${State.data.rates.usd}`;
      if (this.elements.eurRate) this.elements.eurRate.textContent = `₺${State.data.rates.eur}`;
    }

    // Tablo Önizleme
    const artworks = State.data.artworks;
    const currentArt = artworks[State.data.currentArtworkIndex] || artworks[0];
    if (currentArt) {
      if (this.elements.artPreviewImg) this.elements.artPreviewImg.src = currentArt.thumb || currentArt.url;
      if (this.elements.artPreviewTitle) this.elements.artPreviewTitle.textContent = currentArt.title;
      if (this.elements.artPreviewArtist) this.elements.artPreviewArtist.textContent = currentArt.artist;
    }
  }
};

window.Dashboard = Dashboard;

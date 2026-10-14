// =========================================================================
// Tizen TV Dashboard - Resim Tablosu Modu (Ambient Art Mode)
// & Periyodik Bilgi Popup Döngüsü (3-5 dk'da bir, 10sn aralıklarla dönen)
// =========================================================================

const Ambient = {
  elements: {},
  artIntervalTimer: null,
  popupIntervalTimer: null,
  popupStepTimer: null,
  popupProgressTimer: null,
  
  // Popup adımları
  currentStepIndex: 0,
  steps: [
    { id: "weather", title: "Hava Durumu" },
    { id: "prayer", title: "Namaz Vakitleri" },
    { id: "summary", title: "Günün Özeti & Kurlar" }
  ],

  init() {
    this.cacheElements();
  },

  cacheElements() {
    this.elements = {
      ambientView: document.getElementById("ambient-view"),
      dashboardView: document.getElementById("dashboard-view"),
      artImage: document.getElementById("ambient-art-img"),
      artTitle: document.getElementById("ambient-art-title"),
      artArtist: document.getElementById("ambient-art-artist"),
      artInfoBadge: document.getElementById("ambient-art-badge"),

      // Popup Öğeleri
      popupContainer: document.getElementById("ambient-popup-card"),
      popupStepPill: document.getElementById("ambient-popup-step-pill"),
      popupTitle: document.getElementById("ambient-popup-title"),
      popupBody: document.getElementById("ambient-popup-body"),
      popupProgressBar: document.getElementById("ambient-popup-progress-fill")
    };
  },

  // 1. Resim Tablosu Moduna Geçiş
  enterAmbientMode() {
    if (State.currentMode === "ambient") return;
    State.currentMode = "ambient";

    console.log("Resim Tablosu Moduna geçildi (Ambient Art Mode).");

    // Dashboard'u gizle, Tablo modunu göster
    if (this.elements.dashboardView) this.elements.dashboardView.classList.add("view-hidden");
    if (this.elements.ambientView) this.elements.ambientView.classList.remove("view-hidden");

    // İlk tabloyu göster
    this.showCurrentArtwork();

    // Tabloları periyodik olarak değiştir (her 60 saniyede bir)
    clearInterval(this.artIntervalTimer);
    this.artIntervalTimer = setInterval(() => {
      this.nextArtwork();
    }, State.config.artworkIntervalSec * 1000);

    // Periyodik Bilgi Popup Sayacını Başlat (her 3 dakikada bir)
    this.scheduleNextPopupCycle();
  },

  // 2. Dashboard Moduna Geri Dönüş (Tuşa basıldığında)
  exitAmbientMode() {
    if (State.currentMode === "dashboard") return;
    State.currentMode = "dashboard";

    console.log("Tuşa basıldı: Dashboard moduna dönülüyor.");

    // Tüm ambient sayaçlarını ve popup'ı durdur
    this.stopAllTimers();
    this.hidePopupImmediate();

    // Tablo görünümünü gizle, Dashboard'u göster
    if (this.elements.ambientView) this.elements.ambientView.classList.add("view-hidden");
    if (this.elements.dashboardView) this.elements.dashboardView.classList.remove("view-hidden");

    // Dashboard'u tazele
    Dashboard.render();
  },

  stopAllTimers() {
    clearInterval(this.artIntervalTimer);
    clearTimeout(this.popupIntervalTimer);
    clearTimeout(this.popupStepTimer);
    clearInterval(this.popupProgressTimer);
    this.artIntervalTimer = null;
    this.popupIntervalTimer = null;
    this.popupStepTimer = null;
    this.popupProgressTimer = null;
  },

  // Tablo Gösterimi & Değişimi
  showCurrentArtwork() {
    const artworks = State.data.artworks;
    if (!artworks || artworks.length === 0) return;

    const art = artworks[State.data.currentArtworkIndex] || artworks[0];
    if (!art || !this.elements.artImage) return;

    // Yumuşak fade geçişi
    this.elements.artImage.style.opacity = "0";

    const img = new Image();
    img.src = art.url;
    img.onload = () => {
      this.elements.artImage.src = art.url;
      this.elements.artImage.style.opacity = "1";
      if (this.elements.artTitle) this.elements.artTitle.textContent = art.title;
      if (this.elements.artArtist) this.elements.artArtist.textContent = art.artist;
    };
    img.onerror = () => {
      // Yüklenemezse yedek thumb veya bir sonrakine geç
      if (art.thumb) {
        this.elements.artImage.src = art.thumb;
        this.elements.artImage.style.opacity = "1";
      }
    };
  },

  nextArtwork() {
    const total = State.data.artworks.length;
    if (total === 0) return;
    State.data.currentArtworkIndex = (State.data.currentArtworkIndex + 1) % total;
    this.showCurrentArtwork();
  },

  // =========================================================================
  // Periyodik Bilgi Popupları (Her 3-5 dk'da bir, 10sn aralıklarla dönen)
  // =========================================================================
  scheduleNextPopupCycle() {
    clearTimeout(this.popupIntervalTimer);
    const intervalMs = State.config.ambientPopupIntervalMin * 60 * 1000;

    this.popupIntervalTimer = setTimeout(() => {
      if (State.currentMode === "ambient") {
        this.startPopupSequence();
      }
    }, intervalMs);
  },

  startPopupSequence() {
    console.log("Resim tablosu üzerinde periyodik bilgi popup döngüsü başlıyor...");
    this.currentStepIndex = 0;
    this.showPopupCard();
    this.runStep(0);
  },

  runStep(stepIndex) {
    if (State.currentMode !== "ambient") return;

    if (stepIndex >= this.steps.length) {
      // Tüm adımlar (Hava Durumu, Namaz, Kurlar/Özet) bitti!
      // Popup'ı gizle, resim tablosu kalmaya devam etsin, sonraki 3-5 dakikaya ayarla
      this.hidePopupCard();
      this.scheduleNextPopupCycle();
      return;
    }

    this.currentStepIndex = stepIndex;
    const currentStep = this.steps[stepIndex];

    // İlgili içeriği popup içerisine bas
    this.renderStepContent(currentStep.id, stepIndex + 1, this.steps.length);

    // 10 saniyelik ilerleme çubuğu animasyonu
    this.startStepProgressBar(State.config.ambientPopupStepSec);

    // 10 saniye sonra bir sonraki adıma geç
    clearTimeout(this.popupStepTimer);
    this.popupStepTimer = setTimeout(() => {
      this.runStep(stepIndex + 1);
    }, State.config.ambientPopupStepSec * 1000);
  },

  renderStepContent(stepId, currentNum, totalNum) {
    if (this.elements.popupStepPill) {
      this.elements.popupStepPill.textContent = `${currentNum} / ${totalNum}`;
    }

    if (stepId === "weather") {
      this.renderWeatherStep();
    } else if (stepId === "prayer") {
      this.renderPrayerStep();
    } else if (stepId === "summary") {
      this.renderSummaryStep();
    }
  },

  // Popup Adım 1: Hava Durumu
  renderWeatherStep() {
    const w = State.data.weather;
    if (this.elements.popupTitle) {
      this.elements.popupTitle.innerHTML = `🌤️ Hava Durumu <span class="popup-subcity">• ${State.config.cityName}</span>`;
    }

    if (!w) {
      if (this.elements.popupBody) {
        this.elements.popupBody.innerHTML = `<div class="popup-loading">Hava durumu verisi alınıyor...</div>`;
      }
      return;
    }

    this.elements.popupBody.innerHTML = `
      <div class="popup-weather-content">
        <div class="popup-weather-top">
          <div class="popup-weather-main">
            <span class="popup-weather-temp">${w.temp}°</span>
            <span class="popup-weather-icon">${w.icon}</span>
          </div>
          <div class="popup-weather-desc-box">
            <div class="popup-weather-desc">${w.desc}</div>
            <div class="popup-weather-range">Hissedilen: ${w.feelsLike}° | Gün: ${w.todayMax}° / ${w.todayMin}°</div>
          </div>
        </div>
        <div class="popup-meta-row">
          <div class="popup-meta-item"><span>💧 Nem:</span> <strong>%${w.humidity}</strong></div>
          <div class="popup-meta-item"><span>💨 Rüzgar:</span> <strong>${w.windSpeed} km/s</strong></div>
          <div class="popup-meta-item"><span>🌅 G.Doğum/Batım:</span> <strong>${w.sunrise} - ${w.sunset}</strong></div>
        </div>
      </div>
    `;
  },

  // Popup Adım 2: Namaz Vakitleri
  renderPrayerStep() {
    const p = State.data.prayer;
    const next = State.calculateNextPrayer();

    if (this.elements.popupTitle) {
      this.elements.popupTitle.innerHTML = `🕌 Vakit Bilgisi <span class="popup-subcity">• ${State.config.cityName}</span>`;
    }

    if (!p) {
      if (this.elements.popupBody) {
        this.elements.popupBody.innerHTML = `<div class="popup-loading">Namaz vakitleri alınıyor...</div>`;
      }
      return;
    }

    this.elements.popupBody.innerHTML = `
      <div class="popup-prayer-content">
        <div class="popup-prayer-highlight">
          <div class="popup-prayer-next-label">${next.label} Vaktine Kalan:</div>
          <div class="popup-prayer-countdown">${next.diffFormatted}</div>
          <div class="popup-prayer-next-time">Vakit Saati: ${next.time}</div>
        </div>
        <div class="popup-prayer-strip">
          <div class="p-strip-item ${next.label === 'İmsak' ? 'active' : ''}">İmsak: ${p.Imsak}</div>
          <div class="p-strip-item ${next.label === 'Öğle' ? 'active' : ''}">Öğle: ${p.Ogle}</div>
          <div class="p-strip-item ${next.label === 'İkindi' ? 'active' : ''}">İkindi: ${p.Ikindi}</div>
          <div class="p-strip-item ${next.label === 'Akşam' ? 'active' : ''}">Akşam: ${p.Aksam}</div>
          <div class="p-strip-item ${next.label === 'Yatsı' ? 'active' : ''}">Yatsı: ${p.Yatsi}</div>
        </div>
      </div>
    `;
  },

  // Popup Adım 3: Günün Özeti & Kurlar & Hikmet
  renderSummaryStep() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" });
    const dateStr = now.toLocaleDateString("tr-TR", { weekday: "long", day: "numeric", month: "long" });
    const rates = State.data.rates || { usd: "--", eur: "--" };
    const quote = State.data.quote || { text: "Gününüz huzurlu ve bereketli geçsin.", author: "Tizen Dashboard" };

    if (this.elements.popupTitle) {
      this.elements.popupTitle.innerHTML = `🗓️ Günün Özeti & Kurlar`;
    }

    this.elements.popupBody.innerHTML = `
      <div class="popup-summary-content">
        <div class="popup-summary-top">
          <div class="popup-summary-time">${timeStr}</div>
          <div class="popup-summary-date">${dateStr}</div>
        </div>
        <div class="popup-rates-row">
          <div class="popup-rate-chip"><span>USD/TRY:</span> <strong>₺${rates.usd}</strong></div>
          <div class="popup-rate-chip"><span>EUR/TRY:</span> <strong>₺${rates.eur}</strong></div>
        </div>
        <div class="popup-quote-box">
          <div class="popup-quote-text">"${quote.text}"</div>
          <div class="popup-quote-author">— ${quote.author}</div>
        </div>
      </div>
    `;
  },

  startStepProgressBar(durationSec) {
    if (!this.elements.popupProgressBar) return;
    clearInterval(this.popupProgressTimer);

    let elapsed = 0;
    const intervalMs = 100;
    const totalMs = durationSec * 1000;
    this.elements.popupProgressBar.style.width = "0%";

    this.popupProgressTimer = setInterval(() => {
      elapsed += intervalMs;
      const pct = Math.min(100, (elapsed / totalMs) * 100);
      this.elements.popupProgressBar.style.width = `${pct}%`;

      if (elapsed >= totalMs) {
        clearInterval(this.popupProgressTimer);
      }
    }, intervalMs);
  },

  showPopupCard() {
    if (this.elements.popupContainer) {
      this.elements.popupContainer.classList.remove("popup-hidden");
      this.elements.popupContainer.classList.add("popup-visible");
    }
  },

  hidePopupCard() {
    if (this.elements.popupContainer) {
      this.elements.popupContainer.classList.remove("popup-visible");
      this.elements.popupContainer.classList.add("popup-hidden");
    }
  },

  hidePopupImmediate() {
    this.hidePopupCard();
    if (this.elements.popupProgressBar) {
      this.elements.popupProgressBar.style.width = "0%";
    }
  }
};

window.Ambient = Ambient;

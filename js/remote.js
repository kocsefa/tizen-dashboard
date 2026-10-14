// =========================================================================
// Tizen TV Dashboard - Uzaktan Kumanda & İnaktivite (Idle) Yöneticisi
// Samsung Tizen TV Uyumlu (Chrome 56+ Güvenli ES6)
// Versiyon: 1.2.0 (Navigasyon & Kumanda Çakışma Düzeltmesi)
// =========================================================================

const Remote = {
  idleTimer: null,
  isSettingsOpen: false,
  lastBackPressTime: 0,
  toastTimer: null,
  artNavToastTimer: null,

  // Tizen Özel Tuş Kodları
  TIZEN_KEYS: {
    ENTER: 13,
    RETURN: 10009, // Tizen TV Back/Return tuşu
    BACK_BROWSER: 27, // ESC / PC Back
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    RED: 403,
    GREEN: 404,
    YELLOW: 405,
    BLUE: 406,
    PLAY: 415,
    PAUSE: 19,
    REWIND: 412,
    FAST_FORWARD: 417
  },

  init() {
    this.registerTizenKeys();
    this.bindEvents();
    this.resetIdleTimer();
    console.log("Remote yöneticisi başlatıldı (v1.2.0).");
  },

  // Tizen TV özel kumanda tuşlarını kaydet (Varsa)
  registerTizenKeys() {
    if (typeof tizen !== "undefined" && tizen.tvinputdevice) {
      try {
        const keys = [
          "Return",
          "ColorF0Red",
          "ColorF1Green",
          "ColorF2Yellow",
          "ColorF3Blue",
          "MediaPlayPause",
          "MediaPlay",
          "MediaPause",
          "MediaRewind",
          "MediaFastForward"
        ];
        keys.forEach(k => {
          try {
            tizen.tvinputdevice.registerKey(k);
          } catch (e) {}
        });
      } catch (err) {
        console.warn("Tizen key registration hatası:", err);
      }
    }
  },

  bindEvents() {
    // Klavye ve Kumanda Tuş Basımlarını 'capture: true' ile en başta yakala
    window.addEventListener("keydown", (e) => this.handleKeyDown(e), true);

    // Fare / Dokunma Etkileşimleri (PC testleri ve dokunmatik ekranlar için)
    const resetOnUserActivity = () => {
      if (State.currentMode === "dashboard" && !this.isSettingsOpen) {
        this.resetIdleTimer();
      }
    };

    window.addEventListener("mousemove", resetOnUserActivity);
    window.addEventListener("click", resetOnUserActivity);
    window.addEventListener("touchstart", resetOnUserActivity);
  },

  // Tuşun Sol / Geri olup olmadığını kapsamlı kontrol et
  isLeftKey(e, keyCode) {
    const k = (e.key || "").toLowerCase();
    const c = (e.code || "").toLowerCase();
    return (
      keyCode === 37 ||
      keyCode === this.TIZEN_KEYS.REWIND ||
      k === "arrowleft" ||
      k === "left" ||
      c === "arrowleft" ||
      k === "mediarewind" ||
      k === "mediatrackprevious"
    );
  },

  // Tuşun Sağ / İleri olup olmadığını kapsamlı kontrol et
  isRightKey(e, keyCode) {
    const k = (e.key || "").toLowerCase();
    const c = (e.code || "").toLowerCase();
    return (
      keyCode === 39 ||
      keyCode === this.TIZEN_KEYS.FAST_FORWARD ||
      k === "arrowright" ||
      k === "right" ||
      c === "arrowright" ||
      k === "mediafastforward" ||
      k === "mediatracknext"
    );
  },

  // Tuşun Onay / Dashboard'a Dönüş Tuşu olup olmadığını kontrol et
  isExitToDashKey(e, keyCode) {
    const k = (e.key || "").toLowerCase();
    return (
      keyCode === 13 || // Enter
      keyCode === 32 || // Space
      keyCode === this.TIZEN_KEYS.RETURN ||
      keyCode === this.TIZEN_KEYS.BACK_BROWSER ||
      keyCode === this.TIZEN_KEYS.RED ||
      keyCode === this.TIZEN_KEYS.GREEN ||
      keyCode === this.TIZEN_KEYS.YELLOW ||
      keyCode === this.TIZEN_KEYS.BLUE ||
      k === "enter" ||
      k === "return" ||
      k === "escape"
    );
  },

  handleKeyDown(e) {
    const keyCode = e.keyCode || e.which || 0;
    console.log("Remote Tuş Algılandı: KeyCode=" + keyCode + ", Key=" + e.key + ", Mod=" + State.currentMode);

    // =======================================================================
    // 1. DURUM: AYARLAR MODALI AÇIKSA
    // Kesinlikle arkadaki ekrana hiçbir tuş sızmamalı!
    // =======================================================================
    if (this.isSettingsOpen) {
      this.handleSettingsKeyDown(e, keyCode);
      return;
    }

    // =======================================================================
    // 2. DURUM: RESİM TABLOSU MODUNDAYSAK (AMBIENT ART MODE)
    // =======================================================================
    if (State.currentMode === "ambient") {
      // SAĞ TUŞ: Sonraki Tabloya Geç
      if (this.isRightKey(e, keyCode)) {
        e.preventDefault();
        e.stopPropagation();
        Ambient.nextArtwork();
        this.showArtNavFeedback("Sonraki Tablo ▶");
        return;
      }

      // SOL TUŞ: Önceki Tabloya Geç
      if (this.isLeftKey(e, keyCode)) {
        e.preventDefault();
        e.stopPropagation();
        Ambient.prevArtwork();
        this.showArtNavFeedback("◀ Önceki Tablo");
        return;
      }

      // Yukarı / Aşağı Tuşları: Kazara çıkışı önle, tabloyu değiştir veya yoksay
      if (keyCode === 38 || (e.key && e.key.toLowerCase() === "arrowup")) {
        e.preventDefault();
        e.stopPropagation();
        Ambient.prevArtwork();
        this.showArtNavFeedback("◀ Önceki Tablo");
        return;
      }
      if (keyCode === 40 || (e.key && e.key.toLowerCase() === "arrowdown")) {
        e.preventDefault();
        e.stopPropagation();
        Ambient.nextArtwork();
        this.showArtNavFeedback("Sonraki Tablo ▶");
        return;
      }

      // YALNIZCA BELİRLİ ÇIKIŞ TUŞLARI (OK, Enter, Return, Geri, Renkli Tuşlar)
      // Dashboard moduna döndürür! Böylece TV'nin rastgele sinyalleri tabloyu kapatmaz!
      if (this.isExitToDashKey(e, keyCode)) {
        e.preventDefault();
        e.stopPropagation();
        Ambient.exitAmbientMode();
        this.resetIdleTimer();
        return;
      }

      // Diğer tanımlanamayan tuşları yoksay (Tablo görünümünde kalmaya devam et!)
      return;
    }

    // =======================================================================
    // 3. DURUM: DASHBOARD MODUNDAYSAK
    // =======================================================================
    this.resetIdleTimer();

    // Sağ / Sol Tuşları: Dashboard'daki aktif tablo seçimini değiştir
    if (this.isLeftKey(e, keyCode)) {
      e.preventDefault();
      e.stopPropagation();
      if (State.data.artworks && State.data.artworks.length > 0) {
        State.data.currentArtworkIndex = (State.data.currentArtworkIndex - 1 + State.data.artworks.length) % State.data.artworks.length;
        Dashboard.renderBottomWidgets();
      }
      return;
    }

    if (this.isRightKey(e, keyCode)) {
      e.preventDefault();
      e.stopPropagation();
      if (State.data.artworks && State.data.artworks.length > 0) {
        State.data.currentArtworkIndex = (State.data.currentArtworkIndex + 1) % State.data.artworks.length;
        Dashboard.renderBottomWidgets();
      }
      return;
    }

    switch (keyCode) {
      case this.TIZEN_KEYS.ENTER:
      case 32: // Boşluk (Space)
        e.preventDefault();
        Ambient.enterAmbientMode();
        break;

      case this.TIZEN_KEYS.RED:
      case 83: // 'S' Tuşu - Ayarları Aç
        e.preventDefault();
        this.openSettings();
        break;

      case this.TIZEN_KEYS.GREEN:
      case 84: // 'T' Tuşu - Test: Hemen Tabloya Geç ve Popup Göster
        e.preventDefault();
        Ambient.enterAmbientMode();
        setTimeout(() => {
          Ambient.startPopupSequence();
        }, 800);
        break;

      case this.TIZEN_KEYS.RETURN:
      case this.TIZEN_KEYS.BACK_BROWSER:
        e.preventDefault();
        // TV'den çıkış kontrolü (2.5 saniye içinde çift basış)
        const now = Date.now();
        if (this.lastBackPressTime && (now - this.lastBackPressTime < 2500)) {
          if (typeof tizen !== "undefined" && tizen.application) {
            tizen.application.getCurrentApplication().exit();
          } else {
            console.log("Tarayıcı ortamı: Uygulama çıkış simülasyonu");
          }
        } else {
          this.lastBackPressTime = now;
          this.showExitToast();
        }
        break;
    }
  },

  // Tablo değişirken ekranda hafif zarif bir geçiş rozeti göster
  showArtNavFeedback(text) {
    let badge = document.getElementById("art-nav-feedback");
    if (!badge) {
      badge = document.createElement("div");
      badge.id = "art-nav-feedback";
      badge.style.cssText = "position:fixed;top:40px;left:50%;transform:translateX(-50%);background:rgba(10,13,20,0.75);color:#38bdf8;padding:8px 20px;border-radius:24px;border:1px solid rgba(56,189,248,0.4);font-size:1.1rem;font-weight:700;z-index:9999;backdrop-filter:blur(12px);box-shadow:0 8px 24px rgba(0,0,0,0.6);transition:opacity 0.25s ease;pointer-events:none;";
      document.body.appendChild(badge);
    }
    const idx = State.data.currentArtworkIndex + 1;
    const total = (State.data.artworks || []).length;
    badge.textContent = text + " (" + idx + "/" + total + ")";
    badge.style.opacity = "1";

    clearTimeout(this.artNavToastTimer);
    this.artNavToastTimer = setTimeout(() => {
      badge.style.opacity = "0";
    }, 1400);
  },

  // Ayarlar modalı açıkken kumanda kontrolü
  handleSettingsKeyDown(e, keyCode) {
    e.stopPropagation();

    // Geri Tuşu: Ayarları Kapat
    if (keyCode === this.TIZEN_KEYS.RETURN || keyCode === this.TIZEN_KEYS.BACK_BROWSER) {
      e.preventDefault();
      this.closeSettings();
      return;
    }

    // Modal içindeki odaklanabilir elemanlar
    const focusable = [
      document.getElementById("setting-city-select"),
      document.getElementById("setting-idle-select"),
      document.getElementById("setting-popup-interval-select"),
      document.getElementById("setting-save-btn"),
      document.getElementById("setting-close-btn")
    ].filter(el => el !== null);

    const activeEl = document.activeElement;
    let currentIndex = focusable.indexOf(activeEl);

    if (keyCode === this.TIZEN_KEYS.DOWN) {
      e.preventDefault();
      const nextIndex = (currentIndex + 1) % focusable.length;
      focusable[nextIndex].focus();
      return;
    }

    if (keyCode === this.TIZEN_KEYS.UP) {
      e.preventDefault();
      const prevIndex = (currentIndex - 1 + focusable.length) % focusable.length;
      focusable[prevIndex].focus();
      return;
    }

    // Enter tuşuna basıldığında
    if (keyCode === this.TIZEN_KEYS.ENTER) {
      if (activeEl && activeEl.id === "setting-close-btn") {
        e.preventDefault();
        this.closeSettings();
      } else {
        e.preventDefault();
        const saveBtn = document.getElementById("setting-save-btn");
        if (saveBtn) saveBtn.click();
      }
      return;
    }
  },

  showExitToast() {
    let toast = document.getElementById("exit-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "exit-toast";
      toast.style.cssText = "position:fixed;bottom:40px;left:50%;transform:translateX(-50%);background:rgba(15,23,42,0.92);color:#fff;padding:12px 24px;border-radius:30px;border:1px solid rgba(255,255,255,0.2);font-size:1.1rem;font-weight:600;z-index:9999;box-shadow:0 10px 30px rgba(0,0,0,0.6);backdrop-filter:blur(10px);transition:opacity 0.3s ease;";
      document.body.appendChild(toast);
    }
    toast.textContent = "Çıkmak için tekrar [Geri] tuşuna basın";
    toast.style.opacity = "1";
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      toast.style.opacity = "0";
    }, 2200);
  },

  // Kullanıcı inaktif kaldığında (örn. 45 sn) otomatik Tablo Moduna geçiş
  resetIdleTimer() {
    clearTimeout(this.idleTimer);
    if (State.currentMode === "dashboard" && !this.isSettingsOpen) {
      this.idleTimer = setTimeout(() => {
        console.log("İnaktivite süresi doldu. Resim Tablosuna geçiliyor...");
        Ambient.enterAmbientMode();
      }, State.config.idleTimeoutSec * 1000);
    }
  },

  toggleSettings() {
    if (this.isSettingsOpen) {
      this.closeSettings();
    } else {
      this.openSettings();
    }
  },

  openSettings() {
    this.isSettingsOpen = true;
    clearTimeout(this.idleTimer);
    const modal = document.getElementById("settings-modal");
    if (modal) {
      modal.classList.remove("modal-hidden");
      const firstInput = document.getElementById("setting-city-select");
      if (firstInput) setTimeout(() => firstInput.focus(), 100);
    }
  },

  closeSettings() {
    this.isSettingsOpen = false;
    const modal = document.getElementById("settings-modal");
    if (modal) modal.classList.add("modal-hidden");
    this.resetIdleTimer();
  }
};

window.Remote = Remote;

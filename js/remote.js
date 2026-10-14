// =========================================================================
// Tizen TV Dashboard - Uzaktan Kumanda & İnaktivite (Idle) Yöneticisi
// Samsung Tizen TV Uyumlu (Chrome 56+ Güvenli ES6)
// =========================================================================

const Remote = {
  idleTimer: null,
  isSettingsOpen: false,
  lastBackPressTime: 0,
  toastTimer: null,

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
    PAUSE: 19
  },

  init() {
    this.registerTizenKeys();
    this.bindEvents();
    this.resetIdleTimer();
  },

  // Tizen TV özel kumanda tuşlarını kaydet (Varsa)
  registerTizenKeys() {
    if (typeof tizen !== "undefined" && tizen.tvinputdevice) {
      try {
        const keys = ["Return", "ColorF0Red", "ColorF1Green", "ColorF2Yellow", "ColorF3Blue", "MediaPlayPause"];
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
    // Klavye ve Kumanda Tuş Basımları
    window.addEventListener("keydown", (e) => this.handleKeyDown(e));

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

  handleKeyDown(e) {
    const keyCode = e.keyCode || e.which;
    console.log("Tuşa basıldı. KeyCode:", keyCode, "Mevcut Mod:", State.currentMode, "Ayarlar Açık:", this.isSettingsOpen);

    // =======================================================================
    // 1. DURUM: AYARLAR MODALI AÇIKSA
    // Arkadaki ekrana HİÇBİR ŞEKİLDE komut gitmemeli!
    // =======================================================================
    if (this.isSettingsOpen) {
      this.handleSettingsKeyDown(e, keyCode);
      return; // Arkaya komut sızmasını kesin olarak engelle!
    }

    // =======================================================================
    // 2. DURUM: RESİM TABLOSU MODUNDAYSAK (AMBIENT ART MODE)
    // - SAĞ / SOL tuşları: Tablolar arasında geçiş yapmalı!
    // - DİĞER HERHANGİ BİR TUŞ: Dashboard'a geri dönmeli!
    // =======================================================================
    if (State.currentMode === "ambient") {
      if (keyCode === this.TIZEN_KEYS.LEFT) {
        e.preventDefault();
        Ambient.prevArtwork();
        return;
      }

      if (keyCode === this.TIZEN_KEYS.RIGHT) {
        e.preventDefault();
        Ambient.nextArtwork();
        return;
      }

      // Sağ ve Sol harici herhangi bir tuş basıldığında Dashboard moduna dön
      e.preventDefault();
      Ambient.exitAmbientMode();
      this.resetIdleTimer();
      return;
    }

    // =======================================================================
    // 3. DURUM: DASHBOARD MODUNDAYSAK
    // =======================================================================
    this.resetIdleTimer();

    switch (keyCode) {
      // Sağ / Sol Tuşları: Dashboard'daki aktif tablo seçimini değiştir
      case this.TIZEN_KEYS.LEFT:
        e.preventDefault();
        if (State.data.artworks && State.data.artworks.length > 0) {
          State.data.currentArtworkIndex = (State.data.currentArtworkIndex - 1 + State.data.artworks.length) % State.data.artworks.length;
          Dashboard.renderBottomWidgets();
        }
        break;

      case this.TIZEN_KEYS.RIGHT:
        e.preventDefault();
        if (State.data.artworks && State.data.artworks.length > 0) {
          State.data.currentArtworkIndex = (State.data.currentArtworkIndex + 1) % State.data.artworks.length;
          Dashboard.renderBottomWidgets();
        }
        break;

      case this.TIZEN_KEYS.ENTER:
      case 32: // Boşluk (Space)
        // Enter'a basınca hemen Tablo Moduna geç
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
      // Eğer Save butonundaysa veya form içindeyse kaydet
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
    clearTimeout(this.idleTimer); // Ayarlar açıkken idle sayacını durdur
    const modal = document.getElementById("settings-modal");
    if (modal) {
      modal.classList.remove("modal-hidden");
      // İlk input'a odaklan
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

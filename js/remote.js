// =========================================================================
// Tizen TV Dashboard - Uzaktan Kumanda & İnaktivite (Idle) Yöneticisi
// =========================================================================

const Remote = {
  idleTimer: null,
  isSettingsOpen: false,

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
      if (State.currentMode === "dashboard") {
        this.resetIdleTimer();
      }
    };

    window.addEventListener("mousemove", resetOnUserActivity);
    window.addEventListener("click", resetOnUserActivity);
    window.addEventListener("touchstart", resetOnUserActivity);
  },

  handleKeyDown(e) {
    const keyCode = e.keyCode || e.which;
    console.log("Tuşa basıldı. KeyCode:", keyCode, "Mevcut Mod:", State.currentMode);

    // KURAL: Eğer Resim Tablosu Modundaysak (Ambient Art Mode),
    // HERHANGİ BİR TUŞA basıldığı an Dashboard moduna dön!
    if (State.currentMode === "ambient") {
      e.preventDefault();
      Ambient.exitAmbientMode();
      this.resetIdleTimer();
      return;
    }

    // Eğer Dashboard modundaysak, kumanda komutlarını işle ve idle timer'ı tazele
    this.resetIdleTimer();

    // Ayarlar modalı açıksa
    if (this.isSettingsOpen) {
      if (keyCode === this.TIZEN_KEYS.RETURN || keyCode === this.TIZEN_KEYS.BACK_BROWSER) {
        e.preventDefault();
        this.closeSettings();
        return;
      }
    }

    // Dashboard Modu Tuş İşlevleri
    switch (keyCode) {
      case this.TIZEN_KEYS.ENTER:
      case 32: // Boşluk (Space)
        // Enter'a basınca hemen Tablo Moduna geç
        e.preventDefault();
        Ambient.enterAmbientMode();
        break;

      case this.TIZEN_KEYS.RED:
      case 83: // 'S' Tuşu - Ayarları Aç
        this.toggleSettings();
        break;

      case this.TIZEN_KEYS.GREEN:
      case 84: // 'T' Tuşu - Test: Hemen Tabloya Geç ve Popup Göster
        Ambient.enterAmbientMode();
        setTimeout(() => {
          Ambient.startPopupSequence();
        }, 800);
        break;

      case this.TIZEN_KEYS.RETURN:
      case this.TIZEN_KEYS.BACK_BROWSER:
        e.preventDefault();
        // TV'den çıkış kontrolü (2 saniye içinde çift basış)
        if (this.lastBackPressTime && (Date.now() - this.lastBackPressTime < 2500)) {
          if (typeof tizen !== "undefined" && tizen.application) {
            tizen.application.getCurrentApplication().exit();
          } else {
            console.log("Tarayıcı ortamı: Uygulama çıkış simülasyonu");
          }
        } else {
          this.lastBackPressTime = Date.now();
          this.showExitToast();
        }
        break;
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
    if (State.currentMode === "dashboard") {
      this.idleTimer = setTimeout(() => {
        console.log(`İnaktivite süresi doldu (${State.config.idleTimeoutSec} sn). Resim Tablosuna geçiliyor...`);
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
    const modal = document.getElementById("settings-modal");
    if (modal) modal.classList.remove("modal-hidden");
  },

  closeSettings() {
    this.isSettingsOpen = false;
    const modal = document.getElementById("settings-modal");
    if (modal) modal.classList.add("modal-hidden");
  }
};

window.Remote = Remote;

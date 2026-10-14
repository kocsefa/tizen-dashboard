// ==========================================
// Tizen TV Dashboard - Public API Entegrasyonu
// Sıfır API Key, Tamamen Açık ve Ücretsiz API'ler
// ==========================================

const API = {
  // WMO Hava Durumu Kodları (Open-Meteo Uyumlu)
  weatherCodeMap: {
    0: { desc: "Açık / Güneşli", icon: "☀️", bg: "sunny" },
    1: { desc: "Çoğunlukla Açık", icon: "🌤️", bg: "sunny" },
    2: { desc: "Parçalı Bulutlu", icon: "⛅", bg: "cloudy" },
    3: { desc: "Kapalı / Bulutlu", icon: "☁️", bg: "cloudy" },
    45: { desc: "Sisli", icon: "🌫️", bg: "foggy" },
    48: { desc: "Kırağılı Sis", icon: "🌫️", bg: "foggy" },
    51: { desc: "Hafif Çisenti", icon: "🌦️", bg: "rainy" },
    53: { desc: "Orta Çisenti", icon: "🌧️", bg: "rainy" },
    55: { desc: "Yoğun Çisenti", icon: "🌧️", bg: "rainy" },
    61: { desc: "Hafif Yağmurlu", icon: "🌦️", bg: "rainy" },
    63: { desc: "Yağmurlu", icon: "🌧️", bg: "rainy" },
    65: { desc: "Kuvvetli Yağmurlu", icon: "🌧️", bg: "rainy" },
    71: { desc: "Hafif Kar Yağışlı", icon: "🌨️", bg: "snowy" },
    73: { desc: "Kar Yağışlı", icon: "❄️", bg: "snowy" },
    75: { desc: "Yoğun Kar Yağışlı", icon: "❄️", bg: "snowy" },
    77: { desc: "Kar Taneli", icon: "🌨️", bg: "snowy" },
    80: { desc: "Kısa Süreli Sağanak", icon: "🌦️", bg: "rainy" },
    81: { desc: "Sağanak Yağışlı", icon: "🌧️", bg: "rainy" },
    82: { desc: "Şiddetli Sağanak", icon: "⛈️", bg: "stormy" },
    85: { desc: "Hafif Kar Sağanağı", icon: "🌨️", bg: "snowy" },
    86: { desc: "Yoğun Kar Sağanağı", icon: "❄️", bg: "snowy" },
    95: { desc: "Gök Gürültülü Fırtına", icon: "⚡", bg: "stormy" },
    96: { desc: "Dolu ile Karışık Fırtına", icon: "⛈️", bg: "stormy" },
    99: { desc: "Kuvvetli Dolu ve Fırtına", icon: "⛈️", bg: "stormy" }
  },

  getWeatherInfo(code) {
    return this.weatherCodeMap[code] || { desc: "Açık", icon: "☀️", bg: "sunny" };
  },

  // 1. Open-Meteo Hava Durumu API (Üyeliksiz, API Key Gerektirmez)
  async fetchWeather(lat, lon) {
    const cacheKey = `weather_${lat.toFixed(2)}_${lon.toFixed(2)}`;
    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto`;
      
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Hava durumu API hatası: ${res.status}`);
      const data = await res.json();

      const current = data.current || {};
      const daily = data.daily || {};
      const weatherInfo = this.getWeatherInfo(current.weather_code);

      const parsed = {
        temp: Math.round(current.temperature_2m ?? 0),
        feelsLike: Math.round(current.apparent_temperature ?? current.temperature_2m ?? 0),
        humidity: current.relative_humidity_2m ?? 0,
        windSpeed: Math.round(current.wind_speed_10m ?? 0),
        precipitation: current.precipitation ?? 0,
        isDay: current.is_day === 1,
        code: current.weather_code,
        desc: weatherInfo.desc,
        icon: weatherInfo.icon,
        bgTheme: weatherInfo.bg,
        todayMax: daily.temperature_2m_max ? Math.round(daily.temperature_2m_max[0]) : null,
        todayMin: daily.temperature_2m_min ? Math.round(daily.temperature_2m_min[0]) : null,
        sunrise: daily.sunrise ? daily.sunrise[0]?.split("T")[1]?.slice(0, 5) : "--:--",
        sunset: daily.sunset ? daily.sunset[0]?.split("T")[1]?.slice(0, 5) : "--:--",
        forecast: (daily.time || []).slice(1, 4).map((timeStr, idx) => {
          const code = daily.weather_code ? daily.weather_code[idx + 1] : 0;
          const info = this.getWeatherInfo(code);
          const date = new Date(timeStr);
          const dayName = date.toLocaleDateString("tr-TR", { weekday: "short" });
          return {
            day: dayName,
            icon: info.icon,
            max: Math.round(daily.temperature_2m_max[idx + 1]),
            min: Math.round(daily.temperature_2m_min[idx + 1])
          };
        }),
        timestamp: Date.now()
      };

      // Başarılı sonucu cache'e yaz
      try {
        localStorage.setItem(cacheKey, JSON.stringify(parsed));
      } catch (e) {}

      return parsed;
    } catch (err) {
      console.warn("Hava durumu canlı veri çekilemedi, cache deneniyor:", err);
      try {
        const cached = localStorage.getItem(cacheKey);
        if (cached) {
          const obj = JSON.parse(cached);
          obj.isCached = true;
          return obj;
        }
      } catch (e) {}
      // Fallback
      return {
        temp: 20,
        feelsLike: 20,
        humidity: 50,
        windSpeed: 10,
        precipitation: 0,
        isDay: true,
        desc: "Açık",
        icon: "☀️",
        todayMax: 22,
        todayMin: 14,
        sunrise: "06:30",
        sunset: "19:15",
        forecast: [],
        isFallback: true
      };
    }
  },

  // 2. Aladhan Namaz Vakitleri API (Üyeliksiz, Diyanet Metodu 13)
  async fetchPrayerTimes(city, country = "Turkey", lat = null, lon = null) {
    const cacheKey = `prayer_${city.toLowerCase()}`;
    try {
      let url = "";
      if (lat && lon) {
        url = `https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lon}&method=13`;
      } else {
        url = `https://api.aladhan.com/v1/timingsByCity?city=${encodeURIComponent(city)}&country=${encodeURIComponent(country)}&method=13`;
      }

      const res = await fetch(url);
      if (!res.ok) throw new Error(`Namaz API hatası: ${res.status}`);
      const json = await res.json();
      const timings = json.data?.timings || {};
      const hijri = json.data?.date?.hijri || {};

      const cleanTime = (t) => (t ? t.split(" ")[0].slice(0, 5) : "--:--");

      const parsed = {
        Imsak: cleanTime(timings.Fajr),
        Gunes: cleanTime(timings.Sunrise),
        Ogle: cleanTime(timings.Dhuhr),
        Ikindi: cleanTime(timings.Asr),
        Aksam: cleanTime(timings.Maghrib),
        Yatsi: cleanTime(timings.Isha),
        hijriDate: hijri.day ? `${hijri.day} ${hijri.month?.tr || hijri.month?.en || ""} ${hijri.year}` : "",
        timestamp: Date.now()
      };

      try {
        localStorage.setItem(cacheKey, JSON.stringify(parsed));
      } catch (e) {}

      return parsed;
    } catch (err) {
      console.warn("Namaz vakitleri canlı veri çekilemedi, cache deneniyor:", err);
      try {
        const cached = localStorage.getItem(cacheKey);
        if (cached) {
          const obj = JSON.parse(cached);
          obj.isCached = true;
          return obj;
        }
      } catch (e) {}
      // Fallback vakitler
      return {
        Imsak: "05:15",
        Gunes: "06:40",
        Ogle: "13:02",
        Ikindi: "16:20",
        Aksam: "19:10",
        Yatsi: "20:30",
        hijriDate: "1447",
        isFallback: true
      };
    }
  },

  // 3. Açık Döviz Kurları (Ücretsiz, open.er-api.com)
  async fetchExchangeRates() {
    const cacheKey = "exchange_rates";
    try {
      const res = await fetch("https://open.er-api.com/v6/latest/USD");
      if (!res.ok) throw new Error("Kur API hatası");
      const data = await res.json();
      const rates = data.rates || {};

      const usdTry = rates.TRY || 34.0;
      const eurUsd = rates.EUR || 0.92;
      const eurTry = usdTry / eurUsd;

      const parsed = {
        usd: usdTry.toFixed(2),
        eur: eurTry.toFixed(2),
        timestamp: Date.now()
      };

      try {
        localStorage.setItem(cacheKey, JSON.stringify(parsed));
      } catch (e) {}

      return parsed;
    } catch (e) {
      try {
        const cached = localStorage.getItem(cacheKey);
        if (cached) return JSON.parse(cached);
      } catch (err) {}
      return { usd: "--.--", eur: "--.--" };
    }
  }
};

window.API = API;

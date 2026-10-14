// Dünyaca Ünlü Sanat Eserleri ve Yüksek Kaliteli Tablolar (Art Mode)
// Wikimedia Commons Public Domain ve Yüksek Çözünürlüklü Eserler (1920px & 500px)
const ARTWORKS = [
  {
    title: "Yıldızlı Gece (The Starry Night)",
    artist: "Vincent van Gogh (1889)",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1920px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/500px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
  },
  {
    title: "Mona Lisa",
    artist: "Leonardo da Vinci (1503)",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg/1920px-Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg/500px-Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg"
  },
  {
    title: "İnci Küpeli Kız (Girl with a Pearl Earring)",
    artist: "Johannes Vermeer (1665)",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/1920px-1665_Girl_with_a_Pearl_Earring.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/500px-1665_Girl_with_a_Pearl_Earring.jpg"
  },
  {
    title: "Kanagawa Okyanusu Üzerindeki Büyük Dalga",
    artist: "Hokusai (1831)",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/The_Great_Wave_off_Kanagawa.jpg/1920px-The_Great_Wave_off_Kanagawa.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/The_Great_Wave_off_Kanagawa.jpg/500px-The_Great_Wave_off_Kanagawa.jpg"
  },
  {
    title: "Belleğin Azmi (The Persistence of Memory)",
    artist: "Salvador Dalí (1931)",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/The_Persistence_of_Memory_%281931%29.jpg/1920px-The_Persistence_of_Memory_%281931%29.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/The_Persistence_of_Memory_%281931%29.jpg/500px-The_Persistence_of_Memory_%281931%29.jpg"
  },
  {
    title: "Öpücük (The Kiss)",
    artist: "Gustav Klimt (1908)",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Gustav_Klimt_-_The_Kiss_-_Google_Art_Project.jpg/1920px-Gustav_Klimt_-_The_Kiss_-_Google_Art_Project.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Gustav_Klimt_-_The_Kiss_-_Google_Art_Project.jpg/500px-Gustav_Klimt_-_The_Kiss_-_Google_Art_Project.jpg"
  },
  {
    title: "Venüs'ün Doğuşu (The Birth of Venus)",
    artist: "Sandro Botticelli (1485)",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project.jpg/1920px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project.jpg/500px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project.jpg"
  },
  {
    title: "Gece Nöbeti (The Night Watch)",
    artist: "Rembrandt van Rijn (1642)",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Night_Watch_-_Rembrandt_-_Rijksmuseum.jpg/1920px-The_Night_Watch_-_Rembrandt_-_Rijksmuseum.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Night_Watch_-_Rembrandt_-_Rijksmuseum.jpg/500px-The_Night_Watch_-_Rembrandt_-_Rijksmuseum.jpg"
  },
  {
    title: "Amerikan Gotik (American Gothic)",
    artist: "Grant Wood (1930)",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg/1920px-Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg/500px-Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg"
  },
  {
    title: "Bahçeler Ülkesi / Zevkler Bahçesi (The Garden of Earthly Delights)",
    artist: "Hieronymus Bosch (1515)",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/The_Garden_of_Earthly_Delights_by_Bosch_的高清图像.jpg/1920px-The_Garden_of_Earthly_Delights_by_Bosch_的高清图像.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/The_Garden_of_Earthly_Delights_by_Bosch_的高清图像.jpg/500px-The_Garden_of_Earthly_Delights_by_Bosch_的高清图像.jpg"
  },
  {
    title: "Café Terrace at Night",
    artist: "Vincent van Gogh (1888)",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Vincent_Willem_van_Gogh_-_Caféterrasse_bei_Nacht_%281888%29.jpg/1920px-Vincent_Willem_van_Gogh_-_Caféterrasse_bei_Nacht_%281888%29.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Vincent_Willem_van_Gogh_-_Caféterrasse_bei_Nacht_%281888%29.jpg/500px-Vincent_Willem_van_Gogh_-_Caféterrasse_bei_Nacht_%281888%29.jpg"
  },
  {
    title: "Çiçek Açan Badem Ağacı (Almond Blossom)",
    artist: "Vincent van Gogh (1890)",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Van_Gogh_-_Almond_blossom.jpg/1920px-Van_Gogh_-_Almond_blossom.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Van_Gogh_-_Almond_blossom.jpg/500px-Van_Gogh_-_Almond_blossom.jpg"
  },
  {
    title: "Water Lilies (Nymphaeas)",
    artist: "Claude Monet (1906)",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Claude_Monet_-_Nymphéas_%281906%29.jpg/1920px-Claude_Monet_-_Nymphéas_%281906%29.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Claude_Monet_-_Nymphéas_%281906%29.jpg/500px-Claude_Monet_-_Nymphéas_%281906%29.jpg"
  },
  {
    title: "İzlenim, Gündoğumu (Impression, Sunrise)",
    artist: "Claude Monet (1872)",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/1920px-Monet_-_Impression%2C_Sunrise.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/500px-Monet_-_Impression%2C_Sunrise.jpg"
  },
  {
    title: "Çıplak Maja (The Nude Maja)",
    artist: "Francisco Goya (1800)",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Francisco_de_Goya_y_Lucientes_-_La_maja_desnuda.jpg/1920px-Francisco_de_Goya_y_Lucientes_-_La_maja_desnuda.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Francisco_de_Goya_y_Lucientes_-_La_maja_desnuda.jpg/500px-Francisco_de_Goya_y_Lucientes_-_La_maja_desnuda.jpg"
  },
  {
    title: "Özgürlüğe Giden Yol / Halkı Liderlik Eden Özgürlük",
    artist: "Eugène Delacroix (1830)",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Eugène_Delacroix_-_Le_28_Juillet._La_Liberté_guidant_le_peuple_%281830%29.jpg/1920px-Eugène_Delacroix_-_Le_28_Juillet._La_Liberté_guidant_le_peuple_%281830%29.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Eugène_Delacroix_-_Le_28_Juillet._La_Liberté_guidant_le_peuple_%281830%29.jpg/500px-Eugène_Delacroix_-_Le_28_Juillet._La_Liberté_guidant_le_peuple_%281830%29.jpg"
  },
  {
    title: "Arnolfini'nin Evlenmesi (Arnolfini Portrait)",
    artist: "Jan van Eyck (1434)",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Jan_van_Eyck_-_Arnolfini_Portrait_%281434%29.jpg/1920px-Jan_van_Eyck_-_Arnolfini_Portrait_%281434%29.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Jan_van_Eyck_-_Arnolfini_Portrait_%281434%29.jpg/500px-Jan_van_Eyck_-_Arnolfini_Portrait_%281434%29.jpg"
  },
  {
    title: "Babil Kulesi (The Tower of Babel)",
    artist: "Pieter Bruegel the Elder (1563)",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_%28Vienna%29_-_Google_Art_Project.jpg/1920px-Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_%28Vienna%29_-_Google_Art_Project.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_%28Vienna%29_-_Google_Art_Project.jpg/500px-Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_%28Vienna%29_-_Google_Art_Project.jpg"
  },
  {
    title: "Büyük Kanal, Venedik",
    artist: "Canaletto (1730)",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Canaletto_-_Grand_Canal_from_Ca%27_Foscari_to_the_Carità_-_Google_Art_Project.jpg/1920px-Canaletto_-_Grand_Canal_from_Ca%27_Foscari_to_the_Carità_-_Google_Art_Project.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Canaletto_-_Grand_Canal_from_Ca%27_Foscari_to_the_Carità_-_Google_Art_Project.jpg/500px-Canaletto_-_Grand_Canal_from_Ca%27_Foscari_to_the_Carità_-_Google_Art_Project.jpg"
  },
  {
    title: "Wanderer above the Sea of Fog",
    artist: "Caspar David Friedrich (1818)",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_Sea_of_Fog_%28Google_Cultural_Institute%29.jpg/1920px-Caspar_David_Friedrich_-_Wanderer_above_the_Sea_of_Fog_%28Google_Cultural_Institute%29.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_Sea_of_Fog_%28Google_Cultural_Institute%29.jpg/500px-Caspar_David_Friedrich_-_Wanderer_above_the_Sea_of_Fog_%28Google_Cultural_Institute%29.jpg"
  }
];

window.ARTWORKS = ARTWORKS;

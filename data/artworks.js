// Dünyaca Ünlü Sanat Eserleri ve Yüksek Kaliteli Tablolar (Art Mode)
// Wikimedia Commons Public Domain ve Yüksek Çözünürlüklü Eserler
const ARTWORKS = [
  {
    title: "Yıldızlı Gece (The Starry Night)",
    artist: "Vincent van Gogh (1889)",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1920px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/400px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"
  },
  {
    title: "Nilüferler (Water Lilies)",
    artist: "Claude Monet (1919)",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Claude_Monet_-_Water_Lilies_-_1919%2C_Metropolitan_Museum_of_Art.jpg/1920px-Claude_Monet_-_Water_Lilies_-_1919%2C_Metropolitan_Museum_of_Art.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Claude_Monet_-_Water_Lilies_-_1919%2C_Metropolitan_Museum_of_Art.jpg/400px-Claude_Monet_-_Water_Lilies_-_1919%2C_Metropolitan_Museum_of_Art.jpg"
  },
  {
    title: "Kaplumbağa Terbiyecisi",
    artist: "Osman Hamdi Bey (1906)",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/The_Tortoise_Trainer_by_Osman_Hamdi_Bey.jpg/1920px-The_Tortoise_Trainer_by_Osman_Hamdi_Bey.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/The_Tortoise_Trainer_by_Osman_Hamdi_Bey.jpg/400px-The_Tortoise_Trainer_by_Osman_Hamdi_Bey.jpg"
  },
  {
    title: "Kanagawa Açıklarında Büyük Dalga",
    artist: "Katsushika Hokusai (1831)",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Great_Wave_off_Kanagawa2.jpg/1920px-Great_Wave_off_Kanagawa2.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Great_Wave_off_Kanagawa2.jpg/400px-Great_Wave_off_Kanagawa2.jpg"
  },
  {
    title: "Sis Denizinde Gezgin",
    artist: "Caspar David Friedrich (1818)",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_%C3%BCber_dem_Nebelmeer.jpg/1920px-Caspar_David_Friedrich_-_Wanderer_%C3%BCber_dem_Nebelmeer.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_%C3%BCber_dem_Nebelmeer.jpg/400px-Caspar_David_Friedrich_-_Wanderer_%C3%BCber_dem_Nebelmeer.jpg"
  },
  {
    title: "Öpücük (The Kiss)",
    artist: "Gustav Klimt (1908)",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg/1920px-The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg/400px-The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg"
  },
  {
    title: "İnci Küpeli Kız",
    artist: "Johannes Vermeer (1665)",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/1920px-1665_Girl_with_a_Pearl_Earring.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/400px-1665_Girl_with_a_Pearl_Earring.jpg"
  },
  {
    title: "Badem Ağacı Çiçekleri",
    artist: "Vincent van Gogh (1890)",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.jpg/1920px-Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.jpg/400px-Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.jpg"
  },
  {
    title: "Gece Devriyesi (The Night Watch)",
    artist: "Rembrandt van Rijn (1642)",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Night_Watch_-_HD.jpg/1920px-The_Night_Watch_-_HD.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Night_Watch_-_HD.jpg/400px-The_Night_Watch_-_HD.jpg"
  },
  {
    title: "Son Akşam Yemeği",
    artist: "Leonardo da Vinci (1498)",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_scale_16_x_reverse-Lanczos%2C_colorize.jpg/1920px-The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_scale_16_x_reverse-Lanczos%2C_colorize.jpg",
    thumb: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_scale_16_x_reverse-Lanczos%2C_colorize.jpg/400px-The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_scale_16_x_reverse-Lanczos%2C_colorize.jpg"
  },
  {
    title: "Alplerde Gün Batımı",
    artist: "Caspar David Friedrich",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
    thumb: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Huzurlu Sisli Gölet",
    artist: "Doğa Koleksiyonu",
    url: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1920&q=80",
    thumb: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=400&q=80"
  }
];

window.ARTWORKS = ARTWORKS;

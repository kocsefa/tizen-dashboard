// Dünyaca Ünlü Sanat Eserleri ve Yüksek Kaliteli Tablolar (Art Mode)
// Wikimedia Commons Public Domain ve Yüksek Çözünürlüklü Eserler (1920px & 500px)
const ARTWORKS = [
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/Monet_-_Paysage_d%27usines_W5.jpg/3840px-Monet_-_Paysage_d%27usines_W5.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/Monet_-_Paysage_d%27usines_W5.jpg/330px-Monet_-_Paysage_d%27usines_W5.jpg",
    "artist": "Claude Monet (1858–61)",
    "title": "Landscape with Factories"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d7/Monet_-_Wildenstein_1996%2C_5a.png/3840px-Monet_-_Wildenstein_1996%2C_5a.png",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d7/Monet_-_Wildenstein_1996%2C_5a.png/330px-Monet_-_Wildenstein_1996%2C_5a.png",
    "artist": "Claude Monet (1858–61)",
    "title": "Landscape with Factories"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/Claude_Monet_-_The_Seashore_at_Sainte-Adresse_-_53.13_-_Minneapolis_Institute_of_Arts.jpg/3840px-Claude_Monet_-_The_Seashore_at_Sainte-Adresse_-_53.13_-_Minneapolis_Institute_of_Arts.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/Claude_Monet_-_The_Seashore_at_Sainte-Adresse_-_53.13_-_Minneapolis_Institute_of_Arts.jpg/330px-Claude_Monet_-_The_Seashore_at_Sainte-Adresse_-_53.13_-_Minneapolis_Institute_of_Arts.jpg",
    "artist": "Claude Monet (1864)",
    "title": "Seashore at Sainte-Adresse"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/63/Monet_-_Wildenstein_1996%2C_22b.png/3840px-Monet_-_Wildenstein_1996%2C_22b.png",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/63/Monet_-_Wildenstein_1996%2C_22b.png/330px-Monet_-_Wildenstein_1996%2C_22b.png",
    "artist": "Claude Monet (1864)",
    "title": "Étretat Porte d'Aval"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Monet_Pointe_de_la_H%C3%A8ve.jpg/3840px-Monet_Pointe_de_la_H%C3%A8ve.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Monet_Pointe_de_la_H%C3%A8ve.jpg/330px-Monet_Pointe_de_la_H%C3%A8ve.jpg",
    "artist": "Claude Monet (1864)",
    "title": "La Pointe de la Hève, Honfleur"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/da/%27Mouth_of_the_Seine%27_by_Claude_Monet%2C_Norton_Simon_Museum.JPG/3840px-%27Mouth_of_the_Seine%27_by_Claude_Monet%2C_Norton_Simon_Museum.JPG",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/da/%27Mouth_of_the_Seine%27_by_Claude_Monet%2C_Norton_Simon_Museum.JPG/330px-%27Mouth_of_the_Seine%27_by_Claude_Monet%2C_Norton_Simon_Museum.JPG",
    "artist": "Claude Monet (1865)",
    "title": "Mouth of the Seine at Honfleur"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9a/Claude_Monet_-_La_Pointe_de_la_H%C3%A8ve_at_Low_Tide_-_Google_Art_Project.jpg/3840px-Claude_Monet_-_La_Pointe_de_la_H%C3%A8ve_at_Low_Tide_-_Google_Art_Project.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9a/Claude_Monet_-_La_Pointe_de_la_H%C3%A8ve_at_Low_Tide_-_Google_Art_Project.jpg/330px-Claude_Monet_-_La_Pointe_de_la_H%C3%A8ve_at_Low_Tide_-_Google_Art_Project.jpg",
    "artist": "Claude Monet (1865)",
    "title": "The Pointe de la Heve at Low Tide"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c4/Monet_w55.jpg/3840px-Monet_w55.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c4/Monet_w55.jpg/330px-Monet_w55.jpg",
    "artist": "Claude Monet (1865)",
    "title": "Haystacks at Chailly at Sunrise"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/Grosse_mer_%C3%A0_%C3%89tretat_-_Claude_Monet.jpg/3840px-Grosse_mer_%C3%A0_%C3%89tretat_-_Claude_Monet.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/Grosse_mer_%C3%A0_%C3%89tretat_-_Claude_Monet.jpg/330px-Grosse_mer_%C3%A0_%C3%89tretat_-_Claude_Monet.jpg",
    "artist": "Claude Monet (1868–69)",
    "title": "Rough Sea at Etretat"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Monet_w150.jpg/3840px-Monet_w150.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Monet_w150.jpg/330px-Monet_w150.jpg",
    "artist": "Claude Monet (1870)",
    "title": "The Seine at Bougival"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Claude_Monet_-_Hyde_Park%2C_London_%28c._1871%29.jpg/3840px-Claude_Monet_-_Hyde_Park%2C_London_%28c._1871%29.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Claude_Monet_-_Hyde_Park%2C_London_%28c._1871%29.jpg/330px-Claude_Monet_-_Hyde_Park%2C_London_%28c._1871%29.jpg",
    "artist": "Claude Monet (1871)",
    "title": "Hyde Park"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/Monet_-_Green_Park%2C_London%2C_1870_or_1871.jpg/3840px-Monet_-_Green_Park%2C_London%2C_1870_or_1871.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/Monet_-_Green_Park%2C_London%2C_1870_or_1871.jpg/330px-Monet_-_Green_Park%2C_London%2C_1870_or_1871.jpg",
    "artist": "Claude Monet (1871)",
    "title": "Green Park in London"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/Claude_Monet_-_Windmills_Near_Zaandam_-_Walters_37894.jpg/3840px-Claude_Monet_-_Windmills_Near_Zaandam_-_Walters_37894.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/Claude_Monet_-_Windmills_Near_Zaandam_-_Walters_37894.jpg/330px-Claude_Monet_-_Windmills_Near_Zaandam_-_Walters_37894.jpg",
    "artist": "Claude Monet (1871)",
    "title": "Windmills near Zaandam"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/64/Monet_-_Die_Zaan_bei_Zaandam.jpg/3840px-Monet_-_Die_Zaan_bei_Zaandam.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/64/Monet_-_Die_Zaan_bei_Zaandam.jpg/330px-Monet_-_Die_Zaan_bei_Zaandam.jpg",
    "artist": "Claude Monet (1871)",
    "title": "The Zaan at Zaandam"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/48/Monet_w173.jpg/3840px-Monet_w173.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/48/Monet_w173.jpg/330px-Monet_w173.jpg",
    "artist": "Claude Monet (1871)",
    "title": "Boats on the Zaan"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/19/Monet_w174.jpg/3840px-Monet_w174.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/19/Monet_w174.jpg/330px-Monet_w174.jpg",
    "artist": "Claude Monet (1871)",
    "title": "The Banks of the Zaan"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/Monet_w175.jpg/3840px-Monet_w175.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/Monet_w175.jpg/330px-Monet_w175.jpg",
    "artist": "Claude Monet (1871)",
    "title": "The Voorzaan"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/14/Monet_w176.jpg/3840px-Monet_w176.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/14/Monet_w176.jpg/330px-Monet_w176.jpg",
    "artist": "Claude Monet (1871)",
    "title": "View of the Voorzaan"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/Monet_A_Windmill_Near_Zaandam.jpg/3840px-Monet_A_Windmill_Near_Zaandam.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/Monet_A_Windmill_Near_Zaandam.jpg/330px-Monet_A_Windmill_Near_Zaandam.jpg",
    "artist": "Claude Monet (1871)",
    "title": "A Windmill near Zaandam"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/Claude_Monet_Schelde.JPG/3840px-Claude_Monet_Schelde.JPG",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/Claude_Monet_Schelde.JPG/330px-Claude_Monet_Schelde.JPG",
    "artist": "Claude Monet (1871)",
    "title": "View from the Voorzaan"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/19/Monet_1871_The_Dam_at_Zaandam.jpg/3840px-Monet_1871_The_Dam_at_Zaandam.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/19/Monet_1871_The_Dam_at_Zaandam.jpg/330px-Monet_1871_The_Dam_at_Zaandam.jpg",
    "artist": "Claude Monet (1871)",
    "title": "The Dam at Zaandam, evening"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/%27Canal_%C3%A0_Zaandam%27_by_Claude_Monet%2C_1871.JPG/3840px-%27Canal_%C3%A0_Zaandam%27_by_Claude_Monet%2C_1871.JPG",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/%27Canal_%C3%A0_Zaandam%27_by_Claude_Monet%2C_1871.JPG/330px-%27Canal_%C3%A0_Zaandam%27_by_Claude_Monet%2C_1871.JPG",
    "artist": "Claude Monet (1871)",
    "title": "Canal in Zaandam"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/43/Monet_w234.jpg/3840px-Monet_w234.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/43/Monet_w234.jpg/330px-Monet_w234.jpg",
    "artist": "Claude Monet (1872)",
    "title": "Voilier"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/Monet_w_235.jpg/3840px-Monet_w_235.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/Monet_w_235.jpg/330px-Monet_w_235.jpg",
    "artist": "Claude Monet (1872)",
    "title": "View of Argenteuil"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/Monet_w236.jpg/3840px-Monet_w236.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/02/Monet_w236.jpg/330px-Monet_w236.jpg",
    "artist": "Claude Monet (1872)",
    "title": "The Seine near Bougival"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b1/Boulevard_Heloise_Argenteuil_by_Claude_Monet_1872.jpeg/3840px-Boulevard_Heloise_Argenteuil_by_Claude_Monet_1872.jpeg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b1/Boulevard_Heloise_Argenteuil_by_Claude_Monet_1872.jpeg/330px-Boulevard_Heloise_Argenteuil_by_Claude_Monet_1872.jpeg",
    "artist": "Claude Monet (1872)",
    "title": "Boulevard Héloise, Argenteuil"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/90/Monet_w_253.jpg/3840px-Monet_w_253.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/90/Monet_w_253.jpg/330px-Monet_w_253.jpg",
    "artist": "Claude Monet (1872)",
    "title": "The Seine at Argenteuil"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/Spring_%28Fruit_Trees_in_Bloom%29_MET_DT1902.jpg/3840px-Spring_%28Fruit_Trees_in_Bloom%29_MET_DT1902.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/Spring_%28Fruit_Trees_in_Bloom%29_MET_DT1902.jpg/330px-Spring_%28Fruit_Trees_in_Bloom%29_MET_DT1902.jpg",
    "artist": "Claude Monet (1873)",
    "title": "Springtime"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/Monet_w_272_Apple_Trees_in_Bloom.jpg/3840px-Monet_w_272_Apple_Trees_in_Bloom.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/Monet_w_272_Apple_Trees_in_Bloom.jpg/330px-Monet_w_272_Apple_Trees_in_Bloom.jpg",
    "artist": "Claude Monet (1873)",
    "title": "Apple Trees in Bloom"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/Claude_Monet%2C_Fishing_Boats_Leaving_the_Harbor%2C_Le_Havre.jpg/3840px-Claude_Monet%2C_Fishing_Boats_Leaving_the_Harbor%2C_Le_Havre.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/Claude_Monet%2C_Fishing_Boats_Leaving_the_Harbor%2C_Le_Havre.jpg/330px-Claude_Monet%2C_Fishing_Boats_Leaving_the_Harbor%2C_Le_Havre.jpg",
    "artist": "Claude Monet (1874)",
    "title": "Fishing Boats Leaving the Port of Le Havre"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Claude_Monet%2C_French_-_Port_of_Le_Havre_-_Google_Art_Project.jpg/3840px-Claude_Monet%2C_French_-_Port_of_Le_Havre_-_Google_Art_Project.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Claude_Monet%2C_French_-_Port_of_Le_Havre_-_Google_Art_Project.jpg/330px-Claude_Monet%2C_French_-_Port_of_Le_Havre_-_Google_Art_Project.jpg",
    "artist": "Claude Monet (1874)",
    "title": "Old Outer Port of Le Havre"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/37/Monet_w303.jpg/3840px-Monet_w303.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/37/Monet_w303.jpg/330px-Monet_w303.jpg",
    "artist": "Claude Monet (1874)",
    "title": "View of Amsterdam"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ee/Monet_w_322_argenteuil.jpg/3840px-Monet_w_322_argenteuil.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ee/Monet_w_322_argenteuil.jpg/330px-Monet_w_322_argenteuil.jpg",
    "artist": "Claude Monet (1874)",
    "title": "Argenteuil"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1e/Monet_w339.jpg/3840px-Monet_w339.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1e/Monet_w339.jpg/330px-Monet_w339.jpg",
    "artist": "Claude Monet (1874)",
    "title": "Regatta at Argenteuil"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Monet_w340.jpg/3840px-Monet_w340.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Monet_w340.jpg/330px-Monet_w340.jpg",
    "artist": "Claude Monet (1874)",
    "title": "Regatta at Argenteuil"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/Le_Pont_d%60_Argenteuil_-_Claude_Monet.jpg/3840px-Le_Pont_d%60_Argenteuil_-_Claude_Monet.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/Le_Pont_d%60_Argenteuil_-_Claude_Monet.jpg/330px-Le_Pont_d%60_Argenteuil_-_Claude_Monet.jpg",
    "artist": "Claude Monet (1875)",
    "title": "The Bridge at Chatou"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/71/The_lane_in_epinay%2C_snow_effect_monet_w_388.jpg/3840px-The_lane_in_epinay%2C_snow_effect_monet_w_388.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/71/The_lane_in_epinay%2C_snow_effect_monet_w_388.jpg/330px-The_lane_in_epinay%2C_snow_effect_monet_w_388.jpg",
    "artist": "Claude Monet (1875)",
    "title": "The Lane in Epinay, Snow Effect"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/Monet_-_Chemin_de_halage_%C3%A0_Argenteuil_%28Towpath_at_Argenteuil%2C_Winter%29%2C_1875-1876.tif/lossy-page1-3840px-Monet_-_Chemin_de_halage_%C3%A0_Argenteuil_%28Towpath_at_Argenteuil%2C_Winter%29%2C_1875-1876.tif.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9d/Monet_-_Chemin_de_halage_%C3%A0_Argenteuil_%28Towpath_at_Argenteuil%2C_Winter%29%2C_1875-1876.tif/lossy-page1-330px-Monet_-_Chemin_de_halage_%C3%A0_Argenteuil_%28Towpath_at_Argenteuil%2C_Winter%29%2C_1875-1876.tif.jpg",
    "artist": "Claude Monet (1875)",
    "title": "Towpath at Argenteuil in the Snow"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/Monet_w501.jpg/3840px-Monet_w501.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/Monet_w501.jpg/330px-Monet_w501.jpg",
    "artist": "Claude Monet (1878)",
    "title": "The Village of Lavacourt"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/Monet_-_Wildenstein_1996%2C_515.png/3840px-Monet_-_Wildenstein_1996%2C_515.png",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ad/Monet_-_Wildenstein_1996%2C_515.png/330px-Monet_-_Wildenstein_1996%2C_515.png",
    "artist": "Claude Monet (1879)",
    "title": "Lavacourt"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/03/Monet_w522.jpg/3840px-Monet_w522.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/03/Monet_w522.jpg/330px-Monet_w522.jpg",
    "artist": "Claude Monet (1879)",
    "title": "Pear trees in blossom"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/Monet_-_LA_SEINE_A_VETHEUIL%2C_1879_entre_%3B_1882_et.jpg/3840px-Monet_-_LA_SEINE_A_VETHEUIL%2C_1879_entre_%3B_1882_et.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/Monet_-_LA_SEINE_A_VETHEUIL%2C_1879_entre_%3B_1882_et.jpg/330px-Monet_-_LA_SEINE_A_VETHEUIL%2C_1879_entre_%3B_1882_et.jpg",
    "artist": "Claude Monet (1879)",
    "title": "The Seine at Vétheuil"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/Claude_Monet%2C_Le_Givre_%281880%2C_from_C2RMF%29.jpg/3840px-Claude_Monet%2C_Le_Givre_%281880%2C_from_C2RMF%29.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/Claude_Monet%2C_Le_Givre_%281880%2C_from_C2RMF%29.jpg/330px-Claude_Monet%2C_Le_Givre_%281880%2C_from_C2RMF%29.jpg",
    "artist": "Claude Monet (1880)",
    "title": "Frost"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1f/Monet_w_556_les_glacons_lavacourt.jpg/3840px-Monet_w_556_les_glacons_lavacourt.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1f/Monet_w_556_les_glacons_lavacourt.jpg/330px-Monet_w_556_les_glacons_lavacourt.jpg",
    "artist": "Claude Monet (1880)",
    "title": "Les Glacons, Lavacourt"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/Monet_-_winter-on-the-seine-lavacourt-1880.jpg/3840px-Monet_-_winter-on-the-seine-lavacourt-1880.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/Monet_-_winter-on-the-seine-lavacourt-1880.jpg/330px-Monet_-_winter-on-the-seine-lavacourt-1880.jpg",
    "artist": "Claude Monet (1880)",
    "title": "Winter on the Seine at Lavacourt"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/Monet_w563.jpg/3840px-Monet_w563.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/Monet_w563.jpg/330px-Monet_w563.jpg",
    "artist": "Claude Monet (1880)",
    "title": "Breakup of Ice at Lavacourt"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/64/Monet_-_Wildenstein_1996%2C_564.png/3840px-Monet_-_Wildenstein_1996%2C_564.png",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/64/Monet_-_Wildenstein_1996%2C_564.png/330px-Monet_-_Wildenstein_1996%2C_564.png",
    "artist": "Claude Monet (1880)",
    "title": "The Floes on the Seine at Lavacourt"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/Claude_Monet_-_The_Break-up_of_the_Ice_%28La_D%C3%A9b%C3%A2cle_or_Les_Gla%C3%A7ons%29_-_Google_Art_Project.jpg/3840px-Claude_Monet_-_The_Break-up_of_the_Ice_%28La_D%C3%A9b%C3%A2cle_or_Les_Gla%C3%A7ons%29_-_Google_Art_Project.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/Claude_Monet_-_The_Break-up_of_the_Ice_%28La_D%C3%A9b%C3%A2cle_or_Les_Gla%C3%A7ons%29_-_Google_Art_Project.jpg/330px-Claude_Monet_-_The_Break-up_of_the_Ice_%28La_D%C3%A9b%C3%A2cle_or_Les_Gla%C3%A7ons%29_-_Google_Art_Project.jpg",
    "artist": "Claude Monet (1880)",
    "title": "Breakup of Ice, Grey Weather"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/Claude_Monet_-_The_thaw_at_Vetheuil.jpg/3840px-Claude_Monet_-_The_thaw_at_Vetheuil.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/Claude_Monet_-_The_thaw_at_Vetheuil.jpg/330px-Claude_Monet_-_The_thaw_at_Vetheuil.jpg",
    "artist": "Claude Monet (1880)",
    "title": "The Thaw at Vétheuil"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6c/Monet_w_567_floating_ice.jpg/3840px-Monet_w_567_floating_ice.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6c/Monet_w_567_floating_ice.jpg/330px-Monet_w_567_floating_ice.jpg",
    "artist": "Claude Monet (1880)",
    "title": "Floating Ice"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/Monet_w569.jpg/3840px-Monet_w569.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/Monet_w569.jpg/330px-Monet_w569.jpg",
    "artist": "Claude Monet (1880)",
    "title": "Breakup of Ice"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/38/Monet_w570.jpg/3840px-Monet_w570.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/38/Monet_w570.jpg/330px-Monet_w570.jpg",
    "artist": "Claude Monet (1880)",
    "title": "Breakup of Ice"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/10/Monet_w571.jpg/3840px-Monet_w571.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/10/Monet_w571.jpg/330px-Monet_w571.jpg",
    "artist": "Claude Monet (1880)",
    "title": "Breakup of Ice"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8a/Monet_w587_above_vetheuil%2C_spring_effect.jpg/3840px-Monet_w587_above_vetheuil%2C_spring_effect.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8a/Monet_w587_above_vetheuil%2C_spring_effect.jpg/330px-Monet_w587_above_vetheuil%2C_spring_effect.jpg",
    "artist": "Claude Monet (1880)",
    "title": "Above Vetheuil, Spring Effect"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a1/Monet_-_Wildenstein_1996%2C_591.png/3840px-Monet_-_Wildenstein_1996%2C_591.png",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a1/Monet_-_Wildenstein_1996%2C_591.png/330px-Monet_-_Wildenstein_1996%2C_591.png",
    "artist": "Claude Monet (1880)",
    "title": "The Hills at Vetheuil"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/The_Seine_at_V%C3%A9theuil_MET_DT1886.jpg/3840px-The_Seine_at_V%C3%A9theuil_MET_DT1886.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/The_Seine_at_V%C3%A9theuil_MET_DT1886.jpg/330px-The_Seine_at_V%C3%A9theuil_MET_DT1886.jpg",
    "artist": "Claude Monet (1880)",
    "title": "The Seine at Vétheuil"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/V%C3%A9theuil_in_Summer_MET_DT1898.jpg/3840px-V%C3%A9theuil_in_Summer_MET_DT1898.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/V%C3%A9theuil_in_Summer_MET_DT1898.jpg/330px-V%C3%A9theuil_in_Summer_MET_DT1898.jpg",
    "artist": "Claude Monet (1880)",
    "title": "Vetheuil in Summer"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/Monet_w608.jpg/3840px-Monet_w608.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/89/Monet_w608.jpg/330px-Monet_w608.jpg",
    "artist": "Claude Monet (1880)",
    "title": "Vetheuil"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/Monet_Ansicht_von_Vetheuil.jpg/3840px-Monet_Ansicht_von_Vetheuil.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/Monet_Ansicht_von_Vetheuil.jpg/330px-Monet_Ansicht_von_Vetheuil.jpg",
    "artist": "Claude Monet (1880)",
    "title": "View of Vetheuil"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/Monet_w642.jpg/3840px-Monet_w642.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/Monet_w642.jpg/330px-Monet_w642.jpg",
    "artist": "Claude Monet (1881)",
    "title": "The Flood"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/Monet_w658.jpg/3840px-Monet_w658.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/Monet_w658.jpg/330px-Monet_w658.jpg",
    "artist": "Claude Monet (1881)",
    "title": "The Beach at Fecamp"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Monet_-_Wildenstein_1996%2C_701.png/3840px-Monet_-_Wildenstein_1996%2C_701.png",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Monet_-_Wildenstein_1996%2C_701.png/330px-Monet_-_Wildenstein_1996%2C_701.png",
    "artist": "Claude Monet (1881)",
    "title": "Arms of the Seine at Vetheuil"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Monet_w751.jpg/3840px-Monet_w751.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Monet_w751.jpg/330px-Monet_w751.jpg",
    "artist": "Claude Monet (1882)",
    "title": "Edge of the Cliffs at Pourville"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/Cliffs_at_Pourville_A21450.jpg/3840px-Cliffs_at_Pourville_A21450.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/46/Cliffs_at_Pourville_A21450.jpg/330px-Cliffs_at_Pourville_A21450.jpg",
    "artist": "Claude Monet (1882)",
    "title": "Cliff at Pourville"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Monet_w775.jpg/3840px-Monet_w775.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Monet_w775.jpg/330px-Monet_w775.jpg",
    "artist": "Claude Monet (1882)",
    "title": "Seascape at Pourville"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/Monet_w778.jpg/3840px-Monet_w778.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/Monet_w778.jpg/330px-Monet_w778.jpg",
    "artist": "Claude Monet (1882)",
    "title": "L'Ally Point, Low Tide"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/Monet_w784.jpg/3840px-Monet_w784.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/Monet_w784.jpg/330px-Monet_w784.jpg",
    "artist": "Claude Monet (1882)",
    "title": "Sailboats at Sea, Pourville"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/99/Monet_-_Wildenstein_1996%2C_921.png/3840px-Monet_-_Wildenstein_1996%2C_921.png",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/99/Monet_-_Wildenstein_1996%2C_921.png/330px-Monet_-_Wildenstein_1996%2C_921.png",
    "artist": "Claude Monet (1885)",
    "title": "Anemones"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/09/Monet_w922.jpg/3840px-Monet_w922.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/09/Monet_w922.jpg/330px-Monet_w922.jpg",
    "artist": "Claude Monet (1882–85)",
    "title": "Daffodils"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/Monet_-_Wildenstein_1996%2C_927.png/3840px-Monet_-_Wildenstein_1996%2C_927.png",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/Monet_-_Wildenstein_1996%2C_927.png/330px-Monet_-_Wildenstein_1996%2C_927.png",
    "artist": "Claude Monet (1883)",
    "title": "Chrysanthemums"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/Monet_w928.jpg/3840px-Monet_w928.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/Monet_w928.jpg/330px-Monet_w928.jpg",
    "artist": "Claude Monet (1885)",
    "title": "Daffodils"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/Monet_-_Wildenstein_1996%2C_933.png/3840px-Monet_-_Wildenstein_1996%2C_933.png",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/Monet_-_Wildenstein_1996%2C_933.png/330px-Monet_-_Wildenstein_1996%2C_933.png",
    "artist": "Claude Monet (1883)",
    "title": "Yellow Daisies"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Monet_-_Wildenstein_1996%2C_934.png/3840px-Monet_-_Wildenstein_1996%2C_934.png",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Monet_-_Wildenstein_1996%2C_934.png/330px-Monet_-_Wildenstein_1996%2C_934.png",
    "artist": "Claude Monet (1883)",
    "title": "White Daisies"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/86/Monet_w939.jpg/3840px-Monet_w939.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/86/Monet_w939.jpg/330px-Monet_w939.jpg",
    "artist": "Claude Monet (1885)",
    "title": "Anemonies"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f6/Monet_w940.jpg/3840px-Monet_w940.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f6/Monet_w940.jpg/330px-Monet_w940.jpg",
    "artist": "Claude Monet (1885)",
    "title": "Yellow Daisies"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2c/Monet_-_Wildenstein_1996%2C_945.png/3840px-Monet_-_Wildenstein_1996%2C_945.png",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2c/Monet_-_Wildenstein_1996%2C_945.png/330px-Monet_-_Wildenstein_1996%2C_945.png",
    "artist": "Claude Monet (1885)",
    "title": "Branch of White and Pink Azaleas"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bd/Monet_-_Wildenstein_1996%2C_946.png/3840px-Monet_-_Wildenstein_1996%2C_946.png",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bd/Monet_-_Wildenstein_1996%2C_946.png/330px-Monet_-_Wildenstein_1996%2C_946.png",
    "artist": "Claude Monet (1885)",
    "title": "Branch of White and Pink Azaleas"
  },
  {
    "url": "https://upload.wikimedia.org/wikipedia/commons/1/10/Monet_-_Wildenstein_1996%2C_951.png_unscaled",
    "thumb": "https://upload.wikimedia.org/wikipedia/commons/1/10/Monet_-_Wildenstein_1996%2C_951.png_unscaled",
    "artist": "Claude Monet (1882)",
    "title": "Peaches"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/2022-06-24_at_13-35-16_P%C3%AAches_%28C_Monet_-_W_952%29.png/3840px-2022-06-24_at_13-35-16_P%C3%AAches_%28C_Monet_-_W_952%29.png",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/2022-06-24_at_13-35-16_P%C3%AAches_%28C_Monet_-_W_952%29.png/330px-2022-06-24_at_13-35-16_P%C3%AAches_%28C_Monet_-_W_952%29.png",
    "artist": "Claude Monet (1885)",
    "title": "Peaches"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/Monet_w955.jpg/3840px-Monet_w955.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/Monet_w955.jpg/330px-Monet_w955.jpg",
    "artist": "Claude Monet (1885)",
    "title": "Plums and Apricots"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/Monet_-_Wildenstein_1996%2C_959.png/3840px-Monet_-_Wildenstein_1996%2C_959.png",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/Monet_-_Wildenstein_1996%2C_959.png/330px-Monet_-_Wildenstein_1996%2C_959.png",
    "artist": "Claude Monet (1885)",
    "title": "Anemones"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/Monet_-_Wildenstein_1996%2C_960.png/3840px-Monet_-_Wildenstein_1996%2C_960.png",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/Monet_-_Wildenstein_1996%2C_960.png/330px-Monet_-_Wildenstein_1996%2C_960.png",
    "artist": "Claude Monet (1885)",
    "title": "Flowers"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Monet_-_Wildenstein_1996%2C_1137.png/3840px-Monet_-_Wildenstein_1996%2C_1137.png",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Monet_-_Wildenstein_1996%2C_1137.png/330px-Monet_-_Wildenstein_1996%2C_1137.png",
    "artist": "Claude Monet (1887)",
    "title": "Field of Yellow Irises"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2b/Monet_w1138.jpg/3840px-Monet_w1138.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2b/Monet_w1138.jpg/330px-Monet_w1138.jpg",
    "artist": "Claude Monet (1887)",
    "title": "Field of Irises at Giverny"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b4/Monet_-_Wildenstein_1996%2C_1139.png/3840px-Monet_-_Wildenstein_1996%2C_1139.png",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b4/Monet_-_Wildenstein_1996%2C_1139.png/330px-Monet_-_Wildenstein_1996%2C_1139.png",
    "artist": "Claude Monet (1887)",
    "title": "Field of Irises in the Morning"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/Monet_w1200.jpg/3840px-Monet_w1200.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/Monet_w1200.jpg/330px-Monet_w1200.jpg",
    "artist": "Claude Monet (1888)",
    "title": "Meadow at Giverny, Morning effect"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Rapids_on_the_Petite_Creuse_at_Fresselines_MET_DT226477.jpg/3840px-Rapids_on_the_Petite_Creuse_at_Fresselines_MET_DT226477.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Rapids_on_the_Petite_Creuse_at_Fresselines_MET_DT226477.jpg/330px-Rapids_on_the_Petite_Creuse_at_Fresselines_MET_DT226477.jpg",
    "artist": "Claude Monet (1889)",
    "title": "Rapids on the Petite Creuse at Fresselines"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/Monet_w1245.jpg/3840px-Monet_w1245.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/Monet_w1245.jpg/330px-Monet_w1245.jpg",
    "artist": "Claude Monet (1890)",
    "title": "Effect of Spring at Giverny"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Monet_w1246.jpg/3840px-Monet_w1246.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Monet_w1246.jpg/330px-Monet_w1246.jpg",
    "artist": "Claude Monet (1890)",
    "title": "Meadow, Cloudy Sky"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/Monet_-_Wildenstein_1996%2C_1251.png/3840px-Monet_-_Wildenstein_1996%2C_1251.png",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/Monet_-_Wildenstein_1996%2C_1251.png/330px-Monet_-_Wildenstein_1996%2C_1251.png",
    "artist": "Claude Monet (1890)",
    "title": "Poppy Field"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Claude_Monet_Mohnfeld.jpg/3840px-Claude_Monet_Mohnfeld.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Claude_Monet_Mohnfeld.jpg/330px-Claude_Monet_Mohnfeld.jpg",
    "artist": "Claude Monet (1890)",
    "title": "Field of Poppies near Giverny"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/Monet_w1254.jpg/3840px-Monet_w1254.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/Monet_w1254.jpg/330px-Monet_w1254.jpg",
    "artist": "Claude Monet (1890)",
    "title": "Poppies"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Monet_-_Wildenstein_1996%2C_1262.png/3840px-Monet_-_Wildenstein_1996%2C_1262.png",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Monet_-_Wildenstein_1996%2C_1262.png/330px-Monet_-_Wildenstein_1996%2C_1262.png",
    "artist": "Claude Monet (1890)",
    "title": "The Islets at Port-Villez"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/Claude_Monet_-_The_Seine_at_Port-Villez_%28c._1883-90%29.jpg/3840px-Claude_Monet_-_The_Seine_at_Port-Villez_%28c._1883-90%29.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/Claude_Monet_-_The_Seine_at_Port-Villez_%28c._1883-90%29.jpg/330px-Claude_Monet_-_The_Seine_at_Port-Villez_%28c._1883-90%29.jpg",
    "artist": "Claude Monet (1890)",
    "title": "The Gust of Wind"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/ff/Claude_Monet_-_Haystacks%2C_end_of_Summer_-_Google_Art_Project.jpg/3840px-Claude_Monet_-_Haystacks%2C_end_of_Summer_-_Google_Art_Project.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/ff/Claude_Monet_-_Haystacks%2C_end_of_Summer_-_Google_Art_Project.jpg/330px-Claude_Monet_-_Haystacks%2C_end_of_Summer_-_Google_Art_Project.jpg",
    "artist": "Claude Monet (1890)",
    "title": "Grainstacks at the End of Summer, Morning Effect"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/13/Claude_Monet_-_Grainstacks_in_Bright_Sunlight_%281890%29_Google_Art_Project.jpg/3840px-Claude_Monet_-_Grainstacks_in_Bright_Sunlight_%281890%29_Google_Art_Project.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/13/Claude_Monet_-_Grainstacks_in_Bright_Sunlight_%281890%29_Google_Art_Project.jpg/330px-Claude_Monet_-_Grainstacks_in_Bright_Sunlight_%281890%29_Google_Art_Project.jpg",
    "artist": "Claude Monet (1890)",
    "title": "Grainstacks in Bright Sunlight"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/Claude_Monet_-_Stacks_of_Wheat_%28End_of_Summer%29_-_1985.1103_-_Art_Institute_of_Chicago.jpg/3840px-Claude_Monet_-_Stacks_of_Wheat_%28End_of_Summer%29_-_1985.1103_-_Art_Institute_of_Chicago.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/Claude_Monet_-_Stacks_of_Wheat_%28End_of_Summer%29_-_1985.1103_-_Art_Institute_of_Chicago.jpg/330px-Claude_Monet_-_Stacks_of_Wheat_%28End_of_Summer%29_-_1985.1103_-_Art_Institute_of_Chicago.jpg",
    "artist": "Claude Monet (1890)",
    "title": "Grainstacks at the End of Summer, Evening Effect"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/88/Monet_-_Meules%2C_effet_de_neige_-_Shelburne.jpg/3840px-Monet_-_Meules%2C_effet_de_neige_-_Shelburne.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/88/Monet_-_Meules%2C_effet_de_neige_-_Shelburne.jpg/330px-Monet_-_Meules%2C_effet_de_neige_-_Shelburne.jpg",
    "artist": "Claude Monet (1891)",
    "title": "Grainstacks, Snow Effect"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/Poss_1288_Grainstack_in_Sunshine%2C_1891%2C_Meule_au_soleil%2C_Oil_on_Canvas%2C_60_x_100_cm%2C_Zurich%2C_Kunsthaus_Zurich.jpg/3840px-Poss_1288_Grainstack_in_Sunshine%2C_1891%2C_Meule_au_soleil%2C_Oil_on_Canvas%2C_60_x_100_cm%2C_Zurich%2C_Kunsthaus_Zurich.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/Poss_1288_Grainstack_in_Sunshine%2C_1891%2C_Meule_au_soleil%2C_Oil_on_Canvas%2C_60_x_100_cm%2C_Zurich%2C_Kunsthaus_Zurich.jpg/330px-Poss_1288_Grainstack_in_Sunshine%2C_1891%2C_Meule_au_soleil%2C_Oil_on_Canvas%2C_60_x_100_cm%2C_Zurich%2C_Kunsthaus_Zurich.jpg",
    "artist": "Claude Monet (1891)",
    "title": "Grainstack in Sunshine"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f0/Monet_-_Wildenstein_1996%2C_1333.png/3840px-Monet_-_Wildenstein_1996%2C_1333.png",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f0/Monet_-_Wildenstein_1996%2C_1333.png/330px-Monet_-_Wildenstein_1996%2C_1333.png",
    "artist": "Claude Monet (1893)",
    "title": "The Seine at Bennecourt in Winter"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Monet_w1334.jpg/3840px-Monet_w1334.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Monet_w1334.jpg/330px-Monet_w1334.jpg",
    "artist": "Claude Monet (1893)",
    "title": "Floating Ice at Bennecourt"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0d/Monet_-_Wildenstein_1996%2C_1343.png/3840px-Monet_-_Wildenstein_1996%2C_1343.png",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0d/Monet_-_Wildenstein_1996%2C_1343.png/330px-Monet_-_Wildenstein_1996%2C_1343.png",
    "artist": "Claude Monet (1893)",
    "title": "Ice Floating"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/Monet_w1344.jpg/3840px-Monet_w1344.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/Monet_w1344.jpg/330px-Monet_w1344.jpg",
    "artist": "Claude Monet (1893)",
    "title": "Ice floes, Evening Effect"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/Monet_-_Wildenstein_1996%2C_1374a.png/3840px-Monet_-_Wildenstein_1996%2C_1374a.png",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/af/Monet_-_Wildenstein_1996%2C_1374a.png/330px-Monet_-_Wildenstein_1996%2C_1374a.png",
    "artist": "Claude Monet (1894)",
    "title": "The Seine at Port-Villez"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/Monet_w1379.jpg/3840px-Monet_w1379.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/Monet_w1379.jpg/330px-Monet_w1379.jpg",
    "artist": "Claude Monet (1894)",
    "title": "The Seine at Port-Villez, Evening Effect"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/Monet_w1381.jpg/3840px-Monet_w1381.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/Monet_w1381.jpg/330px-Monet_w1381.jpg",
    "artist": "Claude Monet (1894)",
    "title": "The Seine near Vernon"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/Monet_-_Wildenstein_1996%2C_1382.png/3840px-Monet_-_Wildenstein_1996%2C_1382.png",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/Monet_-_Wildenstein_1996%2C_1382.png/330px-Monet_-_Wildenstein_1996%2C_1382.png",
    "artist": "Claude Monet (1894)",
    "title": "The Seine in the Mist"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/73/Monet_-_Wildenstein_1996%2C_1553.png/3840px-Monet_-_Wildenstein_1996%2C_1553.png",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/73/Monet_-_Wildenstein_1996%2C_1553.png/330px-Monet_-_Wildenstein_1996%2C_1553.png",
    "artist": "Claude Monet (1899–1901)",
    "title": "Charing Cross Bridge (study)"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Claude_Monet_-_Le_Palais_Ducal.jpg/3840px-Claude_Monet_-_Le_Palais_Ducal.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Claude_Monet_-_Le_Palais_Ducal.jpg/330px-Claude_Monet_-_Le_Palais_Ducal.jpg",
    "artist": "Claude Monet (1908)",
    "title": "The Palazzo Ducale"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/Monet_w1773.jpg/3840px-Monet_w1773.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/Monet_w1773.jpg/330px-Monet_w1773.jpg",
    "artist": "Claude Monet (1908)",
    "title": "Grainstack at Sunset"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/Monet_w1774.jpg/3840px-Monet_w1774.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/Monet_w1774.jpg/330px-Monet_w1774.jpg",
    "artist": "Claude Monet (1908–12)",
    "title": "Landscape at Port-Villez"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/Claude_Monet_-_Glycines_W1903_-_Mus%C3%A9e_Marmottan-Monet.jpg/3840px-Claude_Monet_-_Glycines_W1903_-_Mus%C3%A9e_Marmottan-Monet.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/Claude_Monet_-_Glycines_W1903_-_Mus%C3%A9e_Marmottan-Monet.jpg/330px-Claude_Monet_-_Glycines_W1903_-_Mus%C3%A9e_Marmottan-Monet.jpg",
    "artist": "Claude Monet (1917–20)",
    "title": "Wisteria"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ae/Wisteria_by_Claude_Monet%2C_Mus%C3%A9e_Marmottan_Monet_5124.JPG/3840px-Wisteria_by_Claude_Monet%2C_Mus%C3%A9e_Marmottan_Monet_5124.JPG",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ae/Wisteria_by_Claude_Monet%2C_Mus%C3%A9e_Marmottan_Monet_5124.JPG/330px-Wisteria_by_Claude_Monet%2C_Mus%C3%A9e_Marmottan_Monet_5124.JPG",
    "artist": "Claude Monet (1917–20)",
    "title": "Wisteria"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f4/Monet_w1905.jpg/3840px-Monet_w1905.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f4/Monet_w1905.jpg/330px-Monet_w1905.jpg",
    "artist": "Claude Monet (1917–20)",
    "title": "Wisteria"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f3/Monet_-_Wildenstein_1996%2C_1911.jpg/3840px-Monet_-_Wildenstein_1996%2C_1911.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f3/Monet_-_Wildenstein_1996%2C_1911.jpg/330px-Monet_-_Wildenstein_1996%2C_1911.jpg",
    "artist": "Claude Monet (1918–24)",
    "title": "The Japanese Bridge"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Monet_-_Wildenstein_1996%2C_1912.png/3840px-Monet_-_Wildenstein_1996%2C_1912.png",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Monet_-_Wildenstein_1996%2C_1912.png/330px-Monet_-_Wildenstein_1996%2C_1912.png",
    "artist": "Claude Monet (1918-24)",
    "title": "The Japanese Bridge"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/73/Claude_Monet_-_Le_Pont_japonais_W1913_-_Mus%C3%A9e_Marmottan-Monet.jpg/3840px-Claude_Monet_-_Le_Pont_japonais_W1913_-_Mus%C3%A9e_Marmottan-Monet.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/73/Claude_Monet_-_Le_Pont_japonais_W1913_-_Mus%C3%A9e_Marmottan-Monet.jpg/330px-Claude_Monet_-_Le_Pont_japonais_W1913_-_Mus%C3%A9e_Marmottan-Monet.jpg",
    "artist": "Claude Monet (1918–24)",
    "title": "The Japanese Bridge"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/55/Monet_-_La_passerelle_sur_le_bassin_aux_nymph%C3%A9as%2C_1919.jpg/3840px-Monet_-_La_passerelle_sur_le_bassin_aux_nymph%C3%A9as%2C_1919.jpg",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/55/Monet_-_La_passerelle_sur_le_bassin_aux_nymph%C3%A9as%2C_1919.jpg/330px-Monet_-_La_passerelle_sur_le_bassin_aux_nymph%C3%A9as%2C_1919.jpg",
    "artist": "Claude Monet (1918-24)",
    "title": "The Footbridge over the Water-Lily Pond"
  },
  {
    "url": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/Monet_-_Wildenstein_1996%2C_1962.png/3840px-Monet_-_Wildenstein_1996%2C_1962.png",
    "thumb": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/Monet_-_Wildenstein_1996%2C_1962.png/330px-Monet_-_Wildenstein_1996%2C_1962.png",
    "artist": "Claude Monet (1925-26)",
    "title": "The House Seen through the Roses"
  }
];

window.ARTWORKS = ARTWORKS;

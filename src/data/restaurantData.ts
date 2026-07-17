import { MenuItem, Review, BusynessHour, TranslationDictionary } from '../types';
import sizzlingKofteHero from '../assets/images/sizzling_inegol_kofte_hero_1784303421592.jpg';
import traditionalTableSpread from '../assets/images/traditional_table_spread_1784303450207.jpg';
import sutluKadayifDessert from '../assets/images/sutlu_kadayif_dessert_1784303463384.jpg';
import historicRestaurantInterior from '../assets/images/historic_restaurant_interior_1784303436117.jpg';

export const translations: Record<'tr' | 'en', TranslationDictionary> = {
  tr: {
    brandName: "Hacı Aziz İnegöl Köftecisi - 1934",
    brandTagline: "90 Yıllık Gelenek, Değişmeyen Gerçek Lezzet",
    heritageSince: "1934'ten Beri Geleneksel İnegöl Köftesi",
    ratingBadge: "4.4★ (4,652 Değerlendirme)",
    viewMenu: "Menüyü İncele",
    getDirections: "Yol Tarifi Al",
    findATable: "Masa Bul / Rezervasyon",
    yearsOfHistory: "92 Yıllık Tarih",
    ourStoryTitle: "Hikayemiz",
    ourStorySubtitle: "Nesilden Nesile Aktarılan Lezzet Mirası",
    ourStoryText1: "1934 yılında İnegöl, Bursa'da küçük bir dükkanda başlayan lezzet serüvenimiz, 90 yılı aşkın süredir kaliteden ödün vermeden devam ediyor. Kurucumuz Hacı Aziz Efendi'nin hazırladığı o eşsiz tarif, nesiller boyu aktarılarak bugüne ulaştı. Değişmeyen reçetelerimiz ve geleneksel pişirme yöntemlerimizle her lokmada tarihin kokusunu hissedeceksiniz.",
    ourStoryText2: "Bugün, ailemizin üçüncü ve dördüncü nesil kadın yöneticileri tarafından gururla yönetilen bir kadın işletmesiyiz. Kadın elinin değdiği mutfağımızda, sadece köfte pişirmiyor; geleneksel Türk misafirperverliğini, titizliğini ve mükemmeliyetçi yaklaşımı her tabakta yaşatıyoruz.",
    ourStoryText3: "Mutfaktaki başarımızın arkasında kadın gücü, yerel üreticilere verdiğimiz destek ve ata yadigarı reçetelerimize duyduğumuz derin sadakat yatıyor. Hacı Aziz ailesi olarak, sizi sadece bir yemek yemeye değil, İnegöl'ün kalbinde bir lezzet yolculuğuna davet ediyoruz.",
    womenOwnedBadge: "Gururla Kadın İşletmesi",
    kofteSecretTitle: "İnegöl Köftemizin Sırrı Nedir?",
    kofteSecretText: "Gerçek İnegöl köftesinin en büyük sırrı sadeliğindedir. %100 yerli besi dana ve kuzu etlerimiz özel oranlarda harmanlanır. İçerisine hiçbir baharat, un veya katkı maddesi eklenmez; sadece tuz, soğan ve karbonat ile yoğrulur. En az 24 saat özel dolaplarımızda dinlendirildikten sonra, usta eller tarafından meşe odunu kömürü ateşinde, dışı karamelize içi ise sulu kalacak şekilde pişirilir.",
    menuTitle: "Lezzet Menümüz",
    menuSubtitle: "Özenle Seçilmiş Malzemelerle Hazırlanan Tarihi Klasikler",
    menuPriceIndicator: "Ortalama Fiyat: Kişi başı ₺400 – ₺600",
    categoryPopular: "Popüler Lezzetler",
    categorySalads: "Salata & Yoğurtlar",
    categorySaucesMezeler: "Mezeler & Soslar",
    galleryTitle: "Lezzet Galerisi",
    gallerySubtitle: "Hacı Aziz Dünyasından Canlı Kareler",
    reviewsTitle: "Müşteri Yorumları",
    reviewsSubtitle: "Sizlerden Gelen Güzel Geri Bildirimler",
    reviewsCredibility: "Google Business ve Tripadvisor üzerinden alınan gerçek deneyimler.",
    busynessTitle: "Canlı Yoğunluk Durumu",
    busynessSubtitle: "Günün Popüler Saatleri (Cuma günleri en yoğun günümüzdür)",
    busynessFridayNote: "* Cuma günleri namaz çıkışı ve akşam saatlerinde ekstra yoğunluk yaşanmaktadır.",
    servicesTitle: "Hizmetlerimiz",
    servicesSubtitle: "Size En Uygun Şekilde Hizmet Vermekten Mutluluk Duyuyoruz",
    serviceDineIn: "Restoranda Yemek",
    serviceDineInDesc: "Tarihi ve samimi atmosferimizde, köftenizi cızırdayan sıcağıyla masanızda deneyimleyin.",
    serviceDriveThrough: "Arabaya Servis",
    serviceDriveThroughDesc: "Yolculuk esnasında lezzetimizden mahrum kalmayın; siparişinizi aracınıza getirelim.",
    serviceNoContact: "Temassız Teslimat",
    serviceNoContactDesc: "İnegöl içi siparişlerinizde hijyen kurallarına uygun, hızlı paket servis hizmeti.",
    contactTitle: "İletişim & Konum",
    contactSubtitle: "Bizleri Ziyaret Edin veya Hemen Arayın",
    addressLabel: "Adres",
    phoneLabel: "Telefon",
    hoursLabel: "Çalışma Saatleri",
    hoursValue: "Her Gün: 11:00 - 22:00 (Kapanış: 22:00)",
    instagramLabel: "Sosyal Medya",
    websiteLabel: "Resmi İnternet Sitesi",
    footerRights: "Her hakkı saklıdır. Est. 1934.",
    footerHeritageBadge: "Geleneksel Bursa Lezzeti",
    callNow: "Hemen Ara",
    closedLabel: "Kapalı",
    closesLabel: "Kapanış",
    liveNow: "Şu An Yoğunluk",
    busynessLabel: "Doluluk Oranı"
  },
  en: {
    brandName: "Hacı Aziz İnegöl Köftecisi - 1934",
    brandTagline: "90 Years of Tradition, Unchanging Authentic Taste",
    heritageSince: "Traditional İnegöl Köfte Since 1934",
    ratingBadge: "4.4★ (4,652 Reviews)",
    viewMenu: "View Menu",
    getDirections: "Get Directions",
    findATable: "Find a Table / Booking",
    yearsOfHistory: "92 Years of Heritage",
    ourStoryTitle: "Our Story",
    ourStorySubtitle: "A Culinary Legacy Passed Down Through Generations",
    ourStoryText1: "Our flavor journey began in 1934 in a tiny shop in İnegöl, Bursa. For over 90 years, we have continued to serve without compromising on quality. The unique recipe perfected by our founder, Hacı Aziz Efendi, has been passed down through generations. With our unchanging recipes and traditional cooking methods, you will feel the fragrance of history in every bite.",
    ourStoryText2: "Today, we are proud to be a women-owned and family-operated establishment, managed by our third and fourth-generation female leaders. In our kitchen, touched by women's care, we do not just grill meatballs; we bring traditional Turkish hospitality, meticulousness, and a perfectionist approach to every single plate.",
    ourStoryText3: "Behind our success stands female empowerment, our deep support for local farmers, and our absolute loyalty to our ancestral recipes. As the Hacı Aziz family, we invite you not just for a meal, but for a historic culinary journey in the heart of İnegöl.",
    womenOwnedBadge: "Proudly Women-Owned",
    kofteSecretTitle: "What is the Secret of Our İnegöl Köfte?",
    kofteSecretText: "The ultimate secret of authentic İnegöl meatballs lies in their simplicity. Our 100% domestic grass-fed beef and lamb are blended in precise proportions. No spices, flour, or artificial additives are ever added. They are kneaded purely with salt, onions, and baking soda. After resting in our aging coolers for at least 24 hours, they are grilled by master hands over oak wood charcoal, locking the juices inside while creating a caramelized crust outside.",
    menuTitle: "Our Menu",
    menuSubtitle: "Historical Classics Prepared with Carefully Selected Ingredients",
    menuPriceIndicator: "Average Cost: ₺400 – ₺600 per person",
    categoryPopular: "Popular Specialties",
    categorySalads: "Salad & Yogurts",
    categorySaucesMezeler: "Appetizers & Sauces",
    galleryTitle: "Flavor Gallery",
    gallerySubtitle: "Vibrant Moments from the World of Hacı Aziz",
    reviewsTitle: "Guest Reviews",
    reviewsSubtitle: "Kind Words from Our Beloved Guests",
    reviewsCredibility: "Authentic experiences compiled from Google Business and Tripadvisor.",
    busynessTitle: "Live Popular Times",
    busynessSubtitle: "Popular Hours of the Day (Fridays are our busiest)",
    busynessFridayNote: "* Fridays are extra busy around prayer release and dinner hours.",
    servicesTitle: "Our Services",
    servicesSubtitle: "We are Delighted to Host and Serve You in the Best Way",
    serviceDineIn: "Dine-in",
    serviceDineInDesc: "Experience your meatballs sizzling hot at your table in our warm, historic atmosphere.",
    serviceDriveThrough: "Drive-through",
    serviceDriveThroughDesc: "Don't miss our legendary taste on your road trip; we will bring your order to your car.",
    serviceNoContact: "No-contact Delivery",
    serviceNoContactDesc: "Fast and hygienic delivery service directly to your location within İnegöl.",
    contactTitle: "Contact & Location",
    contactSubtitle: "Visit Us or Call Us Directly",
    addressLabel: "Address",
    phoneLabel: "Phone",
    hoursLabel: "Opening Hours",
    hoursValue: "Every Day: 11:00 AM - 10:00 PM (Closes at 10 PM)",
    instagramLabel: "Social Media",
    websiteLabel: "Official Website",
    footerRights: "All rights reserved. Est. 1934.",
    footerHeritageBadge: "Traditional Bursa Heritage",
    callNow: "Call Now",
    closedLabel: "Closed",
    closesLabel: "Closes",
    liveNow: "Live Occupancy",
    busynessLabel: "Busyness Level"
  }
};

export const menuItems: MenuItem[] = [
  {
    id: "m1",
    name: {
      tr: "İnegöl Köfte (1 Porsiyon - 10 Adet)",
      en: "İnegöl Köfte (1 Portion - 10 Pieces)"
    },
    description: {
      tr: "Meşe odunu kömüründe ağır ağır ızgara edilmiş, %100 yerli dana ve kuzu etinden yapılan tarihi ve tescilli İnegöl köftesi.",
      en: "The historic and certified İnegöl meatballs, made of 100% domestic beef and lamb, grilled slowly over premium oak wood charcoal."
    },
    price: 320,
    badge: {
      tr: "İmza Lezzet",
      en: "Signature Dish"
    },
    category: "popular",
    image: sizzlingKofteHero
  },
  {
    id: "m2",
    name: {
      tr: "Fasulye Piyazı",
      en: "White Bean Piyaz Salad"
    },
    description: {
      tr: "Köftenin en kadim dostu; haşlanmış beyaz fasulye, ince kıyım kırmızı soğan, maydanoz, sızma zeytinyağı, tahin ve haşlanmış yumurta.",
      en: "The ultimate companion to Turkish meatballs; tender white beans, finely sliced red onion, parsley, extra virgin olive oil, tahini, and hard-boiled egg."
    },
    price: 125,
    badge: {
      tr: "Geleneksel",
      en: "Traditional"
    },
    category: "salads",
    image: traditionalTableSpread
  },
  {
    id: "m3",
    name: {
      tr: "Sütlü Kadayıf",
      en: "Sütlü Kadayıf Dessert"
    },
    description: {
      tr: "Hafif süt şerbetiyle ıslatılmış çıtır çıtır tel kadayıf, üzerine bol Antep fıstığı ile servis edilir.",
      en: "Crispy shredded pastry soaked in light milk syrup, topped generously with crushed green Turkish pistachios."
    },
    price: 145,
    badge: {
      tr: "El Yapımı",
      en: "Handcrafted"
    },
    category: "popular",
    image: sutluKadayifDessert
  },
  {
    id: "m4",
    name: {
      tr: "Geleneksel Üzüm Şırası",
      en: "Traditional Grape Sherbet (Şıra)"
    },
    description: {
      tr: "Kırmızı üzümlerin fermente edilmeden soğuk sıkılmasıyla hazırlanan, İnegöl köftenin yanındaki vazgeçilmez milli içeceğimiz.",
      en: "Cold-pressed non-alcoholic red grape must. Our legendary national beverage traditionally served alongside İnegöl meatballs."
    },
    price: 85,
    badge: {
      tr: "Özel Yapım",
      en: "House Special"
    },
    category: "popular",
    image: traditionalTableSpread
  },
  {
    id: "m5",
    name: {
      tr: "Salata Yoğurt",
      en: "Cucumber Yogurt Salad"
    },
    description: {
      tr: "Tarihi İnegöl mandıra yoğurdundan yapılan, taze salatalık, sızma zeytinyağı, sarımsak ve kuru nane dokunuşuyla ferahlatıcı lezzet.",
      en: "Refreshing appetizer made from heritage thick strained yogurt, fresh diced cucumbers, garlic, olive oil, and dried mint."
    },
    price: 90,
    category: "salads",
    image: historicRestaurantInterior
  },
  {
    id: "m6",
    name: {
      tr: "Hacı Aziz Acı Sos",
      en: "Hacı Aziz Special Hot Sauce"
    },
    description: {
      tr: "Közlenmiş İnegöl kırmızı biberleri, domates, sarımsak, sızma zeytinyağı ve sırrımız olan baharat karışımı ile hazırlanan efsane sos.",
      en: "A legendary house-recipe sauce made from roasted sweet red peppers, tomatoes, garlic, extra virgin olive oil, and our secret herb blend."
    },
    price: 75,
    badge: {
      tr: "Çok Satan",
      en: "Best Seller"
    },
    category: "sauces_mezeler",
    image: traditionalTableSpread
  },
  {
    id: "m7",
    name: {
      tr: "Acılı Ezme",
      en: "Spicy Fresh Tomato Ezme"
    },
    description: {
      tr: "Zırhla incecik kıyılmış taze domates, acı sivri biber, kırmızı soğan, ceviz içi, taze nane ve nar ekşisi sosu.",
      en: "Hand-chopped fresh tomatoes, hot green peppers, red onions, walnuts, fresh mint, and a touch of pomegranate molasses."
    },
    price: 80,
    category: "sauces_mezeler",
    image: traditionalTableSpread
  },
  {
    id: "m8",
    name: {
      tr: "Demleme Türk Çayı",
      en: "Brewed Turkish Black Tea"
    },
    description: {
      tr: "Bakır demlikte demlenen, ince belli cam bardakta sunulan taze ve tavşan kanı Karadeniz çayı.",
      en: "Freshly brewed high-grade Turkish black tea from the Black Sea region, served in a traditional tulip-shaped glass."
    },
    price: 30,
    category: "popular",
    image: historicRestaurantInterior
  }
];

export const reviews: Review[] = [
  {
    id: "r1",
    author: "Zeynep Karadeniz",
    stars: 5,
    date: {
      tr: "2 hafta önce",
      en: "2 weeks ago"
    },
    text: {
      tr: "90 yıllık tarihi gerçekten hissettiriyorlar. İnegöl köftesi yumuşacık ve içi inanılmaz sulu. Piyazı tahinli ve tam kıvamında. Kadın işletmeciler olmasının verdiği o nezaket ve titizlik her detayda belli. Kesinlikle Bursa'daki tek adresimiz!",
      en: "They truly make you feel the 90 years of history. The İnegöl meatballs are super soft and incredibly juicy. The bean piyaz with tahini is perfect. The warmth and cleanliness of a women-led family business shines through in every detail. Absolutely our favorite spot in Bursa!"
    },
    badge: "Local Guide",
    reviewCount: 142,
    photoCount: 88
  },
  {
    id: "r2",
    author: "Ahmet Yılmaz",
    stars: 5,
    date: {
      tr: "1 ay önce",
      en: "1 month ago"
    },
    text: {
      tr: "İnegöl'den geçerken uğradık. Çoğu köfteci fabrikasyona dönmüşken, burası o eski, samimi odun ateşi lezzetini korumayı başarmış. Şırası çok lezzetli, aşırı tatlı değil ve köfteyle muhteşem gidiyor. Fiyatlar kalitesine göre son derece makul.",
      en: "We stopped by on our way through İnegöl. While most meatball places have gone commercial, this place preserves that authentic old-school wood-fire taste. Their grape must (şıra) is delicious and not overly sweet. Prices are very reasonable for this quality."
    },
    badge: "Local Guide",
    reviewCount: 38,
    photoCount: 12
  },
  {
    id: "r3",
    author: "Sarah Jenkins",
    stars: 5,
    date: {
      tr: "3 hafta önce",
      en: "3 weeks ago"
    },
    text: {
      tr: "Bir gezgin olarak Bursa'nın en eski köftecisini arıyordum ve Hacı Aziz'i buldum. Harika bir deneyimdi! Personel çok güler yüzlüydü ve İngilizce menüleri olması çok yardımcı oldu. İnegöl köfte ve Sütlü Kadayıf mükemmeldi!",
      en: "As a traveler, I was looking for the oldest authentic meatball spot in Bursa and found Hacı Aziz. What a spectacular experience! The staff was incredibly welcoming, and having an English menu helped. The meatballs and the milk kadayıf were stellar!"
    },
    badge: "Super Reviewer",
    reviewCount: 215,
    photoCount: 174
  },
  {
    id: "r4",
    author: "Mustafa Çelik",
    stars: 4,
    date: {
      tr: "3 gün önce",
      en: "3 days ago"
    },
    text: {
      tr: "Dedemle birlikte geldik, kendisi 50 yıl önce de buraya gelirmiş ve lezzetin hiç değişmediğini söyledi. İnegöl köftenin lokum gibi kıvamı, piyazın lezzeti muazzam. Özellikle cuma günleri öğle saatlerinde çok kalabalık oluyor ama servis hızlı.",
      en: "I came with my grandfather, who used to dine here 50 years ago, and he verified the taste has never changed. The meatballs are melt-in-your-mouth, and the piyaz is magnificent. It gets very busy on Friday lunchtimes, but service is lightning fast."
    },
    badge: "Local Guide",
    reviewCount: 84,
    photoCount: 45
  }
];

export const busynessData: BusynessHour[] = [
  { hour: "11:00", busyness: 20 },
  { hour: "12:00", busyness: 55 },
  { hour: "13:00", busyness: 85 },
  { hour: "14:00", busyness: 70 },
  { hour: "15:00", busyness: 45 },
  { hour: "16:00", busyness: 40 },
  { hour: "17:00", busyness: 50 },
  { hour: "18:00", busyness: 75 },
  { hour: "19:00", busyness: 95 },
  { hour: "20:00", busyness: 85 },
  { hour: "21:00", busyness: 50 },
  { hour: "22:00", busyness: 10 }
];

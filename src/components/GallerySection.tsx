import { useState } from 'react';
import { Camera, ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import { TranslationDictionary, Language } from '../types';
import sizzlingKofteHero from '../assets/images/sizzling_inegol_kofte_hero_1784303421592.jpg';
import traditionalTableSpread from '../assets/images/traditional_table_spread_1784303450207.jpg';
import historicRestaurantInterior from '../assets/images/historic_restaurant_interior_1784303436117.jpg';
import sutluKadayifDessert from '../assets/images/sutlu_kadayif_dessert_1784303463384.jpg';

interface GallerySectionProps {
  currentLang: Language;
  dict: TranslationDictionary;
}

export default function GallerySection({ currentLang, dict }: GallerySectionProps) {
  const images = [
    {
      src: sizzlingKofteHero,
      alt: {
        tr: 'Izgarada Pişen İnegöl Köfteleri',
        en: 'Sizzling İnegöl Meatballs on Charcoal'
      },
      desc: {
        tr: 'Meşe odunu kömürü ateşinde usta ellerce hazırlanan köftelerimizin o eşsiz cızırtı anı.',
        en: 'The legendary cylindrical meatballs grilling slowly over authentic oak wood charcoal embers.'
      },
      tag: { tr: 'Izgara Klasikleri', en: 'Grill Classic' },
      ratio: 'aspect-[16/10]'
    },
    {
      src: traditionalTableSpread,
      alt: {
        tr: 'Hacı Aziz Geleneksel Sofra Yayılımı',
        en: 'Authentic Turkish Dining Table Spread'
      },
      desc: {
        tr: 'İnegöl Köfte, tahinli fasulye piyazı, acı köz biber sosu ve geleneksel soğuk üzüm şırası.',
        en: 'Freshly grilled meatballs served alongside tahini white bean piyaz, sweet hot pepper sauce, and cold grape sherbet.'
      },
      tag: { tr: 'Ziyafet', en: 'Feast' },
      ratio: 'aspect-square'
    },
    {
      src: historicRestaurantInterior,
      alt: {
        tr: '1934 Nostaljik Restoran Atmosferi',
        en: 'Cozy Historic Dining Interior'
      },
      desc: {
        tr: 'Doğal ahşap detaylar, nostaljik aile fotoğrafları ve bakır aksesuarlarla donatılmış tarihi salonumuz.',
        en: 'Our traditional wood-detailed dining room filled with black-and-white family portraits since 1934.'
      },
      tag: { tr: 'Atmosfer', en: 'Heritage' },
      ratio: 'aspect-square'
    },
    {
      src: sutluKadayifDessert,
      alt: {
        tr: 'Antep Fıstıklı Sütlü Kadayıf',
        en: 'Traditional Sütlü Kadayıf with Pistachio'
      },
      desc: {
        tr: 'Özel mandıra sütüyle hazırlanan şerbetle ıslatılmış hafif ve çıtır tel kadayıf, üzeri bol fıstıklı.',
        en: 'Crisp shredded pastry soaked in light milk syrup, topped generously with crushed green Turkish pistachios.'
      },
      tag: { tr: 'El Yapımı Tatlı', en: 'Dessert' },
      ratio: 'aspect-[16/10]'
    }
  ];

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === 0 ? images.length - 1 : (prev ?? 0) - 1));
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === images.length - 1 ? 0 : (prev ?? 0) + 1));
  };

  return (
    <section id="gallery" className="py-24 bg-brand-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title block */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 bg-brand-red-900/5 border border-brand-red-800/10 px-3 py-1 rounded-full text-brand-red-800 text-xs font-semibold tracking-wider uppercase">
            <Camera size={12} className="text-brand-red-800" />
            <span>{dict.galleryTitle}</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-brand-charcoal tracking-tight leading-tight">
            {dict.gallerySubtitle}
          </h2>
          <p className="text-stone-500 font-sans text-xs sm:text-sm font-light">
            {currentLang === 'tr' ? 'Mutfaktan ve tarihi restoranımızdan en leziz anları fotoğraflarla inceleyin.' : 'Take a peek at the sensory experience waiting for you at Hacı Aziz.'}
          </p>
        </div>

        {/* Bento Grid Gallery Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setLightboxIndex(index)}
              className="group relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer border border-brand-gold-500/10 bg-brand-charcoal/5 transform hover:-translate-y-1 transition duration-500"
            >
              {/* Photo Frame */}
              <div className={`${img.ratio} w-full overflow-hidden`}>
                <img
                  src={img.src}
                  alt={img.alt[currentLang]}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual hover vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/40 to-transparent opacity-80 group-hover:opacity-90 transition duration-500" />
              </div>

              {/* Photo Caption Label overlay */}
              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 flex flex-col justify-end text-brand-cream">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-widest font-semibold text-brand-gold-400 uppercase bg-brand-charcoal/40 border border-brand-gold-500/20 px-2.5 py-1 rounded">
                    {img.tag[currentLang]}
                  </span>
                  
                  {/* Zoom indicator icon */}
                  <span className="w-8 h-8 rounded-full bg-brand-gold-500/20 backdrop-blur-sm border border-brand-gold-500/30 flex items-center justify-center text-brand-gold-300 group-hover:bg-brand-gold-500 group-hover:text-brand-charcoal transition-all duration-300">
                    <Maximize2 size={13} />
                  </span>
                </div>
                
                <h3 className="font-serif font-bold text-xl sm:text-2xl mt-3 tracking-wide leading-tight text-brand-cream group-hover:text-brand-gold-300 transition duration-300">
                  {img.alt[currentLang]}
                </h3>
                
                <p className="text-brand-cream/70 text-xs sm:text-sm font-light mt-1.5 leading-relaxed font-sans line-clamp-2">
                  {img.desc[currentLang]}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Zoom Overlay Popup */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-brand-charcoal/95 flex flex-col justify-between p-4 sm:p-6 backdrop-blur-md">
          
          {/* Lightbox Top Panel */}
          <div className="flex items-center justify-between text-brand-cream py-2 border-b border-white/5 relative z-10">
            <span className="font-sans text-xs tracking-widest font-semibold uppercase text-brand-gold-400">
              {currentLang === 'tr' ? `FOTOĞRAF ${lightboxIndex + 1} / ${images.length}` : `PHOTO ${lightboxIndex + 1} / ${images.length}`}
            </span>
            <button
              onClick={() => setLightboxIndex(null)}
              className="text-brand-cream hover:text-brand-gold-400 p-2 rounded-full hover:bg-white/5 transition cursor-pointer"
            >
              <X size={24} />
            </button>
          </div>

          {/* Lightbox Main Slider Stage */}
          <div className="flex-1 flex items-center justify-between relative max-w-5xl mx-auto w-full my-6 sm:my-10">
            
            {/* Left Button Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:-left-16 z-10 w-11 h-11 rounded-full bg-black/40 hover:bg-brand-gold-500 hover:text-brand-charcoal text-brand-cream flex items-center justify-center border border-white/10 transition cursor-pointer"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Stage Center Active Image */}
            <div className="flex-1 h-full flex items-center justify-center px-4">
              <img
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt[currentLang]}
                className="max-w-full max-h-[60vh] sm:max-h-[70vh] object-contain rounded-2xl shadow-2xl border-2 border-white/10 animate-fade-in"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Right Button Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:-right-16 z-10 w-11 h-11 rounded-full bg-black/40 hover:bg-brand-gold-500 hover:text-brand-charcoal text-brand-cream flex items-center justify-center border border-white/10 transition cursor-pointer"
            >
              <ChevronRight size={24} />
            </button>

          </div>

          {/* Lightbox Bottom Info Panel */}
          <div className="max-w-3xl mx-auto text-center space-y-2 pb-4 text-brand-cream relative z-10">
            <h4 className="font-serif font-bold text-xl sm:text-2xl text-brand-gold-400">
              {images[lightboxIndex].alt[currentLang]}
            </h4>
            <p className="font-sans font-light text-xs sm:text-sm text-brand-cream/80 leading-relaxed max-w-xl mx-auto">
              {images[lightboxIndex].desc[currentLang]}
            </p>
          </div>

        </div>
      )}

    </section>
  );
}

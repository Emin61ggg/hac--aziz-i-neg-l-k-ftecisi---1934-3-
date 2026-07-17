import { useState } from 'react';
import { Utensils } from 'lucide-react';
import { Language } from './types';
import { translations } from './data/restaurantData';

// Component imports
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import MenuSection from './components/MenuSection';
import BusynessWidget from './components/BusynessWidget';
import GallerySection from './components/GallerySection';
import ReviewsSection from './components/ReviewsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  // Turkish is the proud default language for this historic İnegöl restaurant,
  // but guests can toggle to English instantly.
  const [lang, setLang] = useState<Language>('tr');
  const dict = translations[lang];

  return (
    <div className="relative min-h-screen bg-brand-cream text-stone-900 selection:bg-brand-gold-500 selection:text-brand-charcoal overflow-x-hidden">
      
      {/* 1. Frosted Navigation Bar */}
      <Header currentLang={lang} onLanguageChange={setLang} dict={dict} />

      {/* 2. Full-screen Hero Banner */}
      <Hero dict={dict} />

      {/* 3. Story / About / Women-Owned Pride Section */}
      <About dict={dict} />

      {/* 4. Services Section (Dine-in, Drive-through, Delivery strip) */}
      <section className="py-16 bg-white border-y border-stone-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10 space-y-2">
            <span className="text-[10px] font-mono font-bold text-brand-red-800 uppercase tracking-widest">
              {lang === 'tr' ? 'KONFORLU HİZMET' : 'PREMIUM SERVICE'}
            </span>
            <h3 className="font-serif font-black text-2xl sm:text-3xl text-brand-charcoal">
              {dict.servicesSubtitle}
            </h3>
          </div>

          <div className="flex justify-center">
            {/* Dine-In Card */}
            <div className="w-full max-w-md flex flex-col items-center text-center p-8 bg-brand-cream/40 rounded-2xl border border-stone-100 hover:border-brand-gold-500/20 hover:shadow-xl transition duration-300">
              <div className="w-12 h-12 rounded-full bg-brand-red-900/5 border border-brand-red-800/10 flex items-center justify-center text-brand-red-800 mb-4 shadow-sm">
                <Utensils size={20} />
              </div>
              <h4 className="font-serif font-bold text-lg text-brand-charcoal">
                {dict.serviceDineIn}
              </h4>
              <p className="text-xs sm:text-sm text-stone-500 font-light mt-2 max-w-xs leading-relaxed">
                {dict.serviceDineInDesc}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Food Menu, Pricing, and Customizable Plate Inquiry */}
      <MenuSection currentLang={lang} dict={dict} />

      {/* 6. Popular Times Busyness Chart & Slider */}
      <BusynessWidget currentLang={lang} dict={dict} />

      {/* 8. Bento Grid Lightbox Photo Gallery */}
      <GallerySection currentLang={lang} dict={dict} />

      {/* 9. Reviews & Ratings Breakdown */}
      <ReviewsSection currentLang={lang} dict={dict} />

      {/* 10. Location, Address details & Google Map frame */}
      <ContactSection currentLang={lang} dict={dict} />

      {/* 11. Heritage Crest Footer */}
      <Footer currentLang={lang} dict={dict} />

    </div>
  );
}


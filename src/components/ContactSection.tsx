import { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, Instagram, ExternalLink, HelpCircle, AlertCircle } from 'lucide-react';
import { TranslationDictionary, Language } from '../types';

interface ContactSectionProps {
  currentLang: Language;
  dict: TranslationDictionary;
}

export default function ContactSection({ currentLang, dict }: ContactSectionProps) {
  const [timeStr, setTimeStr] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  const [hoursLeft, setHoursLeft] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format ticking digital clock
      const hh = String(now.getHours()).padStart(2, '0');
      const mm = String(now.getMinutes()).padStart(2, '0');
      const ss = String(now.getSeconds()).padStart(2, '0');
      setTimeStr(`${hh}:${mm}:${ss}`);

      const h = now.getHours();
      // Open between 11:00 and 22:00
      if (h >= 11 && h < 22) {
        setIsOpen(true);
        setHoursLeft(22 - h);
      } else {
        setIsOpen(false);
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" className="py-24 bg-brand-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
          
          {/* Left Column: Contact info & Real-time clock status */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-1.5 bg-brand-red-900/5 border border-brand-red-800/10 px-3 py-1 rounded-full text-brand-red-800 text-xs font-semibold tracking-wider uppercase font-sans">
                <MapPin size={12} className="text-brand-red-800" />
                <span>{dict.contactTitle}</span>
              </div>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-brand-charcoal tracking-tight leading-tight">
                {dict.contactSubtitle}
              </h2>
            </div>

            {/* Dynamic Open/Closed Status Card */}
            <div className="bg-white border border-brand-gold-500/15 p-6 rounded-3xl shadow-xl space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-brand-red-900/5 p-3 rounded-bl-3xl text-[10px] font-mono font-bold text-stone-400">
                LIVE
              </div>

              <div className="flex items-center space-x-4">
                {/* Visual LED status light */}
                <span className={`flex h-4 w-4 relative`}>
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isOpen ? 'bg-emerald-400' : 'bg-red-400'}`} />
                  <span className={`relative inline-flex rounded-full h-4 w-4 ${isOpen ? 'bg-emerald-500' : 'bg-red-500'}`} />
                </span>

                <div className="flex flex-col">
                  <span className="font-serif font-bold text-lg text-brand-charcoal leading-tight">
                    {isOpen 
                      ? (currentLang === 'tr' ? 'Şu An Açığız' : 'We are Open Now') 
                      : (currentLang === 'tr' ? 'Şu An Kapalıyız' : 'We are Closed Now')
                    }
                  </span>
                  <span className="text-xs text-stone-500 font-sans mt-0.5">
                    {isOpen
                      ? (currentLang === 'tr' ? `Kapanışa ${hoursLeft} saat kaldı` : `Closing in ${hoursLeft} hours`)
                      : (currentLang === 'tr' ? 'Açılış: Her gün 11:00' : 'Opening: Every day at 11:00 AM')
                    }
                  </span>
                </div>
              </div>

              {/* Digital Clock display */}
              <div className="border-t border-stone-100 pt-4 flex justify-between items-center text-xs">
                <span className="text-stone-400 uppercase tracking-widest font-mono font-bold">
                  {currentLang === 'tr' ? 'YEREL SAAT' : 'LOCAL SYSTEM TIME'}
                </span>
                <span className="font-mono text-sm font-bold text-brand-red-900 bg-brand-cream border px-2.5 py-1 rounded">
                  {timeStr}
                </span>
              </div>
            </div>

            {/* Address, Phone, Hours text fields */}
            <div className="space-y-6 text-stone-700 font-sans text-sm">
              
              {/* Address details */}
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-brand-red-900/5 border border-brand-red-800/10 flex items-center justify-center text-brand-red-800 shrink-0">
                  <MapPin size={18} />
                </div>
                <div className="space-y-1">
                  <span className="block font-bold text-stone-500 text-xs uppercase tracking-wider font-mono">
                    {dict.addressLabel}
                  </span>
                  <p className="font-medium text-brand-charcoal text-sm leading-relaxed">
                    Burhaniye, İstiklal Cd. No:13, 16400 İnegöl/Bursa, Turkey
                  </p>
                </div>
              </div>

              {/* Phone details */}
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-brand-red-900/5 border border-brand-red-800/10 flex items-center justify-center text-brand-red-800 shrink-0">
                  <Phone size={18} />
                </div>
                <div className="space-y-1">
                  <span className="block font-bold text-stone-500 text-xs uppercase tracking-wider font-mono">
                    {dict.phoneLabel}
                  </span>
                  <a href="tel:02247151493" className="block font-serif font-bold text-brand-red-800 text-lg hover:underline">
                    0224 715 14 93
                  </a>
                </div>
              </div>

              {/* Working hours details */}
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-brand-red-900/5 border border-brand-red-800/10 flex items-center justify-center text-brand-red-800 shrink-0">
                  <Clock size={18} />
                </div>
                <div className="space-y-1">
                  <span className="block font-bold text-stone-500 text-xs uppercase tracking-wider font-mono">
                    {dict.hoursLabel}
                  </span>
                  <p className="font-medium text-brand-charcoal text-sm leading-relaxed">
                    {dict.hoursValue}
                  </p>
                </div>
              </div>

              {/* Instagram link */}
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-brand-red-900/5 border border-brand-red-800/10 flex items-center justify-center text-brand-red-800 shrink-0">
                  <Instagram size={18} />
                </div>
                <div className="space-y-1">
                  <span className="block font-bold text-stone-500 text-xs uppercase tracking-wider font-mono">
                    {dict.instagramLabel}
                  </span>
                  <a
                    href="https://www.instagram.com/haciazizinegolkoftecisi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 font-semibold text-stone-700 hover:text-brand-red-800 text-sm"
                  >
                    <span>@haciazizinegolkoftecisi</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Google Maps Iframe */}
          <div className="lg:col-span-7 h-96 lg:h-auto min-h-[350px]">
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative group">
              <iframe
                title="Hacı Aziz İnegöl Köftecisi Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.8838381830206!2d29.507641276536968!3d40.0773663714975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb43df99f1fae3%3A0xcda8d7dfb2d6a5d2!2sBurhaniye%2C%20%C4%B0stiklal%20Cd.%20No%3A13%2C%2016400%20%C4%B0neg%C3%B6l%2FBursa%2C%20Turkey!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter grayscale-[15%] group-hover:grayscale-0 transition duration-700 h-full w-full"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

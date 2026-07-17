import { useState, MouseEvent } from 'react';
import { Instagram, ArrowUp, Heart } from 'lucide-react';
import { TranslationDictionary, Language } from '../types';

interface FooterProps {
  currentLang: Language;
  dict: TranslationDictionary;
}

export default function Footer({ currentLang, dict }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e: MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-charcoal border-t border-brand-gold-500/10 text-brand-cream/60 py-16 font-sans relative overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-red-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center space-y-10">
        
        {/* Crest Logo */}
        <div className="flex flex-col items-center text-center space-y-3">
          <div className="w-14 h-14 rounded-full border border-brand-gold-500/50 flex items-center justify-center bg-brand-red-900/40 text-brand-gold-400 font-serif font-black text-xl shadow-inner">
            HA
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-brand-cream text-lg tracking-wide">
              Hacı Aziz İnegöl Köftecisi - 1934
            </span>
            <span className="text-[10px] text-brand-gold-400 font-bold uppercase tracking-[0.25em] mt-0.5">
              {dict.footerHeritageBadge}
            </span>
          </div>
        </div>

        {/* Quick Footer Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs sm:text-sm font-semibold tracking-wide">
          <a href="#about" className="hover:text-brand-gold-400 transition">{currentLang === 'tr' ? 'Hikayemiz' : 'Our Story'}</a>
          <a href="#menu" className="hover:text-brand-gold-400 transition">{currentLang === 'tr' ? 'Menü' : 'Menu'}</a>
          <a href="#busyness" className="hover:text-brand-gold-400 transition">{currentLang === 'tr' ? 'Yoğunluk Analizi' : 'Live Popular Times'}</a>
          <a href="#gallery" className="hover:text-brand-gold-400 transition">{currentLang === 'tr' ? 'Galeri' : 'Gallery'}</a>
          <a href="#contact" className="hover:text-brand-gold-400 transition">{currentLang === 'tr' ? 'Konum & İletişim' : 'Contact'}</a>
        </div>

        {/* Mid social panel */}
        <div className="flex items-center space-x-6 border-y border-brand-cream/5 py-6 w-full max-w-lg justify-center">
          {/* Instagram social button */}
          <a
            href="https://www.instagram.com/haciazizinegolkoftecisi"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-brand-cream/15 hover:border-brand-gold-500 flex items-center justify-center text-brand-cream hover:text-brand-gold-400 hover:bg-brand-gold-500/5 transition cursor-pointer"
            title="Follow on Instagram"
          >
            <Instagram size={18} />
          </a>

          {/* Women owned indicator link */}
          <div className="flex items-center space-x-1.5 text-xs text-brand-gold-400/80 font-medium">
            <Heart size={12} className="fill-brand-gold-500 text-brand-gold-500" />
            <span>{dict.womenOwnedBadge}</span>
          </div>
        </div>

        {/* Copyright notice row */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full text-center sm:text-left gap-4 text-[11px] sm:text-xs text-brand-cream/40 border-t border-brand-cream/5 pt-8 font-medium">
          <div>
            <span>© {currentYear} {dict.brandName}. {dict.footerRights}</span>
          </div>
          
          {/* Scroll To Top button trigger */}
          <button
            onClick={handleScrollToTop}
            className="flex items-center space-x-1.5 hover:text-brand-gold-400 transition font-bold uppercase tracking-wider font-mono cursor-pointer"
          >
            <span>{currentLang === 'tr' ? 'YUKARI ÇIK' : 'BACK TO TOP'}</span>
            <ArrowUp size={13} />
          </button>
        </div>

      </div>
    </footer>
  );
}

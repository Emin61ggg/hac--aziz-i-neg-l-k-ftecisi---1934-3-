import { useState } from 'react';
import { Menu as MenuIcon, X, Phone, Languages, Heart } from 'lucide-react';
import { Language, TranslationDictionary } from '../types';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  dict: TranslationDictionary;
}

export default function Header({ currentLang, onLanguageChange, dict }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: currentLang === 'tr' ? 'Hikayemiz' : 'Our Story' },
    { href: '#menu', label: currentLang === 'tr' ? 'Menü' : 'Menu' },
    { href: '#busyness', label: currentLang === 'tr' ? 'Yoğunluk' : 'Busyness' },
    { href: '#gallery', label: currentLang === 'tr' ? 'Galeri' : 'Gallery' },
    { href: '#reviews', label: currentLang === 'tr' ? 'Yorumlar' : 'Reviews' },
    { href: '#contact', label: currentLang === 'tr' ? 'İletişim' : 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-brand-charcoal/90 backdrop-blur-md border-b border-brand-gold-500/10 shadow-lg" id="header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Name & Crest */}
        <a href="#header" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 rounded-full border border-brand-gold-500 flex items-center justify-center bg-brand-red-900/40 shadow-inner group-hover:border-brand-gold-300 transition duration-300">
            <span className="font-serif font-bold text-brand-gold-400 text-lg group-hover:text-brand-gold-300 transition">H</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-brand-cream text-lg tracking-wide group-hover:text-brand-gold-300 transition leading-tight">
              Hacı Aziz
            </span>
            <span className="font-sans font-medium text-brand-gold-400 text-[10px] tracking-[0.2em] uppercase leading-none mt-0.5">
              Köftecisi 1934
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-brand-cream/80 hover:text-brand-gold-400 font-sans text-sm font-medium tracking-wide transition duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-brand-gold-400 after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Language Switch & Action Buttons */}
        <div className="hidden sm:flex items-center space-x-4">
          {/* Women Owned Sub-Indicator */}
          <div className="flex items-center space-x-1.5 bg-brand-red-900/30 border border-brand-red-800 px-2.5 py-1 rounded text-[11px] text-brand-gold-300/90 font-medium">
            <Heart size={11} className="fill-brand-gold-500 text-brand-gold-500" />
            <span>{dict.womenOwnedBadge}</span>
          </div>

          {/* Bilingual Toggle */}
          <div className="flex items-center bg-brand-charcoal border border-brand-gold-500/20 rounded-full p-0.5 relative">
            <button
              onClick={() => onLanguageChange('tr')}
              className={`px-3 py-1 text-xs font-semibold rounded-full cursor-pointer transition-all duration-300 ${
                currentLang === 'tr'
                  ? 'bg-brand-gold-500 text-brand-charcoal shadow-md'
                  : 'text-brand-cream/60 hover:text-brand-cream'
              }`}
            >
              TR
            </button>
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-3 py-1 text-xs font-semibold rounded-full cursor-pointer transition-all duration-300 ${
                currentLang === 'en'
                  ? 'bg-brand-gold-500 text-brand-charcoal shadow-md'
                  : 'text-brand-cream/60 hover:text-brand-cream'
              }`}
            >
              EN
            </button>
          </div>

          {/* Quick-Call CTA */}
          <a
            href="tel:02247151493"
            className="flex items-center space-x-2 bg-brand-gold-500 hover:bg-brand-gold-400 text-brand-charcoal px-4 py-2 rounded-lg font-sans text-sm font-semibold tracking-wide transition duration-300 shadow-md"
          >
            <Phone size={14} className="animate-pulse" />
            <span>0224 715 14 93</span>
          </a>
        </div>

        {/* Mobile Buttons (Phone & Hamburger) */}
        <div className="flex items-center lg:hidden space-x-3">
          {/* Language Switcher for mobile directly */}
          <button
            onClick={() => onLanguageChange(currentLang === 'tr' ? 'en' : 'tr')}
            className="p-2 rounded-md text-brand-cream hover:bg-brand-red-900/30 border border-brand-gold-500/25 flex items-center justify-center cursor-pointer"
            title="Switch Language"
          >
            <Languages size={18} className="text-brand-gold-400" />
            <span className="ml-1 text-[11px] font-bold text-brand-cream">{currentLang === 'tr' ? 'EN' : 'TR'}</span>
          </button>

          {/* Mobile phone button */}
          <a
            href="tel:02247151493"
            className="p-2 bg-brand-gold-500 text-brand-charcoal rounded-md flex items-center justify-center sm:hidden shadow-md"
            title="Call Restaurant"
          >
            <Phone size={18} />
          </a>

          {/* Mobile Hamburger menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-brand-cream hover:text-brand-gold-400 cursor-pointer transition focus:outline-none"
          >
            {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-charcoal border-t border-brand-gold-500/10 animate-fade-in">
          <div className="px-4 pt-3 pb-6 space-y-3 shadow-2xl">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-brand-cream/80 hover:text-brand-gold-400 text-base font-semibold py-2.5 border-b border-brand-cream/5 transition duration-200"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 flex flex-col space-y-3">
              <div className="flex items-center justify-between px-1">
                <span className="text-brand-cream/60 text-xs font-semibold">{dict.womenOwnedBadge}</span>
                <span className="text-brand-gold-400 font-serif text-xs italic">Est. 1934</span>
              </div>

              <a
                href="tel:02247151493"
                className="w-full flex items-center justify-center space-x-2 bg-brand-gold-500 text-brand-charcoal py-3 rounded-lg font-semibold tracking-wide shadow"
              >
                <Phone size={16} />
                <span>{dict.callNow} (0224 715 14 93)</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

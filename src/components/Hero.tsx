import { Star, MapPin, ChevronRight, Calendar } from 'lucide-react';
import { TranslationDictionary } from '../types';
import inegolKofteHero from '../assets/images/sizzling_inegol_kofte_hero_1784303421592.jpg';

interface HeroProps {
  dict: TranslationDictionary;
}

export default function Hero({ dict }: HeroProps) {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-brand-charcoal pt-20">
      {/* Background Image with Ken Burns zoom effect */}
      <div className="absolute inset-0">
        <img
          src={inegolKofteHero}
          alt="Sizzling İnegöl Köfte"
          className="w-full h-full object-cover opacity-60 scale-105 animate-[kenburns_45s_ease_infinite]"
          referrerPolicy="no-referrer"
        />
        {/* Dark Vignette Overlay for premium legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/60 to-brand-charcoal/80" />
      </div>

      {/* Hero Content */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Rating & Review Badge */}
        <div className="inline-flex items-center space-x-2 bg-brand-charcoal/80 backdrop-blur border border-brand-gold-500/30 px-4 py-2 rounded-full mb-6 shadow-xl animate-fade-in animate-[bounce_4s_infinite]">
          <div className="flex text-brand-gold-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-brand-gold-400 text-brand-gold-400" />
            ))}
          </div>
          <span className="text-brand-cream text-xs font-semibold tracking-wider font-sans">
            {dict.ratingBadge}
          </span>
        </div>

        {/* Heritage circular crest indicator */}
        <div className="w-16 h-16 rounded-full border border-brand-gold-500/40 flex items-center justify-center mb-4 bg-brand-red-900/20 text-brand-gold-400 text-sm font-serif font-bold tracking-widest uppercase">
          1934
        </div>

        {/* Brand Name Title */}
        <h1 className="font-serif font-bold text-4xl sm:text-6xl md:text-7xl text-brand-cream tracking-tight max-w-4xl leading-tight">
          Hacı Aziz <span className="text-brand-gold-400 block sm:inline">İnegöl Köftecisi</span>
        </h1>

        {/* Tagline */}
        <p className="font-sans font-light text-base sm:text-xl text-brand-cream/90 max-w-2xl mt-6 tracking-wide leading-relaxed">
          {dict.brandTagline}
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
          {/* View Menu Button */}
          <a
            href="#menu"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-brand-gold-500 hover:bg-brand-gold-400 text-brand-charcoal px-8 py-4 rounded-xl font-sans text-base font-semibold tracking-wide shadow-lg hover:shadow-brand-gold-500/20 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>{dict.viewMenu}</span>
            <ChevronRight size={18} />
          </a>

          {/* Get Directions Button */}
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-brand-charcoal/80 hover:bg-brand-charcoal border border-brand-cream/20 hover:border-brand-gold-500/50 text-brand-cream px-8 py-4 rounded-xl font-sans text-base font-semibold tracking-wide shadow-lg backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <MapPin size={18} className="text-brand-gold-400" />
            <span>{dict.getDirections}</span>
          </a>
        </div>
      </div>

      {/* Decorative wave divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[40px] text-brand-cream fill-current"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,42.4V0Z" />
        </svg>
      </div>
    </section>
  );
}

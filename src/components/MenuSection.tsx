import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { TranslationDictionary, Language } from '../types';
import { menuItems } from '../data/restaurantData';

interface MenuSectionProps {
  currentLang: Language;
  dict: TranslationDictionary;
}

export default function MenuSection({ currentLang, dict }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'popular' | 'salads' | 'sauces_mezeler'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter items
  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const itemTitle = (item.name[currentLang] || '').toLowerCase();
    const itemDesc = (item.description[currentLang] || '').toLowerCase();
    const query = searchQuery.toLowerCase();
    const matchesSearch = itemTitle.includes(query) || itemDesc.includes(query);
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="menu" className="py-24 bg-brand-charcoal text-brand-cream relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1 bg-brand-gold-500/10 border border-brand-gold-500/30 px-3 py-1 rounded-full text-brand-gold-400 text-xs font-semibold tracking-wider uppercase">
            <span>{currentLang === 'tr' ? 'TESCİLLİ LEZZETLER' : 'CERTIFIED FLAVORS'}</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-5xl tracking-tight text-brand-cream leading-tight">
            {dict.menuTitle}
          </h2>
          <p className="font-sans text-brand-cream/70 text-sm sm:text-base font-light">
            {dict.menuSubtitle}
          </p>

          {/* Average per person price label */}
          <div className="inline-block bg-brand-red-900/40 border border-brand-red-800/40 px-4 py-2 rounded-xl text-xs sm:text-sm text-brand-gold-300 font-medium">
            {dict.menuPriceIndicator}
          </div>
        </div>

        {/* Filter Toolbar (Search & Categories) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-brand-charcoal border border-brand-gold-500/15 p-4 sm:p-6 rounded-2xl mb-12 shadow-2xl">
          
          {/* Categories Tab Selector */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-brand-gold-500 text-brand-charcoal shadow-lg'
                  : 'text-brand-cream/80 hover:text-brand-cream hover:bg-white/5'
              }`}
            >
              {currentLang === 'tr' ? 'Tüm Menü' : 'Full Menu'}
            </button>
            <button
              onClick={() => setActiveCategory('popular')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                activeCategory === 'popular'
                  ? 'bg-brand-gold-500 text-brand-charcoal shadow-lg'
                  : 'text-brand-cream/80 hover:text-brand-cream hover:bg-white/5'
              }`}
            >
              {dict.categoryPopular}
            </button>
            <button
              onClick={() => setActiveCategory('salads')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                activeCategory === 'salads'
                  ? 'bg-brand-gold-500 text-brand-charcoal shadow-lg'
                  : 'text-brand-cream/80 hover:text-brand-cream hover:bg-white/5'
              }`}
            >
              {dict.categorySalads}
            </button>
            <button
              onClick={() => setActiveCategory('sauces_mezeler')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                activeCategory === 'sauces_mezeler'
                  ? 'bg-brand-gold-500 text-brand-charcoal shadow-lg'
                  : 'text-brand-cream/80 hover:text-brand-cream hover:bg-white/5'
              }`}
            >
              {dict.categorySaucesMezeler}
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-brand-cream/40">
              <Search size={16} />
            </span>
            <input
              type="text"
              placeholder={currentLang === 'tr' ? 'Lezzet veya malzeme ara...' : 'Search flavors or ingredients...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-brand-charcoal border border-brand-gold-500/20 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-brand-cream placeholder-brand-cream/40 focus:outline-none focus:border-brand-gold-500 focus:ring-1 focus:ring-brand-gold-500 transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-brand-cream/40 hover:text-brand-cream"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col bg-brand-charcoal border border-brand-gold-500/10 rounded-2xl overflow-hidden hover:border-brand-gold-500/35 hover:shadow-2xl hover:shadow-brand-gold-500/5 transition-all duration-300 flex-1 h-full"
            >
              {/* Photo Frame */}
              <div className="relative aspect-[4/3] overflow-hidden bg-brand-charcoal/80">
                <img
                  src={item.image}
                  alt={item.name[currentLang]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Custom Badge if exists */}
                {item.badge && (
                  <span className="absolute top-3 left-3 bg-brand-red-900 border border-brand-gold-500/40 text-brand-gold-400 text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded">
                    {item.badge[currentLang]}
                  </span>
                )}
              </div>

              {/* Text Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline gap-2">
                    <h3 className="font-serif font-bold text-lg text-brand-cream tracking-wide group-hover:text-brand-gold-300 transition duration-300 leading-tight">
                      {item.name[currentLang]}
                    </h3>
                  </div>
                  <p className="text-brand-cream/60 text-xs sm:text-sm font-light leading-relaxed line-clamp-3">
                    {item.description[currentLang]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No results notice */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-brand-charcoal border border-brand-gold-500/10 rounded-2xl">
            <p className="text-brand-cream/50 text-sm font-sans">
              {currentLang === 'tr' ? 'Aramanızla eşleşen hiçbir lezzet bulunamadı.' : 'No mouth-watering dishes match your query.'}
            </p>
          </div>
        )}

      </div>
    </section>
  );
}

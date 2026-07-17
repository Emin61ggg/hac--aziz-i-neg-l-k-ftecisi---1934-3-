import { Star, Quote, MessageSquare } from 'lucide-react';
import { TranslationDictionary, Language } from '../types';
import { reviews } from '../data/restaurantData';

interface ReviewsSectionProps {
  currentLang: Language;
  dict: TranslationDictionary;
}

export default function ReviewsSection({ currentLang, dict }: ReviewsSectionProps) {
  // Stat breakdown for 4.4 rating with 4,652 reviews
  const ratingBreakdown = [
    { stars: 5, percentage: 76 },
    { stars: 4, percentage: 16 },
    { stars: 3, percentage: 5 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 1 }
  ];

  return (
    <section id="reviews" className="py-24 bg-brand-charcoal text-brand-cream relative overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-red-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Heading block */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 bg-brand-gold-500/10 border border-brand-gold-500/30 px-3 py-1 rounded-full text-brand-gold-400 text-xs font-semibold tracking-wider uppercase">
            <MessageSquare size={12} className="text-brand-gold-400" />
            <span>{dict.reviewsTitle}</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-brand-cream tracking-tight leading-tight">
            {dict.reviewsSubtitle}
          </h2>
          <p className="text-brand-cream/70 font-sans text-xs sm:text-sm font-light">
            {dict.reviewsCredibility}
          </p>
        </div>

        {/* Reviews Dashboard grid: Stats left, Cards right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Side: Rating Aggregate Panel */}
          <div className="lg:col-span-4 bg-brand-charcoal/50 border border-brand-gold-500/15 p-6 sm:p-8 rounded-3xl space-y-6">
            <div className="text-center space-y-2">
              <div className="font-serif font-black text-6xl text-brand-gold-400 leading-none">
                4.4
              </div>
              <div className="flex justify-center text-brand-gold-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className={`${i < 4 ? 'fill-brand-gold-400 text-brand-gold-400' : 'fill-none text-brand-gold-400/40'}`} />
                ))}
              </div>
              <p className="text-xs text-brand-cream/60 uppercase tracking-wider font-mono font-bold pt-2">
                {currentLang === 'tr' ? '4,652 TOPLAM DEĞERLENDİRME' : '4,652 TOTAL REVIEWS'}
              </p>
            </div>

            {/* Progress Bars Breakdown */}
            <div className="space-y-3 pt-4 border-t border-brand-gold-500/10">
              {ratingBreakdown.map((row) => (
                <div key={row.stars} className="flex items-center space-x-3 text-xs text-brand-cream/80">
                  <span className="font-mono font-bold w-3">{row.stars}</span>
                  <Star size={11} className="fill-brand-gold-400 text-brand-gold-400 shrink-0" />
                  
                  {/* Outer Bar */}
                  <div className="flex-1 h-2 bg-brand-cream/10 rounded-full overflow-hidden">
                    {/* Inner progress fill */}
                    <div
                      className="h-full bg-brand-gold-400 rounded-full"
                      style={{ width: `${row.percentage}%` }}
                    />
                  </div>
                  
                  <span className="font-mono font-semibold w-8 text-right text-brand-cream/60">
                    {row.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Masonry Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="group flex flex-col justify-between bg-brand-charcoal/50 border border-brand-gold-500/10 p-6 rounded-2xl hover:border-brand-gold-500/25 transition duration-300 relative"
              >
                {/* Vintage quote sign decoration */}
                <Quote size={40} className="absolute right-4 top-4 text-brand-cream/[0.03] group-hover:text-brand-cream/[0.05] transition pointer-events-none" />

                <div className="space-y-4">
                  {/* Top rating row */}
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <h4 className="font-serif font-bold text-base text-brand-cream tracking-wide">
                        {rev.author}
                      </h4>
                      
                      {/* Reviewer Google local guide sub-tag */}
                      {rev.badge && (
                        <div className="flex items-center space-x-1.5 text-[10px] text-brand-gold-400/90 font-semibold font-mono">
                          <span className="w-1.5 h-1.5 bg-brand-gold-500 rounded-full animate-pulse" />
                          <span>{rev.badge} • {rev.reviewCount} {currentLang === 'tr' ? 'Yorum' : 'Reviews'}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex text-brand-gold-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} className={`${i < rev.stars ? 'fill-brand-gold-400 text-brand-gold-400' : 'text-brand-gold-400/35'}`} />
                      ))}
                    </div>
                  </div>

                  {/* Body quote text */}
                  <p className="text-brand-cream/80 text-xs sm:text-sm font-light leading-relaxed font-sans italic">
                    "{rev.text[currentLang]}"
                  </p>
                </div>

                {/* Footer date/source indicator */}
                <div className="mt-6 pt-4 border-t border-brand-cream/5 flex justify-between items-center text-[10px] text-brand-cream/40 font-semibold uppercase tracking-wider font-mono">
                  <span>Google Business</span>
                  <span>{rev.date[currentLang]}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

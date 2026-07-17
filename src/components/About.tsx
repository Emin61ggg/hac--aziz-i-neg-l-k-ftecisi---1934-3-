import { Utensils } from 'lucide-react';
import { TranslationDictionary } from '../types';
import traditionalTableSpread from '../assets/images/traditional_table_spread_1784303450207.jpg';
import historicRestaurantInterior from '../assets/images/historic_restaurant_interior_1784303436117.jpg';

interface AboutProps {
  dict: TranslationDictionary;
}

export default function About({ dict }: AboutProps) {
  return (
    <section id="about" className="py-24 bg-brand-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Images Collage */}
          <div className="lg:col-span-5 relative">
            {/* Table spread background image */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform -rotate-2 relative z-10 hover:rotate-0 transition duration-500">
              <img
                src={traditionalTableSpread}
                alt="Hacı Aziz Traditional Table Spread"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Interior restaurant overlapping image */}
            <div className="absolute -bottom-10 -right-4 w-[65%] aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border-4 border-white transform rotate-3 z-20 hover:rotate-0 transition duration-500 hidden sm:block">
              <img
                src={historicRestaurantInterior}
                alt="Hacı Aziz Historic Interior"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Est. 1934 Badge */}
            <div className="absolute -top-6 -left-6 bg-brand-red-900 border-2 border-brand-gold-500 text-brand-gold-400 font-serif font-bold text-center px-4 py-3 rounded-xl shadow-2xl z-30 transform -rotate-12">
              <div className="text-[10px] tracking-widest uppercase opacity-80">EST.</div>
              <div className="text-xl leading-none">1934</div>
            </div>
          </div>

          {/* Right Side: Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 bg-brand-red-900/10 border border-brand-red-800/15 px-3 py-1 rounded-full text-brand-red-800 text-xs font-semibold tracking-wider uppercase font-sans">
                <Utensils size={12} className="text-brand-red-800" />
                <span>{dict.ourStoryTitle}</span>
              </div>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-brand-charcoal tracking-tight leading-tight">
                {dict.ourStorySubtitle}
              </h2>
            </div>

            {/* Text blocks */}
            <div className="space-y-5 text-stone-700 font-sans text-base leading-relaxed font-light">
              <p>{dict.ourStoryText1}</p>
              <p>{dict.ourStoryText3}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

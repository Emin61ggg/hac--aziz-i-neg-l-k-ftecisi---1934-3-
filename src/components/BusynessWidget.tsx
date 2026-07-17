import { useState } from 'react';
import { Clock, Info, CheckCircle, TrendingUp, AlertTriangle, HelpCircle } from 'lucide-react';
import { TranslationDictionary, Language } from '../types';

interface BusynessWidgetProps {
  currentLang: Language;
  dict: TranslationDictionary;
}

export default function BusynessWidget({ currentLang, dict }: BusynessWidgetProps) {
  // Days of the week in TR / EN
  const days = [
    { key: 'mon', tr: 'Pazartesi', en: 'Monday' },
    { key: 'tue', tr: 'Salı', en: 'Tuesday' },
    { key: 'wed', tr: 'Çarşamba', en: 'Wednesday' },
    { key: 'thu', tr: 'Perşembe', en: 'Thursday' },
    { key: 'fri', tr: 'Cuma', en: 'Friday' },
    { key: 'sat', tr: 'Cumartesi', en: 'Saturday' },
    { key: 'sun', tr: 'Pazar', en: 'Sunday' }
  ];

  const [selectedDay, setSelectedDay] = useState<'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun'>('fri');
  const [selectedHour, setSelectedHour] = useState<number>(13); // 13:00 (1 PM) by default

  // Hourly base profiles depending on day category
  const getHourlyBusyness = (day: string, hour: number): number => {
    // Restaurant opening hours: 11:00 to 22:00 (represented by index 11 to 22)
    if (hour < 11 || hour > 22) return 0;
    
    // Friday profile (very busy lunch 12-2, extremely busy dinner 6-8.5)
    if (day === 'fri') {
      if (hour === 11) return 25;
      if (hour === 12) return 65;
      if (hour === 13) return 98; // Peak lunch
      if (hour === 14) return 80;
      if (hour === 15) return 45;
      if (hour === 16) return 40;
      if (hour === 17) return 60;
      if (hour === 18) return 85;
      if (hour === 19) return 96; // Peak dinner
      if (hour === 20) return 88;
      if (hour === 21) return 55;
      if (hour === 22) return 15;
    }

    // Weekend profile (sat, sun) - high steady from 1 PM to 8 PM
    if (day === 'sat' || day === 'sun') {
      if (hour === 11) return 35;
      if (hour === 12) return 60;
      if (hour === 13) return 85;
      if (hour === 14) return 90;
      if (hour === 15) return 88;
      if (hour === 16) return 75;
      if (hour === 17) return 80;
      if (hour === 18) return 95; // peak dinner
      if (hour === 19) return 98;
      if (hour === 20) return 85;
      if (hour === 21) return 45;
      if (hour === 22) return 10;
    }

    // Weekday profile (mon, tue, wed, thu) - normal lunch peak, moderate dinner
    if (hour === 11) return 15;
    if (hour === 12) return 50;
    if (hour === 13) return 75; // lunch peak
    if (hour === 14) return 55;
    if (hour === 15) return 30;
    if (hour === 16) return 25;
    if (hour === 17) return 40;
    if (hour === 18) return 65;
    if (hour === 19) return 82; // dinner peak
    if (hour === 20) return 70;
    if (hour === 21) return 35;
    if (hour === 22) return 5;

    return 0;
  };

  const currentBusyness = getHourlyBusyness(selectedDay, selectedHour);

  // Status text, wait time and recommendations based on occupancy
  const getStatusMetrics = (val: number) => {
    if (val >= 85) {
      return {
        text: currentLang === 'tr' ? 'Çok Yoğun (Zirve Saatler)' : 'Very Busy (Peak Hours)',
        color: 'text-red-500 bg-red-500/10 border-red-500/25',
        wait: currentLang === 'tr' ? '15 - 25 Dakika' : '15 - 25 Minutes',
        recommendation: currentLang === 'tr' ? 'Masa sırası olabilir, önceden rezervasyon veya sipariş önerilir.' : 'Seating queues likely. Fast track via our Booking Voucher below.'
      };
    }
    if (val >= 50) {
      return {
        text: currentLang === 'tr' ? 'Orta Yoğunluk' : 'Moderate Occupancy',
        color: 'text-brand-gold-400 bg-brand-gold-500/10 border-brand-gold-500/25',
        wait: currentLang === 'tr' ? '5 - 10 Dakika' : '5 - 10 Minutes',
        recommendation: currentLang === 'tr' ? 'Hızlıca yer bulabilirsiniz, servis hızı son derece iyidir.' : 'A lively atmosphere. Quick table seating and prompt service.'
      };
    }
    return {
      text: currentLang === 'tr' ? 'Sakin ve Rahat' : 'Calm & Leisurely',
      color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/25',
      wait: currentLang === 'tr' ? 'Sıra yok (Anında Seating)' : 'No queue (Instant seating)',
      recommendation: currentLang === 'tr' ? 'Ailenizle uzun ve keyifli bir sohbet için mükemmel bir zaman dilimi.' : 'Perfect window of time for quiet gatherings and relaxed dining.'
    };
  };

  const metrics = getStatusMetrics(currentBusyness);

  // Suggested Hourly Specialties
  const getHourlySpecialty = (hour: number) => {
    if (hour >= 11 && hour <= 14) {
      return {
        title: currentLang === 'tr' ? 'Öğle Klasikleri' : 'Lunch Classics Combo',
        desc: currentLang === 'tr' ? 'İnegöl Köfte + Tahinli Fasulye Piyazı + Üzüm Şırası' : 'Signature İnegöl Köfte + White Bean Piyaz + Ice-cold Grape Şıra'
      };
    }
    if (hour > 14 && hour <= 17) {
      return {
        title: currentLang === 'tr' ? 'Ata Yadigarı İkindi Kaçamağı' : 'Mid-Afternoon Tea Delight',
        desc: currentLang === 'tr' ? 'Sütlü Kadayıf + Tavşan Kanı Demleme Türk Çayı' : 'Crispy Sütlü Kadayıf + Freshly Brewed Copper-Pot Turkish Tea'
      };
    }
    return {
      title: currentLang === 'tr' ? 'Akşam Ziyafeti' : 'Historic Dinner Feast',
      desc: currentLang === 'tr' ? 'İnegöl Köfte + Hacı Aziz Acı Sos + Salata Yoğurt + Kadayıf' : 'İnegöl Köfte + Hacı Aziz House Hot Sauce + Creamy Yogurt Salad + Sütlü Kadayıf'
    };
  };

  const specialty = getHourlySpecialty(selectedHour);

  return (
    <section id="busyness" className="py-24 bg-brand-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header block */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-1.5 bg-brand-red-900/5 border border-brand-red-800/10 px-3 py-1 rounded-full text-brand-red-800 text-xs font-semibold tracking-wider uppercase">
            <Clock size={12} className="text-brand-red-800" />
            <span>{dict.busynessTitle}</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-brand-charcoal tracking-tight leading-tight">
            {dict.busynessSubtitle}
          </h2>
          <p className="text-stone-500 font-sans text-xs sm:text-sm font-light">
            {currentLang === 'tr' ? 'Ziyaretinizi usta ellerde dinlenen taze köftelerimizin sıcaklığına göre planlayabilirsiniz.' : 'Coordinate your arrival to match our freshly grilled meatball batches.'}
          </p>
        </div>

        {/* Chart Widget Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white border border-brand-gold-500/15 p-6 sm:p-8 rounded-3xl shadow-2xl">
          
          {/* Left Column: Interactive Chart and Day Switch */}
          <div className="lg:col-span-8 space-y-8 flex flex-col justify-between">
            
            {/* Day Switcher Tab Grid */}
            <div className="flex flex-wrap items-center gap-1.5 border-b border-stone-100 pb-4">
              {days.map((day) => (
                <button
                  key={day.key}
                  onClick={() => setSelectedDay(day.key as any)}
                  className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-semibold tracking-wide transition cursor-pointer ${
                    selectedDay === day.key
                      ? 'bg-brand-red-900 text-brand-cream shadow-md'
                      : 'text-stone-500 hover:text-brand-red-800 hover:bg-brand-red-900/5'
                  }`}
                >
                  {currentLang === 'tr' ? day.tr : day.en}
                </button>
              ))}
            </div>

            {/* Custom SVG/HTML Bar Chart representing hourly busyness */}
            <div className="space-y-4">
              <div className="flex items-end justify-between h-48 sm:h-56 pt-6 px-2 sm:px-6 bg-brand-cream/30 border border-stone-100 rounded-2xl relative">
                
                {/* Horizontal Guide Lines */}
                <div className="absolute inset-x-0 top-1/4 border-b border-stone-200/50 pointer-events-none" />
                <div className="absolute inset-x-0 top-2/4 border-b border-stone-200/50 pointer-events-none" />
                <div className="absolute inset-x-0 top-3/4 border-b border-stone-200/50 pointer-events-none" />

                {[...Array(12)].map((_, i) => {
                  const hour = 11 + i; // 11:00 to 22:00
                  const heightVal = getHourlyBusyness(selectedDay, hour);
                  const isSimulated = hour === selectedHour;
                  
                  return (
                    <div
                      key={hour}
                      onClick={() => setSelectedHour(hour)}
                      className="flex flex-col items-center flex-1 h-full justify-end cursor-pointer group z-10"
                    >
                      {/* Hover Tooltip showing percentage */}
                      <div className="opacity-0 group-hover:opacity-100 absolute bottom-full mb-1 bg-brand-charcoal text-brand-cream text-[10px] font-mono px-1.5 py-0.5 rounded shadow transition-opacity duration-200 leading-none pointer-events-none">
                        {heightVal}%
                      </div>

                      {/* Bar fill representation */}
                      <div className="w-4 sm:w-6 lg:w-8 bg-stone-200 group-hover:bg-brand-red-900/30 rounded-t-md relative transition-all duration-300" style={{ height: `${heightVal}%` }}>
                        {/* Dynamic Highlight Fill */}
                        <div
                          className={`absolute inset-0 rounded-t-md transition-all duration-500 ${
                            isSimulated
                              ? 'bg-brand-gold-500 shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                              : 'bg-brand-red-900/80 group-hover:bg-brand-red-800'
                          }`}
                        />
                      </div>

                      {/* X-Axis Hour Labels */}
                      <span className={`text-[10px] sm:text-xs font-mono font-medium mt-2 transition ${isSimulated ? 'text-brand-red-800 font-bold' : 'text-stone-400'}`}>
                        {hour}:00
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-between text-[11px] text-stone-400 font-medium px-1">
                <span>11:00 (Açılış)</span>
                <span>17:00 (İkindi)</span>
                <span>22:00 (Kapanış)</span>
              </div>
            </div>

            {/* Hour Simulator Slider */}
            <div className="space-y-3 bg-brand-cream/40 p-4 rounded-xl border border-stone-100">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-stone-700 uppercase tracking-wider flex items-center space-x-1.5">
                  <Clock size={14} className="text-brand-red-900" />
                  <span>{currentLang === 'tr' ? 'Saat Simülatörü' : 'Interactive Hour Slider'}</span>
                </label>
                <span className="font-mono text-sm font-bold text-brand-red-900 bg-white border px-2.5 py-1 rounded">
                  {selectedHour}:00
                </span>
              </div>
              <input
                type="range"
                min="11"
                max="22"
                value={selectedHour}
                onChange={(e) => setSelectedHour(parseInt(e.target.value))}
                className="w-full accent-brand-red-900 cursor-ew-resize h-1.5 bg-stone-200 rounded-lg appearance-none"
              />
            </div>

          </div>

          {/* Right Column: Simulated Live Analytics Card */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            
            {/* Live Card Heading */}
            <div className="space-y-4">
              <div className="border-b border-stone-100 pb-3 flex items-center justify-between">
                <span className="text-xs uppercase font-semibold text-stone-400 tracking-wider font-mono">
                  {currentLang === 'tr' ? 'YOĞUNLUK METRİKLERİ' : 'LIVE PREDICTION'}
                </span>
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
              </div>

              {/* Occupancy Indicator Block */}
              <div className="space-y-3">
                <div className={`p-4 rounded-2xl border text-center font-bold text-sm tracking-wide ${metrics.color}`}>
                  {metrics.text}
                </div>
                
                <div className="bg-brand-cream/40 border border-stone-100 p-4 rounded-2xl space-y-3">
                  <div className="flex justify-between items-center border-b border-stone-200/40 pb-2">
                    <span className="text-xs text-stone-500 font-sans">{currentLang === 'tr' ? 'Doluluk Oranı:' : 'Occupancy:'}</span>
                    <span className="font-mono text-sm font-bold text-brand-charcoal">{currentBusyness}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-stone-500 font-sans">{currentLang === 'tr' ? 'Ortalama Bekleme:' : 'Estimated Wait:'}</span>
                    <span className="font-mono text-sm font-bold text-brand-red-900">{metrics.wait}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recommendation & Hour Specialty Suggestion */}
            <div className="bg-stone-50 border border-stone-100 p-5 rounded-2xl space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold text-stone-400 tracking-widest block">{currentLang === 'tr' ? 'ZAMAN DİLİMİ ÖNERİSİ' : 'TIMEFRAME ADVICE'}</span>
                <p className="text-xs text-stone-600 leading-relaxed font-sans">{metrics.recommendation}</p>
              </div>

              {/* Special hour recommendation */}
              <div className="border-t border-stone-200/60 pt-4 space-y-1.5">
                <div className="flex items-center space-x-1 text-brand-red-800 font-bold text-xs">
                  <TrendingUp size={13} />
                  <span>{specialty.title}</span>
                </div>
                <p className="text-xs font-semibold text-brand-charcoal font-sans">
                  {specialty.desc}
                </p>
              </div>
            </div>

            {/* Friday Extra Note */}
            {selectedDay === 'fri' && (
              <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-xl flex items-start space-x-2.5">
                <AlertTriangle size={16} className="text-amber-600 shrink-0 mt-0.5" />
                <p className="text-[11px] text-amber-800 leading-relaxed font-medium">
                  {dict.busynessFridayNote}
                </p>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}

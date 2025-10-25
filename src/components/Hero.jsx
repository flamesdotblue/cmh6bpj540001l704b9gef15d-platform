import React from 'react';
import { ShieldCheck, Star } from 'lucide-react';

export default function Hero({ t, lang }) {
  return (
    <section aria-labelledby="hero-title" className="bg-gradient-to-b from-[#0D47A1] to-[#0b3a85] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 id="hero-title" className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">{t.title}</h1>
            <p className="mt-3 text-white/90 text-base md:text-lg">{t.findTrusted}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#register" className="inline-flex items-center rounded-xl px-5 py-3 text-sm md:text-base font-semibold text-[#0D47A1] bg-[#FF6D00] hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-orange-300">{t.ctaRegister}</a>
              <a href="#find" className="inline-flex items-center rounded-xl px-5 py-3 text-sm md:text-base border border-white/30 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/60">{t.ctaFind}</a>
            </div>
            <div className="mt-6 flex flex-wrap gap-6" role="list" aria-label="Stats">
              <StatItem label={t.statsWorkers} value="1,58,420" />
              <StatItem label={t.statsJobs} value="7,92,310" />
              <StatItem label={t.statsDistricts} value="610" />
            </div>
            <div id="how" className="mt-8 grid grid-cols-3 gap-3 text-center">
              <Step title={t.how1} />
              <Step title={t.how2} />
              <Step title={t.how3} />
            </div>
          </div>
          <div className="relative">
            <div aria-hidden className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-20" style={{background:"conic-gradient(from 45deg, #FF6D00, #0D47A1)"}} />
            <div className="rounded-2xl bg-white/10 backdrop-blur border border-white/20 p-4 md:p-6">
              <div className="flex items-center gap-2 text-white/90"><ShieldCheck className="w-5 h-5" /><span>{lang==='en' ? 'Government-style, trustworthy design' : 'सरकारी प्रेरित, भरोसेमंद डिज़ाइन'}</span></div>
              <div className="mt-3 grid grid-cols-2 gap-3 text-sm text-white/90">
                <div className="rounded-xl bg-white/10 p-3">{lang==='en' ? 'Verified IDs' : 'सत्यापित पहचान'}</div>
                <div className="rounded-xl bg-white/10 p-3">{lang==='en' ? 'Community Ratings' : 'समुदाय रेटिंग'}</div>
                <div className="rounded-xl bg-white/10 p-3">{lang==='en' ? 'UPI/Cash' : 'यूपीआई/नकद'}</div>
                <div className="rounded-xl bg-white/10 p-3">{lang==='en' ? 'WhatsApp Alerts' : 'व्हाट्सऐप अलर्ट'}</div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-white">
                <Star className="w-5 h-5 fill-current" />
                <span className="text-sm">{lang==='en' ? '4.8 average rating from households' : 'घरों से औसत 4.8 रेटिंग'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white text-gray-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs md:text-sm">
          <LogoPill>Skill India</LogoPill>
          <LogoPill>Digital India</LogoPill>
          <LogoPill>PMKVY</LogoPill>
          <LogoPill>NSDC</LogoPill>
          <LogoPill>CSC</LogoPill>
        </div>
      </div>
    </section>
  );
}

function StatItem({ label, value }) {
  return (
    <div className="min-w-[140px] rounded-xl bg-white/10 px-4 py-3 border border-white/20" role="listitem">
      <div className="text-xl font-bold">{value}</div>
      <div className="text-xs opacity-90">{label}</div>
    </div>
  );
}

function Step({ title }) {
  return (
    <div className="rounded-xl bg-white/10 px-3 py-4 border border-white/20 text-xs md:text-sm">
      {title}
    </div>
  );
}

function LogoPill({ children }) {
  return (
    <div className="flex items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-3 py-2">
      <span className="font-medium">{children}</span>
    </div>
  );
}

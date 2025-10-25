import React from 'react';
import { ShieldCheck, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero({ t, lang }) {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <AnimatedBackdrop />
      <div className="relative z-10 bg-gradient-to-b from-[#0D47A1] to-[#0b3a85] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h1 id="hero-title" className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">{t.title}</h1>
              <p className="mt-3 text-white/90 text-base md:text-lg">{t.findTrusted}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <motion.a whileTap={{ scale: 0.96 }} href="#register" className="inline-flex items-center rounded-xl px-5 py-3 text-sm md:text-base font-semibold text-[#0D47A1] bg-[#FF6D00] hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-orange-300">{t.ctaRegister}</motion.a>
                <motion.a whileTap={{ scale: 0.96 }} href="#find" className="inline-flex items-center rounded-xl px-5 py-3 text-sm md:text-base border border-white/30 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/60">{t.ctaFind}</motion.a>
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
            </motion.div>
            <motion.div className="relative" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
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
              <FloatingBadges />
            </motion.div>
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
      </div>
    </section>
  );
}

function StatItem({ label, value }) {
  return (
    <motion.div className="min-w-[140px] rounded-xl bg-white/10 px-4 py-3 border border-white/20" role="listitem" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
      <div className="text-xl font-bold">{value}</div>
      <div className="text-xs opacity-90">{label}</div>
    </motion.div>
  );
}

function Step({ title }) {
  return (
    <motion.div className="rounded-xl bg-white/10 px-3 py-4 border border-white/20 text-xs md:text-sm" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }}>
      {title}
    </motion.div>
  );
}

function LogoPill({ children }) {
  return (
    <div className="flex items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-3 py-2">
      <span className="font-medium">{children}</span>
    </div>
  );
}

function AnimatedBackdrop() {
  return (
    <div aria-hidden className="absolute inset-0">
      <div className="absolute -top-1/3 -left-1/3 h-[60vh] w-[60vh] rounded-full bg-[#FF6D00]/20 blur-3xl" />
      <div className="absolute -bottom-1/4 -right-1/4 h-[60vh] w-[60vh] rounded-full bg-[#0D47A1]/30 blur-3xl" />
    </div>
  );
}

function FloatingBadges() {
  return (
    <div className="pointer-events-none" aria-hidden>
      <motion.div className="absolute -left-2 top-1/2 translate-y-[-50%] rounded-full bg-[#FF6D00] text-[#0D47A1] px-3 py-1 text-xs font-semibold shadow-lg" animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3 }}>OTP Login</motion.div>
      <motion.div className="absolute -right-2 -bottom-2 rounded-full bg-white/90 text-[#0D47A1] px-3 py-1 text-xs font-semibold shadow" animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2.6, delay: 0.4 }}>UPI / Cash</motion.div>
    </div>
  );
}

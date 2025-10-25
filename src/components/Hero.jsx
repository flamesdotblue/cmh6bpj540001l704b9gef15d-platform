import React from 'react';
import { ArrowRight, PhoneCall, Shield } from 'lucide-react';
import { useI18n } from '../i18n';

export default function Hero() {
  const { t } = useI18n();
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden bg-gradient-to-b from-[#0D47A1] to-[#0a3a84] text-white">
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full border-2 border-white/30" />
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full border-2 border-white/20" />
        <div className="absolute -bottom-24 -left-24 w-[28rem] h-[28rem] rounded-full border-2 border-white/10" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-14">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 id="hero-heading" className="text-3xl sm:text-4xl font-extrabold tracking-tight">{t('appName')} — {t('tagline')}</h1>
            <p className="mt-3 text-white/90 text-base sm:text-lg">{t('heroSubtitle')}</p>
            <p className="mt-2 text-white font-medium">{t('findTrusted')}</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#register-worker" className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-white bg-[#FF6D00] hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-orange-300">
                <Shield className="h-5 w-5 mr-2" /> {t('ctaRegisterWorker')}
              </a>
              <a href="#find" className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-[#FF6D00] bg-white hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-white/30">
                {t('ctaFindWorkers')} <ArrowRight className="h-5 w-5 ml-2" />
              </a>
            </div>

            <dl className="mt-8 grid grid-cols-3 gap-4" aria-label="Site statistics">
              <Stat label={t('statsWorkers')} value="2,45,000+" />
              <Stat label={t('statsJobs')} value="18,90,000+" />
              <Stat label={t('statsDistricts')} value="650+" />
            </dl>
          </div>
          <div className="md:justify-self-end">
            <div className="relative bg-white/10 backdrop-blur rounded-2xl p-5 md:p-6 border border-white/20 shadow-lg">
              <h2 className="text-white text-lg font-semibold">Quick Booking</h2>
              <p className="text-white/80 text-sm">Describe your need, we will connect the right worker.</p>
              <form className="mt-4 space-y-3" aria-label="Quick booking form">
                <label className="block text-sm">
                  <span className="block mb-1 text-white/90">Job Title</span>
                  <input className="w-full rounded-lg px-3 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30" placeholder="Electrician for fan repair" aria-label="Job Title" />
                </label>
                <label className="block text-sm">
                  <span className="block mb-1 text-white/90">Pincode</span>
                  <input className="w-full rounded-lg px-3 py-2 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30" placeholder="110001" inputMode="numeric" aria-label="Pincode" />
                </label>
                <button type="button" className="w-full inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-white bg-[#FF6D00] hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-orange-300">
                  <PhoneCall className="h-5 w-5 mr-2" /> Get Call-back
                </button>
                <p className="text-[11px] text-white/70">By proceeding, you consent to receive WhatsApp/SMS for coordination. No spam.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl bg-white/10 border border-white/20 p-3 text-center">
      <dt className="text-xs text-white/80">{label}</dt>
      <dd className="mt-1 text-xl font-bold">{value}</dd>
    </div>
  );
}

import React from 'react';
import { useI18n } from '../i18n';

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-[#0D47A1] text-white mt-10" aria-labelledby="footer-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <h2 id="footer-heading" className="sr-only">Footer</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div>
            <p className="font-semibold text-lg">{t('appName')}</p>
            <p className="text-sm text-white/80 mt-1">Inspired by government design patterns for trust and inclusivity.</p>
          </div>
          <div>
            <p className="font-semibold">{t('footerAbout')}</p>
            <ul className="mt-2 space-y-1 text-sm text-white/90">
              <li><a className="hover:underline" href="#stories">{t('navStories')}</a></li>
              <li><a className="hover:underline" href="#schemes">{t('navSchemes')}</a></li>
              <li><a className="hover:underline" href="#how">{t('navHow')}</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">{t('footerHelp')}</p>
            <ul className="mt-2 space-y-1 text-sm text-white/90">
              <li><a className="hover:underline" href="#help">{t('footerHelp')}</a></li>
              <li><a className="hover:underline" href="#rti">{t('footerRTI')}</a></li>
              <li><a className="hover:underline" href="#accessibility">{t('footerAccessibility')}</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">{t('footerContact')}</p>
            <ul className="mt-2 space-y-1 text-sm text-white/90">
              <li>Helpline: 1800-000-000</li>
              <li>Email: support@shramsathi.in</li>
              <li className="text-white/70">Mon–Sat, 9am–6pm IST</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 border-t border-white/10 pt-4 text-xs text-white/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} ShramSathi. {t('footerTerms')} · {t('footerPrivacy')}.</p>
          <p className="text-white/70">Not affiliated with any government. Logos for reference only.</p>
        </div>
      </div>
    </footer>
  );
}

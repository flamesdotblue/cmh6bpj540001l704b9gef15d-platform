import React, { useState } from 'react';
import { Menu, X, Languages, Shield, Search } from 'lucide-react';
import { useI18n } from '../i18n';

export default function Navbar() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);

  const NavLink = ({ children, href }) => (
    <a
      href={href}
      className="px-3 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
    >
      {children}
    </a>
  );

  return (
    <header className="sticky top-0 z-40 bg-[#0D47A1] text-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16" role="navigation" aria-label="Primary">
          <a href="#" className="flex items-center gap-2 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30 rounded-lg">
            <Shield className="h-6 w-6 text-white" aria-hidden="true" />
            <span className="font-semibold text-lg tracking-wide">{t('appName')}</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink href="#find">{t('navFind')}</NavLink>
            <NavLink href="#how">{t('navHow')}</NavLink>
            <NavLink href="#stories">{t('navStories')}</NavLink>
            <NavLink href="#schemes">{t('navSchemes')}</NavLink>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2" role="group" aria-label={t('language')}>
              <button
                onClick={() => setLang('EN')}
                className={`px-3 py-1.5 text-sm rounded-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30 ${lang === 'EN' ? 'bg-white text-[#0D47A1] font-semibold' : 'bg-white/10 text-white hover:bg-white/20'}`}
                aria-pressed={lang === 'EN'}
              >
                EN
              </button>
              <button
                onClick={() => setLang('HI')}
                className={`px-3 py-1.5 text-sm rounded-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30 ${lang === 'HI' ? 'bg-white text-[#0D47A1] font-semibold' : 'bg-white/10 text-white hover:bg-white/20'}`}
                aria-pressed={lang === 'HI'}
              >
                हिन्दी
              </button>
            </div>
            <button
              className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-white/10 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10" role="menu">
          <div className="mx-auto max-w-7xl px-4 py-3 space-y-1">
            <a href="#find" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10">
              <Search className="h-5 w-5" /> <span>{t('navFind')}</span>
            </a>
            <a href="#how" className="block px-3 py-2 rounded-lg hover:bg-white/10">{t('navHow')}</a>
            <a href="#stories" className="block px-3 py-2 rounded-lg hover:bg-white/10">{t('navStories')}</a>
            <a href="#schemes" className="block px-3 py-2 rounded-lg hover:bg-white/10">{t('navSchemes')}</a>
            <div className="flex items-center gap-2 px-3 pt-2">
              <Languages className="h-5 w-5" />
              <span className="sr-only">{t('language')}</span>
              <button onClick={() => setLang('EN')} className={`px-3 py-1.5 text-sm rounded-lg ${lang === 'EN' ? 'bg-white text-[#0D47A1]' : 'bg-white/10 text-white'}`}>EN</button>
              <button onClick={() => setLang('HI')} className={`px-3 py-1.5 text-sm rounded-lg ${lang === 'HI' ? 'bg-white text-[#0D47A1]' : 'bg-white/10 text-white'}`}>हिन्दी</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

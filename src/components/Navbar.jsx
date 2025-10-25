import React from 'react';
import { Languages } from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ lang, onToggleLang }) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-[#0D47A1] text-white/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between" role="navigation" aria-label="Primary">
        <div className="flex items-center gap-2">
          <Logo size={28} withText />
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm opacity-95">
          <a href="#find" className="hover:underline focus:outline-none focus:ring-2 focus:ring-white/60 rounded">{lang==='en' ? 'Find Worker' : 'कारीगर खोजें'}</a>
          <a href="#how" className="hover:underline focus:outline-none focus:ring-2 focus:ring-white/60 rounded">{lang==='en' ? 'How It Works' : 'कैसे काम करता है'}</a>
          <a href="#stories" className="hover:underline focus:outline-none focus:ring-2 focus:ring-white/60 rounded">{lang==='en' ? 'Success Stories' : 'सफलता कहानियाँ'}</a>
          <a href="#help" className="hover:underline focus:outline-none focus:ring-2 focus:ring-white/60 rounded">{lang==='en' ? 'Help' : 'सहायता'}</a>
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={onToggleLang} className="inline-flex items-center gap-1 rounded-xl px-3 py-2 text-sm bg-white/10 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60" aria-label="Toggle language">
            <Languages className="w-4 h-4" aria-hidden="true" />
            <span className="font-medium">{lang==='en' ? 'हिंदी' : 'English'}</span>
          </button>
          <a href="#register" className="ml-1 inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold text-[#0D47A1] bg-[#FF6D00] hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-orange-300">{lang==='en' ? 'Register as Worker' : 'कौशल पंजीकरण करें'}</a>
        </div>
      </div>
    </header>
  );
}

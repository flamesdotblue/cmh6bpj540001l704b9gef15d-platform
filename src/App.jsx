import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FindWorkers from './components/FindWorkers';
import Footer from './components/Footer';
import { I18nProvider } from './i18n';

export default function App() {
  return (
    <I18nProvider>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:text-[#0D47A1] focus:px-3 focus:py-2 focus:rounded-md">Skip to content</a>
      <div className="min-h-screen flex flex-col bg-white text-gray-900">
        <Navbar />
        <main id="main" className="flex-1">
          <Hero />
          <TrustStrip />
          <Categories />
          <FindWorkers />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}

function TrustStrip() {
  return (
    <section aria-label="Trust logos" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 items-center opacity-80">
          <PlaceholderLogo label="Skill India" />
          <PlaceholderLogo label="Digital India" />
          <PlaceholderLogo label="PMKVY" />
          <PlaceholderLogo label="NSDC" />
          <PlaceholderLogo label="CSC" />
        </div>
      </div>
    </section>
  );
}

function PlaceholderLogo({ label }) {
  return (
    <div className="flex items-center justify-center rounded-xl border border-gray-200 bg-[#FAFAFA] h-14 text-sm text-gray-600">
      {label}
    </div>
  );
}

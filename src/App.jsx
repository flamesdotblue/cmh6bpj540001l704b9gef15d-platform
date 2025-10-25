import React, { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkerFinder from './components/WorkerFinder';
import Footer from './components/Footer';

const strings = {
  en: {
    title: 'ShramSathi — Connecting Bharat’s Skills with Jobs',
    findTrusted: 'Find trusted workers near you.',
    ctaRegister: 'Register as Worker',
    ctaFind: 'Find Workers',
    statsWorkers: 'Workers Registered',
    statsJobs: 'Jobs Completed',
    statsDistricts: 'Districts Covered',
    howTitle: 'How It Works',
    how1: 'List Skill',
    how2: 'Get Job Alerts',
    how3: 'Earn & Grow',
    categories: 'Popular Categories',
    filterSkill: 'Skill',
    filterLocation: 'Location (City or Pincode)',
    filterVerified: 'Verified only',
    filterAvailability: 'Availability',
    filterToday: 'Today',
    filterTomorrow: 'Tomorrow',
    filterRating: 'Rating 4+ only',
    search: 'Search',
    empty: 'No workers found nearby. Try a different skill or expand distance.',
    bookNow: 'Book Now',
    viewProfile: 'View Profile',
    from: 'From',
    kmAway: 'away',
    testimonialsTitle: 'Voices from Bharat',
  },
  hi: {
    title: 'श्र्रमसाथी — भारत के कौशल को काम से जोड़ें',
    findTrusted: 'अपने आस-पास भरोसेमंद कारीगर ढूँढें।',
    ctaRegister: 'कौशल पंजीकरण करें',
    ctaFind: 'कारीगर खोजें',
    statsWorkers: 'पंजीकृत कारीगर',
    statsJobs: 'पूर्ण हुए काम',
    statsDistricts: 'कवर किए गए ज़िले',
    howTitle: 'कैसे काम करता है',
    how1: 'कौशल सूचीबद्ध करें',
    how2: 'जॉब अलर्ट पाएं',
    how3: 'कमाएँ और आगे बढ़ें',
    categories: 'लोकप्रिय श्रेणियाँ',
    filterSkill: 'कौशल',
    filterLocation: 'स्थान (शहर या पिनकोड)',
    filterVerified: 'सिर्फ सत्यापित',
    filterAvailability: 'उपलब्धता',
    filterToday: 'आज',
    filterTomorrow: 'कल',
    filterRating: 'केवल 4+ रेटिंग',
    search: 'खोजें',
    empty: 'नज़दीक कोई कारीगर नहीं मिला। कौशल बदलें या दूरी बढ़ाएँ।',
    bookNow: 'अभी बुक करें',
    viewProfile: 'प्रोफ़ाइल देखें',
    from: 'से',
    kmAway: 'दूरी',
    testimonialsTitle: 'भारत की आवाज़ें',
  },
};

export default function App() {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const saved = localStorage.getItem('ss_lang');
    if (saved) setLang(saved);
  }, []);

  const t = useMemo(() => strings[lang], [lang]);

  const handleLangToggle = () => {
    const next = lang === 'en' ? 'hi' : 'en';
    setLang(next);
    localStorage.setItem('ss_lang', next);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-white text-blue-700 px-3 py-2 rounded-md shadow">Skip to content</a>
      <Navbar lang={lang} onToggleLang={handleLangToggle} />
      <main id="main" className="">
        <Hero t={t} lang={lang} />
        <WorkerFinder t={t} lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}

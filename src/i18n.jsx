import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const strings = {
  EN: {
    appName: 'ShramSathi',
    tagline: "Connecting Bharat's Skills with Jobs",
    findTrusted: 'Find trusted workers near you.',
    ctaRegisterWorker: 'Register as Worker',
    ctaFindWorkers: 'Find Workers',
    statsWorkers: 'Workers Registered',
    statsJobs: 'Jobs Completed',
    statsDistricts: 'Districts Covered',
    categories: 'Categories',
    howItWorks: 'How It Works',
    step1: 'List Skill',
    step2: 'Get Job Alerts',
    step3: 'Earn & Grow',
    footerAbout: 'About',
    footerContact: 'Contact',
    footerHelp: 'Help / Grievance',
    footerRTI: 'RTI',
    footerTerms: 'Terms',
    footerPrivacy: 'Privacy',
    footerAccessibility: 'Accessibility',
    language: 'Language',
    navFind: 'Find Worker',
    navHow: 'How it works',
    navStories: 'Success Stories',
    navSchemes: 'Schemes',
    heroSubtitle: 'Inspired by trusted government design patterns. Simple. Inclusive. Fast.',
    categoryLabels: {
      plumber: 'Plumber',
      electrician: 'Electrician',
      tailor: 'Tailor',
      beautician: 'Beautician',
      tutor: 'Tutor',
      carpenter: 'Carpenter',
      mason: 'Mason',
      driver: 'Driver',
      cook: 'Cook',
      farm: 'Farm Help'
    },
    find: {
      heading: 'Find Workers',
      filtersLabel: 'Filters',
      skill: 'Skill',
      skillPlaceholder: 'e.g., Electrician, Mehendi',
      location: 'Location',
      locationPlaceholder: 'City / Pincode',
      verifiedOnly: 'Verified only',
      priceMax: 'Max price',
      ratingMin: 'Min rating',
      availability: 'Availability',
      any: 'Any',
      today: 'Today',
      tomorrow: 'Tomorrow',
      weekend: 'Weekend',
      clear: 'Clear filters',
      results: 'results',
      loading: 'Loading…',
      mapToggle: 'Map view'
    }
  },
  HI: {
    appName: 'श्रमसाथी',
    tagline: 'भारत के कौशल को रोज़गार से जोड़ें',
    findTrusted: 'अपने आस-पास भरोसेमंद कारीगर ढूँढें।',
    ctaRegisterWorker: 'कौशल पंजीकरण करें',
    ctaFindWorkers: 'कारीगर खोजें',
    statsWorkers: 'पंजीकृत कारीगर',
    statsJobs: 'पूरे हुए काम',
    statsDistricts: 'जिले कवर',
    categories: 'श्रेणियाँ',
    howItWorks: 'कैसे काम करता है',
    step1: 'कौशल सूचीबद्ध करें',
    step2: 'जॉब अलर्ट पाएँ',
    step3: 'कमाएँ और आगे बढ़ें',
    footerAbout: 'परिचय',
    footerContact: 'संपर्क',
    footerHelp: 'सहायता / शिकायत',
    footerRTI: 'सूचना का अधिकार',
    footerTerms: 'नियम',
    footerPrivacy: 'गोपनीयता',
    footerAccessibility: 'सुगम्यता',
    language: 'भाषा',
    navFind: 'कारीगर खोजें',
    navHow: 'कैसे काम करता है',
    navStories: 'सफलता की कहानियाँ',
    navSchemes: 'योजनाएँ',
    heroSubtitle: 'सरकारी डिज़ाइन पैटर्न से प्रेरित। सरल. समावेशी. तेज़.',
    categoryLabels: {
      plumber: 'प्लंबर',
      electrician: 'इलेक्ट्रीशियन',
      tailor: 'दर्जी',
      beautician: 'ब्यूटिशियन',
      tutor: 'ट्यूटर',
      carpenter: 'बढ़ई',
      mason: 'राज मिस्त्री',
      driver: 'ड्राइवर',
      cook: 'रसोइया',
      farm: 'खेत मज़दूर'
    },
    find: {
      heading: 'कारीगर खोजें',
      filtersLabel: 'फ़िल्टर',
      skill: 'कौशल',
      skillPlaceholder: 'जैसे, इलेक्ट्रीशियन, मेहंदी',
      location: 'स्थान',
      locationPlaceholder: 'शहर / पिनकोड',
      verifiedOnly: 'सिर्फ सत्यापित',
      priceMax: 'अधिकतम कीमत',
      ratingMin: 'न्यूनतम रेटिंग',
      availability: 'उपलब्धता',
      any: 'कोई भी',
      today: 'आज',
      tomorrow: 'कल',
      weekend: 'सप्ताहांत',
      clear: 'फ़िल्टर हटाएँ',
      results: 'परिणाम',
      loading: 'लोड हो रहा है…',
      mapToggle: 'मानचित्र दृश्य'
    }
  },
};

const I18nContext = createContext({ lang: 'EN', setLang: () => {}, t: (k) => k });

export function I18nProvider({ children, initialLang }) {
  const [lang, setLang] = useState(initialLang || 'EN');

  useEffect(() => {
    const saved = typeof window !== 'undefined' && window.localStorage.getItem('lang');
    if (saved && (saved === 'EN' || saved === 'HI')) setLang(saved);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('lang', lang);
      const html = document.documentElement;
      html.lang = lang === 'EN' ? 'en' : 'hi';
    }
  }, [lang]);

  const value = useMemo(() => ({
    lang,
    setLang,
    t: (keyPath) => {
      const parts = keyPath.split('.');
      let obj = strings[lang] || {};
      for (const p of parts) {
        obj = obj?.[p];
        if (obj === undefined) return keyPath;
      }
      return obj;
    },
  }), [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}

export const locales = ['EN', 'HI'];

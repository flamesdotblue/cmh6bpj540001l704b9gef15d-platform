import React from 'react';
import { Wrench, Zap, Scissors, Sparkles, BookOpen, Hammer, Car, Utensils, Wheat } from 'lucide-react';
import { useI18n } from '../i18n';

const categories = [
  { key: 'plumber', icon: Wrench },
  { key: 'electrician', icon: Zap },
  { key: 'tailor', icon: Scissors },
  { key: 'beautician', icon: Sparkles },
  { key: 'tutor', icon: BookOpen },
  { key: 'carpenter', icon: Hammer },
  { key: 'mason', icon: Hammer },
  { key: 'driver', icon: Car },
  { key: 'cook', icon: Utensils },
  { key: 'farm', icon: Wheat },
];

export default function Categories() {
  const { t } = useI18n();
  return (
    <section id="find" aria-labelledby="categories-heading" className="bg-[#FAFAFA]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 id="categories-heading" className="text-2xl font-bold text-[#0D47A1]">{t('categories')}</h2>
            <p className="text-sm text-gray-600 mt-1">Filter by skill and get started.</p>
          </div>
          <a href="#search" className="hidden sm:inline-flex items-center text-sm text-[#0D47A1] font-medium hover:underline">View all</a>
        </div>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {categories.map(({ key, icon: Icon }) => (
            <a
              key={key}
              href={`#/search?skill=${key}`}
              className="group focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
            >
              <div className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-[#ECEFF1] p-2 text-[#0D47A1]">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{t(`categoryLabels.${key}`)}</p>
                    <p className="text-xs text-gray-500">{key === 'mason' ? '₹299+' : key === 'plumber' ? '₹199+' : '₹199+'}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div id="how" className="mt-10 rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800">{t('howItWorks')}</h3>
          <ol className="mt-4 grid sm:grid-cols-3 gap-4">
            <li className="rounded-xl bg-[#FAFAFA] p-4 border border-gray-200">
              <span className="block text-sm font-semibold text-gray-800">1. {t('step1')}</span>
              <p className="text-sm text-gray-600 mt-1">Upload photo, set price, choose service area.</p>
            </li>
            <li className="rounded-xl bg-[#FAFAFA] p-4 border border-gray-200">
              <span className="block text-sm font-semibold text-gray-800">2. {t('step2')}</span>
              <p className="text-sm text-gray-600 mt-1">Get OTP-secured job requests on app and WhatsApp.</p>
            </li>
            <li className="rounded-xl bg-[#FAFAFA] p-4 border border-gray-200">
              <span className="block text-sm font-semibold text-gray-800">3. {t('step3')}</span>
              <p className="text-sm text-gray-600 mt-1">Complete jobs, earn via UPI/Cash, grow with reviews.</p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

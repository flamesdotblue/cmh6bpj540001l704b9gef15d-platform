import React, { useEffect, useMemo, useState } from 'react';
import { Search, MapPin, Star, CheckCircle2, Phone, MessageCircle, Filter, Map } from 'lucide-react';
import { useI18n } from '../i18n';

const MOCK_WORKERS = [
  {
    id: 'w1',
    name: 'Rekha Sharma',
    skills: ['Beautician', 'Mehendi'],
    verified: true,
    rating: 4.7,
    reviews: 128,
    distance: 1.2,
    priceFrom: 199,
    languages: ['हिन्दी'],
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop',
    availability: ['Today', 'Tomorrow']
  },
  {
    id: 'w2',
    name: 'Ramesh Verma',
    skills: ['Electrician', 'Mason'],
    verified: true,
    rating: 4.6,
    reviews: 220,
    distance: 2.1,
    priceFrom: 249,
    languages: ['हिन्दी', 'English'],
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop',
    availability: ['Tomorrow']
  },
  {
    id: 'w3',
    name: 'Sita Devi',
    skills: ['Tailor'],
    verified: false,
    rating: 4.3,
    reviews: 56,
    distance: 0.9,
    priceFrom: 149,
    languages: ['हिन्दी'],
    photo: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=256&auto=format&fit=crop',
    availability: ['Weekend']
  }
];

export default function FindWorkers() {
  const { t, lang } = useI18n();
  const [loading, setLoading] = useState(true);
  const [skill, setSkill] = useState('');
  const [location, setLocation] = useState('');
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [priceMax, setPriceMax] = useState(500);
  const [ratingMin, setRatingMin] = useState(0);
  const [availability, setAvailability] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  const filtered = useMemo(() => {
    return MOCK_WORKERS.filter(w => {
      const matchesSkill = !skill || w.skills.join(' ').toLowerCase().includes(skill.toLowerCase());
      const matchesVerified = !verifiedOnly || w.verified;
      const matchesPrice = !priceMax || w.priceFrom <= priceMax;
      const matchesRating = !ratingMin || w.rating >= ratingMin;
      const matchesAvailability = !availability || w.availability.join(' ').toLowerCase().includes(availability.toLowerCase());
      return matchesSkill && matchesVerified && matchesPrice && matchesRating && matchesAvailability;
    });
  }, [skill, verifiedOnly, priceMax, ratingMin, availability]);

  return (
    <section aria-labelledby="find-workers-heading" className="bg-[#FAFAFA]" id="search">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="h-5 w-5 text-[#0D47A1]" aria-hidden="true" />
          <h2 id="find-workers-heading" className="text-2xl font-bold text-[#0D47A1]">{t('find.heading')}</h2>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 shadow-sm">
          <form className="grid grid-cols-1 md:grid-cols-5 gap-3" role="search" aria-label={t('find.filtersLabel')}>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">{t('find.skill')}</label>
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <input value={skill} onChange={(e) => setSkill(e.target.value)} className="w-full rounded-lg border border-gray-300 pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder={t('find.skillPlaceholder')} />
              </div>
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">{t('find.location')}</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                <input value={location} onChange={(e) => setLocation(e.target.value)} className="w-full rounded-lg border border-gray-300 pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder={t('find.locationPlaceholder')} />
              </div>
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">{t('find.priceMax')}</label>
              <select value={priceMax} onChange={(e) => setPriceMax(Number(e.target.value))} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200">
                <option value={200}>₹200</option>
                <option value={300}>₹300</option>
                <option value={400}>₹400</option>
                <option value={500}>₹500</option>
              </select>
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">{t('find.ratingMin')}</label>
              <select value={ratingMin} onChange={(e) => setRatingMin(Number(e.target.value))} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200">
                <option value={0}>{t('find.any')}</option>
                <option value={3}>3+</option>
                <option value={4}>4+</option>
                <option value={4.5}>4.5+</option>
              </select>
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">{t('find.availability')}</label>
              <select value={availability} onChange={(e) => setAvailability(e.target.value)} className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200">
                <option value="">{t('find.any')}</option>
                <option value="Today">{t('find.today')}</option>
                <option value="Tomorrow">{t('find.tomorrow')}</option>
                <option value="Weekend">{t('find.weekend')}</option>
              </select>
            </div>
            <div className="md:col-span-5 flex items-center gap-4 pt-1">
              <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-[#FF6D00] focus:ring-orange-300" checked={verifiedOnly} onChange={(e) => setVerifiedOnly(e.target.checked)} />
                {t('find.verifiedOnly')}
              </label>
              <button type="button" onClick={() => { setSkill(''); setLocation(''); setVerifiedOnly(false); setPriceMax(500); setRatingMin(0); setAvailability(''); }} className="text-sm text-[#0D47A1] hover:underline">
                {t('find.clear')}
              </button>
            </div>
          </form>
        </div>

        <div className="flex items-center justify-between mt-4">
          <p className="text-sm text-gray-600">{!loading ? `${filtered.length} ${t('find.results')}` : t('find.loading')}</p>
          <button type="button" className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200">
            <Map className="h-4 w-4" />
            {t('find.mapToggle')}
          </button>
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
          ) : filtered.length === 0 ? (
            <EmptyState lang={lang} />
          ) : (
            filtered.map(w => <WorkerCard key={w.id} worker={w} lang={lang} />)
          )}
        </div>
      </div>
    </section>
  );
}

function WorkerCard({ worker, lang }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <img src={worker.photo} alt={`${worker.name}`} className="h-16 w-16 rounded-xl object-cover" loading="lazy" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1">
            <p className="font-semibold text-gray-800 truncate">{worker.name}</p>
            {worker.verified && (
              <span className="inline-flex items-center gap-1 text-[11px] px-1.5 py-0.5 rounded bg-green-50 text-green-700 border border-green-200 ml-1">
                <CheckCircle2 className="h-3.5 w-3.5" /> Verified
              </span>
            )}
          </div>
          <p className="text-xs text-gray-600 mt-0.5 truncate">{worker.skills.join(' • ')}</p>
          <div className="mt-2 flex items-center gap-3 text-xs text-gray-700">
            <span className="inline-flex items-center gap-1"><Star className="h-3.5 w-3.5 text-yellow-500" /> {worker.rating.toFixed(1)} ({worker.reviews})</span>
            <span>₹{worker.priceFrom}+</span>
            <span>{worker.distance.toFixed(1)} km</span>
          </div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {worker.languages.map(l => (
              <span key={l} className="text-[11px] px-2 py-0.5 rounded bg-[#FAFAFA] border border-gray-200 text-gray-700">{l}</span>
            ))}
            {worker.availability.map(a => (
              <span key={a} className="text-[11px] px-2 py-0.5 rounded bg-blue-50 border border-blue-200 text-[#0D47A1]">{a}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        <a href="#" className="inline-flex items-center justify-center rounded-xl px-3 py-2 text-white bg-[#FF6D00] hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-orange-300 text-sm">
          {lang === 'HI' ? 'बुक करें' : 'Book Now'}
        </a>
        <a href="#" className="inline-flex items-center justify-center rounded-xl px-3 py-2 text-[#0D47A1] bg-blue-50 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm">
          {lang === 'HI' ? 'प्रोफ़ाइल' : 'Profile'}
        </a>
        <div className="flex gap-2">
          <button aria-label="Call" className="flex-1 inline-flex items-center justify-center rounded-xl px-3 py-2 border border-gray-200 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200">
            <Phone className="h-4 w-4" />
          </button>
          <button aria-label="WhatsApp" className="flex-1 inline-flex items-center justify-center rounded-xl px-3 py-2 border border-gray-200 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200">
            <MessageCircle className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm animate-pulse">
      <div className="flex items-start gap-3">
        <div className="h-16 w-16 rounded-xl bg-gray-200" />
        <div className="flex-1">
          <div className="h-4 w-40 bg-gray-200 rounded" />
          <div className="h-3 w-28 bg-gray-200 rounded mt-2" />
          <div className="flex gap-2 mt-3">
            <div className="h-3 w-16 bg-gray-200 rounded" />
            <div className="h-3 w-12 bg-gray-200 rounded" />
            <div className="h-3 w-10 bg-gray-200 rounded" />
          </div>
          <div className="flex gap-2 mt-2">
            <div className="h-5 w-14 bg-gray-200 rounded" />
            <div className="h-5 w-16 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        <div className="h-9 bg-gray-200 rounded-xl" />
        <div className="h-9 bg-gray-200 rounded-xl" />
        <div className="h-9 bg-gray-200 rounded-xl" />
      </div>
    </div>
  );
}

function EmptyState({ lang }) {
  return (
    <div className="col-span-full rounded-2xl border border-dashed border-gray-300 bg-white p-6 text-center">
      <p className="text-sm text-gray-700 font-medium">{lang === 'HI' ? 'नज़दीक कोई कारीगर नहीं मिला। कौशल बदलें या दूरी बढ़ाएँ।' : 'No workers found nearby. Try a different skill or expand distance.'}</p>
    </div>
  );
}

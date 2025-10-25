import React, { useMemo, useState } from 'react';
import { BadgeCheck, Filter, MapPin, MessageSquare, Phone, Search, Star } from 'lucide-react';

const CATEGORIES = [
  { key: 'plumber', en: 'Plumber', hi: 'प्लम्बर' },
  { key: 'electrician', en: 'Electrician', hi: 'इलेक्ट्रीशियन' },
  { key: 'tailor', en: 'Tailor', hi: 'दर्जी' },
  { key: 'beautician', en: 'Beautician', hi: 'ब्यूटीशियन' },
  { key: 'tutor', en: 'Tutor', hi: 'ट्यूटर' },
  { key: 'carpenter', en: 'Carpenter', hi: 'बढ़ई' },
  { key: 'mason', en: 'Mason', hi: 'राजमिस्त्री' },
  { key: 'driver', en: 'Driver', hi: 'ड्राइवर' },
  { key: 'cook', en: 'Cook', hi: 'रसोइया' },
  { key: 'farm', en: 'Farm Help', hi: 'खेती सहायक' },
];

const SAMPLE_WORKERS = [
  { id: 1, name: 'Rekha Devi', skill: 'Beautician', verified: true, rating: 4.7, reviews: 120, distance: 1.2, price: 199, languages: ['Hindi'], photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop' },
  { id: 2, name: 'Ramesh Kumar', skill: 'Electrician', verified: true, rating: 4.6, reviews: 210, distance: 2.5, price: 249, languages: ['Hindi','English'], photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=300&auto=format&fit=crop' },
  { id: 3, name: 'Anita Sharma', skill: 'Tailor', verified: false, rating: 4.4, reviews: 88, distance: 0.9, price: 149, languages: ['Hindi'], photo: 'https://images.unsplash.com/photo-1558222217-58f99b2d529f?q=80&w=300&auto=format&fit=crop' },
  { id: 4, name: 'Sanjay Singh', skill: 'Mason', verified: true, rating: 4.5, reviews: 67, distance: 3.1, price: 299, languages: ['Hindi'], photo: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=300&auto=format&fit=crop' },
];

export default function WorkerFinder({ t, lang }) {
  const [skill, setSkill] = useState('');
  const [query, setQuery] = useState('');
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [rating4, setRating4] = useState(false);
  const [availability, setAvailability] = useState('');
  const [loading, setLoading] = useState(false);

  const filtered = useMemo(() => {
    let list = SAMPLE_WORKERS;
    if (skill) list = list.filter(w => w.skill.toLowerCase() === skill.toLowerCase());
    if (verifiedOnly) list = list.filter(w => w.verified);
    if (rating4) list = list.filter(w => w.rating >= 4.0);
    if (query) {
      const q = query.toLowerCase();
      list = list.filter(w => w.name.toLowerCase().includes(q) || w.skill.toLowerCase().includes(q));
    }
    return list;
  }, [skill, verifiedOnly, rating4, query]);

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    // simulate network delay and skeletons for low bandwidth
    setTimeout(() => setLoading(false), 600);
  };

  return (
    <section id="find" className="py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-4 text-gray-700">
          <Search className="w-5 h-5" aria-hidden="true" />
          <h2 className="text-xl md:text-2xl font-semibold">{lang==='en' ? 'Find Worker' : 'कारीगर खोजें'}</h2>
        </div>

        <form onSubmit={handleSearch} className="rounded-2xl border border-gray-200 bg-white p-4 md:p-6 shadow-sm">
          <div className="grid md:grid-cols-6 gap-3">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1" htmlFor="skill">{t.filterSkill}</label>
              <select id="skill" value={skill} onChange={(e) => setSkill(e.target.value)} className="w-full rounded-xl border-gray-300 focus:ring-2 focus:ring-blue-200">
                <option value="">{lang==='en' ? 'All skills' : 'सभी कौशल'}</option>
                {CATEGORIES.map(c => (
                  <option value={c.en} key={c.key}>{lang==='en' ? c.en : c.hi}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1" htmlFor="loc">{t.filterLocation}</label>
              <div className="flex items-center rounded-xl border border-gray-300 focus-within:ring-2 focus-within:ring-blue-200 overflow-hidden">
                <span className="pl-3 text-gray-500"><MapPin className="w-4 h-4" aria-hidden="true" /></span>
                <input id="loc" type="text" placeholder={lang==='en' ? 'e.g., 110001 or Bhopal' : 'जैसे 110001 या भोपाल'} className="w-full px-3 py-2 outline-none" />
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1" htmlFor="q">{lang==='en' ? 'Search by name/skill' : 'नाम/कौशल से खोजें'}</label>
              <div className="flex items-center rounded-xl border border-gray-300 focus-within:ring-2 focus-within:ring-blue-200 overflow-hidden">
                <span className="pl-3 text-gray-500"><Filter className="w-4 h-4" aria-hidden="true" /></span>
                <input id="q" value={query} onChange={(e)=>setQuery(e.target.value)} type="text" placeholder={lang==='en' ? 'e.g., Rekha, electrician' : 'जैसे रेखा, इलेक्ट्रीशियन'} className="w-full px-3 py-2 outline-none" />
              </div>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
            <label className="inline-flex items-center gap-2"><input type="checkbox" checked={verifiedOnly} onChange={(e)=>setVerifiedOnly(e.target.checked)} className="h-4 w-4" /><span>{t.filterVerified}</span></label>
            <label className="inline-flex items-center gap-2"><input type="checkbox" checked={rating4} onChange={(e)=>setRating4(e.target.checked)} className="h-4 w-4" /><span>{t.filterRating}</span></label>
            <div className="inline-flex items-center gap-2">
              <span className="text-gray-600">{t.filterAvailability}:</span>
              <div role="group" aria-label={t.filterAvailability} className="flex rounded-lg overflow-hidden border border-gray-300">
                <button type="button" onClick={()=>setAvailability('today')} className={`px-3 py-1.5 text-xs ${availability==='today' ? 'bg-blue-600 text-white' : 'bg-white'}`}>{t.filterToday}</button>
                <button type="button" onClick={()=>setAvailability('tomorrow')} className={`px-3 py-1.5 text-xs ${availability==='tomorrow' ? 'bg-blue-600 text-white' : 'bg-white'}`}>{t.filterTomorrow}</button>
              </div>
            </div>
            <div className="flex justify-end">
              <button type="submit" className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold text-white bg-[#FF6D00] hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-orange-300 disabled:opacity-50" disabled={loading}>
                <Search className="w-4 h-4 mr-1" /> {t.search}
              </button>
            </div>
          </div>
        </form>

        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-600 mb-2">{lang==='en' ? 'Popular Categories' : 'लोकप्रिय श्रेणियाँ'}</h3>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.slice(0,10).map(cat => (
              <button key={cat.key} onClick={()=>setSkill(cat.en)} className={`px-3 py-1.5 rounded-full border text-sm ${skill===cat.en ? 'bg-[#0D47A1] text-white border-[#0D47A1]' : 'bg-white hover:bg-gray-50 border-gray-300'}`}>{lang==='en' ? cat.en : cat.hi}</button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {loading ? (
            Array.from({ length: 4 }).map((_, idx) => <SkeletonCard key={idx} />)
          ) : (
            filtered.length === 0 ? (
              <div className="col-span-full rounded-2xl border border-dashed border-gray-300 bg-white p-6 text-center text-gray-600">{t.empty}</div>
            ) : (
              filtered.map(w => <WorkerCard key={w.id} worker={w} lang={lang} t={t} />)
            )
          )}
        </div>
      </div>
    </section>
  );
}

function WorkerCard({ worker, lang, t }) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm focus-within:ring-2 focus-within:ring-blue-200" aria-label={`${worker.name}, ${worker.skill}`}>
      <div className="flex items-start gap-3">
        <img src={worker.photo} alt={`${worker.name}`} loading="lazy" className="w-20 h-20 rounded-xl object-cover" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h4 className="font-semibold text-gray-900">{worker.name}</h4>
            {worker.verified && (
              <span className="inline-flex items-center gap-1 text-xs text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full"><BadgeCheck className="w-3.5 h-3.5" /> {lang==='en' ? 'Verified' : 'सत्यापित'}</span>
            )}
          </div>
          <div className="text-sm text-gray-600">{worker.skill} • {t.from} ₹{worker.price}</div>
          <div className="mt-1 flex items-center gap-3 text-xs text-gray-600">
            <span className="inline-flex items-center gap-1"><Star className="w-3.5 h-3.5 text-yellow-500" /> {worker.rating} ({worker.reviews})</span>
            <span className="inline-flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {worker.distance} km {lang==='en' ? t.kmAway : t.kmAway}</span>
            <span>{worker.languages.join(', ')}</span>
          </div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-sm">
        <button className="col-span-2 inline-flex items-center justify-center rounded-xl px-4 py-2 font-semibold text-white bg-[#FF6D00] hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-orange-300">{t.bookNow}</button>
        <button className="inline-flex items-center justify-center rounded-xl px-3 py-2 border border-gray-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200">{t.viewProfile}</button>
      </div>
      <div className="mt-2 flex items-center gap-3 text-sm text-gray-700">
        <a className="inline-flex items-center gap-1 hover:underline" href="#"><Phone className="w-4 h-4" /> Call</a>
        <a className="inline-flex items-center gap-1 hover:underline" href="#"><MessageSquare className="w-4 h-4" /> WhatsApp</a>
      </div>
    </article>
  );
}

function SkeletonCard() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm animate-pulse">
      <div className="flex items-start gap-3">
        <div className="w-20 h-20 rounded-xl bg-gray-200" />
        <div className="flex-1">
          <div className="w-40 h-4 bg-gray-200 rounded"></div>
          <div className="mt-2 w-32 h-3 bg-gray-200 rounded"></div>
          <div className="mt-2 flex gap-2">
            <div className="w-16 h-3 bg-gray-200 rounded"></div>
            <div className="w-20 h-3 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
      <div className="mt-4 h-9 bg-gray-200 rounded-xl"></div>
    </div>
  );
}

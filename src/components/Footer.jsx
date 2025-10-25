import React from 'react';

export default function Footer({ lang }) {
  return (
    <footer className="mt-10 bg-[#0D47A1] text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 grid md:grid-cols-4 gap-6">
        <div>
          <div className="font-semibold">ShramSathi</div>
          <p className="mt-2 text-sm text-white/80 max-w-sm">{lang==='en' ? 'Inspired by government design patterns to build trust and dignity for workers across Bharat.' : 'सरकारी डिज़ाइन पैटर्न से प्रेरित, पूरे भारत के कारीगरों के लिए विश्वास और सम्मान का निर्माण।'}</p>
        </div>
        <div>
          <div className="font-semibold mb-2">{lang==='en' ? 'Public' : 'सार्वजनिक'}</div>
          <ul className="space-y-1 text-sm text-white/90">
            <li><a href="#find" className="hover:underline">{lang==='en' ? 'Find Worker' : 'कारीगर खोजें'}</a></li>
            <li><a href="#how" className="hover:underline">{lang==='en' ? 'How It Works' : 'कैसे काम करता है'}</a></li>
            <li><a href="#help" className="hover:underline">{lang==='en' ? 'Help/Grievance' : 'सहायता/शिकायत'}</a></li>
            <li><a href="#about" className="hover:underline">{lang==='en' ? 'About' : 'हमारे बारे में'}</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">{lang==='en' ? 'Legal' : 'कानूनी'}</div>
          <ul className="space-y-1 text-sm text-white/90">
            <li><a href="#rti" className="hover:underline">RTI</a></li>
            <li><a href="#terms" className="hover:underline">{lang==='en' ? 'Terms' : 'नियम'}</a></li>
            <li><a href="#privacy" className="hover:underline">{lang==='en' ? 'Privacy' : 'गोपनीयता'}</a></li>
            <li><a href="#accessibility" className="hover:underline">{lang==='en' ? 'Accessibility' : 'सुगम्यता'}</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">{lang==='en' ? 'Helpline' : 'हेल्पलाइन'}</div>
          <p className="text-sm text-white/90">1800-000-000 (10am–6pm)</p>
          <p className="text-sm text-white/90">support@shramsathi.in</p>
          <div className="mt-3 text-xs text-white/70">{lang==='en' ? 'Use of program logos is for reference only and does not imply affiliation.' : 'कार्यक्रम लोगो केवल संदर्भ हेतु हैं, किसी प्रकार की आधिकारिक संबद्धता नहीं दर्शाते।'}</div>
        </div>
      </div>
      <div className="border-t border-white/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 text-xs text-white/80 flex flex-wrap items-center justify-between">
          <span>© {new Date().getFullYear()} ShramSathi</span>
          <div className="flex gap-3">
            <button className="underline underline-offset-2">EN</button>
            <span>/</span>
            <button className="underline underline-offset-2">HI</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

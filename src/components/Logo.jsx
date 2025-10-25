import React from 'react';
import { motion } from 'framer-motion';

export default function Logo({ size = 28, withText = false }) {
  const r = size / 2;
  const ring = size * 0.42;
  return (
    <div className="inline-flex items-center gap-2" aria-label="ShramSathi">
      <div style={{ width: size, height: size }} className="relative">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img" aria-label="ShramSathi logo">
          <defs>
            <linearGradient id="tri" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FF6D00" />
              <stop offset="50%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#2E7D32" />
            </linearGradient>
          </defs>
          <circle cx={r} cy={r} r={r} fill="#0D47A1" />
          <path d={`M0 ${r} C ${r*0.6} ${r*0.2}, ${r*1.4} ${r*1.8}, ${size} ${r}`} fill="none" stroke="url(#tri)" strokeWidth={Math.max(2, size*0.08)} />
        </svg>
        <motion.svg
          className="absolute inset-0"
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          aria-hidden="true"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 14, ease: 'linear' }}
        >
          <circle cx={r} cy={r} r={ring} fill="none" stroke="#ffffff" strokeOpacity="0.35" strokeWidth={1} strokeDasharray="2 4" />
        </motion.svg>
      </div>
      {withText && (
        <span className="font-semibold tracking-wide">ShramSathi</span>
      )}
    </div>
  );
}

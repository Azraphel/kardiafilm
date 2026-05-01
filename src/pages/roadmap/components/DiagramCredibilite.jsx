// components/diagrams/DiagramCredibilite.jsx
import React, { useEffect, useRef, useState } from 'react';

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

export default function DiagramCredibilite() {
  const [ref, inView] = useInView();

  // Items above water — what the prospect sees
  const visible = [
    { label: 'Avis Google',         y: 55  },
    { label: 'Photos before/after', y: 88  },
    { label: 'Témoignages vidéo',   y: 121 },
  ];

  // Items below water — the real work, invisible to prospect
  const hidden = [
    { label: 'Qualité du nettoyage',    y: 248 },
    { label: 'Fiabilité de ton équipe', y: 278 },
    { label: 'Standards opérationnels', y: 308 },
    { label: 'Années d\'expérience',    y: 338 },
  ];

  // Iceberg geometry — centered, generous
  // Top triangle apex, base at waterline y=165
  const waterY = 165;
  const iceTopPts  = '290,22 402,165 178,165';
  const iceBotPts  = '178,165 402,165 438,272 360,368 220,368 162,272';

  // Left anchor point on iceberg edge for visible item lines
  // Right side of top triangle at various y values
  const visibleLineStart = (itemY) => {
    // Linear interpolation along right edge of top: from (402,165) to (290,22)
    const t = (165 - itemY) / (165 - 22);
    const x = 402 + t * (290 - 402);
    return { x: x + 8, y: itemY };
  };

  // Left anchor on bottom iceberg for hidden items
  const hiddenLineStart = (itemY) => {
    // Right edge of bottom: from (402,165) down to (438,272) then (360,368)
    if (itemY <= 272) {
      const t = (itemY - 165) / (272 - 165);
      const x = 402 + t * (438 - 402);
      return { x: x + 6, y: itemY };
    } else {
      const t = (itemY - 272) / (368 - 272);
      const x = 438 + t * (360 - 438);
      return { x: x + 6, y: itemY };
    }
  };

  return (
    <div
      ref={ref}
      style={{
        background: 'rgba(255,255,255,.02)',
        border: '1px solid rgba(255,255,255,.07)',
        borderRadius: '4px',
        padding: '22px 20px 14px',
        margin: '28px 0',
        width: '100%',
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '18px' }}>
        <div style={{ fontFamily: 'monospace', fontSize: '9px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#f59e0b', marginBottom: '5px' }}>
          ◆ La leçon de Four Seasons
        </div>
        <div style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '16px', color: '#fff', lineHeight: 1.3 }}>
          Ce que le prospect voit — avant même de te parler
        </div>
        <div style={{ fontFamily: 'monospace', fontSize: '11px', color: 'rgba(255,255,255,.3)', marginTop: '4px' }}>
          La décision se prend sur le sommet de l'iceberg. Pas sur le fond.
        </div>
      </div>

      <svg viewBox="0 0 640 400" style={{ width: '100%', height: 'auto', display: 'block' }}>
        <defs>
          <linearGradient id="icWaterGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#050e1e" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#020810" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="icTopGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#4c1d95" stopOpacity="0.75" />
          </linearGradient>
          <linearGradient id="icBotGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a0f38" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#0a0618" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Water background */}
        <rect x="0" y={waterY} width="640" height={400 - waterY} fill="url(#icWaterGrad)" />

        {/* Subtle water shimmer */}
        <line x1="0" y1={waterY} x2="640" y2={waterY} stroke="rgba(124,58,237,0.2)" strokeWidth="1" />

        {/* Iceberg bottom (below water) */}
        <polygon
          points={iceBotPts}
          fill="url(#icBotGrad)"
          stroke="rgba(124,58,237,0.15)"
          strokeWidth="1"
          opacity={inView ? 1 : 0}
          style={{ transition: 'opacity 0.7s 0.2s ease' }}
        />

        {/* Iceberg top (above water) */}
        <polygon
          points={iceTopPts}
          fill="url(#icTopGrad)"
          stroke="rgba(124,58,237,0.55)"
          strokeWidth="1.5"
          opacity={inView ? 1 : 0}
          style={{ transition: 'opacity 0.5s ease' }}
        />

        {/* Ice highlight */}
        <polygon points="290,22 318,95 290,78" fill="rgba(255,255,255,0.07)" />

        {/* "IL VOIT" badge on top */}
        <g opacity={inView ? 1 : 0} style={{ transition: 'opacity 0.4s 0.8s ease' }}>
          <rect x="256" y="26" width="68" height="18" rx="9" fill="rgba(124,58,237,0.25)" stroke="rgba(124,58,237,0.55)" strokeWidth="1" />
          <text x="290" y="39" textAnchor="middle" fill="#c4b5fd" fontSize="9" fontFamily="monospace" fontWeight="700">IL VOIT ✓</text>
        </g>

        {/* "IL NE VOIT PAS" badge at bottom */}
        <g opacity={inView ? 0.55 : 0} style={{ transition: 'opacity 0.4s 1s ease' }}>
          <rect x="242" y="358" width="96" height="18" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          <text x="290" y="371" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="9" fontFamily="monospace">IL NE VOIT PAS</text>
        </g>

        {/* ── VISIBLE ITEMS — right side labels ── */}
        {visible.map((item, i) => {
          const start = visibleLineStart(item.y);
          const lx = 422; // label x start
          return (
            <g key={i} opacity={inView ? 1 : 0} style={{ transition: `opacity 0.5s ${0.45 + i * 0.14}s ease` }}>
              <line x1={start.x} y1={start.y} x2={lx - 4} y2={item.y} stroke="rgba(124,58,237,0.35)" strokeWidth="1" strokeDasharray="3,2" />
              <rect x={lx} y={item.y - 11} width="148" height="22" rx="3" fill="rgba(124,58,237,0.1)" stroke="rgba(124,58,237,0.28)" strokeWidth="1" />
              <text x={lx + 8} y={item.y + 4} fill="#a78bfa" fontSize="11" fontFamily="monospace" fontWeight="700">{item.label}</text>
            </g>
          );
        })}

        {/* ── HIDDEN ITEMS — right side labels, dimmed ── */}
        {hidden.map((item, i) => {
          const start = hiddenLineStart(item.y);
          const lx = 456;
          return (
            <g key={i} opacity={inView ? 0.5 : 0} style={{ transition: `opacity 0.5s ${0.75 + i * 0.1}s ease` }}>
              <line x1={start.x} y1={start.y} x2={lx - 4} y2={item.y} stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="3,2" />
              <rect x={lx} y={item.y - 10} width="148" height="20" rx="3" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
              <text x={lx + 8} y={item.y + 3} fill="rgba(255,255,255,0.28)" fontSize="10" fontFamily="monospace">{item.label}</text>
            </g>
          );
        })}
      </svg>

      {/* Footer */}
      <div style={{ marginTop: '10px', padding: '11px 16px', background: 'rgba(124,58,237,.05)', border: '1px solid rgba(124,58,237,.12)', borderRadius: '4px' }}>
        <p style={{ fontFamily: 'monospace', fontSize: '12px', color: 'rgba(255,255,255,.42)', lineHeight: 1.6, margin: 0 }}>
          <strong style={{ color: '#a78bfa' }}>La règle :</strong> si ton sommet est vide, le prospect appelle le suivant — peu importe la qualité de ton travail réel.
        </p>
      </div>
    </div>
  );
}

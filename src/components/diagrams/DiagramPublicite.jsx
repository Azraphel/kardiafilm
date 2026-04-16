// components/diagrams/DiagramPublicite.jsx
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

const METRICS = [
  {
    color: '#f59e0b',
    bg: 'rgba(245,158,11,.06)',
    border: 'rgba(245,158,11,.22)',
    title: 'Vitesse',
    desc: 'Attention immédiate. Là où le cold call prend des semaines, une pub bien ciblée génère des leads en heures.',
  },
  {
    color: '#7c3aed',
    bg: 'rgba(124,58,237,.07)',
    border: 'rgba(124,58,237,.22)',
    title: 'Portée',
    desc: 'Des milliers de facility managers et property managers dans ta zone — touchés simultanément, sans effort supplémentaire.',
  },
  {
    color: '#4ade80',
    bg: 'rgba(74,222,128,.05)',
    border: 'rgba(74,222,128,.18)',
    title: 'Croissance',
    desc: 'Plus de gens qui savent que tu existes = plus de gens qui peuvent avoir besoin de toi et se convertir en clients.',
  },
];

export default function DiagramPublicite() {
  const [ref, inView] = useInView();
  const [wave, setWave] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => setWave(w => (w + 1) % 4), 600);
    return () => clearInterval(id);
  }, [inView]);

  // Layout constants
  // SVG total: 600 wide, 320 tall
  // Megaphone: left side, centered vertically at y=160
  // Cards: right side, 3 cards stacked

  const megCX = 90;  // center x of megaphone body
  const megCY = 160; // center y
  const bellX = 148; // x where bell mouth opens (rightmost point of megaphone)

  // Card layout
  const cardW = 310;
  const cardH = 78;
  const cardGap = 10;
  const cardStartX = 196;
  const cardStartY = 16;
  const cardCenterYs = METRICS.map((_, i) => cardStartY + i * (cardH + cardGap) + cardH / 2);

  // Arrow from bell mouth to each card left edge
  const arrows = cardCenterYs.map(cy => ({
    x1: bellX + 2,
    y1: megCY + (cy - megCY) * 0.35, // fan out from bell center
    x2: cardStartX - 2,
    y2: cy,
  }));

  return (
    <div
      ref={ref}
      style={{
        background: 'rgba(255,255,255,.02)',
        border: '1px solid rgba(255,255,255,.07)',
        borderRadius: '4px',
        padding: '22px 20px 14px',
        margin: '28px 0',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '18px' }}>
        <div style={{ fontFamily: 'monospace', fontSize: '9px', fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#f59e0b', marginBottom: '5px' }}>
          ◆ La leçon d'Apple
        </div>
        <div style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '16px', color: '#fff', lineHeight: 1.3 }}>
          Ce qu'une pub bien faite amplifie
        </div>
        <div style={{ fontFamily: 'monospace', fontSize: '11px', color: 'rgba(255,255,255,.3)', marginTop: '4px' }}>
          Un message — trois effets simultanés sur ta croissance
        </div>
      </div>

      <svg
        viewBox="0 0 600 320"
        style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }}
      >
        <defs>
          <linearGradient id="megGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#4c1d95" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="bellGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#5b21b6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* ── MEGAPHONE ── */}
        <g opacity={inView ? 1 : 0} style={{ transition: 'opacity 0.5s 0.1s ease' }}>
          {/* Handle/grip */}
          <rect x="38" y="148" width="28" height="14" rx="4"
            fill="rgba(124,58,237,0.3)" stroke="rgba(124,58,237,0.5)" strokeWidth="1" />

          {/* Body (rectangular tube) */}
          <rect x="52" y="140" width="52" height="30" rx="4"
            fill="url(#megGrad)" stroke="rgba(124,58,237,0.6)" strokeWidth="1.5" />

          {/* Bell (trapezoid flaring to the right) */}
          <polygon
            points="104,130 148,100 148,220 104,170"
            fill="url(#bellGrad)"
            stroke="rgba(124,58,237,0.45)"
            strokeWidth="1.5"
          />

          {/* Bell opening rim */}
          <line x1="148" y1="100" x2="148" y2="220"
            stroke="rgba(124,58,237,0.7)" strokeWidth="2.5" strokeLinecap="round" />

          {/* Mouthpiece (left side) */}
          <rect x="30" y="151" width="26" height="8" rx="3"
            fill="rgba(124,58,237,0.5)" stroke="rgba(124,58,237,0.7)" strokeWidth="1" />

          {/* Sound waves from bell */}
          {[1, 2, 3].map((w, i) => (
            <g key={i} opacity={inView ? (wave > i ? 0.18 : 0.04) : 0} style={{ transition: 'opacity 0.3s ease' }}>
              <path
                d={`M 153 ${160 - w * 28} Q ${162 + w * 8} 160 153 ${160 + w * 28}`}
                fill="none"
                stroke="#7c3aed"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </g>
          ))}

          {/* "TA PUB" label below megaphone */}
          <text x={megCX} y="240" textAnchor="middle" fill="rgba(255,255,255,.5)"
            fontSize="10" fontFamily="monospace" fontWeight="700" letterSpacing="2">
            TA PUB
          </text>
        </g>

        {/* ── ARROWS from bell to cards ── */}
        {arrows.map((a, i) => (
          <g key={i} opacity={inView ? 1 : 0} style={{ transition: `opacity 0.4s ${0.4 + i * 0.14}s ease` }}>
            <line
              x1={a.x1} y1={a.y1}
              x2={a.x2} y2={a.y2}
              stroke={METRICS[i].color}
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeDasharray="5,3"
            />
            {/* Arrow tip */}
            <polygon
              points={`${a.x2},${a.y2 - 4} ${a.x2 + 7},${a.y2} ${a.x2},${a.y2 + 4}`}
              fill={METRICS[i].color}
              opacity="0.8"
            />
          </g>
        ))}

        {/* ── CARDS ── */}
        {METRICS.map((m, i) => {
          const y = cardStartY + i * (cardH + cardGap);
          return (
            <g
              key={i}
              opacity={inView ? 1 : 0}
              style={{ transition: `opacity 0.5s ${0.45 + i * 0.14}s ease` }}
            >
              {/* Card bg */}
              <rect
                x={cardStartX} y={y}
                width={cardW} height={cardH}
                rx="3"
                fill={m.bg}
                stroke={m.border}
                strokeWidth="1"
              />
              {/* Left accent */}
              <rect x={cardStartX} y={y} width="3" height={cardH} rx="1" fill={m.color} />

              {/* Title */}
              <text
                x={cardStartX + 16} y={y + 24}
                fill={m.color}
                fontSize="13" fontFamily="monospace" fontWeight="700"
              >
                {m.title}
              </text>

              {/* Description — word wrap via tspan */}
              <text x={cardStartX + 16} y={y + 42} fill="rgba(255,255,255,.42)" fontSize="11" fontFamily="monospace">
                <tspan x={cardStartX + 16} dy="0">{m.desc.slice(0, 52)}</tspan>
                {m.desc.length > 52 && (
                  <tspan x={cardStartX + 16} dy="15">{m.desc.slice(52)}</tspan>
                )}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
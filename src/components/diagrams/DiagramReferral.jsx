// components/diagrams/DiagramReferral.jsx
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

// Person icon — simple SVG circle + body
const Person = ({ x, y, r = 16, color, label, sublabel, ring = false, satisfied = false, delay = 0, inView }) => (
  <g opacity={inView ? 1 : 0} style={{ transition: `opacity 0.5s ${delay}s ease` }}>
    {/* Outer ring (converted client) */}
    {ring && (
      <circle cx={x} cy={y} r={r + 9} fill="none" stroke={color} strokeWidth="1.2" strokeDasharray="3,2" opacity="0.4" />
    )}
    {/* Body circle */}
    <circle cx={x} cy={y + 6} r={r - 4} fill={`${color}18`} stroke={color} strokeWidth="1.2" />
    {/* Head */}
    <circle cx={x} cy={y - r + 5} r={r - 8} fill={`${color}25`} stroke={color} strokeWidth="1.2" />
    {/* Satisfied checkmark */}
    {satisfied && (
      <g>
        <circle cx={x + r - 4} cy={y - r + 2} r="7" fill="#4ade80" />
        <text x={x + r - 4} y={y - r + 6} textAnchor="middle" fill="#000" fontSize="8" fontWeight="700">✓</text>
      </g>
    )}
    {/* Label */}
    {label && (
      <text x={x} y={y + r + 14} textAnchor="middle" fill={color} fontSize="10" fontFamily="monospace" fontWeight="700">{label}</text>
    )}
    {sublabel && (
      <text x={x} y={y + r + 26} textAnchor="middle" fill="rgba(255,255,255,.3)" fontSize="9" fontFamily="monospace">{sublabel}</text>
    )}
  </g>
);

export default function DiagramReferral() {
  const [ref, inView] = useInView();
  const [step, setStep] = useState(0);

  // Animate steps: 0=center, 1=arrows appear, 2=network shows, 3=second ring
  useEffect(() => {
    if (!inView) return;
    const timings = [400, 900, 1500, 2200];
    const timeouts = timings.map((t, i) => setTimeout(() => setStep(i + 1), t));
    return () => timeouts.forEach(clearTimeout);
  }, [inView]);

  // SVG dimensions
  const W = 600, H = 340;
  const CX = 200, CY = 170; // center client position

  // First ring — 3 contacts, tous convertis
  const ring1 = [
    { angle: -55, dist: 130, name: 'Contact 1', converted: true },
    { angle:  10, dist: 140, name: 'Contact 2', converted: true },
    { angle:  65, dist: 130, name: 'Contact 3', converted: true },
  ];

  // Second ring — contacts of contacts (right side only, 2 people)
  const ring2 = [
    { x: 490, y: 100, name: 'Nouveau\nclient', color: '#4ade80' },
    { x: 490, y: 240, name: 'Nouveau\nclient', color: '#4ade80' },
  ];

  const toRad = deg => (deg * Math.PI) / 180;

  const r1pts = ring1.map(p => ({
    ...p,
    x: CX + p.dist * Math.cos(toRad(p.angle)),
    y: CY + p.dist * Math.sin(toRad(p.angle)),
  }));

  // Arrow from ring1 converted contacts to ring2
  const r2arrows = [
    { x1: r1pts[1].x + 18, y1: r1pts[1].y - 8,  x2: ring2[0].x - 20, y2: ring2[0].y },
    { x1: r1pts[2].x + 16, y1: r1pts[2].y + 6,  x2: ring2[1].x - 20, y2: ring2[1].y },
  ];

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
          ◆ La leçon de Dropbox
        </div>
        <div style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '16px', color: '#fff', lineHeight: 1.3 }}>
          La confiance se transfère
        </div>
        <div style={{ fontFamily: 'monospace', fontSize: '11px', color: 'rgba(255,255,255,.3)', marginTop: '4px' }}>
          Un client satisfait réduit à zéro le travail de conviction pour chaque personne dans son réseau
        </div>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto', display: 'block', overflow: 'visible' }}>
        <defs>
          <radialGradient id="drCenterGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.05" />
          </radialGradient>
          <marker id="arrowAmber" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#f59e0b" opacity="0.7" />
          </marker>
          <marker id="arrowGreen" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#4ade80" opacity="0.7" />
          </marker>
          <marker id="arrowViolet" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#7c3aed" opacity="0.6" />
          </marker>
        </defs>

        {/* Subtle glow around center */}
        <circle cx={CX} cy={CY} r="110" fill="url(#drCenterGrad)" opacity={step >= 1 ? 0.8 : 0} style={{ transition: 'opacity 0.6s ease' }} />

        {/* ── CENTER — Client satisfait ── */}
        <g opacity={inView ? 1 : 0} style={{ transition: 'opacity 0.4s 0.1s ease' }}>
          {/* Outer pulse ring */}
          <circle cx={CX} cy={CY} r="42" fill="none" stroke="#7c3aed" strokeWidth="1" opacity="0.25" />
          <circle cx={CX} cy={CY} r="34" fill="rgba(124,58,237,.18)" stroke="#7c3aed" strokeWidth="1.5" />
          {/* Head */}
          <circle cx={CX} cy={CY - 14} r="11" fill="rgba(124,58,237,.3)" stroke="#7c3aed" strokeWidth="1.5" />
          {/* Body */}
          <ellipse cx={CX} cy={CY + 10} rx="13" ry="10" fill="rgba(124,58,237,.2)" stroke="#7c3aed" strokeWidth="1.2" />
          {/* Satisfied check */}
          <circle cx={CX + 20} cy={CY - 24} r="9" fill="#4ade80" />
          <text x={CX + 20} y={CY - 20} textAnchor="middle" fill="#000" fontSize="9" fontWeight="700">✓</text>
          {/* Label */}
          <text x={CX} y={CY + 50} textAnchor="middle" fill="#7c3aed" fontSize="11" fontFamily="monospace" fontWeight="700">Client satisfait</text>
          <text x={CX} y={CY + 63} textAnchor="middle" fill="rgba(255,255,255,.28)" fontSize="9" fontFamily="monospace">utilise le service</text>
        </g>

        {/* ── ARROWS from center to ring 1 ── */}
        {r1pts.map((p, i) => (
          <g key={i} opacity={step >= 2 ? 1 : 0} style={{ transition: `opacity 0.4s ${i * 0.1}s ease` }}>
            <line
              x1={CX + 36 * Math.cos(toRad(p.angle))}
              y1={CY + 36 * Math.sin(toRad(p.angle))}
              x2={p.x - 22 * Math.cos(toRad(p.angle))}
              y2={p.y - 22 * Math.sin(toRad(p.angle))}
              stroke="#f59e0b"
              strokeWidth="1.5"
              strokeDasharray="5,3"
              markerEnd="url(#arrowAmber)"
              opacity="0.7"
            />
            {/* "Confiance" label on arrow (only on first arrow) */}
            {i === 0 && (
              <text
                x={(CX + p.x) / 2 - 18}
                y={(CY + p.y) / 2 - 10}
                fill="rgba(245,158,11,0.6)"
                fontSize="9"
                fontFamily="monospace"
                fontStyle="italic"
              >
                confiance
              </text>
            )}
          </g>
        ))}

        {/* ── RING 1 — Contacts ── */}
        {r1pts.map((p, i) => (
          <g key={i} opacity={step >= 2 ? 1 : 0} style={{ transition: `opacity 0.5s ${0.1 + i * 0.12}s ease` }}>
            {/* Outer ring if converted */}
            {p.converted && (
              <circle cx={p.x} cy={p.y} r="28" fill="none" stroke="#4ade80" strokeWidth="1" strokeDasharray="3,2" opacity="0.3" />
            )}
            {/* Person bg */}
            <circle cx={p.x} cy={p.y} r="20" fill={p.converted ? 'rgba(74,222,128,.1)' : 'rgba(255,255,255,.04)'} stroke={p.converted ? '#4ade80' : 'rgba(255,255,255,.15)'} strokeWidth="1.2" />
            {/* Head */}
            <circle cx={p.x} cy={p.y - 9} r="7" fill={p.converted ? 'rgba(74,222,128,.15)' : 'rgba(255,255,255,.05)'} stroke={p.converted ? '#4ade80' : 'rgba(255,255,255,.15)'} strokeWidth="1.2" />
            {/* Body */}
            <ellipse cx={p.x} cy={p.y + 6} rx="8" ry="7" fill={p.converted ? 'rgba(74,222,128,.1)' : 'rgba(255,255,255,.03)'} stroke={p.converted ? '#4ade80' : 'rgba(255,255,255,.1)'} strokeWidth="1" />
            {/* Converted check */}
            {p.converted && (
              <g>
                <circle cx={p.x + 14} cy={p.y - 16} r="7" fill="#4ade80" />
                <text x={p.x + 14} y={p.y - 12} textAnchor="middle" fill="#000" fontSize="8" fontWeight="700">✓</text>
              </g>
            )}
            {/* Label */}
            <text
              x={p.x}
              y={p.y + 32}
              textAnchor="middle"
              fill={p.converted ? '#4ade80' : 'rgba(255,255,255,.3)'}
              fontSize="9"
              fontFamily="monospace"
              fontWeight={p.converted ? '700' : '400'}
            >
              {p.converted ? 'Converti' : 'Pas encore'}
            </text>
          </g>
        ))}

        {/* ── ARROWS from ring1 to ring2 ── */}
        {r2arrows.map((a, i) => (
          <g key={i} opacity={step >= 3 ? 1 : 0} style={{ transition: `opacity 0.4s ${i * 0.15}s ease` }}>
            <line
              x1={a.x1} y1={a.y1}
              x2={a.x2} y2={a.y2}
              stroke="#4ade80"
              strokeWidth="1.5"
              strokeDasharray="5,3"
              markerEnd="url(#arrowGreen)"
              opacity="0.6"
            />
          </g>
        ))}

        {/* ── RING 2 — Nouveaux clients ── */}
        {ring2.map((p, i) => (
          <g key={i} opacity={step >= 3 ? 1 : 0} style={{ transition: `opacity 0.5s ${0.15 + i * 0.15}s ease` }}>
            <circle cx={p.x} cy={p.y} r="18" fill="rgba(74,222,128,.12)" stroke="#4ade80" strokeWidth="1.2" opacity="0.8" />
            <circle cx={p.x} cy={p.y - 8} r="6" fill="rgba(74,222,128,.15)" stroke="#4ade80" strokeWidth="1" />
            <ellipse cx={p.x} cy={p.y + 5} rx="7" ry="6" fill="rgba(74,222,128,.1)" stroke="#4ade80" strokeWidth="1" />
            <circle cx={p.x + 12} cy={p.y - 14} r="6" fill="#4ade80" />
            <text x={p.x + 12} y={p.y - 10} textAnchor="middle" fill="#000" fontSize="7" fontWeight="700">✓</text>
            <text x={p.x} y={p.y + 28} textAnchor="middle" fill="#4ade80" fontSize="9" fontFamily="monospace" fontWeight="700">Nouveau</text>
            <text x={p.x} y={p.y + 40} textAnchor="middle" fill="#4ade80" fontSize="9" fontFamily="monospace" fontWeight="700">client</text>
          </g>
        ))}

        {/* ── LEGEND ── */}
        <g opacity={step >= 2 ? 1 : 0} style={{ transition: 'opacity 0.4s 0.5s ease' }}>
          <line x1="16" y1="308" x2="40" y2="308" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4,2" />
          <text x="46" y="312" fill="rgba(255,255,255,.3)" fontSize="9" fontFamily="monospace">Transfert de confiance</text>
          <circle cx="22" cy="325" r="4" fill="none" stroke="#4ade80" strokeWidth="1" />
          <text x="46" y="329" fill="rgba(255,255,255,.3)" fontSize="9" fontFamily="monospace">Client converti</text>
        </g>
      </svg>

      {/* Footer insight */}
      <div style={{ marginTop: '10px', padding: '11px 16px', background: 'rgba(124,58,237,.05)', border: '1px solid rgba(124,58,237,.12)', borderRadius: '4px' }}>
        <p style={{ fontFamily: 'monospace', fontSize: '12px', color: 'rgba(255,255,255,.42)', lineHeight: 1.6, margin: 0 }}>
          <strong style={{ color: '#a78bfa' }}>L'insight :</strong> un ami satisfait transfère sa confiance instantanément — le prospect n'a pas besoin d'être convaincu, juste de faire confiance à son ami.
        </p>
      </div>
    </div>
  );
}
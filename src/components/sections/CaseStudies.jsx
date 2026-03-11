// components/sections/CaseStudies.jsx
import React from 'react';

const stats = [
  { value: '186 $',    label: 'Budget total',   color: '#a855f7' },
  { value: '33',       label: 'Leads qualifiés', color: '#f59e0b' },
  { value: '4,06 $',   label: 'Coût par lead',  color: '#a855f7' },
  { value: '7+',       label: 'Clients fermés', color: '#f59e0b' },
  { value: '7 350 $+', label: 'Revenus générés',color: '#a855f7' },
  { value: '39x',      label: 'ROI',            color: '#f59e0b' },
];

const CaseStudies = () => (
  <section id="resultats" style={{
    padding: '8rem 1.5rem',
    background: 'linear-gradient(to bottom, #000, rgba(88,28,135,0.04), #000)',
    position: 'relative',
  }}>
    <div style={{
      position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
      width: '600px', height: '300px',
      background: 'radial-gradient(ellipse, rgba(168,85,247,0.06) 0%, transparent 70%)',
      pointerEvents: 'none',
    }} />

    <div style={{ maxWidth: '860px', margin: '0 auto', position: 'relative' }}>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <p style={{
          fontFamily: 'monospace', fontSize: '0.65rem',
          color: 'rgba(168,85,247,0.6)', textTransform: 'uppercase',
          letterSpacing: '0.2em', marginBottom: '1rem',
        }}>
          ● ÉTUDE DE CAS — PRONETT
        </p>
        <h2 style={{
          fontSize: 'clamp(2rem, 5vw, 3.25rem)',
          fontWeight: 700, color: 'white',
          letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1rem',
        }}>
          186 $ investis.<br />
          <span style={{
            background: 'linear-gradient(to right, #a855f7, #f59e0b)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            7 350 $+ générés.
          </span>
        </h2>
        <p style={{
          color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem',
          fontFamily: 'monospace', letterSpacing: '0.08em',
        }}>
          Nettoyage de hottes · Grand Montréal · 30 jours · Meta Ads
        </p>
      </div>

      {/* Stats grid */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1rem', marginBottom: '2.5rem',
      }}>
        {stats.map((stat, i) => (
          <div key={i} style={{
            background: 'rgba(255,255,255,0.02)',
            border: `1px solid ${stat.color}25`,
            borderRadius: '14px', padding: '1.5rem 1.25rem',
            textAlign: 'center', position: 'relative', overflow: 'hidden',
            transition: 'transform 0.3s, border-color 0.3s', cursor: 'default',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.borderColor = stat.color + '60'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = stat.color + '25'; }}
          >
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(to right, transparent, ${stat.color}80, transparent)` }} />
            <div style={{ fontSize: 'clamp(1.6rem, 3vw, 2.25rem)', fontWeight: 700, color: stat.color, letterSpacing: '-0.02em', lineHeight: 1, marginBottom: '0.4rem' }}>
              {stat.value}
            </div>
            <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'monospace' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* ROI flow */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: '0.75rem', flexWrap: 'wrap', padding: '1.25rem',
        background: 'rgba(245,158,11,0.04)',
        border: '1px solid rgba(245,158,11,0.15)',
        borderRadius: '12px', marginBottom: '2.5rem',
      }}>
        {[
          { val: '186 $', sub: 'investis' }, '→',
          { val: '33 leads', sub: 'générés' }, '→',
          { val: '7+ clients', sub: 'fermés' }, '→',
          { val: '7 350 $+', sub: 'revenus', highlight: true },
        ].map((item, i) =>
          item === '→'
            ? <span key={i} style={{ color: 'rgba(255,255,255,0.18)', fontSize: '1rem' }}>→</span>
            : (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: item.highlight ? '#f59e0b' : 'white' }}>{item.val}</div>
                <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.25)', fontFamily: 'monospace' }}>{item.sub}</div>
              </div>
            )
        )}
      </div>

      {/* Lien page complète */}
      <div style={{ textAlign: 'center' }}>
        <a href="/case-studies" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          padding: '0.875rem 2rem',
          background: 'rgba(168,85,247,0.08)',
          border: '1px solid rgba(168,85,247,0.3)',
          borderRadius: '999px', color: '#c084fc',
          fontWeight: 600, fontSize: '0.9rem',
          textDecoration: 'none', letterSpacing: '0.02em',
          transition: 'background 0.2s, border-color 0.2s, color 0.2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(168,85,247,0.15)'; e.currentTarget.style.borderColor = 'rgba(168,85,247,0.6)'; e.currentTarget.style.color = '#e9d5ff'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(168,85,247,0.08)'; e.currentTarget.style.borderColor = 'rgba(168,85,247,0.3)'; e.currentTarget.style.color = '#c084fc'; }}
        >
          Voir l'étude de cas complète <span>→</span>
        </a>
        <p style={{ marginTop: '0.875rem', fontFamily: 'monospace', fontSize: '0.62rem', color: 'rgba(255,255,255,0.15)', letterSpacing: '0.1em' }}>
          Timeline · Comparatif vidéo vs statique · Apprentissages
        </p>
      </div>

    </div>
  </section>
);

export default CaseStudies;
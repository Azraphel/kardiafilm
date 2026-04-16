// components/sections/CaseStudy.jsx
import React, { useState } from 'react';
import { Rev, useInView, useCounter } from '../../hooks/useReveal';

const StatCount = ({ n, suffix = '', label, color, active }) => {
  const v = useCounter(n, 1600, active);
  return (
    <div style={{ textAlign: 'center', padding: 'clamp(18px,2.5vw,28px)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: `linear-gradient(to right, transparent, ${color}50, transparent)` }} />
      <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(22px,3.5vw,40px)', lineHeight: 1, color, letterSpacing: '-.03em', marginBottom: '6px' }}>
        {v}{suffix}
      </div>
      <div style={{ fontFamily: 'monospace', fontSize: '10px', color: 'rgba(255,255,255,.35)', textTransform: 'uppercase', letterSpacing: '.06em', lineHeight: 1.4 }}>{label}</div>
    </div>
  );
};

const CaseStudy = () => {
  const [tab, setTab] = useState('resultats');
  const [sRef, sInView] = useInView(0.3);

  const stats = [
    { n: 0,  suffix: '$',   label: 'Revenus avant',   color: '#6b7280' },
    { n: 7500, suffix: '$+', label: 'Revenus · 30 jrs', color: '#a855f7' },
    { n: 25, suffix: '%→5%', label: 'Taux no-show',    color: '#f59e0b' },
    { n: 33, suffix: '',     label: 'Leads générés',    color: '#a855f7' },
    { n: 7,  suffix: '+',    label: 'Clients fermés',   color: '#f59e0b' },
    { n: 39, suffix: 'x',    label: 'ROI',              color: '#a855f7' },
  ];

  return (
    <section id="etude-de-cas" style={{ background: 'var(--dark2)', padding: 'clamp(80px,10vw,130px) clamp(20px,5vw,80px)', position: 'relative', overflow: 'hidden' }}>

      <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: '700px', height: '500px', background: 'radial-gradient(ellipse, rgba(124,58,237,.07) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>

        {/* Header */}
        <Rev>
          <div className="kg-tag">Étude de cas</div>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(28px,4.5vw,54px)', lineHeight: 1.06, letterSpacing: '-.025em', marginBottom: '12px' }}>
            On l'a fait pour ProNett.{' '}
            <em style={{ color: 'rgba(255,255,255,.35)' }}>On peut le faire pour vous.</em>
          </h2>
          <p style={{ fontFamily: 'monospace', fontSize: '12px', color: 'rgba(255,255,255,.25)', letterSpacing: '.06em' }}>
            Nettoyage de hottes · Grand Montréal · 30 jours
          </p>
        </Rev>

        {/* Card principale */}
        <Rev delay={1}>
          <div style={{ marginTop: 'clamp(32px,5vw,48px)', background: 'var(--dark3)', border: '1px solid rgba(168,85,247,.18)', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 0 80px -20px rgba(124,58,237,.2)', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(168,85,247,.5), rgba(245,158,11,.3), transparent)' }} />

            {/* Card header */}
            <div style={{ padding: 'clamp(24px,3.5vw,36px)', borderBottom: '1px solid rgba(255,255,255,.06)', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', background: 'linear-gradient(to bottom, rgba(124,58,237,.05), transparent)' }}>
              <div>
                <div style={{ fontFamily: 'monospace', fontSize: '9px', color: '#a855f7', letterSpacing: '.15em', textTransform: 'uppercase', marginBottom: '8px' }}>● ÉTUDE DE CAS #001</div>
                <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(22px,3vw,32px)', color: 'white', letterSpacing: '-.02em', marginBottom: '4px' }}>ProNett</h3>
                <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'rgba(255,255,255,.25)', letterSpacing: '.06em' }}>Nettoyage de hottes · Grand Montréal · 30 jours</p>
              </div>
              <div style={{ padding: 'clamp(14px,2vw,20px) clamp(20px,3vw,32px)', background: 'rgba(245,158,11,.1)', border: '1px solid rgba(245,158,11,.3)', borderRadius: '8px', textAlign: 'center', boxShadow: '0 0 30px -10px rgba(245,158,11,.3)' }}>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(32px,5vw,56px)', color: '#f59e0b', lineHeight: 1, letterSpacing: '-.03em' }}>39x</div>
                <div style={{ fontFamily: 'monospace', fontSize: '10px', color: 'rgba(245,158,11,.5)', letterSpacing: '.1em', marginTop: '4px' }}>ROI</div>
              </div>
            </div>

            {/* Quote */}
            <div style={{ padding: 'clamp(20px,3vw,28px) clamp(24px,3.5vw,36px)', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
              <p style={{ fontFamily: "'DM Serif Display', serif", fontStyle: 'italic', fontSize: 'clamp(14px,2vw,18px)', color: 'rgba(255,255,255,.55)', lineHeight: 1.6 }}>
                "Ils sont passés de zéro publicité à 7 500 $+ de revenus en 30 jours. Les no-shows sont passés de 25% à 5%. Ils bookent 3x plus de rendez-vous avec la même équipe."
              </p>
            </div>

            {/* Tabs */}
            <div style={{ display: 'flex', borderBottom: '1px solid rgba(255,255,255,.06)', padding: '0 clamp(24px,3.5vw,36px)', overflowX: 'auto' }}>
              {[{ id: 'resultats', label: 'Résultats' }, { id: 'situation', label: 'La situation' }].map(t => (
                <button key={t.id} onClick={() => setTab(t.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '14px clamp(12px,2vw,20px)', fontFamily: 'monospace', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '.1em', color: tab === t.id ? '#a855f7' : 'rgba(255,255,255,.3)', borderBottom: tab === t.id ? '2px solid #a855f7' : '2px solid transparent', marginBottom: '-1px', transition: 'color .2s', whiteSpace: 'nowrap' }}>{t.label}</button>
              ))}
            </div>

            {/* Tab content */}
            <div style={{ padding: 'clamp(20px,3vw,28px) clamp(24px,3.5vw,36px)' }}>
              {tab === 'resultats' && (
                <div>
                  <div ref={sRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(255,255,255,.05)', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255,255,255,.06)', marginBottom: '16px' }}>
                    {stats.map((s, i) => (
                      <div key={i} style={{ background: 'var(--dark2)', borderRight: i % 3 !== 2 ? '1px solid rgba(255,255,255,.05)' : 'none', borderBottom: i < 3 ? '1px solid rgba(255,255,255,.05)' : 'none', transition: 'background .2s' }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(20,8,35,.98)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'var(--dark2)'}
                      >
                        <StatCount {...s} active={sInView} />
                      </div>
                    ))}
                  </div>
                  {/* ROI Flow */}
                  <div style={{ padding: 'clamp(14px,2vw,20px)', background: 'rgba(245,158,11,.04)', border: '1px solid rgba(245,158,11,.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    {[
                      { val: '186 $', sub: 'investis' },
                      '→',
                      { val: '33 leads', sub: 'générés' },
                      '→',
                      { val: '7+ clients', sub: 'fermés' },
                      '→',
                      { val: '7 500 $+', sub: 'revenus', hi: true },
                    ].map((item, i) => item === '→'
                      ? <span key={i} style={{ color: 'rgba(255,255,255,.2)', fontSize: '16px' }}>→</span>
                      : <div key={i} style={{ textAlign: 'center' }}>
                          <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(14px,2vw,18px)', color: item.hi ? '#f59e0b' : 'white', fontWeight: 400 }}>{item.val}</div>
                          <div style={{ fontFamily: 'monospace', fontSize: '9px', color: 'rgba(255,255,255,.3)' }}>{item.sub}</div>
                        </div>
                    )}
                  </div>
                </div>
              )}
              {tab === 'situation' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    { label: '● AVANT', color: '#6b7280', bg: 'rgba(255,255,255,.02)', content: "ProNett dépendait entièrement du bouche-à-oreille. Zéro publicité. Zéro système. Des leads manqués chaque semaine. Des no-shows qui coûtaient des journées entières." },
                    { label: '● APRÈS', color: '#a855f7', bg: 'rgba(124,58,237,.04)', content: "Système IA complet : réponse automatique aux appels et messages, qualification des leads, réservation directe dans le calendrier, rappels, collecte d'informations de paiement. 33 leads, 7+ clients, 7 500 $+ en 30 jours." },
                  ].map((block, i) => (
                    <div key={i} style={{ padding: 'clamp(16px,2.5vw,22px)', background: block.bg, border: '1px solid rgba(255,255,255,.06)', borderRadius: '6px', position: 'relative', overflow: 'hidden' }}>
                      <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '2px', background: block.color, opacity: .5 }} />
                      <p style={{ fontFamily: 'monospace', fontSize: '9px', color: block.color, letterSpacing: '.15em', textTransform: 'uppercase', marginBottom: '8px' }}>{block.label}</p>
                      <p style={{ fontSize: 'clamp(13px,1.6vw,15px)', color: 'rgba(255,255,255,.55)', lineHeight: 1.75, fontWeight: 300 }}>{block.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div style={{ padding: 'clamp(16px,2vw,22px) clamp(24px,3.5vw,36px)', borderTop: '1px solid rgba(255,255,255,.06)', background: 'rgba(0,0,0,.3)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(15px,2vw,18px)', color: 'white', marginBottom: '2px' }}>Votre compagnie pourrait être la prochaine.</p>
                <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'rgba(255,255,255,.25)' }}>20 minutes pour voir combien vous perdez par semaine.</p>
              </div>
              <a href="#contact" className="btn-primary" style={{ flexShrink: 0, fontSize: '13px', padding: '10px 22px' }}>Réserver mon appel →</a>
            </div>
          </div>
        </Rev>
      </div>
    </section>
  );
};

export default CaseStudy;
// components/sections/CaseStudy.jsx
import React, { useState, useEffect, useRef } from 'react';

const stats = [
  { value: '0 $',      label: 'Revenus pub avant',   color: '#6b7280' },
  { value: '7 500 $+', label: 'Revenus en 30 jours', color: '#a855f7' },
  { value: '25%→5%',   label: 'Taux de no-show',     color: '#f59e0b' },
  { value: '3x',       label: 'Rendez-vous bookés',  color: '#a855f7' },
  { value: '33',       label: 'Leads générés',        color: '#f59e0b' },
  { value: '39x',      label: 'ROI',                  color: '#a855f7' },
];

const CaseStudy = () => {
  const [tab, setTab] = useState('resultats');
  const sectionRef = useRef(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.fade-in-up');
    if (!els) return;
    const observer = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }), { threshold: 0.08 });
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="etude-de-cas" ref={sectionRef} style={{ padding: 'clamp(4rem,8vw,8rem) clamp(1rem,4vw,1.5rem)', background: 'linear-gradient(to bottom, #000, rgba(40,0,60,0.4), #000)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 'min(700px,100vw)', height: '500px', background: 'radial-gradient(ellipse, rgba(124,58,237,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>

        <div className="fade-in-up" style={{ marginBottom: 'clamp(2rem,4vw,3.5rem)' }}>
          <p style={{ fontFamily: 'monospace', fontSize: '0.65rem', color: 'rgba(168,85,247,0.6)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }}>● Étude de cas</p>
          <h2 style={{ fontSize: 'clamp(1.75rem,5vw,3.5rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.035em', lineHeight: 1.05, marginBottom: '0.75rem' }}>
            On l'a fait pour ProNett.{' '}
            <span style={{ background: 'linear-gradient(to right, #a855f7, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>On peut le faire pour vous.</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.85rem', fontFamily: 'monospace', letterSpacing: '0.06em' }}>Nettoyage de hottes · Grand Montréal · 30 jours</p>
        </div>

        <div className="fade-in-up" style={{ background: 'rgba(6,3,15,0.97)', border: '1px solid rgba(168,85,247,0.18)', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 0 100px -20px rgba(124,58,237,0.2)', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(168,85,247,0.5), rgba(245,158,11,0.3), transparent)' }} />

          {/* Card header */}
          <div style={{ padding: 'clamp(1.5rem,3vw,2.25rem) clamp(1.25rem,3vw,2.5rem)', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'linear-gradient(to bottom, rgba(124,58,237,0.07), transparent)' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '3px 12px', background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.25)', borderRadius: '999px', fontFamily: 'monospace', fontSize: '0.58rem', color: '#a855f7', letterSpacing: '0.15em', marginBottom: '0.875rem' }}>
                  ● ÉTUDE DE CAS #001
                </div>
                <h3 style={{ fontSize: 'clamp(1.25rem,3vw,2rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.025em', marginBottom: '0.25rem' }}>ProNett</h3>
                <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.8rem', fontFamily: 'monospace', letterSpacing: '0.06em' }}>Nettoyage de hottes · Grand Montréal · 30 jours</p>
              </div>
              <div style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.12), rgba(245,158,11,0.04))', border: '1px solid rgba(245,158,11,0.35)', borderRadius: '16px', padding: 'clamp(0.75rem,2vw,1.125rem) clamp(1rem,2.5vw,1.5rem)', textAlign: 'center', flexShrink: 0, boxShadow: '0 0 30px -10px rgba(245,158,11,0.3)' }}>
                <div style={{ fontSize: 'clamp(1.75rem,4vw,2.5rem)', fontWeight: 800, color: '#f59e0b', lineHeight: 1, letterSpacing: '-0.03em' }}>39x</div>
                <div style={{ fontSize: '0.6rem', color: 'rgba(245,158,11,0.5)', fontFamily: 'monospace', letterSpacing: '0.12em', marginTop: '4px' }}>ROI</div>
              </div>
            </div>
            <p style={{ fontSize: 'clamp(0.875rem,2vw,1rem)', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginTop: '1.25rem', maxWidth: '580px', fontStyle: 'italic' }}>
              "Ils sont passés de zéro publicité à 7 500 $+ de revenus en 30 jours. Les no-shows sont passés de 25% à 5%. Ils bookent 3x plus de rendez-vous avec la même équipe."
            </p>
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '0 clamp(1.25rem,3vw,2.5rem)', overflowX: 'auto' }}>
            {[{ id: 'resultats', label: 'Résultats' }, { id: 'situation', label: 'La situation' }].map(t => (
              <button key={t.id} onClick={() => setTab(t.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '1rem clamp(0.875rem,2vw,1.25rem)', fontFamily: 'monospace', fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: tab === t.id ? '#a855f7' : 'rgba(255,255,255,0.25)', borderBottom: tab === t.id ? '2px solid #a855f7' : '2px solid transparent', marginBottom: '-1px', transition: 'color 0.2s', whiteSpace: 'nowrap' }}>{t.label}</button>
            ))}
          </div>

          <div style={{ padding: 'clamp(1.5rem,3vw,2rem) clamp(1.25rem,3vw,2.5rem)' }}>
            {tab === 'resultats' && (
              <div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(255,255,255,0.04)', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)', marginBottom: '1.25rem' }}>
                  {stats.map((s, i) => (
                    <div key={i} style={{ background: 'rgba(6,3,15,0.9)', padding: 'clamp(1rem,2.5vw,1.375rem) clamp(0.75rem,2vw,1.125rem)', textAlign: 'center', position: 'relative', overflow: 'hidden', borderRight: i % 3 !== 2 ? '1px solid rgba(255,255,255,0.04)' : 'none', borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.04)' : 'none', transition: 'background 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.background = 'rgba(20,8,35,0.98)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'rgba(6,3,15,0.9)'}
                    >
                      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: `linear-gradient(to right, transparent, ${s.color}50, transparent)` }} />
                      <div style={{ fontSize: 'clamp(1rem,3vw,1.75rem)', fontWeight: 800, color: s.color, lineHeight: 1, marginBottom: '0.35rem', letterSpacing: '-0.02em' }}>{s.value}</div>
                      <div style={{ fontSize: 'clamp(0.55rem,1.2vw,0.65rem)', color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</div>
                    </div>
                  ))}
                </div>
                <div style={{ background: 'rgba(245,158,11,0.04)', border: '1px solid rgba(245,158,11,0.12)', borderRadius: '12px', padding: 'clamp(1rem,2.5vw,1.25rem)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {[{ val: '186 $', sub: 'investis' }, '→', { val: '33 leads', sub: 'générés' }, '→', { val: '7+ clients', sub: 'fermés' }, '→', { val: '7 500 $+', sub: 'revenus', hi: true }].map((item, i) =>
                    item === '→'
                      ? <span key={i} style={{ color: 'rgba(255,255,255,0.15)', fontSize: '0.875rem' }}>→</span>
                      : <div key={i} style={{ textAlign: 'center' }}>
                          <div style={{ fontSize: 'clamp(0.875rem,2vw,1rem)', fontWeight: 700, color: item.hi ? '#f59e0b' : 'white' }}>{item.val}</div>
                          <div style={{ fontSize: '0.58rem', color: 'rgba(255,255,255,0.25)', fontFamily: 'monospace' }}>{item.sub}</div>
                        </div>
                  )}
                </div>
              </div>
            )}
            {tab === 'situation' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { label: '● AVANT', title: 'Le point de départ', color: '#6b7280', content: "ProNett dépendait entièrement du bouche-à-oreille. Zéro publicité. Zéro système. Des leads manqués chaque semaine parce que personne ne répondait au téléphone. Des no-shows qui coûtaient des journées entières." },
                  { label: '● APRÈS', title: "Ce qu'on a déployé", color: '#a855f7', content: "Système IA complet : réponse automatique aux appels, qualification des leads, réservation directe dans le calendrier, rappels automatiques, collecte d'informations de paiement. Résultat : 33 leads, 7+ clients, 7 500 $+ en 30 jours." },
                ].map((block, i) => (
                  <div key={i} style={{ padding: 'clamp(1.125rem,2.5vw,1.5rem)', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '14px', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '2px', background: block.color, opacity: 0.4 }} />
                    <p style={{ fontFamily: 'monospace', fontSize: '0.58rem', color: block.color, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{block.label}</p>
                    <h4 style={{ color: 'white', fontWeight: 700, fontSize: 'clamp(0.875rem,2vw,0.95rem)', marginBottom: '0.625rem' }}>{block.title}</h4>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 'clamp(0.825rem,1.8vw,0.875rem)', lineHeight: 1.75 }}>{block.content}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* CTA footer */}
          <div style={{ padding: 'clamp(1.25rem,2.5vw,1.5rem) clamp(1.25rem,3vw,2.5rem)', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', background: 'rgba(0,0,0,0.4)' }}>
            <div>
              <p style={{ color: 'white', fontWeight: 600, fontSize: 'clamp(0.875rem,2vw,0.95rem)', marginBottom: '0.2rem' }}>Votre compagnie pourrait être la prochaine.</p>
              <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.78rem', fontFamily: 'monospace' }}>20 minutes pour voir combien vous perdez par semaine.</p>
            </div>
            <a href="#contact" style={{ padding: 'clamp(0.625rem,1.5vw,0.75rem) clamp(1.25rem,2.5vw,1.625rem)', background: 'linear-gradient(135deg, #7c3aed, #6d28d9)', borderRadius: '999px', color: 'white', fontWeight: 700, fontSize: 'clamp(0.8rem,1.8vw,0.875rem)', textDecoration: 'none', whiteSpace: 'nowrap', boxShadow: '0 0 24px -6px rgba(124,58,237,0.5)', transition: 'transform 0.2s, box-shadow 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 0 36px -4px rgba(124,58,237,0.7)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 0 24px -6px rgba(124,58,237,0.5)'; }}
            >Réserver mon appel →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
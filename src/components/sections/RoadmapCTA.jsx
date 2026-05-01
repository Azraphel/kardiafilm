// components/sections/RoadmapCTA.jsx
import React from 'react';
import { Rev } from '../../hooks/useReveal';

const points = [
  'Les 3 canaux d\'acquisition que les compagnies à 50K$/mois maîtrisent tous',
  'Pourquoi 80% des leads ne reçoivent jamais de rappel — et comment corriger ça',
  'Le Système Kardia exact pour répondre en moins de 5 minutes, 24h/24',
  'Comment passer de 10K à 50K$/mois sans embaucher',
];

const RoadmapCTA = () => (
  <section style={{
    background: 'var(--dark2)',
    padding: 'clamp(80px,10vw,130px) clamp(20px,5vw,80px)',
    position: 'relative', overflow: 'hidden',
  }}>
    {/* Glows */}
    <div style={{ position: 'absolute', left: '-60px', top: '10%', width: '500px', height: '500px', background: 'radial-gradient(ellipse, rgba(124,58,237,.09) 0%, transparent 65%)', pointerEvents: 'none' }} />
    <div style={{ position: 'absolute', right: '-60px', bottom: '10%', width: '400px', height: '400px', background: 'radial-gradient(ellipse, rgba(245,158,11,.05) 0%, transparent 65%)', pointerEvents: 'none' }} />

    <div style={{ maxWidth: '1040px', margin: '0 auto' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'clamp(280px,48%,520px) 1fr',
        gap: 'clamp(40px,7vw,100px)',
        alignItems: 'center',
      }}>

        {/* Gauche — texte */}
        <div>
          <Rev>
            <div className="kg-tag">Ressource gratuite</div>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(28px,4.5vw,54px)', lineHeight: 1.06, letterSpacing: '-.025em', marginBottom: '20px' }}>
              De 10K à 50K$/mois.<br />
              <em style={{ color: 'rgba(255,255,255,.35)' }}>Le roadmap complet.</em>
            </h2>
            <p style={{ fontSize: 'clamp(14px,1.8vw,16px)', color: 'rgba(255,255,255,.45)', lineHeight: 1.8, fontWeight: 300, marginBottom: '28px' }}>
              Les 3 canaux d'acquisition que les compagnies de nettoyage les plus performantes au Québec maîtrisent — et comment les activer sans budget d'agence.
            </p>
          </Rev>

          <Rev delay={1}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
              {points.map((pt, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ width: '20px', height: '20px', flexShrink: 0, borderRadius: '50%', background: 'rgba(124,58,237,.15)', border: '1px solid rgba(124,58,237,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '1px' }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <p style={{ fontFamily: 'monospace', fontSize: 'clamp(11px,1.4vw,13px)', color: 'rgba(255,255,255,.6)', lineHeight: 1.6 }}>{pt}</p>
                </div>
              ))}
            </div>
          </Rev>

          <Rev delay={2}>
            <a href="/roadmap" className="btn-primary" style={{ fontSize: 'clamp(13px,1.6vw,15px)' }}>
              Accéder au roadmap gratuit →
            </a>
            <p style={{ fontFamily: 'monospace', fontSize: '10px', color: 'rgba(255,255,255,.2)', marginTop: '12px', letterSpacing: '.06em' }}>
              GRATUIT · AUCUNE CARTE REQUISE · ACCÈS IMMÉDIAT
            </p>
          </Rev>
        </div>

        {/* Droite — preview card du roadmap */}
        <Rev delay={1}>
          <a href="/roadmap" style={{ textDecoration: 'none', display: 'block' }}>
            <div style={{
              padding: '2px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, rgba(124,58,237,.6), rgba(245,158,11,.3), rgba(124,58,237,.1))',
              transition: 'transform .3s, box-shadow .3s',
              cursor: 'pointer',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 60px -15px rgba(124,58,237,.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ borderRadius: '14px', background: 'var(--dark3)', overflow: 'hidden', position: 'relative' }}>

                {/* Header de la card */}
                <div style={{ background: 'linear-gradient(135deg, rgba(124,58,237,.15), rgba(0,0,0,.3))', padding: 'clamp(20px,3vw,32px)', borderBottom: '1px solid rgba(255,255,255,.06)', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #7c3aed, #f59e0b)' }} />
                  <div style={{ fontFamily: 'monospace', fontSize: '9px', color: 'rgba(168,85,247,.5)', letterSpacing: '.15em', textTransform: 'uppercase', marginBottom: '10px' }}>
                    ● KARDIA GROWTH · ROADMAP
                  </div>
                  <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(18px,2.5vw,26px)', color: 'white', lineHeight: 1.2, letterSpacing: '-.02em', marginBottom: '8px' }}>
                    Les 3 canaux que les compagnies à 50K$/mois maîtrisent tous.
                  </h3>
                  <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'rgba(255,255,255,.25)', letterSpacing: '.04em' }}>
                    Nettoyage Commercial · Montréal
                  </p>
                </div>

                {/* Stats de la card */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
                  {[
                    { val: '80%', label: 'leads jamais rappelés' },
                    { val: '10x', label: 'moins de chances après 10min' },
                    { val: '<10%', label: 'font un vrai suivi' },
                  ].map((s, i) => (
                    <div key={i} style={{ padding: 'clamp(12px,2vw,18px) 10px', textAlign: 'center', borderRight: i < 2 ? '1px solid rgba(255,255,255,.06)' : 'none' }}>
                      <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(16px,2.5vw,24px)', color: '#f59e0b', lineHeight: 1, marginBottom: '4px' }}>{s.val}</div>
                      <div style={{ fontFamily: 'monospace', fontSize: '9px', color: 'rgba(255,255,255,.25)', lineHeight: 1.4 }}>{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Canaux */}
                <div style={{ padding: 'clamp(14px,2vw,20px)' }}>
                  {[
                    { num: '01', title: 'Outbound', badge: 'Capital : Zéro', badgeColor: '#4ade80' },
                    { num: '02', title: 'Crédibilité', badge: 'Capital : Faible', badgeColor: '#f59e0b' },
                    { num: '03', title: 'Publicité', badge: 'Capital : Moyen', badgeColor: '#f87171' },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 'clamp(8px,1.5vw,12px) clamp(10px,1.5vw,14px)', background: i % 2 === 0 ? 'rgba(255,255,255,.02)' : 'transparent', borderRadius: '4px', marginBottom: '2px', gap: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(16px,2vw,22px)', color: 'rgba(124,58,237,.25)', lineHeight: 1, flexShrink: 0 }}>{item.num}</span>
                        <span style={{ fontFamily: 'monospace', fontSize: 'clamp(11px,1.4vw,13px)', color: 'rgba(255,255,255,.6)', fontWeight: 700 }}>{item.title}</span>
                      </div>
                      <span style={{ fontFamily: 'monospace', fontSize: '9px', color: item.badgeColor, background: `${item.badgeColor}12`, border: `1px solid ${item.badgeColor}25`, padding: '3px 8px', borderRadius: '100px', whiteSpace: 'nowrap', flexShrink: 0 }}>
                        {item.badge}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Footer card */}
                <div style={{ padding: 'clamp(12px,2vw,16px) clamp(14px,2vw,20px)', background: 'rgba(124,58,237,.07)', borderTop: '1px solid rgba(124,58,237,.12)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '11px', color: 'rgba(168,85,247,.6)', letterSpacing: '.06em' }}>Accès gratuit · Lecture 8 min</span>
                  <span style={{ fontFamily: 'monospace', fontSize: '11px', color: '#a855f7', fontWeight: 700 }}>Lire →</span>
                </div>
              </div>
            </div>
          </a>
        </Rev>

      </div>
    </div>
  </section>
);

export default RoadmapCTA;
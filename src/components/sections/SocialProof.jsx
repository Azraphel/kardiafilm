// components/sections/SocialProof.jsx
// Images : copie proof1.png, proof2.png, proof3.png dans public/images/proof/

import React, { useEffect, useRef } from 'react';

const SocialProof = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.fade-in-up');
    if (!els) return;
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
      }),
      { threshold: 0.08 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={{
      padding: 'clamp(4rem,8vw,8rem) clamp(1rem,4vw,1.5rem)',
      background: 'linear-gradient(to bottom, #000, #080318, #000)',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div className="fade-in-up" style={{ marginBottom: 'clamp(2.5rem,5vw,4rem)', maxWidth: '620px' }}>
          <p style={{ fontFamily: 'monospace', fontSize: '0.65rem', color: 'rgba(168,85,247,0.6)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }}>
            ● Preuves sociales
          </p>
          <h2 style={{ fontSize: 'clamp(1.75rem,5vw,3.25rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', lineHeight: 1.08, marginBottom: '1rem' }}>
            Des vrais résultats.{' '}
            <span style={{ background: 'linear-gradient(to right, #a855f7, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Des vrais clients.
            </span>
          </h2>
          <p style={{ fontSize: 'clamp(0.9rem,2vw,1.05rem)', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75 }}>
            Ce que nos clients voient pendant qu'ils sont sur un chantier — ou qu'ils dorment.
          </p>
        </div>

        {/* Grille de preuves */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(1rem,2.5vw,1.5rem)',
          alignItems: 'start',
        }}>

          {/* Proof 1 — Conversation IA + RDV confirmé */}
          <div className="fade-in-up" style={{ transitionDelay: '0ms' }}>
            <div style={{
              background: '#100d22',
              border: '1px solid rgba(168,85,247,0.2)',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px -15px rgba(0,0,0,0.5)',
            }}>
              {/* Label */}
              <div style={{
                padding: '0.875rem 1.25rem',
                background: '#180d38',
                borderBottom: '1px solid rgba(168,85,247,0.15)',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#a855f7', boxShadow: '0 0 6px #a855f7', flexShrink: 0 }} />
                <span style={{ fontSize: '0.7rem', fontFamily: 'monospace', color: '#a855f7', letterSpacing: '0.1em', fontWeight: 600 }}>
                  RDV confirmé automatiquement
                </span>
              </div>
              {/* Screenshot */}
              <img
                src="/img/proof/proof1.png"
                alt="Conversation IA — RDV confirmé avec Linda"
                style={{ width: '100%', display: 'block' }}
              />
              {/* Tag bas */}
              <div style={{ padding: '0.875rem 1.25rem', background: '#180d38', borderTop: '1px solid rgba(168,85,247,0.1)' }}>
                <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, margin: 0 }}>
                  L'IA confirme le RDV, collecte le numéro de téléphone et envoie un récapitulatif — sans intervention humaine.
                </p>
              </div>
            </div>
          </div>

          {/* Proof 2 — "3 soumissions pr demain" */}
          <div className="fade-in-up" style={{ transitionDelay: '80ms', marginTop: 'clamp(1rem,3vw,2rem)' }}>
            <div style={{
              background: '#100d22',
              border: '1px solid rgba(245,158,11,0.2)',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px -15px rgba(0,0,0,0.5)',
            }}>
              {/* Label */}
              <div style={{
                padding: '0.875rem 1.25rem',
                background: '#1c1608',
                borderBottom: '1px solid rgba(245,158,11,0.15)',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f59e0b', boxShadow: '0 0 6px #f59e0b', flexShrink: 0 }} />
                <span style={{ fontSize: '0.7rem', fontFamily: 'monospace', color: '#f59e0b', letterSpacing: '0.1em', fontWeight: 600 }}>
                  3 soumissions bookées en une journée
                </span>
              </div>
              {/* Screenshot */}
              <img
                src="/img/proof/proof3.png"
                alt="Texto — 3 soumissions pour demain"
                style={{ width: '100%', display: 'block' }}
              />
              {/* Tag bas */}
              <div style={{ padding: '0.875rem 1.25rem', background: '#1c1608', borderTop: '1px solid rgba(245,158,11,0.1)' }}>
                <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, margin: 0 }}>
                  "Donc 3 soumissions pr demain" — pendant que le client était sur un chantier.
                </p>
              </div>
            </div>
          </div>

          {/* Proof 3 — Résultats Meta Ads */}
          <div className="fade-in-up" style={{ transitionDelay: '160ms' }}>
            <div style={{
              background: '#100d22',
              border: '1px solid rgba(168,85,247,0.2)',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px -15px rgba(0,0,0,0.5)',
            }}>
              {/* Label */}
              <div style={{
                padding: '0.875rem 1.25rem',
                background: '#180d38',
                borderBottom: '1px solid rgba(168,85,247,0.15)',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#a855f7', boxShadow: '0 0 6px #a855f7', flexShrink: 0 }} />
                <span style={{ fontSize: '0.7rem', fontFamily: 'monospace', color: '#a855f7', letterSpacing: '0.1em', fontWeight: 600 }}>
                  Résultats Meta Ads — coût 51% sous la moyenne
                </span>
              </div>

              {/* Stats extraites visuellement — pas toute la table */}
              <div style={{ padding: '1.5rem', background: '#0d0a1c' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
                  {[
                    { val: '51%', label: 'sous la moyenne', sub: 'coût par résultat', color: '#a855f7' },
                    { val: '178',  label: 'leads générés',   sub: 'via formulaire',    color: '#f59e0b' },
                    { val: '6,79$', label: 'par lead',       sub: 'coût moyen',        color: '#a855f7' },
                    { val: '233',  label: 'clics totaux',    sub: 'sur les annonces',  color: '#f59e0b' },
                  ].map((s, i) => (
                    <div key={i} style={{
                      background: '#180d38',
                      border: `1px solid ${s.color}20`,
                      borderRadius: '12px',
                      padding: '0.875rem',
                      position: 'relative', overflow: 'hidden',
                    }}>
                      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: `linear-gradient(to right, ${s.color}40, transparent)` }} />
                      <div style={{ fontSize: 'clamp(1.25rem,2.5vw,1.6rem)', fontWeight: 800, color: s.color, lineHeight: 1, marginBottom: '0.2rem' }}>{s.val}</div>
                      <div style={{ fontSize: '0.75rem', color: 'white', fontWeight: 600, marginBottom: '0.1rem' }}>{s.label}</div>
                      <div style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>{s.sub}</div>
                    </div>
                  ))}
                </div>

                {/* Notification Meta screenshot — juste le haut */}
                <div style={{
                  borderRadius: '12px', overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}>
                  <img
                    src="/img/proof/proof2.png"
                    alt="Notifications Meta Ads — performing well"
                    style={{ width: '100%', display: 'block', maxHeight: '200px', objectFit: 'cover', objectPosition: 'top' }}
                  />
                </div>
              </div>

              {/* Tag bas */}
              <div style={{ padding: '0.875rem 1.25rem', background: '#180d38', borderTop: '1px solid rgba(168,85,247,0.1)' }}>
                <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, margin: 0 }}>
                  Meta confirme : coût par résultat 51% sous les concurrents. Les leads arrivent à moins de 7$ chacun.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="fade-in-up" style={{ marginTop: 'clamp(3rem,6vw,5rem)', textAlign: 'center' }}>
          <p style={{ fontSize: 'clamp(0.95rem,2vw,1.1rem)', color: 'rgba(255,255,255,0.55)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
            Votre téléphone pourrait faire la même chose — pendant que vous vous concentrez sur votre travail.
          </p>
          <a href="#contact" style={{
            display: 'inline-block',
            padding: 'clamp(0.875rem,2vw,1.125rem) clamp(1.75rem,4vw,2.5rem)',
            background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
            borderRadius: '999px', color: 'white',
            fontWeight: 700, fontSize: 'clamp(0.9rem,2vw,1rem)',
            textDecoration: 'none',
            boxShadow: '0 0 40px -8px rgba(124,58,237,0.55)',
            border: '1px solid rgba(168,85,247,0.3)',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 0 60px -6px rgba(124,58,237,0.75)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 0 40px -8px rgba(124,58,237,0.55)'; }}
          >
            Voir si ça marche pour moi →
          </a>
        </div>

      </div>
    </section>
  );
};

export default SocialProof;
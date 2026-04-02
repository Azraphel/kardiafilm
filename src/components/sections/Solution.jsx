// components/sections/Solution.jsx
import React, { useEffect, useRef } from 'react';

const IconPhone    = ({ color }) => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.1 1.18 2 2 0 012.08 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.46-.46a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>);
const IconCheck    = ({ color }) => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>);
const IconCalendar = ({ color }) => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>);
const IconCpu      = ({ color }) => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>);
const IconX        = ({ color }) => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>);
const IconMoon     = ({ color }) => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>);
const IconClock    = ({ color }) => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>);

const gains = [
  {
    beforeIcon: <IconPhone color="#f87171"/>,
    afterIcon:  <IconPhone color="#a855f7"/>,
    before: "Vous manquez un appel. Le client est déjà chez votre compétiteur.",
    after:  "L'IA répond en 2 secondes. Le client est qualifié et réservé — pendant que vous travaillez.",
    gain: '+1 contrat capturé', gainColor: '#a855f7',
  },
  {
    beforeIcon: <IconX color="#f87171"/>,
    afterIcon:  <IconCheck color="#f59e0b"/>,
    before: "Un no-show. Votre équipe s'est déplacée pour rien.",
    after:  "Un dépôt collecté à la réservation. Le client est engagé. Les no-shows tombent sous 5%.",
    gain: 'Journées prévisibles', gainColor: '#f59e0b',
  },
  {
    beforeIcon: <IconMoon color="#f87171"/>,
    afterIcon:  <IconCalendar color="#a855f7"/>,
    before: "Un lead à 21h. Vous dormez. Le lendemain, il a signé ailleurs.",
    after:  "L'IA répond, qualifie et réserve. Le matin, le RDV est dans votre calendrier.",
    gain: '0 lead perdu la nuit', gainColor: '#a855f7',
  },
  {
    beforeIcon: <IconClock color="#f87171"/>,
    afterIcon:  <IconCpu color="#f59e0b"/>,
    before: "Encore les mêmes questions. Prix, zones, disponibilités. Votre temps part en fumée.",
    after:  "L'IA gère toutes les questions de base. Vous parlez seulement aux clients prêts à signer.",
    gain: '2-3h récupérées / jour', gainColor: '#f59e0b',
  },
];

const Solution = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.fade-in-up');
    if (!els) return;
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }),
      { threshold: 0.08 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={{
      padding: 'clamp(4rem,8vw,8rem) clamp(1rem,4vw,1.5rem)',
      background: 'linear-gradient(to bottom, #000, #0a0318, #000)',
    }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>

        {/* Header */}
        <div className="fade-in-up" style={{ marginBottom: 'clamp(2.5rem,5vw,4rem)', maxWidth: '680px' }}>
          <p style={{ fontFamily: 'monospace', fontSize: '0.65rem', color: 'rgba(168,85,247,0.6)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }}>
            ● Ce que ça change concrètement
          </p>
          <h2 style={{ fontSize: 'clamp(1.75rem,5vw,3.25rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', lineHeight: 1.08, marginBottom: '1rem' }}>
            Avant le système.{' '}
            <span style={{ background: 'linear-gradient(to right, #a855f7, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Après le système.
            </span>
          </h2>
          <p style={{ fontSize: 'clamp(0.95rem,2vw,1.05rem)', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75 }}>
            Des changements concrets dans votre quotidien.
          </p>
        </div>

        {/* Gains */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {gains.map((g, i) => (
            <div key={i} className="fade-in-up" style={{ transitionDelay: `${i * 70}ms` }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '0',
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.08)',
              }}>

                {/* Avant */}
                <div style={{
                  background: '#16101a',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  padding: 'clamp(1.25rem,2.5vw,1.75rem)',
                  display: 'flex', gap: '1rem', alignItems: 'flex-start',
                }}>
                  <div style={{
                    width: '40px', height: '40px', flexShrink: 0,
                    borderRadius: '10px',
                    background: 'rgba(248,113,113,0.1)',
                    border: '1px solid rgba(248,113,113,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {g.beforeIcon}
                  </div>
                  <div>
                    <p style={{
                      fontSize: '0.6rem', fontFamily: 'monospace',
                      color: '#f87171', letterSpacing: '0.1em',
                      textTransform: 'uppercase', marginBottom: '0.4rem',
                      fontWeight: 600,
                    }}>
                      Avant
                    </p>
                    <p style={{
                      fontSize: 'clamp(0.875rem,2vw,0.975rem)',
                      color: 'rgba(255,255,255,0.75)',
                      lineHeight: 1.7, margin: 0,
                    }}>
                      {g.before}
                    </p>
                  </div>
                </div>

                {/* Après */}
                <div style={{
                  background: '#100d22',
                  padding: 'clamp(1.25rem,2.5vw,1.75rem)',
                  display: 'flex', gap: '1rem', alignItems: 'flex-start',
                  position: 'relative', overflow: 'hidden',
                }}>
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                    background: `linear-gradient(to right, ${g.gainColor}60, transparent)`,
                  }} />
                  <div style={{
                    width: '40px', height: '40px', flexShrink: 0,
                    borderRadius: '10px',
                    background: `${g.gainColor}18`,
                    border: `1px solid ${g.gainColor}35`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {g.afterIcon}
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem', flexWrap: 'wrap' }}>
                      <p style={{
                        fontSize: '0.6rem', fontFamily: 'monospace',
                        color: g.gainColor, letterSpacing: '0.1em',
                        textTransform: 'uppercase', margin: 0,
                        fontWeight: 600,
                      }}>
                        Après
                      </p>
                      <span style={{
                        fontSize: '0.58rem', fontFamily: 'monospace',
                        color: g.gainColor, letterSpacing: '0.06em',
                        background: `${g.gainColor}15`,
                        border: `1px solid ${g.gainColor}25`,
                        padding: '1px 8px', borderRadius: '999px',
                      }}>
                        {g.gain}
                      </span>
                    </div>
                    <p style={{
                      fontSize: 'clamp(0.875rem,2vw,0.975rem)',
                      color: 'rgba(255,255,255,0.9)',
                      lineHeight: 1.7, margin: 0,
                    }}>
                      {g.after}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="fade-in-up" style={{
          marginTop: 'clamp(2.5rem,5vw,3.5rem)',
          background: '#130830',
          border: '1px solid rgba(124,58,237,0.25)',
          borderRadius: '20px',
          padding: 'clamp(1.5rem,3vw,2.5rem)',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem', flexWrap: 'wrap',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(168,85,247,0.5), transparent)' }} />
          <div style={{ maxWidth: '520px' }}>
            <p style={{ fontSize: 'clamp(1rem,2.5vw,1.15rem)', color: 'white', fontWeight: 700, lineHeight: 1.5, marginBottom: '0.5rem' }}>
              Votre compétition répond déjà en moins de 2 minutes.
            </p>
            <p style={{ fontSize: 'clamp(0.85rem,2vw,0.95rem)', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, margin: 0 }}>
              La question c'est pas si vous avez besoin d'un système. C'est combien de contrats vous attendez de perdre avant de le mettre en place.
            </p>
          </div>
          <a href="#contact" style={{
            display: 'inline-block',
            padding: 'clamp(0.875rem,2vw,1rem) clamp(1.5rem,3vw,1.875rem)',
            background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
            borderRadius: '999px', color: 'white',
            fontWeight: 700, fontSize: 'clamp(0.875rem,2vw,0.95rem)',
            textDecoration: 'none', whiteSpace: 'nowrap',
            boxShadow: '0 0 30px -8px rgba(124,58,237,0.55)',
            transition: 'transform 0.2s, box-shadow 0.2s', flexShrink: 0,
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 0 44px -6px rgba(124,58,237,0.75)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 0 30px -8px rgba(124,58,237,0.55)'; }}
          >
            Je veux ce système →
          </a>
        </div>

      </div>
    </section>
  );
};

export default Solution;
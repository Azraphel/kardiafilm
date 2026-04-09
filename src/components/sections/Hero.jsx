// components/sections/Hero.jsx
import React, { useEffect, useRef } from 'react';

const useFadeIn = () => {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-in-up');
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
      }),
      { threshold: 0.1 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

// Icônes des canaux
const channels = [
  { label: 'Appels' },
  { label: 'SMS' },
  { label: 'Facebook' },
  { label: 'Instagram' },
  { label: 'Google' },
  { label: 'Email' },
];

const Hero = () => {
  useFadeIn();

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
      padding: 'clamp(6rem,12vw,9rem) clamp(1rem,4vw,1.5rem) clamp(3rem,6vw,5rem)',
    }}>

      {/* Vidéo de fond */}
      <video autoPlay muted loop playsInline style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}>
        <source src="/vid/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.35) 40%, rgba(0,0,0,0.7) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(0,0,0,0.55) 100%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', backgroundImage: `linear-gradient(rgba(168,85,247,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.04) 1px, transparent 1px)`, backgroundSize: '64px 64px' }} />

      {/* Contenu */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '860px', width: '100%', textAlign: 'center' }}>

        {/* Badge */}
        <div className="fade-in-up" style={{ transitionDelay: '0ms' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.375rem clamp(0.75rem,2vw,1.125rem)',
            background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.4)',
            borderRadius: '999px', marginBottom: 'clamp(1.5rem,4vw,2.5rem)',
            backdropFilter: 'blur(12px)',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#a855f7', display: 'inline-block', boxShadow: '0 0 8px #a855f7', flexShrink: 0 }} />
            <span style={{ fontSize: 'clamp(0.6rem,1.5vw,0.72rem)', color: '#c084fc', fontFamily: 'monospace', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Compagnies de nettoyage · Québec
            </span>
          </div>
        </div>

        {/* Titre */}
        <div className="fade-in-up" style={{ transitionDelay: '80ms' }}>
          <h1 style={{ fontSize: 'clamp(1.875rem,6vw,4.5rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.035em', marginBottom: 0 }}>
            <span style={{ display: 'block', background: 'linear-gradient(to right, #c084fc, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              30 à 40% de rendez-vous de plus.
            </span>
            <span style={{ display: 'block', color: 'white' }}>Zéro employé supplémentaire.</span>
            <span style={{ display: 'block', background: 'linear-gradient(to right, #f59e0b, #f97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Opérationnel en 7 jours.
            </span>
          </h1>
        </div>

        {/* Sous-titre */}
        <div className="fade-in-up" style={{ transitionDelay: '160ms' }}>
          <p style={{ fontSize: 'clamp(0.95rem,2.5vw,1.2rem)', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, maxWidth: '600px', margin: 'clamp(1.25rem,3vw,2rem) auto 0' }}>
            On installe un réceptionniste IA dans votre compagnie de nettoyage. Il répond à tous vos messages — appels, SMS, emails, Facebook, Instagram et Google — 24h/24, 7j/7.
          </p>
        </div>

        {/* Canaux */}
        <div className="fade-in-up" style={{ transitionDelay: '220ms', marginTop: 'clamp(1.25rem,3vw,2rem)' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem' }}>
            {channels.map((c, i) => (
              <div key={i} style={{
                padding: '0.3rem 0.875rem',
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '999px',
                backdropFilter: 'blur(8px)',
                fontSize: 'clamp(0.65rem,1.5vw,0.75rem)',
                color: 'rgba(255,255,255,0.7)',
                fontFamily: 'monospace', letterSpacing: '0.06em',
              }}>
                {c.label}
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="fade-in-up" style={{ transitionDelay: '280ms', display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: 'clamp(1.75rem,4vw,2.5rem)' }}>
          <a href="#contact" style={{
            padding: 'clamp(0.875rem,2vw,1.125rem) clamp(1.5rem,4vw,2.25rem)',
            background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
            borderRadius: '999px', color: 'white', fontWeight: 700,
            fontSize: 'clamp(0.875rem,2vw,1rem)', textDecoration: 'none',
            boxShadow: '0 0 40px -8px rgba(124,58,237,0.7)',
            border: '1px solid rgba(168,85,247,0.3)',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 0 60px -6px rgba(124,58,237,0.9)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 0 40px -8px rgba(124,58,237,0.7)'; }}
          >
            Voir si ça marche pour moi →
          </a>
          <a href="#etude-de-cas" style={{
            padding: 'clamp(0.875rem,2vw,1.125rem) clamp(1.5rem,4vw,2.25rem)',
            background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '999px', color: 'white', fontWeight: 600,
            fontSize: 'clamp(0.875rem,2vw,1rem)', textDecoration: 'none',
            backdropFilter: 'blur(12px)', transition: 'border-color 0.2s, background 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(168,85,247,0.5)'; e.currentTarget.style.background = 'rgba(168,85,247,0.12)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
          >
            Voir les résultats ProNett
          </a>
        </div>

        {/* Stats */}
        <div className="fade-in-up" style={{ transitionDelay: '360ms', marginTop: 'clamp(2.5rem,5vw,4rem)' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '16px', overflow: 'hidden', backdropFilter: 'blur(16px)',
            maxWidth: '540px', margin: '0 auto',
          }}>
            {[
              { val: '39x',      sub: 'ROI · ProNett' },
              { val: '25%→5%',   sub: 'no-shows' },
              { val: '7 500 $+', sub: 'en 30 jours' },
            ].map((item, i) => (
              <div key={i} style={{ padding: 'clamp(1rem,2.5vw,1.375rem) 0.75rem', textAlign: 'center', borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
                <div className="stat-shimmer" style={{ fontSize: 'clamp(0.95rem,2.5vw,1.35rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>{item.val}</div>
                <div style={{ fontSize: 'clamp(0.55rem,1.2vw,0.65rem)', color: 'rgba(255,255,255,0.45)', fontFamily: 'monospace', letterSpacing: '0.06em', marginTop: '0.2rem' }}>{item.sub}</div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.68rem', color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace', letterSpacing: '0.07em' }}>
            Résultats réels · ProNett · Grand Montréal · 30 jours
          </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;
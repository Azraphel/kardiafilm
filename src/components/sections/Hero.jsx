// components/sections/Hero.jsx
import React, { useEffect, useRef, useState } from 'react';

function useCounter(n, dur = 1800, active = false) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!active) return;
    let t0 = null;
    const tick = ts => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / dur, 1);
      setV(Math.round(n * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, n, dur]);
  return v;
}

const channels = ['Appels', 'SMS', 'Facebook', 'Instagram', 'Google', 'Email'];

const StatItem = ({ val, label, active, isString }) => {
  const num = isString ? 0 : parseInt(val);
  const suffix = isString ? '' : val.replace(/[0-9]/g, '');
  const counted = useCounter(num, 1600, active);
  return (
    <div style={{ textAlign: 'center', padding: '0 clamp(12px,2vw,28px)' }}>
      <div style={{
        fontFamily: "'DM Serif Display', serif",
        fontSize: 'clamp(28px,4vw,52px)',
        lineHeight: 1, letterSpacing: '-.03em',
        background: 'linear-gradient(to right, #c084fc, #f59e0b)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
      }}>
        {isString ? val : `${counted}${suffix}`}
      </div>
      <div style={{ fontFamily: 'monospace', fontSize: '11px', color: 'rgba(255,255,255,.3)', marginTop: '6px', lineHeight: 1.45 }}>{label}</div>
    </div>
  );
};

const Hero = () => {
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const [revealIdx, setRevealIdx] = useState(0);

  useEffect(() => {
    // Staggered reveal
    const timers = [0, 100, 200, 320, 440].map((delay, i) =>
      setTimeout(() => setRevealIdx(i + 1), delay + 200)
    );

    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setStatsVisible(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    if (statsRef.current) obs.observe(statsRef.current);

    return () => { timers.forEach(clearTimeout); obs.disconnect(); };
  }, []);

  const rev = (i) => ({
    opacity: revealIdx >= i ? 1 : 0,
    transform: revealIdx >= i ? 'translateY(0)' : 'translateY(28px)',
    transition: 'opacity .7s ease, transform .7s ease',
  });

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      textAlign: 'center',
      padding: 'clamp(100px,12vw,140px) clamp(20px,5vw,80px) clamp(60px,8vw,100px)',
      position: 'relative', overflow: 'hidden',
      background: 'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(124,58,237,.13) 0%, transparent 70%), #060608',
    }}>

      {/* Vidéo de fond */}
      <video autoPlay muted loop playsInline style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        objectFit: 'cover', zIndex: 0, opacity: .18,
      }}>
        <source src="/vid/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'radial-gradient(ellipse 70% 70% at 50% 50%, transparent 30%, rgba(6,6,8,.9) 100%)' }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, backgroundImage: `linear-gradient(rgba(124,58,237,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,.04) 1px, transparent 1px)`, backgroundSize: '72px 72px', pointerEvents: 'none' }} />

      {/* Watermark */}
      <div style={{ position: 'absolute', bottom: '-40px', left: '50%', transform: 'translateX(-50%)', fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(200px,30vw,480px)', color: 'rgba(124,58,237,.028)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none', letterSpacing: '-.05em', zIndex: 1, whiteSpace: 'nowrap' }}>
        IA
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '900px', width: '100%' }}>

        <div style={rev(1)}>
          <div className="kg-tag" style={{ margin: '0 auto 28px' }}>
            Compagnies de nettoyage · Québec
          </div>
        </div>

        <div style={rev(2)}>
          <h1 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 'clamp(38px,7vw,88px)',
            lineHeight: 1.02, letterSpacing: '-.025em',
            marginBottom: '24px',
          }}>
            <span style={{ display: 'block', color: 'white' }}>30 à 40% de rendez-vous de plus.</span>
            <span style={{ display: 'block', color: 'rgba(255,255,255,.45)', fontStyle: 'italic' }}>Zéro employé supplémentaire.</span>
            <span style={{ display: 'block', background: 'linear-gradient(to right, #f59e0b, #f97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Opérationnel en 7 jours.
            </span>
          </h1>
        </div>

        <div style={rev(3)}>
          <p style={{
            fontSize: 'clamp(15px,2vw,18px)',
            color: 'rgba(255,255,255,.4)',
            maxWidth: '560px', margin: '0 auto 16px',
            lineHeight: 1.78, fontWeight: 300,
          }}>
            On installe un réceptionniste IA dans votre compagnie. Il répond à tous vos messages — 24h/24, 7j/7.
          </p>
          {/* Channels */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', marginBottom: '40px' }}>
            {channels.map((c, i) => (
              <span key={i} style={{
                fontFamily: 'monospace', fontSize: '11px',
                color: 'rgba(255,255,255,.5)',
                background: 'rgba(255,255,255,.06)',
                border: '1px solid rgba(255,255,255,.1)',
                padding: '4px 12px', borderRadius: '100px',
              }}>{c}</span>
            ))}
          </div>
        </div>

        <div style={rev(4)}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: 'clamp(48px,7vw,80px)' }}>
            <a href="#contact" className="btn-primary">Voir si ça marche pour moi →</a>
            <a href="#etude-de-cas" className="btn-ghost">Voir les résultats ProNett</a>
          </div>
        </div>

        {/* Stats */}
        <div ref={statsRef} style={rev(5)}>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            background: 'rgba(255,255,255,.03)',
            border: '1px solid rgba(255,255,255,.08)',
            borderRadius: '12px', overflow: 'hidden',
            backdropFilter: 'blur(20px)',
            maxWidth: '560px', margin: '0 auto',
            position: 'relative',
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(124,58,237,.5), rgba(245,158,11,.3), transparent)' }} />
            {[
              { val: '39x',    label: 'ROI · ProNett', isString: true },
              { val: '25%',    label: 'no-shows → 5%' },
              { val: '7500$+', label: 'en 30 jours', isString: true },
            ].map((s, i) => (
              <div key={i} style={{ padding: 'clamp(18px,3vw,28px) 0', borderRight: i < 2 ? '1px solid rgba(255,255,255,.07)' : 'none' }}>
                <StatItem {...s} active={statsVisible} />
              </div>
            ))}
          </div>
          <p style={{ fontFamily: 'monospace', fontSize: '10px', color: 'rgba(255,255,255,.2)', marginTop: '12px', letterSpacing: '.06em' }}>
            Résultats réels · ProNett · Grand Montréal · 30 jours
          </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;
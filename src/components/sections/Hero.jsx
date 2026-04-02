// components/sections/Hero.jsx
import React, { useEffect, useRef } from 'react';

const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);
    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      r: Math.random() * 1.4 + 0.3, vx: (Math.random() - 0.5) * 0.2, vy: (Math.random() - 0.5) * 0.2,
      alpha: Math.random() * 0.3 + 0.08,
    }));
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168,85,247,${p.alpha})`; ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(124,58,237,${0.09 * (1 - dist / 100)})`; ctx.lineWidth = 0.5; ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} />;
};

const useFadeIn = () => {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-in-up');
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

const Hero = () => {
  useFadeIn();
  return (
    <section className="hero-gradient-bg" style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
      padding: 'clamp(6rem,12vw,9rem) clamp(1rem,4vw,1.5rem) clamp(3rem,6vw,5rem)',
    }}>
      <ParticleCanvas />
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: `linear-gradient(rgba(168,85,247,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.03) 1px, transparent 1px)`, backgroundSize: '64px 64px' }} />
      <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: 'min(900px,100vw)', height: '500px', background: 'radial-gradient(ellipse, rgba(124,58,237,0.15) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '860px', width: '100%', textAlign: 'center' }}>

        {/* Badge */}
        <div className="fade-in-up" style={{ transitionDelay: '0ms' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.375rem clamp(0.75rem,2vw,1.125rem)',
            background: 'rgba(124,58,237,0.1)', border: '1px solid rgba(124,58,237,0.3)',
            borderRadius: '999px', marginBottom: 'clamp(1.5rem,4vw,2.5rem)',
            backdropFilter: 'blur(8px)',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#a855f7', display: 'inline-block', boxShadow: '0 0 8px #a855f7', flexShrink: 0 }} />
            <span style={{ fontSize: 'clamp(0.6rem,1.5vw,0.72rem)', color: '#c084fc', fontFamily: 'monospace', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Réceptionniste IA · Nettoyage · Québec
            </span>
          </div>
        </div>

        {/* Titre — 3 promesses */}
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
          <p style={{ fontSize: 'clamp(0.95rem,2.5vw,1.2rem)', color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, maxWidth: '580px', margin: 'clamp(1.25rem,3vw,2rem) auto 0' }}>
            On installe un réceptionniste IA dans votre compagnie de nettoyage. Il répond aux appels, réserve les rendez-vous et collecte les dépôts — 24h/24, 7j/7.
          </p>
        </div>

        {/* CTAs */}
        <div className="fade-in-up" style={{ transitionDelay: '240ms', display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: 'clamp(1.75rem,4vw,2.5rem)' }}>
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
            background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '999px', color: '#e5e7eb', fontWeight: 600,
            fontSize: 'clamp(0.875rem,2vw,1rem)', textDecoration: 'none',
            backdropFilter: 'blur(8px)', transition: 'border-color 0.2s, background 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(168,85,247,0.4)'; e.currentTarget.style.background = 'rgba(168,85,247,0.07)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
          >
            Voir les résultats ProNett
          </a>
        </div>

        {/* Stats */}
        <div className="fade-in-up" style={{ transitionDelay: '320ms', marginTop: 'clamp(2.5rem,5vw,4rem)' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '16px', overflow: 'hidden', backdropFilter: 'blur(12px)',
            maxWidth: '540px', margin: '0 auto',
          }}>
            {[
              { val: '39x', sub: 'ROI · ProNett' },
              { val: '25%→5%', sub: 'no-shows' },
              { val: '7 500 $+', sub: 'en 30 jours' },
            ].map((item, i) => (
              <div key={i} style={{ padding: 'clamp(1rem,2.5vw,1.375rem) 0.75rem', textAlign: 'center', borderRight: i < 2 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                <div className="stat-shimmer" style={{ fontSize: 'clamp(0.95rem,2.5vw,1.35rem)', fontWeight: 800, letterSpacing: '-0.02em' }}>{item.val}</div>
                <div style={{ fontSize: 'clamp(0.55rem,1.2vw,0.65rem)', color: 'rgba(255,255,255,0.25)', fontFamily: 'monospace', letterSpacing: '0.06em', marginTop: '0.2rem' }}>{item.sub}</div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.68rem', color: 'rgba(255,255,255,0.18)', fontFamily: 'monospace', letterSpacing: '0.07em' }}>
            Résultats réels · ProNett · Grand Montréal · 30 jours
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
// components/sections/Contact.jsx
import React, { useEffect, useRef } from 'react';

const CALENDLY_URL = 'https://calendly.com/stephane-blue-ribbon/15min';

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!document.querySelector('script[src*="calendly"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);
    }
    const els = sectionRef.current?.querySelectorAll('.fade-in-up');
    if (!els) return;
    const observer = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }), { threshold: 0.06 });
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} style={{ padding: 'clamp(4rem,8vw,8rem) clamp(1rem,4vw,1.5rem)', background: 'linear-gradient(to bottom, #000, rgba(40,0,60,0.35), #000)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 'min(700px,100vw)', height: '350px', background: 'radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: '780px', margin: '0 auto', position: 'relative' }}>

        <div className="fade-in-up" style={{ textAlign: 'center', marginBottom: 'clamp(2rem,4vw,3rem)' }}>
          <p style={{ fontFamily: 'monospace', fontSize: '0.65rem', color: 'rgba(168,85,247,0.6)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }}>● Prochaine étape</p>
          <h2 style={{ fontSize: 'clamp(1.75rem,5vw,3rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.035em', lineHeight: 1.08, marginBottom: '1rem' }}>
            Découvrez exactement combien<br />vous perdez par semaine.
          </h2>
          <p style={{ fontSize: 'clamp(0.95rem,2vw,1.05rem)', color: 'rgba(255,255,255,0.35)', maxWidth: '460px', margin: '0 auto', lineHeight: 1.7 }}>
            20 minutes. On analyse votre situation. On vous dit si on peut vous aider — et si oui, combien vous pouvez récupérer.
          </p>
        </div>

        <div className="fade-in-up" style={{ transitionDelay: '60ms', display: 'flex', justifyContent: 'center', gap: 'clamp(1rem,3vw,2rem)', flexWrap: 'wrap', marginBottom: 'clamp(1.5rem,3vw,2.5rem)' }}>
          {['✓ Gratuit et sans engagement', '✓ Réponse honnête', '✓ 20 minutes max'].map((item, i) => (
            <span key={i} style={{ fontSize: 'clamp(0.72rem,1.8vw,0.82rem)', color: 'rgba(168,85,247,0.55)', fontFamily: 'monospace', letterSpacing: '0.04em' }}>{item}</span>
          ))}
        </div>

        <div className="fade-in-up" style={{ transitionDelay: '120ms' }}>
          <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(124,58,237,0.2)', boxShadow: '0 0 80px -20px rgba(124,58,237,0.25)', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(168,85,247,0.5), transparent)', zIndex: 1 }} />
            <div className="calendly-inline-widget" data-url={CALENDLY_URL} style={{ minWidth: '280px', height: 'clamp(600px,80vw,700px)' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
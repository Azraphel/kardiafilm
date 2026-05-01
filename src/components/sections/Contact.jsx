// components/sections/Contact.jsx
import React, { useEffect } from 'react';
import { Rev } from '../../hooks/useReveal';

const CALENDLY_URL = 'https://calendly.com/stephane-blue-ribbon/15min';

const Contact = () => {
  useEffect(() => {
    if (!document.querySelector('script[src*="calendly"]')) {
      const s = document.createElement('script');
      s.src = 'https://assets.calendly.com/assets/external/widget.js';
      s.async = true;
      document.head.appendChild(s);
    }
  }, []);

  return (
    <section id="contact" style={{ background: 'var(--dark3)', padding: 'clamp(80px,10vw,130px) clamp(20px,5vw,80px)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '700px', height: '400px', background: 'radial-gradient(ellipse, rgba(124,58,237,.1) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
        <Rev>
          <div className="kg-tag" style={{ margin: '0 auto 20px' }}>Prochaine étape</div>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(28px,4.5vw,54px)', lineHeight: 1.06, letterSpacing: '-.025em', textAlign: 'center', marginBottom: '16px' }}>
            Découvrez exactement combien<br />vous perdez par semaine.
          </h2>
          <p style={{ textAlign: 'center', fontSize: 'clamp(14px,1.8vw,17px)', color: 'rgba(255,255,255,.4)', maxWidth: '460px', margin: '0 auto 24px', lineHeight: 1.78, fontWeight: 300 }}>
            20 minutes. On analyse votre pipeline. Si le Système Kardia™ est fait pour vous, on vous explique exactement comment atteindre 5 à 10 nouveaux contrats en 90 jours.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(12px,2vw,24px)', flexWrap: 'wrap', marginBottom: 'clamp(32px,5vw,48px)' }}>
            {['✓ Gratuit et sans engagement', '✓ Réponse honnête', '✓ 20 minutes max'].map((item, i) => (
              <span key={i} style={{ fontFamily: 'monospace', fontSize: '11px', color: 'rgba(168,85,247,.6)', letterSpacing: '.04em' }}>{item}</span>
            ))}
          </div>
        </Rev>

        <Rev delay={1}>
          <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(124,58,237,.2)', boxShadow: '0 0 80px -20px rgba(124,58,237,.25)', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(168,85,247,.5), rgba(245,158,11,.3), transparent)', zIndex: 1 }} />
            <div className="calendly-inline-widget" data-url={CALENDLY_URL} style={{ minWidth: '280px', height: 'clamp(600px,80vw,700px)' }} />
          </div>
        </Rev>
      </div>
    </section>
  );
};

export default Contact;
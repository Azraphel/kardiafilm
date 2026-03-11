import React, { useEffect } from 'react';

const CALENDLY_URL = 'https://calendly.com/stephane-blue-ribbon/15min';

const Contact = () => {
  useEffect(() => {
    if (document.querySelector('script[src*="calendly"]')) return;
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <section
      id="contact"
      style={{
        padding: '8rem 1.5rem',
        background: 'linear-gradient(to bottom, #000, rgba(88,28,135,0.08), #000)',
        position: 'relative',
      }}
    >
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(168,85,247,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '860px', margin: '0 auto', position: 'relative' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{
            fontSize: '0.68rem',
            color: 'rgba(168,85,247,0.6)',
            textTransform: 'uppercase',
            letterSpacing: '0.18em',
            fontFamily: 'monospace',
            marginBottom: '1rem',
          }}>
            ● Parlons-nous
          </p>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.25rem)',
            fontWeight: 700, color: 'white',
            letterSpacing: '-0.03em',
            lineHeight: 1.1, marginBottom: '1rem',
          }}>
            On vous dit si ça peut<br />marcher pour vous
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#6b7280', maxWidth: '28rem', margin: '0 auto' }}>
            15 minutes. Pas de vente forcée.<br />Si ça ne fit pas, on vous le dit.
          </p>
        </div>

        {/* Calendly Card */}
        <div style={{
          borderRadius: '1.5rem',
          overflow: 'hidden',
          border: '1px solid rgba(168,85,247,0.2)',
          boxShadow: '0 0 80px -20px rgba(168,85,247,0.2)',
        }}>
          {/* Film strip top */}
          <div style={{
            height: '28px', display: 'flex',
            alignItems: 'center', justifyContent: 'space-around',
            padding: '0 1rem', backgroundColor: '#050505',
          }}>
            {[...Array(24)].map((_, i) => (
              <div key={i} style={{
                width: '5px', height: '14px',
                backgroundColor: 'rgba(168,85,247,0.35)',
                borderRadius: '2px',
              }} />
            ))}
          </div>

          {/* Calendly iframe */}
          <div
            className="calendly-inline-widget"
            data-url={CALENDLY_URL}
            style={{ minWidth: '320px', height: '700px' }}
          />

          {/* Film strip bottom */}
          <div style={{
            height: '28px', display: 'flex',
            alignItems: 'center', justifyContent: 'space-around',
            padding: '0 1rem', backgroundColor: '#050505',
          }}>
            {[...Array(24)].map((_, i) => (
              <div key={i} style={{
                width: '5px', height: '14px',
                backgroundColor: 'rgba(168,85,247,0.35)',
                borderRadius: '2px',
              }} />
            ))}
          </div>
        </div>

        {/* Trust signals */}
        <div style={{
          display: 'flex', justifyContent: 'center',
          gap: '2.5rem', marginTop: '2rem', flexWrap: 'wrap',
        }}>
          {['✓ Gratuit et sans engagement', '✓ Réponse honnête', '✓ 15 minutes max'].map((item, i) => (
            <span key={i} style={{
              fontSize: '0.8rem', color: '#4b5563',
              letterSpacing: '0.02em',
            }}>
              {item}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Contact;
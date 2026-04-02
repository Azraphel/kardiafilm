// components/sections/About.jsx
import React, { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.fade-in-up');
    if (!els) return;
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
      }),
      { threshold: 0.1 }
    );
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={{
      padding: 'clamp(4rem,8vw,7rem) clamp(1rem,4vw,1.5rem)',
      background: 'linear-gradient(to bottom, #000, rgba(20,0,40,0.3), #000)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', left: '-60px', top: '30%', width: '400px', height: '400px', background: 'radial-gradient(ellipse, rgba(124,58,237,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{
        maxWidth: '860px', margin: '0 auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 'clamp(2rem,5vw,4rem)',
        flexWrap: 'wrap',
      }}>

        {/* Photo */}
        <div className="fade-in-up" style={{ flexShrink: 0 }}>
          <div style={{ position: 'relative' }}>
            {/* Cadre décoratif offset */}
            <div style={{
              position: 'absolute',
              inset: '-10px',
              borderRadius: 'clamp(18px,3vw,26px)',
              border: '1px solid rgba(168,85,247,0.15)',
              zIndex: 0,
            }} />

            {/* Photo */}
            <div style={{
              width: 'clamp(140px,22vw,200px)',
              aspectRatio: '3 / 4',
              borderRadius: 'clamp(16px,2.5vw,22px)',
              overflow: 'hidden',
              position: 'relative', zIndex: 1,
              background: 'linear-gradient(145deg, rgba(30,8,60,0.9), rgba(10,3,25,0.95))',
              border: '1px solid rgba(168,85,247,0.2)',
              boxShadow: '0 0 50px -15px rgba(124,58,237,0.35)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <img
                src="/images/stephane.jpg"
                alt="Stéphane — Fondateur Kardia Growth"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                onError={e => {
                  e.target.style.display = 'none';
                  const parent = e.target.parentElement;
                  if (parent && !parent.querySelector('.photo-fb')) {
                    const fb = document.createElement('div');
                    fb.className = 'photo-fb';
                    fb.style.cssText = 'display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.5rem;width:100%;height:100%;padding:1rem';
                    const initial = document.createElement('span');
                    initial.textContent = 'S';
                    initial.style.cssText = `font-size:clamp(2.5rem,8vw,4rem);font-weight:800;font-family:monospace;background:linear-gradient(135deg,#a855f7,#f59e0b);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1`;
                    const label = document.createElement('span');
                    label.textContent = 'Photo à venir';
                    label.style.cssText = 'font-size:0.6rem;font-family:monospace;color:rgba(168,85,247,0.35);letter-spacing:0.12em;text-transform:uppercase;text-align:center';
                    fb.appendChild(initial); fb.appendChild(label);
                    parent.appendChild(fb);
                  }
                }}
              />
              {/* Grain overlay */}
              <div style={{ position: 'absolute', inset: 0, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`, opacity: 0.4, mixBlendMode: 'overlay', pointerEvents: 'none' }} />
            </div>

            {/* Badge fondateur */}
            <div style={{
              position: 'absolute', bottom: '-1rem', right: '-1rem', zIndex: 2,
              background: 'rgba(5,2,14,0.97)',
              border: '1px solid rgba(168,85,247,0.25)',
              borderRadius: '10px', padding: '0.5rem 0.875rem',
              boxShadow: '0 0 20px -5px rgba(124,58,237,0.3)',
            }}>
              <p style={{ fontFamily: 'monospace', fontSize: '0.55rem', color: '#a855f7', letterSpacing: '0.12em', textTransform: 'uppercase', margin: 0 }}>● Fondateur</p>
              <p style={{ fontSize: 'clamp(0.75rem,1.5vw,0.85rem)', color: 'white', fontWeight: 700, margin: '0.15rem 0 0', letterSpacing: '-0.01em' }}>Kardia Growth</p>
            </div>
          </div>
        </div>

        {/* Texte */}
        <div className="fade-in-up" style={{ transitionDelay: '80ms', flex: 1, minWidth: 'clamp(260px,40vw,300px)' }}>

          {/* Label */}
          <p style={{ fontFamily: 'monospace', fontSize: '0.65rem', color: 'rgba(168,85,247,0.6)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.875rem' }}>
            ● Qui je suis
          </p>

          {/* Nom */}
          <h2 style={{ fontSize: 'clamp(1.5rem,4vw,2.5rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.025em', lineHeight: 1.1, marginBottom: '1.25rem' }}>
            Stéphane
          </h2>

          {/* Phrase de vision */}
          <blockquote style={{
            borderLeft: '3px solid #a855f7',
            paddingLeft: 'clamp(0.875rem,2vw,1.25rem)',
            margin: '0 0 1.25rem 0',
          }}>
            <p style={{ fontSize: 'clamp(1rem,2.5vw,1.2rem)', color: 'white', fontWeight: 600, lineHeight: 1.55, fontStyle: 'normal' }}>
              "Les entrepreneurs devraient passer leur temps à faire ce qu'ils font de mieux. Pas à répondre au téléphone."
            </p>
          </blockquote>

          {/* Bio courte */}
          <p style={{ fontSize: 'clamp(0.875rem,2vw,0.975rem)', color: 'rgba(255,255,255,0.4)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
            5 ans en marketing digital et publicité Meta. J'ai vu trop de bonnes compagnies perdre des contrats par manque de système — pas par manque de talent. Kardia Growth existe pour régler ça.
          </p>

          {/* Stats */}
          <div style={{
            display: 'flex', gap: 'clamp(1.25rem,3vw,2rem)',
            paddingTop: '1.25rem',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            flexWrap: 'wrap',
          }}>
            {[
              { val: '5 ans', label: 'marketing digital' },
              { val: 'Meta', label: 'publicité spécialisée' },
              { val: '39x', label: 'ROI client ProNett' },
            ].map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: 'clamp(1.1rem,2.5vw,1.5rem)', fontWeight: 800, background: 'linear-gradient(to right, #c084fc, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1, marginBottom: '0.2rem' }}>
                  {s.val}
                </div>
                <div style={{ fontSize: 'clamp(0.65rem,1.3vw,0.75rem)', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.04em' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
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
      background: 'linear-gradient(to bottom, #000, #08030f, #000)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', left: '-60px', top: '30%', width: '400px', height: '400px', background: 'radial-gradient(ellipse, rgba(124,58,237,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{
        maxWidth: '860px', margin: '0 auto',
        display: 'flex', flexDirection: 'row',
        alignItems: 'center',
        gap: 'clamp(2rem,5vw,4rem)',
        flexWrap: 'wrap',
      }}>

        {/* Photo */}
        <div className="fade-in-up" style={{ flexShrink: 0 }}>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '-10px', borderRadius: 'clamp(18px,3vw,26px)', border: '1px solid rgba(168,85,247,0.15)', zIndex: 0 }} />
            <div style={{
              width: 'clamp(140px,22vw,200px)', aspectRatio: '3 / 4',
              borderRadius: 'clamp(16px,2.5vw,22px)', overflow: 'hidden',
              position: 'relative', zIndex: 1,
              background: 'linear-gradient(145deg, #1a0835, #0a0318)',
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
                    const ini = document.createElement('span');
                    ini.textContent = 'S';
                    ini.style.cssText = 'font-size:clamp(2.5rem,8vw,4rem);font-weight:800;font-family:monospace;background:linear-gradient(135deg,#a855f7,#f59e0b);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1';
                    const lbl = document.createElement('span');
                    lbl.textContent = 'Photo à venir';
                    lbl.style.cssText = 'font-size:0.6rem;font-family:monospace;color:rgba(168,85,247,0.4);letter-spacing:0.12em;text-transform:uppercase;text-align:center';
                    fb.appendChild(ini); fb.appendChild(lbl);
                    parent.appendChild(fb);
                  }
                }}
              />
            </div>
            {/* Badge */}
            <div style={{
              position: 'absolute', bottom: '-1rem', right: '-1rem', zIndex: 2,
              background: '#0f0620', border: '1px solid rgba(168,85,247,0.25)',
              borderRadius: '10px', padding: '0.5rem 0.875rem',
              boxShadow: '0 0 20px -5px rgba(124,58,237,0.3)',
            }}>
              <p style={{ fontFamily: 'monospace', fontSize: '0.55rem', color: '#a855f7', letterSpacing: '0.12em', textTransform: 'uppercase', margin: 0 }}>● Fondateur</p>
              <p style={{ fontSize: 'clamp(0.75rem,1.5vw,0.85rem)', color: 'white', fontWeight: 700, margin: '0.15rem 0 0' }}>Kardia Growth</p>
            </div>
          </div>
        </div>

        {/* Texte */}
        <div className="fade-in-up" style={{ transitionDelay: '80ms', flex: 1, minWidth: 'clamp(260px,40vw,300px)' }}>

          <p style={{ fontFamily: 'monospace', fontSize: '0.65rem', color: 'rgba(168,85,247,0.6)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.875rem' }}>
            ● Qui je suis
          </p>

          <h2 style={{ fontSize: 'clamp(1.5rem,4vw,2.5rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.025em', lineHeight: 1.1, marginBottom: '1.25rem' }}>
            Stéphane
          </h2>

          {/* Vision */}
          <blockquote style={{ borderLeft: '3px solid #a855f7', paddingLeft: 'clamp(0.875rem,2vw,1.25rem)', margin: '0 0 1.25rem 0' }}>
            <p style={{ fontSize: 'clamp(1rem,2.5vw,1.2rem)', color: 'white', fontWeight: 600, lineHeight: 1.55 }}>
              "Les entrepreneurs devraient passer leur temps à faire ce qu'ils font de mieux. Pas à répondre au téléphone."
            </p>
          </blockquote>

          {/* Bio repositionnée sur les résultats */}
          <p style={{ fontSize: 'clamp(0.875rem,2vw,0.975rem)', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            J'ai passé des années à observer pourquoi les compagnies de service perdent des contrats. La réponse était toujours la même : pas de système pour capturer et convertir les leads. Kardia Growth existe pour régler exactement ça.
          </p>

          {/* Stats repositionnées — résultats, pas background */}
          <div style={{
            display: 'flex', gap: 'clamp(1.25rem,3vw,2rem)',
            paddingTop: '1.25rem',
            borderTop: '1px solid rgba(255,255,255,0.07)',
            flexWrap: 'wrap',
          }}>
            {[
              { val: '39x',      label: 'ROI · client ProNett' },
              { val: '7 500 $+', label: 'revenus générés en 30j' },
              { val: '< 7 jrs',  label: 'pour être opérationnel' },
            ].map((s, i) => (
              <div key={i}>
                <div style={{
                  fontSize: 'clamp(1rem,2.5vw,1.4rem)', fontWeight: 800,
                  background: 'linear-gradient(to right, #c084fc, #f59e0b)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text', lineHeight: 1, marginBottom: '0.2rem',
                }}>
                  {s.val}
                </div>
                <div style={{ fontSize: 'clamp(0.65rem,1.3vw,0.75rem)', color: 'rgba(255,255,255,0.4)' }}>
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
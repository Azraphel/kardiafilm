// components/sections/About.jsx
import React from 'react';
import { Rev, useInView, useCounter } from '../../hooks/useReveal';

const StatNum = ({ n, suffix, label, active }) => {
  const v = useCounter(n, 1600, active);
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(28px,3.5vw,44px)', lineHeight: 1, background: 'linear-gradient(to right, #c084fc, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
        {v}{suffix}
      </div>
      <div style={{ fontFamily: 'monospace', fontSize: '10px', color: 'rgba(255,255,255,.3)', marginTop: '5px', lineHeight: 1.4 }}>{label}</div>
    </div>
  );
};

const About = () => {
  const [sRef, sInView] = useInView(0.3);

  return (
    <section style={{ background: 'var(--dark2)', padding: 'clamp(80px,10vw,130px) clamp(20px,5vw,80px)', overflow: 'hidden', position: 'relative' }}>

      {/* Glow */}
      <div style={{ position: 'absolute', right: '-100px', top: '20%', width: '500px', height: '500px', background: 'radial-gradient(ellipse, rgba(124,58,237,.08) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1040px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'clamp(200px,30%,340px) 1fr', gap: 'clamp(40px,8vw,100px)', alignItems: 'center' }}>

        {/* Photo column */}
        <Rev>
          <div style={{ position: 'relative' }}>
            {/* Border gradient frame */}
            <div style={{ padding: '2px', borderRadius: '16px', background: 'linear-gradient(135deg, rgba(124,58,237,.5), rgba(245,158,11,.3), rgba(124,58,237,.1))', display: 'inline-block', width: '100%' }}>
              <div style={{ borderRadius: '14px', overflow: 'hidden', background: 'var(--dark3)', aspectRatio: '3/4', position: 'relative' }}>
                <img
                  src="/img/Photo Stephane.jpg"
                  alt="Stéphane — Fondateur Kardia Growth"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
                  onError={e => {
                    e.target.style.display = 'none';
                    const p = e.target.parentElement;
                    if (p && !p.querySelector('.fb')) {
                      const fb = document.createElement('div');
                      fb.className = 'fb';
                      fb.style.cssText = 'display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:8px';
                      const ini = document.createElement('div');
                      ini.textContent = 'S';
                      ini.style.cssText = "font-family:'DM Serif Display',serif;font-size:5rem;background:linear-gradient(135deg,#a855f7,#f59e0b);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text";
                      const lbl = document.createElement('div');
                      lbl.textContent = 'Photo à venir';
                      lbl.style.cssText = 'font-family:monospace;font-size:0.6rem;color:rgba(168,85,247,.4);letter-spacing:.12em;text-transform:uppercase';
                      fb.appendChild(ini); fb.appendChild(lbl);
                      p.appendChild(fb);
                    }
                  }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,6,8,.6) 0%, transparent 50%)' }} />
              </div>
            </div>

            {/* Badge fondateur */}
            <div style={{ position: 'absolute', bottom: '-16px', right: '-16px', background: 'var(--dark)', border: '1px solid rgba(168,85,247,.25)', borderRadius: '10px', padding: '10px 16px', boxShadow: '0 0 30px -8px rgba(124,58,237,.4)' }}>
              <div style={{ fontFamily: 'monospace', fontSize: '9px', color: '#a855f7', letterSpacing: '.12em', textTransform: 'uppercase' }}>● Fondateur</div>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: '15px', color: 'white', marginTop: '2px' }}>Kardia Growth</div>
            </div>
          </div>
        </Rev>

        {/* Text column */}
        <div>
          <Rev><div className="kg-tag">Qui je suis</div></Rev>

          <Rev delay={1}>
            <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(32px,4vw,56px)', lineHeight: 1.06, letterSpacing: '-.025em', marginBottom: '24px' }}>
              Stéphane
            </h2>
          </Rev>

          <Rev delay={2}>
            <blockquote style={{ borderLeft: '3px solid #7c3aed', paddingLeft: 'clamp(16px,2vw,24px)', marginBottom: '24px' }}>
              <p style={{ fontFamily: "'DM Serif Display', serif", fontStyle: 'italic', fontSize: 'clamp(17px,2.5vw,22px)', color: 'white', lineHeight: 1.5, fontWeight: 400 }}>
                "Les entrepreneurs devraient passer leur temps à faire ce qu'ils font de mieux. Pas à répondre au téléphone."
              </p>
            </blockquote>
          </Rev>

          <Rev delay={3}>
            <p style={{ fontSize: 'clamp(14px,1.8vw,16px)', color: 'rgba(255,255,255,.5)', lineHeight: 1.82, marginBottom: '32px', fontWeight: 300 }}>
              J'ai passé des années à observer pourquoi les compagnies de service perdent des contrats. La réponse était toujours la même : pas de système pour capturer et convertir les leads. Kardia Growth existe pour régler exactement ça.
            </p>
          </Rev>

          {/* Stats */}
          <Rev delay={4}>
            <div ref={sRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.07)', borderRadius: '10px', overflow: 'hidden', padding: '0' }}>
              {[
                { n: 39, suffix: 'x',  label: 'ROI · ProNett' },
                { n: 7,  suffix: ' jrs', label: 'pour déployer' },
                { n: 5,  suffix: '+',  label: 'ans d\'expérience' },
              ].map((s, i) => (
                <div key={i} style={{ padding: 'clamp(16px,2.5vw,24px)', background: 'var(--dark3)', borderRight: i < 2 ? '1px solid rgba(255,255,255,.06)' : 'none' }}>
                  <StatNum {...s} active={sInView} />
                </div>
              ))}
            </div>
          </Rev>
        </div>
      </div>
    </section>
  );
};

export default About;
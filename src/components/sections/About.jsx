// components/sections/About.jsx
import React, { useEffect, useState } from 'react';

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section style={{ padding: isMobile ? '5rem 1.5rem' : '8rem 1.5rem', backgroundColor: '#000' }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '2.5rem' : '5rem',
        alignItems: 'center',
      }}>

        {/* Photo */}
        <div style={{ width: isMobile ? '200px' : '300px', flexShrink: 0, position: 'relative' }}>
          <div style={{
            position: 'absolute', inset: '-12px',
            borderRadius: '1.5rem',
            border: '1px solid rgba(168,85,247,0.2)',
            zIndex: 0,
          }} />
          <div style={{
            position: 'relative', zIndex: 1,
            aspectRatio: '3 / 4',
            borderRadius: '1.25rem',
            overflow: 'hidden',
            border: '1px solid rgba(168,85,247,0.15)',
            backgroundColor: 'rgba(30,10,60,0.4)',
            boxShadow: '0 0 60px -15px rgba(168,85,247,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <img
              src="/images/stephane.jpg"
              alt="Stéphane — Fondateur Kardia Film"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              onError={e => {
                e.target.style.display = 'none';
                const parent = e.target.parentElement;
                if (parent && !parent.querySelector('.photo-fallback')) {
                  const fb = document.createElement('div');
                  fb.className = 'photo-fallback';
                  fb.style.cssText = 'width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:4rem;opacity:0.1;color:white';
                  fb.textContent = '🎬';
                  parent.appendChild(fb);
                }
              }}
            />
          </div>

          {/* Badge */}
          <div style={{
            position: 'absolute', bottom: '-1.25rem', right: '-1.25rem', zIndex: 2,
            backgroundColor: '#0a0a0a',
            border: '1px solid rgba(168,85,247,0.3)',
            borderRadius: '0.875rem',
            padding: '0.75rem 1rem',
            boxShadow: '0 0 30px -5px rgba(168,85,247,0.2)',
          }}>
            <p style={{ fontFamily: 'monospace', fontSize: '0.6rem', color: '#a855f7', letterSpacing: '0.12em', textTransform: 'uppercase', margin: 0 }}>
              ● Fondateur
            </p>
            <p style={{ fontSize: '0.875rem', color: 'white', fontWeight: 600, margin: '0.2rem 0 0' }}>
              Kardia Film
            </p>
          </div>
        </div>

        {/* Texte */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{
            fontSize: '0.68rem',
            color: 'rgba(168,85,247,0.6)',
            textTransform: 'uppercase',
            letterSpacing: '0.18em',
            fontFamily: 'monospace',
            marginBottom: '1rem',
          }}>
            Qui je suis
          </p>

          <h2 style={{
            fontSize: isMobile ? 'clamp(1.75rem, 7vw, 2.25rem)' : 'clamp(1.8rem, 3.5vw, 2.75rem)',
            fontWeight: 700,
            color: 'white',
            marginBottom: '1.5rem',
            lineHeight: 1.15,
            letterSpacing: '-0.025em',
          }}>
            Stéphane
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p style={{ fontSize: '1.05rem', color: '#9ca3af', lineHeight: 1.75 }}>
              5 ans en marketing, principalement en publicité Meta. Ce qui me différencie
              c'est une curiosité profonde pour chaque business avec lequel je travaille —
              je m'intéresse vraiment à ce que l'entreprise est, pas juste à ce qu'elle veut vendre.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#9ca3af', lineHeight: 1.75 }}>
              Ça fait en sorte qu'on comprend ce dont l'entreprise a{' '}
              <em style={{ color: '#c084fc' }}>réellement</em> besoin.
              Parce que c'est pas toujours le nombre de leads le problème. On guide,
              on conseille, et quand on passe à l'action — chaque décision ressemble
              à l'entreprise et lui permet de fleurir et grandir.
            </p>
          </div>

          {/* Stats */}
          <div style={{
            display: 'flex',
            gap: '2rem',
            marginTop: '2rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255,255,255,0.06)',
            flexWrap: 'wrap',
          }}>
            {[
              { number: '5 ans', label: 'en marketing digital' },
              { number: 'Meta',  label: 'publicité spécialisée' },
              { number: '100%',  label: 'focus résultats réels' },
            ].map((stat, i) => (
              <div key={i}>
                <div style={{
                  fontSize: '1.6rem', fontWeight: 700,
                  background: 'linear-gradient(to right, #c084fc, #f59e0b)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 1, marginBottom: '0.3rem',
                }}>
                  {stat.number}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#6b7280' }}>
                  {stat.label}
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
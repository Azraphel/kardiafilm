// components/layout/Navigation.jsx
import React, { useEffect, useState } from 'react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [prog, setProg] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const d = document.documentElement;
      setProg(Math.min((d.scrollTop / (d.scrollHeight - d.clientHeight)) * 100, 100));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Barre de progression */}
      <div style={{
        position: 'fixed', top: 0, left: 0, zIndex: 301,
        height: '2px', width: `${prog}%`,
        background: 'linear-gradient(90deg, #7c3aed, #f59e0b)',
        transition: 'width .1s linear',
      }} />

      <nav style={{
        position: 'fixed', top: '2px', left: 0, right: 0, zIndex: 300,
        height: '64px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 clamp(20px,5vw,72px)',
        background: scrolled ? 'rgba(6,6,8,.92)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,.07)' : 'none',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        transition: 'background .4s, border-color .4s',
      }}>
        {/* Logo */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div style={{
            width: '34px', height: '34px', borderRadius: '8px',
            background: 'linear-gradient(135deg, #7c3aed, #f59e0b)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 700, fontSize: '16px', color: 'white', fontFamily: 'monospace',
          }}>K</div>
          <div>
            <div style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: '14px', color: 'white' }}>
              Kardia <span style={{ color: '#7c3aed' }}>Growth</span>
            </div>
            <div style={{ fontFamily: 'monospace', fontSize: '9px', color: 'rgba(168,85,247,.4)', letterSpacing: '.15em', textTransform: 'uppercase' }}>
              IA · Automatisation
            </div>
          </div>
        </a>

        {/* Links + CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(16px,3vw,32px)' }}>
          <a href="/roadmap" style={{
            fontFamily: 'monospace', fontSize: '12px',
            color: 'rgba(255,255,255,.4)', textDecoration: 'none',
            letterSpacing: '.04em', whiteSpace: 'nowrap',
            transition: 'color .2s',
          }}
            onMouseEnter={e => e.currentTarget.style.color = '#a855f7'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.4)'}
          >
            Roadmap gratuit
          </a>
          <a href="#contact" className="btn-primary" style={{
            padding: '10px 22px', fontSize: '13px',
          }}>
            Réserver un appel →
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
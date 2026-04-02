// components/layout/Navigation.jsx
import React, { useEffect, useState } from 'react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: 'clamp(0.75rem,2vw,1rem) clamp(1rem,4vw,2rem)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      backgroundColor: scrolled ? 'rgba(0,0,0,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(168,85,247,0.1)' : 'none',
      transition: 'all 0.4s ease',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
        <div style={{
          width: '34px', height: '34px', borderRadius: '9px',
          background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 800, fontSize: '1rem', color: 'white', fontFamily: 'monospace',
          boxShadow: '0 0 16px -4px rgba(124,58,237,0.6)', flexShrink: 0,
        }}>K</div>
        <div>
          <span style={{ fontWeight: 700, fontSize: 'clamp(0.9rem,2vw,1rem)', color: 'white', letterSpacing: '-0.02em' }}>
            Kardia <span style={{ color: '#a855f7' }}>Growth</span>
          </span>
          <div style={{ fontFamily: 'monospace', fontSize: '0.5rem', color: 'rgba(168,85,247,0.4)', letterSpacing: '0.15em', textTransform: 'uppercase', lineHeight: 1 }}>
            IA · Automatisation
          </div>
        </div>
      </div>

      <a href="#contact" style={{
        padding: 'clamp(0.4rem,1vw,0.5rem) clamp(0.875rem,2vw,1.375rem)',
        background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
        borderRadius: '999px', color: 'white',
        fontWeight: 600, fontSize: 'clamp(0.75rem,1.5vw,0.85rem)',
        textDecoration: 'none',
        boxShadow: '0 0 20px -6px rgba(124,58,237,0.6)',
        border: '1px solid rgba(168,85,247,0.3)',
        transition: 'transform 0.2s, box-shadow 0.2s',
        whiteSpace: 'nowrap',
      }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
      >
        Réserver un appel →
      </a>
    </nav>
  );
};

export default Navigation;
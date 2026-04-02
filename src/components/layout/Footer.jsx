// components/layout/Footer.jsx
import React from 'react';

const Footer = () => (
  <footer style={{ padding: 'clamp(1.75rem,3vw,2.5rem) clamp(1rem,4vw,1.5rem)', borderTop: '1px solid rgba(255,255,255,0.04)', background: '#000', position: 'relative' }}>
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(124,58,237,0.2), transparent)' }} />
    <div style={{ maxWidth: '860px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
        <div style={{ width: '28px', height: '28px', borderRadius: '7px', background: 'linear-gradient(135deg, #7c3aed, #a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.875rem', color: 'white', fontFamily: 'monospace', flexShrink: 0 }}>K</div>
        <span style={{ fontWeight: 700, fontSize: 'clamp(0.875rem,2vw,0.95rem)', color: 'white', letterSpacing: '-0.01em' }}>
          Kardia <span style={{ color: '#a855f7' }}>Growth</span>
        </span>
      </div>
      <p style={{ fontSize: 'clamp(0.65rem,1.5vw,0.72rem)', color: 'rgba(255,255,255,0.15)', fontFamily: 'monospace', letterSpacing: '0.08em' }}>
        © {new Date().getFullYear()} KARDIA GROWTH · QUÉBEC, CANADA
      </p>
    </div>
  </footer>
);

export default Footer;
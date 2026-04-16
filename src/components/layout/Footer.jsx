// components/layout/Footer.jsx
import React from 'react';

const Footer = () => (
  <footer style={{ background: 'var(--dark)', borderTop: '1px solid rgba(255,255,255,.06)', padding: 'clamp(20px,3vw,32px) clamp(20px,5vw,80px)', position: 'relative' }}>
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(124,58,237,.25), rgba(245,158,11,.15), transparent)' }} />
    <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'linear-gradient(135deg, #7c3aed, #f59e0b)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '13px', color: 'white', fontFamily: 'monospace', flexShrink: 0 }}>K</div>
        <span style={{ fontFamily: 'monospace', fontWeight: 700, fontSize: '13px', color: 'white' }}>Kardia <span style={{ color: '#7c3aed' }}>Growth</span></span>
      </div>

      {/* Links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(16px,3vw,32px)', flexWrap: 'wrap' }}>
        {[
          { href: '/roadmap', label: 'Roadmap gratuit' },
          { href: '/politique-de-confidentialite', label: 'Politique de confidentialité' },
        ].map((link, i) => (
          <a key={i} href={link.href} style={{ fontFamily: 'monospace', fontSize: '11px', color: 'rgba(255,255,255,.2)', textDecoration: 'none', letterSpacing: '.04em', transition: 'color .2s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'rgba(168,85,247,.6)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,.2)'}
          >{link.label}</a>
        ))}
        <span style={{ fontFamily: 'monospace', fontSize: '11px', color: 'rgba(255,255,255,.15)', letterSpacing: '.06em' }}>
          © {new Date().getFullYear()} KARDIA GROWTH · QUÉBEC
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
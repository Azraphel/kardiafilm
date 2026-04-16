// components/sections/SocialProof.jsx
import React from 'react';
import { Rev } from '../../hooks/useReveal';

const proofs = [
  { src: '/img/proof/proof1.png', label: '● RDV confirmé automatiquement', caption: "L'IA confirme le RDV, collecte le numéro et envoie un récapitulatif — sans intervention humaine.", color: '#a855f7', bg: 'rgba(124,58,237,.08)', border: 'rgba(124,58,237,.2)' },
  { src: '/img/proof/proof3.png', label: '● 3 soumissions bookées en une journée', caption: '"Donc 3 soumissions pr demain" — pendant que le client était sur un chantier.', color: '#f59e0b', bg: 'rgba(245,158,11,.06)', border: 'rgba(245,158,11,.2)', offset: true },
  { src: '/img/proof/proof2.png', label: '● Résultats Meta Ads — coût 51% sous la moyenne', caption: 'Meta confirme : coût par résultat 51% sous les concurrents. Les leads arrivent à moins de 7$ chacun.', color: '#a855f7', bg: 'rgba(124,58,237,.08)', border: 'rgba(124,58,237,.2)' },
];

const SocialProof = () => (
  <section style={{ background: 'var(--dark)', padding: 'clamp(80px,10vw,130px) clamp(20px,5vw,80px)', overflow: 'hidden' }}>
    <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
      <Rev>
        <div className="kg-tag">Preuves sociales</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr clamp(200px,35%,380px)', gap: 'clamp(24px,4vw,48px)', alignItems: 'end', marginBottom: 'clamp(40px,6vw,64px)' }}>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(28px,4.5vw,54px)', lineHeight: 1.06, letterSpacing: '-.025em' }}>
            Des vrais résultats.{' '}
            <em style={{ color: 'rgba(255,255,255,.35)' }}>Des vrais clients.</em>
          </h2>
          <p style={{ fontSize: 'clamp(13px,1.6vw,15px)', color: 'rgba(255,255,255,.4)', lineHeight: 1.8, fontWeight: 300 }}>
            Ce que nos clients voient pendant qu'ils sont sur un chantier — ou qu'ils dorment.
          </p>
        </div>
      </Rev>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: 'clamp(12px,2vw,20px)', alignItems: 'start' }}>
        {proofs.map((p, i) => (
          <Rev key={i} delay={i}>
            <div style={{ background: 'var(--dark3)', border: `1px solid ${p.border}`, borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 60px -15px rgba(0,0,0,.6)', marginTop: p.offset ? 'clamp(16px,3vw,32px)' : 0 }}>
              <div style={{ padding: '12px 18px', background: p.bg, borderBottom: `1px solid ${p.border}`, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: p.color, boxShadow: `0 0 6px ${p.color}`, flexShrink: 0 }} />
                <span style={{ fontFamily: 'monospace', fontSize: '11px', color: p.color, letterSpacing: '.08em', fontWeight: 700 }}>{p.label}</span>
              </div>
              <img src={p.src} alt={p.label} style={{ width: '100%', display: 'block' }} />
              <div style={{ padding: '14px 18px', background: p.bg, borderTop: `1px solid ${p.border}` }}>
                <p style={{ fontFamily: 'monospace', fontSize: '12px', color: 'rgba(255,255,255,.6)', lineHeight: 1.6 }}>{p.caption}</p>
              </div>
            </div>
          </Rev>
        ))}
      </div>

      <Rev delay={2}>
        <div style={{ textAlign: 'center', marginTop: 'clamp(48px,7vw,80px)' }}>
          <p style={{ fontSize: 'clamp(14px,2vw,17px)', color: 'rgba(255,255,255,.45)', marginBottom: '24px', fontWeight: 300 }}>
            Votre téléphone pourrait faire la même chose — pendant que vous vous concentrez sur votre travail.
          </p>
          <a href="#contact" className="btn-primary">Voir si ça marche pour moi →</a>
        </div>
      </Rev>
    </div>
  </section>
);

export default SocialProof;
// components/sections/Problem.jsx
import React from 'react';
import { Rev } from '../../hooks/useReveal';

const problems = [
  { num: '01', title: "Un client qui ne peut pas vous rejoindre n'attendra pas.", body: "Il va appeler le prochain sur Google. Pas parce que vous êtes moins bons — parce que vous n'avez pas répondu. Dans le nettoyage, le premier qui répond obtient le contrat.", truth: "La vitesse de réponse, c'est votre avantage compétitif le plus sous-estimé." },
  { num: '02', title: "Chaque soumission sans suivi, c'est un contrat perdu.", body: "Un prospect qui demande une soumission et qui ne reçoit pas de rappel dans l'heure signe ailleurs. La plupart des compagnies rappellent 24 à 48 heures plus tard. Le contrat est déjà signé.", truth: "Le premier qui répond obtient le contrat dans 78% des cas." },
  { num: '03', title: "Vous gérez des leads au lieu de gérer votre compagnie.", body: "Qualifier un prospect, fixer une soumission, faire le suivi, envoyer les rappels. Ce sont des heures que vous ne passez pas sur le terrain — là où vous générez de la valeur.", truth: "Ce n'est pas votre rôle de gérer la prospection manuellement 24/7." },
  { num: '04', title: "Vos leads de soir et de fin de semaine signent chez vos compétiteurs.", body: "Les gestionnaires d'immeubles et facility managers prennent leurs décisions en dehors des heures de bureau. Si personne ne répond à 19h un vendredi, ce contrat est perdu. Pour toujours.", truth: "40% des demandes arrivent en dehors des heures normales de travail." },
];

const Problem = () => (
  <section style={{ background: 'var(--dark3)', padding: 'clamp(80px,10vw,130px) clamp(20px,5vw,80px)', position: 'relative', overflow: 'hidden' }}>

    <div style={{ position: 'absolute', left: '-80px', top: '30%', width: '500px', height: '500px', background: 'radial-gradient(ellipse, rgba(248,113,113,.05) 0%, transparent 65%)', pointerEvents: 'none' }} />

    <div style={{ maxWidth: '960px', margin: '0 auto' }}>

      {/* Header — layout 2 colonnes */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr clamp(200px,35%,360px)', gap: 'clamp(32px,5vw,60px)', alignItems: 'end', marginBottom: 'clamp(48px,7vw,80px)' }}>
        <Rev>
          <div className="kg-tag">Ce qui se passe en ce moment</div>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(28px,4.5vw,54px)', lineHeight: 1.06, letterSpacing: '-.025em' }}>
            Votre compagnie perd des contrats.{' '}
            <em style={{ color: 'rgba(255,255,255,.35)' }}>Pas par manque de qualité.</em>
          </h2>
        </Rev>
        <Rev delay={1}>
          <p style={{ fontSize: 'clamp(14px,1.8vw,16px)', color: 'rgba(255,255,255,.4)', lineHeight: 1.8, fontWeight: 300 }}>
            La plupart des compagnies de nettoyage commercial perdent 30 à 40% de leurs leads parce qu'elles ne peuvent pas répondre assez vite. Le problème, c'est pas le service — c'est le Système Kardia.
          </p>
        </Rev>
      </div>

      {/* Problèmes — alternance layout */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {problems.map((p, i) => (
          <Rev key={i} delay={i}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'clamp(60px,10vw,120px) 1fr',
              gap: 'clamp(20px,3vw,40px)',
              alignItems: 'start',
              padding: 'clamp(24px,3.5vw,40px) clamp(20px,3vw,36px)',
              background: i % 2 === 0 ? 'rgba(255,255,255,.02)' : 'transparent',
              border: '1px solid rgba(255,255,255,.06)',
              borderRadius: '4px',
              transition: 'background .3s, border-color .3s',
              position: 'relative', overflow: 'hidden',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(248,113,113,.03)'; e.currentTarget.style.borderColor = 'rgba(248,113,113,.12)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = i % 2 === 0 ? 'rgba(255,255,255,.02)' : 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.06)'; }}
            >
              {/* Accent ligne */}
              <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '2px', background: 'linear-gradient(to bottom, rgba(248,113,113,.4), transparent)' }} />

              {/* Numéro */}
              <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(40px,6vw,72px)', color: 'rgba(248,113,113,.15)', lineHeight: 1, letterSpacing: '-.04em', userSelect: 'none' }}>
                {p.num}
              </div>

              {/* Contenu */}
              <div style={{ paddingTop: '4px' }}>
                <h3 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(16px,2.5vw,22px)', color: 'white', letterSpacing: '-.015em', lineHeight: 1.25, marginBottom: '12px' }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: 'clamp(13px,1.6vw,15px)', color: 'rgba(255,255,255,.45)', lineHeight: 1.8, marginBottom: '14px', fontWeight: 300 }}>
                  {p.body}
                </p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 14px', background: 'rgba(248,113,113,.05)', borderLeft: '2px solid rgba(248,113,113,.35)', borderRadius: '0 6px 6px 0' }}>
                  <p style={{ fontFamily: 'monospace', fontSize: '12px', color: '#fca5a5', lineHeight: 1.5, fontStyle: 'italic' }}>
                    {p.truth}
                  </p>
                </div>
              </div>
            </div>
          </Rev>
        ))}
      </div>

      {/* Bridge */}
      <Rev delay={2}>
        <div style={{ marginTop: 'clamp(32px,5vw,48px)', padding: 'clamp(24px,3.5vw,36px)', background: 'linear-gradient(135deg, rgba(124,58,237,.08), rgba(0,0,0,.3))', border: '1px solid rgba(124,58,237,.18)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(124,58,237,.5), rgba(245,158,11,.3), transparent)' }} />
          <p style={{ fontSize: 'clamp(15px,2vw,18px)', color: 'rgba(255,255,255,.75)', lineHeight: 1.65, maxWidth: '520px', fontWeight: 400 }}>
            Ces problèmes ne viennent pas d'un manque d'effort. Ils viennent d'un manque de{' '}
            <strong style={{ color: '#c084fc', fontFamily: 'monospace' }}>système</strong>.
          </p>
          <a href="#contact" className="btn-primary" style={{ flexShrink: 0 }}>Voir la solution →</a>
        </div>
      </Rev>
    </div>
  </section>
);

export default Problem;
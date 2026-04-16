// components/sections/Solution.jsx
import React from 'react';
import { Rev } from '../../hooks/useReveal';

const IPhone  = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.1 1.18 2 2 0 012.08 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.46-.46a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>;
const IX     = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
const ICal   = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>;
const ICpu   = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>;
const IMoon  = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>;
const IClock = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const ICheck = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>;

const gains = [
  { BeforeIco: IPhone, AfterIco: IPhone, before: "Un client appelle, SMS, ou écrit sur Facebook. Vous êtes occupé. Il passe au suivant.", after: "L'IA répond en quelques secondes sur tous les canaux — 24h/24, 7j/7.", gain: 'Zéro message manqué', gainColor: '#a855f7' },
  { BeforeIco: IX, AfterIco: ICheck, before: "Un no-show. Votre équipe s'est déplacée pour rien. La journée est débalancée.", after: "Un dépôt collecté à la réservation. Le client est engagé. Les no-shows tombent sous 5%.", gain: 'Journées prévisibles', gainColor: '#f59e0b' },
  { BeforeIco: IMoon, AfterIco: ICal, before: "Un lead à 21h sur Instagram ou par email. Le lendemain, il a signé ailleurs.", after: "L'IA répond, qualifie et réserve. Peu importe le canal. Peu importe l'heure.", gain: '0 lead perdu la nuit', gainColor: '#a855f7' },
  { BeforeIco: IClock, AfterIco: ICpu, before: "Encore les mêmes questions sur tous vos canaux. Votre temps part en fumée.", after: "L'IA gère toutes les questions de base. Vous parlez seulement aux clients prêts à signer.", gain: '2-3h récupérées / jour', gainColor: '#f59e0b' },
];

const Solution = () => (
  <section style={{ background: 'var(--dark)', padding: 'clamp(80px,10vw,130px) clamp(20px,5vw,80px)', position: 'relative', overflow: 'hidden' }}>

    <div style={{ position: 'absolute', right: '-60px', top: '20%', width: '500px', height: '500px', background: 'radial-gradient(ellipse, rgba(124,58,237,.07) 0%, transparent 65%)', pointerEvents: 'none' }} />

    <div style={{ maxWidth: '960px', margin: '0 auto' }}>

      {/* Header */}
      <Rev>
        <div className="kg-tag">Ce que ça change concrètement</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr clamp(180px,30%,300px)', gap: 'clamp(24px,4vw,48px)', alignItems: 'end', marginBottom: 'clamp(40px,6vw,64px)' }}>
          <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(28px,4.5vw,54px)', lineHeight: 1.06, letterSpacing: '-.025em' }}>
            Avant le système.{' '}
            <span style={{ background: 'linear-gradient(to right, #a855f7, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Après le système.
            </span>
          </h2>
          <div>
            <p style={{ fontSize: 'clamp(13px,1.6vw,15px)', color: 'rgba(255,255,255,.4)', lineHeight: 1.8, fontWeight: 300, marginBottom: '16px' }}>
              Des changements concrets dans votre quotidien — sur tous vos canaux.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {['📞 Appels', '💬 SMS', '📘 Facebook', '📷 Instagram', '🔍 Google', '📧 Email'].map((c, i) => (
                <span key={i} style={{ fontFamily: 'monospace', fontSize: '11px', color: 'rgba(255,255,255,.55)', background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)', padding: '3px 10px', borderRadius: '100px' }}>{c}</span>
              ))}
            </div>
          </div>
        </div>
      </Rev>

      {/* Gains */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {gains.map((g, i) => (
          <Rev key={i} delay={i % 3}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255,255,255,.07)' }}>

              {/* Avant */}
              <div style={{ background: 'var(--dark3)', padding: 'clamp(18px,2.5vw,28px)', display: 'flex', gap: '14px', alignItems: 'flex-start', borderRight: '1px solid rgba(255,255,255,.06)', transition: 'background .25s' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(248,113,113,.04)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--dark3)'}
              >
                <div style={{ width: '36px', height: '36px', flexShrink: 0, borderRadius: '8px', background: 'rgba(248,113,113,.1)', border: '1px solid rgba(248,113,113,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f87171' }}>
                  <g.BeforeIco />
                </div>
                <div>
                  <p style={{ fontFamily: 'monospace', fontSize: '9px', color: '#f87171', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '6px', fontWeight: 700 }}>Avant</p>
                  <p style={{ fontSize: 'clamp(13px,1.6vw,15px)', color: 'rgba(255,255,255,.6)', lineHeight: 1.7, fontWeight: 300 }}>{g.before}</p>
                </div>
              </div>

              {/* Après */}
              <div style={{ background: 'var(--dark2)', padding: 'clamp(18px,2.5vw,28px)', display: 'flex', gap: '14px', alignItems: 'flex-start', position: 'relative', overflow: 'hidden', transition: 'background .25s' }}
                onMouseEnter={e => e.currentTarget.style.background = `rgba(${g.gainColor === '#a855f7' ? '124,58,237' : '245,158,11'},.06)`}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--dark2)'}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(to right, ${g.gainColor}, transparent)` }} />
                <div style={{ width: '36px', height: '36px', flexShrink: 0, borderRadius: '8px', background: `${g.gainColor}15`, border: `1px solid ${g.gainColor}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: g.gainColor }}>
                  <g.AfterIco />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', flexWrap: 'wrap' }}>
                    <p style={{ fontFamily: 'monospace', fontSize: '9px', color: g.gainColor, letterSpacing: '.1em', textTransform: 'uppercase', fontWeight: 700 }}>Après</p>
                    <span style={{ fontFamily: 'monospace', fontSize: '10px', color: g.gainColor, background: `${g.gainColor}12`, border: `1px solid ${g.gainColor}22`, padding: '2px 8px', borderRadius: '100px' }}>{g.gain}</span>
                  </div>
                  <p style={{ fontSize: 'clamp(13px,1.6vw,15px)', color: 'rgba(255,255,255,.85)', lineHeight: 1.7, fontWeight: 400 }}>{g.after}</p>
                </div>
              </div>

            </div>
          </Rev>
        ))}
      </div>

      {/* CTA */}
      <Rev delay={2}>
        <div style={{ marginTop: 'clamp(32px,5vw,48px)', padding: 'clamp(24px,3.5vw,40px)', background: 'var(--dark3)', border: '1px solid rgba(124,58,237,.2)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, #7c3aed, #f59e0b, transparent)' }} />
          <div style={{ maxWidth: '480px' }}>
            <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(18px,2.5vw,24px)', color: 'white', lineHeight: 1.35, marginBottom: '6px' }}>
              Votre compétition répond déjà en moins de 2 minutes.
            </p>
            <p style={{ fontSize: 'clamp(13px,1.6vw,15px)', color: 'rgba(255,255,255,.4)', lineHeight: 1.7, fontWeight: 300 }}>
              La question c'est combien de contrats vous attendez de perdre avant de mettre un système en place.
            </p>
          </div>
          <a href="#contact" className="btn-primary" style={{ flexShrink: 0 }}>Je veux ce système →</a>
        </div>
      </Rev>
    </div>
  </section>
);

export default Solution;
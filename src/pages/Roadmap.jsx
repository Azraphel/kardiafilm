// pages/Roadmap.jsx — Route : /roadmap
import React, { useState, useEffect, useRef } from 'react';
import DiagramReferral    from '../components/diagrams/DiagramReferral';
import DiagramCredibilite from '../components/diagrams/DiagramCredibilite';
import DiagramPublicite   from '../components/diagrams/DiagramPublicite';

const CALENDLY = 'https://calendly.com/stephane-blue-ribbon/15min';

const PHOTOS = {
  houston: null,  // '/images/drew-houston.jpg'
  sharp:   null,  // '/images/isadore-sharp.jpg'
  jobs:    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg/440px-Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg',
};

const LOGOS = {
  dropbox:     'https://logo.clearbit.com/dropbox.com',
  fourseasons: 'https://logo.clearbit.com/fourseasons.com',
  apple:       'https://logo.clearbit.com/apple.com',
};

// ── hooks ─────────────────────────────────────────────────────
function useInView(t = 0.08) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setV(true); obs.disconnect(); }
    }, { threshold: t });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [t]);
  return [ref, v];
}

function useCounter(n, dur = 1800, active = false) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!active) return;
    let t0 = null;
    const tick = ts => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / dur, 1);
      setV(Math.round(n * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, n, dur]);
  return v;
}

// ── CSS ───────────────────────────────────────────────────────
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');

  :root {
    --v:#7c3aed; --a:#f59e0b;
    --dark:#060608; --dark2:#0c0b12; --dark3:#100f1a;
    --text:rgba(255,255,255,.55); --dim:rgba(255,255,255,.28);
    --border:rgba(255,255,255,.07);
  }
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth}
  .rm{background:var(--dark);color:#fff;overflow-x:hidden;line-height:1.6}

  /* Progress */
  .rm-prog{position:fixed;top:0;left:0;height:2px;background:linear-gradient(90deg,var(--v),var(--a));z-index:300;transition:width .1s linear}

  /* Nav */
  .rm-nav{position:fixed;top:2px;left:0;right:0;z-index:200;display:flex;align-items:center;justify-content:space-between;padding:0 clamp(20px,5vw,72px);height:64px;background:rgba(6,6,8,.9);border-bottom:1px solid var(--border);backdrop-filter:blur(24px)}
  .rm-logo{display:flex;align-items:center;gap:10px;text-decoration:none}
  .rm-mark{width:34px;height:34px;border-radius:8px;background:linear-gradient(135deg,var(--v),var(--a));display:flex;align-items:center;justify-content:center;font-weight:700;color:#fff;font-size:16px;font-family:monospace}
  .rm-nav-name{font-family:monospace;font-weight:700;color:#fff;font-size:14px}
  .rm-nav-cta{font-family:monospace;background:var(--v);color:#fff;font-size:13px;font-weight:700;padding:10px 22px;border-radius:6px;text-decoration:none;transition:opacity .2s}
  .rm-nav-cta:hover{opacity:.82}

  /* Reveal */
  .rev{opacity:0;transform:translateY(24px);transition:opacity .6s ease,transform .6s ease}
  .rev.on{opacity:1;transform:none}
  .rev.d1{transition-delay:.1s}.rev.d2{transition-delay:.2s}.rev.d3{transition-delay:.3s}

  /* Divider */
  .rm-line{height:1px;background:linear-gradient(90deg,transparent,rgba(124,58,237,.35),rgba(245,158,11,.2),transparent)}

  /* Tag */
  .rm-tag{display:inline-flex;align-items:center;gap:7px;font-family:monospace;font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#a78bfa;background:rgba(124,58,237,.1);border:1px solid rgba(124,58,237,.22);padding:5px 13px;border-radius:100px;margin-bottom:20px}
  .rm-tag::before{content:'';width:5px;height:5px;border-radius:50%;background:var(--v);animation:blink 2s ease infinite}
  @keyframes blink{0%,100%{opacity:1}50%{opacity:.2}}

  /* ── HERO ── */
  .rm-hero{min-height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:120px clamp(20px,5vw,80px) 80px;position:relative;overflow:hidden;background:radial-gradient(ellipse 80% 60% at 50% 40%,rgba(124,58,237,.11) 0%,transparent 70%),var(--dark)}
  .rm-hero-wm{position:absolute;left:50%;transform:translateX(-50%);bottom:-60px;font-family:'DM Serif Display',serif;font-size:clamp(180px,28vw,420px);color:rgba(124,58,237,.028);line-height:1;pointer-events:none;user-select:none;letter-spacing:-.05em;white-space:nowrap}
  .rm-hero-content{position:relative;z-index:1;max-width:860px;width:100%}
  .rm-h1{font-family:'DM Serif Display',serif;font-size:clamp(36px,7vw,86px);line-height:1.02;letter-spacing:-.025em;margin-bottom:24px}
  .rm-h1 .acc{color:var(--a)}
  .rm-hero-desc{font-family:'DM Sans',sans-serif;font-size:clamp(15px,2vw,18px);color:rgba(255,255,255,.38);max-width:520px;margin:0 auto 44px;line-height:1.78;font-weight:300}
  .rm-hero-actions{display:flex;align-items:center;justify-content:center;gap:20px;flex-wrap:wrap}
  .btn-amber{font-family:monospace;background:var(--a);color:#0a0a0a;font-size:14px;font-weight:700;padding:15px 32px;border-radius:8px;text-decoration:none;display:inline-block;transition:opacity .2s}
  .btn-amber:hover{opacity:.88}
  .btn-ghost{font-family:monospace;font-size:13px;color:rgba(255,255,255,.3);text-decoration:none;transition:color .2s}
  .btn-ghost:hover{color:rgba(255,255,255,.6)}

  /* ── STATS ── */
  .rm-stats{background:var(--dark2);border-top:1px solid var(--border);border-bottom:1px solid var(--border);display:grid;grid-template-columns:repeat(4,1fr)}
  @media(max-width:680px){.rm-stats{grid-template-columns:repeat(2,1fr)}}
  .rm-stat{text-align:center;padding:clamp(28px,4vw,52px) clamp(12px,2vw,28px);border-right:1px solid var(--border)}
  .rm-stat:last-child{border-right:none}
  @media(max-width:680px){.rm-stat:nth-child(2){border-right:none}.rm-stat:nth-child(3){border-top:1px solid var(--border)}.rm-stat:nth-child(4){border-top:1px solid var(--border)}}
  .rm-stat-n{font-family:'DM Serif Display',serif;font-size:clamp(36px,5vw,66px);line-height:1;letter-spacing:-.03em}
  .rm-stat-l{font-family:monospace;font-size:11px;color:var(--dim);margin-top:8px;line-height:1.45}

  /* ── PROBLEM ── */
  .rm-problem{padding:clamp(72px,9vw,120px) clamp(20px,5vw,80px);background:var(--dark3)}
  .rm-problem-inner{max-width:960px;margin:0 auto}
  .rm-2col{display:grid;grid-template-columns:1fr 1fr;gap:clamp(40px,6vw,80px);align-items:start}
  @media(max-width:720px){.rm-2col{grid-template-columns:1fr}}
  .rm-h2{font-family:'DM Serif Display',serif;font-size:clamp(26px,4vw,48px);line-height:1.08;letter-spacing:-.02em;margin-bottom:16px}
  .rm-body{font-family:'DM Sans',sans-serif;font-size:15px;color:var(--text);line-height:1.82;font-weight:300;margin-bottom:14px}
  .rm-callout{background:rgba(124,58,237,.07);border-left:3px solid var(--v);padding:18px 22px;margin-top:20px;font-family:'DM Sans',sans-serif;font-size:15px;color:rgba(255,255,255,.65);line-height:1.72}

  /* ── CANAL SECTION ── */
  .rm-canal{padding:clamp(80px,10vw,130px) clamp(20px,5vw,80px);position:relative;overflow:hidden}
  .rm-canal.bg2{background:var(--dark2)}
  .rm-canal.bg3{background:var(--dark3)}
  .rm-canal-wm{position:absolute;font-family:'DM Serif Display',serif;font-size:clamp(180px,25vw,340px);font-weight:700;color:rgba(124,58,237,.028);line-height:1;pointer-events:none;letter-spacing:-.05em;top:50%;transform:translateY(-55%)}
  .rm-canal-inner{max-width:960px;margin:0 auto;position:relative;z-index:1}

  /* Canal title row */
  .rm-canal-title-row{display:flex;align-items:baseline;gap:20px;margin-bottom:clamp(40px,5vw,60px);border-bottom:1px solid var(--border);padding-bottom:24px}
  .rm-canal-num{font-family:'DM Serif Display',serif;font-size:clamp(48px,6vw,80px);color:rgba(124,58,237,.35);line-height:1;flex-shrink:0}
  .rm-canal-title{font-family:'DM Serif Display',serif;font-size:clamp(32px,5vw,60px);line-height:1.05;letter-spacing:-.02em}
  .rm-canal-badge{font-family:monospace;font-size:11px;font-weight:700;padding:5px 14px;border-radius:100px;white-space:nowrap;align-self:center;margin-left:auto;flex-shrink:0}
  .rm-canal-badge.free{color:#4ade80;background:rgba(74,222,128,.08);border:1px solid rgba(74,222,128,.2)}
  .rm-canal-badge.low{color:var(--a);background:rgba(245,158,11,.08);border:1px solid rgba(245,158,11,.2)}
  .rm-canal-badge.med{color:#f87171;background:rgba(248,113,113,.08);border:1px solid rgba(248,113,113,.2)}

  /* ── PHOTO + TEXT BUBBLE ROW ── */
  .rm-photo-row{display:flex;align-items:flex-start;margin-bottom:clamp(44px,6vw,64px);position:relative}

  /* CEO circle */
  .rm-ceo-circle-wrap{width:clamp(100px,14vw,160px);height:clamp(100px,14vw,160px);border-radius:50%;padding:3px;background:linear-gradient(135deg,var(--v),var(--a));flex-shrink:0;position:relative;z-index:2;margin-right:-24px;margin-top:8px}
  .rm-ceo-circle-inner{width:100%;height:100%;border-radius:50%;overflow:hidden;background:var(--dark3);display:flex;align-items:center;justify-content:center}
  .rm-ceo-circle-inner img{width:100%;height:100%;object-fit:cover;object-position:top center}
  .rm-ceo-initials{font-family:'DM Serif Display',serif;font-size:clamp(28px,4vw,52px);color:var(--v);opacity:.6}

  /* Text bubble */
  .rm-bubble{flex:1;background:rgba(124,58,237,.07);border:1px solid rgba(124,58,237,.18);border-radius:0 12px 12px 12px;padding:clamp(18px,3vw,28px) clamp(18px,3vw,28px) clamp(18px,3vw,28px) clamp(28px,4vw,44px);position:relative;z-index:1}
  .rm-bubble-context{font-family:'DM Sans',sans-serif;font-size:14.5px;color:rgba(255,255,255,.6);line-height:1.78;font-weight:300;margin-bottom:16px}
  .rm-bubble-context em{color:rgba(255,255,255,.85);font-style:normal;font-weight:500}
  .rm-bubble-quote{border-top:1px solid rgba(124,58,237,.2);padding-top:14px;margin-top:4px}
  .rm-bubble-quote-text{font-family:'DM Serif Display',serif;font-style:italic;font-size:clamp(13px,1.8vw,16px);color:rgba(255,255,255,.65);line-height:1.5;margin-bottom:8px}
  .rm-bubble-author{font-family:monospace;font-size:10px;color:var(--dim)}
  .rm-bubble-source{font-family:monospace;font-size:9px;color:rgba(255,255,255,.16);margin-top:2px}

  /* ── POINTS + DIAGRAM ROW ── */
  .rm-bottom-row{display:grid;grid-template-columns:1fr 1fr;gap:clamp(32px,5vw,64px);align-items:start}
  @media(max-width:720px){.rm-bottom-row{grid-template-columns:1fr}}

  /* Points */
  .rm-points{display:flex;flex-direction:column;gap:20px;margin-bottom:28px}
  .rm-point{display:flex;gap:14px;align-items:flex-start}
  .rm-point-ico{width:34px;height:34px;border-radius:8px;background:rgba(124,58,237,.1);border:1px solid rgba(124,58,237,.18);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:3px}
  .rm-point-ico svg{width:15px;height:15px;fill:none;stroke:var(--v);stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
  .rm-point-title{font-family:monospace;font-size:13px;font-weight:700;color:#fff;margin-bottom:4px}
  .rm-point-text{font-family:'DM Sans',sans-serif;font-size:14px;color:var(--text);line-height:1.62;font-weight:300}

  /* Story button */
  .rm-story-btn{display:inline-flex;align-items:center;gap:10px;font-family:monospace;font-size:13px;font-weight:700;color:var(--v);background:rgba(124,58,237,.08);border:1px solid rgba(124,58,237,.2);padding:12px 20px;border-radius:6px;cursor:pointer;transition:all .2s;text-decoration:none;width:100%}
  .rm-story-btn:hover{background:rgba(124,58,237,.16);border-color:rgba(124,58,237,.4)}
  .rm-story-arrow{transition:transform .2s;margin-left:auto}
  .rm-story-btn:hover .rm-story-arrow{transform:translateX(4px)}

  /* Logo small */
  .rm-logo-small{width:18px;height:18px;border-radius:4px;object-fit:contain;background:rgba(255,255,255,.06);padding:2px;vertical-align:middle;margin-left:6px}

  /* ── SUIVI ── */
  .rm-suivi{padding:clamp(72px,9vw,120px) clamp(20px,5vw,80px);background:linear-gradient(135deg,rgba(124,58,237,.07) 0%,rgba(0,0,0,.2) 100%);border-top:1px solid rgba(124,58,237,.14);border-bottom:1px solid rgba(124,58,237,.14)}
  .rm-suivi-inner{max-width:960px;margin:0 auto}
  .rm-suivi-grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(40px,6vw,80px);align-items:center}
  @media(max-width:720px){.rm-suivi-grid{grid-template-columns:1fr}}
  .rm-suivi-cards{display:grid;grid-template-columns:1fr 1fr;gap:12px}
  .rm-suivi-card{background:rgba(255,255,255,.025);border:1px solid var(--border);padding:18px 20px;border-radius:4px}
  .rm-suivi-card-n{font-family:'DM Serif Display',serif;font-size:clamp(26px,3.5vw,40px);color:var(--v);line-height:1;margin-bottom:6px}
  .rm-suivi-card-l{font-family:monospace;font-size:10px;color:var(--dim);line-height:1.5}

  /* ── CTA ── */
  .rm-cta{padding:clamp(80px,10vw,130px) clamp(20px,5vw,80px);text-align:center;position:relative;overflow:hidden;background:radial-gradient(ellipse 70% 60% at 50% 50%,rgba(124,58,237,.11) 0%,transparent 70%),var(--dark)}
  .rm-cta::before{content:'';position:absolute;top:0;left:50%;transform:translateX(-50%);width:60%;height:1px;background:linear-gradient(90deg,transparent,var(--v),var(--a),transparent)}
  .rm-cta h2{font-family:'DM Serif Display',serif;font-size:clamp(30px,5vw,60px);line-height:1.05;letter-spacing:-.02em;margin-bottom:14px}
  .rm-cta-desc{font-family:'DM Sans',sans-serif;font-size:17px;color:rgba(255,255,255,.36);max-width:460px;margin:0 auto 44px;line-height:1.72;font-weight:300}
  .rm-cta-note{font-family:monospace;font-size:11px;color:var(--dim);margin-top:14px}
  .rm-cta-dl{font-family:monospace;font-size:12px;color:var(--dim);text-decoration:none;margin-top:18px;display:inline-block;transition:color .2s}
  .rm-cta-dl:hover{color:rgba(255,255,255,.5)}

  /* Footer */
  .rm-footer{border-top:1px solid var(--border);padding:22px clamp(20px,5vw,80px);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px}
  .rm-footer span,.rm-footer a{font-family:monospace;font-size:11px;color:var(--dim);text-decoration:none;transition:color .2s}
  .rm-footer a:hover{color:rgba(255,255,255,.5)}

  /* ── POPUP ── */
  .rm-overlay{position:fixed;inset:0;z-index:500;background:rgba(0,0,0,.85);backdrop-filter:blur(14px);display:flex;align-items:center;justify-content:center;padding:20px;opacity:0;pointer-events:none;transition:opacity .28s ease}
  .rm-overlay.open{opacity:1;pointer-events:all}
  .rm-popup{background:var(--dark2);border:1px solid var(--border);border-radius:12px;width:100%;max-width:660px;max-height:90vh;overflow-y:auto;transform:translateY(16px);transition:transform .28s ease;scrollbar-width:thin;scrollbar-color:rgba(124,58,237,.3) transparent}
  .rm-popup::-webkit-scrollbar{width:4px}
  .rm-popup::-webkit-scrollbar-thumb{background:rgba(124,58,237,.3);border-radius:2px}
  .rm-overlay.open .rm-popup{transform:translateY(0)}
  .rm-popup-top{display:flex;justify-content:space-between;align-items:center;padding:18px 24px;border-bottom:1px solid var(--border);position:sticky;top:0;background:var(--dark2);z-index:1}
  .rm-popup-label{font-family:monospace;font-size:9px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--v)}
  .rm-popup-name{font-family:monospace;font-size:14px;font-weight:700;color:#fff;margin-top:2px}
  .rm-popup-close{width:30px;height:30px;border-radius:6px;background:rgba(255,255,255,.06);border:none;cursor:pointer;color:rgba(255,255,255,.45);font-size:20px;line-height:1;display:flex;align-items:center;justify-content:center;transition:all .2s}
  .rm-popup-close:hover{background:rgba(255,255,255,.12);color:#fff}
  .rm-popup-body{padding:24px}
  .rm-popup-p{font-family:'DM Sans',sans-serif;font-size:14.5px;color:var(--text);line-height:1.82;margin-bottom:16px;font-weight:300}
  .rm-popup-p em{color:rgba(255,255,255,.82);font-style:normal;font-weight:500}
  .rm-popup-result{padding:18px 24px;background:rgba(74,222,128,.04);border-top:1px solid rgba(74,222,128,.1)}
  .rm-popup-result-lbl{font-family:monospace;font-size:9px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#4ade80;margin-bottom:8px}
  .rm-popup-result-txt{font-family:'DM Sans',sans-serif;font-size:14px;color:rgba(255,255,255,.55);line-height:1.65}

  @media(max-width:560px){
    .rm-photo-row{flex-direction:column;gap:0;align-items:flex-start}
    .rm-ceo-circle-wrap{margin-right:0;margin-bottom:-20px;width:90px;height:90px}
    .rm-bubble{border-radius:0 12px 12px 12px}
  }

  /* ── MOBILE GLOBAL ── */
  @media(max-width:640px){
    .rm-nav{padding:0 16px}
    .rm-nav-cta{font-size:12px;padding:8px 14px}
    .rm-canal-title-row{flex-wrap:wrap;gap:8px}
    .rm-canal-num{font-size:clamp(36px,10vw,56px)}
    .rm-canal-title{font-size:clamp(28px,8vw,44px)}
    .rm-canal-badge{margin-left:0;width:100%}
    .rm-bottom-row{grid-template-columns:1fr}
    .rm-suivi-cards{grid-template-columns:1fr 1fr}
    .rm-suivi-grid{grid-template-columns:1fr}
    .rm-2col{grid-template-columns:1fr}
    .rm-photo-row{flex-direction:column;align-items:flex-start}
    .rm-ceo-circle-wrap{width:88px;height:88px;margin-right:0;margin-bottom:-18px}
    .rm-bubble{border-radius:0 12px 12px 12px}
    .rm-hero{padding-top:100px;padding-bottom:60px}
    .rm-cta h2{font-size:clamp(26px,7vw,42px)}
    .rm-footer{flex-direction:column;text-align:center;gap:6px}
  }
`;

// ── Icons ─────────────────────────────────────────────────────
const Icon = ({ children }) => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);
const IcoPhone  = () => <Icon><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.69A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.15a16 16 0 006.02 6.02l1.52-1.52a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></Icon>;
const IcoUsers  = () => <Icon><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></Icon>;
const IcoCheck  = () => <Icon><polyline points="20 6 9 17 4 12"/></Icon>;
const IcoStar   = () => <Icon><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></Icon>;
const IcoEye    = () => <Icon><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></Icon>;
const IcoBolt   = () => <Icon><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></Icon>;
const IcoSignal = () => <Icon><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 010 8.49m-8.48-.01a6 6 0 010-8.49m11.31-2.82a10 10 0 010 14.14m-14.14 0a10 10 0 010-14.14"/></Icon>;
const IcoTrend  = () => <Icon><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></Icon>;
const IcoClock  = () => <Icon><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></Icon>;

// ── Reveal ────────────────────────────────────────────────────
const Rev = ({ children, delay = 0 }) => {
  const [ref, v] = useInView();
  return (
    <div ref={ref} className={`rev${v ? ' on' : ''}${delay ? ` d${delay}` : ''}`}>
      {children}
    </div>
  );
};

// ── Stat ─────────────────────────────────────────────────────
function Stat({ n, suffix, color, label, active }) {
  const v = useCounter(n, 1800, active);
  return (
    <div className="rm-stat">
      <div className="rm-stat-n" style={{ fontFamily:"'DM Serif Display',serif", color }}>{v}{suffix}</div>
      <div className="rm-stat-l">{label}</div>
    </div>
  );
}

// ── Popup ─────────────────────────────────────────────────────
function Popup({ storyKey, onClose }) {
  const story = STORIES[storyKey];
  useEffect(() => {
    const fn = e => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [onClose]);

  return (
    <div className="rm-overlay open" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="rm-popup">
        <div className="rm-popup-top">
          <div>
            <div className="rm-popup-label">{story.canal}</div>
            <div className="rm-popup-name">
              L'histoire complète — {story.name}
              {story.logo && (
                <img src={story.logo} alt={story.name} className="rm-logo-small"
                  onError={e => e.currentTarget.style.display = 'none'} />
              )}
            </div>
          </div>
          <button className="rm-popup-close" onClick={onClose}>×</button>
        </div>
        <div className="rm-popup-body">
          {story.paragraphs.map((p, i) => (
            <p key={i} className="rm-popup-p" dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>
        <div className="rm-popup-result">
          <div className="rm-popup-result-lbl">Résultat</div>
          <div className="rm-popup-result-txt">{story.result}</div>
        </div>
      </div>
    </div>
  );
}

// ── Stories ───────────────────────────────────────────────────
const STORIES = {
  referral: {
    canal: '01 — Référence',
    name: 'Dropbox',
    logo: LOGOS.dropbox,
    paragraphs: [
      '2008. Drew Houston gère une startup qui manque de fond. Ils ont un bon produit — les gens qui l\'utilisent l\'adorent. Mais personne ne semble vouloir s\'inscrire.',
      'L\'erreur classique aurait été de conclure que le marché n\'est pas prêt. C\'est exactement ce qu\'ils ont fait. Google Ads, display ads, affiliés. <em>Résultat : chaque nouveau client leur coûtait entre 233$ et 388$ à acquérir. Pour un produit à 99$/an.</em> Les mathématiques ne fonctionnaient pas et l\'argent fondait.',
      'Plutôt que de baisser les bras, Houston a regardé ses propres données. Et là, il a vu quelque chose d\'inattendu. <em>Un tiers de ses utilisateurs venaient déjà de recommandations d\'autres utilisateurs</em> — sans programme officiel, sans incitatif, juste des gens qui en parlaient parce qu\'ils aimaient vraiment le produit.',
      'C\'est là que l\'épiphanie s\'est produite. Pas dans une salle de réunion. Dans les chiffres. Houston a compris que le problème n\'était pas le produit — c\'était le chemin pour y arriver. <em>Un inconnu qui essaie de te vendre quelque chose, tu scrolles. Un ami qui te dit "essaie ça" — tu essaies.</em>',
      'Ils ont arrêté de courir après des inconnus. Ils ont systématisé ce qui se faisait déjà naturellement — un programme simple où les deux parties reçoivent quelque chose.',
    ],
    result: 'En 10 jours, leur base d\'utilisateurs a doublé. En 15 mois : 3 900% de croissance. 33% de tous leurs nouveaux utilisateurs venaient de référals. Le coût d\'acquisition est passé de 300$ à presque zéro.',
  },
  credibilite: {
    canal: '02 — Crédibilité',
    name: 'Four Seasons',
    logo: LOGOS.fourseasons,
    paragraphs: [
      '1961. Isadore Sharp est fils d\'un immigrant polonais, plâtrier de métier. Il n\'a jamais travaillé dans un hôtel de sa vie. Son premier hôtel : Jarvis Street, Toronto. Dans le quartier rouge.',
      'L\'industrie hôtelière avait une logique simple : plus c\'est grand, mieux c\'est. Les hôtels se ressemblaient tous — mêmes promesses, même expérience interchangeable. <em>Les clients ne pouvaient pas savoir si un hôtel était bon avant d\'y dormir.</em> Ils réservaient, espéraient, et découvraient la réalité trop tard.',
      'Sharp a compris quelque chose de fondamental en frappant des portes et en parlant à des clients : <em>les gens décident sur ce qu\'ils voient — pas sur ce que tu fais.</em> L\'environnement. Les détails. La façon dont le personnel répond au téléphone.',
      'La vraie question n\'était pas "comment offrir un meilleur service?" mais <em>"comment faire en sorte que les gens le sachent avant même d\'avoir essayé ?"</em> Il a décidé que chaque détail visible serait une preuve — pas une promesse. Des standards écrits, mesurables, garantis.',
    ],
    result: 'De un motel dans le quartier rouge de Toronto à la chaîne hôtelière de luxe la plus respectée au monde. Valorisée à 3,4 milliards$ lors de son rachat. Un taux de fidélisation que l\'industrie entière a essayé de copier — sans jamais vraiment y arriver.',
  },
  publicite: {
    canal: '03 — Publicité',
    name: 'Apple',
    logo: LOGOS.apple,
    paragraphs: [
      '1983. Apple avait un problème que personne ne voulait nommer : <em>les gens ne voyaient pas la différence entre eux et IBM.</em> Le Mac était objectivement meilleur. Mais dans l\'esprit du grand public, Apple restait le petit joueur.',
      'L\'erreur classique aurait été d\'améliorer encore le produit. D\'ajouter des fonctionnalités. D\'espérer que les clients finissent par comprendre tout seuls.',
      'Jobs a refusé. Il a compris que le problème n\'était pas le produit — <em>c\'était la perception de millions de personnes.</em> La vraie question : comment changer ça en 60 secondes devant 96 millions de personnes ?',
      'La pub "1984" au Super Bowl n\'a montré aucun ordinateur. Le conseil d\'administration a détesté l\'idée. <em>Ils ont failli annuler la pub.</em> Jobs l\'a faite quand même. Lee Clow, le directeur créatif, a résumé ce que Jobs voyait que les autres ne voyaient pas : "They were thinking logically, rather than emotionally and passionately like Steve was thinking."',
    ],
    result: '155 millions$ de Macintosh vendus dans les 100 jours suivants. 5 millions$ de couverture médiatique gratuite — chaque chaîne de télévision a diffusé la pub dans ses bulletins de nouvelles. Apple n\'était plus une compagnie d\'ordinateurs. C\'était un emblème.',
  },
};

// ── Canal data ────────────────────────────────────────────────
const CANAUX = [
  {
    key: 'referral',
    num: '01',
    title: 'Référence',
    bg: '',
    wmRight: true,
    badge: { text: 'Capital : Zéro', cls: 'free' },
    photo: PHOTOS.houston,
    logo: LOGOS.dropbox,
    initials: 'DH',
    // Contexte lié à l'histoire Dropbox
    context: 'En 2008, Dropbox a failli mourir en dépensant 388$ par client pour un produit à 99$/an. Ce qui les a sauvés : ils ont regardé leurs données et réalisé qu\'un tiers de leurs utilisateurs venaient déjà de recommandations naturelles. <em>La confiance entre personnes fait ce qu\'aucune pub ne peut faire</em> — elle transfère instantanément la crédibilité.',
    quote: '"What worked better than any other thing that we tried was the referral program."',
    quoteAuthor: 'Drew Houston, fondateur Dropbox',
    quoteSource: 'Sequoia Capital / Stanford University, 2012',
    points: [
      { Ico: IcoPhone, title: 'Cold call ciblé', text: 'Gestionnaires d\'immeubles, property managers, facility managers — des décideurs avec des budgets récurrents. La plupart des contrats se closent après 5 à 12 contacts. La plupart des compagnies abandonnent au premier.' },
      { Ico: IcoUsers, title: 'Programme de référals actif', text: 'Demande après chaque contrat. Offre un incitatif concret — un mois gratuit, un bonus. Systématise ce qui se fait déjà dans ton réseau. Un référal convertit à 60%+ parce que la confiance est déjà là.' },
      { Ico: IcoCheck, title: 'Partenariats complémentaires', text: 'Plombiers, électriciens, entrepreneurs généraux — ils voient les mêmes gestionnaires d\'immeubles que toi. Un accord mutuel crée un flux de leads constants sans coût publicitaire.' },
    ],
    Diagram: DiagramReferral,
  },
  {
    key: 'credibilite',
    num: '02',
    title: 'Crédibilité',
    bg: 'bg2',
    wmRight: false,
    badge: { text: 'Capital : Faible', cls: 'low' },
    photo: PHOTOS.sharp,
    logo: LOGOS.fourseasons,
    initials: 'IS',
    // Contexte lié à l'histoire Four Seasons
    context: 'Isadore Sharp a compris en frappant des portes que les gens prennent leur décision <em>avant</em> la conversation. Dans une industrie où tout le monde promet "professionnel" et "fiable", la seule façon de se différencier c\'est d\'avoir une crédibilité visible avant même le premier appel. Tes avis, tes before/after, ton profil Google — c\'est ta vitrine.',
    quote: '"Trust had been the primary reason for our success, crucial to the reputation that precedes us in every deal."',
    quoteAuthor: 'Isadore Sharp, fondateur Four Seasons',
    quoteSource: 'Four Seasons: The Story of a Business Philosophy',
    points: [
      { Ico: IcoStar,  title: 'Google Business Profile soigné', text: 'Catégorie précise, zones de service explicites, photos de vrais jobs. Un gestionnaire d\'immeuble qui ne voit rien sur Google passe au suivant sans jamais t\'appeler.' },
      { Ico: IcoEye,   title: 'Avis clients en volume', text: 'Plus t\'en as, mieux c\'est. Envoie un lien par texto 24h après chaque job. Chaque avis additionnel renforce ta crédibilité avant même la première conversation.' },
      { Ico: IcoBolt,  title: 'Before/after vidéo', text: '30 à 60 secondes de vidéo performent 3x mieux que les photos. Ça prouve ce que tu fais mieux que n\'importe quelle description — et ça fait le travail de conviction avant même le premier appel.' },
    ],
    Diagram: DiagramCredibilite,
  },
  {
    key: 'publicite',
    num: '03',
    title: 'Publicité',
    bg: 'bg3',
    wmRight: true,
    badge: { text: 'Capital : Moyen–élevé', cls: 'med' },
    photo: PHOTOS.jobs,
    logo: LOGOS.apple,
    initials: 'SJ',
    // Contexte lié à l'histoire Apple
    context: 'Jobs a compris en 1983 ce que la plupart des entrepreneurs comprennent jamais : <em>la pub ne sert pas à montrer ce que tu fais — elle sert à changer comment les gens te perçoivent.</em> Meta et Google font la même chose pour ta compagnie de nettoyage. L\'un crée le besoin. L\'autre le capte.',
    quote: '"They were thinking logically, rather than emotionally and passionately like Steve was thinking."',
    quoteAuthor: 'Lee Clow, directeur créatif — sur Steve Jobs et la pub "1984"',
    quoteSource: 'CNN Business, 2024',
    points: [
      { Ico: IcoSignal, title: 'Meta — crée la demande', text: 'Ciblage par titre de poste. Ton before/after vidéo dans le fil de facility managers et property managers crée le besoin avant même qu\'ils pensent à changer de fournisseur.' },
      { Ico: IcoTrend,  title: 'Google — capte l\'intention', text: '"Nettoyage commercial Montréal" — ces gens ont déjà décidé. Ton job : être là, être crédible, répondre en 5 minutes. Landing page dédiée, formulaire visible.' },
      { Ico: IcoClock,  title: 'Suivi — où ton ROI se joue', text: 'Une pub qui génère un lead non rappelé dans les 5 minutes, c\'est de l\'argent brûlé. 30 à 40% des leads sont perdus ici — pas dans les créatifs. Un système de réponse automatique change tout.' },
    ],
    Diagram: DiagramPublicite,
  },
];

// ── PAGE ─────────────────────────────────────────────────────
export default function Roadmap() {
  const [prog, setProg]   = useState(0);
  const [sRef, sInView]   = useInView(0.3);
  const [popup, setPopup] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fn = () => {
      const d = document.documentElement;
      setProg(Math.min((d.scrollTop / (d.scrollHeight - d.clientHeight)) * 100, 100));
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = popup ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [popup]);

  return (
    <div className="rm">
      <style>{CSS}</style>
      <div className="rm-prog" style={{ width: `${prog}%` }} />

      {/* NAV */}
      <nav className="rm-nav">
        <a href="/" className="rm-logo">
          <div className="rm-mark">K</div>
          <span className="rm-nav-name">Kardia <span style={{ color:'var(--v)' }}>Growth</span></span>
        </a>
        <a href={CALENDLY} target="_blank" rel="noreferrer" className="rm-nav-cta">Réserver un appel →</a>
      </nav>

      {/* HERO */}
      <section className="rm-hero">
        <div className="rm-hero-wm">3</div>
        <div className="rm-hero-content">
          <Rev><div className="rm-tag">Nettoyage Commercial · Montréal</div></Rev>
          <Rev delay={1}>
            <h1 className="rm-h1">
              Les 3 canaux que les<br />compagnies à{' '}
              <span className="acc">50K$/mois</span><br />maîtrisent tous.
            </h1>
          </Rev>
          <Rev delay={2}>
            <p className="rm-hero-desc">
              Tu réponds au téléphone en plein job. Tu perds des leads pendant que tu nettoies.
              Tu finis la journée épuisé et tu réalises que t'as manqué des appels.
              Ce roadmap existe pour que le système travaille pendant que tu travailles.
            </p>
          </Rev>
          <Rev delay={3}>
            <div className="rm-hero-actions">
              <a href="#canaux" className="btn-amber">Découvrir les 3 canaux ↓</a>
              <a href="/roadmap_commercial_cleaning.pdf" download className="btn-ghost">↓ Télécharger le PDF</a>
            </div>
          </Rev>
        </div>
      </section>

      <div className="rm-line" />

      {/* STATS */}
      <div ref={sRef} className="rm-stats">
        <Stat n={80}  suffix="%" color="var(--a)" label="des leads ne reçoivent jamais de rappel" active={sInView} />
        <Stat n={44}  suffix="h"  color="var(--a)" label="temps de réponse moyen dans l'industrie" active={sInView} />
        <Stat n={10}  suffix="x"  color="var(--a)" label="moins de chances après 10 min sans réponse" active={sInView} />
        <Stat n={40}  suffix="%"  color="var(--v)" label="des leads perdus à cause d'un mauvais suivi" active={sInView} />
      </div>

      <div className="rm-line" />

      {/* PROBLÈME */}
      <section className="rm-problem">
        <div className="rm-problem-inner">
          <div className="rm-2col">
            <Rev>
              <div className="rm-tag">La réalité du marché</div>
              <h2 className="rm-h2">Coincées entre deux mauvaises options.</h2>
              <p className="rm-body">
                La plupart des compagnies de nettoyage font face au même choix impossible : payer une agence 3 000 à 5 000$/mois pour des pubs qu'elles comprennent pas — ou utiliser des logiciels qui gèrent les opérations mais ne génèrent aucun lead.
              </p>
              <p className="rm-body">
                Dans les deux cas, le résultat c'est le même. Un prospect qui appelle 3 compagnies signe avec la première qui le rappelle. Pas nécessairement la meilleure. La plus rapide. Et 80% des compagnies ne rappellent jamais.
              </p>
            </Rev>
            <Rev delay={1}>
              <div className="rm-callout">
                <strong style={{ color:'#fff',fontFamily:'monospace' }}>Ce que les compagnies à 50K$/mois font différemment :</strong> elles ont un système d'acquisition qui tourne pendant qu'elles travaillent. Les 3 canaux de ce roadmap — activés ensemble avec un suivi automatisé — c'est exactement ça.
              </div>
              <p className="rm-body" style={{ marginTop:'20px' }}>
                Ces 3 canaux sont complémentaires, pas séquentiels. Si tu as du temps mais peu de capital, commence par le premier. Si tu as du capital, active les 3 simultanément. Dans tous les cas, le suivi des leads est non-négociable.
              </p>
            </Rev>
          </div>
        </div>
      </section>

      <div className="rm-line" />

      {/* LES 3 CANAUX */}
      <div id="canaux">
        {CANAUX.map((canal, ci) => (
          <React.Fragment key={canal.key}>
            <section className={`rm-canal ${canal.bg}`}>
              {/* Watermark */}
              <div className="rm-canal-wm" style={canal.wmRight ? { right:'-30px' } : { left:'-30px' }}>
                {canal.num}
              </div>

              <div className="rm-canal-inner">

                {/* ── TITRE ── */}
                <Rev>
                  <div className="rm-canal-title-row">
                    <span className="rm-canal-num">{canal.num}</span>
                    <span className="rm-canal-title">{canal.title}</span>
                    <span className={`rm-canal-badge ${canal.badge.cls}`}>{canal.badge.text}</span>
                  </div>
                </Rev>

                {/* ── PHOTO + BULLE ── */}
                <Rev delay={1}>
                  <div className="rm-photo-row">
                    {/* Photo CEO circulaire */}
                    <div className="rm-ceo-circle-wrap">
                      <div className="rm-ceo-circle-inner">
                        {canal.photo
                          ? <img src={canal.photo} alt={canal.initials}
                              onError={e => e.currentTarget.style.display = 'none'} />
                          : <span className="rm-ceo-initials">{canal.initials}</span>
                        }
                      </div>
                    </div>

                    {/* Bulle texte */}
                    <div className="rm-bubble">
                      <p className="rm-bubble-context"
                        dangerouslySetInnerHTML={{ __html: canal.context }} />
                      <div className="rm-bubble-quote">
                        <p className="rm-bubble-quote-text">"{canal.quote.replace(/^"|"$/g,'')}"</p>
                        <p className="rm-bubble-author">{canal.quoteAuthor}</p>
                        <p className="rm-bubble-source">{canal.quoteSource}</p>
                      </div>
                    </div>
                  </div>
                </Rev>

                {/* ── POINTS + DIAGRAMME ── */}
                <div className="rm-bottom-row">
                  <Rev delay={2}>
                    <div className="rm-points">
                      {canal.points.map((pt, pi) => (
                        <div className="rm-point" key={pi}>
                          <div className="rm-point-ico"><pt.Ico /></div>
                          <div>
                            <div className="rm-point-title">{pt.title}</div>
                            <div className="rm-point-text">{pt.text}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <button className="rm-story-btn" onClick={() => setPopup(canal.key)}>
                      <span>L'histoire complète — {STORIES[canal.key].name}</span>
                      <span className="rm-story-arrow">→</span>
                    </button>
                  </Rev>

                  <Rev delay={3}>
                    <canal.Diagram />
                  </Rev>
                </div>

              </div>
            </section>
            {ci < CANAUX.length - 1 && <div className="rm-line" />}
          </React.Fragment>
        ))}
      </div>

      <div className="rm-line" />

      {/* SUIVI */}
      <section className="rm-suivi">
        <div className="rm-suivi-inner">
          <div className="rm-suivi-grid">
            <Rev>
              <div className="rm-tag">Le lien entre les 3 canaux</div>
              <h2 className="rm-h2">Le volume sans suivi, c'est du gaspillage.</h2>
              <p className="rm-body">
                Quand les 3 canaux tournent, tu reçois des demandes de plusieurs sources simultanément. C'est exactement le problème que tu veux avoir.
              </p>
              <p className="rm-body">
                Mais voilà ce qui se passe sans système : tu travailles sur un job, ton téléphone sonne, tu rappelles 2 heures plus tard — le prospect a déjà signé ailleurs. Les compagnies qui passent à 50K$/mois ne font pas plus de marketing que toi. <strong style={{ color:'#fff',fontFamily:'monospace' }}>Elles ont un système qui capture chaque lead, répond en quelques minutes et fait le suivi automatiquement.</strong>
              </p>
            </Rev>
            <Rev delay={1}>
              <div className="rm-suivi-cards">
                {[
                  { n: '<5',  l: 'minutes pour répondre — après, les chances chutent radicalement' },
                  { n: '21',  l: 'jours de suivi automatisé — durée optimale avant de qualifier' },
                  { n: '3×',  l: 'plus de contrats closés avec les mêmes leads et un bon suivi' },
                  { n: '0',   l: 'lead perdu parce que tu étais sur un job — si le système est en place' },
                ].map((c, i) => (
                  <div className="rm-suivi-card" key={i}>
                    <div className="rm-suivi-card-n">{c.n}</div>
                    <div className="rm-suivi-card-l">{c.l}</div>
                  </div>
                ))}
              </div>
            </Rev>
          </div>
        </div>
      </section>

      <div className="rm-line" />

      {/* CTA */}
      <section className="rm-cta">
        <Rev>
          <div className="rm-tag" style={{ display:'table',margin:'0 auto 24px' }}>Prochaine étape</div>
          <h2 style={{ fontFamily:"'DM Serif Display',serif" }}>Tu connais maintenant les 3 canaux.</h2>
          <p className="rm-cta-desc">
            La prochaine étape c'est de les activer avec un système qui capture et suit chaque lead automatiquement — pendant que tu travailles.
          </p>
          <a href={CALENDLY} target="_blank" rel="noreferrer" className="btn-amber"
            style={{ fontSize:'15px',padding:'16px 40px' }}>
            Réserver un appel de 30 minutes →
          </a>
          <p className="rm-cta-note">L'appel est gratuit. On regarde ensemble si l'implémentation fait du sens pour ta compagnie.</p>
          <br />
          <a href="/roadmap_commercial_cleaning.pdf" download className="rm-cta-dl">
            ↓ Télécharger le PDF du roadmap
          </a>
        </Rev>
      </section>

      <footer className="rm-footer">
        <span>© 2026 Kardia Growth · Montréal, QC</span>
        <a href="/">← Retour au site</a>
      </footer>

      {popup && <Popup storyKey={popup} onClose={() => setPopup(null)} />}
    </div>
  );
}
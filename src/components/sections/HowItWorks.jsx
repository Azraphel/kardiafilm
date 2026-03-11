// components/sections/HowItWorks.jsx
import React, { useEffect, useRef, useState, useCallback } from 'react';

const filmFrames = [
  { step: "01", title: "On comprend votre vision",    desc: "On commence par une conversation, pas par une caméra.",  details: ["Votre histoire", "Votre positionnement", "Votre ambition", "Vos clients idéaux"],               image: "/images/vision.jpg",       punchline: "Une vidéo efficace commence toujours par une vision claire." },
  { step: "02", title: "Concept de film stratégique", desc: "On construit un concept narratif unique.",               details: ["Angle narratif", "Message central", "Structure du film", "Appel à l'action"],                 image: "/images/concept.jpg",      punchline: "Chaque film a un rôle précis." },
  { step: "03", title: "Production haut de gamme",    desc: "Image, rythme, lumière, son. Qualité cinéma.",           details: ["Image cinématographique", "Montage rythmé", "Éclairage pro", "Design sonore"],                 image: "/images/production.jpg",   punchline: "Une image premium change tout." },
  { step: "04", title: "Activation de la diffusion",  desc: "Un film sans diffusion est invisible.",                  details: ["Campagnes Meta", "Campagnes Google", "Ciblage local", "Prospects qualifiés"],                  image: "/images/diffusion.jpg",    punchline: "Pas des vues, des prospects." },
  { step: "05", title: "Système de transformation",   desc: "L'intérêt devient rendez-vous.",                        details: ["Réponse auto", "Qualification", "Organisation", "Automatisation"],                            image: "/images/systeme.jpg",      punchline: "Vous ne perdez plus d'opportunités." },
  { step: "06", title: "Optimisation performance",    desc: "On ajuste pour la rentabilité.",                        details: ["Le message", "Le montage", "La diffusion", "Les audiences"],                                  image: "/images/optimisation.jpg", punchline: "La beauté sert la rentabilité." },
];

// ─── Fallback frame ───────────────────────────────────────────────────────────
const FramePlaceholder = ({ step }) => (
  <div style={{
    width: '100%', height: '100%',
    display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
    background: 'linear-gradient(135deg, rgba(88,28,135,0.25), rgba(0,0,0,0.9))',
    position: 'relative', overflow: 'hidden',
  }}>
    <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.12) 3px, rgba(0,0,0,0.12) 4px)', pointerEvents: 'none' }} />
    <span style={{
      fontSize: 'clamp(3rem, 10vw, 5rem)', fontWeight: 700, fontFamily: 'monospace', lineHeight: 1,
      background: 'linear-gradient(135deg, #a855f7, #f59e0b)',
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', opacity: 0.7,
    }}>
      {step}
    </span>
    <span style={{ fontSize: '0.55rem', fontFamily: 'monospace', color: 'rgba(168,85,247,0.4)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
      FRAME {step}
    </span>
  </div>
);

// ─── Image avec fallback ──────────────────────────────────────────────────────
const FrameImage = ({ frame, isMobile }) => {
  const [imgError, setImgError] = useState(false);
  useEffect(() => { setImgError(false); }, [frame.step]);
  return (
    <div style={{
      width: isMobile ? '100%' : '38%',
      aspectRatio: isMobile ? '16 / 9' : '1',
      flexShrink: 0,
      borderRadius: isMobile ? '0.875rem 0.875rem 0 0' : '1.25rem',
      overflow: 'hidden',
      backgroundColor: 'rgba(30,10,60,0.4)',
      position: 'relative',
      border: isMobile ? 'none' : '1px solid rgba(168,85,247,0.2)',
    }}>
      {imgError
        ? <FramePlaceholder step={frame.step} />
        : <img src={frame.image} alt={frame.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} onError={() => setImgError(true)} />
      }
    </div>
  );
};

// ─── Contenu texte ────────────────────────────────────────────────────────────
const FrameText = ({ frame, isMobile }) => (
  <div style={{ flex: 1, minWidth: 0 }}>
    <div style={{ fontFamily: 'monospace', fontSize: '0.65rem', color: '#f59e0b', letterSpacing: '0.14em', marginBottom: '0.5rem', opacity: 0.75 }}>
      ● REC &nbsp;|&nbsp; FRAME {frame.step}
    </div>
    <h3 style={{
      fontSize: isMobile ? 'clamp(1.1rem, 4.5vw, 1.4rem)' : 'clamp(1.8rem, 3vw, 2.75rem)',
      fontWeight: 700, color: 'white', marginBottom: '0.5rem', lineHeight: 1.15, letterSpacing: '-0.02em',
    }}>
      {frame.title}
    </h3>
    <p style={{ fontSize: isMobile ? '0.85rem' : '1rem', color: '#b0b0b8', marginBottom: '0.875rem', lineHeight: 1.6 }}>
      {frame.desc}
    </p>
    <div style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '0.75rem', padding: '0.75rem 1rem', marginBottom: '0.875rem' }}>
      <p style={{ fontSize: '0.58rem', color: 'rgba(168,85,247,0.75)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '0.5rem' }}>Ce que ça implique</p>
      <ul style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(2, 1fr)', gap: '0.3rem 1rem', listStyle: 'none', margin: 0, padding: 0 }}>
        {frame.details.map((d, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#d4d4d8', fontSize: '0.8rem' }}>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#a855f7', flexShrink: 0 }} />
            {d}
          </li>
        ))}
      </ul>
    </div>
    <p style={{ color: 'rgba(192,132,252,0.85)', fontStyle: 'italic', fontSize: '0.875rem', borderLeft: '3px solid #a855f7', paddingLeft: '0.75rem', margin: 0, lineHeight: 1.6 }}>
      "{frame.punchline}"
    </p>
  </div>
);

// ═══════════════════════════════════════════════════════════════════════════════
// VERSION MOBILE — sticky stack CSS pur
// Chaque carte est position:sticky avec un top croissant
// En scrollant, les cartes s'empilent par-dessus les précédentes
// ═══════════════════════════════════════════════════════════════════════════════
const CARD_STICKY_TOP = 64; // px — distance du haut pour chaque carte empilée

const HowItWorksMobile = () => (
  <div style={{ backgroundColor: '#000', paddingBottom: '4rem' }}>

    {/* Titre */}
    <div style={{ textAlign: 'center', padding: '3.5rem 1.5rem 2rem' }}>
      <h2 style={{ fontSize: 'clamp(1.75rem, 8vw, 2.5rem)', fontWeight: 700, color: 'white', letterSpacing: '-0.03em', marginBottom: '0.25rem' }}>
        Comment ça{' '}
        <span style={{ background: 'linear-gradient(to right, #c084fc, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          marche
        </span>
      </h2>
      <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.65rem', fontFamily: 'monospace', letterSpacing: '0.12em', marginTop: '0.25rem' }}>
        ↓ SCROLL POUR VOIR LES ÉTAPES
      </p>
    </div>

    {/* Stack de cartes sticky */}
    <div style={{ padding: '0 1.25rem' }}>
      {filmFrames.map((frame, i) => (
        <div
          key={frame.step}
          style={{
            position: 'sticky',
            top: `${CARD_STICKY_TOP + i * 10}px`,
            zIndex: i + 1,
            marginBottom: i === filmFrames.length - 1 ? 0 : '1.5rem',
          }}
        >
          <div style={{
            borderRadius: '1.25rem',
            overflow: 'hidden',
            background: 'rgba(8,4,16,0.97)',
            border: '1px solid rgba(168,85,247,0.18)',
            boxShadow: `0 ${8 + i * 4}px ${40 + i * 10}px -10px rgba(88,28,135,${0.2 + i * 0.05})`,
            // Légèrement réduit pour les cartes du fond — donne l'impression d'empilage
            transform: `scale(${1 - (filmFrames.length - 1 - i) * 0.015})`,
            transformOrigin: 'top center',
            transition: 'box-shadow 0.3s',
          }}>
            {/* Image */}
            <FrameImage frame={frame} isMobile={true} />

            {/* Contenu */}
            <div style={{ padding: '1.125rem 1.125rem 1.375rem' }}>
              <FrameText frame={frame} isMobile={true} />
            </div>

            {/* Numéro de frame — coin bas droit */}
            <div style={{
              position: 'absolute',
              bottom: '0.75rem', right: '0.875rem',
              fontFamily: 'monospace', fontSize: '0.55rem',
              color: 'rgba(168,85,247,0.3)', letterSpacing: '0.15em',
            }}>
              {frame.step} / {String(filmFrames.length).padStart(2, '0')}
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* CTA */}
    <div style={{ textAlign: 'center', padding: '3rem 1.5rem 0' }}>
      <a href="#contact" style={{
        display: 'inline-block', padding: '0.875rem 2rem',
        background: 'linear-gradient(135deg, #9333ea, #6d28d9)',
        borderRadius: '9999px', color: 'white', fontWeight: 600,
        fontSize: '0.95rem', textDecoration: 'none', letterSpacing: '0.02em',
        boxShadow: '0 0 30px -8px rgba(147,51,234,0.5)',
      }}>
        Prendre rendez-vous →
      </a>
    </div>
  </div>
);

// ═══════════════════════════════════════════════════════════════════════════════
// VERSION DESKTOP — scroll trap + effet obturateur (inchangé)
// ═══════════════════════════════════════════════════════════════════════════════
const Shutter = ({ phase }) => (
  <div style={{
    position: 'absolute', inset: 0, backgroundColor: '#000', zIndex: 50,
    opacity: phase === 0 ? 0 : phase === 3 ? 0 : 1,
    transition: phase === 1 ? 'opacity 0.15s ease-in' : phase === 3 ? 'opacity 0.25s ease-out' : 'none',
    pointerEvents: phase > 0 ? 'all' : 'none',
  }} />
);

const HowItWorksDesktop = () => {
  const [currentIndex, setCurrentIndex]     = useState(0);
  const [visibleIndex, setVisibleIndex]     = useState(0);
  const [shutterPhase, setShutterPhase]     = useState(0);
  const [contentVisible, setContentVisible] = useState(true);

  const containerRef     = useRef(null);
  const isTransitioning  = useRef(false);
  const accumulatedDelta = useRef(0);
  const hasSnapped       = useRef(false);
  const SCROLL_THRESHOLD = 80;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasSnapped.current) {
        hasSnapped.current = true;
        containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      if (!entry.isIntersecting) {
        hasSnapped.current = false;
        setCurrentIndex(0); setVisibleIndex(0);
        accumulatedDelta.current = 0;
      }
    }, { threshold: 0.15 });
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const triggerTransition = useCallback((nextIndex) => {
    if (isTransitioning.current) return;
    if (nextIndex < 0 || nextIndex >= filmFrames.length) return;
    if (nextIndex === currentIndex) return;
    isTransitioning.current = true;
    setContentVisible(false);
    setShutterPhase(1);
    setTimeout(() => {
      setShutterPhase(2);
      setVisibleIndex(nextIndex);
      setCurrentIndex(nextIndex);
      setTimeout(() => {
        setShutterPhase(3);
        setContentVisible(true);
        setTimeout(() => {
          setShutterPhase(0);
          isTransitioning.current = false;
          accumulatedDelta.current = 0;
        }, 300);
      }, 80);
    }, 160);
  }, [currentIndex]);

  useEffect(() => {
    const onWheel = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const inZone = rect.top <= 1 && rect.bottom >= window.innerHeight - 1;
      if (!inZone) return;
      if (currentIndex === 0 && e.deltaY < 0) return;
      if (currentIndex === filmFrames.length - 1 && e.deltaY > 0) return;
      e.preventDefault();
      if (isTransitioning.current) return;
      accumulatedDelta.current += e.deltaY;
      if (accumulatedDelta.current >  SCROLL_THRESHOLD) triggerTransition(currentIndex + 1);
      if (accumulatedDelta.current < -SCROLL_THRESHOLD) triggerTransition(currentIndex - 1);
    };
    window.addEventListener('wheel', onWheel, { passive: false });
    return () => window.removeEventListener('wheel', onWheel);
  }, [currentIndex, triggerTransition]);

  const frame = filmFrames[visibleIndex];

  return (
    <div style={{ backgroundColor: '#000' }}>
      <div style={{ textAlign: 'center', padding: '5rem 1rem 3rem' }}>
        <h2 style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)', fontWeight: 700, color: 'white', letterSpacing: '-0.03em', marginBottom: '0.6rem' }}>
          Comment ça{' '}
          <span style={{ background: 'linear-gradient(to right, #c084fc, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            marche
          </span>
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.72rem', fontFamily: 'monospace', letterSpacing: '0.14em' }}>↓ SCROLL POUR AVANCER</p>
      </div>

      <div ref={containerRef} style={{ height: '110vh', position: 'relative' }}>
        <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', backgroundColor: '#040404' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(88,28,135,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.012) 3px, rgba(255,255,255,0.012) 4px)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 50%, transparent 35%, rgba(0,0,0,0.75) 100%)', pointerEvents: 'none' }} />

          <Shutter phase={shutterPhase} />

          <div style={{
            position: 'relative', zIndex: 10, width: '100%', maxWidth: '1180px', padding: '0 2.5rem',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            opacity: contentVisible ? 1 : 0,
            transform: contentVisible ? 'translateY(0)' : 'translateY(10px)',
            transition: contentVisible ? 'opacity 0.3s ease-out 0.05s, transform 0.3s ease-out 0.05s' : 'none',
          }}>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '4rem', alignItems: 'center', width: '100%' }}>
              <FrameImage frame={frame} isMobile={false} />
              <FrameText frame={frame} isMobile={false} />
            </div>
          </div>

          {/* Progress bar */}
          <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', width: '260px', zIndex: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              {filmFrames.map((_, i) => (
                <span key={i} style={{ fontFamily: 'monospace', fontSize: '0.58rem', color: i === currentIndex ? '#f59e0b' : 'rgba(255,255,255,0.18)', fontWeight: i === currentIndex ? 700 : 400, transition: 'color 0.3s' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              ))}
            </div>
            <div style={{ width: '100%', height: '2px', backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${((currentIndex + 1) / filmFrames.length) * 100}%`, background: 'linear-gradient(to right, #a855f7, #f59e0b)', borderRadius: '2px', transition: 'width 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }} />
            </div>
            <span style={{ fontFamily: 'monospace', fontSize: '0.6rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              ÉTAPE {String(currentIndex + 1).padStart(2, '0')} / {String(filmFrames.length).padStart(2, '0')}
            </span>
          </div>

          {/* Dots latéraux */}
          <div style={{ position: 'absolute', right: '1.75rem', top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: '0.625rem', zIndex: 20 }}>
            {filmFrames.map((_, i) => (
              <button key={i} onClick={() => triggerTransition(i)} style={{ width: '7px', height: '7px', borderRadius: '50%', border: 'none', cursor: 'pointer', padding: 0, backgroundColor: i === currentIndex ? '#a855f7' : 'rgba(255,255,255,0.15)', transition: 'all 0.25s', transform: i === currentIndex ? 'scale(1.4)' : 'scale(1)' }} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <section style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#000', padding: '0 1rem', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(88,28,135,0.12), transparent 60%)' }} />
        <div style={{ position: 'relative', textAlign: 'center' }}>
          <div style={{ fontSize: '4.5rem', marginBottom: '1.5rem' }}>🎬</div>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, color: 'white', marginBottom: '1.25rem', letterSpacing: '-0.025em' }}>Prêt à commencer ?</h2>
          <p style={{ fontSize: '1.15rem', color: '#888', maxWidth: '32rem', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            Vous avez découvert notre processus en 6 étapes. Parlons de votre projet.
          </p>
          <a href="#contact" style={{ display: 'inline-block', padding: '1rem 2.25rem', background: 'linear-gradient(135deg, #9333ea, #6d28d9)', borderRadius: '9999px', color: 'white', fontWeight: 600, fontSize: '1rem', textDecoration: 'none', letterSpacing: '0.02em', boxShadow: '0 0 40px -8px rgba(147,51,234,0.5)', transition: 'transform 0.2s, box-shadow 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 0 60px -8px rgba(147,51,234,0.7)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 0 40px -8px rgba(147,51,234,0.5)'; }}
          >
            Prendre rendez-vous →
          </a>
        </div>
      </section>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// EXPORT
// ═══════════════════════════════════════════════════════════════════════════════
const HowItWorks = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile ? <HowItWorksMobile /> : <HowItWorksDesktop />;
};

export default HowItWorks;
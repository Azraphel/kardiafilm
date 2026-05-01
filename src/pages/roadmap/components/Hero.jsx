export default function Hero() {
  return (
    <section id="hero" className="rm-hero">
      <div className="rm-hero-bg" />
      <div className="rm-hero-orb rm-hero-orb-1" />
      <div className="rm-hero-orb rm-hero-orb-2" />
      <div className="rm-inner rm-hero-inner">
        <div className="rm-hero-badge">Nettoyage commercial · Plan 0 à 50 000$/mois</div>
        <h1 className="rm-hero-titre">
          Comment faire partie du<br />
          <span className="grad-amber">top 1%</span> des compagnies<br />
          de <span className="grad-violet">nettoyage commercial.</span>
        </h1>
        <p className="rm-hero-sous">
          La majorité stagne entre 10 000 et 20 000$/mois pendant des années. Voici pourquoi — et le plan complet pour en sortir.
        </p>
        <div className="rm-scroll-hint">
          <div className="rm-scroll-line" />
          Défiler pour commencer
        </div>
      </div>
    </section>
  );
}

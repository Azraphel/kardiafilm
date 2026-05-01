import Reveal from './Reveal';

export default function SectionLevier() {
  return (
    <section className="rm-section alt" id="levier">
      <div className="rm-inner">
        <Reveal>
          <div className="rm-section-label">02 — Le levier de l'attention</div>
          <h2 className="rm-section-titre">
            La qualité seule<br />ne suffit pas à <span className="grad-violet">soulever une entreprise.</span>
          </h2>
        </Reveal>

        <Reveal>
          <div className="rm-levier-quote">
            <p>« Donnez-moi un levier assez grand et un point d'appui, et je soulèverai la Terre. »</p>
            <cite>— Archimède, il y a plus de 2 000 ans</cite>
          </div>
        </Reveal>

        <Reveal>
          <div className="rm-corps">
            <p>Pour une compagnie de nettoyage commercial, le <strong>point d'appui</strong> c'est tout ce que tu as déjà bâti — la qualité de ton service, ton équipe, tes résultats. C'est solide. C'est réel. Mais seul, ça ne suffit pas.</p>
            <p>Le <strong>levier, c'est le système.</strong> Une compagnie qui fait le meilleur travail de nettoyage commercial à Montréal, et dont personne n'a jamais entendu parler, n'existe pas aux yeux du marché.</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="rm-levier-diagram" aria-hidden="true">
            <div className="rm-levier-bar-container">
              <div className="rm-levier-bar rm-levier-bar-qualite" />
              <div className="rm-levier-bar-label">Qualité</div>
            </div>
            <div className="rm-levier-op plus">+</div>
            <div className="rm-levier-bar-container">
              <div className="rm-levier-bar rm-levier-bar-systeme" />
              <div className="rm-levier-bar-label">Système</div>
            </div>
            <div className="rm-levier-op eq">=</div>
            <div className="rm-levier-bar-container">
              <div className="rm-levier-bar rm-levier-bar-result" />
              <div className="rm-levier-bar-label">50k+/mois</div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="rm-corps">
            <p>Ce n'est pas un hasard qu'Apple ait fait une pub au Super Bowl sans même montrer son ordinateur. Ce n'est pas un hasard que Dropbox ait tout misé sur le bouche-à-oreille systématisé. Ce n'est pas un hasard que Four Seasons ait investi dans des standards visibles avant de scaler à l'international.</p>
            <p><strong>La première bataille à gagner, ce n'est pas la bataille de la qualité. C'est la bataille du système.</strong></p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

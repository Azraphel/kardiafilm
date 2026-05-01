import Reveal from './Reveal';

export default function SectionDouleur() {
  return (
    <section className="rm-section" id="douleur">
      <div className="rm-inner">
        <Reveal>
          <div className="rm-section-label">01 — La douleur</div>
          <h2 className="rm-section-titre">
            Tu travailles fort.<br />Mais les leads partent ailleurs.
          </h2>
        </Reveal>

        <Reveal>
          <div className="rm-douleur-grid">
            <div className="rm-douleur-card rm-douleur-avant">
              <div className="rm-douleur-card-label">Aujourd'hui</div>
              <div className="rm-douleur-revenue">10 000 — 20 000$/mois</div>
              <ul className="rm-douleur-list">
                <li>Difficile à scaler</li>
                <li>Peu de nouveaux contrats</li>
                <li>Courir après les prospects</li>
                <li>Revenus qui varient chaque mois</li>
              </ul>
            </div>
            <div className="rm-douleur-arrow-v">
              <div className="rm-douleur-arrow-line" />
              <div className="rm-douleur-arrow-head" />
            </div>
            <div className="rm-douleur-card rm-douleur-apres">
              <div className="rm-douleur-card-label">La cible</div>
              <div className="rm-douleur-revenue">50 000$/mois +</div>
              <ul className="rm-douleur-list">
                <li>Scaler sans friction</li>
                <li>Calendrier plein</li>
                <li>Prospects qui viennent à vous</li>
                <li>Revenus en croissance chaque mois</li>
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="rm-corps">
            <p>Tu travailles fort. Tu livres un bon service. Mais à la fin de la journée, tu regardes ton téléphone et tu vois des appels manqués. Des messages sans réponse. Des leads qui sont passés à quelqu'un d'autre pendant que tu étais sur un job.</p>
            <p>Et pour certains, c'est encore pire — le téléphone ne sonne pas du tout. Pas d'appels manqués. Pas de messages. Juste le silence. Un bon service, une équipe fiable, et pourtant personne ne sait que tu existes.</p>
            <p>Tu sais que ton travail est bon. Tes clients actuels le savent aussi. Mais les prochains clients — ceux qui auraient pu signer cette semaine — ne le savent pas encore. Et dans le temps qu'il faut pour les convaincre, <strong>un concurrent moins bon que toi les a déjà rappelés.</strong></p>
            <p className="rm-corps-conclusion">Ce n'est pas un problème de qualité. Ce n'est pas un problème d'effort. C'est un problème de système.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

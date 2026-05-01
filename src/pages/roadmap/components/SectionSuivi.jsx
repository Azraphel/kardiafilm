// components/SectionSuivi.jsx
import Reveal from './Reveal';

export default function SectionSuivi() {
  return (
    <section className="rm-section" id="suivi">
      <div className="rm-inner">
        <p className="rm-section-num">05 — Le système de suivi</p>

        <Reveal>
          <div className="rm-corps">
            <p>Tu as maintenant les trois canaux. Des références qui se propagent. Une crédibilité qui travaille en arrière-plan. Une publicité qui amplifie le tout. Le téléphone commence à sonner. Les formulaires se remplissent.</p>
            <p>Et c'est là que la plupart des compagnies perdent la partie. Pas à cause du mauvais service. Pas à cause du mauvais marketing. À cause de ce qui se passe — ou ne se passe pas — dans les minutes qui suivent l'arrivée d'un lead.</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="rm-phrase-cle">
            Le premier qui répond a un avantage considérable.<br />
            <em>Pas le meilleur. Le premier.</em>
          </div>
        </Reveal>

        <Reveal>
          <div className="rm-corps">
            <p>Un prospect qui remplit un formulaire à 21h un mardi ne va pas attendre jusqu'au lendemain matin. Il a envoyé le même formulaire à deux ou trois autres compagnies en même temps. Les chances de convertir un lead chutent de façon radicale après 10 minutes sans réponse.</p>
            <p>Et la réalité pour la plupart des compagnies de nettoyage commercial, c'est que la réponse prend des heures — parce que tu es sur un job, parce que tu n'as pas vu le message. C'est pour ça que des compagnies avec un excellent service perdent des contrats face à des concurrents moins bons. <strong>Pas parce que le concurrent nettoie mieux. Parce qu'il a rappelé en premier.</strong></p>
          </div>
        </Reveal>

        <Reveal>
          <div className="rm-suivi-grid">
            <div className="rm-suivi-col sans">
              <div className="rm-suivi-col-label">Sans système</div>
              <div className="rm-suivi-item"><span>✗</span>Réponse en heures ou en jours</div>
              <div className="rm-suivi-item"><span>✗</span>Leads perdus hors des heures d'affaires</div>
              <div className="rm-suivi-item"><span>✗</span>Aucun suivi automatique</div>
              <div className="rm-suivi-item"><span>✗</span>Volume non gérable quand ça scale</div>
            </div>
            <div className="rm-suivi-col avec">
              <div className="rm-suivi-col-label">Avec système</div>
              <div className="rm-suivi-item"><span>✓</span>Réponse immédiate, 24h/7j</div>
              <div className="rm-suivi-item"><span>✓</span>Chaque lead capturé au moment où il entre</div>
              <div className="rm-suivi-item"><span>✓</span>Relance automatique si pas de réponse</div>
              <div className="rm-suivi-item"><span>✓</span>Tu interviens quand le prospect est prêt</div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="rm-corps">
            <p>Un humain ne scale pas. Un système, si. Voici ce que ça ressemble concrètement quand le système est en place.</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="rm-suivi-systeme">
            <div className="rm-suivi-systeme-label">Le flux en temps réel</div>
            <div className="rm-suivi-flux">
              <div className="rm-suivi-flux-item">
                <div className="rm-suivi-flux-icon">01</div>
                <div className="rm-suivi-flux-contenu">
                  <div className="rm-suivi-flux-titre">Lead entre — n'importe quelle heure</div>
                  <div className="rm-suivi-flux-desc">Formulaire web, publicité Meta, appel manqué, Google. Le système le capture instantanément dans le CRM.</div>
                </div>
              </div>
              <div className="rm-suivi-flux-ligne" />
              <div className="rm-suivi-flux-item">
                <div className="rm-suivi-flux-icon">02</div>
                <div className="rm-suivi-flux-contenu">
                  <div className="rm-suivi-flux-titre">AI Voice Agent rappelle en moins de 60 secondes</div>
                  <div className="rm-suivi-flux-desc">Qualification automatique, collecte des besoins, prise de rendez-vous si le prospect est qualifié — sans que tu décroches.</div>
                </div>
              </div>
              <div className="rm-suivi-flux-ligne" />
              <div className="rm-suivi-flux-item">
                <div className="rm-suivi-flux-icon">03</div>
                <div className="rm-suivi-flux-contenu">
                  <div className="rm-suivi-flux-titre">Séquence automatique si pas de réponse</div>
                  <div className="rm-suivi-flux-desc">SMS, email, second appel — espacés de façon intelligente. Le prospect reçoit jusqu'à 5 points de contact sans que tu lèves le petit doigt.</div>
                </div>
              </div>
              <div className="rm-suivi-flux-ligne" />
              <div className="rm-suivi-flux-item">
                <div className="rm-suivi-flux-icon">04</div>
                <div className="rm-suivi-flux-contenu">
                  <div className="rm-suivi-flux-titre">Tu interviens quand le prospect est prêt</div>
                  <div className="rm-suivi-flux-desc">Une notification te dit exactement à quel stade est le lead. Tu entres dans la conversation quand c'est le moment de fermer — pas de passer du temps à qualifier.</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="rm-corps">
            <p>Générer de l'attention sans système de suivi, c'est du gaspillage. Avoir un système sans attention à capturer, c'est un outil inutile. Les deux ensemble — <strong>c'est une machine de croissance.</strong></p>
            <p>Pas plus de travail. Un meilleur système.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

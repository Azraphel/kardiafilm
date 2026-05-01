import { useState } from 'react';
import Reveal from './Reveal';
import ModalCEO from './ModalCEO';
import DiagramReferral from './DiagramReferral';
import DiagramCredibilite from './DiagramCredibilite';
import DiagramPublicite from './DiagramPublicite';

import drewHouston from '../../../assets/drew-houston.jpg';
import isadoreSharp from '../../../assets/isadore-sharp.jpg';
import steveJobs    from '../../../assets/steve-jobs.jpg';

export default function SectionPhases() {
  const [modal, setModal] = useState(null);

  return (
    <section className="rm-section rm-section-phases" id="phases">
      <div className="rm-inner">
        <Reveal>
          <div className="rm-section-label">04 — Les six phases de croissance</div>
          <h2 className="rm-section-titre">Une carte, pas des règles.</h2>
          <div className="rm-phases-intro">
            Ces phases ne sont pas des portes verrouillées. Ce sont des portraits. Si tu te reconnais dans la Phase 4, c'est là que tu es — peu importe par où tu es passé. Si tu as les ressources pour brûler des étapes, brûle-les. L'important c'est que tu saches dans quoi tu entres.
          </div>
        </Reveal>

        {/* ═══════════════ PHASE 1 ═══════════════ */}
        <div className="rm-phase-new" id="phase1">
          <Reveal>
            <div className="rm-phase-new-header">
              <div className="rm-phase-badge">1</div>
              <div className="rm-phase-meta">
                <div className="rm-phase-range">0 à 3 000$/mois</div>
                <div className="rm-phase-new-titre">Fondations</div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="rm-phase-block">
              <div className="rm-phase-block-label">Qui tu es</div>
              <p>Tu viens de lancer ou tu fais moins de 3 000$/mois. Peut-être quelques clients, peut-être zéro. L'argent est irrégulier. Tu travailles fort mais tu ne sais pas encore exactement pourquoi certains clients signent et d'autres non. <strong>C'est normal. Tout le monde passe par là.</strong></p>
            </div>
          </Reveal>

          <Reveal>
            <div className="rm-phase-block">
              <div className="rm-phase-block-label">Pourquoi tu es bloqué</div>
              <p>Ton problème à ce stade n'est pas le marketing. C'est que tu n'as pas encore assez de données sur ton propre business pour savoir ce qui fonctionne. Mettre de l'argent en pub maintenant serait une erreur — tu amplifierais quelque chose que tu n'as pas encore prouvé.</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="rm-phase-block">
              <div className="rm-phase-block-label">La mentalité à avoir</div>
              <div className="rm-mentalite-box">Un seul objectif : trouver tes 5 premiers clients récurrents et comprendre exactement pourquoi ils ont choisi toi. Tout le reste est secondaire.</div>
            </div>
          </Reveal>

          <Reveal>
            <div className="rm-phase-block">
              <div className="rm-phase-block-label">Le canal dominant — La Référence</div>
              <div className="rm-ceo-card">
                <div className="rm-ceo-card-header">
                  <div className="rm-ceo-avatar">
                    <img src={drewHouston} alt="Drew Houston" />
                  </div>
                  <div>
                    <div className="rm-ceo-card-nom">Drew Houston</div>
                    <div className="rm-ceo-card-role">Fondateur & CEO, Dropbox</div>
                  </div>
                </div>
                <div className="rm-ceo-card-lecon">
                  Dropbox dépensait entre 233$ et 388$ pour acquérir un nouveau client en publicité — pour un produit à 99$/an. Les chiffres ne fonctionnaient pas. En analysant leurs données, ils ont réalisé qu'un tiers de leurs utilisateurs venaient déjà de recommandations naturelles. Ils n'ont pas inventé quelque chose de nouveau. <span className="hl">Ils ont systématisé ce qui existait déjà.</span> Résultat : 3 900% de croissance en 15 mois.
                  <br /><br />
                  Tes clients satisfaits parlent probablement déjà de toi. La question c'est : est-ce que tu rends ce comportement aussi facile et naturel que possible — <strong>ou tu le laisses se produire au hasard ?</strong>
                  <br />
                  <button className="rm-ceo-btn" onClick={() => setModal('houston')}>
                    Comprendre la psychologie de : Drew Houston
                  </button>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="rm-diag-canal-wrap">
              <DiagramReferral />
            </div>
          </Reveal>

          <Reveal>
            <div className="rm-phase-block">
              <div className="rm-phase-block-label">Ce que tu fais</div>

              <div className="rm-action-group">
                <div className="rm-action-group-title">Tes premières sources de clients</div>
                <div className="rm-action-items">
                  <div className="rm-action-item">Les plateformes comme Teamcleano, HomeGuide ou Thumbtack — utilise-les si tu pars de zéro. Elles ont une limite importante que tu vas comprendre en Phase 2, mais pour tes premiers jobs, elles font le travail. Tremplin, pas destination.</div>
                  <div className="rm-action-item">Chaque client signé en direct est un actif que tu possèdes — il peut te référer, te laisser un avis, renouveler. Le client sur plateforme, non.</div>
                </div>
              </div>

              <div className="rm-action-group">
                <div className="rm-action-group-title">Le bouche-à-oreille systématisé</div>
                <div className="rm-action-items">
                  <div className="rm-action-item">Une question après chaque bon job : <em>« Est-ce que tu connais d'autres gestionnaires qui pourraient bénéficier du même service ? »</em> Pas un programme formel. Juste la question, posée à chaque fois.</div>
                  <div className="rm-action-item">Quand un gestionnaire cherche un service de nettoyage, il commence rarement par Google. Il appelle un collègue. Si ton nom sort de cette conversation, tu arrives avec une longueur d'avance qu'aucune pub ne peut acheter aussi vite.</div>
                </div>
              </div>

              <div className="rm-action-group">
                <div className="rm-action-group-title">Ta présence minimale en ligne</div>
                <div className="rm-action-items">
                  <div className="rm-action-item">Google Business Profile complet avec photos. Quand quelqu'un cherche ton nom après une référence, c'est là qu'il atterrit. Si c'est vide, tu perds le deal avant même d'avoir décroché.</div>
                  <div className="rm-action-item">Demande un avis Google après chaque job — pas des semaines plus tard. La satisfaction est au maximum juste après la livraison.</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="rm-phase-divider" />

        {/* ═══════════════ PHASE 2 ═══════════════ */}
        <div className="rm-phase-new" id="phase2">
          <Reveal>
            <div className="rm-phase-new-header">
              <div className="rm-phase-badge">2</div>
              <div className="rm-phase-meta">
                <div className="rm-phase-range">3 000 à 10 000$/mois</div>
                <div className="rm-phase-new-titre">Stabilisation</div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="rm-phase-block">
              <div className="rm-phase-block-label">Qui tu es</div>
              <p>Tu as des clients. Tu livres. Les gens sont satisfaits. Mais tu commences à sentir que tout repose sur toi — les appels, les suivis, la coordination. Si tu décroches, le business ralentit. <strong>Ton problème n'est plus de trouver tes premiers contrats. C'est de construire quelque chose qui ne dépend pas entièrement de toi.</strong></p>
            </div>
          </Reveal>

          <Reveal>
            <div className="rm-phase-block">
              <div className="rm-phase-block-label">Pourquoi tu es bloqué</div>
              <p>Les plateformes te donnent encore des jobs, mais tu commences à voir la limite : tu travailles pour leurs clients, pas pour les tiens. Quand tu quittes la plateforme, tu repars de zéro. En même temps, ton bouche-à-oreille tourne mais de façon imprévisible. Tu ne contrôles pas le rythme.</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="rm-phase-block">
              <div className="rm-phase-block-label">La mentalité à avoir</div>
              <div className="rm-mentalite-box">Chaque client que tu signes en direct cette phase est un actif. Ton objectif : que la majorité de tes revenus viennent de clients récurrents directs. C'est cette base-là qui rend tout le reste possible.</div>
            </div>
          </Reveal>

          <Reveal>
            <div className="rm-phase-block">
              <div className="rm-phase-block-label">Le canal dominant — La Crédibilité</div>
              <div className="rm-ceo-card">
                <div className="rm-ceo-card-header">
                  <div className="rm-ceo-avatar">
                    <img src={isadoreSharp} alt="Isadore Sharp" />
                  </div>
                  <div>
                    <div className="rm-ceo-card-nom">Isadore Sharp</div>
                    <div className="rm-ceo-card-role">Fondateur, Four Seasons Hotels</div>
                  </div>
                </div>
                <div className="rm-ceo-card-lecon">
                  En 1961, Isadore Sharp frappait des portes dans une industrie où tout le monde faisait les mêmes promesses. Il a décidé que la preuve serait visible <span className="hl">avant même la conversation.</span> Des standards documentés. Des garanties réelles. Une réputation construite méthodiquement.
                  <br /><br />
                  À cette phase, quelqu'un qui entend parler de toi par référence va te chercher sur Google avant de rappeler. Ce qu'il trouve dans ces 90 secondes décide s'il te contacte ou appelle le suivant. <strong>Ce n'est pas la qualité de ton travail qui décide — c'est ce qu'il a trouvé avant de te parler.</strong>
                  <br />
                  <button className="rm-ceo-btn" onClick={() => setModal('sharp')}>
                    Comprendre la psychologie de : Isadore Sharp
                  </button>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="rm-diag-canal-wrap">
              <DiagramCredibilite />
            </div>
          </Reveal>

          <Reveal>
            <div className="rm-phase-block">
              <div className="rm-phase-block-label">Ce que tu fais</div>

              <div className="rm-action-group">
                <div className="rm-action-group-title">Sortir des plateformes progressivement</div>
                <div className="rm-action-items">
                  <div className="rm-action-item">À chaque opportunité — un client satisfait sur plateforme, une conversation qui s'y prête — propose un contrat annuel direct avec un meilleur tarif. Tu gardes le volume pendant que tu bâtis ta base propre.</div>
                </div>
              </div>

              <div className="rm-action-group">
                <div className="rm-action-group-title">Bâtir ta liste cliente directe</div>
                <div className="rm-action-items">
                  <div className="rm-action-item">Chaque client direct : est-ce qu'il t'a donné un avis ? Est-ce qu'il t'a référé ? Est-ce qu'il sait exactement quels autres services tu offres ?</div>
                  <div className="rm-action-item">La plupart des clients ne référent pas parce que personne ne leur a jamais demandé clairement. Un message simple après chaque bon job, une fois par trimestre, suffit.</div>
                </div>
              </div>

              <div className="rm-action-group">
                <div className="rm-action-group-title">Ta crédibilité en ligne</div>
                <div className="rm-action-items">
                  <div className="rm-action-item">Photos avant/après. Avis qui s'accumulent systématiquement après chaque job. Un profil Google qui dit clairement ce que tu fais, pour qui, dans quelle zone.</div>
                  <div className="rm-action-item">Ce n'est pas du marketing — c'est la confirmation de ce que le référent a déjà dit. Si ta présence confirme la recommandation, le deal est à moitié fait avant que tu décroches.</div>
                </div>
              </div>

              <div className="rm-action-group">
                <div className="rm-action-group-title">Tes premiers systèmes opérationnels</div>
                <div className="rm-action-items">
                  <div className="rm-action-item">Un système de booking simple — Calendly, Jobber, ou même un formulaire Google. Une facturation récurrente automatique pour tes clients mensuels.</div>
                  <div className="rm-action-item">Pas pour paraître professionnel — pour récupérer les heures que tu passes à gérer l'administratif et les mettre sur la livraison et l'acquisition.</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="rm-phase-divider" />

        {/* ═══════════════ PHASE 3 ═══════════════ */}
        <div className="rm-phase-new" id="phase3">
          <Reveal>
            <div className="rm-phase-new-header">
              <div className="rm-phase-badge">3</div>
              <div className="rm-phase-meta">
                <div className="rm-phase-range">10 000 à 25 000$/mois</div>
                <div className="rm-phase-new-titre">Acquisition prévisible</div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="rm-phase-block">
              <div className="rm-phase-block-label">Qui tu es</div>
              <p>Tu fais des bons mois. Les références tournent, ta crédibilité travaille pour toi. Mais il y a un problème que les phases précédentes ne t'ont pas préparé à résoudre : <strong>tu ne peux pas prédire le prochain mois.</strong> Et cette imprévisibilité-là empêche d'investir vraiment — dans l'équipe, dans la capacité, dans la croissance.</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="rm-phase-block">
              <div className="rm-phase-block-label">Pourquoi tu es bloqué</div>
              <p>Le bouche-à-oreille a une limite naturelle. Il génère des leads au rythme des conversations de tes clients — et ce rythme, tu ne le contrôles pas. Pour aller de 15k à 50k$/mois, il te faut un système qui génère de l'attention de façon prévisible et constante.</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="rm-phase-block">
              <div className="rm-phase-block-label">La mentalité à avoir</div>
              <div className="rm-mentalite-box">La pub seule ne suffit pas. Sans système pour convertir les leads qui rentrent, tu paies pour de l'attention que tu perds. La Phase 4 est aussi importante que la Phase 3 — ne lance pas la pub sans le système de suivi en place.</div>
            </div>
          </Reveal>

          <Reveal>
            <div className="rm-phase-block">
              <div className="rm-phase-block-label">Le canal dominant — La Publicité</div>
              <div className="rm-ceo-card">
                <div className="rm-ceo-card-header">
                  <div className="rm-ceo-avatar">
                    <img src={steveJobs} alt="Steve Jobs" />
                  </div>
                  <div>
                    <div className="rm-ceo-card-nom">Steve Jobs</div>
                    <div className="rm-ceo-card-role">Co-fondateur, Apple</div>
                  </div>
                </div>
                <div className="rm-ceo-card-lecon">
                  En 1984, Apple diffuse une pub au Super Bowl. Le conseil voulait l'annuler. Jobs l'impose. En 60 secondes, <span className="hl">30 millions de personnes voient la même chose simultanément.</span> Pas une conversation à la fois comme le bouche-à-oreille — 30 millions d'un coup. Les ventes du Macintosh explosent dans les semaines qui suivent.
                  <br /><br />
                  C'est ça la force de la pub que le bouche-à-oreille ne peut pas égaler : la <strong>vitesse et la portée simultanée.</strong> Ce qui prendrait des mois à construire naturellement peut se produire en quelques semaines.
                  <br />
                  <button className="rm-ceo-btn" onClick={() => setModal('jobs')}>
                    Comprendre la psychologie de : Steve Jobs
                  </button>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="rm-diag-canal-wrap">
              <DiagramPublicite />
            </div>
          </Reveal>

          <Reveal>
            <div className="rm-phase-block">
              <div className="rm-phase-block-label">Ce que tu fais</div>

              <div className="rm-action-group">
                <div className="rm-action-group-title">La publicité Meta ciblée</div>
                <div className="rm-action-items">
                  <div className="rm-action-item">Facebook et Instagram te permettent de cibler exactement les gestionnaires d'immeubles et property managers dans ta zone. Pas une campagne générique — des messages par sous-segment.</div>
                  <div className="rm-action-item">Un facility manager d'immeuble de bureaux a des préoccupations différentes d'un propriétaire d'entrepôt. Ton message devrait le refléter.</div>
                  <div className="rm-action-item">Budget de départ réaliste : 1 000 à 2 500$/mois. Pas pour "essayer" — pour apprendre ce qui convertit et optimiser à partir de données réelles.</div>
                </div>
              </div>

              <div className="rm-action-group">
                <div className="rm-action-group-title">La rétention en parallèle</div>
                <div className="rm-action-items">
                  <div className="rm-action-item">Chaque nouveau client acquis par pub a un coût. Un client récurrent qui reste 2 ans vaut 24 fois le client qui signe une fois.</div>
                  <div className="rm-action-item">Check-ins réguliers, renouvellements proactifs — c'est ce qui transforme ton coût d'acquisition en investissement rentable.</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="rm-phase-divider" />

        {/* ═══════════════ PHASE 4 ═══════════════ */}
        <div className="rm-phase-new" id="phase4">
          <Reveal>
            <div className="rm-phase-new-header">
              <div className="rm-phase-badge">4</div>
              <div className="rm-phase-meta">
                <div className="rm-phase-range">10 000 à 25 000$/mois</div>
                <div className="rm-phase-new-titre">Le système de suivi</div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="rm-phase-block">
              <div className="rm-phase-block-label">Qui tu es</div>
              <p>Ta pub tourne. Les leads commencent à rentrer. Et c'est exactement là que la plupart des compagnies perdent la partie. Tu es sur un job. Le téléphone sonne, tu ne décroches pas. Un lead envoie un formulaire à 21h, tu le vois le lendemain matin. <strong>Dans ce temps-là, il a appelé deux autres compagnies. L'une d'elles a répondu en premier.</strong></p>
            </div>
          </Reveal>

          <Reveal>
            <div className="rm-phase-block">
              <div className="rm-phase-block-label">Pourquoi tu es bloqué</div>
              <p>Le premier qui répond a un avantage considérable. Pas le meilleur. <strong>Le premier.</strong> Les chances de convertir un lead chutent radicalement après 10 minutes sans réponse. C'est pour ça que des compagnies avec un service médiocre battent des compagnies excellentes — pas parce qu'elles nettoient mieux, mais parce qu'elles rappellent en premier.</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="rm-phase-block">
              <div className="rm-phase-block-label">La mentalité à avoir</div>
              <div className="rm-mentalite-box">Un humain ne scale pas. Un système, si. La pub amène l'attention. Le système convertit cette attention. Les deux ensemble c'est une machine. La pub sans système, c'est de l'argent qui part dans le vide.</div>
            </div>
          </Reveal>

          <Reveal>
            <div className="rm-phase-block">
              <div className="rm-phase-block-label">Le canal dominant — L'Automatisation</div>
              <div className="rm-ceo-card">
                <div className="rm-ceo-card-header">
                  <div className="rm-ceo-avatar">JB</div>
                  <div>
                    <div className="rm-ceo-card-nom">Jeff Bezos</div>
                    <div className="rm-ceo-card-role">Fondateur, Amazon</div>
                  </div>
                </div>
                <div className="rm-ceo-card-lecon">
                  Amazon ne s'est pas bâti sur les meilleurs prix. Il s'est bâti sur l'obsession de ce qui se passe <span className="hl">après le clic.</span> Chaque action d'un client déclenche une réponse automatique calibrée — confirmation, suivi, recommandation, relance. Leur système de suivi génère 35% de leurs revenus. Pas leur catalogue. Pas leurs prix. Leur système.
                  <br /><br />
                  <strong>Ce qui différencie les compagnies qui convertissent 20% de leurs leads de celles qui en convertissent 5%, ce n'est pas leur service. C'est ce qui se passe dans les 10 minutes après l'arrivée du lead.</strong>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="rm-phase-block">
              <div className="rm-phase-block-label">Ce que tu fais</div>

              <div className="rm-suivi-systeme">
                <div className="rm-suivi-systeme-label">Le flux en temps réel</div>
                <div className="rm-suivi-flux">
                  <div className="rm-suivi-flux-item">
                    <div className="rm-suivi-flux-icon">01</div>
                    <div className="rm-suivi-flux-contenu">
                      <div className="rm-suivi-flux-titre">Lead entre — n'importe quelle heure</div>
                      <div className="rm-suivi-flux-desc">Formulaire web, pub Meta, appel manqué, Google. Capturé automatiquement dans ton CRM.</div>
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
                      <div className="rm-suivi-flux-desc">SMS, email, second appel espacés intelligemment. Jusqu'à 5 points de contact sans que tu lèves le petit doigt.</div>
                    </div>
                  </div>
                  <div className="rm-suivi-flux-ligne" />
                  <div className="rm-suivi-flux-item">
                    <div className="rm-suivi-flux-icon">04</div>
                    <div className="rm-suivi-flux-contenu">
                      <div className="rm-suivi-flux-titre">Tu interviens quand le prospect est prêt</div>
                      <div className="rm-suivi-flux-desc">Une notification te dit exactement à quel stade est le lead. Tu entres dans la conversation pour fermer — pas pour qualifier.</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rm-action-group">
                <div className="rm-action-group-title">Les outils</div>
                <div className="rm-action-items">
                  <div className="rm-action-item">CRM : Pipedrive, GoHighLevel, ou HubSpot. AI Voice Agent pour les qualifications automatiques. Séquences SMS/email pour les relances.</div>
                  <div className="rm-action-item">La configuration prend du temps — mais une fois en place, le système travaille pendant que ton équipe est sur le terrain.</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="rm-phase-divider" />

        {/* ═══════════════ PHASE 5 ═══════════════ */}
        <div className="rm-phase-new" id="phase5">
          <Reveal>
            <div className="rm-phase-new-header">
              <div className="rm-phase-badge">5</div>
              <div className="rm-phase-meta">
                <div className="rm-phase-range">25 000 à 50 000$/mois</div>
                <div className="rm-phase-new-titre">Machine prévisible</div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="rm-phase-block">
              <div className="rm-phase-block-label">Qui tu es</div>
              <p>Ta pub tourne. Ton système convertit. Tu as des clients récurrents. Mais quelque chose commence à apparaître : <strong>tu dois être présent pour que tout fonctionne.</strong> Si tu arrêtes de pousser, la machine ralentit. Tu as bâti un bon business — mais pas encore une machine qui tourne sans toi.</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="rm-phase-block">
              <div className="rm-phase-block-label">Pourquoi tu es bloqué</div>
              <p>Ce que tu as construit repose encore trop sur tes décisions quotidiennes. Tu es encore le centre de gravité de ton business — et ça plafonne ta croissance parce que tu ne peux pas être partout.</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="rm-phase-block">
              <div className="rm-phase-block-label">La mentalité à avoir</div>
              <div className="rm-mentalite-box">La différence entre un bon business et une machine qui scale, c'est la reproductibilité. Pas l'excellence individuelle — la capacité à livrer le même résultat de façon constante, par n'importe qui dans ton équipe, sans que tu sois dans la pièce.</div>
            </div>
          </Reveal>

          <Reveal>
            <div className="rm-phase-block">
              <div className="rm-phase-block-label">Le canal dominant — La Systématisation</div>
              <div className="rm-ceo-card">
                <div className="rm-ceo-card-header">
                  <div className="rm-ceo-avatar">RK</div>
                  <div>
                    <div className="rm-ceo-card-nom">Ray Kroc</div>
                    <div className="rm-ceo-card-role">Fondateur, McDonald's Corporation</div>
                  </div>
                </div>
                <div className="rm-ceo-card-lecon">
                  Ray Kroc n'a pas inventé le burger. Les frères McDonald l'avaient déjà fait. Ce que Kroc a compris, c'est que le vrai produit n'était pas le burger — <span className="hl">c'était le système.</span> Un processus si bien documenté que le même résultat pouvait être reproduit par n'importe qui, n'importe où, sans dépendre du talent de la personne derrière le comptoir. De 1 restaurant à plus de 40 000.
                  <br /><br />
                  <strong>Ton business n'a pas besoin de 40 000 emplacements. Mais il a besoin que tes processus existent ailleurs que dans ta tête.</strong>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="rm-phase-block">
              <div className="rm-phase-block-label">Ce que tu fais</div>

              <div className="rm-action-group">
                <div className="rm-action-group-title">Documenter ce qui fonctionne</div>
                <div className="rm-action-items">
                  <div className="rm-action-item">Chaque processus qui donne de bons résultats — onboarding d'un client, gestion d'une plainte, suivi après un job — doit être documenté. Pour que ton équipe puisse livrer sans te demander à chaque étape.</div>
                </div>
              </div>

              <div className="rm-action-group">
                <div className="rm-action-group-title">Déléguer avec confiance</div>
                <div className="rm-action-items">
                  <div className="rm-action-item">Un premier sales rep ou responsable des suivis. Des KPIs clairs pour chaque rôle.</div>
                  <div className="rm-action-item">Un dashboard qui te donne une vue en temps réel — leads actifs, taux de conversion, rétention client — sans que tu aies besoin d'appeler quelqu'un pour savoir où en est le business.</div>
                </div>
              </div>

              <div className="rm-action-group">
                <div className="rm-action-group-title">Optimiser ce qui convertit</div>
                <div className="rm-action-items">
                  <div className="rm-action-item">À cette phase tu as des données. Quelles campagnes convertissent le mieux. Quel segment a le meilleur LTV. Quelle zone performe. Concentre tes ressources là où le retour est le plus élevé — pas sur ce qui semble intéressant, sur ce que les chiffres confirment.</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="rm-phase-divider" />

        {/* ═══════════════ PHASE 6 ═══════════════ */}
        <div className="rm-phase-new" id="phase6">
          <Reveal>
            <div className="rm-phase-new-header">
              <div className="rm-phase-badge">6</div>
              <div className="rm-phase-meta">
                <div className="rm-phase-range">50 000$/mois et plus</div>
                <div className="rm-phase-new-titre">Scaling industriel</div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="rm-phase-block">
              <div className="rm-phase-block-label">Qui tu es</div>
              <p>Ton business tourne. Ton équipe livre. Tu n'es plus en mode survie ni en mode construction — tu es en mode expansion. Et à l'horizon, tu commences à voir quelque chose de différent : <strong>les contrats industriels.</strong> Usines, entrepôts, centres de distribution. Des deals à 30 000 à 100 000$+/an chacun.</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="rm-phase-block">
              <div className="rm-phase-block-label">Pourquoi c'est différent</div>
              <p>Les prospects industriels ne répondent pas aux mêmes signaux. Ils ont des processus d'approbation, des budgets annuels, des comités de décision. Un email froid au mauvais moment n'arrive même pas sur leur radar. Les cycles de vente durent 6 à 12 mois. <strong>Mais chaque contrat signé change le calibre de ton entreprise.</strong></p>
            </div>
          </Reveal>

          <Reveal>
            <div className="rm-phase-block">
              <div className="rm-phase-block-label">Ce que tu fais</div>

              <div className="rm-action-group">
                <div className="rm-action-group-title">Un pipeline industriel actif</div>
                <div className="rm-action-items">
                  <div className="rm-action-item">Une séquence de nurturing sur 6 à 12 mois — emails éducatifs espacés intelligemment, cas concrets de compagnies similaires, preuves de résultats progressives. Pas du harcèlement. Une présence constante.</div>
                  <div className="rm-action-item">Quand leur contrat actuel se renouvelle, ton nom est le premier qui leur vient.</div>
                </div>
              </div>

              <div className="rm-action-group">
                <div className="rm-action-group-title">Outreach multi-canal</div>
                <div className="rm-action-items">
                  <div className="rm-action-item">Directeurs des opérations, responsables d'installations, gestionnaires de sites — ciblés simultanément par email, LinkedIn, et SMS selon leur stade dans ton pipeline.</div>
                </div>
              </div>

              <div className="rm-action-group">
                <div className="rm-action-group-title">Un processus de vente structuré + dashboard CEO</div>
                <div className="rm-action-items">
                  <div className="rm-action-item">Pas juste toi qui closes tous les deals. Un processus documenté que quelqu'un d'autre dans ton équipe peut exécuter sur des cycles de 6 à 12 mois.</div>
                  <div className="rm-action-item">Vue stratégique en temps réel : combien de prospects actifs, à quel stade, quelle valeur potentielle, quelle probabilité de fermeture. Tu gères une machine — pas juste une équipe.</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

      </div>

      {modal && <ModalCEO id={modal} onClose={() => setModal(null)} />}
    </section>
  );
}

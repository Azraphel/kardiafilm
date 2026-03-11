import { Building2, Sparkles, Phone, Calendar, Users } from 'lucide-react';
import React from 'react';

export const caseStudies = [
  {
    industry: "Rénovation résidentielle",
    company: "Réno Excellence",
    results: { leads: "127", period: "3 mois", cost: "8,40$" },
    icon: <Building2 className="w-12 h-12" />
  },
  {
    industry: "Entretien ménager",
    company: "CleanPro Services",
    results: { leads: "89", period: "2 mois", cost: "6,20$" },
    icon: <Sparkles className="w-12 h-12" />
  }
];

export const benefits = [
  {
    icon: <Phone className="w-8 h-8" />,
    title: "Des appels de clients tous les jours",
    desc: "Des gens qui veulent vos services vous appellent directement"
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Votre agenda plein de rendez-vous",
    desc: "Vous arrêtez de courir après les contrats"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Un système qui répond à votre place",
    desc: "Même quand vous travaillez, le système prend les rendez-vous"
  }
];

export const problemItems = [
  "Pas de plan pour transformer les vues en appels",
  "Personne pour répondre aux gens intéressés",
  "Aucun suivi quand quelqu'un pose une question",
  "Message qui parle à tout le monde donc à personne"
];

export const howItWorksItems = [
  {
    step: "1",
    title: "On crée les vidéos",
    desc: "Des vidéos faites pour que les gens vous appellent."
  },
  {
    step: "2",
    title: "On les montre aux bonnes personnes",
    desc: "Facebook et Google les diffusent à ceux qui cherchent vos services dans votre région."
  },
  {
    step: "3",
    title: "Le système répond et prend les rendez-vous",
    desc: "Quand quelqu'un pose une question, le système répond et met le rendez-vous dans votre agenda."
  }
];

export const screenshots = [
  { img: '/img/1.png', label: 'Campagne Facebook qui tourne' },
  { img: '/img/2.png', label: "L'IA qui prend le rendez-vous" },
  { img: '/img/3.png', label: 'Conversations réelles clients' }
];
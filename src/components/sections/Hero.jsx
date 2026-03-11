// components/sections/Hero.jsx
import React from 'react';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay muted loop playsInline
      >
        <source src="/vid/hero.mov" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium backdrop-blur-sm">
          Kardia Film • Québec
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Des vidéos qui vous<br />
          <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-amber-400 bg-clip-text text-transparent">
            apportent des clients
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-3 font-medium">
          On crée des vidéos qui vous apportent des clients.
        </p>
        <p className="text-lg text-gray-500 max-w-xl mx-auto mb-10">
          Pas juste des vues. Des vrais appels.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button href="#contact" variant="primary">
            Voir si ça marche pour moi
          </Button>
          <Button href="#resultats" variant="secondary">
            Voir les preuves
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
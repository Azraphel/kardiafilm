// pages/Home.jsx
import React from 'react';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Problem from '../components/sections/Problem';
import Benefits from '../components/sections/Benefits';
import CaseStudies from '../components/sections/CaseStudies';
import Screenshots from '../components/sections/Screenshots';
import HowItWorks from '../components/sections/HowItWorks';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';
import FilmStrip from '../components/ui/FilmStrip';
import { useOneTimeSnap } from '../hooks/useOneTimeSnap';
import { useFilmEffects } from '../hooks/useFilmEffects';
import '../styles/animations.css';

export default function Home() {
  useOneTimeSnap();
  useFilmEffects();

  return (
    <div
      className="min-h-screen bg-black text-white font-sans"
      style={{ overflowX: 'clip' }}
    >
      <div className="film-lines" />
      <Navigation />
      <Hero />
      <Problem />
      <Benefits />
      <CaseStudies />
      <FilmStrip variant="premium" />
      <Screenshots />
      <HowItWorks />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
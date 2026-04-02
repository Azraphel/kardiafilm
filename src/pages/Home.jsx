// pages/Home.jsx
import React from 'react';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Problem from '../components/sections/Problem';
import Solution from '../components/sections/Solution';
import CaseStudy from '../components/sections/CaseStudies';
import HowItWorks from '../components/sections/HowItWorks';
import FAQ from '../components/sections/Faq';
import Contact from '../components/sections/Contact';
import '../styles/animations.css';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans" style={{ overflowX: 'clip' }}>

      {/* Effets globaux */}
      <div className="film-grain" />
      <div className="film-lines" />
      <div className="film-vignette" />

      <Navigation />
      <Hero />
      <About />      {/* ← juste après le Hero — les gens achètent Stéphane d'abord */}
      <Problem />
      <Solution />
      <CaseStudy />
      <HowItWorks />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
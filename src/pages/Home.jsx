// pages/Home.jsx
import React from 'react';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Problem from '../components/sections/Problem';
import Solution from '../components/sections/Solution';
import CaseStudy from '../components/sections/CaseStudy';
import SocialProof from '../components/sections/SocialProof';
import HowItWorks from '../components/sections/HowItWorks';
import FAQ from '../components/sections/FAQ';
import Contact from '../components/sections/Contact';
import '../styles/global.css';

export default function Home() {
  return (
    <div style={{ overflowX: 'clip' }}>
      <div className="film-grain" />
      <Navigation />
      <Hero />
      <div className="grad-line" />
      <About />
      <div className="grad-line" />
      <Problem />
      <div className="grad-line" />
      <Solution />
      <div className="grad-line" />
      <CaseStudy />
      <div className="grad-line" />
      <SocialProof />
      <div className="grad-line" />
      <HowItWorks />
      <div className="grad-line" />
      <FAQ />
      <div className="grad-line" />
      <Contact />
      <Footer />
    </div>
  );
}
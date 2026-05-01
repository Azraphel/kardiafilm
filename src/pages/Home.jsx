// pages/Home.jsx
import React, { useEffect } from 'react';
import Navigation from '../components/layout/Navigation';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Problem from '../components/sections/Problem';
import Solution from '../components/sections/Solution';
import CaseStudy from '../components/sections/CaseStudy';
import SocialProof from '../components/sections/SocialProof';
import RoadmapCTA from '../components/sections/RoadmapCTA';
import HowItWorks from '../components/sections/HowItWorks';
import FAQ from '../components/sections/FAQ';
import Contact from '../components/sections/Contact';
import '../styles/global.css';

export default function Home() {

  useEffect(() => {
  if (window.fbq) return; // évite de charger 2 fois
  
  (function(f,b,e,v,n,t,s){
    if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)
  })(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
  
  window.fbq('init', 'process.env.REACT_APP_META_PIXEL_ID');
  window.fbq('track', 'PageView');
}, []);

  return (
    <div style={{ overflowX: 'clip' }}>
      <div className="film-grain" />
      <Navigation />
      <Hero />
      <div className="grad-line" />
      <RoadmapCTA />
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
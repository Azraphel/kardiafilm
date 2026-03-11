import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-gradient-to-b from-black to-purple-950/10 border-t border-purple-900/20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="text-2xl font-bold mb-4">
          <span className="text-white">KARDIA</span>
          <span className="bg-gradient-to-r from-purple-400 to-amber-500 bg-clip-text text-transparent"> FILM</span>
        </div>
        <p className="text-gray-500">
          Vidéo • Publicité • Système automatisé
        </p>
        <p className="text-gray-600 text-sm mt-4">
          Montréal, Québec • 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useScroll } from '../../hooks/useScroll';
import Button from '../ui/Button';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrolled = useScroll(50);

  const navItems = [
    { label: 'Résultats', href: '#resultats' },
    { label: 'Comment ça marche', href: '#systeme' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-black/90 backdrop-blur-xl py-4 border-b border-purple-900/20' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold group cursor-pointer">
          <span className="text-white transition-all duration-300 group-hover:text-purple-400">
            KARDIA
          </span>
          <span className="bg-gradient-to-r from-purple-400 to-amber-500 bg-clip-text text-transparent">
            {' '}FILM
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
          <Button href="#contact" variant="primary">
            Parler à quelqu'un
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-purple-400"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-purple-900/20">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-purple-400 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button href="#contact" variant="primary" className="mt-2">
              Parler à quelqu'un
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
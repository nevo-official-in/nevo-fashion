import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl bg-black/40 border-b border-white/5' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-bold tracking-tighter"
            style={{ fontFamily: 'Syne, sans-serif' }}
            data-testid="nav-logo"
          >
            NEVO THREADS
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm uppercase tracking-widest text-white/60 hover:text-white transition-colors"
              data-testid="nav-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="text-sm uppercase tracking-widest text-white/60 hover:text-white transition-colors"
              data-testid="nav-products"
            >
              Collection
            </button>
            <button
              onClick={() => scrollToSection('lookbook')}
              className="text-sm uppercase tracking-widest text-white/60 hover:text-white transition-colors"
              data-testid="nav-lookbook"
            >
              Lookbook
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm uppercase tracking-widest text-white/60 hover:text-white transition-colors"
              data-testid="nav-contact"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
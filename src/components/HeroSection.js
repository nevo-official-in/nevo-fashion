import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">

      {/* LAYER 1: Main Background (Sabse Neeche - z-0) */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src="/hero-bg.jpg"
          alt="Nevo Background"
          className="w-full h-full object-cover object-center pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* LAYER 2: Content Area (Ab ye z-10 par hai) */}
      {/* Kyunki ye z-10 hai, ye background ke upar dikhega */}
      <div className="relative z-10 w-full px-4 flex flex-col items-center">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col items-center text-center"
        >
          {/* LAYER 3: Cutout Image (Sabse upar - z-20) */}
          {/* <div className="absolute inset-0 z-20 pointer-events-none">
            <img
              src="/hero-element.png"
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div> */}
          <h1
            className="font-bold text-white uppercase tracking-tighter leading-[0.85]"
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(2.5rem, 12vw, 9rem)',
              width: '100%'
            }}
          >
            NEVO THREADS
          </h1>

          <p
            className="mt-6 text-white/60 uppercase font-medium"
            style={{
              fontSize: 'clamp(0.6rem, 1.2vw, 1rem)',
              letterSpacing: '0.5em'
            }}
          >
            Weaving the Future of Fashion
          </p>

          <motion.button
  whileHover={{ scale: 1.05, backgroundColor: "white", color: "black" }}
  whileTap={{ scale: 0.95 }}
  className="mt-12 border border-white/40 text-white px-12 py-4 text-[11px] uppercase tracking-[0.4em] bg-black/20 transition-all duration-300 ease-out"
>
  Shop Collection
</motion.button>

        </motion.div>
      </div>

      {/* LAYER 3: Cutout Image (Sabse upar - z-20) */}
      {/* Ye line sabse important hai. Ye gaadi ko text ke upar le aayegi */}
      {/* <div className="absolute inset-0 z-20 pointer-events-none">
        <img
          src="/hero-elements.png"
          alt="Foreground"
          className="w-full h-full object-cover object-center"
        />
      </div> */}

      {/* Scroll Indicator (Isse z-30 kar diya taaki ye sabse upar dikhe) */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 text-white/30 text-[10px] tracking-widest uppercase"
      >
        Scroll
      </motion.div>

    </section>
  );
};

export default HeroSection;
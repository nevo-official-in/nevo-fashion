import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2
            className="text-4xl md:text-5xl font-semibold tracking-tight mb-8"
            style={{ fontFamily: 'Syne, sans-serif' }}
            data-testid="about-title"
          >
            Redefining Fashion
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-white/80">
            <p data-testid="about-paragraph-1">
              NEVO THREADS stands at the intersection of innovation and elegance.
              We craft garments that transcend traditional boundaries, merging
              cutting-edge design with sustainable practices.
            </p>

            <p data-testid="about-paragraph-2">
              Each piece in our collection is a testament to the future of
              fashion—where technology meets artistry, and functionality embraces
              sophistication. We believe in creating timeless designs that speak
              to the modern individual.
            </p>

            <p data-testid="about-paragraph-3">
              Our commitment extends beyond aesthetics. Every thread we weave
              carries our promise of sustainability, ethical production, and a
              dedication to shaping a better tomorrow through conscious fashion.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
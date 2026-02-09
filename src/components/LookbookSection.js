import React from 'react';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

const lookbookImages = [
  {
    id: 1,
    span: 'md:col-span-2',
  },
  {
    id: 2, 
    alt: 'Lookbook Shot 2',
    span: 'md:col-span-1',
  },
  {
    id: 3,
    alt: 'Lookbook Shot 3',
    span: 'md:col-span-1',
  },
  {
    id: 4,
    alt: 'Lookbook Shot 4',
    span: 'md:col-span-2',
  },
  {
    id: 5,
    alt: 'Lookbook Shot 5',
    span: 'md:col-span-1',
  },
  {
    id: 6,
    alt: 'Lookbook Shot 6',
    span: 'md:col-span-1',
  },
];

const LookbookSection = () => {
  return (
    <section id="lookbook" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-semibold tracking-tight mb-4"
            style={{ fontFamily: 'Syne, sans-serif' }}
            data-testid="lookbook-title"
          >
            Lookbook
          </h2>
          <p className="text-white/60 text-sm uppercase tracking-widest">
            Experience the aesthetic
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {lookbookImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={image.span}
            >
              <TiltCard>
                <div className="relative overflow-hidden aspect-[4/5] bg-[#0A0A0A] border border-white/5 hover:border-white/20 transition-all duration-500 group">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    data-testid={`lookbook-image-${image.id}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LookbookSection;
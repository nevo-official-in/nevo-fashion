import React from 'react';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

const featuredProducts = [
  {
    id: 1,
    name: 'Quantum Parka',
    price: '$1,299',
    label: 'New Arrival',
    image: '',
  },
  {
    id: 2,
    name: 'Nebula Hoodie',
    price: '$599',
    label: 'Bestseller',
    image: '',
  },
  {
    id: 3,
    name: 'Stellar Vest',
    price: '$449',
    label: 'Limited Edition',
    image: '',
  },
  {
    id: 4,
    name: 'Cosmos Jacket',
    price: '$899',
    label: 'New Arrival',
    image: '',
  },
];

const FeaturedSection = () => {
  return (
    <section className="py-24 md:py-32 relative">
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
            data-testid="featured-title"
          >
            Featured & New Arrivals
          </h2>
          <p className="text-white/60 text-sm uppercase tracking-widest">
            Discover our latest innovations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TiltCard>
                <div className="relative overflow-hidden bg-[#0A0A0A] border border-white/5 hover:border-white/20 transition-all duration-500 group">
                  {/* Label Badge */}
                  <div className="absolute top-4 right-4 z-10 bg-white text-black px-3 py-1 text-xs uppercase tracking-widest font-bold">
                    {product.label}
                  </div>

                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      data-testid={`featured-image-${product.id}`}
                    />
                  </div>

                  <div className="p-6">
                    <h4
                      className="text-lg font-medium mb-2"
                      data-testid={`featured-name-${product.id}`}
                    >
                      {product.name}
                    </h4>
                    <p
                      className="text-white/60 text-sm uppercase tracking-widest"
                      data-testid={`featured-price-${product.id}`}
                    >
                      {product.price}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
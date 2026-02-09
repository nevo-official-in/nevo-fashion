import React from 'react';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';
import { image } from 'framer-motion/m';

const products = {
  jackets: [
    {
      id: 1,
      name: 'Obsidian Overcoat',
      price: '$899',
    },
    {
      id: 2,
      name: 'Midnight Bomber',
      price: '$799',
  
    },
    {
      id: 3,
      name: 'Shadow Trench',
      price: '$999',
  
    },
  ],
  lowers: [
    {
      id: 4,
      name: 'Void Cargos',
      price: '$399',
      image: '',    
    },
    {
      id: 5,
      name: 'Eclipse Trousers',
      price: '$449',
      image: '',
    },
    {
      id: 6,
      name: 'Noir Joggers',
      price: '$349',
      image: '',
    },
  ],
  accessories: [
    {
      id: 7,
      name: 'Chrome Pendant',
      price: '$199',
      image: '',
    },
    {
      id: 8,
      name: 'Steel Cuffs',
      price: '$149',
      image: '',
    },
    {
      id: 9,
      name: 'Onyx Belt',
      price: '$249',
      image: '',
    },
  ],
};

const ProductCategory = ({ title, items, testId }) => (
  <div className="mb-24">
    <motion.h3
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-2xl md:text-3xl font-medium mb-12 uppercase tracking-widest"
      style={{ fontFamily: 'Syne, sans-serif' }}
      data-testid={testId}
    >
      {title}
    </motion.h3>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
      {items.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <TiltCard>
            <div className="relative overflow-hidden bg-[#0A0A0A] border border-white/5 hover:border-white/20 transition-all duration-500 group">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  data-testid={`product-image-${product.id}`}
                />
              </div>

              <div className="p-6">
                <h4
                  className="text-lg font-medium mb-2"
                  data-testid={`product-name-${product.id}`}
                >
                  {product.name}
                </h4>
                <p
                  className="text-white/60 text-sm uppercase tracking-widest"
                  data-testid={`product-price-${product.id}`}
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
);

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold tracking-tight mb-16 text-center"
          style={{ fontFamily: 'Syne, sans-serif' }}
          data-testid="products-title"
        >
          The Collection
        </motion.h2>

        <ProductCategory title="Jackets" items={products.jackets} testId="category-jackets" />
        <ProductCategory title="Lowers" items={products.lowers} testId="category-lowers" />
        <ProductCategory title="Accessories" items={products.accessories} testId="category-accessories" />
      </div>
    </section>
  );
};

export default ProductsSection;
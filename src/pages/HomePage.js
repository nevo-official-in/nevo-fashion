import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProductsSection from '../components/ProductsSection';
import FeaturedSection from '../components/FeaturedSection';
import LookbookSection from '../components/LookbookSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import DynamicBackground from '../components/DynamicBackground';

const HomePage = () => {
  return (
    <>
      <DynamicBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <FeaturedSection />
        <LookbookSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
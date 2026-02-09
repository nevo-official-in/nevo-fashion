import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const DynamicBackground = () => {
  const { scrollYProgress } = useScroll();

  // Transform scroll progress to background color
  // Start: #1A1A1A (26, 26, 26) -> End: #000000 (0, 0, 0)
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ['rgb(26, 26, 26)', 'rgb(0, 0, 0)']
  );

  return (
    <motion.div
      style={{
        backgroundColor,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
      }}
    />
  );
};

export default DynamicBackground;
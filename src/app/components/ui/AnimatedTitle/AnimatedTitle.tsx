'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTitleProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  delay?: number;
}

const AnimatedTitle: React.FC<AnimatedTitleProps> = ({ 
  children, 
  className = '', 
  as: Component = 'h1',
  delay = 0 
}) => {
  const fadeUpVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: delay,
        // ease: [0.215, 0.61, 0.355, 1], // cubic-bezier for smooth animation
      },
    },
  };

  return (
    <motion.div
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: false, // Set to false for repeated animation
        amount: 0.3 // Trigger when 30% of element is visible
      }}
    >
      <Component className={className}>
        {children}
      </Component>
    </motion.div>
  );
};

export default AnimatedTitle;

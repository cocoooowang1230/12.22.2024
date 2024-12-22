import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children, className = '' }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full 
                 font-bold shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
    >
      {children}
    </motion.button>
  );
};
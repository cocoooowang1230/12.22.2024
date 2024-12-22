import React from 'react';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
  background?: string;
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  background = "bg-gradient-to-br from-pink-100 to-purple-200" 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`min-h-screen ${background} flex flex-col items-center justify-center p-4`}
    >
      {children}
    </motion.div>
  );
};
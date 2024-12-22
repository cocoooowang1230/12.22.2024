import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate(-1)}
      className="absolute top-4 left-4 p-2 text-purple-600 hover:text-purple-700 
                 bg-white/80 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
      aria-label="返回上一頁"
    >
      <ArrowLeft className="w-6 h-6" />
    </motion.button>
  );
};
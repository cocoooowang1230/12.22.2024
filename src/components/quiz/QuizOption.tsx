import React from 'react';
import { motion } from 'framer-motion';

interface QuizOptionProps {
  option: string;
  onClick: () => void;
}

export const QuizOption: React.FC<QuizOptionProps> = ({ option, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="w-full p-4 text-left bg-white rounded-lg shadow-sm border-2 border-purple-100 
                 hover:border-purple-300 hover:bg-purple-50 transition-all duration-200"
    >
      {option}
    </motion.button>
  );
};
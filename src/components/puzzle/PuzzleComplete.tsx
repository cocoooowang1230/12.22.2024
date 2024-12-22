import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../Button';
import { Confetti } from '../Confetti';

interface PuzzleCompleteProps {
  onNext: () => void;
}

export const PuzzleComplete: React.FC<PuzzleCompleteProps> = ({ onNext }) => {
  return (
    <div className="text-center">
      <Confetti />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          太棒了！你完成了拼圖！
        </h2>
        <p className="text-gray-600 mb-8">
          準備好迎接下一個挑戰了嗎？
        </p>
        <Button onClick={onNext}>
          前往下一關
        </Button>
      </motion.div>
    </div>
  );
};
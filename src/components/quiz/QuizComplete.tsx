import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../Button';
import { Confetti } from '../Confetti';
import { Trophy } from 'lucide-react';

interface QuizCompleteProps {
  score: number;
  onComplete: () => void;
}

export const QuizComplete: React.FC<QuizCompleteProps> = ({ score, onComplete }) => {
  return (
    <div className="text-center py-8">
      <Confetti />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="space-y-8"
      >
        <div className="flex justify-center">
          <Trophy className="w-16 h-16 text-yellow-500" />
        </div>

        <h2 className="text-3xl font-bold text-gray-800">
          恭喜完成問答遊戲！
        </h2>

        <p className="text-xl text-gray-600">
          你的得分：<span className="font-bold text-purple-600">{score}</span>
        </p>

        <p className="text-gray-600">
          準備好揭開最後的寶藏了嗎？
        </p>

        <div className="pt-4">
          <Button onClick={onComplete}>
            前往寶藏
          </Button>
        </div>
      </motion.div>
    </div>
  );
};
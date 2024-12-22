import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Question } from '../../types';
import { Button } from '../Button';
import { QuizOption } from './QuizOption';
import { QuizComplete } from './QuizComplete';
import { HelpCircle } from 'lucide-react';

interface QuizGameProps {
  currentQuestion: Question | null;
  score: number;
  isComplete: boolean;
  showHint: boolean;
  onAnswer: (answer: string) => void;
  onComplete: () => void;
  setShowHint: (show: boolean) => void;
}

export const QuizGame: React.FC<QuizGameProps> = ({
  currentQuestion,
  score,
  isComplete,
  showHint,
  onAnswer,
  onComplete,
  setShowHint,
}) => {
  if (isComplete) {
    return <QuizComplete score={score} onComplete={onComplete} />;
  }

  if (!currentQuestion) return null;

  return (
    <div className="space-y-8">
      <div className="text-right">
        <span className="text-lg font-semibold text-purple-600">
          得分: {score}
        </span>
      </div>

      <motion.div
        key={currentQuestion.id}
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -50, opacity: 0 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          {currentQuestion.question}
        </h2>

        <div className="grid gap-4">
          {currentQuestion.options.map((option, index) => (
            <QuizOption
              key={index}
              option={option}
              onClick={() => onAnswer(option)}
            />
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowHint(true)}
            className="flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors"
          >
            <HelpCircle className="w-5 h-5" />
            需要提示嗎？
          </button>
        </div>

        <AnimatePresence>
          {showHint && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-purple-50 p-4 rounded-lg text-purple-700 text-center"
            >
              {currentQuestion.hint}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
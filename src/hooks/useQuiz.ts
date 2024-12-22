import { useState } from 'react';
import { Question } from '../types';
import useSound from 'use-sound';
import { QUIZ_QUESTIONS } from '../constants/questions';

export const useQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [playCorrect] = useSound('/correct.mp3', { volume: 0.5 });
  const [playWrong] = useSound('/wrong.mp3', { volume: 0.5 });

  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];
  const isComplete = currentQuestionIndex >= QUIZ_QUESTIONS.length;

  const handleAnswer = (answer: string) => {
    if (answer === currentQuestion.correctAnswer) {
      playCorrect();
      setScore(score + 1);
    } else {
      playWrong();
    }

    setShowHint(false);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return {
    currentQuestion: isComplete ? null : currentQuestion,
    score,
    isComplete,
    handleAnswer,
    showHint,
    setShowHint,
  };
};
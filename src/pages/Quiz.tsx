import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { BackButton } from '../components/BackButton';
import { HelpCircle, ArrowRight, AlertCircle } from 'lucide-react';
import { Confetti } from '../components/Confetti';

const questions = [
  {
    question: "我們上次見面是幾月？",
    options: ["二月", "六月", "八月", "九月"],
    correctAnswer: "八月",
    hint: "快要開學了..."
  }
];

export const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [showHint, setShowHint] = React.useState(false);
  const [showError, setShowError] = React.useState(false);
  const [showConfetti, setShowConfetti] = React.useState(false);
  const [answers, setAnswers] = React.useState<string[]>([]);

  const handleAnswer = (answer: string) => {
    if (answer === questions[currentQuestion].correctAnswer) {
      setAnswers([...answers, answer]);
      setShowError(false);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000);
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
    }
  };

  const isComplete = answers.length === questions.length;

  if (isComplete) {
    return (
      <Layout>
        <div className="relative w-full max-w-2xl p-8 bg-white/90 rounded-2xl shadow-xl text-center">
          <BackButton />
          {showConfetti && <Confetti />}
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            恭喜完成問答遊戲！
          </h2>
          <p className="text-gray-600 mb-8">
            你已經成功回答了問題！
          </p>
          <Button onClick={() => navigate('/treasure')} className="inline-flex items-center gap-2">
            前往寶藏 <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </Layout>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <Layout>
      <div className="relative w-full max-w-2xl p-8 bg-white/90 rounded-2xl shadow-xl">
        <BackButton />
        {showConfetti && <Confetti />}

        <motion.div
          key={currentQuestion}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -50, opacity: 0 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">
            {currentQ.question}
          </h2>

          <div className="grid gap-4">
            {currentQ.options.map((option, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleAnswer(option)}
                className="w-full p-4 text-left bg-white rounded-lg shadow-sm border-2 border-purple-100 
                         hover:border-purple-300 hover:bg-purple-50 transition-all duration-200"
              >
                {option}
              </motion.button>
            ))}
          </div>

          {showError && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-2 text-red-500"
            >
              <AlertCircle className="w-5 h-5" />
              <span>答案不正確，請再試一次！</span>
            </motion.div>
          )}

          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowHint(true)}
              className="flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors"
            >
              <HelpCircle className="w-5 h-5" />
              需要提示嗎？
            </button>
          </div>

          {showHint && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-purple-50 p-4 rounded-lg text-purple-700 text-center"
            >
              {currentQ.hint}
            </motion.div>
          )}
        </motion.div>
      </div>
    </Layout>
  );
};
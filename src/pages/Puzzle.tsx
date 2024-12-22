import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Button } from '../components/Button';
import { BackButton } from '../components/BackButton';
import { Puzzle as PuzzleIcon, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Confetti } from '../components/Confetti';

export const Puzzle = () => {
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = useState(false);

  return (
    <Layout background="bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="relative w-full max-w-4xl p-6 bg-white/90 rounded-2xl shadow-xl">
        <BackButton />
        {showConfetti && <Confetti />}
        
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <PuzzleIcon className="w-12 h-12 text-purple-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            回憶拼圖
          </h1>
          <p className="text-gray-600 mb-6">
            完成這個特別的拼圖，讓我們一起回顧美好的回憶！
          </p>
        </div>

        <div className="relative w-full mb-6">
          {/* Replace the src URL below with your new puzzle's iframe URL */}
          <iframe 
            src="https://www.jigsawplanet.com/?rc=play&pid=2b670bce270f&view=iframe&bgcolor=0xdd9292&pieces=scattered" 
            style={{ width: '100%', height: '600px' }} 
            frameBorder="0" 
            allowFullScreen
          />
        </div>

        <div className="text-center mt-8">
          <Button 
            onClick={() => navigate('/quiz')}
            className="inline-flex items-center gap-2 px-8 py-3"
          >
            前往下一關 <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </Layout>
  );
};
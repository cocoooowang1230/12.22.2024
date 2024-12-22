import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Gift, Sparkles, Music } from 'lucide-react';
import { Button } from '../components/Button';
import { Layout } from '../components/Layout';
import { useMusic } from '../context/MusicContext';

export const Welcome = () => {
  const navigate = useNavigate();
  const { isPlaying, toggleMusic } = useMusic();

  const startGame = () => {
    if (!isPlaying) {
      toggleMusic();
    }
    navigate('/puzzle');
  };

  return (
    <Layout>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl mx-auto p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl"
      >
        <div className="flex justify-center mb-6">
          <Gift className="w-16 h-16 text-pink-500" />
        </div>
        
        <motion.h1 
          className="text-4xl font-bold text-gray-800 mb-6"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          歡迎來到你的生日冒險！
        </motion.h1>
        
        <p className="text-xl text-gray-600 mb-8">
          今天，我們有一場特別的尋寶遊戲等著你。
          準備好開始這段奇妙的旅程了嗎？
        </p>

        <div className="relative">
          <Button onClick={startGame} className="relative z-10">
            <span className="flex items-center gap-2">
              開始遊戲 <Sparkles className="w-5 h-5" />
            </span>
          </Button>
          
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full opacity-50 blur-lg"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </div>

        <button
          onClick={toggleMusic}
          className="fixed bottom-4 right-4 p-3 bg-white/80 rounded-full shadow-lg hover:bg-white/90 transition-all duration-300"
          aria-label={isPlaying ? "暫停音樂" : "播放音樂"}
        >
          <Music className={`w-6 h-6 ${isPlaying ? 'text-pink-500' : 'text-gray-400'}`} />
        </button>
      </motion.div>
    </Layout>
  );
};
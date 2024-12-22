import React from 'react';
import { Layout } from '../components/Layout';
import { motion } from 'framer-motion';
import { Heart, Gift, Cake } from 'lucide-react';
import { BackButton } from '../components/BackButton';
import { Confetti } from '../components/Confetti';
import { MessageList } from '../components/messages/MessageList';
import { MessageForm } from '../components/messages/MessageForm';
import { useBirthdayMessages } from '../hooks/useBirthdayMessages';

// ... (保留現有的 photos 陣列)

export const Treasure = () => {
  const [showConfetti, setShowConfetti] = React.useState(true);
  const { messages, loading, error, addMessage } = useBirthdayMessages();

  React.useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout background="bg-gradient-to-br from-pink-100 via-red-100 to-purple-100">
      {showConfetti && <Confetti />}
      <div className="w-full max-w-6xl p-8 bg-white/90 rounded-2xl shadow-xl">
        <BackButton />
        
        {/* ... (保留現有的生日祝福內容) */}

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          // ... (保留現有的動畫設定)
        >
          {/* ... (保留現有的照片網格) */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 p-6 bg-white rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            留下你的祝福
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <MessageForm onSubmit={addMessage} />
            
            {loading ? (
              <div className="text-center text-gray-600 mt-8">載入中...</div>
            ) : error ? (
              <div className="text-center text-red-500 mt-8">{error}</div>
            ) : (
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                  祝福留言
                </h3>
                <MessageList messages={messages} />
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
};
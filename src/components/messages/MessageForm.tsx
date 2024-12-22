import React, { useState } from 'react';
import { Button } from '../Button';
import { Send } from 'lucide-react';

interface MessageFormProps {
  onSubmit: (message: string, sender: string) => Promise<void>;
}

export const MessageForm: React.FC<MessageFormProps> = ({ onSubmit }) => {
  const [message, setMessage] = useState('');
  const [sender, setSender] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !sender.trim() || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await onSubmit(message, sender);
      setMessage('');
      setSender('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          value={sender}
          onChange={(e) => setSender(e.target.value)}
          placeholder="你的名字"
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
      </div>
      <div>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="寫下你的祝福..."
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          rows={3}
        />
      </div>
      <Button
        onClick={handleSubmit}
        className="w-full flex items-center justify-center gap-2"
        disabled={isSubmitting}
      >
        <Send className="w-4 h-4" />
        送出祝福
      </Button>
    </form>
  );
};
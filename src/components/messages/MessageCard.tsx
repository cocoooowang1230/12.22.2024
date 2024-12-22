import React from 'react';
import { BirthdayMessage } from '../../types/supabase';
import { MessageSquare } from 'lucide-react';

interface MessageCardProps {
  message: BirthdayMessage;
}

export const MessageCard: React.FC<MessageCardProps> = ({ message }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-start gap-3">
        <MessageSquare className="w-5 h-5 text-purple-500 mt-1" />
        <div>
          <p className="text-gray-800">{message.message}</p>
          <p className="text-sm text-gray-500 mt-2">
            From: {message.sender} · {new Date(message.created_at).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};
import React from 'react';
import { BirthdayMessage } from '../../types/supabase';
import { MessageCard } from './MessageCard';

interface MessageListProps {
  messages: BirthdayMessage[];
}

export const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div className="grid gap-4">
      {messages.map((message) => (
        <MessageCard key={message.id} message={message} />
      ))}
    </div>
  );
};
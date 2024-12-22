import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { BirthdayMessage } from '../types/supabase';

export const useBirthdayMessages = () => {
  const [messages, setMessages] = useState<BirthdayMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMessages = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('birthday_messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching messages:', error);
        throw error;
      }
      
      setMessages(data || []);
      setError(null);
    } catch (err) {
      console.error('Error in fetchMessages:', err);
      setError(err instanceof Error ? err.message : '獲取訊息時發生錯誤');
    } finally {
      setLoading(false);
    }
  };

  const addMessage = async (message: string, sender: string) => {
    try {
      const { error } = await supabase
        .from('birthday_messages')
        .insert([{ message, sender }]);

      if (error) {
        console.error('Error adding message:', error);
        throw error;
      }

      await fetchMessages();
      setError(null);
    } catch (err) {
      console.error('Error in addMessage:', err);
      setError(err instanceof Error ? err.message : '新增訊息時發生錯誤');
      throw err;
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return { messages, loading, error, addMessage };
};
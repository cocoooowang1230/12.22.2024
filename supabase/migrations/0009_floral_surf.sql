/*
  # Birthday Messages Table Setup

  1. New Tables
    - `birthday_messages`
      - `id` (uuid, primary key)
      - `message` (text, max 500 chars)
      - `sender` (text, max 100 chars)
      - `created_at` (timestamp)
  
  2. Security
    - Enable RLS
    - Allow public read access
    - Allow public insert with length constraints
*/

-- Create new table with proper constraints
CREATE TABLE IF NOT EXISTS birthday_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  message text NOT NULL CHECK (length(message) <= 500),
  sender text NOT NULL CHECK (length(sender) <= 100),
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE birthday_messages ENABLE ROW LEVEL SECURITY;

-- Create policies for public access
CREATE POLICY "Anyone can read birthday messages"
  ON birthday_messages
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can insert birthday messages"
  ON birthday_messages
  FOR INSERT
  TO public
  WITH CHECK (true);
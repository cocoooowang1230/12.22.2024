import React from 'react';
import ReactConfetti from 'react-confetti';
import { useWindowSize } from '../hooks/useWindowSize';

export const Confetti: React.FC = () => {
  const { width, height } = useWindowSize();
  
  return (
    <ReactConfetti
      width={width}
      height={height}
      recycle={false}
      numberOfPieces={200}
      gravity={0.2}
    />
  );
};
import React from 'react';
import { motion } from 'framer-motion';
import { PuzzlePiece as PuzzlePieceType } from '../../types';
import { PuzzlePiece } from './PuzzlePiece';

interface PuzzleBoardProps {
  pieces: PuzzlePieceType[];
  onPieceDrag: (id: number, x: number, y: number) => void;
  onComplete: () => void;
}

export const PuzzleBoard: React.FC<PuzzleBoardProps> = ({
  pieces,
  onPieceDrag,
  onComplete,
}) => {
  return (
    <motion.div
      className="relative w-full aspect-square bg-gray-100 rounded-lg overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1">
        {pieces.map((piece) => (
          <PuzzlePiece
            key={piece.id}
            piece={piece}
            onDrag={onPieceDrag}
          />
        ))}
      </div>
    </motion.div>
  );
};
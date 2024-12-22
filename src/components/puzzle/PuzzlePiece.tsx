import React from 'react';
import { motion, useDragControls } from 'framer-motion';
import { PuzzlePiece as PuzzlePieceType } from '../../types';

interface PuzzlePieceProps {
  piece: PuzzlePieceType;
  onDrag: (id: number, x: number, y: number) => void;
}

export const PuzzlePiece: React.FC<PuzzlePieceProps> = ({ piece, onDrag }) => {
  const controls = useDragControls();

  return (
    <motion.div
      drag
      dragControls={controls}
      dragMomentum={false}
      onDrag={(_, info) => {
        onDrag(piece.id, info.point.x, info.point.y);
      }}
      className="w-full h-full bg-cover bg-center cursor-move"
      style={{
        backgroundImage: `url('https://source.unsplash.com/random/800x800?birthday')`,
        backgroundPosition: `${-piece.correctX * 100}% ${-piece.correctY * 100}%`,
      }}
      whileHover={{ scale: 1.05 }}
      whileDrag={{ scale: 1.1 }}
    />
  );
};
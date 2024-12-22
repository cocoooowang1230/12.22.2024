import { useState } from 'react';
import { PuzzlePiece } from '../types';
import { shuffleArray } from '../utils/array';
import { GRID_SIZE, TOLERANCE } from '../constants/puzzle';

export const usePuzzle = () => {
  const [pieces, setPieces] = useState<PuzzlePiece[]>(() => {
    const initialPieces: PuzzlePiece[] = [];
    for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
      initialPieces.push({
        id: i,
        x: 0,
        y: 0,
        correctX: i % GRID_SIZE,
        correctY: Math.floor(i / GRID_SIZE),
      });
    }
    return shuffleArray(initialPieces);
  });

  const handlePieceDrag = (id: number, x: number, y: number) => {
    setPieces(pieces.map(piece => 
      piece.id === id ? { ...piece, x, y } : piece
    ));
  };

  const checkCompletion = () => {
    return pieces.every(piece => {
      const dx = Math.abs(piece.x - piece.correctX * 100);
      const dy = Math.abs(piece.y - piece.correctY * 100);
      return dx < TOLERANCE && dy < TOLERANCE;
    });
  };

  return {
    pieces,
    handlePieceDrag,
    checkCompletion,
  };
};
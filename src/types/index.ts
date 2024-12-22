export interface PuzzlePiece {
  id: number;
  x: number;
  y: number;
  correctX: number;
  correctY: number;
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  hint: string;
}
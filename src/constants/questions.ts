import { Question } from '../types';

export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    question: "我們上次見面是幾月？",
    options: ["一月", "二月", "三月", "四月"],
    correctAnswer: "三月",
    hint: "春天的開始..."
  },
  {
    id: 2,
    question: "我們一起去過的第一個城市是哪裡？",
    options: ["台北", "台中", "高雄", "台南"],
    correctAnswer: "台北",
    hint: "101大樓在這裡..."
  },
  {
    id: 3,
    question: "你的生日是哪天？",
    options: ["3月15日", "3月16日", "3月17日", "3月18日"],
    correctAnswer: "3月16日",
    hint: "春天的第16天..."
  }
];
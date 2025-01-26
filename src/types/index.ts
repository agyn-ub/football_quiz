export enum Difficulty {
  BEGINNER = 'BEGINNER',
  SEMI_PRO = 'SEMI_PRO',
  PROFESSIONAL = 'PROFESSIONAL',
  EXPERT = 'EXPERT'
}

export interface Quiz {
  id: number;
  title: string;
  description?: string | null;
  timeLimit: number;
  difficulty: Difficulty;
  category: string;
  isActive: boolean;
  createdAt: Date;
  questions?: Question[];
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctOption: number;
  points: number;
  imageUrl?: string | null;
  quizId: number;
} 
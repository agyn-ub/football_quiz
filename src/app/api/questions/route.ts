import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

const QUESTIONS_PER_GAME = 14

export async function GET() {
  try {
    // 1. First fetch all questions from database
    const questions = await prisma.question.findMany({
      select: {
        id: true,
        question: true,
        options: true,
        correctOption: true,
        points: true,
        difficulty: true,
      }
    })

    // 2. Randomly shuffle all questions using Fisher-Yates algorithm
    const shuffledQuestions = questions
      .sort(() => Math.random() - 0.5)
      // 3. Take only first 20 questions from shuffled array
      .slice(0, QUESTIONS_PER_GAME)

    return NextResponse.json(shuffledQuestions)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch questions' },
      { status: 500 }
    )
  }
} 
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // First get all users with their scores
    const users = await prisma.user.findMany({
      include: {
        scores: {
          orderBy: {
            score: 'desc'
          },
          take: 1, // Take only the highest score for each user
        }
      }
    })

    // Process users to get their best scores
    const leaderboard = users
      .map(user => ({
        userId: user.id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        bestScore: user.scores[0]?.score || 0,
        bestCorrectAnswers: user.scores[0]?.correctAnswers || 0,
        bestTotalQuestions: user.scores[0]?.totalQuestions || 0,
        gamesPlayed: user.scores.length,
        lastPlayed: user.scores[0]?.createdAt || null
      }))
      .filter(user => user.bestScore > 0) // Only show users who have played
      .sort((a, b) => b.bestScore - a.bestScore) // Sort by best score
      .slice(0, 100) // Top 100 players

    return NextResponse.json(leaderboard)
  } catch (error) {
    console.error('Error fetching leaderboard:', error)
    return NextResponse.json(
      { error: 'Failed to fetch leaderboard' },
      { status: 500 }
    )
  }
} 
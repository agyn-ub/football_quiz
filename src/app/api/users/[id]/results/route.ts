import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Find user by Telegram ID
    const user = await prisma.user.findUnique({
      where: {
        telegramId: params.id
      }
    })

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    const scores = await prisma.score.findMany({
      where: {
        userId: user.id
      },
      orderBy: [
        { score: 'desc' },    // First order by score (highest first)
        { createdAt: 'desc' } // Then by date (newest first)
      ],
      include: {
        user: {
          select: {
            username: true,
            firstName: true,
            lastName: true
          }
        }
      }
    })

    return NextResponse.json(scores)
  } catch (error) {
    console.error('Error fetching results:', error)
    return NextResponse.json(
      { error: 'Failed to fetch user results' },
      { status: 500 }
    )
  }
} 
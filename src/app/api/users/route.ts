import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const userData = await request.json()
    
    // Check if user exists by Telegram ID
    let user = await prisma.user.findUnique({
      where: {
        telegramId: String(userData.id)
      }
    })

    // If user doesn't exist, create new user
    if (!user) {
      user = await prisma.user.create({
        data: {
          telegramId: String(userData.id),
          username: userData.username || null,
          firstName: userData.firstName || null,
          lastName: userData.lastName || null
        }
      })
    }

    return NextResponse.json(user)
  } catch (error) {
    console.error('Error processing user:', error)
    return NextResponse.json(
      { error: 'Failed to process user' },
      { status: 500 }
    )
  }
} 
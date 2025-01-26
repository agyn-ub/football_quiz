import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const scoreData = await request.json()
    
    const score = await prisma.score.create({
      data: scoreData
    })

    return NextResponse.json(score)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to save score' },
      { status: 500 }
    )
  }
} 
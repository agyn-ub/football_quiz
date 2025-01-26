import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Test database connection
    const result = await prisma.quiz.findMany({
      take: 1
    })
    return res.status(200).json({ status: 'Connected!', data: result })
  } catch (error) {
    console.error('Database error:', error)
    return res.status(500).json({ error: 'Database connection failed' })
  }
} 
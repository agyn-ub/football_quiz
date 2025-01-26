'use client'

import { useEffect, useState } from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'

interface LeaderboardEntry {
  userId: number
  username: string | null
  firstName: string | null
  lastName: string | null
  bestScore: number
  bestCorrectAnswers: number
  bestTotalQuestions: number
  gamesPlayed: number
  lastPlayed: string | null
}

export default function Leaderboard() {
  const [leaders, setLeaders] = useState<LeaderboardEntry[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/leaderboard')
      .then(res => res.json())
      .then(data => {
        setLeaders(data)
        setLoading(false)
      })
  }, [])

  const formatUsername = (leader: LeaderboardEntry) => {
    if (leader.username) return `@${leader.username}`
    if (leader.firstName && leader.lastName) return `${leader.firstName} ${leader.lastName}`
    if (leader.firstName) return leader.firstName
    return 'Аноним'
  }

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center gap-4 mb-8">
          <Link
            href="/"
            className="px-4 py-2 text-madrid-blue hover:text-blue-700 font-medium flex items-center"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-1" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" 
                clipRule="evenodd" 
              />
            </svg>
            Назад
          </Link>
          <span className="w-px h-6 bg-gray-300"></span>
          <h2 className="text-2xl font-bold text-madrid-blue">
            Лучшие результаты
          </h2>
        </div>

        <div className="space-y-3">
          {leaders.map((leader, index) => (
            <div 
              key={leader.userId}
              className="bg-white rounded-lg shadow p-4 flex items-center"
            >
              <div className={`
                w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-4
                ${index === 0 ? 'bg-yellow-100 text-yellow-800' :
                  index === 1 ? 'bg-gray-100 text-gray-800' :
                  index === 2 ? 'bg-orange-100 text-orange-800' :
                  'bg-blue-50 text-madrid-blue'}
              `}>
                {index + 1}
              </div>
              
              <div className="flex-grow">
                <div className="font-semibold text-lg text-gray-900">
                  {formatUsername(leader)}
                </div>
                <div className="text-sm text-gray-500 flex items-center gap-2">
                  <span>Лучший результат: {leader.bestCorrectAnswers} из {leader.bestTotalQuestions}</span>
                  <span>•</span>
                  <span>Всего игр: {leader.gamesPlayed}</span>
                </div>
              </div>

              <div className="text-right">
                <div className="text-xl font-bold text-madrid-blue">
                  {leader.bestScore}
                </div>
                <div className="text-sm text-gray-500">
                  очков
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
} 
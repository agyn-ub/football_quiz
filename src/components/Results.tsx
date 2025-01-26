'use client'

import { useEffect, useState } from 'react'
import { getUserData } from '@/utils/telegram'
import Link from 'next/link'

interface Score {
  id: number
  score: number
  correctAnswers: number
  totalQuestions: number
  category: string
  createdAt: string
  user: {
    username: string | null
    firstName: string | null
    lastName: string | null
  }
}

const getMedalEmoji = (index: number) => {
  switch (index) {
    case 0: return '🥇'
    case 1: return '🥈'
    case 2: return '🥉'
    default: return '🎯'
  }
}

export default function Results() {
  const [scores, setScores] = useState<Score[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const userData = getUserData()
    if (!userData?.id) {
      setError('Пользователь не найден')
      setLoading(false)
      return
    }

    // Fetch results directly using Telegram ID
    fetch(`/api/users/${userData.id}/results`)
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          throw new Error(data.error)
        }
        setScores(data)
        setLoading(false)
      })
      .catch(err => {
        setError('Не удалось загрузить результаты')
        setLoading(false)
        console.error('Error loading results:', err)
      })
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center p-8 text-red-600">
        {error}
      </div>
    )
  }

  if (!scores.length) {
    return (
      <div className="text-center p-8 text-gray-600">
        У вас пока нет результатов
      </div>
    )
  }

  return (
    <div className="space-y-6 p-4">
      <div className="flex items-center gap-4 mb-8">
        <Link
          href="/"
          className="px-4 py-2 text-blue-600 hover:text-blue-700 font-medium flex items-center"
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
        <h2 className="text-2xl font-bold text-blue-600">
          Ваши результаты
        </h2>
      </div>

      <div className="space-y-4">
        {scores.map((score, index) => (
          <div 
            key={score.id} 
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <span className="text-2xl mr-3">{getMedalEmoji(index)}</span>
                <div>
                  <div className="text-xl font-bold text-blue-600">
                    {score.score} очков
                  </div>
                  <div className="text-sm text-gray-500">
                    {new Date(score.createdAt).toLocaleDateString('ru-RU', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-gray-500">Правильных ответов</div>
                  <div className="text-lg font-semibold text-green-600">
                    {score.correctAnswers} из {score.totalQuestions}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Процент успеха</div>
                  <div className="text-lg font-semibold text-blue-600">
                    {Math.round((score.correctAnswers / score.totalQuestions) * 100)}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 
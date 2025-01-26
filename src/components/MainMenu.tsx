'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { initTelegramApp } from '@/utils/telegram'

export default function MainMenu() {
  useEffect(() => {
    initTelegramApp()
  }, [])

  return (
    <div className="space-y-6 text-center">
      <h1 className="text-3xl font-bold text-madrid-blue mb-8">
        Real Madrid Quiz
      </h1>
      
      <div className="space-y-4">
        <Link 
          href="/quiz"
          className="block w-full px-6 py-4 bg-madrid-blue text-white rounded-lg hover:bg-blue-800 transition-colors font-semibold text-lg"
        >
          Начать игру
        </Link>
        
        <Link 
          href="/results"
          className="block w-full px-6 py-4 bg-white border-2 border-madrid-gold text-madrid-blue rounded-lg hover:bg-yellow-50 transition-colors font-semibold text-lg"
        >
          Мои результаты
        </Link>
        
        <Link 
          href="/leaderboard"
          className="block w-full px-6 py-4 bg-gray-50 text-madrid-blue rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
        >
          Таблица лидеров
        </Link>
      </div>
    </div>
  )
} 
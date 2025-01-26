'use client'

import { useState, useEffect } from 'react'
import Layout from '@/components/Layout'
import Question from '@/components/Question'
import type { Question as QuestionType } from '@/types/question'
import { getUserData } from '@/utils/telegram'
import Link from 'next/link'

export default function Quiz() {
  const [questions, setQuestions] = useState<QuestionType[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [userId, setUserId] = useState<number | null>(null)

  useEffect(() => {
    // Get user data and save to database
    const userData = getUserData()
    if (userData) {
      fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
        .then(res => res.json())
        .then(user => setUserId(user.id))
    }

    // Fetch questions
    fetch('/api/questions')
      .then(res => res.json())
      .then(data => setQuestions(data))
  }, [])

  const saveScore = async () => {
    if (!userId) return

    try {
      await fetch('/api/scores', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          score,
          correctAnswers,
          totalQuestions: questions.length,
          category: 'Real Madrid Quiz'
        }),
      })
    } catch (error) {
      console.error('Failed to save score:', error)
    }
  }

  const handleAnswer = (selectedOption: number) => {
    const currentQuestion = questions[currentQuestionIndex]
    if (selectedOption === currentQuestion.correctOption) {
      setScore(prev => prev + currentQuestion.points)
      setCorrectAnswers(prev => prev + 1)
    }

    setTimeout(() => {
      if (currentQuestionIndex === questions.length - 1) {
        saveScore() // Save score when quiz is completed
      }
      setCurrentQuestionIndex(prev => prev + 1)
    }, 1000)
  }

  if (!questions.length) {
    return (
      <Layout>
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      </Layout>
    )
  }

  if (currentQuestionIndex >= questions.length) {
    return (
      <Layout>
        <div className="text-center space-y-6">
          <div className="animate-bounce mb-8">
            <span className="text-4xl">🎉</span>
          </div>
          <h1 className="text-3xl font-bold text-blue-600 mb-6">
            Викторина завершена!
          </h1>
          <div className="bg-blue-50 p-6 rounded-xl shadow-lg">
            <p className="text-2xl font-semibold text-gray-800 mb-4">
              Ваш результат
            </p>
            <div className="space-y-4">
              <p className="text-4xl font-bold text-blue-600">
                {score} очков
              </p>
              <div className="text-lg text-gray-700">
                <p>Правильных ответов: <span className="font-bold text-green-600">{correctAnswers}</span> из {questions.length}</p>
                <p className="text-sm mt-1">
                  ({Math.round((correctAnswers / questions.length) * 100)}% успеха)
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Играть снова
            </button>
            <Link
              href="/results"
              className="block px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-semibold text-center"
            >
              Посмотреть все результаты
            </Link>
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="mb-4">
        <div className="flex justify-between items-center mb-8">
          <span className="text-gray-600 text-lg">
            Вопрос {currentQuestionIndex + 1} из {questions.length}
          </span>
          <div className="bg-madrid-gold px-4 py-2 rounded-lg">
            <span className="font-bold text-lg text-madrid-blue">
              Счёт: <span className="text-xl">{score}</span>
            </span>
          </div>
        </div>
        <Question 
          question={questions[currentQuestionIndex]}
          onAnswer={handleAnswer}
        />
      </div>
    </Layout>
  )
} 
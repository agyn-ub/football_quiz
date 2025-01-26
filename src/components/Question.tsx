import { useState, useEffect } from 'react'
import type { Question as QuestionType } from '@/types/question'

interface QuestionProps {
  question: QuestionType
  onAnswer: (selectedOption: number) => void
}

const difficultyLabels = {
  'Easy': 'Легкий',
  'Medium': 'Средний',
  'Hard': 'Сложный'
} as const

const difficultyColors = {
  'Easy': 'bg-green-100 text-green-800',
  'Medium': 'bg-madrid-gold text-madrid-blue',
  'Hard': 'bg-red-100 text-red-800'
} as const

export default function Question({ question, onAnswer }: QuestionProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null)

  // Reset selectedOption when question changes
  useEffect(() => {
    setSelectedOption(null)
  }, [question.id])

  const handleOptionClick = (index: number) => {
    if (selectedOption !== null) return // Prevent multiple selections
    setSelectedOption(index)
    onAnswer(index)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <span className={`px-3 py-1 rounded-full text-sm font-semibold
          ${difficultyColors[question.difficulty as keyof typeof difficultyColors]}`}>
          {difficultyLabels[question.difficulty as keyof typeof difficultyLabels]}
        </span>
        <span className="text-madrid-blue font-bold">{question.points} очков</span>
      </div>

      <h2 className="text-xl font-bold text-madrid-blue mb-4">
        {question.question}
      </h2>

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(index)}
            disabled={selectedOption !== null}
            className={`w-full p-4 text-left rounded-lg transition-colors
              ${selectedOption === index 
                ? 'bg-madrid-blue text-white' 
                : 'bg-gray-50 hover:bg-gray-100 text-madrid-blue'}
              ${selectedOption !== null && selectedOption !== index 
                ? 'opacity-50 cursor-not-allowed' 
                : ''}`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
} 
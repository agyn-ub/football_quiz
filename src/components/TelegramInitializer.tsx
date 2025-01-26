'use client'

import { useEffect } from 'react'
import { initTelegramApp } from '@/utils/telegram'

export default function TelegramInitializer() {
  useEffect(() => {
    initTelegramApp()
  }, [])

  return null
} 
import { WebApp } from '@twa-dev/types'

declare global {
  interface Window {
    Telegram: {
      WebApp: WebApp
    }
  }
}

export const tg = typeof window !== 'undefined' ? window.Telegram.WebApp : null

export const initTelegramApp = () => {
  if (tg) {
    tg.ready()
    tg.expand()
    
    // Set theme
    document.documentElement.className = tg.colorScheme
    
    // Set viewport
    const viewport = document.querySelector('meta[name="viewport"]')
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no')
    }
  }
}

export const getUserData = () => {
  if (!tg) return null
  
  return {
    id: tg.initDataUnsafe.user?.id,
    username: tg.initDataUnsafe.user?.username,
    firstName: tg.initDataUnsafe.user?.first_name,
    lastName: tg.initDataUnsafe.user?.last_name,
  }
}

export const closeTelegramWebApp = () => {
  if (tg) {
    tg.close()
  }
} 
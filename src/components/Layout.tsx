import { ReactNode } from 'react'
import { patternDataUrl } from '@/styles/pattern'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-madrid-blue relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0 bg-repeat"
          style={{ backgroundImage: `url(${patternDataUrl})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-madrid-blue/50 to-madrid-blue"></div>
      </div>

      {/* Real Madrid Logo Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <div className="w-96 h-96 bg-[url('/rm-logo.png')] bg-contain bg-no-repeat bg-center"></div>
      </div>

      {/* Content */}
      <div className="relative py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-madrid-gold to-yellow-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
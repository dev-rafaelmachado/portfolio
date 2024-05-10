'use client'
import { ReactNode } from 'react'
import { LanguageProvider } from './LanguageContext'
import { ThemeProvider } from './ThemeContext'

export const WrapperProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider>
      <LanguageProvider>{children}</LanguageProvider>{' '}
    </ThemeProvider>
  )
}

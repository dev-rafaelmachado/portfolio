'use client'
import { ReactNode } from 'react'
import { LanguageProvider } from './LanguageContext'

export const WrapperProvider = ({ children }: { children: ReactNode }) => {
  return <LanguageProvider>{children}</LanguageProvider>
}

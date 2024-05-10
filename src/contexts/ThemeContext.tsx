'use client'

import { ReactNode, createContext, useContext, useState } from 'react'

export type Theme = 'night' | 'dark'

type ThemeContextType = {
  theme: Theme
  handleTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  handleTheme: () => {},
  toggleTheme: () => {},
})

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('dark')

  const toggleTheme = () => {
    setClass(theme === 'dark' ? 'night' : 'dark')
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'night' : 'dark'))
  }

  const handleTheme = (theme: Theme) => {
    setClass(theme)
    setTheme(theme)
  }

  return (
    <ThemeContext.Provider value={{ theme, handleTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

const setClass = (theme: Theme) => {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

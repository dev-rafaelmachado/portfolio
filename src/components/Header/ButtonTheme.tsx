'use client'
import { useTheme } from '@/contexts/ThemeContext'
import { Moon, Waves } from '@phosphor-icons/react/dist/ssr'

export const ButtonTheme = () => {
  const { toggleTheme, theme } = useTheme()

  return (
    <div className="bottom-4 right-4 hidden md:fixed md:block">
      <button
        onClick={toggleTheme}
        className="
        flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-md
        transition duration-300
        ease-in-out hover:shadow-lg dark:bg-black
        dark:shadow-none dark:hover:shadow-lg
      "
      >
        {theme === 'dark' ? (
          <Waves size={32} color={'white'} />
        ) : (
          <Moon size={32} color={'black'} />
        )}
      </button>
    </div>
  )
}

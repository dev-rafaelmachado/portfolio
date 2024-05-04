'use client'
import { useLanguage } from '@/contexts/LanguageContext'
import extrasJSON from '../../static/extras.json'
import { Navlinks } from './Navlinks'

export const PreHeader = () => {
  const { language } = useLanguage()
  return (
    <div className="flex h-14 w-full">
      <div className="flex h-full w-full items-center justify-center rounded-t-xl bg-white lg:w-2/6">
        <a href="#" className="font-title text-2xl font-bold">
          <u className="decoration-gray-700">dev-rafaelmachado</u>
        </a>
      </div>
      <div className="hidden bg-background lg:block lg:h-14 lg:w-4/6">
        <Navlinks links={extrasJSON[language].nav} />
      </div>
    </div>
  )
}

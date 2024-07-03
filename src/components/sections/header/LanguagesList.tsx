import { useLanguage } from '@/contexts/LanguageContext'
import Image from 'next/image'

type Props = {
  languagesList: {
    name: string
    iconPath: string
  }[]
}

export const LanguagesList = ({ languagesList }: Props) => {
  const { setLanguage } = useLanguage()
  return (
    <div className="flex gap-2">
      {languagesList.map((lang, index) => {
        return (
          <Image
            key={index}
            src={lang.iconPath}
            alt={lang.name}
            width={24}
            height={24}
            onClick={() => {
              setLanguage(lang.name as 'en' | 'pt_br')
            }}
          />
        )
      })}
    </div>
  )
}

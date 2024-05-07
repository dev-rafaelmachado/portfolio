'use client'
import { StudyItem } from './StudyItem'
import { useLanguage } from '@/contexts/LanguageContext'
import studyJSON from '@/static/json/study.json'

export const Study = () => {
  const { language } = useLanguage()
  return (
    <section id="study">
      <h1 className="font-title text-4xl font-black text-[#316D98]">
        study //
      </h1>
      <div className="mt-12 pl-4 lg:pl-8">
        <ul className="flex w-full flex-col gap-8 lg:w-2/3">
          {studyJSON[language].map((item, index) => {
            return <StudyItem key={index} {...item} />
          })}
        </ul>
      </div>
    </section>
  )
}

'use client'
import workJSON from '@/static/json/work.json'
import extrasJSON from '@/static/json/extras.json'
import { WorkItem } from './WorkItem'
import { useLanguage } from '@/contexts/LanguageContext'

export const Work = () => {
  const { language } = useLanguage()
  return (
    <section id="work">
      <h1 className="font-title text-4xl font-black text-textColor dark:text-textColor-dark">
        {extrasJSON[language].nav[1].name} //
      </h1>
      <div className="mt-12 pl-2 lg:pl-4">
        <ul className="flex w-full flex-col gap-2">
          {workJSON[language].map((item, index) => {
            return <WorkItem key={index} {...item} />
          })}
        </ul>
      </div>
    </section>
  )
}

'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { ProjectItem } from './ProjectItem'
import projectsJSON from '@/static/json/projects.json'
import extrasJSON from '@/static/json/extras.json'

export const Projects = () => {
  const { language } = useLanguage()
  return (
    <section id="projects">
      <h1 className="font-title text-4xl font-black text-textColor dark:text-textColor-dark">
        {extrasJSON[language].nav[2].name} //
      </h1>
      <div className="mt-12 flex flex-col gap-16 lg:px-10">
        {projectsJSON[language].map((project, index) => {
          return <ProjectItem key={index} {...project} />
        })}
      </div>
    </section>
  )
}

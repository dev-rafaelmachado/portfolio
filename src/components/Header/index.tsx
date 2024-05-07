'use client'

import extrasJson from '@/static/json/extras.json'
import { socialsList } from '@/static/ts/socials'
import { useLanguage } from '@/contexts/LanguageContext'
import { PreHeader } from './PreHeader'
import { Socials } from './Socials'
import Image from 'next/image'

export const Header = () => {
  const { language } = useLanguage()
  return (
    <section className="w-full">
      <PreHeader />
      <div className="flex h-max w-full flex-col gap-4 rounded-b-xl bg-white py-4 lg:h-44 lg:flex-row lg:gap-0 lg:rounded-r-xl lg:py-0">
        <div className="flex h-full w-full items-center justify-center lg:w-3/6 ">
          <Image
            alt="profile"
            src={`/imgs/profile.jpg`}
            className="rounded-full"
            width={150}
            height={150}
          />
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center gap-6 px-4">
          <div>
            <p className="text-center font-default text-xl font-bold lg:text-left">
              {extrasJson[language].bio}
            </p>
          </div>
          <Socials socials={socialsList} />
        </div>
      </div>
    </section>
  )
}

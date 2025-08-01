import { Header } from '@/components/sections/header'
import { ButtonTheme } from '@/components/sections/header/ButtonTheme'
import { Projects } from '@/components/sections/projects'
import { Study } from '@/components/sections/study'
import { Work } from '@/components/sections/work'

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col gap-12 bg-background px-6 py-6 font-default dark:bg-background-dark md:px-24 lg:px-[18%] 2xl:px-[22%]">
      <Header />
      <Study />
      <Work />
      <Projects />
      <ButtonTheme />
    </main>
  )
}

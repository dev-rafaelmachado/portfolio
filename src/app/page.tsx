import { Header } from '@/components/header'
import { ButtonTheme } from '@/components/header/ButtonTheme'
import { Study } from '@/components/study'
import { Work } from '@/components/work'
import { Projects } from '@/components/projects'

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

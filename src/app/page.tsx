import { Header } from '@/components/Header'
import { Study } from '@/components/Study'
import { Work } from '@/components/Work'

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col gap-12 bg-background px-6 py-6 md:px-24 lg:px-[18%] 2xl:px-[22%]">
      <Header />
      <Study />
      <Work />
    </main>
  )
}

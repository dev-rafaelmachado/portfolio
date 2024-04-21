import { Header } from '@/components/Header'
import { Study } from '@/components/Study'

export default function Home() {
  return (
    <main className="bg-background flex min-h-screen w-screen flex-col gap-12 py-6 md:px-24 lg:px-[18%] 2xl:px-[22%]">
      <Header />
      <Study />
    </main>
  )
}

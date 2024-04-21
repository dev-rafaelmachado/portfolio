import { Navlinks } from './Navlinks'

const linksList = [
  { name: 'work', url: '#' },
  { name: 'study', url: '#' },
  { name: 'projects', url: '#' },
  { name: 'blog', url: '#' },
]

export const PreHeader = () => {
  return (
    <div className="flex h-14 w-full">
      <div className="flex h-full w-2/6 items-center justify-center rounded-t-xl bg-white">
        <a href="#" className="font-title text-2xl font-bold">
          <u className="decoration-gray-700">dev-rafaelmachado</u>
        </a>
      </div>
      <div className="bg-background h-14 w-4/6">
        <Navlinks links={linksList} />
      </div>
    </div>
  )
}

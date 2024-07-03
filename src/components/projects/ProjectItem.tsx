import { GitHubLogoIcon, LightningBoltIcon } from '@radix-ui/react-icons'
import Image from 'next/image'

type ProjectItemProps = {
  title: string
  description: string
  img: string
  githubLink: string
  demoLink?: string
}

export const ProjectItem = ({
  title,
  description,
  img,
  githubLink,
  demoLink,
}: ProjectItemProps) => {
  return (
    <div className="flex w-full flex-col rounded-lg bg-item-card shadow-slim shadow-[#1a232b] lg:h-60 lg:flex-row dark:shadow-[#121314] dark:shadow-slim">
      <div className="relative h-60 w-full overflow-hidden rounded-l-lg lg:w-1/3">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover object-center"
          quality={100}
        />
      </div>
      <div className="flex h-full w-full flex-col gap-4 px-6 py-4 lg:w-2/3">
        <h1 className="font-title text-2xl font-bold text-white">{title}</h1>
        <p className="flex-1 pr-4 text-sm font-thin text-white">
          {description}
        </p>
        <div className="flex gap-4">
          <a href={githubLink}>
            <button
              className="flex items-center gap-4 rounded-md bg-black px-8 py-1 text-lg text-white 
                transition-all duration-300 ease-in-out hover:bg-white hover:text-black
            "
            >
              <GitHubLogoIcon />
              Github
            </button>
          </a>
          {demoLink && (
            <a href={demoLink}>
              <button
                className="flex items-center gap-4 rounded-md bg-cyan-600 px-8 py-1 text-lg text-white
                transition-all duration-300 ease-in-out hover:bg-cyan-300 hover:text-black
            "
              >
                <LightningBoltIcon />
                Demo
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

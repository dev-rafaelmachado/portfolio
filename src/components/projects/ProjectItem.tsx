import { GitHubLogoIcon, LightningBoltIcon } from '@radix-ui/react-icons'
import Image from 'next/image'

type ProjectItemProps = {
  title: string
  description: string
  img: string
  githubLink: string
  demoLink: string
}

export const ProjectItem = ({
  title,
  description,
  img,
  githubLink,
  demoLink,
}: ProjectItemProps) => {
  return (
    <div className="flex h-fit w-full rounded-xl shadow-lg shadow-black lg:h-60">
      <div className="h-full overflow-hidden">
        <Image
          src={img}
          alt={title}
          width={600}
          height={300}
          className="object-cover object-center"
        />
      </div>
      <div className="flex h-full flex-col gap-4 px-6 py-4">
        <h1 className="font-title text-3xl font-bold text-white">{title}</h1>
        <p className="font-md flex-1 pr-4 font-light text-white">
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
        </div>
      </div>
    </div>
  )
}

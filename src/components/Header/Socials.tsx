import { ElementType } from 'react'

export type Social = {
  name: string
  url: string
  iconColor: string
  className: string
  icon: ElementType
}

type Props = {
  socials: Social[]
}

export const Socials = ({ socials }: Props) => {
  return (
    <ul className="flex w-full items-start justify-center lg:-ml-3 lg:justify-start">
      {socials.map((social, index) => {
        return (
          <li key={index} className="mx-2 flex items-center gap-1">
            <a
              href={social.url}
              target="_blank"
              className={`flex items-center gap-1 text-slate-700 transition-all duration-300 ease-in-out ${social.className}`}
            >
              <social.icon
                className="size-7 lg:size-5"
                color={social.iconColor}
              />
              <span className="hidden lg:block">{social.name}</span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}

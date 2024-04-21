import { ElementType } from 'react'

export type Social = {
  name: string
  url: string
  color: string
  icon: ElementType
}

type Props = {
  socials: Social[]
}

export const Socials = ({ socials }: Props) => {
  return (
    <ul className="-ml-3 flex w-full items-start justify-start">
      {socials.map((social, index) => {
        return (
          <li key={index} className="mx-2 flex items-center gap-1">
            <a
              href={social.url}
              target="_blank"
              className={`flex items-center gap-1 text-slate-700 transition-all duration-300 ease-in-out hover:text-[${social.color}]`}
            >
              <social.icon size={18} color={social.color} />
              <span>{social.name}</span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}

import Image from 'next/image'
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from '@phosphor-icons/react/dist/ssr'
import { PreHeader } from './PreHeader'
import { Social, Socials } from './Socials'

const badgeText = {
  en: "Hey, I'm Rafael. A passionate Web Developer diving deep into the Node.js stack, and an enthusiast of Rust-lang.",
  pt: 'Olá, eu sou Rafael. Um desenvolvedor web apaixonado mergulhando fundo na stack Node.js, e um entusiasta da linguagem Rust.',
}

const socialsList: Social[] = [
  {
    name: 'Twitter',
    url: '#',
    color: '#7ABFF6',
    icon: TwitterLogo,
  },
  {
    name: 'Instagram',
    url: '#',
    color: '#EE613C',
    icon: InstagramLogo,
  },
  {
    name: 'Linkedin',
    url: '#',
    color: '#64A3DD',
    icon: LinkedinLogo,
  },
  {
    name: 'Github',
    url: '#',
    color: '#CDC8C2',
    icon: GithubLogo,
  },
]

export const Header = () => {
  return (
    <section className="w-full">
      <PreHeader />
      <div className="flex h-44 w-full rounded-b-xl rounded-r-xl bg-white">
        <div className="flex h-full w-3/6 items-center justify-center">
          <Image
            alt="profile"
            src={`/imgs/profile.png`}
            width={150}
            height={150}
          />
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center gap-6 px-4">
          <div>
            <p className="font-default text-xl font-bold">{badgeText.en}</p>
          </div>
          <ul className="-ml-3 flex w-full items-start justify-start">
            <Socials socials={socialsList} />
          </ul>
        </div>
      </div>
    </section>
  )
}

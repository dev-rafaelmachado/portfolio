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
  en: "Hi, I'm Rafael. A passionate Web Developer diving deep into the Javascript stack, and an enthusiast of Rust-lang.",
  pt: 'Olá, eu sou Rafael. Um desenvolvedor web apaixonado mergulhando fundo na stack Javascript, e um entusiasta da linguagem Rust.',
}

const socialsList: Social[] = [
  {
    name: 'Twitter',
    url: '#',
    className: 'hover:text-[#7ABFF6]',
    iconColor: '#7ABFF6',
    icon: TwitterLogo,
  },
  {
    name: 'Instagram',
    url: '#',
    className: 'hover:text-[#EE613C]',
    iconColor: '#EE613C',
    icon: InstagramLogo,
  },
  {
    name: 'Linkedin',
    url: '#',
    className: 'hover:text-[#64A3DD]',
    iconColor: '#64A3DD',
    icon: LinkedinLogo,
  },
  {
    name: 'Github',
    url: '#',
    className: 'hover:text-[#CDC8C2]',
    iconColor: '#CDC8C2',
    icon: GithubLogo,
  },
]

export const Header = () => {
  return (
    <section className="w-full">
      <PreHeader />
      <div className="flex h-max w-full flex-col gap-4 rounded-b-xl bg-white py-4 lg:h-44 lg:flex-row lg:gap-0 lg:rounded-r-xl lg:py-0">
        <div className="flex h-full w-full items-center justify-center lg:w-3/6 ">
          <Image
            alt="profile"
            src={`/imgs/profile.jpg`}
            className="rounded-full"
            width={150}
            height={150}
          />
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center gap-6 px-4">
          <div>
            <p className="text-center font-default text-xl font-bold lg:text-left">
              {badgeText.en}
            </p>
          </div>
          <Socials socials={socialsList} />
        </div>
      </div>
    </section>
  )
}

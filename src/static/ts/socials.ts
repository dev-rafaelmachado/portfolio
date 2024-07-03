import { Social } from '@/components/sections/header/Socials'
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from '@phosphor-icons/react/dist/ssr'

export const socialsList: Social[] = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/RExquilo',
    className: 'hover:text-[#7ABFF6]',
    iconColor: '#7ABFF6',
    icon: TwitterLogo,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/rafael_rlm_/',
    className: 'hover:text-[#EE613C]',
    iconColor: '#EE613C',
    icon: InstagramLogo,
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/rafael-leal-machado-4966261b3/',
    className: 'hover:text-[#64A3DD]',
    iconColor: '#64A3DD',
    icon: LinkedinLogo,
  },
  {
    name: 'Github',
    url: 'https://github.com/dev-rafaelmachado',
    className: 'hover:text-[#CDC8C2]',
    iconColor: '#CDC8C2',
    icon: GithubLogo,
  },
]

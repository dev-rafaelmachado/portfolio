import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from '@phosphor-icons/react/dist/ssr'

import { Social } from '@/components/Header/Socials'

export const socialsList: Social[] = [
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

import { useLanguage } from '@/contexts/LanguageContext'
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui/select'
import Image from 'next/image'

type Props = {
  items: {
    name: string
    label: string
    iconPath: string
  }[]
  mobile?: boolean
}

export const Language = ({ items, mobile }: Props) => {
  const { setLanguage, language } = useLanguage()
  return (
    <div className="flex items-center justify-start px-4">
      <Select
        onValueChange={(value: 'en' | 'pt_br') => {
          setLanguage(value)
        }}
        value={language}
        defaultValue="en"
      >
        <SelectTrigger className="bg-custom dark:bg-custom-dark w-fit">
          <SelectValue placeholder="language" />
        </SelectTrigger>
        <SelectContent className="bg-background text-white dark:bg-background-dark">
          {items.map((item, index) => {
            return (
              <SelectItem key={index} value={item.name}>
                <div className="flex items-center justify-start">
                  <Image
                    src={item.iconPath}
                    alt={item.name}
                    width={20}
                    height={20}
                  />
                  <span className={`${!mobile ? 'w-fit' : 'w-4'} ml-2`}>
                    {item.label}
                  </span>
                </div>
              </SelectItem>
            )
          })}
        </SelectContent>
      </Select>
    </div>
  )
}

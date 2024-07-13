type Props = {
  links: {
    name: string
    url: string
  }[]
}

export const Navlinks = ({ links }: Props) => {
  return (
    <div className="flex items-center justify-end">
      {links.map((link, index) => {
        return (
          <li key={index} className="mx-4 ">
            <a
              className="group text-white transition-all duration-700 ease-in-out"
              href={link.url}
            >
              <span className="bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-left-bottom bg-no-repeat font-title text-xl font-bold transition-all duration-700 ease-out group-hover:bg-[length:100%_2px]">
                {link.name}
              </span>
            </a>
          </li>
        )
      })}
    </div>
  )
}

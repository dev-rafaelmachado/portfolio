import { yearPeriod } from '@/utils/yearPeriod'

export type TStudyItem = {
  title: string
  local: string
  initialDate: Date | string
  finalDate: Date | string | null
  description: string

  isFinal?: boolean
}

export const StudyItem = ({
  title,
  local,
  initialDate,
  finalDate,
  description,
  isFinal = false,
}: TStudyItem) => {
  return (
    <div className={`group flex gap-6`}>
      <div className="relative flex flex-col items-center justify-start">
        <div className="border-dotColor dark:border-dotColor-dark group-hover:bg-dotColor dark:group-hover:bg-dotColor-dark h-8 w-8 rounded-full border-8 border-solid bg-transparent transition-colors duration-150 ease-in-out" />
        {!isFinal && (
          <div className="absolute top-8 h-[calc(100%+8px)] w-[1px] bg-[#B1B1B1]" />
        )}
      </div>
      <div className="flex w-full flex-col">
        <h1 className="font-default text-lg font-semibold text-white ">
          {title}
        </h1>
        <h3
          className="font-default text-sm font-medium text-[#C3C3C3]
        "
        >
          {local} - {yearPeriod(initialDate, finalDate)}
        </h3>
        <p className="mt-2 w-11/12 font-default text-sm font-normal text-[#C3C3C3]">
          {description}
        </p>
      </div>
    </div>
  )
}

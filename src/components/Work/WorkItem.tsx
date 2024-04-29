/* eslint-disable @next/next/no-img-element */
import { yearPeriod } from '@/utils/yearPeriod'
import Image from 'next/image'

export type TWorkItem = {
  title: string
  iconPath: string
  role: string
  position: string
  techStack: string[]
  /** City - State */
  local: string
  initialDate: Date | string
  finalDate: Date | string | null
  description: string
}

export const WorkItem = ({
  title,
  iconPath,
  role,
  position,
  techStack,
  local,
  initialDate,
  finalDate,
  description,
}: TWorkItem) => {
  return (
    <div className="flex flex-col gap-3 text-white">
      <div className="flex flex-col items-start justify-between gap-2 lg:flex-row lg:items-center lg:gap-0">
        <div className="flex gap-2">
          <Image src={iconPath} alt={title} width={80} height={80} />
          <div className="flex flex-col">
            <h2 className="mb-1 text-xl font-bold">{title}</h2>
            <h4 className="text-sm font-light">
              <strong className="font-semibold">Function: </strong>
              {role}
            </h4>
            <h4 className="text-sm font-light">
              <strong className="font-semibold">Position: </strong>
              {position}
            </h4>
          </div>
        </div>
        <div className="flex w-full flex-wrap items-start justify-start gap-1 lg:w-2/4 lg:justify-end lg:gap-2">
          {techStack.map((tech, index) => {
            return <img key={index} src={tech} alt={tech} className="" />
          })}
        </div>
      </div>
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:gap-2">
        <div className=" w-full lg:w-2/3">
          <p className="text-sm font-normal">{description}</p>
        </div>
        <div className="flex flex-col items-start justify-start lg:items-end">
          <h6 className="text-sm font-bold">{local}</h6>
          <h6 className="text-sm font-bold">
            {yearPeriod(initialDate, finalDate)}
          </h6>
        </div>{' '}
        {/* Local, initialDate, finalDate */}
      </div>
    </div>
  )
}

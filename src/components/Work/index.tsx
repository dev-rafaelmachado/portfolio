import { TWorkItem, WorkItem } from './WorkItem'

const items: TWorkItem[] = [
  {
    title: 'Exban',
    iconPath: '/svg/exban.svg',
    role: 'Web Fullstack Developer',
    position: 'Intern',
    description:
      "I've been responsible for maintaining and enhancing the ERP system, both on the backend and frontend. Additionally, I've developed the company's landing page and worked on various small projects, including system integrations.",
    techStack: [
      'https://img.shields.io/badge/Next-000000?style=for-the-badge&logo=next.js&logoColor=white',
      'https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white',
      'https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white',
      'https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB',
      'https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white',
      'https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white',
    ],
    initialDate: new Date('2023-01-06'),
    finalDate: null,
    local: 'Curitiba - PR',
  },
]

export const Work = () => {
  return (
    <section>
      <h1 className="font-title text-4xl font-black text-[#316D98]">work //</h1>
      <div className="mt-12 pl-2 lg:pl-4">
        <ul className="flex w-full flex-col gap-2">
          {items.map((item, index) => {
            return <WorkItem key={index} {...item} />
          })}
        </ul>
      </div>
    </section>
  )
}

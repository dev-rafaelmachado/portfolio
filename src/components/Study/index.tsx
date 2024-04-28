import { StudyItem, TStudyItem } from './StudyItem'

const items: TStudyItem[] = [
  {
    title: "Bachelor's Degree in Computer Science",
    local: 'PUCPR',
    initialDate: new Date('2022-01-02'),
    finalDate: null,
    description:
      "I am currently pursuing a Bachelor's Degree in Computer Science, where I have delved into concepts such as Logic Mathematics, Software Architecture, Data Structures, Algorithm Complexity, Machine Learning, and more, expanding my understanding and skills in the tech field.",
  },
  {
    title: 'Computer Technician',
    local: 'TECPUC',
    initialDate: new Date('2019-01-02'),
    finalDate: new Date('2021-12-02'),
    description:
      'During high school at TECPUC, I pursued a technical degree in informatics, where I was introduced to essential concepts across various tech fields, from programming to design, networking, and more.',
    isFinal: true,
  },
]

export const Study = () => {
  return (
    <section>
      <h1 className="font-title text-4xl font-black text-[#316D98]">
        study //
      </h1>
      <div className="mt-12 pl-4 lg:pl-8">
        <ul className="flex w-full flex-col gap-8 lg:w-2/3">
          {items.map((item, index) => {
            return <StudyItem key={index} {...item} />
          })}
        </ul>
      </div>
    </section>
  )
}

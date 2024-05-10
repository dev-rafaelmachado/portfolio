import { ProjectItem } from './ProjectItem'

export const Projects = () => {
  return (
    <section id="projects">
      <h1 className="font-title text-4xl font-black text-textColor dark:text-textColor-dark">
        study //
      </h1>
      <div className="mt-12 flex flex-col px-10">
        <ProjectItem
          title="Scrum Flush"
          description="
            Scrum Flush is a web application that helps teams to manage their 
            Scrum meetings. It's a simple and intuitive tool that helps to 
            organize the daily meetings, sprint plannings, and retrospectives."
          img="/imgs/test.jpeg"
          githubLink="https://github.com"
          demoLink="https://github.com"
        />
      </div>
    </section>
  )
}

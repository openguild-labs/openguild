import projectsData from '@/data/projectsData'
import Marquee from 'react-fast-marquee'
import Card from './Card'

export default function ProjectShowcaseSection() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <div className="flex flex-wrap justify-between">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14">
            Projects
          </h1>
          <a
            href="/projects"
            className="flex w-full items-center rounded-lg border border-gray-900 bg-gray-800 px-4 py-1 text-sm font-medium text-white shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 md:w-fit"
          >
            <span>See more projects</span>
          </a>
        </div>
        <div className="lg:flex lg:justify-evenly">
          <Marquee>
            {projectsData.map((d, index) => (
              <Card
                key={`${d.title}-${index}`}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
                competition={d.competition}
                award={d.award}
                github={d.github}
              />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  )
}

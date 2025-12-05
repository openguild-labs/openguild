import projectsData from '@/data/projectsData'
import Marquee from 'react-fast-marquee'
import Card from './Card'

export default function ProjectShowcaseSection() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1
            className="text-2xl font-bold uppercase leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14"
            style={{ fontFamily: 'var(--font-vcr)' }}
          >
            Projects
          </h1>
          <a
            href="/projects"
            className="inline-block bg-gray-900 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:translate-x-0.5 hover:translate-y-0.5 dark:bg-white dark:text-gray-900"
            style={{
              fontFamily: 'var(--font-vcr)',
              border: '2px solid #1a1a1a',
              boxShadow: '4px 4px 0px #1a1a1a',
            }}
          >
            See more projects
          </a>
        </div>
        <div className="mt-8 lg:flex lg:justify-evenly">
          <Marquee pauseOnHover>
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

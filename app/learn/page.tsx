import { ModuleListSection } from '@/components/ModuleListContainer'
import {
  courses,
  researchArticles,
  technicalActivityProjects,
  technicalVideos,
} from 'app/constants'

export default function LearnPage() {
  return (
    <div>
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
          Live Coding Session
        </h1>
        <div className="flex-wrap lg:flex" style={{ justifyContent: 'space-evenly' }}>
          {technicalVideos.map((video) => (
            <iframe
              key={video.url}
              width="100%"
              height="300px"
              style={{ borderRadius: 10, margin: '5px', maxWidth: 550 }}
              src={video.url}
              title="YouTube video player"
              allowFullScreen
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          ))}
        </div>
      </div>
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
          Research Articles
        </h1>
        <ModuleListSection
          marquee={false}
          modules={researchArticles}
          cardStyle={{ maxWidth: 500 }}
        />
      </div>
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
          Technical Activities
        </h1>
        <ModuleListSection
          marquee={false}
          modules={technicalActivityProjects}
          cardStyle={{ maxWidth: 350 }}
        />
      </div>
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
          Rust and Polkadot Courses
        </h1>
        <ModuleListSection marquee={false} modules={courses} cardStyle={{ maxWidth: 350 }} />
      </div>
    </div>
  )
}

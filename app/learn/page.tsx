import { ModuleListSection } from '@/components/ModuleListContainer'
import { courses, researchArticles } from 'app/constants'

export default function LearnPage() {
  return (
    <div>
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
          Research Articles
        </h1>
        <ModuleListSection marquee={false} modules={researchArticles} />
      </div>
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
          Rust and Polkadot Courses
        </h1>
        <ModuleListSection marquee={false} modules={courses} />
      </div>
    </div>
  )
}

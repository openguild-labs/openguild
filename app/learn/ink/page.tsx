import { ModuleListSection } from '@/components/ModuleListContainer'
import { inkTutorials } from 'app/constants'

export default function LearnInkPage() {
  return (
    <div>
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <div className="flex items-center">
          <img
            height={50}
            width={50}
            style={{ marginRight: 20 }}
            alt="polkadot learn"
            src="/static/images/polkadot/jumbotron/ink_LOGO.png"
          />
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14">
            Learn ink!
          </h1>
        </div>
      </div>
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14">
          Technical Activities
        </h1>
        <ModuleListSection marquee={false} modules={inkTutorials} cardStyle={{ maxWidth: 350 }} />
      </div>
    </div>
  )
}

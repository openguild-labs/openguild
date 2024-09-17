import { ModuleListSection } from '@/components/ModuleListContainer'
import { technicalActivityProjects } from 'app/constants'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  return (
    <>
      <div
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
        className="divide-y divide-gray-200 dark:divide-gray-700"
      >
        <div
          style={{
            maxWidth: 1000,
          }}
          className="space-y-2 pb-8 pt-6 md:space-y-5"
        >
          <div>
            <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
              <div>
                {[
                  'Total track bounty: $5,000',
                  'Bounty per deliverable: $30-$80',
                  'Extra OG Points: 120 - 250 XPs',
                ].map((item, index) => (
                  <button
                    key={`${item}-${index}`}
                    type="button"
                    className="mb-2 me-2 rounded-lg bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 px-5 py-1 text-center text-sm font-medium text-white shadow-lg shadow-pink-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-pink-300 dark:shadow-lg dark:shadow-pink-800/80 dark:focus:ring-pink-800"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <br />
            <div style={{ margin: '30px 0px 0px 0px' }}>
              <a
                type="button"
                style={{ width: 'fit-content' }}
                href="https://app.openguild.wtf/missions"
                className="mx-auto my-5 rounded-lg bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 px-5 py-2.5 text-center text-lg font-medium text-white shadow-lg shadow-purple-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-purple-300 dark:shadow-lg dark:shadow-purple-800/80 dark:focus:ring-purple-800"
              >
                Discover track topics
              </a>
            </div>
          </div>
          <br />
          <h1 className="text-xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">
            Preferred Qualification
          </h1>
          <ul className="rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
            {[
              'Must be a member of OpenGuild: Nomad, Lowlevelers, Elders',
              'Discover track missions on the community platform and follow the mission guidelines',
              'Finish the mission to claim the rewards',
            ].map((item, index) => (
              <li
                key={`qualification-${index}`}
                className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"
              >
                <div className="flex items-center ps-3">
                  <input
                    checked
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 bg-purple-700 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
                  />
                  <div className="ms-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {item}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <h1 className="text-xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">
            Guidelines
          </h1>
          <p>
            A collection of fun and simple community missions proposed by members to attract and
            engage newcomers in exploring Polkadot activities. These missions are designed to be
            beginner-friendly and provide an enjoyable introduction to the Polkadot ecosystem,
            helping users quickly get involved while learning about key features such as staking,
            governance, cross-chain messaging, and decentralized applications. By completing these
            tasks, new participants can earn rewards and gain valuable hands-on experience,
            fostering a sense of accomplishment and encouraging deeper involvement within the
            Polkadot community.
          </p>
        </div>
      </div>
    </>
  )
}

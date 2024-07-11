import OpenContributionBountyTracks from '@/components/OpenContributionBountyTracks'
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
          <div style={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
            <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
              💰 Open Contribution Bounty
            </h1>
          </div>
          <h1 className="text-xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">
            About the bounty
          </h1>
          <p>
            The Open Contribution Bounty is a rewarding initiative offering a total prize pool of
            $20,000 to participants who contribute to the development and documentation of various
            Substrate-based blockchain projects. <br />
            <br />
            This bounty aims to foster innovation and collaboration within the blockchain ecosystem
            by encouraging developers to create high-quality educational materials, technical
            documentation, and implementation guidelines for different Substrate blockchain topics.{' '}
            <br />
            <br />
            Participants will not only earn monetary rewards but also gain recognition, networking
            opportunities, and additional experience points (XPs) within the OpenGuild community.
            The bounty is divided into multiple tracks, each focusing on specific aspects of
            Substrate blockchains, with prizes allocated based on the complexity and impact of the
            contributions.
          </p>
          <h1 className="text-xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">
            How to submit?
          </h1>
          <p>
            To submit your work and claim the bounty, you will need to provide a link to your
            completed document or code repository. This should be accompanied by a brief summary of
            the work completed and any additional notes or explanations. Please take a look at below
            criterias:
          </p>
          <ul className="rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
            <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  checked
                  type="checkbox"
                  value=""
                  className="h-4 w-4 rounded border-gray-300 bg-purple-700 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
                />
                <label className="ms-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Finish{' '}
                  <a
                    className="bg-purple-100"
                    href="https://handbook.openguild.wtf/general-information/membership/ranking-system"
                  >
                    Getting Started quests and claimed at least OpenGuild Member rank
                  </a>
                </label>
              </div>
            </li>
            <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  checked
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 bg-purple-700 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
                />
                <label className="ms-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Must be open-source, forkable and will be archived as a public good of Polkadot
                </label>
              </div>
            </li>
            <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  checked
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 bg-purple-700 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
                />
                <label className="ms-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Share on X with <b>@openguild</b> as a tagged account
                </label>
              </div>
            </li>
            <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  checked
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 bg-purple-700 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
                />
                <label className="ms-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Content of the shared X post content must summarize of the solution you deliver
                </label>
              </div>
            </li>
            <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  checked
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 bg-purple-700 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
                />
                <label className="ms-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Meet the specific criterias of the applied bountry track
                </label>
              </div>
            </li>
            <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  type="checkbox"
                  checked
                  className="h-4 w-4 rounded border-gray-300 bg-purple-700 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
                />
                <label className="ms-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Follow the{' '}
                  <a
                    className="bg-purple-100"
                    href="https://handbook.openguild.wtf/general-information/membership/how-to-claim-xp-and-bounty"
                  >
                    guidelines to submit your work to OpenGuild Discord channel
                  </a>
                </label>
              </div>
            </li>
          </ul>
          <p>
            <b>NOTE</b>: All submission will be transferred to the OpenGuild Labs Github
            organization and owned by the community.
          </p>
          <h1 className="text-xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">
            Tracks
          </h1>
          <OpenContributionBountyTracks />
        </div>
      </div>
    </>
  )
}

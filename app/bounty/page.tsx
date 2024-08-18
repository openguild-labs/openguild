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
            <section className="body-font text-black">
              <div className="container mx-auto px-1 pt-20 lg:px-1 lg:py-1">
                <div className="mb-2 flex w-full flex-col text-left md:text-center">
                  <div
                    style={{
                      background:
                        "url('/static/images/polkadot/jumbotron/OG_Open_Contribution_Bounty_Banner.png')",
                      borderRadius: '10px',
                      marginBottom: 50,
                      height: 330,
                      rotate: '-1.5deg',
                      width: '100%',
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                      objectFit: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <h1 className="mb-2 text-2xl font-bold tracking-tighter md:text-7xl lg:text-5xl">
                    💰 Open Contribution Bounty
                  </h1>
                  <a
                    type="button"
                    style={{ width: 'fit-content' }}
                    href="https://noteforms.com/forms/open-contribution-bounty-jkedi6"
                    className="mx-auto my-5 rounded-lg bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 px-5 py-2.5 text-center text-lg font-medium text-white shadow-lg shadow-purple-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-purple-300 dark:shadow-lg dark:shadow-purple-800/80 dark:focus:ring-purple-800"
                  >
                    Apply now to hunt the bounty 🔥
                  </a>
                  <br></br>
                  <p className="mx-auto  text-xl font-normal leading-relaxed text-gray-600 dark:text-gray-300 lg:w-2/3">
                    <span className="font-bold text-primary-500">The Open Contribution Bounty</span>{' '}
                    is a rewarding initiative offering a total prize pool of $20,000 to participants
                    who contribute to the development and documentation of various Substrate-based
                    blockchain projects.
                  </p>
                </div>
              </div>
            </section>
          </div>
          <h1 className="text-xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">
            Benefits of Participants
          </h1>
          <ul className="rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 shadow-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white">
            {[
              'Total Bounty up to $20,000 !!!',
              <span key={'item-1'}>
                Getting Feature on the Official OpenGuild{' '}
                <a className="text-bold text-purple-500" href="https://openguild.wtf/blog">
                  Website
                </a>{' '}
                and{' '}
                <a className="text-bold text-purple-500" href="https://x.com/openguildwtf/articles">
                  X's Articles
                </a>{' '}
                with Full Credit.
              </span>,
              'Have a dedicated shoutout tweet on OpenGuild to promote the winner’s branding.',
              'Introduce Participant’s Profiles to Ecosystem Partners for Networking, and potential careers opportunities in the ecosystem.',
              'Get BIG EXTRA XPs - OG level UP!',
            ].map((item, index) => (
              <li
                key={`${item}-${index}`}
                className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"
              >
                <div className="flex items-center ps-3">
                  <div className="ms-2 flex w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    <div
                      className="bg-purple-500"
                      style={{
                        marginRight: 10,
                        width: 20,
                        height: 20,
                        justifyContent: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        borderRadius: '10px',
                      }}
                    >
                      {index + 1}
                    </div>
                    {item}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <h1 className="text-xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">
            Submission Guidelines
          </h1>
          <p>
            To submit your work and claim the bounty, you will need to provide a link to your
            completed document or code repository. This should be accompanied by a brief summary of
            the work completed and any additional notes or explanations. Please take a look at below
            criterias:
          </p>
          <ul className="rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 shadow-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white">
            <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  checked
                  type="checkbox"
                  value=""
                  className="h-4 w-4 rounded border-gray-300 bg-purple-700 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
                />
                <div className="ms-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Finish{' '}
                  <a
                    className="bg-purple-100"
                    href="https://handbook.openguild.wtf/general-information/membership/ranking-system"
                  >
                    Getting Started quests and claimed at least OpenGuild Member rank
                  </a>
                </div>
              </div>
            </li>
            <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  checked
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 bg-purple-700 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
                />
                <div className="ms-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Must be open-source, forkable and will be archived as a public good of Polkadot
                </div>
              </div>
            </li>
            <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  checked
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 bg-purple-700 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
                />
                <div className="ms-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Share on X with <b>@openguild</b> as a tagged account
                </div>
              </div>
            </li>
            <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  checked
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 bg-purple-700 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
                />
                <div className="ms-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Content of the shared X post content must summarize of the solution you deliver
                </div>
              </div>
            </li>
            <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  checked
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 bg-purple-700 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
                />
                <div className="ms-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Meet the specific criterias of the applied bountry track
                </div>
              </div>
            </li>
            <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
              <div className="flex items-center ps-3">
                <input
                  type="checkbox"
                  checked
                  className="h-4 w-4 rounded border-gray-300 bg-purple-700 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
                />
                <div className="ms-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Follow the{' '}
                  <a
                    className="bg-purple-100"
                    href="https://handbook.openguild.wtf/general-information/membership/how-to-claim-xp-and-bounty"
                  >
                    guidelines to submit your work to OpenGuild Discord channel
                  </a>
                </div>
              </div>
            </li>
          </ul>
          <p>You will receive the bounty payment after your work is reviewed and approved.</p>
          <p>
            <b>NOTE</b>: All submission will be transferred to the OpenGuild Labs Github
            organization and owned by the community.
          </p>
          <h1 className="text-xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">
            Explore these tracks below and start contributing today!
          </h1>
          <OpenContributionBountyTracks />
        </div>
      </div>
    </>
  )
}

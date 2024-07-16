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
          <img
            className="shadow-lg"
            style={{
              borderRadius: '15px',
              overflow: 'hidden',
              width: '100%',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              objectFit: 'cover',
              backgroundPosition: 'center',
            }}
            src="/static/images/polkadot/jumbotron/OG_Bounty_Track_1_full.png"
          />
          <div>
            <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
              <div>
                {[
                  'Total track bounty: $4,500',
                  'Bounty per deliverable: $200-$250',
                  'Extra OG Points: 500 XPs',
                  'Type: Application Required',
                ].map((item) => (
                  <button
                    type="button"
                    className="mb-2 me-2 rounded-lg bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 px-5 py-1 text-center text-sm font-medium text-white shadow-lg shadow-pink-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-pink-300 dark:shadow-lg dark:shadow-pink-800/80 dark:focus:ring-pink-800"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <br />
            <h1 className="text-xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">
              How to submit your application?
            </h1>
            <ul className="rounded-lg border border-gray-200 bg-white px-2 text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
              {[
                <span key={'item-3'}>
                  <b>⏰ Duration</b>: <span className="bg-purple-100 font-bold">1 MONTH</span>
                </span>,
                <span key={'item-1'}>
                  Submit the track number and your action plan with the expected delivery date in{' '}
                  <a className="bg-purple-100 font-bold">
                    Substrate Course Track - Application Form
                  </a>
                </span>,
                'Weekly report needs to be submitted on Discord on Saturday everyweek (4 reports in total)',
              ].map((item, index) => (
                <li
                  key={`${item}-${index}`}
                  className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"
                >
                  <div className="flex items-center ps-3">
                    <div className="ms-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      {item}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div style={{ margin: '30px 0px 0px 0px' }}>
              <a
                type="button"
                style={{ width: 'fit-content' }}
                href="https://noteforms.com/forms/workshop-technical-activity-r3e1dt"
                className="mx-auto my-5 rounded-lg bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 px-5 py-2.5 text-center text-lg font-medium text-white shadow-lg shadow-purple-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-purple-300 dark:shadow-lg dark:shadow-purple-800/80 dark:focus:ring-purple-800"
              >
                Submit your application
              </a>
            </div>
          </div>
          <br />
          <h1 className="text-xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">
            Preferred Qualification
          </h1>
          <ul className="rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
            {[
              'Must be an active member of OpenGuild',
              'Lowlevelers, Elders, PBA Graduates',
              'Submit your action plan and describe your approaches in a clear way',
              'Has a background in software development or blockchain technology',
              'Proof of commitment to deliver the solution in time',
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
            Your content should be technical and easy for the average developers to understand, and
            aim to provide clear and concise explanations of complex topics. All submissions should
            be original work and provide practical insights or examples. You should also include
            code snippets or diagrams where they add value.
          </p>
          <ul className="rounded-lg border border-gray-200 bg-white pr-5 text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
            {[
              <span key={'item-1'}>
                <b className="text-purple-700">Criteria 1:</b> Clear description & purpose of the
                Substrate Course. Your deliverable must be unique at the time of creation and does
                not exist on the market.
              </span>,
              <span key={'item-2'}>
                <b className="text-purple-700">Criteria 2:</b> Detailed explanation on the code
                implementation
              </span>,
              <span key={'item-3'}>
                <b className="text-purple-700">Criteria 3:</b> Table of contents is required
              </span>,
              <span key={'item-4'}>
                <b className="text-purple-700">Criteria 4:</b> Development stages must be broken
                down into small steps (similar to the below). Each step contains the code
                implementation for that specific step. Consider using
                https://github.com/gitorial-sdk/cli to generate the tutorials using Git. Example:
                https://github.com/shawntabrizi/rust-state-machine
              </span>,
              <span key={'item-5'}>
                <b className="text-purple-700">Criteria 5:</b> Your content should be
                well-structured, readable, and easy to follow. It should include clear explanations
                for all code snippets and diagrams.
              </span>,
              <span key={'item-6'}>
                <b className="text-purple-700">Criteria 6:</b> The course should include practical
                examples or real-world scenarios to help learners understand how to apply the
                concepts.
              </span>,
              <span key={'item-7'}>
                <b className="text-purple-700">Criteria 7:</b> It should be open source by default
                (forever) as a public good, promoted by the documentation bounty of OpenGuild and
                the author.
              </span>,
            ].map((item, index) => (
              <li
                key={`guideline-${index}`}
                className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"
              >
                <div className="flex items-center ps-3">
                  <div className="ms-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {item}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

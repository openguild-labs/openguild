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
              Substrate Course Track
            </h1>
          </div>
          <h1 className="text-xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">
            Track Description
          </h1>
          <p>
            Substrate courses are a series of educational materials that aim to help developers
            understand the workflow of the Substrate blockchain framework. These courses will
            encompass a range of topics, from basic concepts to advanced techniques, providing a
            comprehensive guide for anyone looking to build on Substrate.
          </p>
          <h1 className="text-xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">
            How to submit your application?
          </h1>
          <ul className="rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
            {[
              <span>
                Submit the track number and your action plan with the expected delivery date in{' '}
                <a className="bg-purple-100 font-bold">Substrate Course Track - Application Form</a>
              </span>,
              'Weekly report needs to be submitted on Discord on Saturday everyweek (4 reports in total)',
              <span>
                <b>⏰ Duration</b>: <span className="bg-purple-100 font-bold">1 MONTH</span>
              </span>,
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
              <span>
                <b className="text-purple-700">Criteria 1:</b> Clear description & purpose of the
                Substrate Course. Your deliverable must be unique at the time of creation and does
                not exist on the market.
              </span>,
              <span>
                <b className="text-purple-700">Criteria 2:</b> Detailed explanation on the code
                implementation
              </span>,
              <span>
                <b className="text-purple-700">Criteria 3:</b> Table of contents is required
              </span>,
              <span>
                <b className="text-purple-700">Criteria 4:</b> Development stages must be broken
                down into small steps (similar to the below). Each step contains the code
                implementation for that specific step. Consider using
                https://github.com/gitorial-sdk/cli to generate the tutorials using Git. Example:
                https://github.com/shawntabrizi/rust-state-machine
              </span>,
              <span>
                <b className="text-purple-700">Criteria 5:</b> Your content should be
                well-structured, readable, and easy to follow. It should include clear explanations
                for all code snippets and diagrams.
              </span>,
              <span>
                <b className="text-purple-700">Criteria 6:</b> The course should include practical
                examples or real-world scenarios to help learners understand how to apply the
                concepts.
              </span>,
              <span>
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

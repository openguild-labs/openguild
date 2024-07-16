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
            src="/static/images/polkadot/jumbotron/OG_Bounty_Track_4_full.png"
          />
          <div>
            <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
              <div>
                {[
                  'Total track bounty: $2,000',
                  'Bounty per deliverable: $80',
                  'Extra OG Points: 250 XPs',
                  'Type: Application Required',
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
            <h1 className="text-xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">
              How to submit your application?
            </h1>
            <ul className="rounded-lg border border-gray-200 bg-white px-2 text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
              {[
                <span key={'item-3'}>
                  <b>⏰ Duration</b>: <span className="bg-purple-100 font-bold">2 WEEKS</span>
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
                href="https://bit.ly/4665m3j"
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
              'Must be a member of OpenGuild: Lowlevelers, Elders',
              'You’re a PBA Graduates',
              'Submit your action plan and describe your approaches in a clear way',
              'Has a background in software development or blockchain technology',
              'Proof of commitment to deliver the solution on time',
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
                <b className="text-purple-700">Criteria 1:</b> Your proposed activity should cover a
                topic that is directly related to Polkadot or its ecosystem.
              </span>,
              <span key={'item-2'}>
                <b className="text-purple-700">Criteria 2:</b> Your proposed activity should provide
                a comprehensive overview of the subject matter, including any relevant background
                information and technical details.
              </span>,
              <span key={'item-3'}>
                <b className="text-purple-700">Criteria 3:</b> You should use a clear and concise
                presentation style, with a focus on making complex technical concepts accessible to
                a broad audience.
              </span>,
              <span key={'item-4'}>
                <b className="text-purple-700">Criteria 4:</b> Where appropriate, you should include
                code snippets or other practical examples to illustrate the concepts discussed in
                your workshop.
              </span>,
              <span key={'item-5'}>
                <b className="text-purple-700">Criteria 5:</b> Your workshop should be
                well-structured, with a clear introduction, body, and conclusion.
              </span>,
              <span key={'item-6'}>
                <b className="text-purple-700">Criteria 6:</b> You should provide clear explanations
                and definitions of any technical terms or jargon.
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

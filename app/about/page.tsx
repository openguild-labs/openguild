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
            maxWidth: 600,
          }}
          className="space-y-2 pb-8 pt-6 md:space-y-5"
        >
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14">
            About Us
          </h1>
          <p>
            OpenGuild is a builder-driven community centered around Polkadot. OpenGuild is built by
            Web3 builders for Web3 builders. Our primary aim is to cater to developers seeking a
            comprehensive understanding. The found story behinds OpenGuild coming from a group of
            Polkadot enthusiasts living in SEA but they did not have much exposure and support to
            the global community of Polkadot, which mainly focuses in European countries. <br />
            <br />
            However, with the huge passion for the innovation and technology, these people
            collaborate and came up with a new initivative called OpenGuild. We represent Polkadot
            in SEA and become a contact point that any founders, investors who are interested in
            Polkadot and reach out to easily.
          </p>
        </div>
      </div>
    </>
  )
}

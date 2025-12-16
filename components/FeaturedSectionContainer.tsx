export default function FeaturedSectionContainer() {
  return (
    <div className="bg-white py-6 dark:bg-gray-900 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <div className="flex items-center gap-12">
            <h1
              className="text-2xl font-bold uppercase leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14"
              style={{ fontFamily: 'var(--font-vcr)' }}
            >
              Community Activities
            </h1>
          </div>
          <a
            href="https://handbook.openguild.wtf"
            className="inline-block bg-white px-4 py-2 text-center text-sm font-bold uppercase tracking-wider text-gray-900 transition-all hover:translate-x-0.5 hover:translate-y-0.5 dark:bg-gray-800 dark:text-white md:px-8 md:py-3 md:text-base"
            style={{
              fontFamily: 'var(--font-vcr)',
              border: '2px solid #1a1a1a',
              boxShadow: '4px 4px 0px #1a1a1a',
            }}
          >
            Discover more in our handbook 📚
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:gap-6 xl:gap-8">
          <a
            href="https://handbook.openguild.wtf/general-information/membership"
            className="group relative flex h-48 items-end overflow-hidden bg-gray-100 transition-all hover:translate-x-1 hover:translate-y-1 md:h-80"
            style={{
              border: '3px solid #1a1a1a',
              boxShadow: '6px 6px 0px #1a1a1a',
            }}
          >
            <img
              src="/static/images/polkadot/jumbotron/OG_ranking_system.png"
              loading="lazy"
              alt="Membership"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div
              className="relative mb-3 ml-4 inline-block bg-white px-4 py-2 text-sm md:ml-5 md:text-lg"
              style={{
                border: '2px solid #1a1a1a',
                boxShadow: '3px 3px 0px #1a1a1a',
              }}
            >
              <span className="font-bold" style={{ fontFamily: 'var(--font-vcr)' }}>
                💪 Membership
              </span>
            </div>
          </a>
          <a
            href="/bounty"
            className="group relative flex h-48 items-end overflow-hidden bg-gray-100 transition-all hover:translate-x-1 hover:translate-y-1 md:col-span-2 md:h-80"
            style={{
              border: '3px solid #1a1a1a',
              boxShadow: '6px 6px 0px #1a1a1a',
            }}
          >
            <img
              src="/static/images/polkadot/jumbotron/OG_bounty.png"
              loading="lazy"
              alt="Open-source Development"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <div
              className="relative mb-3 ml-4 inline-block bg-white px-4 py-2 text-sm md:ml-5 md:text-lg"
              style={{
                border: '2px solid #1a1a1a',
                boxShadow: '3px 3px 0px #1a1a1a',
              }}
            >
              <span className="font-bold" style={{ fontFamily: 'var(--font-vcr)' }}>
                💰 Reward, Bounty & Merchandise
              </span>
            </div>
          </a>
          <a
            href="/events"
            className="group relative flex h-48 items-end overflow-hidden bg-gray-100 transition-all hover:translate-x-1 hover:translate-y-1 md:col-span-2 md:h-80"
            style={{
              border: '3px solid #1a1a1a',
              boxShadow: '6px 6px 0px #1a1a1a',
            }}
          >
            <img
              src="/static/images/polkadot/jumbotron/OG_event.jpeg"
              alt="Community Events"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <div
              className="relative mb-3 ml-4 inline-block bg-white px-4 py-2 text-sm md:ml-5 md:text-lg"
              style={{
                border: '2px solid #1a1a1a',
                boxShadow: '3px 3px 0px #1a1a1a',
              }}
            >
              <span className="font-bold" style={{ fontFamily: 'var(--font-vcr)' }}>
                🦄 Community Events
              </span>
            </div>
          </a>
          <a
            href="https://discord.com/invite/MwHrrPe4m9"
            className="group relative flex h-48 items-end overflow-hidden bg-gray-100 transition-all hover:translate-x-1 hover:translate-y-1 md:h-80"
            style={{
              border: '3px solid #1a1a1a',
              boxShadow: '6px 6px 0px #1a1a1a',
            }}
          >
            <img
              src="/static/images/polkadot/jumbotron/OG_networking.jpeg"
              loading="lazy"
              alt="Networking"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <div
              className="relative mb-3 ml-4 inline-block bg-white px-4 py-2 text-sm md:ml-5 md:text-lg"
              style={{
                border: '2px solid #1a1a1a',
                boxShadow: '3px 3px 0px #1a1a1a',
              }}
            >
              <span className="font-bold" style={{ fontFamily: 'var(--font-vcr)' }}>
                🤝 Networking
              </span>
            </div>
          </a>
          <a
            href="https://handbook.openguild.wtf/hackathon-projects-and-events/hackathon/hackathon-general-information"
            className="group relative flex h-48 items-end overflow-hidden bg-gray-100 transition-all hover:translate-x-1 hover:translate-y-1 md:h-80"
            style={{
              border: '3px solid #1a1a1a',
              boxShadow: '6px 6px 0px #1a1a1a',
            }}
          >
            <img
              src="/static/images/polkadot/jumbotron/hackathon.png"
              loading="lazy"
              alt="Hackathon"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div
              className="relative mb-3 ml-4 inline-block bg-white px-4 py-2 text-sm md:ml-5 md:text-lg"
              style={{
                border: '2px solid #1a1a1a',
                boxShadow: '3px 3px 0px #1a1a1a',
              }}
            >
              <span className="font-bold" style={{ fontFamily: 'var(--font-vcr)' }}>
                🏁 Hackathons
              </span>
            </div>
          </a>
          <a
            href="https://github.com/openguild-labs"
            className="group relative flex h-48 items-end overflow-hidden bg-gray-100 transition-all hover:translate-x-1 hover:translate-y-1 md:col-span-2 md:h-80"
            style={{
              border: '3px solid #1a1a1a',
              boxShadow: '6px 6px 0px #1a1a1a',
            }}
          >
            <img
              src="/static/images/polkadot/jumbotron/OG_tech.jpeg"
              loading="lazy"
              alt="Open-source Development"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <div
              className="relative mb-3 ml-4 inline-block bg-white px-4 py-2 text-sm md:ml-5 md:text-lg"
              style={{
                border: '2px solid #1a1a1a',
                boxShadow: '3px 3px 0px #1a1a1a',
              }}
            >
              <span className="font-bold" style={{ fontFamily: 'var(--font-vcr)' }}>
                👨‍💻 Open-source Development
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default function FeaturedSectionContainer() {
  return (
    <div className="bg-white py-6 dark:bg-gray-800 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
          <div className="flex items-center gap-12">
            <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
              Community Activity
            </h1>
          </div>
          <a
            href="https://handbook.openguild.wtf"
            className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 dark:border-none dark:bg-gray-700 dark:text-gray-200 md:px-8 md:py-3 md:text-base"
          >
            Discover more in our handbook 📚
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          <a
            href="https://handbook.openguild.wtf/hackathon-projects-and-events/hackathon/hackathon-general-information"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src="/static/images/polkadot/jumbotron/OG_ranking_system.png"
              loading="lazy"
              alt="Hackathon"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div
              style={{ borderRadius: 10 }}
              className="relative mb-3 ml-4 inline-block bg-white p-2 px-4 text-sm md:ml-5 md:text-lg"
            >
              <span className="font-bold">💪 Membership</span>
            </div>
          </a>
          <a
            href="https://github.com/openguild-labs"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src="/static/images/polkadot/jumbotron/OG_bounty.png"
              loading="lazy"
              alt="Open-source Development"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <div
              style={{ borderRadius: 10 }}
              className="relative mb-3 ml-4 inline-block bg-white p-2 px-4 text-sm md:ml-5 md:text-lg"
            >
              <span className="font-bold">💰 Reward, Bounty & Merchandise</span>
            </div>
          </a>
          <a
            href="https://handbook.openguild.wtf/general-information/channels-by-regions"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src="/static/images/polkadot/jumbotron/OG_event.jpeg"
              alt="Community Events"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <div
              style={{ borderRadius: 10 }}
              className="relative mb-3 ml-4 inline-block bg-white p-2 px-4 text-sm md:ml-5 md:text-lg"
            >
              <span className="font-bold">🦄 Community Events</span>
            </div>
          </a>
          <a
            href="https://discord.com/invite/MwHrrPe4m9"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src="/static/images/polkadot/jumbotron/OG_networking.jpeg"
              loading="lazy"
              alt="Networking"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <div
              style={{ borderRadius: 10 }}
              className="relative mb-3 ml-4 inline-block bg-white p-2 px-4 text-sm md:ml-5 md:text-lg"
            >
              <span className="font-bold">🤝 Networking</span>
            </div>
          </a>
          <a
            href="https://handbook.openguild.wtf/hackathon-projects-and-events/hackathon/hackathon-general-information"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
          >
            <img
              src="/static/images/polkadot/jumbotron/hackathon.png"
              loading="lazy"
              alt="Hackathon"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />
            <div
              style={{ borderRadius: 10 }}
              className="relative mb-3 ml-4 inline-block bg-white p-2 px-4 text-sm md:ml-5 md:text-lg"
            >
              <span className="font-bold">🏁 Hackathons</span>
            </div>
          </a>
          <a
            href="https://github.com/openguild-labs"
            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
          >
            <img
              src="/static/images/polkadot/jumbotron/OG_tech.jpeg"
              loading="lazy"
              alt="Open-source Development"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <div
              style={{ borderRadius: 10 }}
              className="relative mb-3 ml-4 inline-block bg-white p-2 px-4 text-sm md:ml-5 md:text-lg"
            >
              <span className="font-bold">👨‍💻 Open-source Development</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

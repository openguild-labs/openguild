import React from 'react'

const OpenContributionBountyTracks = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-4 md:gap-6 xl:gap-8">
        <a
          href="/bounty/substrate-course-track"
          className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
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
            <span className="font-bold">Substrate Courses</span>
          </div>
        </a>
        <a
          href="/bounty/ecosystem-track"
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
            <span className="font-bold">Ecosystem Open-source Documentation</span>
          </div>
        </a>
        <a
          href="/bounty/technical-blog-track"
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
            <span className="font-bold">Technical Blogs</span>
          </div>
        </a>
        <a
          href="/bounty/activity-project-track"
          className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
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
            <span className="font-bold">Technical Activity Projects</span>
          </div>
        </a>
      </div>
    </div>
  )
}

export default OpenContributionBountyTracks

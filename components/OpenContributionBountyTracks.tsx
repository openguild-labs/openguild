import React from 'react'

const OpenContributionBountyTracks = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-4 md:gap-6 xl:gap-8">
        <a
          href="/bounty/substrate-course-track"
          style={{ width: '100%', aspectRatio: '1/1' }}
          className="group relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2"
        >
          <img
            src="/static/images/polkadot/jumbotron/OG_Bounty_Track_1_title.png"
            loading="lazy"
            alt="Hackathon"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
        </a>
        <a
          href="/bounty/ecosystem-track"
          className="group relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2"
          style={{ width: '100%', aspectRatio: '1/1' }}
        >
          <img
            src="/static/images/polkadot/jumbotron/OG_Bounty_Track_2_title.png"
            loading="lazy"
            alt="Open-source Development"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
        </a>
        <a
          href="/bounty/technical-blog-track"
          className="group relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2"
          style={{ width: '100%', aspectRatio: '1/1' }}
        >
          <img
            src="/static/images/polkadot/jumbotron/OG_Bounty_Track_3_title.png"
            alt="Community Events"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
        </a>
        <a
          href="/bounty/activity-project-track"
          className="group relative flex items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2"
          style={{ width: '100%', aspectRatio: '1/1' }}
        >
          <img
            src="/static/images/polkadot/jumbotron/OG_Bounty_Track_4_title.png"
            loading="lazy"
            alt="Networking"
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
        </a>

      </div>
    </div>
  )
}

export default OpenContributionBountyTracks

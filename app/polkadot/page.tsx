// import EventImageGallery from '@/components/EventImageGallery'
import Link from '@/components/Link'
import React from 'react'
import FeaturedSectionContainer from '@/components/FeaturedSectionContainer'
import MembersShowcaseList from '@/components/MembersShowcaseList'
import { TwitterPostsShowcase } from '@/components/TwitterPostsShowcase'
import LearnMoreSection from '@/components/LearnMoreSection'
import Timeline from '@/components/Timeline'

export default function PolkadotMainPage() {
  return (
    <React.Fragment>
      <section className="body-font text-black">
        <div className="container mx-auto px-1 pt-20 lg:px-1 lg:py-1">
          <div className="mb-2 flex w-full flex-col text-left md:text-center">
            <img
              className="hidden md:flex"
              src="/static/images/polkadot/Community_Banner.webp"
              style={{
                marginBottom: 50,
                borderRadius: '30px',
                width: '100%',
                height: 400,
                objectFit: 'cover',
              }}
            />
            <img
              className="flex md:hidden"
              src="/static/images/polkadot/jumbotron/OG_new_branding.webp"
              style={{
                marginBottom: 50,
                borderRadius: '15px',
                width: '100%',
                height: 150,
                objectFit: 'contain',
              }}
            />
            <h1 className="mb-2 text-3xl font-bold tracking-tighter md:text-4xl lg:text-4xl">
              An open community driven <br className="hidden lg:block"></br> by{' '}
              <span style={{ color: '#E6007A' }}>Web 3.0</span> elevating builders on
              <span style={{ color: '#E6007A' }}> Polkadot</span>
            </h1>
            <br></br>
            <p className="mx-auto text-xl font-normal leading-relaxed text-gray-600 dark:text-gray-300 lg:w-2/3">
              <span className="font-bold text-primary-500">OpenGuild</span> is a community of Web
              3.0 builders who contribute to open-source projects, learn, and connect enthusiasts
              together with a focus on expanding the Polkadot ecosystem.{' '}
            </p>
          </div>
        </div>
      </section>
      <br />
      <div className="mb-3 flex items-center justify-center">
        <a
          href="https://linktr.ee/OpenGuild"
          style={{ maxWidth: 450 }}
          className="flex w-full items-center rounded-lg border border-gray-900 bg-gray-800 px-6 py-2 text-sm font-medium text-white shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 md:w-fit"
        >
          <span>📚 Discover OpenGuild Community</span>
        </a>
      </div>
      {/* <div className="mt-3 flex items-center justify-center">
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div className="mx-auto my-2 w-full lg:mx-1 lg:w-fit">
            <a
              href="https://github.com/openguild-labs"
              className="flex items-center rounded-lg border border-gray-900 bg-gray-800 px-6 py-2 text-sm font-medium text-white shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
            >
              <img width={20} style={{ marginRight: 15 }} src="/static/images/github-icon.png" />
              <span>Visit OpenGuild Labs</span>
            </a>
          </div>
          <div className="mx-auto my-2 w-full lg:mx-1 lg:w-fit">
            <a
              href="https://www.facebook.com/search/groups/?q=OpenGuild"
              className="flex items-center rounded-lg border border-gray-900 bg-gray-800 px-6 py-2 text-sm font-medium text-white shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
            >
              <svg
                fill="#0e76a8"
                height="15px"
                width="15px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 310 310"
                stroke="#0e76a8"
                style={{ marginRight: 10 }}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <g id="XMLID_801_">
                    {' '}
                    <path
                      id="XMLID_802_"
                      d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73 C77.16,101.969,74.922,99.73,72.16,99.73z"
                    ></path>{' '}
                    <path
                      id="XMLID_803_"
                      d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4 c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
                    ></path>{' '}
                    <path
                      id="XMLID_804_"
                      d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599 c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319 c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995 C310,145.43,300.549,94.761,230.454,94.761z"
                    ></path>{' '}
                  </g>{' '}
                </g>
              </svg>
              <span>OpenGuild Linkedin</span>
            </a>
          </div>
          <div className="mx-auto my-2 w-full lg:mx-1 lg:w-fit">
            <a
              href="https://x.com/openguildwtf/"
              className="flex items-center rounded-lg border border-gray-900 bg-gray-800 px-6 py-2 text-sm font-medium text-white shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
            >
              <img width={20} style={{ marginRight: 15 }} src="/static/images/x-icon.png" />
              <span>Follow us on X</span>
            </a>
          </div>
        </div>
      </div> */}
      <br />
      <h1 className="text-md mb-5 text-center font-bold">
        Connect with +3000 builders in 🇻🇳🇵🇭🇲🇾🇹🇭🇸🇬
      </h1>
      <MembersShowcaseList />
      <br />
      <LearnMoreSection />
      <br />
      <div>
        <div className="space-y-2 pb-8 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14">
            Why should you join us?
          </h1>
        </div>
        <div className="flex-wrap lg:flex lg:justify-evenly">
          {[
            {
              icon: '🫂',
              number: '+3000',
              title: 'Community Members',
              description: 'Total number of members across platforms.',
            },
            {
              icon: '💰',
              number: '+$20K',
              title: 'Total Bounty Pool',
              description: 'Icentives for community members to build and learn to earn.',
            },
            {
              icon: '🎓',
              number: 7,
              title: 'PBA Participants',
              description: 'Community members that finished past Polkadot Blockchain Academy.',
            },
            {
              icon: '🎮',
              number: '+50',
              title: 'Community Calls & Workshops',
              description: 'Online & offline sections for knowledge sharing about Polkadot.',
            },
            {
              icon: '🎉',
              number: '+32K',
              title: 'XP Distributed',
              description: 'Experience point is a unit of activeness in the community.',
            },
            {
              icon: '🧱',
              number: '+30',
              title: 'Projects & courses',
              description: 'Open-source projects and educational materials built by us.',
            },
          ].map((metric) => (
            <div
              key={metric.title}
              style={{
                borderRadius: 20,
              }}
              className="mx-3 my-3 w-full max-w-lg overflow-hidden bg-white px-5 py-4 shadow-lg"
            >
              <h2 className="flex" style={{ alignItems: 'center' }}>
                <div className="mb-6 mr-5 flex h-14 w-14 rotate-3 items-center justify-center rounded bg-white text-4xl shadow-md">
                  {metric.icon}
                </div>
                <span className="mb-2 flex text-3xl font-extrabold text-slate-900">
                  {metric.number}
                </span>
              </h2>
              <span className="mb-2 inline-flex bg-gradient-to-r from-indigo-500 to-indigo-300 bg-clip-text font-semibold text-transparent">
                {metric.title}
              </span>
              <p className="text-sm text-slate-500">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
      <br />
      <div className="mt-5">
        <div className="space-y-2 pb-8 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14">
            Community Features
          </h1>
        </div>
      </div>
      <Timeline />
      <br />
      <FeaturedSectionContainer />
      {/* <EventImageCarousel /> */}
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-center text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14">
            Shaping the Next Generation of the Internet!
          </h1>
          <TwitterPostsShowcase />
        </div>
      </div>
    </React.Fragment>
  )
}

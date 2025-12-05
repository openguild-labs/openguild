// import EventImageGallery from '@/components/EventImageGallery'
import React from 'react'
import FeaturedSectionContainer from '@/components/FeaturedSectionContainer'
import MembersShowcaseList from '@/components/MembersShowcaseList'
import { TwitterPostsMarquee, TwitterPostsShowcase } from '@/components/TwitterPostsShowcase'
import LearnMoreSection from '@/components/LearnMoreSection'
import Timeline from '@/components/Timeline'
import Countup from '@/components/Countup'
import { communityTwitterFeedback, twitterPosts } from 'app/constants'
import ProjectShowcaseSection from '@/components/ProjectShowcaseSection'
import Link from '@/components/Link'

export default function PolkadotMainPage() {
  return (
    <React.Fragment>
      {/* Hero Section - CodeCamp Style */}
      <section className="relative min-h-screen overflow-hidden">
        {/* World Map Background - Right Side */}
        <div
          className="absolute right-0 top-0 h-full w-2/3 opacity-20 dark:opacity-10"
          style={{
            backgroundImage: "url('/static/graphics/World Map.png')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right center',
            backgroundSize: 'contain',
          }}
        />

        <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 lg:py-32">
          {/* Badge with Dotted Logo */}
          <div className="mb-8 flex items-center gap-4">
            <img
              src="/static/graphics/Dotted Logo.png"
              alt="OpenGuild Logo"
              className="h-12 w-12 object-contain"
              style={{
                filter:
                  'brightness(0) saturate(100%) invert(19%) sepia(97%) saturate(5765%) hue-rotate(327deg) brightness(91%) contrast(101%)',
              }}
            />
            <div className="rounded bg-primary-500 px-4 py-2">
              <span
                className="text-xs font-bold uppercase tracking-wider text-white"
                style={{ fontFamily: 'var(--font-vcr)' }}
              >
                Polkadot Ecosystem
              </span>
            </div>
          </div>

          {/* Main Heading - Large Pixel Font Style like CODECAMP 2026 */}
          <h1
            className="mb-4 text-6xl font-bold uppercase leading-none tracking-tight md:text-8xl lg:text-9xl"
            style={{ fontFamily: 'var(--font-vcr)' }}
          >
            OPENGUILD
          </h1>

          {/* Subtitle with blinking cursor */}
          <div className="mb-10">
            <p
              className="flex items-center text-xl font-medium uppercase tracking-wider text-gray-800 dark:text-gray-200 md:text-2xl"
              style={{ fontFamily: 'var(--font-vcr)' }}
            >
              BUILD TOGETHER. GROW TOGETHER
              <span className="ml-1 inline-block h-6 w-1 animate-pulse bg-primary-500"></span>
            </p>
            {/* Progress bar accent */}
            <div className="mt-4 h-1 w-80 bg-gradient-to-r from-primary-500 via-[#6366f1] to-primary-500"></div>
          </div>

          {/* Description */}
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            Learn about Polkadot and build your first project with us. Join our community of Web 3.0
            builders who contribute to open-source projects and expand the Polkadot ecosystem.
          </p>

          {/* Loading Progress Bar */}
          <div className="mb-10 max-w-xl">
            <div className="h-0.5 w-full overflow-hidden rounded bg-gray-200 dark:bg-gray-700">
              <div
                className="h-full bg-gradient-to-r from-primary-500 to-[#6366f1]"
                style={{ width: '100%', animation: 'shimmer 2s infinite' }}
              ></div>
            </div>
          </div>

          {/* CTA Buttons - CodeCamp Style with black shadow */}
          <div className="flex flex-wrap gap-6">
            <Link
              href="/learn"
              className="inline-flex items-center gap-3 bg-[#6366f1] px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              style={{
                fontFamily: 'var(--font-vcr)',
                border: '3px solid #1a1a1a',
                boxShadow: '6px 6px 0px #1a1a1a',
              }}
            >
              Explore
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              href="/bounty"
              className="inline-flex items-center gap-2 bg-primary-500 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              style={{
                fontFamily: 'var(--font-vcr)',
                border: '3px solid #1a1a1a',
                boxShadow: '6px 6px 0px #1a1a1a',
              }}
            >
              View Challenges
            </Link>
          </div>

          {/* Partners/Sponsors Line */}
          <div className="mt-16 text-sm text-gray-500 dark:text-gray-400">
            Core contributor to{' '}
            <Link href="https://x.com/PolkadotAPAC" className="font-bold hover:text-primary-500">
              Polkadot APAC
            </Link>
          </div>
        </div>

        {/* Decorative Polkadot icon bottom right */}
        <div className="absolute bottom-8 right-8 opacity-20">
          <img
            src="/static/graphics/Dotted Logo.png"
            alt=""
            className="h-16 w-16"
            style={{ filter: 'grayscale(100%)' }}
          />
        </div>
      </section>

      {/* Community Stats Banner */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4">
          <div
            className="bg-white px-8 py-6 text-center dark:bg-gray-800"
            style={{
              border: '3px solid #1a1a1a',
              boxShadow: '6px 6px 0px #1a1a1a',
            }}
          >
            <p
              className="text-lg font-medium text-gray-900 dark:text-white"
              style={{ fontFamily: 'var(--font-vcr)' }}
            >
              Connect with{' '}
              <span className="text-primary-500">
                +<Countup end={3500} duration={5} />
              </span>{' '}
              builders in 🇻🇳🇵🇭🇲🇾🇹🇭🇸🇬
            </p>
          </div>
        </div>
      </section>

      {/* Members Showcase */}
      <section className="py-8">
        <MembersShowcaseList />
      </section>
      {/* Learn More Section */}
      <section className="border-t border-gray-200 py-12 dark:border-gray-800">
        <LearnMoreSection />
      </section>

      {/* Project Showcase */}
      <section className="border-t border-gray-200 bg-gray-50 py-12 dark:border-gray-800 dark:bg-gray-900/50">
        <ProjectShowcaseSection />
      </section>

      {/* Stats Section */}
      <section className="border-t border-gray-200 py-16 dark:border-gray-800">
        <div className="mx-auto max-w-6xl px-4">
          <h2
            className="mb-10 text-center text-2xl font-bold uppercase tracking-tight text-gray-900 dark:text-white md:text-3xl"
            style={{ fontFamily: 'var(--font-vcr)' }}
          >
            Why Join Us?
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: '🫂',
                number: '+3,500',
                title: 'Community Members',
                description: 'Total number of members across platforms.',
              },
              {
                icon: '💰',
                number: '+$20,000',
                title: 'Total Bounty Pool',
                description: 'Incentives for community members to build and learn.',
              },
              {
                icon: '🎓',
                number: '20',
                title: 'PBA Participants',
                description: 'Members that finished Polkadot Blockchain Academy.',
              },
              {
                icon: '🎮',
                number: '+70',
                title: 'Workshops',
                description: 'Online & offline sessions for knowledge sharing.',
              },
              {
                icon: '🎉',
                number: '+50,000 XP',
                title: 'XP Distributed',
                description: 'Experience points for active community participation.',
              },
              {
                icon: '🧱',
                number: '+50',
                title: 'Projects',
                description: 'Open-source projects and educational materials.',
              },
            ].map((metric) => (
              <div
                key={metric.title}
                className="group bg-white p-6 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none dark:bg-gray-800"
                style={{
                  border: '3px solid #1a1a1a',
                  boxShadow: '6px 6px 0px #1a1a1a',
                }}
              >
                <div className="mb-4 flex items-center gap-4">
                  <div
                    className="flex h-14 w-14 items-center justify-center bg-primary-100 dark:bg-primary-900/30"
                    style={{ border: '2px solid #1a1a1a' }}
                  >
                    <span className="text-2xl">{metric.icon}</span>
                  </div>
                  <div>
                    <span
                      className="text-2xl font-bold text-primary-500"
                      style={{ fontFamily: 'var(--font-vcr)' }}
                    >
                      {metric.number}
                    </span>
                  </div>
                </div>
                <h3
                  className="mb-2 font-bold uppercase text-gray-900 dark:text-white"
                  style={{ fontFamily: 'var(--font-vcr)' }}
                >
                  {metric.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="border-t border-gray-200 bg-gray-50 py-16 dark:border-gray-800 dark:bg-gray-900/50">
        <div className="mx-auto max-w-6xl px-4">
          <h2
            className="mb-10 text-center text-2xl font-bold uppercase tracking-tight text-gray-900 dark:text-white md:text-3xl"
            style={{ fontFamily: 'var(--font-vcr)' }}
          >
            Community Feedback
          </h2>
          <TwitterPostsMarquee tweetIds={communityTwitterFeedback} />
        </div>
      </section>

      {/* Timeline Section */}
      <section className="border-t border-gray-200 py-16 dark:border-gray-800">
        <div className="mx-auto max-w-6xl px-4">
          <h2
            className="mb-10 text-2xl font-bold uppercase tracking-tight text-gray-900 dark:text-white md:text-3xl"
            style={{ fontFamily: 'var(--font-vcr)' }}
          >
            Community Features
          </h2>
          <Timeline />
        </div>
      </section>

      {/* Featured Section */}
      <section className="border-t border-gray-200 bg-gray-50 py-12 dark:border-gray-800 dark:bg-gray-900/50">
        <FeaturedSectionContainer />
      </section>

      {/* Twitter Showcase */}
      <section className="border-t border-gray-200 py-16 dark:border-gray-800">
        <div className="mx-auto max-w-6xl px-4">
          <h2
            className="mb-10 text-center text-2xl font-bold uppercase tracking-tight text-gray-900 dark:text-white md:text-3xl"
            style={{ fontFamily: 'var(--font-vcr)' }}
          >
            Building the Future of Web3
          </h2>
          <TwitterPostsShowcase seeMoreEnabled={true} tweetIds={twitterPosts} />
        </div>
      </section>
    </React.Fragment>
  )
}

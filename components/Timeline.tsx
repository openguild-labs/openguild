/* eslint-disable react/jsx-key */
import Link from 'next/link'
import React from 'react'

const SectionContainer = ({
  children,
  style,
}: {
  children: React.ReactNode
  style?: React.CSSProperties
}) => {
  return (
    <div
      style={{
        ...style,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: '0px 25px',
      }}
    >
      <div style={{ maxWidth: '1300px' }}>{children}</div>
    </div>
  )
}

export default function Timeline() {
  const TimelineItems = [
    {
      url: '/static/images/community-platform.png',
      title: 'Community Platform',
      buttonTitle: 'Visit OpenGuild App',
      href: 'https://app.openguild.wtf/',
      header: '🔥 Finding missions and challenge yourself!',
      description:
        'Explore missions on OpenGuild Community Platform, finish tasks and claim rewards.',
    },
    {
      url: '/static/images/polkadot/bootcamp/bootcamp-banner.png',
      title: '📚 Open-source Education',
      buttonTitle: 'Register bootcamp',
      href: '/learn/bootcamp',
      header: 'Open Polkadot Bootcamp',
      description:
        'Open Polkadot Bootcamp, created by OpenGuild Labs, is designed to educate learners on all aspects of the Polkadot protocol and development within the Polkadot ecosystem.',
    },
  ]

  return (
    <section>
      <SectionContainer>
        <div className="container mx-auto h-full w-full bg-white dark:bg-gray-900">
          <div className="wrap relative h-full">
            {/* <!-- Large device screen --> */}
            {TimelineItems.map((item, index) => (
              <React.Fragment key={item.title}>
                <div
                  style={{ marginBottom: index !== TimelineItems.length - 1 ? 80 : 0 }}
                  className={`hidden md:flex ${
                    index % 2 === 1 ? 'flex-row-reverse' : 'flex-row'
                  } w-full items-center justify-between`}
                >
                  <div className="order-1 w-5/12 md:text-7xl xl:text-8xl">
                    <h2
                      className="mb-2 text-sm font-bold uppercase tracking-wider text-primary-500"
                      style={{ fontFamily: 'var(--font-vcr)' }}
                    >
                      {item.title}
                    </h2>
                    <p
                      className="mb-3 text-2xl font-bold text-gray-900 dark:text-white"
                      style={{ fontFamily: 'var(--font-vcr)' }}
                    >
                      {item.header}
                    </p>
                    <p className="mb-6 text-base text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                    <Link
                      href={item.href}
                      className="inline-block bg-[#6366f1] px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:translate-x-0.5 hover:translate-y-0.5"
                      style={{
                        fontFamily: 'var(--font-vcr)',
                        border: '2px solid #1a1a1a',
                        boxShadow: '4px 4px 0px #1a1a1a',
                      }}
                    >
                      {item.buttonTitle}
                    </Link>
                  </div>
                  <div data-aos={index % 2 ? 'fade-left' : 'fade-right'} className="order-1 w-6/12">
                    <div
                      className="overflow-hidden transition-all hover:translate-x-1 hover:translate-y-1"
                      style={{
                        border: '3px solid #1a1a1a',
                        boxShadow: '6px 6px 0px #1a1a1a',
                      }}
                    >
                      <img
                        className="h-full w-full object-cover"
                        src={`${item.url}`}
                        alt="function screen"
                        width={1000}
                        height={1000}
                      />
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
            {/* <!-- Small device screen --> */}
            {TimelineItems.map((item) => (
              <React.Fragment key={`mobile-${item.title}`}>
                <div className={`mb-8 w-full items-center justify-between md:hidden`}>
                  <div className="order-1 w-full md:text-7xl xl:text-8xl">
                    <h2
                      className="mb-2 text-sm font-bold uppercase tracking-wider text-primary-500"
                      style={{ fontFamily: 'var(--font-vcr)' }}
                    >
                      {item.title}
                    </h2>
                    <p
                      className="mb-3 text-2xl font-bold text-gray-900 dark:text-white"
                      style={{ fontFamily: 'var(--font-vcr)' }}
                    >
                      {item.header}
                    </p>
                    <p className="mb-6 text-base text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                    <Link
                      href={item.href}
                      className="inline-block bg-[#6366f1] px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:translate-x-0.5 hover:translate-y-0.5"
                      style={{
                        fontFamily: 'var(--font-vcr)',
                        border: '2px solid #1a1a1a',
                        boxShadow: '4px 4px 0px #1a1a1a',
                      }}
                    >
                      {item.buttonTitle}
                    </Link>
                  </div>
                  <div className="order-1 mt-10 w-full md:mt-0">
                    <div
                      className="overflow-hidden"
                      style={{
                        border: '3px solid #1a1a1a',
                        boxShadow: '6px 6px 0px #1a1a1a',
                      }}
                    >
                      <img
                        className="h-full w-full object-cover"
                        src={`${item.url}`}
                        alt="function screen"
                        width={1200}
                        height={1000}
                      />
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}

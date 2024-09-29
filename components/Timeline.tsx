/* eslint-disable react/jsx-key */
import Image from 'next/image'
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
      url: '/static/images/polkadot-hackcamp.png',
      title: 'Community Platform',
      buttonTitle: 'Register course & hackathon',
      href: 'https://polkadot.openedu101.com/',
      header: 'Polkadot Hackcamp 2024 🇻🇳',
      description:
        'Learn blockchain development from experts in the Polkadot Hackcamp Vietnam 2024 and prepare for upcoming hackathons.',
    },
  ]

  return (
    <section>
      <SectionContainer>
        <div className="container mx-auto h-full w-full bg-white">
          <div className="wrap relative h-full overflow-hidden">
            {/* <!-- Large device screen --> */}
            {TimelineItems.map((item, index) => (
              <React.Fragment>
                <div
                  key={item.title}
                  style={{ marginBottom: index !== TimelineItems.length - 1 ? 80 : 0 }}
                  className={`flex hidden md:flex ${
                    index % 2 === 1 ? 'flex-row-reverse' : 'flex-row'
                  } w-full items-center justify-between`}
                >
                  <div className="order-1 w-5/12 md:text-7xl xl:text-8xl">
                    <h2 className="mb-2 text-base font-bold text-purple-700">{item.title}</h2>
                    <p className="mb-3 text-2xl font-medium text-black">{item.header}</p>
                    <p className="text-base text-gray-500">{item.description}</p>
                    <Link
                      href={item.href}
                      className="mx-auto w-fit rounded-lg bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-purple-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-purple-300 dark:shadow-lg dark:shadow-purple-800/80 dark:focus:ring-purple-800"
                    >
                      {item.buttonTitle}
                    </Link>
                  </div>
                  {/* <div className="z-20 flex items-center order-1 bg-primary-400 shadow-xl w-8 h-8 rounded-full"></div> */}
                  <div data-aos={index % 2 ? 'fade-left' : 'fade-right'} className="order-1 w-6/12">
                    <img
                      style={{ borderRadius: 20, objectFit: 'cover' }}
                      className="shadow-lg"
                      src={`${item.url}`}
                      alt="function screen"
                      width={1000}
                      height={1000}
                    />
                  </div>
                </div>
              </React.Fragment>
            ))}
            {/* <!-- Smal device screen --> */}
            {TimelineItems.map((item) => (
              <React.Fragment>
                <div
                  key={item.title}
                  className={`mb-8 w-full items-center justify-between md:hidden`}
                >
                  <div className="order-1 w-full md:text-7xl xl:text-8xl">
                    <h2 className="mb-2 text-base font-semibold text-primary-400">{item.title}</h2>
                    <p className="mb-3 text-2xl font-medium text-black">{item.header}</p>
                    <p className="text-base text-gray-500">{item.description}</p>
                    <br />
                    <Link
                      href={item.href}
                      className="mx-auto my-5 rounded-lg bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-purple-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-purple-300 dark:shadow-lg dark:shadow-purple-800/80 dark:focus:ring-purple-800"
                    >
                      {item.buttonTitle}
                    </Link>
                  </div>
                  <div className="order-1 mt-10 w-full px-3 py-2 shadow-lg md:mt-0">
                    <img
                      style={{ borderRadius: 20, objectFit: 'cover' }}
                      className="shadow-lg"
                      src={`${item.url}`}
                      alt="function screen"
                      width={1200}
                      height={1000}
                    />
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

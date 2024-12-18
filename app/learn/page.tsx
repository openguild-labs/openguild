import { ModuleListSection } from '@/components/ModuleListContainer'
import { researchArticles } from 'app/constants'
import Link from 'next/link'
import React from 'react'

const Section = (props: {
  title: string
  buttonPlaceholder: string
  description: string
  logo: string
  link: string
}) => {
  return (
    <div
      style={{ width: '100%', borderRadius: 15, paddingBottom: 20 }}
      className="mx-2 my-5 overflow-hidden bg-white shadow-lg"
    >
      <div className="px-4 py-1">
        <div className="mb-2 flex flex-wrap items-center justify-between">
          <div className="flex items-center">
            <img
              height={50}
              width={50}
              alt="polkadot learn"
              style={{ marginRight: 20 }}
              src={props.logo}
            />
            <h1 className="flex-wrap text-2xl font-extrabold leading-9 tracking-tight text-gray-900 sm:leading-10 md:leading-14">
              {props.title}
            </h1>
          </div>
          <div style={{ margin: '20px 0px 20px 0px' }}>
            <Link
              href={props.link}
              className="mt-5 max-w-lg rounded bg-primary-600 px-5 py-2 text-white"
            >
              {props.buttonPlaceholder}
            </Link>
          </div>
        </div>
        <p className="text-md text-base text-gray-500">{props.description}</p>
      </div>
    </div>
  )
}

const SectionWithBanner = (props: {
  title: string
  buttonPlaceholder: string
  description: string
  logo: string
  link: string
}) => {
  return (
    <div
      style={{ width: '100%', borderRadius: 15, paddingBottom: 20 }}
      className="mx-2 my-5 overflow-hidden bg-white shadow-lg"
    >
      <div className="px-4 py-1">
        <img width={'100%'} alt="polkadot learn" style={{ borderRadius: 10 }} src={props.logo} />
        <div className="mb-2 flex flex-wrap items-center justify-between">
          <div className="flex items-center">
            <h1 className="mt-3 flex-wrap text-2xl font-extrabold leading-9 tracking-tight text-gray-900 sm:leading-10 md:leading-14">
              {props.title}
            </h1>
          </div>
          <div style={{ margin: '20px 0px 20px 0px' }}>
            <Link
              href={props.link}
              className="mt-5 max-w-lg rounded bg-primary-600 px-5 py-2 text-white"
            >
              {props.buttonPlaceholder}
            </Link>
          </div>
        </div>
        <p className="text-md text-base text-gray-500">{props.description}</p>
      </div>
    </div>
  )
}

export default function LearnPage() {
  return (
    <div>
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="mb-2 text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14">
          Learn Polkadot Development
        </h1>
        <div className="flex gap-4 sm:flex-wrap lg:flex-nowrap">
          <div style={{ maxWidth: 400 }}>
            <SectionWithBanner
              title="Open Polkadot Bootcamp"
              buttonPlaceholder="Learn now"
              description="Open Polkadot Bootcamp, created by OpenGuild Labs, is designed to educate learners on all aspects of the Polkadot protocol and development within the Polkadot ecosystem."
              logo="/static/images/polkadot/bootcamp/bootcamp-banner.png"
              link="/learn/bootcamp"
            />
          </div>
          <div
            style={{ width: '100%', flexDirection: 'column' }}
            className="flex items-center justify-center"
          >
            <Section
              title="Learn Rust"
              buttonPlaceholder="Learn now"
              description="Educational resources aggregated by the OpenGuild Community. Discover to expand your knowledge about blockchain and Polkadot."
              logo="/static/images/polkadot/jumbotron/Rust_PIXEL.png"
              link="/learn/rust"
            />
            <Section
              title="Learn Polkadot SDK"
              buttonPlaceholder="Learn now"
              description="Educational resources aggregated by the OpenGuild Community. Discover to expand your
            knowledge about blockchain and Polkadot."
              logo="/static/images/polkadot/polkadot-token-logo.png"
              link="/learn/polkadot-sdk"
            />
            <Section
              title="Learn ink!"
              buttonPlaceholder="Learn now"
              description="Educational resources aggregated by the OpenGuild Community. Discover to expand your
            knowledge about blockchain and Polkadot."
              logo="/static/images/polkadot/jumbotron/ink_LOGO.png"
              link="/learn/ink"
            />
          </div>
        </div>
        <Section
          title="Ecosystem Educational Database"
          buttonPlaceholder="Discover the database"
          description="Educational resources aggregated by the OpenGuild Community. Discover to expand your
            knowledge about blockchain and Polkadot."
          logo="/static/images/polkadot/jumbotron/Polkadot_LEARN.png"
          link="/learn/database"
        />
      </div>
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14">
          Technical Articles
        </h1>
        <ModuleListSection
          marquee={false}
          modules={researchArticles}
          cardStyle={{ maxWidth: 350 }}
        />
      </div>
    </div>
  )
}

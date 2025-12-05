import { ModuleListSection } from '@/components/ModuleListContainer'
import { researchArticles } from 'app/constants'
import Link from 'next/link'
import React from 'react'

const CourseCard = (props: {
  title: string
  buttonPlaceholder: string
  description: string
  logo: string
  link: string
  difficulty?: 'beginner' | 'intermediate' | 'advanced'
}) => {
  const difficultyColors = {
    beginner: 'bg-green-500',
    intermediate: 'bg-yellow-500',
    advanced: 'bg-red-500',
  }

  return (
    <div
      className="group bg-white transition-all hover:translate-x-1 hover:translate-y-1 dark:bg-gray-800"
      style={{
        border: '3px solid #1a1a1a',
        boxShadow: '6px 6px 0px #1a1a1a',
      }}
    >
      <div className="p-6">
        {/* Header Row */}
        <div className="mb-4 flex items-start justify-between">
          <div
            className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden bg-gray-100 dark:bg-gray-700"
            style={{ border: '2px solid #1a1a1a' }}
          >
            <img height={48} width={48} alt={props.title} src={props.logo} className="object-contain" />
          </div>
          {props.difficulty && (
            <span
              className={`${difficultyColors[props.difficulty]} px-3 py-1 text-xs font-bold uppercase tracking-wider text-white`}
              style={{ fontFamily: 'var(--font-vcr)' }}
            >
              {props.difficulty}
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          className="mb-3 text-lg font-bold uppercase leading-tight text-gray-900 dark:text-white"
          style={{ fontFamily: 'var(--font-vcr)' }}
        >
          {props.title}
        </h3>

        {/* Description */}
        <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          {props.description}
        </p>

        {/* Dotted Separator */}
        <div className="mb-4 border-b border-dashed border-gray-300 dark:border-gray-600"></div>

        {/* Button */}
        <Link
          href={props.link}
          className="flex w-full items-center justify-center gap-2 bg-primary-500 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-primary-600"
          style={{
            fontFamily: 'var(--font-vcr)',
            border: '2px solid #1a1a1a',
          }}
        >
          {props.buttonPlaceholder}
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

const FeaturedCourseCard = (props: {
  title: string
  buttonPlaceholder: string
  description: string
  banner: string
  link: string
  badge?: string
}) => {
  return (
    <div
      className="group bg-white transition-all hover:translate-x-1 hover:translate-y-1 dark:bg-gray-800"
      style={{
        border: '3px solid #1a1a1a',
        boxShadow: '6px 6px 0px #1a1a1a',
      }}
    >
      {/* Banner Image */}
      <div className="relative overflow-hidden" style={{ borderBottom: '3px solid #1a1a1a' }}>
        <img
          className="h-48 w-full object-cover transition-transform group-hover:scale-105"
          alt={props.title}
          src={props.banner}
        />
        {props.badge && (
          <div
            className="absolute left-4 top-4 bg-primary-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white"
            style={{
              fontFamily: 'var(--font-vcr)',
              border: '2px solid #1a1a1a',
            }}
          >
            {props.badge}
          </div>
        )}
      </div>

      <div className="p-6">
        {/* Title */}
        <h3
          className="mb-3 text-xl font-bold uppercase leading-tight text-gray-900 dark:text-white"
          style={{ fontFamily: 'var(--font-vcr)' }}
        >
          {props.title}
        </h3>

        {/* Description */}
        <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          {props.description}
        </p>

        {/* Button */}
        <Link
          href={props.link}
          className="flex w-full items-center justify-center gap-2 bg-[#6366f1] py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-[#5558e3]"
          style={{
            fontFamily: 'var(--font-vcr)',
            border: '2px solid #1a1a1a',
          }}
        >
          {props.buttonPlaceholder}
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default function LearnPage() {
  return (
    <div className="py-8">
      {/* Hero Section */}
      <div className="mb-12">
        <h1
          className="mb-4 text-3xl font-bold uppercase tracking-tight text-gray-900 dark:text-white md:text-4xl"
          style={{ fontFamily: 'var(--font-vcr)' }}
        >
          Learn Polkadot Development
        </h1>
        <p className="max-w-2xl text-gray-600 dark:text-gray-400">
          Master blockchain development with our comprehensive courses. From Rust fundamentals to
          building production-ready parachains on Polkadot.
        </p>
      </div>

      {/* Featured Course */}
      <div className="mb-12">
        <h2
          className="mb-6 text-xl font-bold uppercase tracking-tight text-gray-900 dark:text-white"
          style={{ fontFamily: 'var(--font-vcr)' }}
        >
          🔥 Featured Course
        </h2>
        <div className="max-w-md">
          <FeaturedCourseCard
            title="Open Polkadot Bootcamp"
            buttonPlaceholder="Start Learning"
            description="A comprehensive bootcamp designed to educate learners on all aspects of the Polkadot protocol and development within the Polkadot ecosystem."
            banner="/static/images/polkadot/bootcamp/bootcamp-banner.png"
            link="/learn/bootcamp"
            badge="New"
          />
        </div>
      </div>

      {/* Core Courses Grid */}
      <div className="mb-12">
        <h2
          className="mb-6 text-xl font-bold uppercase tracking-tight text-gray-900 dark:text-white"
          style={{ fontFamily: 'var(--font-vcr)' }}
        >
          📚 Core Courses
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <CourseCard
            title="Learn Rust"
            buttonPlaceholder="Start Course"
            description="Master the Rust programming language - the foundation for building on Polkadot. Learn memory safety, ownership, and systems programming."
            logo="/static/images/polkadot/jumbotron/Rust_PIXEL.png"
            link="/learn/rust"
            difficulty="beginner"
          />
          <CourseCard
            title="Learn Polkadot SDK"
            buttonPlaceholder="Start Course"
            description="Build custom blockchains using the Polkadot SDK. Learn FRAME pallets, runtime development, and parachain architecture."
            logo="/static/images/polkadot/polkadot-token-logo.png"
            link="/learn/polkadot-sdk"
            difficulty="intermediate"
          />
          <CourseCard
            title="Learn ink!"
            buttonPlaceholder="Start Course"
            description="Write smart contracts in Rust using ink!. Deploy on Polkadot parachains and build decentralized applications."
            logo="/static/images/polkadot/jumbotron/ink_LOGO.png"
            link="/learn/ink"
            difficulty="intermediate"
          />
        </div>
      </div>

      {/* Resources Section */}
      <div className="mb-12">
        <h2
          className="mb-6 text-xl font-bold uppercase tracking-tight text-gray-900 dark:text-white"
          style={{ fontFamily: 'var(--font-vcr)' }}
        >
          🗂️ Resources
        </h2>
        <div className="max-w-md">
          <CourseCard
            title="Ecosystem Database"
            buttonPlaceholder="Explore Database"
            description="A curated collection of educational resources, documentation, and tools aggregated by the OpenGuild community."
            logo="/static/images/polkadot/jumbotron/Polkadot_LEARN.png"
            link="/learn/database"
          />
        </div>
      </div>

      {/* Technical Articles */}
      <div className="mb-12">
        <h2
          className="mb-6 text-xl font-bold uppercase tracking-tight text-gray-900 dark:text-white"
          style={{ fontFamily: 'var(--font-vcr)' }}
        >
          📝 Technical Articles
        </h2>
        <ModuleListSection marquee={false} modules={researchArticles} cardStyle={{ maxWidth: 350 }} />
      </div>
    </div>
  )
}

import Link from 'next/link'
import React from 'react'
import Marquee from 'react-fast-marquee'

export const ModuleListSection = ({
  modules,
  marquee,
  cardStyle,
}: {
  modules: {
    title: string
    description: string
    url: string
    img: string
    released: boolean
  }[]
  marquee: boolean
  cardStyle?: React.CSSProperties
}) => {
  const content = modules.map((topic) => (
    <div
      key={topic.title}
      className="mx-2 my-4 w-80 shrink-0 bg-white transition-all hover:translate-x-1 hover:translate-y-1 dark:bg-gray-800"
      style={{
        border: '3px solid #1a1a1a',
        boxShadow: '6px 6px 0px #1a1a1a',
        ...cardStyle,
      }}
    >
      {/* Image */}
      <div
        className="h-44 w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${topic.img})`,
          borderBottom: '3px solid #1a1a1a',
        }}
      />

      <div className="p-5">
        {/* Title */}
        <h3
          className="mb-3 text-base font-bold uppercase leading-tight text-gray-900 dark:text-white"
          style={{ fontFamily: 'var(--font-vcr)' }}
        >
          {topic.title}
        </h3>

        {/* Description */}
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
          {topic.description.slice(0, 80)}...
        </p>

        {/* Button */}
        {topic.released ? (
          <Link
            href={topic.url}
            className="flex w-full items-center justify-center gap-2 bg-primary-500 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-primary-600"
            style={{
              fontFamily: 'var(--font-vcr)',
              border: '2px solid #1a1a1a',
            }}
          >
            Learn more
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        ) : (
          <div
            className="flex w-full items-center justify-center bg-gray-200 py-2.5 text-xs font-bold uppercase tracking-wider text-gray-500 dark:bg-gray-700 dark:text-gray-400"
            style={{
              fontFamily: 'var(--font-vcr)',
              border: '2px solid #1a1a1a',
            }}
          >
            Coming Soon
          </div>
        )}
      </div>
    </div>
  ))

  return (
    <div className="flex flex-wrap justify-start gap-2">
      {marquee ? <Marquee autoFill>{content}</Marquee> : <React.Fragment>{content}</React.Fragment>}
    </div>
  )
}

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
      style={{ maxWidth: 320, width: '100%', borderRadius: 15, paddingBottom: 20, ...cardStyle }}
      className="mx-2 my-5 overflow-hidden bg-white shadow-lg"
    >
      <div
        style={{
          background: `url(${topic.img})`,
          marginBottom: 20,
          height: 220,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="px-4 py-1">
        <div className="text-md mb-2 font-bold">{topic.title}</div>
        {topic.released ? (
          <div style={{ margin: '20px 0px 20px 0px' }}>
            <Link
              href={topic.url}
              className="mt-5 max-w-lg rounded bg-primary-600 px-5 py-2 text-white"
            >
              Learn more
            </Link>
          </div>
        ) : (
          <div
            className="mt-5 rounded bg-gray-200 px-5 py-2 text-gray-600"
            style={{ margin: '30px 0px 20px 0px', width: 'fit-content' }}
          >
            Coming Soon
          </div>
        )}
        <p className="text-base text-sm text-gray-500">{topic.description}</p>
      </div>
    </div>
  ))
  return (
    <div className="flex-wrap lg:flex lg:justify-evenly">
      {marquee ? <Marquee autoFill>{content}</Marquee> : <React.Fragment>{content}</React.Fragment>}
    </div>
  )
}

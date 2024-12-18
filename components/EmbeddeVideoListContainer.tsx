'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Marquee from 'react-fast-marquee'

export const EmbeddedVideoListContainer = ({
  modules,
  marquee,
  cardStyle,
}: {
  modules: {
    title: string
    description: string
    url: string
  }[]
  marquee: boolean
  cardStyle?: React.CSSProperties
}) => {
  const [limit, setLimit] = useState(3)
  const content = modules.slice(0, limit).map((video) => (
    <div
      key={video.title}
      style={{
        maxWidth: 400,
        width: '100%',
        borderRadius: 15,
        paddingBottom: 20,
        padding: '10px 10px',
        ...cardStyle,
      }}
      className="mx-2 my-5 overflow-hidden bg-white shadow-lg"
    >
      <iframe
        key={video.url}
        width="100%"
        height="200px"
        style={{ borderRadius: 10 }}
        src={video.url}
        title="YouTube video player"
        allowFullScreen
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
      <div className="mt-2 px-4 py-4">
        <div className="text-md mb-2 font-bold">{video.title}</div>
        <div style={{ margin: '20px 0px 20px 0px' }}>
          <Link
            href={video.url}
            className="mt-5 max-w-lg rounded bg-primary-600 px-5 py-2 text-white"
          >
            Watch Video
          </Link>
        </div>
        <p className="text-base text-sm text-gray-500">{video.description}</p>
      </div>
    </div>
  ))
  return (
    <div>
      <div className="flex-wrap lg:flex lg:justify-evenly">
        {marquee ? (
          <Marquee autoFill>{content}</Marquee>
        ) : (
          <React.Fragment>{content}</React.Fragment>
        )}
      </div>
      {modules.length - limit > 0 && (
        <button
          className="bg-gradient-to-rpx-5 mb-2 me-2 w-full rounded-lg py-1 py-3 text-center text-sm font-medium text-black shadow-lg focus:ring-4 dark:shadow-lg"
          onClick={() => setLimit((limit) => limit + 3)}
        >
          Load more - {modules.length - limit} videos hidden
        </button>
      )}
    </div>
  )
}

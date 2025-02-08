'use client'
import React, { useState } from 'react'
import Marquee from 'react-fast-marquee'

export function TwitterPostsMarquee({ tweetIds }: { tweetIds: string[] }) {
  return (
    <div>
      <Marquee autoFill>
        {tweetIds.map((postId) => (
          <div key={postId} style={{ margin: '10px 10px' }}>
            <iframe
              loading="lazy"
              src={`https://platform.twitter.com/embed/Tweet.html?frame=false&hideCard=false&hideThread=false&id=${postId}&origin=https://openguild.wtf&theme=light&width=550px`}
              style={{ height: '600px', maxWidth: '350px', minWidth: '100%' }}
              title={`Twitter Post ${postId}`}
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>
        ))}
      </Marquee>
    </div>
  )
}

export function TwitterPostsShowcase({
  seeMoreEnabled,
  tweetIds,
}: {
  seeMoreEnabled?: boolean
  tweetIds: string[]
}) {
  const [showAll, setShowAll] = useState(false)
  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
        {tweetIds.slice(0, showAll ? tweetIds.length : 3).map((postId) => (
          <div key={postId} style={{ margin: '10px 10px' }}>
            <iframe
              loading="lazy"
              src={`https://platform.twitter.com/embed/Tweet.html?frame=false&hideCard=false&hideThread=false&id=${postId}&origin=https://openguild.wtf&theme=light&width=550px`}
              style={{ height: '560px', maxWidth: '350px', minWidth: '100%' }}
              title={`Twitter Post ${postId}`}
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>
        ))}
      </div>
      {seeMoreEnabled && !showAll && (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            onClick={() => setShowAll(true)}
            className="dark:focus:ring-purple-800' mx-auto my-5 rounded-lg bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-purple-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-purple-300 dark:shadow-lg dark:shadow-purple-800/80"
          >
            See more activites on X
          </button>
        </div>
      )}
    </div>
  )
}

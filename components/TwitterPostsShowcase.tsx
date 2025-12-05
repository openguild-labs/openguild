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
              style={{ height: '600px', width: '400px', minWidth: '100%' }}
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
            className="mx-auto my-5 bg-gray-900 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:translate-x-1 hover:translate-y-1 dark:bg-white dark:text-gray-900"
            style={{
              fontFamily: 'var(--font-vcr)',
              border: '3px solid #1a1a1a',
              boxShadow: '6px 6px 0px #1a1a1a',
            }}
          >
            See more activities on X
          </button>
        </div>
      )}
    </div>
  )
}

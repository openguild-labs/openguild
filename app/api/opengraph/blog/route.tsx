/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
// pages/api/opengraph-image/[...slug].ts
import { Authors, allAuthors, allBlogs } from 'contentlayer/generated'
import { ImageResponse, NextRequest } from 'next/server'
import { coreContent } from 'pliny/utils/contentlayer'

// Force dynamic to prevent caching issues with the image generation
export const dynamic = 'force-dynamic'

const ThumbnailComponent = ({ post, authorDetails }) => {
  return (
    <div
      style={{
        display: 'flex',
        width: '1200px',
        height: '630px',
        backgroundColor: '#0a0a0a',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Gradient Accent - Top Right */}
      <div
        style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '400px',
          height: '400px',
          backgroundColor: '#E6007A',
          opacity: 0.15,
          borderRadius: '50%',
          filter: 'blur(80px)',
        }}
      />

      {/* Gradient Accent - Bottom Left */}
      <div
        style={{
          position: 'absolute',
          bottom: '-100px',
          left: '-100px',
          width: '300px',
          height: '300px',
          backgroundColor: '#6366f1',
          opacity: 0.1,
          borderRadius: '50%',
          filter: 'blur(60px)',
        }}
      />

      {/* Main Content Card */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: '40px',
          padding: '40px',
          backgroundColor: '#ffffff',
          border: '4px solid #1a1a1a',
          boxShadow: '12px 12px 0px #1a1a1a',
          flex: 1,
          position: 'relative',
        }}
      >
        {/* Top Row - Badge and Logo */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '24px',
          }}
        >
          {/* OpenGuild Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <img src="https://openguild.wtf/static/images/logo.png" width={48} height={48} />
            <span
              style={{
                fontSize: '20px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '3px',
                color: '#1a1a1a',
              }}
            >
              OPENGUILD
            </span>
          </div>

          {/* Polkadot Ecosystem Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#E6007A',
              padding: '10px 20px',
            }}
          >
            <span
              style={{
                fontSize: '14px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                color: '#ffffff',
              }}
            >
              POLKADOT ECOSYSTEM
            </span>
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
          }}
        >
          <h1
            style={{
              fontSize: '52px',
              fontWeight: 'bold',
              color: '#1a1a1a',
              lineHeight: 1.1,
              margin: 0,
              marginBottom: '20px',
              textTransform: 'uppercase',
              letterSpacing: '-1px',
            }}
          >
            {post.title.length > 55 ? post.title.slice(0, 55) + '...' : post.title}
          </h1>

          {/* Accent Line */}
          <div
            style={{
              display: 'flex',
              width: '150px',
              height: '6px',
              backgroundColor: '#E6007A',
              marginBottom: '24px',
            }}
          />

          {/* Summary */}
          <p
            style={{
              fontSize: '22px',
              color: '#666666',
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            {post.summary?.slice(0, 120).trim()}...
          </p>
        </div>

        {/* Bottom Row - Author & URL */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '24px',
            paddingTop: '24px',
            borderTop: '2px dashed #e5e5e5',
          }}
        >
          {/* Author */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '44px',
                height: '44px',
                backgroundColor: '#E6007A',
                color: '#ffffff',
                fontSize: '18px',
                fontWeight: 'bold',
              }}
            >
              {'</>'}
            </div>
            <span
              style={{
                fontSize: '18px',
                color: '#666666',
              }}
            >
              {authorDetails[0]?.name || 'OpenGuild Team'}
            </span>
          </div>

          {/* URL */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span
              style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#1a1a1a',
                textTransform: 'uppercase',
                letterSpacing: '2px',
              }}
            >
              openguild.wtf
            </span>
            <div
              style={{
                display: 'flex',
                width: '12px',
                height: '12px',
                backgroundColor: '#E6007A',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const params = searchParams.get('slug')
  if (!params) throw new Error('No params found')

  const slug = decodeURIComponent(params).split(',').join('/')
  const post = allBlogs.find((p) => p.slug === slug)
  const authorList = post?.authors || ['default']
  const authorDetails = authorList.map((author) => {
    const authorResults = allAuthors.find((p) => p.slug === author)
    return coreContent(authorResults as Authors)
  })
  if (!post) {
    throw new Error('No post found')
  }
  return new ImageResponse(<ThumbnailComponent authorDetails={authorDetails} post={post} />, {
    width: 1200,
    height: 630,
  })
}

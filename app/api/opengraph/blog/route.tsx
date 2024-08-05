/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
// pages/api/opengraph-image/[...slug].ts
import { Authors, allAuthors, allBlogs } from 'contentlayer/generated'
import { ImageResponse, NextRequest } from 'next/server'
import { coreContent } from 'pliny/utils/contentlayer'

const ThumbnailComponent = ({ post, authorDetails }) => {
  return (
    <div
      className="no-styles"
      style={{
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
        fontFamily: 'Arial, Helvetica, sans-serif',
        backgroundSize: 'cover',
        width: '1200px',
        height: '630px',
        overflow: 'hidden',
        flexDirection: 'column',
        cursor: 'pointer',
        padding: '25px 55px',
        textAlign: 'center',
      }}
    >
      <h3
        style={{
          padding: '5px 20px',
          backgroundColor: '#6D3AEE',
          borderRadius: '20px',
          color: 'white',
          fontWeight: 'bold',
          margin: '5px 0',
        }}
      >
        OpenGuild Community
      </h3>
      <h1
        style={{
          padding: '10px 20px',
          backgroundColor: '#D3FF33',
          color: 'black',
          fontSize: '2em',
          fontWeight: 'bold',
          margin: '10px 0',
        }}
      >
        {post.title}
      </h1>
      <p
        style={{
          marginTop: '5px',
          maxWidth: '70%',
          fontSize: '1.3em',
          color: 'rgb(120, 120, 150)',
        }}
      >
        {post.summary?.slice(0, 250).trim()}
      </p>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
        <img
          src="https://openguild.wtf/_next/image?url=%2Fstatic%2Fimages%2Flogo.png&w=48&q=75"
          style={{ borderRadius: '50%' }}
          width={40}
          height={40}
        />
        <p style={{ color: 'black', margin: '0px 20px', fontSize: 'smaller', fontWeight: 'bold' }}>
          openguild.wtf
        </p>
        <img
          src="https://openguild.wtf/_next/image?url=%2Fstatic%2Fimages%2Fpolkadot%2Fpolkadot-logo.png&w=48&q=75"
          style={{ borderRadius: '50%' }}
          width={40}
          height={40}
        />
      </div>
    </div>
  )
}

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const params = searchParams.get('slug')
  if (!params) throw new Error('No params found')

  const slug = decodeURI(params.split(',').join('/') || '')
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

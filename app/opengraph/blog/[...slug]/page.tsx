/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from '@vercel/og'
import { Authors, allAuthors, allBlogs } from 'contentlayer/generated'
import { coreContent } from 'pliny/utils/contentlayer'

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

const size = {
  width: 1200,
  height: 630,
}

const contentType = 'image/png'

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
        background: 'no-repeat #111827',
        backgroundSize: 'cover',
        width: '100%',
        aspectRatio: '1',
        overflow: 'hidden',
        flexDirection: 'column',
        cursor: 'pointer',
        padding: '25px 55px',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{ color: 'white', fontSize: '25px', fontWeight: 'bold', margin: '10px 0' }}>
          {post.title}
        </h1>
        <p style={{ fontSize: '15px', color: 'rgb(120, 120, 150)', margin: '0px' }}>
          By {authorDetails.map((author) => author.name).join(',')}
        </p>
      </div>
      <p style={{ marginTop: '5px', fontSize: '15px', color: 'rgb(120, 120, 150)' }}>
        {post.summary?.slice(0, 250).trim()}
      </p>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
        <img
          src="https://lowlevelers.com/_next/image?url=%2Fstatic%2Fimages%2Flogo.png&w=48&q=75"
          style={{ borderRadius: '50%', width: '40px', height: '40px' }}
        />
        <p style={{ color: 'white', margin: '0px 20px', fontSize: 'smaller', fontWeight: 'bold' }}>
          lowlevelers.com
        </p>
        <img
          src="https://lowlevelers.com/_next/image?url=%2Fstatic%2Fimages%2Fpolkadot%2Fpolkadot-logo.png&w=48&q=75"
          style={{ borderRadius: '50%', width: '40px', height: '40px' }}
        />
      </div>
    </div>
  )
}

// Image generation
export default async function Image({ params }: { params: { slug: string[] } }) {
  try {
    const slug = decodeURI(params.slug.join('/') || '')
    const post = allBlogs.find((p) => p.slug === slug)
    const authorList = post?.authors || ['default']
    const authorDetails = authorList.map((author) => {
      const authorResults = allAuthors.find((p) => p.slug === author)
      return coreContent(authorResults as Authors)
    })
    if (!post) {
      throw new Error('No post found')
    }

    return new ImageResponse(
      (
        // ImageResponse JSX element
        <ThumbnailComponent authorDetails={authorDetails} post={post} />
      ),
      // ImageResponse options
      {
        // For convenience, we can re-use the exported opengraph-image
        // size config to also set the ImageResponse's width and height.
        ...size,
      }
    )
  } catch (error) {
    console.log(error)
  }
}

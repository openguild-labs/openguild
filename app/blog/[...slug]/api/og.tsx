/* eslint-disable @next/next/no-img-element */
import siteMetadata from '@/data/siteMetadata'
import { ImageResponse } from '@vercel/og'
import { Authors, allAuthors, allBlogs } from 'contentlayer/generated'
import { NextRequest } from 'next/server'
import { coreContent } from 'pliny/utils/contentlayer'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

// Image generation
export default async function handler(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const slug = decodeURI(searchParams.get('slug') || '')
  const post = allBlogs.find((p) => p.slug === slug)
  const authorList = post?.authors || ['default']
  const authorDetails = authorList.map((author) => {
    const authorResults = allAuthors.find((p) => p.slug === author)
    return coreContent(authorResults as Authors)
  })
  if (!post) {
    return
  }

  const renderThumbnail = () => {
    return (
      <div
        className="bg-gray-900 px-8"
        style={{
          display: 'flex',
          textAlign: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: 200,
          aspectRatio: '2/1',
        }}
      >
        <div className="flex space-x-4 ">
          <img
            src="/static/images/logo.png"
            alt="polkadot logo"
            width={20}
            height={20}
            style={{ borderRadius: '100%' }}
          />
          <img
            src="/static/images/polkadot/polkadot-logo.png"
            alt="polkadot logo"
            width={20}
            height={20}
          />
        </div>
        <dd
          style={{ fontSize: '0.7em' }}
          className="py-2 font-medium leading-6 text-gray-500 dark:text-gray-400"
        >
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
          </time>
        </dd>
        <h1 style={{ fontSize: '1em' }} className="font-bold">
          {post.title}
        </h1>
        <p className="text-gray-200" style={{ fontSize: '0.5em', marginTop: 5 }}>
          By{' '}
          {authorDetails
            .map((author) => author.name)
            .join(', ')
            .toString()}
        </p>
        <p className="text-gray-400" style={{ fontSize: '0.5em', marginTop: 5 }}>
          {post.summary?.slice(0, 100).trim()}...
        </p>
      </div>
    )
  }

  return new ImageResponse(
    // ImageResponse JSX element
    renderThumbnail(),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    }
  )
}

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
// pages/api/opengraph-image/[...slug].ts
import { Authors, allAuthors, allProjects } from 'contentlayer/generated'
import { ImageResponse, NextRequest } from 'next/server'
import nodeHtmlToImage from 'node-html-to-image'
import { coreContent } from 'pliny/utils/contentlayer'

const buildBase64DataUrl = (data: string) => {
  return `data:image/jpeg;base64,${data}`
}

const bufferToUint8Array = (bufferData: Buffer) => {
  return new Uint8Array(
    bufferData.buffer,
    bufferData.byteOffset,
    bufferData.byteLength / Uint8Array.BYTES_PER_ELEMENT
  )
}

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

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
        backgroundColor: 'no-repeat #111827',
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
      <h1 style={{ color: 'white', fontSize: '2em', fontWeight: 'bold', margin: '10px 0' }}>
        {post.title}
      </h1>
      <p style={{ fontSize: '1.5em', color: 'rgb(120, 120, 150)', margin: '0px' }}>
        By {authorDetails.map((author) => author.name).join(',')}
      </p>
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
        <p style={{ color: 'white', margin: '0px 20px', fontSize: 'smaller', fontWeight: 'bold' }}>
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

async function generateOpengraphImage(slugs: string[]) {
  const slug = decodeURI(slugs.join('/') || '')
  const post = allProjects.find((p) => p.slug === slug)
  const authorList = post?.authors || ['default']
  const authorDetails = authorList.map((author) => {
    const authorResults = allAuthors.find((p) => p.slug === author)
    return coreContent(authorResults as Authors)
  })
  if (!post) {
    throw new Error('No post found')
  }

  const renderThumbnail = () => {
    return `<div
        class="no-styles"
        style="justify-content:center;display:flex;align-items:center;box-sizing:border-box;font-family:Arial, Helvetica, sans-serif;background:no-repeat #111827;background-size:cover;width:1200px;height:630px;overflow:hidden;flex-direction:column;cursor:pointer; padding:25px 55px;"
      >
        <div style="text-align:center;margin-bottom:20px">
          <h1 style="color:white;font-size:25px;font-weight:bold;margin:10px 0;">
          ${post.title}
          </h1>
          <p style="color:white; font-size: 15px;color:rgb(120, 120, 150);margin:0px;">By ${authorDetails
            .map((author) => author.name)
            .join(',')
            .toString()}</p>
        </div>
          <p style="margin-top:5px;font-size:15px;color:rgb(120, 120, 150);">
            ${post.summary?.slice(0, 250).trim()}
          </p>
          <div style="display:flex;align-items:center;margin-top:10px">
                  <img src="https://openguild.wtf/_next/image?url=%2Fstatic%2Fimages%2Flogo.png&w=48&q=75" style="border-radius:50%;width:40px;height:40px;"/>
                  <p style="color:white; margin:0px 20px;font-size:smaller;font-weight:bold;">openguild.wtf</p>
          <img src="https://openguild.wtf/_next/image?url=%2Fstatic%2Fimages%2Fpolkadot%2Fpolkadot-logo.png&w=48&q=75" style="border-radius:50%;width:40px;height:40px;"/>
          </div>
      </div>`
  }
  const image: Buffer = (await nodeHtmlToImage({
    html: renderThumbnail(),
    type: 'jpeg',
    puppeteerArgs: {
      headless: 'new',
      args: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage', '--disable-extensions'],
    },
  })) as any
  const uint8Array = bufferToUint8Array(image)
  return { url: buildBase64DataUrl(image.toString('base64')), data: uint8Array, image }
}

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const params = searchParams.get('slug')
  if (!params) throw new Error('No params found')

  const slug = decodeURI(params.split(',').join('/') || '')
  const post = allProjects.find((p) => p.slug === slug)
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

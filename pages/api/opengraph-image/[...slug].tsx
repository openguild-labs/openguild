/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
// pages/api/opengraph-image/[...slug].ts

import siteMetadata from '@/data/siteMetadata'
import { Authors, allAuthors, allBlogs } from 'contentlayer/generated'
import { NextApiRequest, NextApiResponse } from 'next'
import nodeHtmlToImage from 'node-html-to-image'
import { coreContent } from 'pliny/utils/contentlayer'
import ReactDOMServer from 'react-dom/server'

export function renderReactComponent(component: React.ReactElement): string {
  return ReactDOMServer.renderToString(component)
}

export const buildBase64DataUrl = (data: string) => {
  return `data:image/jpeg;base64,${data}`
}

export const bufferToUint8Array = (bufferData: Buffer) => {
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

async function generateOpengraphImage(slugs: string[]) {
  const slug = decodeURI(slugs.join('/') || '')
  const post = allBlogs.find((p) => p.slug === slug)
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
        style="justify-content:center;display:flex;align-items:center;box-sizing:border-box;font-family:Arial, Helvetica, sans-serif;background:no-repeat #111827;background-size:cover;width:100%;aspect-ratio:1;overflow:hidden;flex-direction:column;cursor:pointer; padding:25px 55px;"
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
                  <img src="https://lowlevelers.com/_next/image?url=%2Fstatic%2Fimages%2Flogo.png&w=48&q=75" style="border-radius:50%;width:40px;height:40px;"/>
                  <p style="color:white; margin:0px 20px;font-size:smaller;font-weight:bold;">lowlevelers.com</p>
          <img src="https://lowlevelers.com/_next/image?url=%2Fstatic%2Fimages%2Fpolkadot%2Fpolkadot-logo.png&w=48&q=75" style="border-radius:50%;width:40px;height:40px;"/>
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

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Set the content type and return the HTML string as the opengraph image
  res.setHeader('Content-Type', 'image/jpeg')
  const { image } = await generateOpengraphImage(req.query.slug as string[])
  res.status(200).send(image)
}

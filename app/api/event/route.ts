// pages/api/images.js

import fs from 'fs'
import { NextResponse } from 'next/server'
import path from 'path'

export async function GET() {
  const imagesDirectory = path.join(process.cwd(), 'public/static/images/polkadot/events')
  const filenames = fs.readdirSync(imagesDirectory)
  console.log(filenames)
  const images = filenames.map((name) => path.join('/events', name))
  return NextResponse.json(images, {
    status: 200,
  })
}

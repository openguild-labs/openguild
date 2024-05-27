// pages/api/images.js

import fs from 'fs'
import { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'

type ResponseData = string[]

function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const imagesDirectory = path.join(process.cwd(), 'public/static/images/polkadot/events')
  const filenames = fs.readdirSync(imagesDirectory)
  console.log(filenames)
  const images = filenames.map((name) => path.join('/events', name))
  res.status(200).json(images)
}

export { handler as GET, handler as POST }

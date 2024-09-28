'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'

const EventImageGallery = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    const init = async () => {
      const response = await axios.get('/api/event')
      setImages(response.data.images || [])
    }
    init()
  }, [])
  return (
    <div>
      <Marquee>
        {images.slice(0, 10).map((image, index) => (
          <img
            key={`image-${index}`}
            style={{ maxWidth: 400, objectFit: 'cover', margin: '5px' }}
            className="rounded-lg"
            src={`/static/images/polkadot/${image}`}
            alt={`event-${index}`}
          />
        ))}
      </Marquee>
      <Marquee>
        {images.slice(10, 20).map((image, index) => (
          <img
            key={`image-${index}`}
            style={{ maxWidth: 300, objectFit: 'cover', margin: '5px' }}
            className="rounded-lg"
            src={`/static/images/polkadot/${image}`}
            alt={`event-${index}`}
          />
        ))}
      </Marquee>
      <Marquee>
        {images.slice(20).map((image, index) => (
          <img
            key={`image-${index}`}
            style={{ maxWidth: 400, objectFit: 'cover', margin: '5px' }}
            className="rounded-lg"
            src={`/static/images/polkadot/${image}`}
            alt={`event-${index}`}
          />
        ))}
      </Marquee>
    </div>
  )
}

export default EventImageGallery

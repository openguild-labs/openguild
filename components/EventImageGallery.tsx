'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

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
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {images.map((image, index) => (
        <img
          key={`image-${index}`}
          style={{ maxWidth: 350, objectFit: 'cover', margin: '5px' }}
          className="rounded-lg"
          src={`/static/images/polkadot/${image}`}
          alt={`event-${index}`}
        />
      ))}
    </div>
  )
}

export default EventImageGallery

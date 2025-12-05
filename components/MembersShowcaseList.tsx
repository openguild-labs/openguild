'use client'
import { Player } from 'app/types'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'
import { getDiceBearAvatar } from '@/utils'

const ImageCard = ({
  imgSrc,
  fallbackSeed,
  style,
  avatarSize,
}: {
  imgSrc: string
  fallbackSeed?: string
  avatarSize?: number
  style?: React.CSSProperties
}) => {
  const [imageSrc, setImageSrc] = useState(imgSrc)
  const [hasError, setHasError] = useState(false)

  const handleImageError = () => {
    if (!hasError && fallbackSeed) {
      setHasError(true)
      setImageSrc(getDiceBearAvatar(fallbackSeed))
    }
  }

  return (
    <div
      style={{
        border: `1px solid #dfdfdf`,
        height: 20,
        width: 20,
        borderRadius: '50%',
        backgroundColor: 'white',
        boxShadow: 'rgba(99, 99, 99, 0.1) 0px 2px 8px 0px',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        padding: '7px',
        ...style,
      }}
    >
      <img
        src={imageSrc}
        width={avatarSize || 15}
        height={avatarSize || 15}
        style={{
          borderRadius: 15,
        }}
        onError={handleImageError}
        alt="Member avatar"
      />
    </div>
  )
}

const MembersShowcaseList = () => {
  const [members, setMembers] = useState<Player[]>([])

  useEffect(() => {
    const init = async () => {
      const response = await axios.get('/api/mee6')
      setMembers(response.data.members)
    }
    init()
  }, [])

  return (
    <Marquee autoFill style={{ overflow: 'hidden', marginTop: 10 }}>
      <div style={{ display: 'flex' }}>
        {members.map((item, index) => (
          <div key={item.id} style={{ display: 'flex', margin: '0px 5px' }}>
            <ImageCard
              imgSrc={item.avatar}
              fallbackSeed={item.username || item.id}
              avatarSize={80}
              style={{ height: 50, width: 50, borderRadius: '50%' }}
            />
          </div>
        ))}
      </div>
    </Marquee>
  )
}

export default MembersShowcaseList

'use client'
import { Player } from 'app/types'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getDiceBearAvatar } from '@/utils'

// Avatar component with DiceBear fallback
const MemberAvatar = ({
  src,
  username,
  className,
}: {
  src: string
  username: string
  className?: string
}) => {
  const [imageSrc, setImageSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleImageError = () => {
    if (!hasError) {
      setHasError(true)
      setImageSrc(getDiceBearAvatar(username))
    }
  }

  return (
    <img
      src={imageSrc}
      alt={`${username}'s avatar`}
      className={className}
      onError={handleImageError}
    />
  )
}

const MembershipLeaderboard = () => {
  const [members, setMembers] = useState<Player[]>([])

  useEffect(() => {
    const init = async () => {
      const response = await axios.get('/api/mee6')
      setMembers(response.data.members)
    }
    init()
  }, [])

  return (
    <div>
      {members.map((member, index) => (
        <li
          key={member.id}
          className="m-2 flex items-center rounded-lg bg-white p-2 shadow-md dark:bg-gray-800"
          style={{ flexWrap: 'wrap' }}
        >
          <div
            className={index <= 2 ? 'bg-primary-500' : 'bg-gray-400'}
            style={{
              width: 30,
              height: 30,
              justifyContent: 'center',
              display: 'flex',
              alignItems: 'center',
              color: 'white',
              fontWeight: 'bold',
              borderRadius: 10,
              marginRight: 20,
            }}
          >
            {index === 0 && '🥇'}
            {index === 1 && '🥈'}
            {index === 2 && '🥉'}
            {index > 2 && index + 1}
          </div>
          <MemberAvatar
            src={member.avatar}
            username={member.username}
            className="mr-6 h-10 w-10 rounded-full"
          />
          <h2 className="text-xl font-semibold dark:text-white">{member.username}</h2>
          <div
            style={{ fontSize: 16, margin: '0px 20px' }}
            className="text-gray-600 dark:text-gray-400"
          >
            XP: {member.xp}
          </div>
          <div
            style={{ fontSize: 16, margin: '0px 20px' }}
            className="text-gray-600 dark:text-gray-400"
          >
            Level: {member.level}
          </div>
        </li>
      ))}
    </div>
  )
}

export default MembershipLeaderboard

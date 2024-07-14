'use client'
import { Player } from 'app/types'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

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
          className="m-2 flex items-center rounded-lg bg-white p-2 shadow-md"
          style={{ flexWrap: 'wrap' }}
        >
          <div
            className={index <= 2 ? 'bg-purple-600' : 'bg-gray-400'}
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
          <img
            src={member.avatar}
            alt={`${member.username}'s avatar`}
            className="mr-6 h-10 w-10 rounded-full"
          />
          <h2 className="text-xl font-semibold">{member.username}</h2>
          <div style={{ fontSize: 16, margin: '0px 20px' }} className="text-gray-600">
            XP: {member.xp}
          </div>
          <div style={{ fontSize: 16, margin: '0px 20px' }} className="text-gray-600">
            Level: {member.level}
          </div>
        </li>
      ))}
    </div>
  )
}

export default MembershipLeaderboard

'use client'
import { Player } from 'app/types'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'

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
          <div key={item.id} style={{ display: 'flex', margin: '0px 10px' }}>
            <img
              src={item.avatar}
              width={30}
              height={30}
              style={{ marginRight: '10', borderRadius: 50, backgroundColor: 'purple' }}
            />
            <h3
              key={item.id}
              style={{
                backgroundColor: 'white',
                fontWeight: 'bold',
                margin: '0px 10px',
                rotate: index % 2 === 1 ? '4deg' : '-5deg',
              }}
            >
              {item.username}
            </h3>
          </div>
        ))}
      </div>
    </Marquee>
  )
}

export default MembersShowcaseList

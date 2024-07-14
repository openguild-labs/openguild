import { MembershipData } from 'app/types'
import axios from 'axios'
import { NextResponse } from 'next/server'

export async function GET() {
  const SERVER_ID =
    '1170911030789029898?fbclid=IwZXh0bgNhZW0CMTAAAR3qeMpr40hFTCJOfP8g-i2Ak2JnsLwMA9GTzs0UICpNNL0e1PUk7_h03k4_aem_4I7sFCG8BnTNJsiwLnWJ9A'
  const endpoint = `https://mee6.xyz/api/plugins/levels/leaderboard/${SERVER_ID}`
  const response = await axios.get(endpoint)
  const data: MembershipData = response.data
  return NextResponse.json(
    {
      members: data.players.map((player) => ({
        ...player,
        avatar: `https://cdn.discordapp.com/avatars/${player.id}/${player.avatar}`,
      })),
    },
    {
      status: 200,
    }
  )
}

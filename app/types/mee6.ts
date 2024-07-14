export type MembershipData = {
  page: number
  guild: Guild
  xp_rate: number
  xp_per_message: [number, number]
  role_rewards: RoleReward[]
  monetize_options: MonetizeOptions
  players: Player[]
}

export type Guild = {
  id: string
  icon: string
  name: string
  premium: boolean
  allow_join: boolean
  leaderboard_url: string
  invite_leaderboard: boolean
  commands_prefix: string | null
  application_commands_enabled: boolean
}

export type RoleReward = {
  rank: number
  role: Role
}

export type Role = {
  color: number
  hoist: boolean
  icon: string
  id: string
  managed: boolean
  mentionable: boolean
  name: string
  permissions: number
  position: number
  unicode_emoji: string
}

export type MonetizeOptions = {
  display_plans: boolean
  showcase_subscribers: boolean
}

export type Player = {
  avatar: string
  discriminator: string
  guild_id: string
  id: string
  message_count: number
  monetize_xp_boost: number
  username: string
  xp: number
  is_monetize_subscriber: boolean
  detailed_xp: [number, number, number]
  level: number
}

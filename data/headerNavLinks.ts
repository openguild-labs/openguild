const headerNavLinks: {
  href: string
  title: string
  className?: string
  style?: React.CSSProperties
}[] = [
  { href: '/learn', title: 'Learn' },
  { href: '/activity', title: 'Activity' },
  { href: '/events', title: 'Events' },
  { href: '/blog', title: 'Blogs' },
  { href: '/members', title: 'Members' },
  {
    href: '/bounty',
    title: '👉 Hunt bounty now!',
    className:
      'mx-auto my-5 rounded-lg bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-purple-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-purple-300 dark:shadow-lg dark:shadow-purple-800/80 dark:focus:ring-purple-800',
  },
]

export default headerNavLinks

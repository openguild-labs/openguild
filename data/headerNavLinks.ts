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
    href: 'https://codecamp.openguild.wtf',
    title: '🚀 Join CODECAMP!',
    className: 'cta-button',
  },
]

export default headerNavLinks

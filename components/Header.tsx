/* eslint-disable @next/next/no-img-element */
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
// import ThemeSwitch from './ThemeSwitch'
// import SearchButton from './SearchButton'

const Header = () => {
  return (
    <header className="flex items-center justify-between py-6">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center gap-3">
            {/* OG Logo */}
            <img src="/static/images/logo.png" alt="OpenGuild Logo" className="h-10 w-auto" />
            <span
              className="hidden font-pixel text-sm font-bold tracking-wider text-gray-900 dark:text-white sm:block"
              style={{ fontFamily: 'var(--font-vcr)' }}
            >
              {siteMetadata.headerTitle?.toUpperCase()}
            </span>
          </div>
        </Link>
      </div>
      <nav className="flex items-center gap-6">
        {headerNavLinks
          .filter((link) => link.href !== '/')
          .map((link) => {
            const isCtaButton = link.className === 'cta-button'
            return (
              <Link
                key={link.title}
                href={link.href}
                className={
                  isCtaButton
                    ? 'hidden bg-primary-500 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-all hover:translate-x-0.5 hover:translate-y-0.5 sm:block'
                    : 'hidden text-xs font-medium uppercase tracking-wider text-gray-700 transition-colors hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 sm:block'
                }
                style={
                  isCtaButton
                    ? {
                        fontFamily: 'var(--font-vcr)',
                        border: '2px solid #1a1a1a',
                        boxShadow: '4px 4px 0px #1a1a1a',
                      }
                    : { fontFamily: 'var(--font-vcr)' }
                }
              >
                {isCtaButton ? '🚀 Join CODECAMP!' : link.title}
              </Link>
            )
          })}
        {/* <SearchButton /> */}
        {/* <ThemeSwitch /> */}
        <MobileNav />
      </nav>
    </header>
  )
}

export default Header

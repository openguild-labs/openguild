/* eslint-disable @next/next/no-img-element */
import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="/static/images/logo.png" alt="OpenGuild Logo" className="h-8 w-auto" />
              <span
                className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white"
                style={{ fontFamily: 'var(--font-vcr)' }}
              >
                {siteMetadata.headerTitle}
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">{siteMetadata.description}</p>
            <div className="flex gap-3">
              <SocialIcon kind="github" href={siteMetadata.github} size={5} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} size={5} />
              <SocialIcon kind="youtube" href={siteMetadata.youtube} size={5} />
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={5} />
            </div>
          </div>

          {/* Resources Column */}
          <div className="space-y-4">
            <h3
              className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white"
              style={{ fontFamily: 'var(--font-vcr)' }}
            >
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/learn"
                  className="text-gray-600 transition-colors hover:text-primary-500 dark:text-gray-400"
                >
                  Learning Hub
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 transition-colors hover:text-primary-500 dark:text-gray-400"
                >
                  Blog & Research
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-600 transition-colors hover:text-primary-500 dark:text-gray-400"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="https://wiki.polkadot.network"
                  className="text-gray-600 transition-colors hover:text-primary-500 dark:text-gray-400"
                >
                  Polkadot Wiki
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3
              className="text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white"
              style={{ fontFamily: 'var(--font-vcr)' }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/activity"
                  className="text-gray-600 transition-colors hover:text-primary-500 dark:text-gray-400"
                >
                  Activity
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-gray-600 transition-colors hover:text-primary-500 dark:text-gray-400"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/members"
                  className="text-gray-600 transition-colors hover:text-primary-500 dark:text-gray-400"
                >
                  Members
                </Link>
              </li>
              <li>
                <Link
                  href="/bounty"
                  className="text-gray-600 transition-colors hover:text-primary-500 dark:text-gray-400"
                >
                  Bounty Program
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 dark:border-gray-800 md:flex-row">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} {siteMetadata.title}. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Made with{' '}
            <span className="text-primary-500" aria-label="love">
              ♥
            </span>{' '}
            by{' '}
            <Link href="https://openguild.wtf" className="text-primary-500 hover:underline">
              OpenGuild
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

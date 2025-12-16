import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href, github, award, competition }) => (
  <div className="w-80 shrink-0 p-4">
    <div
      className="group relative h-full bg-white transition-all hover:translate-x-1 hover:translate-y-1 dark:bg-gray-800"
      style={{
        border: '3px solid #1a1a1a',
        boxShadow: '6px 6px 0px #1a1a1a',
      }}
    >
      {/* Competition Badge - Full width at top */}
      {competition && (
        <div
          className="flex items-center gap-2 bg-gray-900 px-4 py-2 text-white dark:bg-gray-700"
          style={{ borderBottom: '2px solid #1a1a1a' }}
        >
          <span className="text-sm">🏅</span>
          <span
            className="text-xs font-bold uppercase tracking-wider"
            style={{ fontFamily: 'var(--font-vcr)' }}
          >
            {competition}
          </span>
        </div>
      )}

      <div className="p-6">
        {/* Header Row */}
        <div className="mb-4 flex items-start gap-4">
          {/* Code Icon or Image */}
          {imgSrc ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              <div
                className="h-16 w-16 shrink-0 overflow-hidden"
                style={{ border: '2px solid #1a1a1a' }}
              >
                <Image
                  alt={title}
                  src={imgSrc}
                  className="h-full w-full object-cover object-center"
                  width={64}
                  height={64}
                />
              </div>
            </Link>
          ) : (
            <div
              className="flex h-16 w-16 shrink-0 items-center justify-center bg-primary-100 dark:bg-primary-900/30"
              style={{ border: '2px solid #1a1a1a' }}
            >
              <span
                className="text-2xl font-bold text-primary-500"
                style={{ fontFamily: 'var(--font-vcr)' }}
              >
                {'<>'}
              </span>
            </div>
          )}

          {/* Title */}
          <h2
            className="text-base font-bold uppercase leading-tight text-gray-900 dark:text-white"
            style={{ fontFamily: 'var(--font-vcr)' }}
          >
            {href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
        </div>

        {/* Description */}
        {description && (
          <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            {description?.slice(0, 100).trim()}...
          </p>
        )}

        {/* Dotted Separator */}
        <div className="mb-4 border-b border-dashed border-gray-300 dark:border-gray-600"></div>

        {/* Award Badge */}
        {award && (
          <div className="mb-4 flex items-center gap-2 text-sm">
            <span className="text-xl">🏆</span>
            <span
              className="text-xs font-bold text-primary-500"
              style={{ fontFamily: 'var(--font-vcr)' }}
            >
              {award}
            </span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col gap-2">
          {href && (
            <Link
              href={href}
              className="flex w-full items-center justify-center gap-2 bg-primary-500 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-primary-600"
              style={{
                fontFamily: 'var(--font-vcr)',
                border: '2px solid #1a1a1a',
              }}
              aria-label={`Link to ${title}`}
            >
              Learn more
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          )}

          {github && (
            <a
              href={github}
              className="flex w-full items-center justify-center gap-2 bg-white py-2.5 text-xs font-bold uppercase tracking-wider text-gray-900 transition-all hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
              style={{
                fontFamily: 'var(--font-vcr)',
                border: '2px solid #1a1a1a',
              }}
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              View on GitHub
              <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
)

export default Card

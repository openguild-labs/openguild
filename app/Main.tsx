import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import Marquee from 'react-fast-marquee'

const MAX_DISPLAY = 3

export default function Home({ posts }) {
  return (
    <>
      {/* Hero Section with World Map Background */}
      <section className="relative min-h-[80vh] overflow-hidden">
        {/* World Map Background */}
        <div
          className="absolute inset-0 opacity-10 dark:opacity-5"
          style={{
            backgroundImage: "url('/static/graphics/World Map.png')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right center',
            backgroundSize: 'contain',
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 lg:py-32">
          {/* Badge */}
          <div className="mb-6 inline-block rounded bg-primary-500 px-4 py-2">
            <span
              className="text-xs font-bold uppercase tracking-wider text-white"
              style={{ fontFamily: 'var(--font-vcr)' }}
            >
              OpenGuild Community
            </span>
          </div>

          {/* Main Heading - Pixel Font Style */}
          <h1
            className="mb-6 text-5xl font-bold uppercase leading-tight tracking-tight text-gray-900 dark:text-white md:text-7xl lg:text-8xl"
            style={{ fontFamily: 'var(--font-vcr)' }}
          >
            OPEN
            <br />
            GUILD
          </h1>

          {/* Subtitle with underline accent */}
          <div className="mb-8">
            <p
              className="text-lg font-medium uppercase tracking-wider text-gray-700 dark:text-gray-300"
              style={{ fontFamily: 'var(--font-vcr)' }}
            >
              BUILD TOGETHER. GROW TOGETHER.
            </p>
            <div className="mt-2 h-1 w-48 bg-primary-500"></div>
          </div>

          {/* Description */}
          <p className="mb-10 max-w-xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            {siteMetadata.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/learn"
              className="inline-flex items-center gap-2 rounded bg-primary-500 px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-primary-600"
              style={{ fontFamily: 'var(--font-vcr)' }}
            >
              Explore
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              href="/bounty"
              className="inline-flex items-center gap-2 rounded border-2 border-primary-500 bg-transparent px-6 py-3 text-sm font-bold uppercase tracking-wider text-primary-500 transition-all hover:bg-primary-50 dark:hover:bg-primary-500/10"
              style={{ fontFamily: 'var(--font-vcr)' }}
            >
              View Bounties
            </Link>
          </div>

          {/* Partners/Sponsors Line */}
          <div className="mt-12 text-sm text-gray-500 dark:text-gray-400">
            Made possible by{' '}
            <Link href="https://openguild.wtf" className="font-semibold hover:text-primary-500">
              OpenGuild
            </Link>{' '}
            |{' '}
            <Link href="https://web3.foundation" className="font-semibold hover:text-primary-500">
              Web3 Foundation
            </Link>{' '}
            |{' '}
            <Link href="https://polkadot.network" className="font-semibold hover:text-primary-500">
              Polkadot
            </Link>
          </div>
        </div>
      </section>

      {/* Discord CTA */}
      <div className="flex items-center justify-center py-8">
        <a
          href="https://discord.gg/p5f7vTV7mH"
          className="flex items-center gap-3 rounded-lg border-2 border-[#5865F2] bg-[#5865F2]/10 px-6 py-3 text-sm font-medium text-[#5865F2] transition-all hover:bg-[#5865F2] hover:text-white"
        >
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -28.5 256 256"
            preserveAspectRatio="xMidYMid"
          >
            <path
              d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
              fill="currentColor"
              fillRule="nonzero"
            />
          </svg>
          <span>Join Our Discord Community</span>
        </a>
      </div>
      {/* About Section */}
      <section className="border-t border-gray-200 py-16 dark:border-gray-800">
        <div className="mx-auto max-w-4xl">
          <h2
            className="mb-6 text-2xl font-bold uppercase tracking-tight text-gray-900 dark:text-white md:text-3xl"
            style={{ fontFamily: 'var(--font-vcr)' }}
          >
            Why We Build This Community
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            {siteMetadata.expandedDescription}
          </p>
        </div>
      </section>

      {/* Focus Topics Section */}
      <section className="border-t border-gray-200 bg-gray-50 py-16 dark:border-gray-800 dark:bg-gray-900/50">
        <div className="mx-auto max-w-6xl px-4">
          <h2
            className="mb-10 text-center text-2xl font-bold uppercase tracking-tight text-gray-900 dark:text-white md:text-3xl"
            style={{ fontFamily: 'var(--font-vcr)' }}
          >
            What We Focus On
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {siteMetadata.focusTopics.map((topic, index) => (
              <div
                key={topic.title}
                className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-primary-500 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className="text-sm text-primary-500"
                    style={{ fontFamily: 'var(--font-vcr)' }}
                  >
                    #{String(index + 1).padStart(2, '0')}
                  </span>
                  <h3
                    className="text-lg font-bold uppercase text-gray-900 dark:text-white"
                    style={{ fontFamily: 'var(--font-vcr)' }}
                  >
                    {topic.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {topic.description}
                </p>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary-500 transition-all group-hover:w-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contribute Section */}
      <section className="border-t border-gray-200 py-16 dark:border-gray-800">
        <div className="mx-auto max-w-4xl">
          <h2
            className="mb-6 text-2xl font-bold uppercase tracking-tight text-gray-900 dark:text-white md:text-3xl"
            style={{ fontFamily: 'var(--font-vcr)' }}
          >
            How to Contribute
          </h2>
          <p className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            OpenGuild is open-source and everyone can contribute to the community. Blog data is
            stored in{' '}
            <code className="rounded bg-primary-100 px-2 py-1 font-mono text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
              data/blog
            </code>
            . To contribute, please create a pull request (PR) following the guidelines to submit a
            new markdown file.
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-primary-500 transition-colors hover:text-primary-600"
            style={{ fontFamily: 'var(--font-vcr)' }}
          >
            View All Projects
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="border-t border-gray-200 bg-gray-50 py-16 dark:border-gray-800 dark:bg-gray-900/50">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10">
            <h2
              className="mb-4 text-2xl font-bold uppercase tracking-tight text-gray-900 dark:text-white md:text-3xl"
              style={{ fontFamily: 'var(--font-vcr)' }}
            >
              Latest Posts
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {siteMetadata.blogSectionDescription}
            </p>
          </div>

          <div className="space-y-6">
            {!posts.length && <p className="text-center text-gray-500">No posts found.</p>}
            {posts
              .filter((post) => !post.tags.includes('lang-vn'))
              .slice(0, MAX_DISPLAY)
              .map((post) => {
                const { slug, date, title, summary, tags } = post
                return (
                  <article
                    key={slug}
                    className="group rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-primary-500 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
                  >
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div className="flex-1">
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          <time
                            dateTime={date}
                            className="text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400"
                            style={{ fontFamily: 'var(--font-vcr)' }}
                          >
                            {formatDate(date, siteMetadata.locale)}
                          </time>
                          <span className="text-gray-300 dark:text-gray-600">•</span>
                          {tags.slice(0, 2).map((tag) => (
                            <Tag key={tag} text={tag} />
                          ))}
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-primary-500 dark:text-white">
                          <Link href={`/blog/${slug}`}>{title}</Link>
                        </h3>
                        <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                          {summary}
                        </p>
                      </div>
                      <Link
                        href={`/blog/${slug}`}
                        className="shrink-0 text-sm font-medium text-primary-500 transition-colors hover:text-primary-600"
                        aria-label={`Read more: "${title}"`}
                      >
                        Read more →
                      </Link>
                    </div>
                  </article>
                )
              })}
          </div>
        </div>
      </section>
      {/* View All Posts Link */}
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-center py-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded border-2 border-primary-500 bg-transparent px-6 py-3 text-sm font-bold uppercase tracking-wider text-primary-500 transition-all hover:bg-primary-500 hover:text-white"
            style={{ fontFamily: 'var(--font-vcr)' }}
            aria-label="All posts"
          >
            View All Posts
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      )}

      {/* Newsletter Section */}
      {siteMetadata.newsletter?.provider && (
        <section className="border-t border-gray-200 py-16 dark:border-gray-800">
          <div className="mx-auto max-w-xl text-center">
            <h2
              className="mb-4 text-xl font-bold uppercase tracking-tight text-gray-900 dark:text-white md:text-2xl"
              style={{ fontFamily: 'var(--font-vcr)' }}
            >
              Stay Updated
            </h2>
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              Subscribe to our newsletter to get the latest updates and announcements.
            </p>
            <NewsletterForm />
          </div>
        </section>
      )}
    </>
  )
}

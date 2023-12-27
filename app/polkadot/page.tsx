import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
// import NewsletterForm from 'pliny/ui/NewsletterForm'
// import projectsData from '@/data/projectsData'
// import Card from '@/components/Card'
// import Marquee from 'react-fast-marquee'
import { allBlogs } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import Image from 'next/image'
import { BlogArticleList } from '@/components/BlogArticleList'

const MAX_DISPLAY = 3

export default function PolkadotMainPage() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  const rustCourses = [
    {
      title: 'Rust Practices with Rustlings',
      description: `Solving Rustlings problems to learn Rust interactively.`,
      url: '/polkadot/substrate',
      img: '/static/images/learn-rust.png',
      released: false,
    },
    {
      title: 'Rust Practices for Polkadot Blockchain Academy',
      description: `Be ready for Polkadot Blockchain Academy by praticing mock Rust qualification exam`,
      url: '/polkadot/substrate',
      img: '/static/images/learn-rust.png',
      released: false,
    },
    {
      title: 'WebAssembly in Rust',
      description: `Learn WebAssembly concepts and implement a WASM executor in Rust`,
      url: '/polkadot/substrate',
      img: '/static/images/learn-rust.png',
      released: false,
    },
  ]
  const pbaBookCourses = [
    {
      title: 'Prepare for PBA: Programming a State Machine in Rust',
      description: `Learn the concept of state machine through Rust hands-on experiment with Polkadot Blockchain Academy exercises`,
      url: '/polkadot/substrate',
      img: '/static/images/polkadot/prepare-for-pba-001.png',
      released: false,
    },
    {
      title: 'Prepare for PBA: Build a blockchain from scratch',
      description: `Learn how to write your own blockchain node from scratch using materials from Polkadot Blockchain Academy book`,
      url: '/polkadot/substrate',
      img: '/static/images/polkadot/prepare-for-pba-003.png',
      released: false,
    },
    {
      title: 'Prepare for PBA: Build a Substrate node from scratch',
      description: `Learn how to write your own Substrate node from scratch`,
      url: '/polkadot/substrate',
      img: '/static/images/polkadot/prepare-for-pba-002.png',
      released: false,
    },
  ]

  const ModuleListSection = ({
    modules,
  }: {
    modules: {
      title: string
      description: string
      url: string
      img: string
      released: boolean
    }[]
  }) => {
    return (
      <div className="lg:flex lg:justify-evenly">
        {modules.map((topic) => (
          <div
            key={topic.title}
            style={{ maxWidth: 400, width: '100%', paddingBottom: 20 }}
            className="mx-2 my-5 overflow-hidden rounded bg-gray-900 shadow-lg"
          >
            <div
              style={{
                background: `url(${topic.img})`,
                marginBottom: 20,
                height: 170,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold">{topic.title}</div>
              {topic.released ? (
                <div style={{ margin: '20px 0px 20px 0px' }}>
                  <Link href={topic.url} className="mt-5 max-w-lg rounded bg-primary-600 px-5 py-2">
                    Learn more
                  </Link>
                </div>
              ) : (
                <div
                  className="mt-5 rounded bg-gray-700 px-5 py-2"
                  style={{ margin: '30px 0px 20px 0px', width: 'fit-content' }}
                >
                  Coming Soon
                </div>
              )}
              <p className="text-base text-gray-500">{topic.description}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }
  return (
    <>
      <section className="body-font text-black">
        <div className="container mx-auto px-5 pt-32 lg:px-4 lg:py-4">
          <div className="mb-2 flex w-full flex-col text-left md:text-center">
            <div
              style={{
                background: "url('/static/images/polkadot-landing.png')",
                borderRadius: '10px',
                marginBottom: 50,
                height: 300,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <h1 className="mb-2 text-4xl font-bold tracking-tighter text-white md:text-7xl lg:text-5xl">
              <span style={{ marginRight: 5 }}>Low-level developer community</span>
              <br className="hidden lg:block"></br>
              for Polkadot ecosystem
            </h1>
            <br></br>
            <p className="mx-auto  text-xl font-normal leading-relaxed text-gray-600 dark:text-gray-300 lg:w-2/3">
              <span className="font-bold text-primary-500">TheLowLevelers</span> is a non-profit
              community dedicated to curating and providing materials with a low-level approach for
              developers interested in the Polkadot blockchain.
            </p>
          </div>
        </div>
      </section>
      <br />
      <div className="flex items-center justify-center">
        <a
          href="https://discord.gg/p5f7vTV7mH"
          className="flex items-center rounded-lg border border-gray-900 bg-gray-800 px-6 py-2 text-sm font-medium text-white shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
        >
          <svg
            className="mr-2 h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            width="800px"
            height="800px"
            viewBox="0 -28.5 256 256"
            version="1.1"
            preserveAspectRatio="xMidYMid"
          >
            <g>
              <path
                d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                fill="#5865F2"
                fill-rule="nonzero"
              ></path>
            </g>
          </svg>
          <span>Join our Discord for active engagement</span>
        </a>
      </div>
      <br />
      <br />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
            What do we do?
          </h1>
          <div className="lg:flex lg:justify-evenly">
            {[
              {
                title: 'Events',
                description:
                  'Weekly meetup to share about the technological advancement in the Polkadot ecosystem and establish hackathon for developers to "build to earn" with the community',
                img: '/static/images/event-banner.jpg',
              },
              {
                title: 'Research & Development',
                description:
                  'Research the interesting topics of Polkadot blockchain and develop tools for the open-source community',
                img: '/static/images/r&d-banner.avif',
              },
            ].map((topic) => (
              <div
                key={topic.title}
                className="mx-3 my-5 max-w-lg overflow-hidden rounded bg-gray-900 shadow-lg"
              >
                <div
                  style={{
                    background: `url(${topic.img})`,
                    marginBottom: 5,
                    height: 120,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div className="px-6 py-4">
                  <div className="mb-2 text-xl font-bold">{topic.title}</div>
                  <p className="text-base text-gray-500">{topic.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
            Start developing on Polkadot
          </h1>
          <ModuleListSection
            modules={[
              {
                title: 'Substrate',
                description: `Substrate is the primary blockchain SDK used by developers to create the parachains that make up the Polkadot network.`,
                url: '/polkadot/substrate',
                img: '/static/images/substrate_banner.png',
                released: true,
              },
              {
                title: 'Polkadot Network',
                description: `Implementation of a node for the Polkadot Network using Substrate framework`,
                url: '/polkadot/polkadot-network',
                img: '/static/images/polkadot_network_banner.png',
                released: false,
              },
              {
                title: 'Cumulus',
                description: `Cumulus is a set of tools for writing Substrate-based Polkadot parachains.`,
                url: '/polkadot/cumulus',
                img: '/static/images/cumulus_banner.png',
                released: false,
              },
            ]}
          />
        </div>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
            Courses made by TheLowLevelers
          </h1>
          <ModuleListSection modules={rustCourses} />
          <ModuleListSection modules={pbaBookCourses} />
        </div>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
            Other Polkadot Communities
          </h1>
          <div className="lg:flex lg:justify-evenly">
            {[
              {
                title: 'Polkadot for Vietnamese 🇻🇳',
                description:
                  'TheLowLevelers and Polkadot SEA jointly manage a sub-community catering to Vietnamese tech enthusiasts. This initiative provides materials and resources in Vietnamese, fostering a developer-friendly environment for the local tech community.',
                img: '/static/images/polkadot/polkadot.jpg',
                url: '/polkadot/vn/',
              },
            ].map((topic) => (
              <div
                key={topic.title}
                className="mx-3 my-5 overflow-hidden rounded bg-gray-900 shadow-lg"
              >
                <div
                  style={{
                    background: `url(${topic.img})`,
                    marginBottom: 5,
                    height: 120,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div className="px-6 py-4">
                  <div className="mb-2 text-xl font-bold">{topic.title}</div>
                  <p className="text-base text-gray-500">{topic.description}</p>
                  <div style={{ margin: '30px 0px 20px 0px' }}>
                    <Link
                      href={topic.url}
                      className="mt-5 max-w-lg rounded bg-primary-600 px-5 py-2"
                    >
                      Learn more
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

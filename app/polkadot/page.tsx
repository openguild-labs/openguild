import EventImageGallery from '@/components/EventImageGallery'
import Link from '@/components/Link'
// import NewsletterForm from 'pliny/ui/NewsletterForm'
// import projectsData from '@/data/projectsData'
// import Card from '@/components/Card'
// import Marquee from 'react-fast-marquee'
import { allBlogs } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import Marquee from 'react-fast-marquee'
// import Image from 'next/image'
// import { BlogArticleList } from '@/components/BlogArticleList'
// import Marquee from 'react-fast-marquee'
// import Card from '@/components/Card'
// import projectsData from '@/data/projectsData'

const MAX_DISPLAY = 3

export default function PolkadotMainPage() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  const courses = [
    {
      title: 'Rust Practices with Rustlings',
      description: `Solving Rustlings problems to learn Rust interactively.`,
      url: '/tags/rust-course-rustlings',
      img: '/static/images/learn-rust.png',
      released: true,
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
    {
      title: 'Complete Substrate Kitties Course',
      description: `Learn a complete pallet development with Substrate Kitties`,
      url: 'https://github.com/openguild-labs/substrate-kitites',
      img: '/static/images/polkadot/substrate-kitties.png',
      released: true,
    },
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
  ].sort((ca, cb) => (cb.released ? 1 : -1) - (ca.released ? 1 : -1))

  const workshops = [
    {
      title: 'Introduction to Polkadot SDK - Substrate',
      description: 'Framework to build blockchain with ease.',
      url: 'https://docs.google.com/presentation/d/111Oc9ugmJW984SjAYhlnD1cX51RpRgt5/edit?usp=sharing&ouid=114747115887247911480&rtpof=true&sd=true',
      img: '/static/images/polkadot/workshops/workshop-01.png',
      released: true,
    },
    {
      title: 'Blockchain Builder Tool: Substrate & OpStack',
      description: `Introducing the similarities and architecture of Substrate and OpStack.`,
      url: 'https://docs.google.com/presentation/d/1P4KHHwOQqmJDaXz2czjCU-F_mMe_U03xJEJGXlMEF4Y/edit?usp=sharing',
      img: '/static/images/polkadot/workshops/workshop-02.png',
      released: true,
    },
    {
      title: 'Building Rust Production-Ready System',
      description: `Walk through key features of Rust and how it is applied in the real world scalable system`,
      url: 'https://docs.google.com/presentation/d/13ebc9cS-0CWTCUDC2V1pfuBQR5cXTRj1/edit?usp=sharing&ouid=114747115887247911480&rtpof=true&sd=true',
      img: '/static/images/polkadot/workshops/workshop-03.png',
      released: true,
    },
    {
      title: 'In and Out of DePIN on Polkadot',
      description: `Exploring the in and out of the decentralized physical infrastructure network on Polkadot`,
      url: 'https://docs.google.com/presentation/d/1PHDHAzBbuMfue1z2XMzpa2sU9YJ1q0zc/edit?usp=sharing&ouid=114747115887247911480&rtpof=true&sd=true',
      img: '/static/images/polkadot/workshops/workshop-04.png',
      released: true,
    },
    {
      title: 'Developing Rust Applications',
      description: `Introducing Rust language ecosystem and technical stack for building applications using Rust`,
      url: 'https://docs.google.com/presentation/d/1s0jqtgt3DYMfYU7k_gaNOLFR9vMo6rrjJULIak2KdMU/edit?usp=sharing',
      img: '/static/images/polkadot/workshops/workshop-05.png',
      released: true,
    },
    {
      title: 'JAM: Demystifying the evolution of Polkadot',
      description: `Jam introduces a decentralized hybrid system offering smart-contract functionality structured...`,
      url: 'https://docs.google.com/presentation/d/1g9WSTcpS3M1cM_lSSKdHak0s_dm_LVYB/edit?usp=sharing&ouid=114747115887247911480&rtpof=true&sd=true',
      img: '/static/images/polkadot/workshops/workshop-06.png',
      released: true,
    },
    {
      title: 'From Personal Computer to Polkadot Ubiquitous Computing Engine',
      description: `Introducing history of the computing machine and how the next generation of computation is invented`,
      url: 'https://docs.google.com/presentation/d/1TaQ1j5FEesoOYh3BKEkfjBwP7yuBexP-/edit?usp=sharing&ouid=114747115887247911480&rtpof=true&sd=true',
      img: '/static/images/polkadot/workshops/workshop-06.png',
      released: true,
    },
  ].sort((ca, cb) => (cb.released ? 1 : -1) - (ca.released ? 1 : -1))

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
      <div className="flex-wrap lg:flex lg:justify-evenly">
        <Marquee>
          {modules.map((topic) => (
            <div
              key={topic.title}
              style={{ maxWidth: 320, width: '100%', paddingBottom: 20 }}
              className="mx-2 my-5 overflow-hidden rounded bg-white shadow-lg"
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
                    <Link
                      href={topic.url}
                      className="mt-5 max-w-lg rounded bg-primary-600 px-5 py-2 text-white"
                    >
                      Learn more
                    </Link>
                  </div>
                ) : (
                  <div
                    className="mt-5 rounded bg-gray-200 px-5 py-2 text-gray-600"
                    style={{ margin: '30px 0px 20px 0px', width: 'fit-content' }}
                  >
                    Coming Soon
                  </div>
                )}
                <p className="text-base text-gray-500">{topic.description}</p>
              </div>
            </div>
          ))}
        </Marquee>
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
                background: "url('/static/images/landing-image.webp')",
                borderRadius: '10px',
                marginBottom: 50,
                height: 300,
                backgroundSize: 'cover',
                objectFit: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <h1 className="mb-2 text-4xl font-bold tracking-tighter md:text-7xl lg:text-5xl">
              An open community driven <br className="hidden lg:block"></br> by Web 3.0 builders
              elevating Polkadot
            </h1>
            <br></br>
            <p className="mx-auto  text-xl font-normal leading-relaxed text-gray-600 dark:text-gray-300 lg:w-2/3">
              <span className="font-bold text-primary-500">OpenGuild</span> is a community of Web
              3.0 builders who contribute to open-source projects, learn, and connect enthusiasts
              together with a focus on expanding the Polkadot ecosystem.{' '}
              <a className="text-primary-500" href="/about">
                Read more
              </a>
            </p>
          </div>
        </div>
      </section>
      <br />
      <div className="flex items-center justify-center">
        <a
          href="https://discord.gg/27zpCJDCnx"
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
            Learn more about us
          </h1>
          <div className="lg:flex lg:justify-evenly">
            {[
              {
                title: 'Community Handbook',
                description: 'Find all information about OpenGuild community in the handbook',
                img: '/static/images/community_handbook.jpg',
                href: 'https://handbook.openguild.wtf',
              },
              {
                title: 'Discussion Forum',
                description: 'Learn more from other community members from the discussion forum',
                img: '/static/images/discussion_forum.jpg',
                href: 'https://github.com/orgs/openguild-labs/discussions',
              },
              {
                title: 'Members',
                description: 'Discover talented people in the community',
                img: '/static/images/members.jpg',
                href: 'http://openguild.wtf/about',
              },
            ].map((topic) => (
              <Link
                href={topic.href}
                key={topic.title}
                style={{
                  minWidth: 300,
                }}
                className="mx-3 my-5 max-w-lg overflow-hidden rounded bg-white shadow-lg"
              >
                <div
                  style={{
                    background: `url(${topic.img})`,
                    marginBottom: 5,
                    height: 170,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div className="px-6 py-4">
                  <div className="mb-2 text-xl font-bold">{topic.title}</div>
                  <p className="text-base text-gray-500">{topic.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
            What do we do?
          </h1>
          <div className="lg:flex">
            {[
              {
                title: 'Events',
                description:
                  'Weekly meetup to share about the technological advancement in the Polkadot ecosystem and establish hackathon for developers to "build to earn" with the community',
                img: '/static/images/events.jpg',
              },
              {
                title: 'Research & Development',
                description:
                  'Research the interesting topics of Polkadot blockchain and develop tools for the open-source community',
                img: '/static/images/research_and_development.png',
              },
            ].map((topic) => (
              <Link
                href={'https://handbook.openguild.wtf'}
                key={topic.title}
                style={{
                  minWidth: 350,
                  width: '100%',
                }}
                className="my-55max-w-lg mx-3 overflow-hidden rounded bg-white pb-2 shadow-lg"
              >
                <div
                  style={{
                    background: `url(${topic.img})`,
                    marginBottom: 5,
                    height: 150,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div className="px-6 py-4">
                  <div className="mb-2 text-xl font-bold">{topic.title}</div>
                  <p className="text-base text-gray-500">{topic.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="divide-y divide-gray-200 dark:divide-gray-700">
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
      </div> */}
      {/* <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
            Projects built by us
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            List of projects made or contributed by OpenGuild
          </p>
          <Marquee autoFill speed={150}>
            {projectsData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </Marquee>
        </div>
      </div> */}
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
            Our Past Workshops
          </h1>
          <ModuleListSection modules={workshops} />
        </div>
      </div>

      {/* <EventImageGallery /> */}

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
                  'OpenGuild and Polkadot SEA jointly manage a sub-community catering to Vietnamese tech enthusiasts. This initiative provides materials and resources in Vietnamese, fostering a developer-friendly environment for the local tech community.',
                img: '/static/images/polkadot/polkadot.jpg',
                url: '/polkadot/vn/',
              },
            ].map((topic) => (
              <div
                key={topic.title}
                className="mx-3 my-5 overflow-hidden rounded bg-white shadow-lg"
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
                      className="mt-5 max-w-lg rounded bg-primary-600 px-5 py-2 text-white"
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

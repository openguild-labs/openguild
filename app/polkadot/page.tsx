// import EventImageGallery from '@/components/EventImageGallery'
import Link from '@/components/Link'
import { allBlogs } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import Marquee from 'react-fast-marquee'
import React from 'react'
import FeaturedSectionContainer from '@/components/FeaturedSectionContainer'
import { BlogArticleList } from '@/components/BlogArticleList'
import MembersShowcaseList from '@/components/MembersShowcaseList'
import { courses, generalVideos, researchArticles, workshops } from 'app/constants'
import { ModuleListSection } from '@/components/ModuleListContainer'
import EventImageGallery from '@/components/EventImageGallery'

const MAX_DISPLAY = 5

export default function PolkadotMainPage() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)

  return (
    <>
      <section className="body-font text-black">
        <div className="container mx-auto px-1 pt-20 lg:px-1 lg:py-1">
          <div className="mb-2 flex w-full flex-col text-left md:text-center">
            <div
              style={{
                background: "url('/static/images/polkadot/jumbotron/OG_new_branding.webp')",
                borderRadius: '10px',
                marginBottom: 50,
                height: 300,
                rotate: '-1.5deg',
                width: '100%',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
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
      <div className="mt-3 flex items-center justify-center">
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div className="mx-auto my-2 w-full lg:mx-1 lg:w-fit">
            <a
              href="https://github.com/openguild-labs"
              className="flex items-center rounded-lg border border-gray-900 bg-gray-800 px-6 py-2 text-sm font-medium text-white shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
            >
              <img width={20} style={{ marginRight: 15 }} src="/static/images/github-icon.png" />
              <span>Visit OpenGuild Labs</span>
            </a>
          </div>
          <div className="mx-auto my-2 w-full lg:mx-1 lg:w-fit">
            <a
              href="https://www.facebook.com/search/groups/?q=OpenGuild"
              className="flex items-center rounded-lg border border-gray-900 bg-gray-800 px-6 py-2 text-sm font-medium text-white shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
            >
              <svg
                fill="#0e76a8"
                height="15px"
                width="15px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 310 310"
                stroke="#0e76a8"
                style={{ marginRight: 10 }}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <g id="XMLID_801_">
                    {' '}
                    <path
                      id="XMLID_802_"
                      d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73 C77.16,101.969,74.922,99.73,72.16,99.73z"
                    ></path>{' '}
                    <path
                      id="XMLID_803_"
                      d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4 c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
                    ></path>{' '}
                    <path
                      id="XMLID_804_"
                      d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599 c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319 c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995 C310,145.43,300.549,94.761,230.454,94.761z"
                    ></path>{' '}
                  </g>{' '}
                </g>
              </svg>
              <span>OpenGuild Linkedin</span>
            </a>
          </div>
          <div className="mx-auto my-2 w-full lg:mx-1 lg:w-fit">
            <a
              href="https://x.com/openguildwtf/"
              className="flex items-center rounded-lg border border-gray-900 bg-gray-800 px-6 py-2 text-sm font-medium text-white shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
            >
              <img width={20} style={{ marginRight: 15 }} src="/static/images/x-icon.png" />
              <span>Follow us on X</span>
            </a>
          </div>
        </div>
      </div>
      <br />
      <MembersShowcaseList />
      <EventImageGallery />
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
                title: 'Join our Activities',
                description: 'Participate in community activities to learn and earn rewards',
                img: '/static/images/discussion_forum.jpg',
                href: 'https://github.com/orgs/openguild-labs/discussions',
              },
              {
                title: 'Become a Member',
                description: 'Discover talented people in the community',
                img: '/static/images/members.jpg',
                href: 'https://handbook.openguild.wtf/general-information/membership',
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
            Watch our latest videos
          </h1>
          <div className="flex-wrap lg:flex" style={{ justifyContent: 'space-evenly' }}>
            {generalVideos.map((video) => (
              <iframe
                key={video.url}
                width="100%"
                height="300px"
                style={{ borderRadius: 10, margin: '5px', maxWidth: 550 }}
                src={video.url}
                title="YouTube video player"
                allowFullScreen
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            ))}
          </div>
        </div>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <FeaturedSectionContainer />
        </div>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
            Learn Polkadot from our Courses
          </h1>
          <ModuleListSection marquee={true} modules={courses} />
        </div>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
            Our Past Workshops
          </h1>
          <ModuleListSection marquee={false} modules={workshops} />
        </div>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
            Research Articles
          </h1>
          <ModuleListSection
            cardStyle={{ maxWidth: 500 }}
            marquee={false}
            modules={researchArticles}
          />
        </div>
      </div>

      {/* <EventImageGallery /> */}

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
            Announcement & Latest Blog Posts
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Learn technical topics through our blog posts
          </p>
        </div>
        <BlogArticleList
          posts={posts
            .filter((post) => post.tags.includes('lang-vn') && post.tags.includes('polkadot'))
            .slice(0, 5)}
        />
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}

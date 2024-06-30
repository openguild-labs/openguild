// import EventImageGallery from '@/components/EventImageGallery'
import Link from '@/components/Link'
import { allBlogs } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import Marquee from 'react-fast-marquee'
import React from 'react'
import FeaturedSectionContainer from '@/components/FeaturedSectionContainer'
import { BlogArticleList } from '@/components/BlogArticleList'

const MAX_DISPLAY = 5

export default function PolkadotMainPage() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  const courses = [
    {
      title: 'Substrate Course: NFT Blockchain',
      description: `Substrate is the primary blockchain SDK used by developers to create the parachains that make up the Polkadot network.`,
      url: 'https://github.com/openguild-labs/substrate-kitties',
      img: '/static/images/polkadot/workshops/SubstrateKitties.png',
      released: true,
    },
    {
      title: 'Substrate Course: Nominated Proof of Stake Blockchain',
      description: `Learn how to configure the nominated proof of stake mechanism to your Substrate-based blockchain`,
      url: 'https://github.com/openguild-labs/substrate-npos',
      img: '/static/images/polkadot/workshops/SubstrateNpos.png',
      released: true,
    },
    {
      title: 'Rust Programming Course: OpenRust',
      description: `Substrate is the primary blockchain SDK used by developers to create the parachains that make up the Polkadot network.`,
      url: 'https://github.com/openguild-labs/open-rust',
      img: '/static/images/polkadot/workshops/OpenRust.png',
      released: true,
    },
    {
      title: 'Prepare for PBA: Rust State Machine Walkthrough',
      description: `Learn the concept of state machine through Rust hands-on experiment with Polkadot Blockchain Academy exercises`,
      url: 'https://youtu.be/EIwDwqxaHN0?si=12YoyL65B1cmBZB8',
      img: '/static/images/polkadot/prepare-for-pba-001.png',
      released: true,
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
      img: '/static/images/polkadot/workshops/workshop-02.webp',
      released: true,
    },
    {
      title: 'Building Rust Production-Ready System',
      description: `Walk through key features of Rust and how it is applied in the real world scalable system`,
      url: 'https://docs.google.com/presentation/d/13ebc9cS-0CWTCUDC2V1pfuBQR5cXTRj1/edit?usp=sharing&ouid=114747115887247911480&rtpof=true&sd=true',
      img: '/static/images/polkadot/workshops/workshop-03.webp',
      released: true,
    },
    {
      title: 'In and Out of DePIN on Polkadot',
      description: `Exploring the in and out of the decentralized physical infrastructure network on Polkadot`,
      url: 'https://docs.google.com/presentation/d/1PHDHAzBbuMfue1z2XMzpa2sU9YJ1q0zc/edit?usp=sharing&ouid=114747115887247911480&rtpof=true&sd=true',
      img: '/static/images/polkadot/workshops/Community_Call_4.webp',
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
      img: '/static/images/polkadot/workshops/Community_Call_6.webp',
      released: true,
    },
    {
      title: 'From Personal Computer to Polkadot Ubiquitous Computing Engine',
      description: `Introducing history of the computing machine and how the next generation of computation is invented`,
      url: 'https://docs.google.com/presentation/d/1TaQ1j5FEesoOYh3BKEkfjBwP7yuBexP-/edit?usp=sharing&ouid=114747115887247911480&rtpof=true&sd=true',
      img: '/static/images/polkadot/workshops/Community_Call_4.2.webp',
      released: true,
    },
    {
      title: 'Maximizing Polkadot Capabilities with POP network',
      description: `Introducing about the R0GUE team and their startup story behinds the invention of the POP network`,
      url: 'https://docs.google.com/presentation/d/1FQkUhO416KiPcMOa4aOfp8iKAoxKJpbACZ6-p315eMo/edit?usp=sharing',
      img: '/static/images/polkadot/workshops/Community_Call_10.webp',
      released: true,
    },
    {
      title: 'Getting Started with Polkadot SDK',
      description: `Introducing the powerful Polkadot SDK for developing a blockchain with speed and security.`,
      url: 'https://docs.google.com/presentation/d/1qH6SvWcueV2XglbVSiB3abXnBEQS9aE-AkYN4qB1He8/edit?usp=sharing',
      img: '/static/images/polkadot/workshops/Community_Call_13.webp',
      released: true,
    },
  ].sort((ca, cb) => (cb.released ? 1 : -1) - (ca.released ? 1 : -1))

  const ModuleListSection = ({
    modules,
    marquee,
  }: {
    modules: {
      title: string
      description: string
      url: string
      img: string
      released: boolean
    }[]
    marquee: boolean
  }) => {
    const content = modules.map((topic) => (
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
    ))
    return (
      <div className="flex-wrap lg:flex lg:justify-evenly">
        {marquee ? (
          <Marquee autoFill>{content}</Marquee>
        ) : (
          <React.Fragment>{content}</React.Fragment>
        )}
      </div>
    )
  }

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
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="-204.79995 -41.33325 2074.9329 1647.9995"
              >
                <path
                  d="M1365.333 682.667C1365.333 305.64 1059.693 0 682.667 0 305.64 0 0 305.64 0 682.667c0 340.738 249.641 623.16 576 674.373V880H402.667V682.667H576v-150.4c0-171.094 101.917-265.6 257.853-265.6 74.69 0 152.814 13.333 152.814 13.333v168h-86.083c-84.804 0-111.25 52.623-111.25 106.61v128.057h189.333L948.4 880H789.333v477.04c326.359-51.213 576-333.635 576-674.373"
                  fill="#1877f2"
                />
                <path
                  d="M948.4 880l30.267-197.333H789.333V554.609C789.333 500.623 815.78 448 900.584 448h86.083V280s-78.124-13.333-152.814-13.333c-155.936 0-257.853 94.506-257.853 265.6v150.4H402.667V880H576v477.04a687.805 687.805 0 00106.667 8.293c36.288 0 71.91-2.84 106.666-8.293V880H948.4"
                  fill="#fff"
                />
              </svg>
              <span>Facebook Communities</span>
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
      <Marquee autoFill style={{ overflow: 'hidden', marginTop: 10 }}>
        <div style={{ display: 'flex' }}>
          {[
            '🔥 chasechung',
            '🤡 cris.999',
            'ippo3496 😀',
            'anhanh22 😃',
            'phamhuynhanhcn20a 😄',
            'trongdth 😁',
            'leopham4259 😆',
            'danielbui12 😅',
            'hson91 😂',
            'cris.999 🤣',
            'danghoanglam 😊',
            'duonghb53 😇',
            'phamanhtan 🙂',
            'zrus 🙃',
            'violet_058 😉',
            'minhngoc169 😍',
            '.taivisao 😘',
            'synguyen2001 😗',
            'rich_6721 😙',
            'nozhoang 😚',
            'mintduck_. 😋',
            'polkapat 😛',
            'quantroy19 😜',
            'wa7n3 🤪',
            'congnghiakhiem 😝',
            'longphu 🤑',
            'tanhdam 🤗',
            'tieuyang 🤓',
            'mkhoaa 😎',
            'truongnguyenp 🤡',
            'caothien7881 🤠',
            'elenuxui 😏',
            'oliv.sund 😶',
            'shelvenzhou 😐',
            'h4x3rotab 😑',
            'arice.whynot 😒',
            'maryxoxf 🙄',
            'itsmia_225 😬',
            'zoey14121 🤥',
            'tranhuuhuy297 😌',
            'aseiphiroa 😔',
            'chris.casini 😪',
            'go123 😴',
            'langdon0003 😷',
            'spectre_harsh07 🤒',
            'katafo 🤕',
            'linh085890 🤑',
            'jingi0703 🤠',
            'sanhey 🤡',
            'synaeasthesia 😎',
            'samevans_1 🤓',
            'norencityx 🤗',
            'tiennguyen 🤔',
            'marciochen 😳',
            'nguyetne_ 😵',
            'duychamhoc 😟',
            'name_unknow 😞',
            'hqphuoc 😕',
            'dvdplassie 😖',
            'leomarlo 😣',
            'hiamthach 😢',
            'crishuntervn 😭',
            'ngtantai1001 😡',
            'tpn281 😠',
            'near9363 😤',
            'mingnhan 🤬',
            'thanhvuong1105 😱',
            'lotus06695 😨',
            'mysgmers5230 😰',
            'tranquanghai9141 😥',
            'huongcin 😓',
            'hoang4411 😩',
            'wise_armadillo_03305 🤯',
            'andyd5949 😬',
            'tranngocdang1088 😦',
            'tiger9644 😧',
            'thaiha7066 😨',
            'lutinkhang 😩',
            'haing99 😬',
            'tyler.eth6923 😓',
            'phivu. 😢',
            'bacxiukk 😭',
            'luanvg 😡',
            'lamthuy1904_20183 😠',
            'bigtava 😤',
            'tung1102 🤬',
            'luuducdung 😱',
            'giahuy00755 😨',
            'tina_lt 😰',
            'thailosoquit17 😥',
            'cyyn312_34568 😓',
            'tracycbis 😩',
            '0xbcmarin 🤯',
            'sammydang 😦',
            'mr.will0713 😧',
            'ceomilliontv 😨',
            'caoquoc10 😩',
            'verabc 😬',
            'no_c1ip 😓',
            'onniti. 😢',
          ].map((item, index) => (
            <h3
              key={item}
              style={{
                backgroundColor: 'white',
                fontWeight: 'bold',
                margin: '0px 10px',
                rotate: index % 2 === 1 ? '4deg' : '-5deg',
              }}
            >
              {item}
            </h3>
          ))}
        </div>
      </Marquee>
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
            Watch our latest videos
          </h1>
          <div className="flex-wrap lg:flex" style={{ justifyContent: 'space-evenly' }}>
            {[
              { url: 'https://www.youtube.com/embed/rT2ydAarNG8?si=SKBa4t5hMRQp7kX_' },
              { url: 'https://www.youtube.com/embed/-GLRrdwtoqg?si=DNLPMGlDRfWdm36q' },
              { url: 'https://www.youtube.com/embed/L4tBpW5u8WM?si=bd71NzfrJ9D0Y3bx' },
            ].map((video) => (
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
          <ModuleListSection marquee={true} modules={[...courses]} />
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
      {/* 
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
      </div> */}
    </>
  )
}

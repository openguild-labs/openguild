import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import Marquee from 'react-fast-marquee'
import { allBlogs } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'

const MAX_DISPLAY = 3

export default function PolkadotMainPage() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
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
              }}
            />
            <h1 className="mb-2 text-4xl font-bold tracking-tighter text-white md:text-7xl lg:text-5xl">
              <span>Nghiên cứu công nghệ cốt lõi </span>
              <br className="hidden lg:block"></br>
              của mạng blockchain Polkadot
            </h1>
            <br></br>
            <p className="mx-auto  text-xl font-normal leading-relaxed text-gray-600 dark:text-gray-300 lg:w-2/3">
              <span className="font-bold text-primary-500">TheLowLevelers</span> là một cộng đồng mã
              nguồn mở và phi lợi nhuận. Mục đích cốt yếu của tụi mình là để giúp tất cả mọi người
              hiểu thêm về công nghệ theo tư duy nguyên bản (First Principle Thinking). Tiếp cận
              công nghệ từ các phần tử căn nguyên nhất.
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
          <span>Trở thành một phần của TheLowLevelers x Polkadot 🇻🇳</span>
        </a>
      </div>
      <br />
      <br />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
            TheLowLevelers và Polkadot
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Chào bạn, mình là <span className="font-bold text-primary-500">Tín Chung</span>, là một
            "không ai cả" và thành viên của{' '}
            <span className="font-bold text-primary-500">TheLowLevelers</span>. Mình có một khoảng
            thời gian tầm 2 năm làm việc dưới vị trí là Blockchain Developer cho các công ty ở hệ
            sinh thái Ethereum, Lightning Network và Solana. Mặc dù vậy, mình cảm thấy những gì mình
            được học và làm chưa đủ để thoả mãn sự tò mò của mình.
          </p>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Là một lập trình viên, mình luôn có một khao khát được làm việc với những công nghệ phức
            tạp nhất và đến hiện tại. Sau khi có cơ hội nói chuyện và tìm hiểu thêm những gì mà
            Polkadot đem lại cho hạ tầng Internet trên toàn thế giới hiện tại, mình và
            TheLowLevelers có mong muốn phát triển cộng đồng để nghiên cứu sau hơn về các công nghệ
            và khả năng của Polakdot.
          </p>
        </div>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
            Mục đích của cộng đồng
          </h1>
          <div className="lg:flex lg:justify-evenly">
            {[
              {
                title: 'Cùng nhau học hỏi và đóng góp vào các dự án trong hệ sinh thái',
                description:
                  'To catch up with the latest development in distributed system, blockchain is in our priority R&D queue. There are thousands of smart contract tutorial development out there, but only a tiny number of tutorials for blockchain engineering.',
              },
              {
                title: 'Nghiên cứu mã nguồn và công nghệ của Polkadot',
                description:
                  'We break down and implement retro gaming consoles like Nintendo Switch and Nintendo Entertainment System (NES) experimetally to deep dive into the architecture of its subtle system',
              },
            ].map((topic) => (
              <div
                key={topic.title}
                className="mx-3 my-5 max-w-sm overflow-hidden rounded bg-gray-900 shadow-lg"
              >
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
            Thông báo và bài viết mới nhất
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.blogSectionDescription}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
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

import { BlogArticleList } from '@/components/BlogArticleList'
import { allBlogs } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'

export default function PolkadotSubstrateMainPage() {
  const sortedPosts = sortPosts(allBlogs).reverse()
  const posts = allCoreContent(sortedPosts)
  return (
    <div>
      <section className="body-font text-black">
        <div className="container mx-auto px-5 pt-32 lg:px-4 lg:py-4">
          <div className="mb-2 flex w-full flex-col text-left md:text-center">
            <div
              style={{
                background: "url('/static/images/substrate_banner.png')",
                borderRadius: '10px',
                marginBottom: 50,
                height: 300,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <h1 className="mb-2 text-4xl font-bold tracking-tighter text-white md:text-7xl lg:text-5xl">
              <span>Polkadot SDK - Substrate</span>
            </h1>
            <br></br>
            <p className="mx-auto  text-xl font-normal leading-relaxed text-gray-600 dark:text-gray-300 lg:w-2/3">
              <span className="font-bold text-primary-500">Substrate</span> là một bộ công cụ phát
              triển phần mềm được cung cấp bởi Parity Technologies nhằm hỗ trợ phát triển các nút
              blockchain với khả năng cấu hình và mở rộng dễ dàng không phụ thuộc vào trạng thái của
              giao thức mạng blockchain.
            </p>
          </div>
        </div>
      </section>
      <br />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
            Cấp độ: <span className="font-bold text-primary-500">Nhập môn</span>
          </h1>
        </div>
        <BlogArticleList
          posts={posts.filter(
            (post) => post.tags.includes('substrate') && post.tags.includes('beginner')
          )}
        />
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
            Cấp độ: <span className="font-bold text-primary-500">Trung cấp</span>
          </h1>
        </div>
        <BlogArticleList
          posts={posts.filter(
            (post) => post.tags.includes('substrate') && post.tags.includes('intermediate')
          )}
        />
      </div>
    </div>
  )
}

import ListLayout from '@/layouts/ListLayoutWithTags'
import { CoreContent, allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { Blog, allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'

const POSTS_PER_PAGE = 5

export const metadata = genPageMetadata({ title: 'Blog' })

export const filterByTags = (posts: CoreContent<Blog>[], tags: string[]) => {
  return posts.filter((post) =>
    post.tags.some((tag) => tags.some((_tag) => _tag.toLowerCase() === tag.toLowerCase()))
  )
}

export default function BlogPage() {
  const posts = allCoreContent(sortPosts(allBlogs))
  const pageNumber = 1
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return (
    <ListLayout
      posts={filterByTags(posts, ['announcement'])}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="All Posts"
    />
  )
}

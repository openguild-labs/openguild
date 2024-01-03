import { allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { genPageMetadata } from 'app/seo'
import Marquee from 'react-fast-marquee'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
            Core Members
          </h1>
          {allAuthors
            .sort((authorA, authorB) => (authorA.path > authorB.path ? 1 : -1))
            .filter(
              (author) =>
                author.path.includes('1-tin-chung') || author.path.includes('2-cris-nguyen')
            )
            .map((author) => (
              <AuthorLayout key={author.name} content={author}>
                <MDXLayoutRenderer code={author.body.code} />
              </AuthorLayout>
            ))}
        </div>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
            Contributors
          </h1>
          {allAuthors
            .sort((authorA, authorB) => (authorA.path > authorB.path ? 1 : -1))
            .filter(
              (author) =>
                !author.path.includes('1-tin-chung') && !author.path.includes('2-cris-nguyen')
            )
            .map((author) => (
              <AuthorLayout key={author.name} content={author}>
                <MDXLayoutRenderer code={author.body.code} />
              </AuthorLayout>
            ))}
        </div>
      </div>
    </>
  )
}

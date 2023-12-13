import { allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  return (
    <>
      {allAuthors
        .sort((authorA, authorB) => (authorA.path > authorB.path ? 1 : -1))
        .filter(
          (author) => author.path.includes('1-tin-chung') || author.path.includes('2-cris-nguyen')
        )
        .map((author) => (
          <AuthorLayout key={author.name} content={author}>
            <MDXLayoutRenderer code={author.body.code} />
          </AuthorLayout>
        ))}
    </>
  )
}

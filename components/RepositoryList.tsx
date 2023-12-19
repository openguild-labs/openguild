import Link from 'next/link'
import React from 'react'

type Props = {
  resources: {
    title: string
    description: string
    url: string
  }[]
}

const RepositoryList = ({ resources }: Props) => {
  return (
    <div className="flex-wrap justify-center lg:flex">
      {resources.map((topic) => (
        <Link
          key={topic.title}
          href={topic.url}
          style={{ width: 300, paddingTop: 20, paddingBottom: 20 }}
          className="mx-1 my-2 max-w-lg overflow-hidden rounded bg-gray-900 shadow-lg"
        >
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">{topic.title}</div>
            <p className="text-base text-gray-500">{topic.description}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default RepositoryList

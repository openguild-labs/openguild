import { BlogArticleList } from '@/components/BlogArticleList'
import RepositoryList from '@/components/RepositoryList'
import { allBlogs } from 'contentlayer/generated'
import Link from 'next/link'
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
                height: 250,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <h1 className="mb-2 text-3xl font-bold tracking-tighter text-white md:text-7xl lg:text-5xl">
              <span>Polkadot SDK - Substrate</span>
            </h1>
            <br></br>
            <p className="mx-auto  text-xl font-normal leading-relaxed text-gray-600 dark:text-gray-300 lg:w-2/3">
              <span className="font-bold text-primary-500">Substrate</span> is the primary
              blockchain SDK used by developers to create the parachains that make up the Polkadot
              network.
            </p>
          </div>
        </div>
      </section>
      <br />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14">
            Libraries & Repositories
          </h1>
          <h2
            style={{ margin: 0 }}
            className="text-xl leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-2xl md:leading-14"
          >
            Getting started with these below starter templates
          </h2>
          <RepositoryList
            resources={[
              {
                title: 'Substrate Node Template',
                description: `A new FRAME-based Substrate node, ready for hacking.`,
                url: 'https://github.com/substrate-developer-hub/substrate-node-template',
              },
              {
                title: 'Substrate Frontend Template',
                description: `A Polkadot.js API + React based template for building Substrate Front Ends`,
                url: 'https://github.com/substrate-developer-hub/substrate-front-end-template',
              },
              {
                title: 'Substrate Parachain Template',
                description: `Cumulus is a set of tools for writing Substrate-based Polkadot parachains.`,
                url: '/polkadot/cumulus',
              },
            ]}
          />
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14">
            Learning Resources
          </h1>
          <RepositoryList
            resources={[
              {
                title: 'Substrate Official Documentation',
                description: `Substrate documentation includes conceptual, procedural, and reference information for blockchain builders and parachain project teams.`,
                url: 'https://docs.substrate.io/',
              },
              {
                title: 'Substrate Hackathon Knowledge Map',
                description: `The Substrate Knowledge Map provides information that you—as a Substrate hackathon participant—need to know to develop a non-trivial application for your hackathon submission.`,
                url: 'https://github.com/substrate-developer-hub/hackathon-knowledge-map',
              },
              {
                title: 'Polkadot Blockchain Academy Book',
                description: 'Official open-source book for Polkadot Blockchain Academy programs.',
                url: 'https://polkadot-blockchain-academy.github.io/pba-book/',
              },
              {
                title: 'Awesome Substrate',
                description: `A curated list of awesome projects and resources related to the Substrate blockchain development framework.`,
                url: 'https://github.com/substrate-developer-hub/awesome-substrate',
              },
              {
                title: 'Substrate Recipes',
                description: 'A Hands-On Cookbook for Aspiring Blockchain Chefs',
                url: 'https://wiki.kabocha.network/recipes/',
              },
            ]}
          />
        </div>
      </div>
    </div>
  )
}

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
            <h1 className="mb-2 text-4xl font-bold tracking-tighter text-white md:text-7xl lg:text-5xl">
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
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
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
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
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
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
            Developer Ecosystem
          </h1>
          <RepositoryList
            resources={[
              {
                title: 'ink!athon Boilerplace',
                description: `Full-Stack DApp Boilerplate for Substrate and ink! Smart Contracts`,
                url: 'https://github.com/scio-labs/inkathon',
              },
              {
                title: 'Chopsticks',
                description: `Create parallel reality of your Substrate network.`,
                url: 'https://github.com/AcalaNetwork/chopsticks',
              },
              {
                title: 'offline-election',
                description: 'Tool to predict nominated proof-of-stake elections.',
                url: 'https://github.com/paritytech/substrate-debug-kit/tree/master/offline-election',
              },
              {
                title: 'offchain::ipfs',
                description: 'Substrate infused with IPFS.',
                url: 'https://rs-ipfs.github.io/offchain-ipfs-manual/',
              },
              {
                title: 'polkadot-js-bundle',
                description: 'A standalone JS bundle that contains Polkadot{JS} libraries.',
                url: 'https://github.com/shawntabrizi/polkadot-js-bundle',
              },
              {
                title: 'polkadot-launch',
                description: 'Simple CLI tool to launch a local Polkadot test network.',
                url: 'https://github.com/shawntabrizi/polkadot-launch',
              },
              {
                title: 'polkadot-runtime-prom-exporter',
                description: 'A Prometheus exporter for Polkadot runtime metrics.',
                url: 'https://github.com/paritytech/polkadot-runtime-prom-exporter/',
              },
              {
                title: 'polkadot-scripts',
                description: 'A collection of scripts Parity uses to diagnose Polkadot/Kusama.',
                url: 'https://github.com/paritytech/polkadot-scripts',
              },
              {
                title: 'polkadot-starship',
                description: 'Another tool to launch a local Polkadot test network.',
                url: 'https://github.com/koute/polkadot-starship',
              },
              {
                title: 'srtool-actions',
                description:
                  'GitHub actions to easily use the srtool Docker image to build your own runtime.',
                url: 'https://github.com/chevdor/srtool-actions',
              },
              {
                title: 'srtool-cli',
                description: 'CLI frontend for the srtool Docker image.',
                url: 'https://github.com/chevdor/srtool-cli',
              },
              {
                title: 'srtool',
                description: 'Docker image to deterministically build a runtime.',
                url: 'https://github.com/paritytech/srtool',
              },
              {
                title: 'subsee',
                description: 'CLI to inspect metadata of a Substrate node as JSON.',
                url: 'https://github.com/ascjones/subsee',
              },
              {
                title: 'subalfred',
                description: 'An all-in-one Substrate development toolbox.',
                url: 'https://github.com/hack-ink/subalfred',
              },
              {
                title: 'substrate-balance-calculator',
                description: 'Breakdown the balances of your Substrate account.',
                url: 'https://github.com/shawntabrizi/substrate-balance-calculator',
              },
              {
                title: 'substrate-balance-graph',
                description:
                  'Create a graph of the token balance over time of a Substrate address.',
                url: 'https://github.com/shawntabrizi/substrate-balance-graph',
              },
              {
                title: 'substrate-graph-benchmarks',
                description: 'Graph the benchmark output of FRAME pallets.',
                url: 'https://github.com/shawntabrizi/substrate-graph-benchmarks',
              },
              {
                title: 'substrate-js-utils',
                description:
                  'A set of useful JavaScript utilities for Substrate that uses the Polkadot{JS} API.',
                url: 'https://github.com/shawntabrizi/substrate-js-utilities',
              },
              {
                title: 'substrate-society',
                description: 'A basic front-end for the FRAME Society pallet.',
                url: 'https://github.com/shawntabrizi/substrate-society',
              },
              {
                title: 'substrate-toml-lint',
                description:
                  'A toml parser and checker to avoid common errors in Substrate projects.',
                url: 'https://github.com/shawntabrizi/substrate-toml-lint',
              },
              {
                title: 'subwasm',
                description: 'CLI to inspect a runtime WASM blob offline.',
                url: 'https://github.com/chevdor/subwasm',
              },
              {
                title: 'sup',
                description: 'Command line tool for generating or upgrading a Substrate node.',
                url: 'https://github.com/clearloop/sup',
              },
              {
                title: 'scale-value',
                description:
                  'Analogous to serde_json but for SCALE; Library to decode arbitrary SCALE encoded bytes.',
                url: 'https://github.com/paritytech/scale-value',
              },
              {
                title: 'scale-decode',
                description:
                  'Decode SCALE bytes into arbitrary custom types by implementing a visitor trait.',
                url: 'https://github.com/paritytech/scale-decode',
              },
              {
                title: 'Aleph.im',
                description:
                  'Scalable, decentralized database, file storage, and computation services for Substrate chains.',
                url: 'https://aleph.im',
              },
              {
                title: 'Archive',
                description: 'Indexing engine for Substrate chains.',
                url: 'https://github.com/paritytech/substrate-archive',
              },
              {
                title: 'Dev Hub Utils',
                description:
                  'Unofficial utilities for working with official Substrate Developer Hub resources.',
                url: 'https://github.com/danforbes/substrate-devhub-utils',
              },
              {
                title: 'Europa',
                description: 'A sandbox for the Substrate runtime execution environment.',
                url: 'https://github.com/patractlabs/europa',
              },
              {
                title: 'Fork Off Substrate',
                description:
                  'Script to help bootstrap a new chain with the state of a running chain.',
                url: 'https://github.com/maxsam4/fork-off-substrate',
              },
              {
                title: 'fudge',
                description: 'Core lib for accessing and manipulating substrate databases.',
                url: 'https://github.com/centrifuge/fudge',
              },
              {
                title: 'Gantree Library',
                description:
                  'A suite of technologies for managing Substrate-powered parachain networks.',
                url: 'https://github.com/gantree-io/gantree-lib-nodejs',
              },
              {
                title: 'Halva',
                description: 'A toolchain for improving the experience of developing on Substrate.',
                url: 'https://github.com/halva-suite/halva',
              },
              {
                title: 'Hydra',
                description: 'A GraphQL framework for Substrate nodes.',
                url: 'https://github.com/Joystream/hydra',
              },
              {
                title: 'Jupiter',
                description:
                  'Testnet for smart contracts written for the FRAME Contracts pallet and ink!.',
                url: 'https://github.com/patractlabs/jupiter',
              },
              {
                title: 'Megaclite',
                description: 'Zero-knowledge tools for the Polkadot ecosystem.',
                url: 'https://github.com/patractlabs/megaclite',
              },
              {
                title: 'Metadata Portal',
                description:
                  'A self-hosted webpage that shows the latest metadata and chain specs for any given network.',
                url: 'https://nova-wallet.github.io/metadata-portal/',
              },
              {
                title: 'Minimark',
                description: 'Implementation of RMRK NFT v1/v2 protocol maintained by KodaDot.',
                url: 'https://github.com/kodadot/packages',
              },
              {
                title: 'Nova Polkadot Utils',
                description:
                  'Contains static info & metadata to support client apps in Polkadot ecosystem.',
                url: 'https://github.com/nova-wallet/nova-utils',
              },
              {
                title: 'Polkadot Vault',
                description: 'Upcycle an unused mobile phone into an air-gapped hardware wallet.',
                url: 'https://signer.parity.io/',
              },
              {
                title: 'Polkadot PANIC',
                description: 'Monitoring and alerting solution for Polkadot nodes by Simply VC.',
                url: 'https://github.com/SimplyVC/panic_polkadot',
              },
              {
                title: 'Polkadot Tool Index',
                description:
                  'List of tools available for your development with Polkadot and any Substrate chain.',
                url: 'https://wiki.polkadot.network/docs/build-tools-index',
              },
              {
                title: 'Polkadot-JS Apps UI',
                description: 'Semi-official block explorer & front-end for Substrate-based chains.',
                url: 'https://polkadot.js.org/apps/',
              },
              {
                title: 'Polkadot-JS Extension',
                description: 'Browser extension for interacting with Substrate-based chains.',
                url: 'https://github.com/polkadot-js/extension',
              },
              {
                title: 'Polkascan',
                description: 'Multi-chain block explorer maintained by Polkascan Foundation.',
                url: 'https://polkascan.io/',
              },
              {
                title: 'Proxy Hot Wallet Demo',
                description:
                  'A demonstration of a secure, convenient, and flexible hot wallet architecture built on Substrate primitives.',
                url: 'https://github.com/emostov/proxy-hot-wallet',
              },
              {
                title: 'Redspot',
                description:
                  'A Truffle-like toolkit for smart contracts for the FRAME Contracts pallet and ink!.',
                url: 'https://github.com/patractlabs/redspot',
              },
              {
                title: 'Sidecar',
                description: 'REST service that runs alongside Substrate nodes.',
                url: 'https://github.com/paritytech/substrate-api-sidecar',
              },
              {
                title: 'SS58 Transform',
                description: "Display key's addresses with all SS58 prefixes.",
                url: 'https://polkadot.subscan.io/tools/ss58_transform',
              },
              {
                title: 'Staking Rewards Collector',
                description:
                  'A script to parse and output staking rewards for a given Kusama or Polkadot address.',
                url: 'https://github.com/w3f/staking-rewards-collector',
              },
              {
                title: 'Subkey',
                description: 'Command line utility for working with cryptographic keys.',
                url: 'https://docs.substrate.io/reference/command-line-tools/subkey/',
              },
              {
                title: 'SubQuery',
                description:
                  'A GraphQL indexer and query service that allows users to easily create indexed data sources and host them online.',
                url: 'https://subquery.network',
              },
              {
                title: 'Nova SubQuery API',
                description:
                  'A SubQuery API implementation for operation history and staking analytics.',
                url: 'https://github.com/nova-wallet/subquery-nova',
              },
              {
                title: 'Subscan',
                description: 'Multi-network explorer for Substrate-based chains.',
                url: 'https://www.subscan.io/',
              },
              {
                title: 'Subsquid',
                description:
                  'An indexing framework (SDK + infrastructure) to quickly and easily turn Substrate and EVM on-chain data into APIs.',
                url: 'https://subsquid.io',
              },
              {
                title: 'Substate',
                description:
                  '100% no-std/wasm compatible Substrate storage key generator library for Rust.',
                url: 'https://github.com/arrudagates/substate',
              },
              {
                title: 'Substrate debug-kit',
                description:
                  'A collection of tools and libraries for debugging Substrate-based chains.',
                url: 'https://github.com/paritytech/substrate-debug-kit',
              },
              {
                title: 'Substrate Docker Builders',
                description:
                  'A set of Dockerfiles and GitHub Actions to auto-build and push a Docker image for Substrate-based chains.',
                url: 'https://github.com/ETeissonniere/substrate-nodeops',
              },
              {
                title: 'Substrate Faucet Bot',
                description: 'Python-based faucet for development purposes.',
                url: 'https://github.com/starkleytech/substrate-faucet',
              },
              {
                title: 'Substrate Graph',
                description: 'GraphQL indexer for Substrate-based chains.',
                url: 'https://github.com/playzero/substrate-graph',
              },
              {
                title: 'Typechain-Polkadot',
                description: 'Helps users to generate typescript types from contract ABIs (ink!).',
                url: 'https://github.com/Supercolony-net/typechain-polkadot',
              },
              {
                title: 'TxWrapper',
                description: 'Helpful library for offline transaction creation.',
                url: 'https://github.com/paritytech/txwrapper',
              },
              {
                title: 'VSCode Substrate',
                description: 'Plugin for Visual Studio Code.',
                url: 'https://marketplace.visualstudio.com/items?itemName=paritytech.vscode-substrate',
              },
              {
                title: 'Polkaholic.io',
                description:
                  'Multi-chain block explorer with API and DeFi support across 40+ parachains.',
                url: 'https://polkaholic.io',
              },
              {
                title: 'SubID',
                description:
                  'An advanced cross-chain portfolio management tool for the Polkadot ecosystem.',
                url: 'https://github.com/dappforce/subid',
              },
              {
                title: 'Subsocial SDK Playground',
                description:
                  'Subsocial JS SDK Playground allows you to fetch spaces, send transactions on blockchain and test the SDK code snippets on the go without the need to download or set up anything locally.',
                url: 'https://play.subsocial.network',
              },
              {
                title: 'Uptest Runtime upgrade tool',
                description:
                  'Uptest command line client and libuptest Rust library are two tools used for debugging storage changes and runtime upgrades.',
                url: 'https://github.com/uptest-sc/uptest',
              },
            ]}
          />
        </div>
      </div>
    </div>
  )
}

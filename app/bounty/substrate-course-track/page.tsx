import { ModuleListSection } from '@/components/ModuleListContainer'
import { substrateCourses } from 'app/constants'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  return (
    <>
      <div
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
        }}
        className="divide-y divide-gray-200 dark:divide-gray-700"
      >
        <div
          style={{
            maxWidth: 1000,
          }}
          className="space-y-2 pb-8 pt-6 md:space-y-5"
        >
          <img
            className="shadow-lg"
            style={{
              borderRadius: '15px',
              overflow: 'hidden',
              width: '100%',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              objectFit: 'cover',
              backgroundPosition: 'center',
            }}
            src="/static/images/polkadot/jumbotron/OG_Bounty_Track_1_full.png"
          />
          <div>
            <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
              <div>
                {[
                  'Total track bounty: $4,500',
                  'Bounty per deliverable: $200-$250',
                  'Extra OG Points: 500 XPs',
                  'Type: Application Required',
                ].map((item, index) => (
                  <button
                    key={`${item}-${index}`}
                    type="button"
                    className="mb-2 me-2 rounded-lg bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 px-5 py-1 text-center text-sm font-medium text-white shadow-lg shadow-pink-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-pink-300 dark:shadow-lg dark:shadow-pink-800/80 dark:focus:ring-pink-800"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <br />
            <h1 className="text-xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">
              How to submit your application?
            </h1>
            <ul className="rounded-lg border border-gray-200 bg-white px-2 text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
              {[
                <span key={'item-3'}>
                  <b>⏰ Duration</b>: <span className="bg-purple-100 font-bold">1 MONTH</span>
                </span>,
                <span key={'item-1'}>
                  Submit the track number and your action plan with the expected delivery date in{' '}
                  <a className="bg-purple-100 font-bold">
                    Substrate Course Track - Application Form
                  </a>
                </span>,
                'Weekly report needs to be submitted on Discord on Saturday everyweek (4 reports in total)',
              ].map((item, index) => (
                <li
                  key={`${item}-${index}`}
                  className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"
                >
                  <div className="flex items-center ps-3">
                    <div className="ms-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      {item}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div style={{ margin: '30px 0px 0px 0px' }}>
              <a
                type="button"
                style={{ width: 'fit-content' }}
                href="https://noteforms.com/forms/open-contribution-bounty-jkedi6"
                className="mx-auto my-5 rounded-lg bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 px-5 py-2.5 text-center text-lg font-medium text-white shadow-lg shadow-purple-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-purple-300 dark:shadow-lg dark:shadow-purple-800/80 dark:focus:ring-purple-800"
              >
                Submit your application
              </a>
            </div>
          </div>
          <br />
          <h1 className="text-xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">
            Preferred Qualification
          </h1>
          <ul className="rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
            {[
              'Must be an active member of OpenGuild',
              'Lowlevelers, Elders, PBA Graduates',
              'Submit your action plan and describe your approaches in a clear way',
              'Has a background in software development or blockchain technology',
              'Proof of commitment to deliver the solution in time',
            ].map((item, index) => (
              <li
                key={`qualification-${index}`}
                className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"
              >
                <div className="flex items-center ps-3">
                  <input
                    checked
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 bg-purple-700 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
                  />
                  <div className="ms-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {item}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <h1 className="text-xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">
            Guidelines
          </h1>
          <p>
            Your content should be technical and easy for the average developers to understand, and
            aim to provide clear and concise explanations of complex topics. All submissions should
            be original work and provide practical insights or examples. You should also include
            code snippets or diagrams where they add value.
          </p>
          <ul className="rounded-lg border border-gray-200 bg-white pr-5 text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
            {[
              <span key={'item-1'}>
                <b className="text-purple-700">Criteria 1:</b> Clear description & purpose of the
                Substrate Course. Your deliverable must be unique at the time of creation and does
                not exist on the market.
              </span>,
              <span key={'item-2'}>
                <b className="text-purple-700">Criteria 2:</b> Detailed explanation on the code
                implementation
              </span>,
              <span key={'item-3'}>
                <b className="text-purple-700">Criteria 3:</b> Table of contents is required
              </span>,
              <span key={'item-4'}>
                <b className="text-purple-700">Criteria 4:</b> Development stages must be broken
                down into small steps (similar to the below). Each step contains the code
                implementation for that specific step. Consider using
                https://github.com/gitorial-sdk/cli to generate the tutorials using Git. Example:
                https://github.com/shawntabrizi/rust-state-machine
              </span>,
              <span key={'item-5'}>
                <b className="text-purple-700">Criteria 5:</b> Your content should be
                well-structured, readable, and easy to follow. It should include clear explanations
                for all code snippets and diagrams.
              </span>,
              <span key={'item-6'}>
                <b className="text-purple-700">Criteria 6:</b> The course should include practical
                examples or real-world scenarios to help learners understand how to apply the
                concepts.
              </span>,
              <span key={'item-7'}>
                <b className="text-purple-700">Criteria 7:</b> It should be open source by default
                (forever) as a public good, promoted by the documentation bounty of OpenGuild and
                the author.
              </span>,
            ].map((item, index) => (
              <li
                key={`guideline-${index}`}
                className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"
              >
                <div className="flex items-center ps-3">
                  <div className="ms-2 w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    {item}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="space-y-2 pb-8 pt-6 md:space-y-5">
            <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
              Examples of Substrate courses
            </h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ModuleListSection
                cardStyle={{ maxWidth: 400 }}
                marquee={true}
                modules={substrateCourses}
              />
            </div>
          </div>
          <div>
            <h1 className="text-xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">
              List of track topics
            </h1>
            <br />
            <div className="relative overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
                <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Topic Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Topic Description
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Bounty
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Reference
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Applicant
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      'Topic Name': 'Substrate Bitcoin blockchain',
                      Description:
                        'Goal: Write a documentation & implementation guidelines for a substrated-based blockchain functions like Bitcoin blockchain. Consensus mechanism is Proof of Work, UTXO account model (optional: has address convertor from Substrate Address to Legacy, SegWit, and Taproot addresses)',
                      Reference: 'https://github.com/substrate-developer-hub/utxo-workshop',
                      Bounty: '250$',
                      Applicant: 'N/A',
                    },
                    {
                      'Topic Name': 'Substrate Proof of History blockchain',
                      Description:
                        'Proof of history is an algorithm blockchain networks use to verify the passage of time of each block to ensure historical data accuracy which is used in a popular blockchain Solana.',
                      Reference: 'https://solana.com/solana-whitepaper.pdf',
                      Bounty: '250$',
                      Applicant: 'N/A',
                    },
                    {
                      'Topic Name': 'Substrate Proof of Stake blockchain',
                      Description:
                        'Proof-of-stake (PoS) protocols are a class of consensus mechanisms for blockchains that work by selecting validators in proportion to their quantity of holdings in the associated cryptocurrency.',
                      Reference:
                        'https://github.com/paritytech/substrate/blob/master/frame/staking/src/lib.rs',
                      Bounty: '200$',
                      Applicant: 'N/A',
                    },
                    {
                      'Topic Name': 'Substrate Delegated Proof of Stake blockchain',
                      Description:
                        'Delegated Proof of Stake (DPoS) is a blockchain consensus mechanism where network users vote and elect delegates to validate the next block.',
                      Reference:
                        'https://docs.moonbeam.network/builders/substrate/interfaces/features/staking/',
                      Bounty: '200$',
                      Applicant: 'N/A',
                    },
                    {
                      'Topic Name': 'Substrate Nominated Proof of Stake blockchain',
                      Description:
                        'Nominated Proof of Stake is a variation of the Proof-of-Stake consensus mechanism that aims to be more democratic, and therefore more fair, than its predecessor. Put simply, it allows token holders to nominate validators to represent them in the block validation process.',
                      Reference: 'https://wiki.polkadot.network/docs/learn-staking',
                      Bounty: '250$',
                      Applicant: 'N/A',
                    },
                    {
                      'Topic Name': 'EVM-compatible Substrate blockchain',
                      Description:
                        'The Ethereum Virtual Machine (EVM) is a virtual computer with the components that enable Ethereum network participants to store data and agree on the state of the data. For a Substrate-based blockchain, the core responsibilities of the EVM are implemented in the EVM pallet.',
                      Reference:
                        'https://docs.substrate.io/tutorials/integrate-with-tools/evm-integration/',
                      Bounty: '250$',
                      Applicant: 'N/A',
                    },
                    {
                      'Topic Name': 'Polkadot-compatible Substrate-based chain (Parachain)',
                      Description:
                        'Parachains are heterogeneous multichain that allow multiple solo chains to connect to the Polkadot Relay chain by procuring a Parachain slot. In this sequence, Parachains are the Layer-1 (L1) blockchains on top of the Layer-0 (L0) Relay chain, and both run in parallel.',
                      Reference:
                        'https://wiki.polkadot.network/docs/build-pdk https://www.zeeve.io/blog/how-to-use-substrate-to-create-parachains-in-polkadot/',
                      Bounty: '200$',
                      Applicant: 'N/A',
                    },
                    {
                      'Topic Name': 'PVM-based Substrate blockchain',
                      Description:
                        'PVM will be the replacement to WASM for a virtual machine on Polkadot written on top of RISC-V ISA. To accomplish this track, you are expected to deliver as far as you can to replace the WASM executor with PVM executor. (This does not need to be production-ready, experimental is accepted)',
                      Reference:
                        'https://wiki.polkadot.network/docs/learn-jam-chain https://github.com/koute/polkavm',
                      Bounty: '200$',
                      Applicant: 'N/A',
                    },
                    {
                      'Topic Name': 'Substrate-based blockchain with OpenGov',
                      Description:
                        'Polkadot uses a sophisticated governance mechanism called OpenGov that allows it to evolve gracefully overtime at the ultimate behest of its assembled stakeholders. The goal is to ensure that most of the stake can always command the network. We want to guide the Substrate learners on how to add the OpenGov functionalities into their Substrate-based blockchain.',
                      Reference:
                        'https://polkadot.network/features/opengov/ https://wiki.polkadot.network/docs/learn-polkadot-opengov',
                      Bounty: '200$',
                      Applicant: 'N/A',
                    },
                    {
                      'Topic Name': 'Substrate blockchain with meta transaction',
                      Description:
                        'Meta transaction is a blockchain interaction where the initiator does not pay the transaction fee. Although they initiate the transaction, it is not sent from their wallet. Instead, the transaction is executed from another wallet using a relay mechanism, facilitated by a smart contract or runtime module, on behalf of the initiator. We want to write a documentation for a Substrate-blockchain that has meta transaction feature enabled.',
                      Reference: 'https://github.com/paritytech/polkadot-sdk/issues/266',
                      Bounty: '200$',
                      Applicant: 'N/A',
                    },
                    {
                      'Topic Name': 'Collective Substrate-based blockchain',
                      Description:
                        'Substrate-based blockchain that has membership system similar to Collective system parachain by implementing the pallet collective.',
                      Reference: 'https://docs.rs/pallet-collective/latest/pallet_collective/',
                      Bounty: '200$',
                      Applicant: 'N/A',
                    },
                    {
                      'Topic Name': 'Substrate-based blockchain with multi asset treasury',
                      Description:
                        'Substrate-based blockchain that has a treasury allows token holders to vote for proposal with any kind of tokens on the blockchain.',
                      Reference: 'https://docs.rs/pallet-treasury/latest/pallet_treasury/',
                      Bounty: '200$',
                      Applicant: 'N/A',
                    },
                    {
                      'Topic Name': 'Substrate-based blockchain with instant-finality consensus',
                      Description:
                        'Substrate-based blockchain that has an instant finality consensus mechanism similar to Tendermint. It is expected that the block is finalized instantly when there is a new transaction coming to the transaction pool. You can take a look at manual seal in Substrate for the implementation.',
                      Reference:
                        'https://crates.io/crates/sc-consensus-manual-seal https://www.gate.io/learn/articles/what-is-tendermint-how-does-tendermint-consensus-work/1332',
                      Bounty: '200$',
                      Applicant: 'N/A',
                    },
                    {
                      'Topic Name': 'Breakdown Moonbeam parachain architecture',
                      Description:
                        'Moonbeam is a full Ethereum-like environment and works with industry-standard Ethereum tools, DApps, and protocols. The participant needs to break down the runtime architecture of Moonbeam and detailed explanation on how Moonbeam integrates and implements its pallets.',
                      Reference: 'https://moonbeam.network/',
                      Bounty: '250$',
                      Applicant: 'N/A',
                    },
                    {
                      'Topic Name': 'Substrate-based blockchain with Agile Coretime',
                      Description:
                        'Coretime is a parachain on the Kusama network, designed to deliver advanced scheduling and time management solutions within the decentralized ecosystem. This coretime dictates how much processing power a parachain gets, and the Coretime Chain manages its sale, ownership (as NFTs), and scheduling, offering a more flexible alternative to the previous parachain auction system. Reimplement the coretime management functionalities on the Substrate-based blockchain with detailed explanation.',
                      Reference:
                        'https://crates.io/crates/pallet-broker/0.6.0 https://parachains.info/details/coretime',
                      Bounty: '250$',
                      Applicant: 'N/A',
                    },
                    {
                      'Topic Name': 'Breakdown Hyperbridge parachain architecture',
                      Description:
                        'Hyperbridge (short for hyper-scalable bridge) is innovated as a cross-chain solution built as an interoperability coprocessor. Hyperbridge is crafted to scale cryptographically secure, consensus, and state-proof-based interoperability across all blockchains.',
                      Reference: 'https://github.com/polytope-labs/hyperbridge',
                      Bounty: '250$',
                      Applicant: 'N/A',
                    },
                    {
                      'Topic Name': 'Substrate-based blockchain with XCM configuration',
                      Description:
                        'XCM is a message format built with the underlying specialized messaging protocol XCMP used in the Polkadot protocol. To communicate with other parachains (.i.e cross-chain transfer), runtime engineer needs to configure their runtime to support XCM with the XCM executor integration. The goal of this task is to follow the XCM workshop and add the XCM to the Substrate-based blockchain.',
                      Reference: 'https://dotcodeschool.com/courses/xcm-workshop',
                      Bounty: '250$',
                      Applicant: 'N/A',
                    },
                    {
                      'Topic Name': 'Substrate-based blockchain with pallet contracts',
                      Description:
                        'Add the ability to compile, deploy and execute smart contracts written in ink! programming language. This action can be done via configuring the pallet-contracts for your runtime.',
                      Reference: 'https://docs.rs/pallet-contracts/latest/pallet_contracts/',
                      Bounty: '250$',
                      Applicant: 'N/A',
                    },
                    {
                      'Topic Name': 'Breakdown the architecture of Snowbridge',
                      Description:
                        'Snowbridge is a general purpose, trustless and decentralized bridge between Polkadot and Ethereum.',
                      Reference: 'https://github.com/Snowfork/snowbridge',
                      Bounty: '250$',
                      Applicant: 'N/A',
                    },
                  ].map((row, index) => (
                    <tr
                      key={`row-${index}`}
                      className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                    >
                      <th
                        scope="row"
                        style={{ minWidth: 300 }}
                        className="px-6 py-4 font-medium text-gray-900 dark:text-white"
                      >
                        {row['Topic Name']}
                      </th>
                      <td className="px-6 py-4" style={{ minWidth: 400 }}>
                        {row['Description']}
                      </td>
                      <td className="px-6 py-4">
                        <div className="rounded bg-green-500 text-center font-bold text-white">
                          {row['Bounty']}
                        </div>
                      </td>
                      <td className="px-6 py-4">{row.Reference}</td>
                      <td className="px-6 py-4">{row.Applicant}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

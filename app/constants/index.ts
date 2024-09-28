export const technicalVideos = [
  { url: 'https://www.youtube.com/embed/xWp-83KYkXs?si=ETs8dhYv0z_Zd-MZ' },
  { url: 'https://www.youtube.com/embed/X8cyx0RK4JY?si=7H55xUwvAREt30z4' },
  { url: 'https://www.youtube.com/embed/G5c6yIzwxlA?si=jFb72eCUyo07Wucm' },
  { url: 'https://www.youtube.com/embed/v1X7jQ0PFHg?si=hynlx8C3RSx3xXRB' },
]

export const twitterPosts = [
  '1782770731795054927',
  '1792767337713779154',
  '1786773482858315925',
  '1778651572098273641',
  '1797804207988482467',
  '1786214095072415878',
  '1789269745331794304',
  '1791133994891055408',
  '1785668169291718919',
  '1798287171276931355',
  '1791469499969146953',
  '1783842187291300123',
  '1773305755241713707',
  '1771594959575003184',
  '1786043246130651262',
  '1815310938595373549',
  '1810971713532051886',
]

export const communityCallVideos = [
  { url: 'https://www.youtube.com/embed/W08ShT6sjEg?si=A3q6cZ9yVxAqKPCA' },
  { url: 'https://www.youtube.com/embed/vtJrd1GGyRw?si=O7QoHcmkCyGHWV37' },
  { url: 'https://www.youtube.com/embed/-eUXFnaMknE?si=IeX472WrU9Uci2Gm' },
  { url: 'https://www.youtube.com/embed/0C0egTSeagA?si=u2Xhc-ZX1hSgmQhW' },
  { url: 'https://www.youtube.com/embed/fk2CCHgmKbU?si=XXAJdUm6afHIsYhr' },
  { url: 'https://www.youtube.com/embed/sULMQwEQiAo?si=GEAYhfdNyXKDMxZS' },
  { url: 'https://www.youtube.com/embed/y00WII8ninA?si=0dXYfBbIJ_knRNsT' },
]

export const generalVideos = [
  { url: 'https://www.youtube.com/embed/rT2ydAarNG8?si=SKBa4t5hMRQp7kX_' },
  { url: 'https://www.youtube.com/embed/-GLRrdwtoqg?si=DNLPMGlDRfWdm36q' },
  { url: 'https://www.youtube.com/embed/L4tBpW5u8WM?si=bd71NzfrJ9D0Y3bx' },
  { url: 'https://www.youtube.com/embed/wIvDCHZyr1E?si=9PGHscFT8j4LPIx4' },
]

export const substrateCourses = [
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
    title: 'Substrate Course: Delegated Proof of Stake Blockchain',
    description: `Delegated Proof of Stake (DPoS) is a blockchain consensus mechanism where network users vote and elect delegates to validate the next block.`,
    url: 'https://github.com/openguild-labs/substrate-dpos',
    img: '/static/images/polkadot/workshops/SubstrateDpos.webp',
    released: true,
  },
  {
    title: 'Substrate Course: Breakdown Moonbeam Architecture',
    description: `Moonbeam is a full Ethereum-like environment and works with industry-standard Ethereum tools, DApps, and protocols. The participant needs to break down the runtime architecture of Moonbeam and detailed explanation on how Moonbeam integrates and implements its pallets.	`,
    url: 'https://github.com/openguild-labs/substrate-moonbeam',
    img: '/static/images/polkadot/workshops/SubstrateMoonbeam.webp',
    released: true,
  },
  {
    title: 'Substrate Course: EVM-compatible blockchain',
    description: `The Ethereum Virtual Machine (EVM) is a virtual computer with the components that enable Ethereum network participants to store data and agree on the state of the data. For a Substrate-based blockchain, the core responsibilities of the EVM are implemented in the EVM pallet.`,
    url: 'https://github.com/openguild-labs/substrate-evm',
    img: '/static/images/polkadot/workshops/SubstrateEvm.webp',
    released: false,
  },
]

export const courses = [
  ...substrateCourses,
  {
    title: 'Rust Programming Course: OpenRust',
    description: `Substrate is the primary blockchain SDK used by developers to create the parachains that make up the Polkadot network.`,
    url: 'https://github.com/openguild-labs/open-rust',
    img: '/static/images/polkadot/workshops/OpenRust.png',
    released: true,
  },
].sort((ca, cb) => (cb.released ? 1 : -1) - (ca.released ? 1 : -1))

export const workshops = [
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

export const researchArticles = [
  {
    title: 'Relaychain Hybrid Consensus',
    description:
      'Learning about hybrid consensus in Relaychain and why it is important to the Polkadot protocol?',
    url: '1809203505649037391',
    img: '/static/images/polkadot/articles/research-article-1.jpeg',
    released: true,
  },
  {
    title: 'Breakdown the sharded network design of Polkadot',
    description: `Discover deeper into how Polkadot is designed to be a fragmented network, or we can say a multi-chain, multi-sharded network as well.`,
    url: 'https://x.com/chungquantin/status/1809864276850704882',
    img: '/static/images/polkadot/articles/research-article-2.jpg',
    released: true,
  },
  {
    title: 'Breakdown the Tanssi network architecture',
    description: `Discover deeper into how Tanssi network powers AppChain deployment with their infrastructure.`,
    url: 'https://x.com/openguildwtf/status/1831633260545454471',
    img: '/static/images/polkadot/articles/research-article-3.jpeg',
    released: true,
  },
].sort((ca, cb) => (cb.released ? 1 : -1) - (ca.released ? 1 : -1))

export const technicalActivityProjects = [
  {
    title: 'OpenHack Workshop - Rust Starter',
    description:
      'Repositoriy is made by the OpenGuild Labs to introduce OpenHack workshop participants about Rust programming language and help the participants to get familiar with the language.',
    url: 'https://github.com/openguild-labs/open-hack-rust-starter',
    img: '/static/images/polkadot/workshops/OpenHack_RustStarter.png',
    released: true,
  },
  {
    title: 'OpenHack Workshop - Substrate Starter',
    description:
      'Repositoriy is made by the OpenGuild Labs to introduce OpenHack workshop participants about Polkadot SDK - Substrate and help the participants to get familiar with the blockchain builder tool.',
    url: 'https://github.com/openguild-labs/open-hack-substrate-starter',
    img: '/static/images/polkadot/workshops/OpenHack_SubstrateStarter.png',
    released: true,
  },
  {
    title: 'OpenHack Workshop - Dedot',
    description:
      'Made by the collaboration between OpenGuild Labs and Dedot to introduce participants about building decentralized application on Polkadot.',
    url: 'https://github.com/openguild-labs/openhack-dedot',
    img: '/static/images/polkadot/workshops/OpenHack_Dedot.png',
    released: true,
  },
  {
    title: 'OpenHack Workshop - ink! Starter',
    description: 'Getting started with ink! smart contract development.',
    url: 'https://github.com/openguild-labs/openhack-ink-starter',
    img: '/static/images/polkadot/workshops/OpenHack_inkStarter.png',
    released: true,
  },
  {
    title: 'OpenHack Workshop - ink! Advanced',
    description: 'Learning more advanced concepts in ink! related to token standards and more.',
    url: 'https://github.com/openguild-labs/openhack-ink-advanced',
    img: '/static/images/polkadot/workshops/OpenHack_inkAdvanced.png',
    released: true,
  },
].sort((ca, cb) => (cb.released ? 1 : -1) - (ca.released ? 1 : -1))

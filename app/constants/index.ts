export const technicalVideos = [
  { url: 'https://www.youtube.com/embed/xWp-83KYkXs?si=ETs8dhYv0z_Zd-MZ' },
  { url: 'https://www.youtube.com/embed/X8cyx0RK4JY?si=7H55xUwvAREt30z4' },
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
    url: 'https://x.com/openguildwtf/status/1809203505649037391',
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
].sort((ca, cb) => (cb.released ? 1 : -1) - (ca.released ? 1 : -1))

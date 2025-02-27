const projectsData = [
  {
    title: 'PolFT',
    award: 'NFT Track Winner & Grand Prize Winner',
    competition: 'Polkadot VN Hackathon 2025',
    href: 'https://dorahacks.io/buidl/21353',
    github: 'https://github.com/xiaohe139/polft',
    imgSrc: 'https://cdn.dorahacks.io/static/files/1944946dc163a32a14361dd4da98e2bc.png@128h.webp',
    description: `PolFT is an Interchain Gaming NFT Leasing platform designed to deliver a seamless and comprehensive experience for the entire NFT leasing process through a one-stop, user-friendly interface. The platform focuses on cross-chain circulation and use cases within the Polkadot ecosystem, leveraging the power of AssetHub. What sets PolFT apart is its cross-chain functionality, enabling users to lend, rent, and manage gaming NFTs effortlessly across parachains. By embracing interoperability, PolFT unlocks new opportunities for users to utilize their gaming NFT assets, connect with a broader audience, and maximize their utility in innovative ways.`,
    members: ['Đỗ Anh Đức', 'Bùi Huy Dược'],
  },
  {
    title: '0x_penGuildWTF',
    award: 'NFT Track 2nd Place',
    competition: 'Polkadot VN Hackathon 2025',
    href: 'https://dorahacks.io/buidl/21263',
    github: 'https://github.com/AceXeus/0xpenGuildWTF',
    imgSrc: 'https://cdn.dorahacks.io/static/files/19431133112ba8476e8bce74b789b40d.png@128h.webp',
    description:
      '0xpenGuildWTF is a pioneering NFT Marketplace that bridges the two thriving blockchain ecosystems of Ethereum and Polkadot. As a connector platform, we are not just a marketplace but a bridge where users from both ecosystems can create, mint, and trade NFTs while discovering new opportunities through this unique integration.',
    members: ['Phạm Huỳnh Anh', 'Vũ Châu Anh Tuấn', 'Mai Vũ Xuân Vương', 'Nguyễn Thị Tố Anh'],
  },
  {
    title: 'GmGN',
    award: 'PayFi Track Winner',
    competition: 'Polkadot VN Hackathon 2025',
    href: 'https://dorahacks.io/buidl/15990',
    github: 'https://github.com/gmgn-app/gmgn',
    imgSrc: 'https://cdn.dorahacks.io/static/files/193e8f7958b77f7e98100634e88a7752.png@128h.webp',
    description: 'A super fast onboarding wallet using Passkeys to store wallet details.',
    members: ['Victor Lương', 'Haxx Sniper'],
  },
  {
    title: 'Dexonic',
    award: 'PayFi Track 2nd Place',
    competition: 'Polkadot VN Hackathon 2025',
    description:
      'Dexonic is a trading platform focused on technical analysis and AI predictions to enhance trading capabilities on the Telegram Mini App',
    href: 'https://dorahacks.io/buidl/21308',
    github: 'https://github.com/Dexonics/dexonic-TMA',
    imgSrc: 'https://cdn.dorahacks.io/static/files/19445b100a2d5a670f2249f4e3591d8a.png@128h.webp',
    members: [
      'Lê Minh Kiệt',
      'Nguyễn Tiến Mạnh',
      'Nguyễn Trúc Nhi',
      'Phùng Văn Thiện',
      'Nguyễn Thu Trang',
      'Vi Bảo',
    ],
  },
  {
    title: 'Westpool',
    award: 'DeFi Track Winner',
    competition: 'Polkadot VN Hackathon 2025',
    description:
      'WestPool combines a premarket and launchpool into a single platform to create a seamless and impactful experience for both stakers and project owners. By integrating these features, we enhance liquidity and enable early token transfers, allowing projects to build a strong and engaged community from the very start. Tokens gain activity immediately upon being claimed, fostering interest and utility at an early stage.',
    href: 'https://dorahacks.io/buidl/21325',
    github: 'https://github.com/Solidithi/WestPool-Launchpool',
    imgSrc: 'https://cdn.dorahacks.io/static/files/1943c8762b830b80966e092413887235.jpg@128h.webp',
    members: ['Phan Nguyễn Hoàng Long', 'Nguyễn Trần Quốc Khánh', 'Trà Minh Trọng'],
  },
  {
    title: 'Zekae',
    award: 'DeFi Track 2nd Place',
    competition: 'Polkadot VN Hackathon 2025',
    description:
      'ZeKae Protocol is a protocol that allows users to mint yield bearing stablecoins leaveraging Liquid Staking Tokens (LST).',
    href: 'https://dorahacks.io/buidl/20907',
    github: 'https://github.com/zekaehq',
    imgSrc: 'https://cdn.dorahacks.io/static/files/19402ea3139543127cd0c744a1a93420.png@128h.webp',
    members: ['Victor Lương'],
  },
  {
    title: 'Transocean',
    award: 'Project with best UI/UX Winner',
    competition: 'Polkadot VN Hackathon 2025',
    description:
      "This project aims to create a decentralized platform for identifying and tracking the ports visited by ships during their journeys. By utilizing blockchain technology, the platform ensures transparency and immutability of data, providing a reliable and verifiable record of the ship's journey. Upon launching, each ship is registered with a unique identifier, and its journey details are recorded as it visits various ports, allowing easy traceability and accountability.",
    href: 'https://dorahacks.io/buidl/21311',
    github: 'https://github.com/WeTranscend-labs/Transocean',
    imgSrc: 'https://cdn.dorahacks.io/static/files/1943a92b72af35049ac30e24ff4b19ad.png@128h.webp',
    members: ['Trần Hoàng Quân', 'Lê Trần Hoàng Kiên'],
  },
  {
    title: 'Defrost Launcher',
    award: 'DeFi Track Winner',
    competition: 'Polkadot VN Hackathon 2024',
    description:
      'Defrost Launcher is a cutting-edge decentralized platform designed to empower the crypto community by enabling users to fund promising crypto projects seamlessly. Leveraging the robust capabilities of Bifrost, Defrost Launcher offers unparalleled cross-chain interoperability, ensuring a smooth and secure funding experience across multiple blockchain networks.',
    href: 'https://dorahacks.io/buidl/18004',
    github: 'https://github.com/Solidithi',
    imgSrc: 'https://cdn.dorahacks.io/static/files/192c488778e75da31f1ebae4eb6a726d.png@128h.webp',
    members: [
      'Phan Nguyễn Hoàng Long',
      'Nguyễn Đức Minh',
      'Nguyễn Trần Quốc Khánh',
      'Trà Minh Trọng',
    ],
  },
  {
    title: 'CiWallet',
    award: 'DeFi Track 2nd Place',
    competition: 'Polkadot VN Hackathon 2024',
    description:
      'CiWallet is a cross-chain wallet that supports Polkadot and its parachains, including Moonbeam, Unique Network, and Bifrost. Each parachain has its own advantages:',
    href: 'https://dorahacks.io/buidl/17997',
    github: 'https://github.com/starci-lab/ciwallet',
    imgSrc: 'https://cdn.dorahacks.io/static/files/192c46ff547abfc3d29ded840ac87df6.jpg@128h.webp',
    members: ['StarCi'],
  },
  {
    title: 'IISharkBluessK',
    award: 'DeFi Track 3rd Place',
    competition: 'Polkadot VN Hackathon 2024',
    description:
      'The process of bringing borrowers and lenders together was facilitated by financial institutions such as banks or peer-to-peer lenders, who controlled access along with interest, loan rate. The short-term borrowing and lending market.',
    href: 'https://dorahacks.io/buidl/17998',
    github: 'https://github.com/Babybluess/polkadot_hackathon',
    imgSrc: 'https://cdn.dorahacks.io/static/files/192c46c8c4bd9b7bd2ee32d446783ba1.png@128h.webp',
    members: ['Hoàng Minh Thắng'],
  },
  {
    title: 'Bookadot',
    award: 'RWA Track Winner',
    competition: 'Polkadot VN Hackathon 2024',
    description:
      'The current ticketing system is driven by profit, riddled with touts, and susceptible to scams, especially in the secondary market. By using NFT ticketing, tamperproof NFTs can address these issues.',
    href: 'https://dorahacks.io/buidl/17794',
    github: 'https://github.com/thecosmicblocks/bookadot-submission',
    imgSrc: 'https://cdn.dorahacks.io/static/files/192ae5c30425bc6264b382b490db4a0d.png@128h.webp',
    members: ['Bùi Huy Tùng', 'Phạm Anh Tấn', 'Minh Ngọc'],
  },
  {
    title: 'MegaBoard',
    award: 'RWA Track 2nd Place',
    competition: 'Polkadot VN Hackathon 2024',
    description:
      'A project about applying blockchain to the field of outdoor billboard advertising and bringing benefits to the community through converting actual assets to Blockchain.',
    href: 'https://dorahacks.io/buidl/18012',
    github: 'https://github.com/lochoang174/ooh-fe',
    imgSrc: 'https://cdn.dorahacks.io/static/files/192cd66973ced7e4d0c65ee4aaea00d0.jpg@128h.webp',
    members: ['Locah', 'Pich', 'SaitamaCoder'],
  },
  {
    title: 'IISharkBluess',
    award: 'RWA Track 3rd Place',
    competition: 'Polkadot VN Hackathon 2024',
    description:
      'The process of bringing borrowers and lenders together was facilitated by financial institutions such as banks or peer-to-peer lenders, who controlled access along with interest, loan rate. The short-term borrowing and lending market.',
    href: 'https://dorahacks.io/buidl/17998',
    github: 'https://github.com/Babybluess/polkadot_hackathon',
    imgSrc: 'https://cdn.dorahacks.io/static/files/192c46c8c4bd9b7bd2ee32d446783ba1.png@128h.webp',
    members: ['Hoàng Minh Thắng'],
  },
  {
    title: 'Open Knowledge',
    award: 'TURBO DEVELOPMENT TRACK Winner',
    competition: 'Polkadot VN Hackathon 2024',
    description: 'Be a good developer with OpenKnowledge',
    href: 'https://dorahacks.io/buidl/17978',
    github: 'https://github.com/ZeroToH3ro/OpenKnowledge-Hackathon',
    imgSrc: 'https://cdn.dorahacks.io/static/files/192c303458dc45b5cbd81cf4559a97d4.jpg@128h.webp',
    members: ['Z3ro.eth'],
  },
  {
    title: 'Apillon CLI',
    award: 'TURBO DEVELOPMENT TRACK 2nd Place',
    competition: 'Polkadot VN Hackathon 2024',
    description:
      'The Apillon Bot is a command-line interface (CLI) tool designed to interact with the Apillon API, enabling users to perform a variety of tasks related to managing NFT collections, uploading files to storage, and overseeing website hosting. This README offers a comprehensive guide on how to install and utilize the bot, along with other pertinent details.',
    href: 'https://dorahacks.io/buidl/18280',
    github: 'https://github.com/ZeroToH3ro/Polkadot-Hackathon-2024',
    imgSrc: 'https://cdn.dorahacks.io/static/files/192d40ee1a9fa0010f8a95e48c7876db.jpeg@128h.webp',
    members: ['Trinh Ngoc Minh'],
  },
  {
    title: 'BubbleDOT',
    award: 'AI AGENT TRACK Winner',
    competition: 'Polkadot VN Hackathon 2024',
    description:
      'BubbleDOT aims to empower blockchain developers with an efficient, secure, and censorship-resistant tool, focusing on Rust and Polkadot ecosystems.',
    href: 'https://dorahacks.io/buidl/17860',
    github: 'https://github.com/PhucLam202/Polkadot-Hackathon2024',
    imgSrc: 'https://cdn.dorahacks.io/static/files/192b48c9fc61e15fbdc47924b2c848ad.png@128h.webp',
    members: ['Phúc Lâm'],
  },
  {
    title: 'GNFT-AI',
    award: 'AI AGENT TRACK 2nd Place',
    competition: 'Polkadot VN Hackathon 2024',
    description:
      'GNFT makes NFTs easy for everyone. Create, mint, and share digital assets using AI—no blockchain experience needed. Future plans include evolving into a social platform for sharing, liking, and commenting on NFTs.',
    href: 'https://dorahacks.io/buidl/17965',
    github: 'https://github.com/HuyBuiT/Polkadot-GNFT',
    imgSrc: 'https://cdn.dorahacks.io/static/files/192c20df341d56dcf5be2af46e5971bc.png@128h.webp',
    members: ['Huy Hustler'],
  },
  {
    title: 'Mulinks',
    award: 'NFT TRACK Winner, Most Complete Project',
    competition: 'Polkadot VN Hackathon 2024',
    description:
      'Mulinks is a groundbreaking product designed to make Web3 URLs accessible anywhere and everywhere, utilizing innovative ulinks technology integrated into social platforms. ',
    href: 'https://dorahacks.io/buidl/18002',
    github: 'https://github.com/Weminal-labs/mulinks-web',
    imgSrc: 'https://cdn.dorahacks.io/static/files/192c4811a07a2d25c1053a5435f86fdf.jpg@128h.webp',
    members: ['Louis', 'Kay', 'SaitamaCoder'],
  },
  {
    title: 'DragonNFT',
    award: 'NFT TRACK 2nd Place, Best UI/UX',
    competition: 'Polkadot VN Hackathon 2024',
    description:
      'DragonNFT is a Soul Application project that binds NFTs to the Web3 community, creating a unique user experience that recognizes and rewards contributors.',
    href: 'https://dorahacks.io/buidl/17995',
    github: 'https://github.com/SaitamaCoderVN/DragonNFT',
    imgSrc: 'https://cdn.dorahacks.io/static/files/192c4621e9ac55c168b5f1d48e1aaad1.jpg@128h.webp',
    members: ['SaitamaCoder', 'Joitaro'],
  },
  {
    title: 'The Graph',
    competition: 'Mini Hackathon',
    award: 'Polkadot Track Winner',
    github: 'https://github.com/nexm-io/mini-openhack-the-graph',
    members: ['Hoang Son'],
  },
  {
    title: 'Ordinals Module',
    award: 'Substrate Track Winner',
    competition: 'Mini Hackathon',
    github: [
      'https://github.com/nexm-io/ordinals-node',
      'https://github.com/nexm-io/ordinals-pallet',
    ],
    members: ['Lê Việt Hoà'],
  },
  {
    title: 'Connecto',
    award: 'Unique Network Track Winner',
    competition: 'Mini Hackathon',
    github: 'https://github.com/orgs/thecosmicblocks/repositories?type=public',
    members: ['Bui Huy Tung', 'Pham Anh Tan'],
  },
]

export default projectsData

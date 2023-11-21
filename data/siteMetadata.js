/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'The Low Levelers',
  author: 'Tin Chung',
  headerTitle: 'lowlevelers.com',
  description: 'Programming hub for passionate low-level enthusiasts',
  expandedDescription:
    "TheLowLevelers is a non-profit community made by Vietnameses for Vietnamese programmer who are interested in low-level programming. In Vietname, we are taught to approach problems with instant and narrow solutions. And we don't think it is a right way to study. Hence, we design this community on top of the First Principle Thinking mindset to break down the subtlety of complex computer systems in a comprehensive way.",
  blogSectionDescription:
    'Read our latest research & blog posts to learn more about what are we building',
  focusTopics: [
    {
      title: 'Blockchain',
      description:
        'To catch up with the latest development in distributed system, blockchain is in our priority R&D queue. There are thousands of smart contract tutorial development out there, but only a tiny number of tutorials for blockchain engineering.',
    },
    {
      title: 'Reverse Engineering',
      description:
        'We break down and implement retro gaming consoles like Nintendo Switch and Nintendo Entertainment System (NES) experimetally to deep dive into the architecture of its subtle system',
    },
    {
      title: 'Embedded Programming',
      description:
        'We break down and implement retro gaming consoles like Nintendo Switch and Nintendo Entertainment System (NES) experimetally to deep dive into the architecture of its subtle system',
    },
  ],
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://lowlevelers.com',
  siteRepo: 'https://github.com/lowlevelers/lowlevelhub.com',
  siteLogo: '/static/images/logo.png',
  socialBanner: '/static/images/twitter-card.png',
  // mastodon: 'https://mastodon.social/@mastodonuser',
  email: 'address@yoursite.com',
  github: 'https://github.com/lowlevelers',
  // twitter: 'https://twitter.com/Twitter',
  // facebook: 'https://facebook.com',
  // youtube: 'https://youtube.com',
  // linkedin: 'https://www.linkedin.com',
  locale: 'en-US',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
    umamiAnalytics: {
      // We use an env variable for this site to avoid other users cloning our analytics ID
      umamiWebsiteId: process.env.NEXT_UMAMI_ID, // e.g. 123e4567-e89b-12d3-a456-426614174000
    },
    // plausibleAnalytics: {
    //   plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    // },
    // simpleAnalytics: {},
    // posthogAnalytics: {
    //   posthogProjectApiKey: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    // },
    // googleAnalytics: {
    //   googleAnalyticsId: '', // e.g. G-XXXXXXX
    // },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comments: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: 'lowlevelers/lowlevelers.com' || process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: 'R_kgDOKvyTuw' || process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: 'General' || process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: 'DIC_kwDOKvyTu84CbHL8' || process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'dark_tritanopia',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
      // This corresponds to the `data-lang="en"` in giscus's configurations
      lang: 'en',
    },
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json', // path to load documents to search
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   // The application ID provided by Algolia
    //   appId: 'R2IYF7ETH7',
    //   // Public API key: it is safe to commit it
    //   apiKey: '599cec31baffa4868cae4e79f180729b',
    //   indexName: 'docsearch',
    // },
  },
}

module.exports = siteMetadata

import CodeCampCard from './CodeCampCard'

export default function LearnMoreSection() {
  const resources = [
    {
      title: 'Community Handbook',
      description:
        'Find all information about OpenGuild community in the handbook. Get started with our guidelines and resources.',
      author: 'OpenGuild Team',
      difficulty: 'beginner' as const,
      task: 'Read the handbook and join our Discord community',
      href: 'https://handbook.openguild.wtf',
    },
    {
      title: 'Join Community Activities',
      description:
        'Participate in community activities to learn and earn rewards. Complete missions and level up your skills.',
      author: 'OpenGuild Team',
      difficulty: 'intermediate' as const,
      task: 'Complete your first community activity and earn XP',
      href: '/activity',
    },
    {
      title: 'Become a Member',
      description:
        'Discover talented people in the community. Connect with builders and grow your network in Web3.',
      author: 'OpenGuild Team',
      difficulty: 'beginner' as const,
      task: 'Create your profile and introduce yourself',
      href: 'https://handbook.openguild.wtf/general-information/membership',
    },
  ]

  return (
    <div className="mx-auto max-w-6xl px-4">
      <h2
        className="mb-10 text-2xl font-bold uppercase tracking-tight text-gray-900 dark:text-white md:text-3xl"
        style={{ fontFamily: 'var(--font-vcr)' }}
      >
        Learn More About Us
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => (
          <CodeCampCard
            key={resource.title}
            title={resource.title}
            description={resource.description}
            author={resource.author}
            difficulty={resource.difficulty}
            task={resource.task}
            href={resource.href}
          />
        ))}
      </div>
    </div>
  )
}

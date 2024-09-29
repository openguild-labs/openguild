import Link from 'next/link'

export default function LearnMoreSection() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14">
          Learn more about us
        </h1>
        <div className="lg:flex lg:justify-evenly">
          {[
            {
              title: 'Community Handbook',
              description: 'Find all information about OpenGuild community in the handbook',
              img: '/static/images/community_handbook.jpg',
              href: 'https://handbook.openguild.wtf',
            },
            {
              title: 'Join our Activities',
              description: 'Participate in community activities to learn and earn rewards',
              img: '/static/images/discussion_forum.jpg',
              href: '/activity',
            },
            {
              title: 'Become a Member',
              description: 'Discover talented people in the community',
              img: '/static/images/members.jpg',
              href: 'https://handbook.openguild.wtf/general-information/membership',
            },
          ].map((topic) => (
            <Link
              href={topic.href}
              key={topic.title}
              style={{
                minWidth: 350,
                borderRadius: 20,
              }}
              className="mx-3 my-5 max-w-lg overflow-hidden bg-white shadow-lg"
            >
              <div
                style={{
                  background: `url(${topic.img})`,
                  marginBottom: 5,
                  height: 170,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold">{topic.title}</div>
                <p className="text-base text-gray-500">{topic.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href, github, award, competition }) => (
  <div className="md max-w-[544px] p-4 md:w-1/2 lg:w-[400px]">
    <div
      className={`${
        imgSrc && 'h-full'
      }  overflow-hidden rounded-xl border-2 border-gray-200 border-opacity-60 shadow-md dark:border-gray-700`}
    >
      <div className="p-6">
        <div className="mb-5 flex items-center justify-center gap-5">
          {imgSrc && (
            <Link href={href} aria-label={`Link to ${title}`}>
              <Image
                alt={title}
                src={imgSrc}
                className="rounded-xl object-cover object-center shadow-xl"
                width={50}
                height={50}
              />
            </Link>
          )}
          <h2 className="text-2xl font-bold leading-8 tracking-tight">
            {href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
        </div>
        {description && (
          <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
            {description?.slice(0, 100).trim()}...
          </p>
        )}
        {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        )}
        <div className="mx-auto mt-10 flex flex-col gap-3">
          <div className="w-full rounded-2xl bg-gray-100 px-3 py-1 text-center text-sm text-black shadow-sm">
            {competition}
          </div>
          <div className="w-full rounded-2xl bg-purple-300 px-3 py-1 text-center text-sm text-black shadow-sm">
            {award}
          </div>
        </div>
        <div className="mt-7 flex gap-3">
          {award && <div className="text-4xl">🏆</div>}
          {github && (
            <a href={github}>
              <img
                src="static/images/github-icon.png"
                width={35}
                height={35}
                className="rounded-xl"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
)

export default Card

import { ModuleListSection } from '@/components/ModuleListContainer'
import { communityCallVideos, technicalVideos, workshops } from 'app/constants'

export default function ActivityPage() {
  return (
    <div>
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14">
          Community Calls
        </h1>
        <div
          className="flex"
          style={{ justifyContent: 'space-evenly', overflow: 'scroll', maxWidth: '100%' }}
        >
          {communityCallVideos.map((video) => (
            <iframe
              key={video.url}
              width="100%"
              height="200px"
              style={{ borderRadius: 10, margin: '5px', maxWidth: 350 }}
              src={video.url}
              title="YouTube video player"
              allowFullScreen
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          ))}
        </div>
      </div>
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14">
          Live Coding Sessions
        </h1>
        <div className="flex-wrap lg:flex" style={{ justifyContent: 'space-evenly' }}>
          {technicalVideos.map((video) => (
            <iframe
              key={video.url}
              width="100%"
              height="200px"
              style={{ borderRadius: 10, margin: '5px', maxWidth: 270 }}
              src={video.url}
              title="YouTube video player"
              allowFullScreen
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          ))}
        </div>
      </div>
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14">
          Open-source Slides
        </h1>
        <div className="relative overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Workshop Slide Name
                </th>
              </tr>
            </thead>
            <tbody>
              {workshops.map((row, index) => (
                <tr
                  key={`row-${index}`}
                  className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <th scope="row" style={{ minWidth: 300 }} className="px-6 py-4">
                    <a href={row.url} className="text-medium text-blue-500">
                      #{index + 1} - {row.title}
                    </a>
                    <p className="text-sm font-normal italic text-gray-500">{row.description}</p>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

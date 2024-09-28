import EventImageGallery from '@/components/EventImageGallery'
import { generalVideos } from 'app/constants'

export default function LearnPage() {
  return (
    <div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14">
            Featured Moments
          </h1>
          <EventImageGallery />
        </div>
      </div>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14">
            Watch our latest videos
          </h1>
          <div className="flex-wrap lg:flex" style={{ justifyContent: 'space-evenly' }}>
            {generalVideos.map((video) => (
              <iframe
                key={video.url}
                width="100%"
                height="300px"
                style={{ borderRadius: 10, margin: '5px', maxWidth: 550 }}
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
      </div>
    </div>
  )
}

import { EmbeddedVideoListContainer } from '@/components/EmbeddeVideoListContainer'
import { bootcampPolkadotSdkVideos, bootcampSolidityOnPolkaVmVideos } from 'app/constants'

export default function BootcampPage() {
  return (
    <div>
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
        src="/static/images/polkadot/bootcamp/bootcamp-banner.png"
      />
      <div className="mt-7 space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="w-full text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
          Polkadot SDK
        </h1>
        <h2 className="flex w-full justify-center font-extrabold text-gray-900 dark:text-gray-100 sm:text-2xl md:text-2xl">
          <div style={{ borderRadius: 10 }} className="w-fit bg-pink-500 px-3 py-3 text-white">
            {bootcampPolkadotSdkVideos.length} videos
          </div>
        </h2>
        <EmbeddedVideoListContainer
          marquee={false}
          modules={bootcampPolkadotSdkVideos}
          cardStyle={{ maxWidth: 350 }}
        />
      </div>
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="w-full text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
          Solidity on PolkaVM
        </h1>
        <h2 className="flex w-full justify-center font-extrabold text-gray-900 dark:text-gray-100 sm:text-2xl md:text-2xl">
          <div style={{ borderRadius: 10 }} className="w-fit bg-pink-500 px-3 py-3 text-white">
            {bootcampSolidityOnPolkaVmVideos.length} videos
          </div>
        </h2>
        <EmbeddedVideoListContainer
          marquee={false}
          modules={bootcampSolidityOnPolkaVmVideos}
          cardStyle={{ maxWidth: 350 }}
        />
      </div>
    </div>
  )
}

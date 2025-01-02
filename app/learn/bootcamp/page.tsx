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
      <div className="mt-3 space-y-2 pb-8 pt-6 md:space-y-5">
        <div className="flex">
          <a
            type="button"
            style={{ width: 'fit-content' }}
            href="https://openguild.notion.site/156659b1c817802383e0ddb34ad07a25?pvs=105"
            className="mx-auto my-5 rounded-lg bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 px-5 py-2.5 text-center text-lg font-medium text-white shadow-lg shadow-purple-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-purple-300 dark:shadow-lg dark:shadow-purple-800/80 dark:focus:ring-purple-800"
          >
            📚 Register Bootcamp
          </a>
        </div>
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

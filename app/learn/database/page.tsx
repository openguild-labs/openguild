import { learningResources } from 'app/constants'

export default function LearnDatabasePage() {
  return (
    <div>
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <div className="flex items-center">
          <img
            height={50}
            width={50}
            style={{ marginRight: 20 }}
            alt="polkadot learn"
            src="/static/images/polkadot/jumbotron/Polkadot_LEARN.png"
          />
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-3xl md:leading-14">
            Ecosystem Educational Database
          </h1>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Resource Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Level
                </th>
              </tr>
            </thead>
            <tbody>
              {learningResources.map((row, index) => (
                <tr
                  key={`row-${index}`}
                  className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <th scope="row" style={{ minWidth: 300 }} className="px-2 py-2">
                    <a href={row.Link} className="text-medium text-blue-500">
                      #{index + 1} - {row.Source} | {row['Course Name']}{' '}
                    </a>
                    <p className="text-sm font-normal italic text-gray-500">
                      {row.Language} | {row.Category} | {row['Bundle Name'] || 'N/A'}
                    </p>
                  </th>
                  <th
                    scope="row"
                    style={{ maxWidth: 400, width: 'fit-content' }}
                    className="px-6 py-4"
                  >
                    <div className="w-fit text-nowrap rounded bg-green-500 px-2 py-1 text-center text-sm font-normal text-white">
                      {row['Status']}
                    </div>
                  </th>
                  <th
                    scope="row"
                    style={{ maxWidth: 400, width: 'fit-content' }}
                    className="px-6 py-4"
                  >
                    <div className="w-fit text-nowrap rounded bg-purple-500 px-2 py-1 text-center text-sm font-normal text-white">
                      {row['Level']}
                    </div>
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

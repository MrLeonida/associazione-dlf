import { fetchNewsHomeFromFilemaker } from "@/app/lib/apiNewsTriple";

async function getData() {
  const data = await fetchNewsHomeFromFilemaker();
  return data
};

export default async function News() {
  const posts = await getData()

  return (
    <div className="bg-slate-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Le ultime novità ed i prossimi eventi</h2>
          <p className="mt-5 text-lg leading-8 text-gray-600">
            Le ultime novità, le promozioni in corso e le attività in risalto: non perderti neanche un momento seguendo i nostri aggiornamenti ed unisciti alla nostra comunità!
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.fieldData._idNews} className="relative flex flex-col items-start justify-between">
              <a href={post.fieldData.ctWebLink} className="absolute top-0 bottom-0 left-0 right-0 z-50"></a>
              <div className="relative w-full">
                <img
                  src={post.fieldData.ctWebImage}
                  alt=""
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <div dateTime={post.datetime} className="text-gray-500">
                  {post.fieldData.ctWebDate}
                  </div>
                  <p
                    className={"relative z-10 rounded-full " + post.fieldData.ctWebCategoryColor + " px-3 py-1.5 font-medium text-slate-50"}
                  >
                    {post.fieldData.category}
                  </p>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <span className="absolute inset-0" />
                      {post.fieldData.title}
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.fieldData.ctWebText}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 flex items-center justify-center">
            <a
              href="/news"
              className="rounded-md bg-indigo-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Visualizza tutte le ultime news
            </a>
          </div>
      </div>
    </div>
  )
}
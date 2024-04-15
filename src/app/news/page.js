
import { DataApi } from '@proofgeist/fmdapi'
import Header from '@/components/header';
import Warning from '@/components/warning';
import Footer from '@/components/footer';
import Faq from '@/components/faq';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default async function Example() {

const client = DataApi({
  db: "dlfTrevisoTheCoreApp",
  server: "https://dev.thecore.software",
  auth: {
    username: "api",
    password: "apiUser2024"
  }
});
const layout = 'apiNews'
const sort =  [
  {
    "fieldName": "ctDate",
    "sortOrder": "descend"
  }
]
const query = [
  {
      "ctDate": "*"
  }
]
const findResult = await client.findAll({
  layout: layout,
  query: query,
  sort: sort,
  limit: 10
});

const code = 0;

if(code == 0) {

  const posts = findResult;

  return (
    <div className="bg-slate-50">
    
    <Warning />

    <Header />

    <main className="isolate bg-slate-50">

    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Le ultime novità ed i prossimi eventi</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Scopri le ultime novità, le promozioni in corso ed i prossimi eventi della nostra associazione. Dal lancio di nuove iniziative alla copertura degli eventi, questa sezione è la risorsa per rimanere sempre aggiornati su ciò che succede all&apos;interno dei nostri gruppi. Non perderti neanche un momento: segui i nostri aggiornamenti ed unisciti a noi nel rendere la nostra comunità ancora più vibrante e coinvolgente!
          </p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {posts.map((post) => (

              <article key={post.fieldData._idNews} className="relative isolate flex flex-col gap-8 lg:flex-row">
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <img
                    src={post.fieldData.ctWebImage}
                    alt=""
                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time className="text-gray-500">
                      {post.fieldData.ctWebDate}
                    </time>
                    <a
                      href={post.fieldData.ctWebLink}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.fieldData.category}
                    </a>
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href="">
                        <span className="absolute inset-0" />
                        {post.fieldData.title}
                      </a>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600">{post.fieldData.ctWebText}</p>
                  </div>
                </div>
              </article>

            ))}
          </div>
        </div>
      </div>
    </div>


    </main>

    <Faq />
    
    <Footer />

    <Warning />


    </div>
  )

} else {

  return null

}

}

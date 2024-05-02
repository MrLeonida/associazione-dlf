import { fetchNewsListFromFilemaker } from '../lib/apiNewsList';
import Header from '@/components/header';
import Promo from '@/components/promo';
import Footer from '@/components/footer';
import Faq from '@/components/faq';
import Attivita from '@/components/attivita';

async function getData() {
  const data = await fetchNewsListFromFilemaker();
  return data
};

export default async function Page() {
  const posts = await getData()

  return (
    <div className="bg-slate-50">
    
    <Attivita />

    <Promo />

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
                <a href={post.fieldData.ctWebLink} className="absolute top-0 bottom-0 left-0 right-0 z-50"></a>
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
                    <div className="text-gray-500">
                      {post.fieldData.ctWebDate}
                    </div>
                    <div
                      className={"relative z-10 rounded-full " + post.fieldData.ctWebCategoryColor + " px-3 py-1.5 font-medium text-slate-50"}
                    >
                      {post.fieldData.category}
                    </div>
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                        <span className="absolute inset-0" />
                        {post.fieldData.title}
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


    </div>
  )

}
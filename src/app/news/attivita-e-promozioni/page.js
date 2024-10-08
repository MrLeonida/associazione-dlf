import { fetchNewsWarningFromFirestore } from '@/app/lib/firestoreNewsWarning';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Faq from '@/components/faq';
import Warning from '@/components/warning';

export const dynamic = 'force-dynamic'
export const revalidate = 0

async function getData() {
  const data = await fetchNewsWarningFromFirestore();
  return data
};

export default async function Page() {
  const posts = await getData()

  return (
    <div className="bg-slate-50">

    <Warning />

    <Header />

    <main className="isolate bg-slate-50">

    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Le attività e le promozioni attualmente in corso</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Scopri le attività in primo piano della nostra associazione! Questa sezione ti offre una panoramica sulle iniziative che stanno animando la nostra comunità in questo momento. Segui gli aggiornamenti e approfitta delle opportunità che ti offriamo per essere parte attiva del nostro gruppo. Unisciti a noi e vivi appieno l&apos;energia delle nostre proposte in risalto!
          </p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">

            {posts.map((post) => (

              <article key={post.fieldData.idNews} className="relative isolate flex flex-col gap-8 lg:flex-row">
                <a href={post.fieldData.link} className="absolute top-0 bottom-0 left-0 right-0 z-50"></a>
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <img
                    src={post.fieldData.image}
                    alt=""
                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <div className="text-gray-500">
                      {post.fieldData.date}
                    </div>
                    <div
                      className={"relative z-10 rounded-full " + post.fieldData.categoryColor + " px-3 py-1.5 font-medium text-slate-50"}
                    >
                      {post.fieldData.category}
                    </div>
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                        <span className="absolute inset-0" />
                        {post.fieldData.title}
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600">{post.fieldData.textMin}</p>
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
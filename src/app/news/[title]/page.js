import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/pro-solid-svg-icons'
import Header from '@/components/header';
import Warning from '@/components/promo';
import Footer from '@/components/footer';
import Faq from '@/components/faq';
import Attivita from '@/components/attivita';
import { fetchNewsSingleFromFilemaker } from '@/app/lib/apiNewsSingle';

async function getData(title) {
  const data = await fetchNewsSingleFromFilemaker(title);
  return data
};

export default async function Page({params}) {
  const paramTitle = params.title;
  const post = await getData(paramTitle)

  if(post) {

    return (
      <div className="bg-slate-50">
      
      <Attivita />

      <Warning />

      <Header />

      <main className="isolate bg-slate-50">

      <div className="px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7">
        <div className="mb-10 flex">
                <a href="/news" className="text-base font-semibold leading-7 text-indigo-600 underline underline-offset-2">
                <span aria-hidden="true">&larr;</span> Torna alle ultime news
                </a>
              </div>
          <p className="text-base font-semibold leading-7 text-slate-600">{post[0].fieldData.ctWebDate} - {post[0].fieldData.eyelet}</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{post[0].fieldData.title}</h1>
          <p className="mt-6 text-xl leading-8 text-slate-700">{post[0].fieldData.subtitle}</p>
          <figure className="mt-16">
            <img
              className="aspect-video rounded-xl bg-slate-50 object-cover"
              src={post[0].fieldData.ctWebImage}
              alt=""
            />
            <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-slate-500">
              <FontAwesomeIcon icon={faCircleInfo} className="mt-0.5 h-5 w-5 flex-none text-slate-500 fa-lg" />
              {post[0].fieldData.imageSubtitle}
            </figcaption>
          </figure>
          <div className="mt-10 max-w-2xl">
            <p className="text-slate-900">{post[0].fieldData.text}</p>
          </div>
          <div className="mt-10 flex">
                <a href="/contatti" className="text-base font-semibold leading-7 text-indigo-600 underline underline-offset-2">
                  Contattaci per maggiori informazioni <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
        </div>
      </div>


      </main>

      <Faq />
      
      <Footer />


      </div>
    )

  } else {

    return (
      <div className="bg-slate-50">
      
      <Attivita />

      <Warning />

      <Header />

      <main className="isolate bg-slate-50">

      <div className="px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7">
        <div className="mb-10 flex">
                <a href="/news" className="text-base font-semibold leading-7 text-indigo-600 underline underline-offset-2">
                <span aria-hidden="true">&larr;</span> Torna alle ultime news
                </a>
              </div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Articolo non trovato!</h1>
        </div>
      </div>


      </main>

      <Faq />
      
      <Footer />


      </div>
    )

  }

}
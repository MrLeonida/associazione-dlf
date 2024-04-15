
import { DataApi } from '@proofgeist/fmdapi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/pro-solid-svg-icons'
import Header from '@/components/header';
import Warning from '@/components/warning';
import Footer from '@/components/footer';
import Faq from '@/components/faq';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default async function Example({params}) {
  const paramTitle = params.title;

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
        "ctWebTitle": paramTitle
    }
]

const findResult = await client.find({
  layout: layout,
  query: query,
  sort: sort
});

const code = 0;


if(code == 0) {

  return (
    <div className="bg-slate-50">
    
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
        <p className="text-base font-semibold leading-7 text-indigo-600">{findResult.data[0].fieldData.ctDate} - {findResult.data[0].fieldData.eyelet}</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{findResult.data[0].fieldData.title}</h1>
        <p className="mt-6 text-xl leading-8 text-slate-700">{findResult.data[0].fieldData.subtitle}</p>
        <figure className="mt-16">
          <img
            className="aspect-video rounded-xl bg-slate-50 object-cover"
            src={findResult.data[0].fieldData.ctWebImage}
            alt=""
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-slate-500">
            <FontAwesomeIcon icon={faCircleInfo} className="mt-0.5 h-5 w-5 flex-none text-slate-500 fa-lg" />
            {findResult.data[0].fieldData.imageSubtitle}
          </figcaption>
        </figure>
        <div className="mt-10 max-w-2xl">
          <p className="text-slate-900">{findResult.data[0].fieldData.text}</p>
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

    <Warning />


    </div>
  )

} else {

  return (
    <div className="bg-slate-50">
    
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

    <Warning />


    </div>
  )

}

}

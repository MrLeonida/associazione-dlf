
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedal, faTrain, faFamily, faMountain } from '@fortawesome/pro-solid-svg-icons'
import Header from '@/components/header';
import Warning from '@/components/warning';
import Footer from '@/components/footer';
import AppStore from '@/components/appStore';
import GooglePlay from '@/components/googlePlay';
import Banner from '@/components/banner';
import Faq from '@/components/faq';
import News from '@/components/news';

const posts = [
  {
    id: 1,
    title: 'Sport',
    href: '/sport',
    description: 'Da sempre inteso come attività ludica e di intrattenimento per eccellenza, lo sport costituisce un momento importante di formazione, di benessere fisico e di aggregazione.',
    imageUrl: '/imageHomeSport.jpg',
    classes: 'flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-amber-500 group-hover:bg-amber-400',
    icon: faMedal,
  },
  {
    id: 2,
    title: 'Turismo e cultura',
    href: '/turismo-e-cultura',
    description: 'Le attività turistiche e culturali sono un punto di forza della proposta del Dopolavoro Ferroviario. Una tradizione storica che ha visto crescere la partecipazione, l’aggregazione e l’entusiasmo dei soci ferrovieri e non solo.',
    imageUrl: '/imageHomeTurismo.jpg',
    classes: 'flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-blue-500 group-hover:bg-blue-400',
    icon: faTrain,
  },
  {
    id: 3,
    title: 'Attività e gruppi',
    href: '/attivita-e-gruppi',
    description: 'Esplora, cattura, crea: unisciti ai nostri gruppi tematici di escursionismo, fotografia e fermodellismo e scopri un mondo di passioni condivise e legami duraturi.',
    imageUrl: '/imageHomeGruppi.jpg',
    classes: 'flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-teal-500 group-hover:bg-teal-400',
    icon: faMountain,
  },
  {
    id: 4,
    title: 'Spazi e servizi',
    href: '/spazi-e-servizi',
    description: 'Il settore dei servizi è indispensabile per assolvere alla finalità del DLF, esso permette di offrire spazi ed opportunità ai soci mettendo a loro disposizione gli strumenti necessari allo sviluppo.',
    imageUrl: '/imageHomeServizi.jpg',
    classes: 'flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-red-500 group-hover:bg-red-400',
    icon: faFamily,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Page() {

  return (
    <div className="bg-slate-800">
    
    <Warning />
    
    <Header />

      <div className="relative isolate overflow-hidden pt-14">
        <img
          src="/heroHome.jpg"
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 h-full w-full bg-slate-700/50"></div>
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-50 sm:text-6xl mx-5 md:mx-0">
              I nostri spazi, il tuo divertimento
            </h1>
            <p className="mt-6 text-md text-slate-100 font-medium mx-5 md:mx-0 sm:text-xl">
              Immerso nella natura, costeggiato dal Sile, a due passi da Treviso. Scarica l&apos;applicazione WanSports per prenotare la tua prossima partita!
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 mx-5 md:mx-0">
              <div className="inline-flex">
                <a href="https://apps.apple.com/it/app/wansport/id6445919117">
                  <AppStore />
                </a>
              </div>
              <div className="inline-flex">
                <a href="https://play.google.com/store/apps/details?id=com.wansport.community">
                  <GooglePlay />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>

      
      <div className="relative bg-gray-900">
      <div className="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        <img
          className="h-full w-full object-cover"
          src="/imageHomeAssociazione.jpg"
          alt=""
        />
        <div className="absolute inset-0 z-10 h-full w-full bg-slate-700/50"></div>
      </div>
      <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">Solidità, dinamismo e crescita</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Una storia centenaria fatta di impegno, collettività ed esperienze</p>
          <p className="mt-6 text-base leading-7 text-gray-300">
            Attraverso iniziative sportive, culturali, e ricreative, miriamo a potenziare l&apos;utilizzo del tempo libero, migliorare le condizioni di crescita culturale e sociale degli iscritti, e favorire l&apos;armonizzazione della vita associativa attraverso lo scambio di valori ed esperienze, coinvolgendo non solo gli associati ma anche le loro famiglie.
          </p>
          <div className="mt-8">
            <a
              href="/associazione"
              className="inline-flex rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Approfondisci la nostra realtà
            </a>
          </div>
        </div>
      </div>
    </div>

    <News />

      <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Una vasta scelta di attività</h2>
          <p className="mt-5 text-lg leading-8 text-gray-600">
            Siamo orgogliosi di presentare un ricco programma di attività sportive che spazia da una vasta gamma di discipline, garantendo divertimento e sfida per tutti i livelli di abilità. Ma non è tutto: la nostra offerta va oltre lo sport, con entusiasmanti attività turistiche e culturali che ti consentono di esplorare luoghi affascinanti e scoprire nuove passioni. Inoltre, i nostri gruppi tematici offrono un ambiente stimolante per incontrare persone con interessi simili e condividere esperienze uniche. E per rendere l&apos;esperienza ancora più gratificante, offriamo un mondo di convenzioni e servizi esclusivi che ti consentono di risparmiare e di godere di vantaggi speciali in diverse attività e negozi. Entra a far parte della nostra associazione e scopri un mondo di opportunità e divertimento che ti aspetta!
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none md:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-56 sm:pt-40 lg:pt-56"
            >
              <img src={post.imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              <a className="absolute inset-0 z-10" href={post.href}></a>
              <div className="flex flex-wrap items-center gap-x-2.5 overflow-hidden text-sm leading-6 text-gray-300">
                <div className={post.classes}>
                  <FontAwesomeIcon icon={post.icon} className="h-6 w-6 text-slate-50 fa-lg" aria-hidden="true" />
                </div>
                <div className="text-lg font-bold text-slate-50">
                {post.title}
                </div>
              </div>
              <h3 className="mt-3 text-sm font-light leading-6 text-slate-50">
                {post.description}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </div>

    <Banner />

    <Faq />

    <Footer />

    <Warning />

    </div>
  )
}

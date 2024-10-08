
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faAirplay, faDumbbell, faMugHot, faChargingStation } from '@fortawesome/pro-solid-svg-icons'
import Header from '@/components/header';
import Warning from '@/components/warning';
import Footer from '@/components/footer';
import Banner from '@/components/banner';
import Faq from '@/components/faq';

export const dynamic = 'force-dynamic'
export const revalidate = 0

const highligths = [
  {
    title: 'Colonnina di ricarica',
    text: 'Il nostro circolo sportivo è dotato di una colonnina di ricarica per auto elettriche “Repower Giotto”. Questo nuovo servizio rappresenta un ulteriore passo verso la sostenibilità e l\’innovazione, offrendo ai nostri soci la possibilità di ricaricare i propri veicoli elettrici comodamente durante la permanenza presso il circolo. La colonnina, grazie al suo design moderno e funzionale, è in grado di gestire ricariche efficienti e sicure, contribuendo a ridurre l\’impatto ambientale e a promuovere una mobilità più green.',
    icon: faChargingStation,
    images: ''
  },
  {
    title: 'Sale riunioni',
    text: 'Le nostre due sale riunioni sono ideali per incontri di lavoro, corsi di formazione o presentazioni, queste sale sono completamente attrezzate, spazione e luminose. Offrono un ambiente confortevole e professionale, perfetto per rendere ogni evento un successo.',
    icon: faGraduationCap,
    images: ''
  },
  {
    title: 'Sala digitale',
    text: 'La nostra sala dedicata alla formazione digitale è dotata di computer e connessione internet ad alta velocità. Questo ambiente è l\'ideale per corsi di formazione, workshop digitali e seminari. Un ambiente tecnologicamente attrezzato per apprendimenti efficaci e interattivi.',
    icon: faAirplay,
    images: [
      {
        path: '/spaziServiziGallery3.jpg'
      },
      {
        path: '/spaziServiziGallery4.jpg'
      }
    ]
  },
  {
    title: 'Palestre',
    text: 'La nostre due palestre sono ampie e ben attrezzate, perfette per ospitare una varietà di attività sportive. Disponibili per l\'affitto, queste strutture sono ideali per eventi sportivi, allenamenti di squadra e sessioni di fitness individuali, offrendo attrezzature moderne in un ambiente motivante.',
    icon: faDumbbell,
    images: [
      {
        path: '/spaziServiziGallery5.jpg'
      },
      {
        path: '/spaziServiziGallery6.jpg'
      }
    ]
  },
  {
    title: 'Bar',
    text: 'La nostra associazione sportiva offre anche un bar accogliente e ben fornito. Perfetto per eventi sociali, incontri dopo l\'allenamento o celebrazioni, il nostro bar crea un ambiente rilassante e conviviale dove soci e ospiti possono rilassarsi e socializzare.',
    icon: faMugHot,
    images: [
      {
        path: '/spaziServiziGallery7.jpg'
      },
      {
        path: '/spaziServiziGallery8.jpg'
      }
    ]
  }
]

export default function Example() {

  return (
    <div className="bg-slate-50">

    <Warning />

    <Header />

    <main className="isolate bg-slate-50">

    
    <div className="relative isolate">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
          </svg>
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{
                clipPath:
                  'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
              }}
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Convenzioni e spazi a portata di mano
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    Le nostre convenzioni permettono ai soci di risparmiare su una vasta gamma di servizi e prodotti mentre le sale e le palestre possono essere affittate per organizzare i propri eventi. Entra a far parte della nostra comunità e goditi i numerosi vantaggi che abbiamo da offrire!
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        src="/imageServizi1.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        src="/imageServizi2.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="/imageServizi3.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src="/imageServizi4.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="/imageServizi5.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="pt-24 sm:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <div className="absolute inset-0 bg-gray-900 mix-blend-multiply" />
              <div
                className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
                aria-hidden="true"
              >
                <div
                  className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#4f46e5] to-[#991b1b] opacity-40"
                  style={{
                    clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                  }}
                />
              </div>
              <figure className="relative isolate">
                <p className="mt-6 text-2xl font-semibold leading-10 text-white">
                  Convenzioni per i soci
                </p>
                <p className="mt-2 text-md leading-6 text-slate-100">
                  Convenzioni locali e dal DLF nazionale
                </p>
                <p className="mt-2 text-md leading-6 text-slate-100">
                  Spazi in affitto (tariffe in segreteria)
                </p>
                <figcaption className="mt-6 text-sm leading-6 text-slate-300 underline underline-offset-2">
                  <a href="/contatti">
                    Contattaci per maggiori informazioni <span aria-hidden="true">&rarr;</span>
                  </a>
                </figcaption>
              </figure>
            </div>
          </div>
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-red-600">Le iniziative del DLF</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Opportunità e sostegno per i soci
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  Il dopolavoro ferroviario si impegna a mettere a disposizione degli associati gli strumenti essenziali per sviluppare iniziative e progetti. Il nostro impegno si traduce in una vasta gamma di convenzioni mirate a soddisfare le esigenze di ciascun associato. Inoltre, mettiamo a disposizione dei nostri soci spazi in affitto per eventi, riunioni, attività sportive o semplicemente per trascorrere del tempo con amici e familiari. 
                </p>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                {highligths.map((highlight) => (
                  <li key={highlight.title}>
                    <div className="flex gap-x-3">
                      <FontAwesomeIcon icon={highlight.icon} className="mt-1 h-5 w-5 flex-none text-red-600 fa-lg" />
                      <div>
                        <strong className="font-semibold text-gray-900">{highlight.title}</strong>. {highlight.text}
                        {Array.isArray(highlight.images) && highlight.images.length > 0 && (
                          <div className="grid grid-cols-2 mt-4 gap-4">
                            {highlight.images.map((image, index) => (
                              <div key={index}>
                                <img className="h-auto max-w-full rounded-lg" src={image.path} alt="" />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
                <p className="mt-8">
                  Tutte le nostre iniziative vanno nella direzione della promozione di valori come lo sviluppo sostenibile, la pace, l&apos;interculturalità e l&apos;antirazzismo, offrendo formazione a vari livelli e contribuendo alla cooperazione internazionale con studi, progettazioni e programmi dedicati.
                </p>
              </div>
            </div>
            <div className="mt-10 flex">
              <a href="/associazione" className="text-base font-semibold leading-7 text-red-600 underline underline-offset-2">
                Approfondisci la nostra realtà <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>


    <Banner />


    </main>

    <Faq />
    
    <Footer />


    </div>
  )
}

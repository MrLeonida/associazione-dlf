import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandsClapping, faUniformMartialArts, faUserFriends } from '@fortawesome/pro-solid-svg-icons'
import Header from '@/components/header';
import Warning from '@/components/warning';
import Footer from '@/components/footer';
import Faq from '@/components/faq';
import Banner from '@/components/banner';

export const dynamic = 'force-dynamic'
export const revalidate = 0

const features = [
  {
    name: 'Forza e agilità in armonia',
    description: 'Partecipa alle nostre lezioni di karate per migliorare la tua forza, agilità e coordinazione. Con un focus sulla disciplina personale e sul rispetto, il Karate DLF offre un ambiente stimolante per crescere sia fisicamente che mentalmente.',
    icon: faUniformMartialArts,
  },
  {
    name: 'Sicurezza personale al primo posto',
    description: 'Con il nostro focus dedicato sull\'autodifesa, ti offriamo un corso mirato a fornirti abilità pratiche per affrontare situazioni potenzialmente pericolose.',
    icon: faHandsClapping,
  },
  {
    name: 'In cammino con i tuoi compagni',
    description: 'Contiamo su istruttori esperti nel Karate e nell’autodifesa, dedicati a guidarti nel tuo percorso. Con anni di esperienza, i nostri insegnanti sono qui per ispirare, correggere e motivare, garantendo che tu raggiunga il massimo delle tue potenzialità.',
    icon: faUserFriends,
  }
]

export default function Page() {

  return (
    <div className="bg-slate-50">
    
    <Warning />

    <Header />

    <main className="isolate bg-slate-50">

    
    <div className="bg-white">

      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Karate: l&apos;arte marziale del DLF
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Scopri il mondo del Karate DLF abbracciando la crescita personale attraverso l&apos;antica arte marziale. Partecipa ai nostri corsi per coltivare la forza mentale e fisica. Aggiungi un livello di sicurezza con il nostro corso di autodifesa, rendendo il tuo percorso ancora più completo e versatile.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="/heroKarate.jpg"
            alt=""
          />
        </div>
      </div>
    </div>

    <div className="pt-24 sm:pt-32 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-800">Karate e autodifesa per adulti</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Potenzia il tuo corpo e la tua sicurezza
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Il Karate DLF è più di una disciplina marziale; è un viaggio che unisce la crescita personale e fisica. Attraverso l&apos;antica arte del karate, offriamo un percorso strutturato per sviluppare la forza mentale, la resistenza fisica e acquisire competenze di autodifesa. Sia che tu sia un principiante o un praticante esperto, unisciti a noi per affinare le tue abilità, coltivare la disciplina e connetterti con una comunità appassionata.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <FontAwesomeIcon icon={feature.icon} className="flex-none text-indigo-800 fa-md" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
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


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy, faWater, faDumbbell } from '@fortawesome/pro-solid-svg-icons'
import Header from '@/components/header';
import Warning from '@/components/warning';
import Footer from '@/components/footer';
import Faq from '@/components/faq';
import Banner from '@/components/banner';

const features = [
  {
    name: 'Vittorie che parlano di eccellenza',
    description: 'Il nostro impegno e la dedizione dei nostri atleti si riflettono nelle numerose vittorie conquistate a livello nazionale e internazionale. La squadra di canottaggio è sinonimo di eccellenza, con successi che testimoniano la passione e l\'abilità di ogni rematore che indossa con orgoglio i colori del nostro circolo.',
    icon: faTrophy,
  },
  {
    name: 'Corsi di canottaggio',
    description: 'Apri le porte del canottaggio con i nostri corsi dedicati dai 12 anni in su. I nostri istruttori altamente qualificati guidano i partecipanti in un percorso di apprendimento, trasmettendo le tecniche e la passione che hanno fatto di noi una realtà vincente.',
    icon: faWater,
  },
  {
    name: 'Fitness ed allenamento',
    description: 'Nel nostro circolo, non ci limitiamo solo alle acque aperte. La presenza di una moderna palestra pesi e di una vasca voga coperta ci consente di offrire un ambiente completo per l\'allenamento. Affidati al nostro maestro esperto che guiderà il tuo percorso di sviluppo fisico e miglioramento delle prestazioni.',
    icon: faDumbbell,
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

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
                  Esplora il fascino del canottaggio
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Esplora l&apos;arte del canottaggio nel nostro circolo. Con un passato glorioso, tra cui vittorie olimpiche nel 1969, e l&apos;onore della Stella al Merito CONI, incarniamo l&apos;impegno e l&apos;eccellenza nel nostro sport. Scopri con noi l&apos;emozionante connubio tra avventure sulle acque e una tradizione di successi. Prenota ora la tua lezione gratuita per unirti a questa straordinaria esperienza.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="/heroCanottaggio.jpg"
            alt=""
          />
        </div>
      </div>
    </div>

    <div className="pt-24 sm:pt-32 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-800">Naviga tra emozioni uniche</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Oltre le onde, una passione che vince
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Il canottaggio va oltre la competizione: è una danza sulla superficie dell&apos;acqua che unisce mente, corpo e spirito. Scopri il nostro impegno nell&apos;esplorare nuovi orizzonti attraverso il canottaggio, dove ogni colpo di remo è un passo verso avventure e connessioni più profonde.
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

    <Warning />


    </div>
  )
}

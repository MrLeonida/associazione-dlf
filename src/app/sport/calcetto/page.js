
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleRoof, faWreathLaurel, faFutbol } from '@fortawesome/pro-solid-svg-icons'
import Header from '@/components/header';
import Warning from '@/components/promo';
import Footer from '@/components/footer';
import Faq from '@/components/faq';
import Banner from '@/components/banner';
import Attivita from '@/components/attivita';

const features = [
  {
    name: 'WanSport: la tua app per il calcetto',
    description: 'Prenota il tuo campo preferito in pochi clic e resta sempre aggiornato sugli orari disponibili. Con WanSport, hai il controllo completo del tuo gioco, il tutto a portata di mano.',
    icon: faFutbol,
  },
  {
    name: 'Porta la tua squadra',
    description: 'Vivi l\'entusiasmo del calcetto con la tua squadra e crea ricordi indelebili sul campo. Cosa c\'è di meglio che condividere la passione con i tuoi amici?',
    icon: faWreathLaurel,
  },
  {
    name: 'Campo coperto',
    description: 'Il nostro circolo offre un campo da calcetto sintetico coperto, consentendoti di giocare e allenarti indipendentemente dalle condizioni meteorologiche.',
    icon: faPeopleRoof,
  }
]

export default function Page() {

  return (
    <div className="bg-slate-50">
    
    <Attivita />

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
                  Calcetto: passione, divertimento e competizione
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Entra in campo con il calcetto, dove la passione per il gioco si unisce alla competizione ed allo spirito di squadra. Che tu sia un calciatore esperto o stia iniziando il tuo percorso nel mondo del calcio, c&apos;è un posto per te in campo!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="/heroCalcetto.jpg"
            alt=""
          />
        </div>
      </div>
    </div>

    <div className="pt-24 sm:pt-32 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-800">Vivi l&apos;adrenalina</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Scendi in campo con WanSport
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Nel nostro circolo conta la tua voglia di divertirti e di condividere momenti di sport e allegria con gli amici. Scegli la libertà di giocare, prenota la tua partita con WanSport e unisciti a noi sul campo!
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

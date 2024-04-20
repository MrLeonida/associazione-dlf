
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWavePulse, faHeart, faShirtRunning } from '@fortawesome/pro-solid-svg-icons'
import Header from '@/components/header';
import Warning from '@/components/promo';
import Footer from '@/components/footer';
import Faq from '@/components/faq';
import Banner from '@/components/banner';
import Attivita from '@/components/attivita';

const features = [
  {
    name: 'Pilates per l\'equilibrio corporeo',
    description: 'Scopri il benessere con i nostri corsi di Pilates, concentrati sul potenziamento del "core" e sull\'armonia tra corpo e mente.',
    icon: faHeart,
  },
  {
    name: 'GAG: fitness divertente',
    description: 'Divertiti mentre ti alleni con i corsi GAG, un mix di ginnastica, aerobica e giochi per migliorare resistenza e coordinazione.',
    icon: faShirtRunning,
  },
  {
    name: 'Tonificazione per modellare il tuo corpo',
    description: 'Scolpisci l\'addome e brucia calorie con i corsi di tonificazione e aerotone, progettati per migliorare la forma fisica generale.',
    icon: faWavePulse,
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

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
                  Vivi attivamente con la ginnastica DLF
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Immergiti in un mondo di salute con noi! Unisciti alla nostra missione per promuovere il benessere attraverso l&apos;attività fisica, dove ogni movimento è un passo verso una vita più sana e attiva.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="/heroGinnastica.jpg"
            alt=""
          />
        </div>
      </div>
    </div>

    <div className="pt-24 sm:pt-32 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-800">Riscopri il tuo potenziale</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            La formula vincente per il tuo benessere
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Esplora la nostra ricca varietà di corsi di ginnastica, un&apos;invito a riscoprire la tua vitalità. Dalle pratiche orientate al benessere come il Pilates, ai ritmi energici del GAG, fino alla tonificazione e all&apos;aerotone, troverai il supporto perfetto per plasmare il tuo corpo e rafforzare la tua connessione con la salute e l&apos;equilibrio. Vieni al DLF per scoprire questo percorso verso uno stile di vita attivo e dinamico.
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

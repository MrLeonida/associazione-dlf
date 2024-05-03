import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolleyball, faUserGroupSimple, faGoalNet } from '@fortawesome/pro-solid-svg-icons'
import Header from '@/components/header';
import Warning from '@/components/warning';
import Footer from '@/components/footer';
import Faq from '@/components/faq';
import Banner from '@/components/banner';

export const revalidate = 60

const features = [
  {
    name: 'Campo di pallavolo: la tua arena di gioco',
    description: 'Scopri il nostro campo di pallavolo, il luogo dove la passione prende vita. Un\'arena dove sfidarsi, divertirsi e vivere l\'intensità di questo sport.',
    icon: faVolleyball,
  },
  {
    name: 'Unisciti alla nostra famiglia pallavolistica',
    description: 'Entra a far parte della nostra squadra amatoriale, dove l\'amicizia è la base della competizione. Condividiamo momenti di gioco, allenamento e spirito di squadra.',
    icon: faUserGroupSimple,
  },
  {
    name: 'Prenota il campo: gioca con libertà',
    description: 'Hai la possibilità di prenotare il campo quando vuoi. Organizza partite spontanee o programmate, mettiti alla prova e goditi la tua passione per la pallavolo senza limiti.',
    icon: faGoalNet,
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
                  Il volley nel cuore dell&apos;azione DLF
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Scopri la passione e l&apos;energia della pallavolo con noi. Unisciti al nostro circolo per vivere momenti di sfida, divertimento e amicizia, dove lo sport diventa una vera e propria esperienza.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="/heroVolley.jpg"
            alt=""
          />
        </div>
      </div>
    </div>

    <div className="pt-24 sm:pt-32 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-800">Esplosione di energia</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Gioca, impara e vivi l&apos;entusiasmo con noi!
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Scopri l&apos;entusiasmante mondo della pallavolo DLF, dove la passione per lo sport si fonde con l&apos;amicizia e il divertimento. La nostra squadra amatoriale è pronta ad accoglierti per qualche partita amichevole, creando un ambiente informale e divertente.
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

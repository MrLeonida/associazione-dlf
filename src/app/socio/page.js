
import { CheckIcon } from '@heroicons/react/24/outline'
import Header from '@/components/header';
import Warning from '@/components/warning';
import Footer from '@/components/footer';
import Faq from '@/components/faq';

export const revalidate = 60

const includedFeatures = [
  'Accesso agli spazi delle attività',
  'Promozioni dedicate online',
  'Tariffe agevolate su alcune attività',
  'Polizza assicurativa opzionale',
]

export default function Page() {

  return (
    <div className="bg-slate-50">

    <Warning />

    <Header />

    <main className="isolate bg-slate-50">


    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
              Unisciti a noi: trasforma passione in azione, diventa socio oggi!
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Se sei pronto per unirti a una famiglia appassionata di sport, di attività all&apos;aperto e di cultura, la nostra associazione è il luogo perfetto per te! Ti invitiamo a diventare parte dell&apos;associazione e a condividere le nostre passioni in un ambiente divertente e stimolante.
            </p>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src="/heroSocioMin.jpg"
            alt=""
          />
        </div>
      </div>
    </div>

    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Pochi passi per diventare socio</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Alimenta la tua passione ed entra a far parte di un gruppo organizzato: potrai partecipare ad incontri settimanali, visite guidate, mostre, escursioni.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Tariffa di adesione</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Scegliendo di aderire oggi, avrai accesso esclusivo ad una serie di vantaggi e potrai vivere la passione con noi al massimo.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-800">Cos&apos;è incluso</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">Quota annuale</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">20€</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">EURO</span>
                </p>
                <a
                  href="https://nazionale.dlf.it/tesseramento-ferrovieri/"
                  className="mt-10 block w-full rounded-md bg-indigo-800 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Iscriviti ora
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Tariffa agevolata di 15,00€ per familiari di ferrovieri, pensionati e under 18.
                </p>
              </div>
            </div>
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

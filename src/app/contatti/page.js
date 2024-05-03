
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuildings, faClock, faEnvelope, faPhone } from '@fortawesome/pro-solid-svg-icons';
import Header from '@/components/header';
import Warning from '@/components/warning';
import Footer from '@/components/footer';
import Faq from '@/components/faq';

export const revalidate = 60

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
              Rispondiamo a qualsiasi dubbio
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Vieni a trovarci, la nostra segreteria sarà lieta di rispondere a tutte le tue domande. Gli orari di apertura sono dal lunedì al venerdì dalle ore 9:00 alle ore 13 :00 e dalle ore 15:00 alle ore 18:00. Ti aspettiamo!
            </p>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src="/heroContatti.jpg"
            alt=""
          />
        </div>
      </div>
    </div>


    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill="white" />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Rimani in contatto</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Per contattarci o avere ulteriori informazioni, potrei scegliere di telefonare oppure scrivere una mail al nostro indirizzo o utilizzare i nostri canali social. Ti forniremo una risposta nel più breve tempo possibile.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Dove siamo</span>
                  <FontAwesomeIcon icon={faBuildings} className="text-slate-600 fa-lg" />
                </dt>
                <dd>
                  <span className='font-semibold'>Dove siamo</span>
                  <br />
                  Via Giuseppe Benzi, 86
                  <br />
                  31100 Treviso (TV)
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Orari della sede</span>
                  <FontAwesomeIcon icon={faClock} className="text-slate-600 fa-lg" />
                </dt>
                <dd>
                  <span className='font-semibold'>Orari della sede</span>
                  <br />
                  Dal lunedì al venerdì: 08.30-22.30
                  <br />
                  Il sabato: 08.30-18.30
                  <br />
                  La domenica ed i festivi: 8.30-13.00
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Orari degli uffici</span>
                  <FontAwesomeIcon icon={faClock} className="text-slate-600 fa-lg" />
                </dt>
                <dd>
                  <span className='font-semibold'>Orari degli uffici</span>
                  <br />
                  Dal lunedì al venerdì: 09.00-13.00 e 15.00-18.00
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telefono</span>
                  <FontAwesomeIcon icon={faPhone} className="text-slate-600 fa-lg" />
                </dt>
                <dd>
                  <span className='font-semibold'>Per chiamarci</span>
                  <br />
                  <a className="hover:text-gray-900 underline underline-offset-2" href="tel:+39 0422 401540">
                    +39 0422 401540
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <FontAwesomeIcon icon={faEnvelope} className="text-slate-600 fa-lg" />
                </dt>
                <dd>
                  <span className='font-semibold'>Per scriverci</span>
                  <br />
                  <a className="hover:text-gray-900 underline underline-offset-2" href="mailto:dlftreviso@dlf.it">
                    dlftreviso@dlf.it
                  </a>
                  <br />
                  <a className="hover:text-gray-900 underline underline-offset-2" href="mailto:dopoferroviariotreviso@pec.buffetti.it">
                    dopoferroviariotreviso@pec.buffetti.it
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form action="#" method="POST" className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                  Nome
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                  Cognome
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                  Numero di telefono
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                  Messaggio
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-indigo-800 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Invia il messaggio
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>

    </main>

    <Faq />

    <Footer />


    </div>
  )
}

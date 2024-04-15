
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTennisBall, faWater, faFutbol, faUniformMartialArts, faVolleyball, faDumbbell } from '@fortawesome/pro-solid-svg-icons'
import Header from '@/components/header';
import Warning from '@/components/warning';
import Footer from '@/components/footer';
import Banner from '@/components/banner';
import Faq from '@/components/faq';

const highligths = [
  {
    title: 'Canottaggio',
    text: 'Riconosciuto a livello nazionale, la struttura dispone di palestra per pesistica, vasca voga coperta oltre a tutte le attrezzature per le uscite su acqua. I corsi sono disponibili a partire dai 12 anni ed offriamo una lezione gratuita. ',
    icon: faWater,
    href: '/sport/canottaggio',
  },
  {
    title: 'Tennis',
    text: 'La struttura conta 4 campi in terra rossa, di cui 3 coperti, ed un campo in erba sintetica. Avrai la possibilità di giocare prenotando in qualsiasi momento tramite l’app dedicata Wansport. ',
    icon: faTennisBall,
    href: '/sport/tennis',
  },
  {
    title: 'Ginnastica',
    text: 'Unisciti alla nostra missione per promuovere il benessere attraverso l\'attività fisica, dove ogni movimento è un passo verso una vita più sana e attiva. ',
    icon: faDumbbell,
    href: '/sport/ginnastica',
  },
  {
    title: 'Calcetto',
    text: 'È possibile prenotare il campo per te e per i tuoi amici con l’app Wansport. ',
    icon: faFutbol,
    href: '/sport/calcetto',
  },
  {
    title: 'Karate e difesa personale',
    text: 'Vengono organizzati corsi per adulti presso la nostra palestra, ti aspettiamo! ',
    icon: faUniformMartialArts,
    href: '/sport/karate',
  },
  {
    title: 'Volley',
    text: 'Organizziamo allenamenti di livello amatoriale, vieni a divertirti in compagnia. ',
    icon: faVolleyball,
    href: '/sport/volley',
  }
]
const stats = [
  { label: 'Società sportive', value: '4' },
  { label: 'Iscritti', value: '250+' },
  { label: 'Palestre', value: '3' },
  { label: 'Campi e piste', value: '9' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

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
                    Lo sport come stile di vita
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    L&apos;attività sportiva, da sempre ritenuta un&apos;esperienza ricreativa e coinvolgente, riveste un ruolo fondamentale per stimolare la crescita personale, il benessere fisico e la socializzazione. Noi lo sappiamo ed il nostro impegno in questa direzione garantisce ai nostri soci l&apos;accesso ad attività divertenti e strutturate.
                  </p>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        src="/imageSport1.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        src="/imageSport2.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="/imageSport3.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src="/imageSport4.jpg"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="/imageSport5.jpg"
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
                  className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#4f46e5] to-[#854d0e] opacity-40"
                  style={{
                    clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                  }}
                />
              </div>
              <figure className="relative isolate">
                <p className="mt-6 text-2xl font-semibold leading-10 text-white">
                  Tariffe ed orari per i soci
                </p>
                <p className="mt-2 text-md leading-6 text-slate-100">
                  Vedere le pagine specifiche di ciascuno sport
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
              <p className="text-base font-semibold leading-7 text-yellow-600">Vieni a provare!</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Il nostro impegno, la vostra passione
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  Il Dopolavoro Ferroviario vanta uno spiccato interesse per lo sport, evidenziato dalla partecipazione massiccia dei soci e dall&apos;organizzazione quotidiana di numerose attività. Grazie agli sforzi finanziari e all&apos;intenso lavoro svolto dalle associazioni sportive, il nostro centro polisportivo ha ampliato sempre più il numero degli iscritti, ottenendo riconoscimenti e risultati a livello nazionale.
                </p>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                {highligths.map((highligth) => (
                  <li key={highligth.title} className="flex gap-x-3">
                    <FontAwesomeIcon icon={highligth.icon} className="mt-1 h-5 w-5 flex-none text-yellow-600 fa-lg" />
                    <span>
                    <strong className="font-semibold text-gray-900">{highligth.title}</strong>. {highligth.text} 
                    <a href={highligth.href} className="text-base font-semibold leading-7 text-yellow-600 underline underline-offset-2">
                      Scopri di più <span aria-hidden="true">&rarr;</span>
                    </a>
                    </span>
                  </li>
                ))}
              </ul>
                <p className="mt-8">
                  Che tu sia un principiante o un atleta esperto, troverai qualcosa che fa per te, dalle classiche discipline a opzioni più specializzate come pilates e arti marziali. I nostri istruttori qualificati sono qui per guidarti e motivarti lungo il tuo percorso sportivo. Unisciti a noi e vivi lo spirito di squadra, la competizione amichevole e il divertimento dello sport!
                </p>
              </div>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4">
              {stats.map((stat, statIdx) => (
                <div key={statIdx}>
                  <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.label}</dt>
                  <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">{stat.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10 flex">
              <a href="/associazione" className="text-base font-semibold leading-7 text-yellow-600 underline underline-offset-2">
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

    <Warning />


    </div>
  )
}

"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTennisBall, faRacquet, faUserFriends } from '@fortawesome/pro-solid-svg-icons'
import Header from '@/components/header';
import Warning from '@/components/warning';
import Footer from '@/components/footer';
import Faq from '@/components/faq';
import Banner from '@/components/banner';

const features = [
  {
    name: 'Livello agonista',
    description: 'Partecipa agli allenamenti, consigliato e seguito da maestri qualificati e certificati FIT. Affina le tue abilità e migliora i tuoi colpi. Con la tua determinazione e il tuo impegno, potrai raggiungere traguardi importanti e giocare nel campionato regionale con una delle squadre della Treviso Tennis Team.',
    icon: faTennisBall,
  },
  {
    name: 'Livello principiante',
    description: 'Fai una prova con uno dei nostri maestri, saprà indicarti il gruppo più adatto al tuo livello di gioco. Ogni giorno sono disponibili lezioni di gruppo entry level e medium level, per migliorare le tue capacità e insegnarti tutte le nozioni a livello tecnico-tattico.',
    icon: faRacquet,
  },
  {
    name: 'Gioca con gli amici',
    description: 'Prenota il campo tramite l’app dedicata Wansport e vieni a giocare con i tuoi amici. E se non trovi il tuo compagno, cerca una partita aperta e unisciti! In poco tempo troverai nuovi appassionati di tennis come te e potrai dar vita a sfide emozionanti nel segno della competitività e dell’amicizia.',
    icon: faUserFriends,
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
                  Unisciti a noi e sfida i tuoi amici
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Esplora la passione e la vitalità del tennis con la nostra dinamica comunità di giocatori. Unisciti a noi per condividere momenti di competizione, divertimento e compagnia, dove il tennis diventa un&apos;esperienza collettiva indimenticabile.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="/heroTennis.jpg"
            alt=""
          />
        </div>
      </div>
    </div>

    <div className="pt-24 sm:pt-32 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-800">Impugna la racchetta</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            I maestri ti aspettano, vieni a provare!
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            La nostra comunità di tennisti ti invita calorosamente ad unirti alle nostre coinvolgenti sessioni di pratica e partecipare ai tornei sociali che danno vita ad emozionanti match. Con un&apos;atmosfera accogliente e un impegno condiviso per il divertimento, i nostri campi da tennis diventano il luogo ideale per sviluppare le tue capacità sportive e organizzare le tue partite in amicizia. Che tu sia un principiante o un giocatore agonista, troverai il tuo posto nel nostro mondo tennistico. <strong>In collaborazione con Treviso Tennis Team.</strong>
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

"use client";

import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "È possibile iscriversi anche se non si è ferrovieri?",
    answer: "Certamente, tutti hanno la possibilità di iscriversi alla nostra associazione.",
  },
  {
    question: "Come posso tesserarmi?",
    answer: "Si può richiedere la propria tessera in Segreteria o online tramite form dedicato.",
  },
  {
    question: "Dove posso trovare li sconti a me dedicati?",
    answer: "Il sito nazionale DLF è sempre aggiornato con le offerte dedicate attive.",
  },
  {
    question: "Quali sono le strutture a disposizione?",
    answer: "Le aree dedicate ai nostri associati contano 3 palestre (di cui 1 dedicata al canottaggio), 4 campi da tennis, 1 campo da calcetto, 4 sale riunioni, 3 piste da bocce, bar ed un ampio giardino.",
  },
  {
    question: "Come rimanere aggiornati sulle attività organizzate?",
    answer: "La sezione News del sito sarà presto disponibile e sempre aggiornata con le ultime novità dell’associazione e delle nostre organizzazioni sportive.",
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Faq() {

  return (
    <div className="bg-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Domande frequenti sulle nostre attività</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

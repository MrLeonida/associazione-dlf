"use client";

import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faTennisBall, faWater, faFutbol, faUniformMartialArts, faVolleyball, faMedal, faSpa } from '@fortawesome/pro-solid-svg-icons'
import Link from 'next/link';

const products = [
  { name: 'Canottaggio', description: 'Unisciti ad una scuola ai vertici nazionali', href: '/sport/canottaggio', icon: faWater },
  { name: 'Tennis', description: 'Affitta un campo e divertiti con gli amici', href: '/sport/tennis', icon: faTennisBall },
  { name: 'Ginnastica', description: 'Corsi di pilates, tonificazione e tanto altro', href: '/sport/ginnastica', icon: faSpa },
  { name: 'Calcetto', description: 'Chiama gli amici, il pallone lo mettiamo noi', href: '/sport/calcetto', icon: faFutbol },
  { name: 'Karate e difesa personale', description: 'Allaccia la cintura e sali sul tatami', href: '/sport/karate', icon: faUniformMartialArts },
  { name: 'Volley', description: 'Divertiti con la nostra squadra amatoriale', href: '/sport/volley', icon: faVolleyball },
]
const callsToAction = [
  { name: 'Tutti gli sport', href: '/sport', icon: faMedal }
]
const company = [
  { name: 'Treviso e Belluno', href: '/associazione' },
  { name: 'Nazionale', href: 'https://nazionale.dlf.it/' },
  { name: 'Diventa socio', href: '/socio' },
  { name: 'News', href: '/news' },
  { name: 'Contatti', href: '/contatti' },
]
const app = [
  { name: 'App Store', href: 'https://apps.apple.com/it/app/wansport/id6445919117' },
  { name: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.wansport.community' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (

      <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Associazione DLF Treviso</span>
            <img className="h-8 w-auto" src="/logo.png" alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">

        <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1.5 text-sm font-semibold leading-6 text-slate-900">
              Associazione
              <FontAwesomeIcon icon={faChevronDown} className="fa-sm text-slate-400" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-56 rounded-xl bg-slate-50 p-2 shadow-lg ring-1 ring-gray-900/5">
                {company.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-slate-900 hover:bg-slate-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </Popover.Panel>
            </Transition>
          </Popover>

          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1.5 text-sm font-semibold leading-6 text-slate-900">
              Sport
              <FontAwesomeIcon icon={faChevronDown} className="fa-sm text-slate-400" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-slate-50 shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-slate-200 group-hover:bg-slate-100">
                        <FontAwesomeIcon icon={item.icon} className="h-6 w-6 text-slate-600 group-hover:text-indigo-600 fa-lg" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-slate-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-slate-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 divide-x divide-gray-900/5 bg-slate-100">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-slate-900 hover:bg-slate-200"
                    >
                      <FontAwesomeIcon icon={item.icon} className="fa-sm text-slate-400" aria-hidden="true" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <a href="/turismo-e-cultura" className="text-sm font-semibold leading-6 text-slate-900">
            Turismo e cultura
          </a>
          <a href="/attivita-e-gruppi" className="text-sm font-semibold leading-6 text-slate-900">
            Attività e gruppi
          </a>
          <a href="/spazi-e-servizi" className="text-sm font-semibold leading-6 text-slate-900">
            Spazi e servizi
          </a>


        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">

          <Popover.Group>
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1.5 text-sm font-semibold leading-6 text-slate-900">
                Prenota
                <FontAwesomeIcon icon={faChevronDown} className="fa-sm text-slate-400" />
              </Popover.Button>
              <Popover.Panel className="absolute right-0 top-full z-10 mt-3 w-56 rounded-xl bg-slate-50 p-2 shadow-lg ring-1 ring-gray-900/5">
                {app.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-slate-900 hover:bg-slate-200"
                  >
                    {item.name}
                  </a>
                ))}
              </Popover.Panel>
            </Popover>
          </Popover.Group>

        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">

              <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Associazione
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {company.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Sport
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <a
                  href="/turismo-e-cultura"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-gray-50"
                >
                  Turismo e cultura
                </a>
                <a
                  href="/attivita-e-gruppi"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-gray-50"
                >
                  Attività e gruppi
                </a>
                <a
                  href="/spazi-e-servizi"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-gray-50"
                >
                  Spazi e servizi
                </a>

                
              </div>

              <Disclosure as="div" className="-mx-3 py-6">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Prenota
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {app.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>

  )
}
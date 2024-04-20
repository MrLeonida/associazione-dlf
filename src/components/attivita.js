import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPartyHorn } from '@fortawesome/pro-solid-svg-icons'
import { fetchNewsAttivitaFromFilemaker } from '@/app/lib/apiNewsAttivita';

async function getData() {
  const data = await fetchNewsAttivitaFromFilemaker();
  return data
};

export default async function Attivita() {

  const promos = await getData()
  
  if (promos) {

    return (
      <div className="flex items-center justify-center gap-x-6 bg-indigo-800 px-6 py-2.5 sm:px-3.5">
        <p className="text-sm leading-6 text-white">
            <FontAwesomeIcon icon={faPartyHorn} className="fa-lg mr-1.5" />
            <span className="font-semibold">Attività in risalto! </span>
            {promos.map((promo) => (
              <a key={promo.fieldData._idNews} href={promo.fieldData.ctWebLink} className="underline underline-offset-2">
              {promo.fieldData.title} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
        </p>
      </div>
    )
  
  } else {

    return null

  }

}
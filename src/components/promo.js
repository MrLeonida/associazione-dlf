import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBells } from '@fortawesome/pro-solid-svg-icons'
import { fetchNewsPromoFromFilemaker } from '@/app/lib/apiNewsPromo';

async function getData() {
  const data = await fetchNewsPromoFromFilemaker();
  return data
};

export default async function Promo() {

  const promos = await getData()
  
  if (promos) {

    return (
      <div className="flex items-center justify-center gap-x-6 bg-teal-800 px-6 py-2.5 sm:px-3.5">
        <p className="text-sm leading-6 text-white">
            <FontAwesomeIcon icon={faBells} className="fa-lg mr-1.5" />
            <span className="font-semibold">Promo in corso! </span>
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPartyHorn } from '@fortawesome/pro-solid-svg-icons'
import { fetchNewsActivityActualFromFirestore } from '@/app/lib/firestoreNewsActivityActual';
import { fetchNewsPromoActualFromFirestore } from '@/app/lib/firestoreNewsPromoActual';

async function getDataActivity() {
  const data = await fetchNewsActivityActualFromFirestore();
  return data
};
async function getDataPromo() {
  const data = await fetchNewsPromoActualFromFirestore();
  return data
};

export default async function Warning() {

  const activities = await getDataActivity()
  const promos = await getDataPromo()
  
  if (activities) {

    return (
      <div className="flex items-center justify-center gap-x-6 bg-indigo-800 px-6 py-2.5 sm:px-3.5">
        <p className="text-sm leading-8 text-white">
            <FontAwesomeIcon icon={faPartyHorn} className="fa-lg mr-1.5" />
            <span className="font-semibold">Attività in risalto! </span>
            {activities.map((activity) => (
              <a key={activity.fieldData.idNews} href={activity.fieldData.link} className="underline underline-offset-2">
              {activity.fieldData.title} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
        </p>
      </div>
    )

  } else if (promos) {

    return (
      <div className="flex items-center justify-center gap-x-6 bg-teal-800 px-6 py-2.5 sm:px-3.5">
        <p className="text-sm leading-8 text-white">
            <FontAwesomeIcon icon={faBells} className="fa-lg mr-1.5" />
            <span className="font-semibold">Promo in corso! </span>
            {promos.map((promo) => (
              <a key={promo.fieldData.idNews} href={promo.fieldData.link} className="underline underline-offset-2">
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
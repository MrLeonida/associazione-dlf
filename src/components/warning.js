import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPartyHorn, faBells } from '@fortawesome/pro-solid-svg-icons';
import { fetchNewsActivityWarningFromFirestore } from '@/app/lib/firestoreNewsActivityWarning';
import { fetchNewsPromoWarningFromFirestore } from '@/app/lib/firestoreNewsPromoWarning';

async function getDataActivity() {
  const data = await fetchNewsActivityWarningFromFirestore();
  return data;
}

async function getDataPromo() {
  const data = await fetchNewsPromoWarningFromFirestore();
  return data;
}

export default async function Warning() {
  const activities = await getDataActivity();
  const promos = await getDataPromo();

  if (!activities && !promos) {
    return null;
  }

  return (
    <div>
      {activities && activities.length > 0 && (
        <div className="flex items-center justify-center gap-x-6 bg-indigo-800 px-6 py-2.5 sm:px-3.5">
          <p className="text-sm text-center leading-6 text-white sm:leading-8">
            <FontAwesomeIcon icon={faPartyHorn} className="fa-lg mr-1.5" />
            <span className="font-semibold">Attività in risalto! </span>

            <a href="/news/attivita" className="underline underline-offset-2">
              {activities
                .map((activity) => activity.fieldData.subCategory.toLowerCase())
                .reduce((acc, subCategory, index, array) => {
                  if (index === 0) {
                    return subCategory.charAt(0).toUpperCase() + subCategory.slice(1);
                  } else if (index === array.length - 1) {
                    return `${acc} e ${subCategory}`;
                  } else {
                    return `${acc}, ${subCategory}`;
                  }
                }, '')
              }
              <span aria-hidden="true"> &rarr;</span>
            </a>

          </p>
        </div>
      )}

      {promos && promos.length > 0 && (
        <div className="flex items-center justify-center gap-x-6 bg-teal-800 px-6 py-2.5 sm:px-3.5">
          <p className="text-sm text-center leading-8 text-white sm:leading-8">
            <FontAwesomeIcon icon={faBells} className="fa-lg mr-1.5" />
            <span className="font-semibold">Promo in corso! </span>

            <a href="/news/promo" className="underline underline-offset-2">
              {promos
                .map((promo) => promo.fieldData.subCategory.toLowerCase())
                .reduce((acc, subCategory, index, array) => {
                  if (index === 0) {
                    return subCategory.charAt(0).toUpperCase() + subCategory.slice(1);
                  } else if (index === array.length - 1) {
                    return `${acc} e ${subCategory}`;
                  } else {
                    return `${acc}, ${subCategory}`;
                  }
                }, '')
              }
              <span aria-hidden="true"> &rarr;</span>
            </a>

          </p>
        </div>
      )}
    </div>
  );
}
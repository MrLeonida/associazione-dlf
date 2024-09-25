import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPartyHorn } from '@fortawesome/pro-solid-svg-icons';
import { fetchNewsWarningFromFirestore } from '@/app/lib/firestoreNewsWarning';

async function getDataActivity() {
  const data = await fetchNewsWarningFromFirestore();
  return data;
}

export default async function Warning() {
  const activities = await getDataActivity();

  if (!activities) {
    return null;
  }

  return (
    <div>
      {activities && activities.length > 0 && (
        <div className="flex items-center justify-center gap-x-6 bg-indigo-800 px-6 py-4 sm:px-3.5">
          <p className="text-sm text-center leading-6 text-white sm:leading-8">
            <FontAwesomeIcon icon={faPartyHorn} className="fa-lg mr-1.5" />
            <span className="font-semibold">Attività e promozioni in corso! </span>

            <a href="/news/attivita-e-promozioni" className="underline underline-offset-2">
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

    </div>
  );
}
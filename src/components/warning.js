
import { DataApi } from '@proofgeist/fmdapi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBells } from '@fortawesome/pro-solid-svg-icons'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default async function Warning() {

  const client = DataApi({
    db: "dlfTrevisoTheCoreApp",
    server: "https://dev.thecore.software",
    auth: {
      username: "api",
      password: "apiUser2024"
    }
  });
  const layout = 'apiNews'
  const sort =  [
    {
      "fieldName": "promoDateTo",
      "sortOrder": "ascend"
    }
  ]
  const query = [
    {
        "cFlagPromo": 1
    }
  ]

const findResult = await client.find({
  layout: layout,
  query: query,
  sort: sort
});

const code = 0;

  if(code == 0) {
  
  return (
      <div className="flex items-center justify-center gap-x-6 bg-teal-800 px-6 py-2.5 sm:px-3.5">
        <p className="text-sm leading-6 text-white">
            <FontAwesomeIcon icon={faBells} className="fa-lg mr-1.5" />
            <span className="font-semibold">Promozione in corso! </span> 
            <a href={findResult.data[0].fieldData.ctWebLink} className="underline underline-offset-2">
            {findResult.data[0].fieldData.title} <span aria-hidden="true">&rarr;</span>
            </a>
        </p>
      </div>
    

  )

} else {

  return null

}

}

import DapiClient from 'fm-dapi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBells } from '@fortawesome/pro-solid-svg-icons'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default async function Warning() {

  const dapiClient = new DapiClient({
    username: "api",
    password: "apiUser2024",
    version: "vLatest",
    host: "dev.thecore.software",
    database: "dlfTrevisoTheCoreApp"
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

  const findResult = await dapiClient.performFind(layout, {
    query: query,
    sort: sort
    })

  const code = findResult.messages[0].code;

  if(code == 0) {
  
  return (
      <div className="flex items-center justify-center gap-x-6 bg-teal-800 px-6 py-2.5 sm:px-3.5">
        <p className="text-sm leading-6 text-white">
            <FontAwesomeIcon icon={faBells} className="fa-lg mr-1.5" />
            <span className="font-semibold">Promozione in corso! </span> 
            <a href={findResult.response.data[0].fieldData.ctWebLink} className="underline underline-offset-2">
            {findResult.response.data[0].fieldData.title} <span aria-hidden="true">&rarr;</span>
            </a>
        </p>
      </div>
    

  )

} else {

  return null

}

}
import { ensureValidToken } from "./auth";

export async function fetchNewsAttivitaFromFilemaker() {
    try {
        const token = await ensureValidToken();
        const query = {
            query: [
                { "cFlagAttivita": 1, "flagActive": 1 }
            ],
            sort: [
                { "fieldName": "promoDateTo", "sortOrder": "ascend" }
            ],
            limit: 1
        };

        const response = await fetch('https://dev.thecore.software/fmi/data/vLatest/databases/dlfTrevisoTheCoreApp/layouts/apiNewsMini/_find', {
            cache: 'no-store',
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(query)  // Assicurati di serializzare il corpo della richiesta in JSON
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();  // Converte la risposta in JSON
        return data.response.data;
    } catch (error) {
        console.error('Failed to fetch data:', error);
        return null;
    }
}
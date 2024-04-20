import { setToken, getToken } from './authToken';

export async function authenticateWithFilemaker() {
    try {
        const response = await fetch('https://app.thecore.software/fmi/data/vLatest/databases/dlfTrevisoTheCoreApp/sessions', {
            cache: 'no-store',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa('api:apiUser2024')
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const token = data.response.token;
        setToken(token);
        return token;
    } catch (error) {
        console.error('Authentication failed:', error);
        return null;
    }
}

export async function ensureValidToken() {
    let token = getToken();
    if (!token) {
        token = await authenticateWithFilemaker();
    }
    return token;
}
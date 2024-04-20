let cachedToken = {
    value: null,
    expiry: null
};

export const setToken = (token) => {
    cachedToken.value = token;
    cachedToken.expiry = Date.now() + 600 * 1000;
};

export const getToken = () => {
    if (cachedToken.value && Date.now() < cachedToken.expiry) {
        return cachedToken.value;
    }
    return null;
};
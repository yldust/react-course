export const serverLogIn = async (email, password) => {
    return fetch(
        `https://loft-taxi.glitch.me/auth?username=${email}&password=${password}`
    ).then(res => res.json());
};

export const serverSignIn = async (email, password, name) => {
    return fetch(
        'https://loft-taxi.glitch.me/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({email, password, name, surname: 'nnnnyyy'})
        }
    ).then(res => res.json());
};
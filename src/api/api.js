export const serverLogIn = (email, password) => {
    return fetch(
        "https://loft-taxi.glitch.me/auth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email, password})
        }
    ).then(res => res.json());
};

export const serverSignIn = (email, password, name) => {
    return fetch(
        'https://loft-taxi.glitch.me/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({email, password, name, surname: 'without'})
        })
        .then(res => res.json())
        .catch((error) => error);
};

export const getCard = (token) => {
    return fetch(
        `https://loft-taxi.glitch.me/card?token=${token}`
    )
    .then(res => res.json())
    .catch((error) => error);
};

export const setCard = (data) => {
    console.log(data);
    return fetch("https://loft-taxi.glitch.me/card", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    .then(res => res.json())
    .catch((error) => error);
};

export const getAddressList = () => {
    return fetch(
        "https://loft-taxi.glitch.me/addressList"
    )
    .then(res => res.json())
    .catch((error) => error);
};

export const getRoute = (from, where) => {
    return fetch(
        `https://loft-taxi.glitch.me/route?address1=${from}&address2=${where}`
    )
    .then(res => res.json())
    .catch((error) => error);
};


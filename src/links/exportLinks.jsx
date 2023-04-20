import axios from 'axios';
import React from 'react';

const exportLinks = () => {
    const linkLogin = async (form) => {
        let data;
        await axios
            .post(
                'https://dent-app-production.up.railway.app/users/login', form)
            .then(async (params) => (data = params.data))
            .catch((error) => console.log(error));
        if (data) {
            await localStorage.setItem(
                'tokenDentApp',
                JSON.stringify(data.token)
            );
            await localStorage.setItem(
                'userDentApp',
                JSON.stringify(data.user)
            );
        }
        return data;
    };
    const linkRegister = async (form) => {
        let data;
        await axios
            .post('https://dent-app-production.up.railway.app/users', form)
            .then
            (async (params) =>
            (data = await linkLogin({
                email: form.email,
                password: form.password,
            }))
            )
            .catch((error) => console.log(error));
        return data;
    };

    return {
        linkLogin,
        linkRegister,
    };
};

export default exportLinks;
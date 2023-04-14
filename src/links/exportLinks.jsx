import axios from 'axios';
import React from 'react';

const exportLinks = () => {
    
    const linkLogin = async(form) => {
        let data 
        await axios.post('http://localhost:8000/users/login', form)
        .then(params=> ( data = params.data))
        .catch(error=> console.log(error));
        return data;
    }
    const linkRegister = async(form) => {
        let data
        await axios.post('http://localhost:8000/users', form)
        .then(params => (data = params.data))
        .catch(error => console.log(error));
        return data;
    }
 
    
    
    return {
        linkLogin,
        linkRegister
    }
};

export default exportLinks;
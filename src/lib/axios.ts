import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://api.example.com',
    timeout: 2500,
});

instance.defaults.timeout = 2500;

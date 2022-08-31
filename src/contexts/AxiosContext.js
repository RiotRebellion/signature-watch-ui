import axios from 'axios';

export const AxiosContext = axios.create({
    baseURL: 'http://localhost:59386',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
    }
})

export const ApplyToken = (token) => {
    let auth = `Bearer ${token}`;
    AxiosContext.defaults.headers.common['Authorization'] = auth;
}

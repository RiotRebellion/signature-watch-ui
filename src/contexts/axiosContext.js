import axios from 'axios';

export const axiosContext = axios.create({
    baseURL: 'http://localhost:59386',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    }
})

export const applyToken = (token) => {
    let auth = `Bearer ${token}`;
    axiosContext.defaults.headers.common['Authorization'] = auth;
}

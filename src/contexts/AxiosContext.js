import axios from 'axios';

export const AxiosContext = axios.create({
    baseURL: 'http://localhost:59386',
    
    headers: {
        'Content-Type': 'application/json',
    }
})

export const ApplyToken = (token) => {
    let auth = `Bearer ${token}`;
    AxiosContext.defaults.headers.common['Authorization'] = auth;
}

import axios from 'axios';

export const axiosContext = axios.create({
    baseURL: 'http://localhost:59386'
})

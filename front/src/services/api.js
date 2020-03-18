import axios from 'axios';

const api = axios.create({ 
    baseURL: 'https://localhost:44391'
});

export default api;
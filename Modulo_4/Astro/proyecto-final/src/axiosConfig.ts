// src/axiosConfig.ts
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://gutendex.com/', // URL base de la API
    timeout: 10000, // Tiempo máximo de espera para las solicitudes
});

export default axiosInstance;
import axios from "axios";

const axiosService = axios.create({
    baseURL: process.env.API_URL,
    headers: {
        "Content-type": "application/json",
    },
});

axiosService.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosService.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosService;

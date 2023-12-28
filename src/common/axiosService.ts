import axios from "axios";

export const axiosService = axios.create({
    baseURL: process.env.API_URL,
    headers: {
        "Content-type": "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mjc3OTExLCJ1c2VydGFnIjoiMDg2M2JiZGEtY2FkYy00NjI1LWJiMDEtNGU1MmI3ZTVmODg2IiwidXNlcm5hbWUiOm51bGwsImVtYWlsIjoibXRhbmdndWg5N0BnbWFpbC5jb20iLCJzb2NrZXRfaWQiOm51bGwsImlzX3RlbGtvbV9ncm91cCI6ZmFsc2UsImN1cnJlbnRfcHJvZ3JhbSI6MSwicHJvZ3JhbXMiOlt7ImlkIjoxLCJ0aXRsZSI6Im15RGlnaUxlYXJuIGRldmVsb3BtZW50Iiwic2x1ZyI6InRlbGtvbS0xIiwib3JnX2NvZGUiOiJrOVd4MDNIV3RoMmJmZHpPMlRZOCIsImlzX21haW5fZG9tYWluIjp0cnVlfV0sInByb2dyYW0iOlt7ImlkIjoxLCJ0aXRsZSI6Im15RGlnaUxlYXJuIGRldmVsb3BtZW50Iiwic2x1ZyI6InRlbGtvbS0xIiwib3JnX2NvZGUiOiJrOVd4MDNIV3RoMmJmZHpPMlRZOCIsImlzX21haW5fZG9tYWluIjp0cnVlfV0sInNvdXJjZSI6ImZlIiwic2NvcGUiOlsiYWRtaW4iXSwiYWNjZXNzIjp7ImlzX2FkbWluIjp0cnVlLCJpc19wYXJ0bmVyIjpmYWxzZX0sImRldmljZSI6IldFQiIsImFwcF92ZXJzaW9uIjoiMS4wIiwiaWF0IjoxNzAzNzQzMzE4LCJleHAiOjE3MDM3ODY1MTh9.bUZ8S_jXVupN62cEKc9PUBcPcRPozsGRAWY7lV384KI",
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

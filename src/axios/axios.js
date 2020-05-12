import axios from "axios";
import {
    removeLocalStorageItem,
    getLocalStorageItem,
    getAccountID
} from "../utilis/helper";
import { LOCAL_STORAGE_KEYS, baseUrl } from "../utilis/constants";
import history from "../history/history";

export const axiosInstance = axios.create({ baseURL: `${baseUrl}` });

axiosInstance.interceptors.request.use((config) => {
    config.headers.Account = getAccountID();
    // add authorization token
    const token = getLocalStorageItem(LOCAL_STORAGE_KEYS.TOKEN);
    config.headers.Authorization = `Bearer ${token}`;

    return config;
});

axiosInstance.interceptors.response.use(
    response => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response.data;
    },
    error => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        const { response } = error;
        if (response && response.status === 401) {
            removeLocalStorageItem(LOCAL_STORAGE_KEYS.TOKEN);
            removeLocalStorageItem(LOCAL_STORAGE_KEYS.USER);
            history.push('/login');
        }
        return Promise.reject(error);
    }
);

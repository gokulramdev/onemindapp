// axiosConfig.js
import axios from 'axios';



export const initAxios = () => {

    axios.defaults.baseURL = "http://65.2.8.35:4848/api"

    // process.env.REACT_APP_API_BASE_URL;
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    axios.defaults.headers.common['Content-Type'] = 'application/json';

}


export const setAuthToken = (token: string) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

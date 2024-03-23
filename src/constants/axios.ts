// axiosConfig.js
import axios from 'axios';



export const initAxios = () => {

    axios.defaults.baseURL = "http://65.2.8.35:4848/api"

    // process.env.REACT_APP_API_BASE_URL;
    axios.defaults.headers.common['Content-Type'] = 'application/json';
}


// Add a request interceptor to attach the refresh token
// axiosInstance.interceptors.request.use(
//     async (config) => {
//         // Check if there's a refresh token available in your authentication system
//         const refreshToken = getRefreshToken();

//         // Add authorization header with the access token
//         config.headers.Authorization = `Bearer ${refreshToken}`;

//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// // Function to get the refresh token from your authentication system
// function getRefreshToken() {
//     // Implement your logic to retrieve the refresh token here
// }

// export default axiosInstance;








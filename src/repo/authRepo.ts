import axios, { AxiosResponse } from "axios";


const authRepo = () => {
    return {
        login: (params: any) => axios.post('/user/login', params),
        register: () => axios.post('/user/signup'),
        getotp: () => axios.post('/user/mobile/resendOTP'),
        resetpassword: () => axios.post('/user/resetPassword'),
    }
}

export default authRepo
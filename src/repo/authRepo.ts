import axios, { AxiosResponse } from "axios";


const authRepo = () => {
    return {
        login: (params: any) => axios.post('/user/login', params),
        register: (params: any) => axios.post('/user/signup', params),


        resetpassword: (params: any) => axios.post('/user/resetPassword', params),
        codeVerification: (params: any) => axios.post('/user/codeVerification', params),
        resendOTP: (params: any) => axios.post('/user/mobile/resendOTP', params),
        changePassword: (params: any) => axios.post('/user/changePassword', params),

    }
}

export default authRepo
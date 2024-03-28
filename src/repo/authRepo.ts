import axios, { AxiosResponse } from "axios";
import { Alert } from "react-native";


const authRepo = () => {
    return {
        login: (params: any) => axios.post('/user/login', params),
        register: (params: any) => axios.post('/user/signup', params),


        resetpassword: (params: any) => axios.post('/user/resetPassword', params),
        codeVerification: (params: any) => axios.post('/user/codeVerification', params),
        resendOTP: (params: any) => axios.post('/user/mobile/resendOTP', params),
        newPassword: (params: any) => axios.post('/user/changePassword', params),
        changePassword: (params: any) => axios.put('/me/changePassword', params),

        deletAccount: () => axios.delete('/me/accountDelete'),
        deletAvatar: () => axios.delete('/me/avatar'),

        uploadAvatar: (params: any) => {
            Alert.alert("ook")
            return axios.post('/upload', params, {
                headers: { 'Content-Type': 'multipart/form-data' }
            })
        },
        updateProfile: (params: any) => axios.put('/me', params),

    }
}

export default authRepo
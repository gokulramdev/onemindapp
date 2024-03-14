import axios, { AxiosResponse } from "axios";


const authRepo = () => {
    return {
        login: () => axios.post('/settings/database/backup'),
        register: () => axios.post('/settings/database/backup'),
        forgetpassword: () => axios.post('/settings/database/backup'),
        resetpassword: () => axios.post('/settings/database/backup'),
    }
}

export default authRepo
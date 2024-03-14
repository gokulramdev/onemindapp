import axios, { AxiosResponse } from "axios";


const homeRepo = () => {
    return {
        // Profile
        getprofile: (params: any) => axios.get<AxiosResponse<any>>("/reports/purchase", { params }),
        createprofile: () => axios.post('/settings/database/backup'),
        updateprofile: () => axios.post('/settings/database/backup'),

        // Latest News 
        getLatestnews: () => axios.get<AxiosResponse<any>>("/latestnew"),

        // Latest News details
        getNewsDetails: (params: any) => axios.get<AxiosResponse<any>>("/latestnew/details", { params }),

        // Live telecast
        getLivetelecast: (params: any) => axios.get<AxiosResponse<any>>("livetelecast", { params }),

        // user view
        getUserView: (params: any) => axios.get<AxiosResponse<any>>("/userview", { params }),


    }
}

export default homeRepo
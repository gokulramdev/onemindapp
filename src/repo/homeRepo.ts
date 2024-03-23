import axios, { AxiosResponse } from "axios";
import { categoryList, locationList, newsList } from "../types/homeRepoType";


const homeRepo = () => {
    return {
        // Profile
        getprofile: (params: any) => axios.get<AxiosResponse<any>>("/reports/purchase", { params }),
        createprofile: () => axios.post('/settings/database/backup'),
        updateprofile: () => axios.post('/settings/database/backup'),

        // Latest News 
        getnewsList: () => axios.get<AxiosResponse<newsList>>("/news"),

        // Latest News details
        getNewsDetails: (params: any) => axios.get<AxiosResponse<any>>("/news"),


        getLivetelecast: () => axios.get<AxiosResponse<any>>("/liveStream/mobile"),

        getLocations: () => axios.get<AxiosResponse<locationList>>("/location").then((res) => res.data),
        getCategory: () => axios.get<AxiosResponse<categoryList>>("/category").then((res) => res.data),

        getHomeSearchDetail: (params: any) => {
            const _params = new URLSearchParams(params)

            console.log("_params", params, _params.toString())
            return axios.get<AxiosResponse<any>>(`/home/search?${_params.toString()}`).then((res) => res.data)
        },

    }
}

export default homeRepo
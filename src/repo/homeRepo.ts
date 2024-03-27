import axios, { AxiosResponse } from "axios";
import { categoryList, locationList, newsList } from "../types/homeRepoType";


const homeRepo = () => {
    return {
        // Profile
        getprofile: (params: any) => axios.get("/reports/purchase", { params }),
        createprofile: () => axios.post('/settings/database/backup'),
        updateprofile: () => axios.post('/settings/database/backup'),

        // Latest News 
        getnewsList: () => axios.get("/news"),

        // Latest News details
        getNewsDetails: (params: any) => axios.get(`/news/${params?.newsid}`).then((res) => res.data),

        getLivetelecast: () => axios.get("/liveStream/mobile").then((res) => res.data),

        getLocations: () => axios.get("/location").then((res) => res.data),
        getCategory: () => axios.get("/category").then((res) => res.data),

        getHomeSearchDetail: (params: any) => {
            const _params = new URLSearchParams(params)
            return axios.get(`/home/search?${_params.toString()}`).then((res) => res.data)
        },
        getProfile: () => axios.get("/me").then((res) => res.data),

    }
}

export default homeRepo
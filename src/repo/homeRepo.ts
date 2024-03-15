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


        getLocations: () => ([
            {
                _id: {
                    $oid: '658a66a8fb7c4c793c9a8bc7',
                },
                name: 'North vellore',
            },
            {
                _id: {
                    $oid: '658a66a8fb7c4c793c9a8bc9',
                },
                name: 'South vellore',
            },
        ]),
        //@todo need to implement api
        // axios.get<AxiosResponse<any>>("/userview")

        getCategory: () => [
            {
                _id: {
                    $oid: '658a66a8fb7c4c793c9abc7',
                },
                name: 'Hotel',
                key: '6598d1ae99ff82590a42',
                image:
                    'https://cloud.appwrite.io/v1/storage/buckets/6594fb42c37c28fbf4e8/files/6598d1ae99ff82590a42/view?project=658ea9568cd34371e174&mode=admin',
            },
            {
                _id: {
                    $oid: '658a66a8fb7c4ca8bc7',
                },
                name: 'Gym',
                key: '6598d1ae99ff82590a42',
                image:
                    'https://cloud.appwrite.io/v1/storage/buckets/6594fb42c37c28fbf4e8/files/6598d1ae99ff82590a42/view?project=658ea9568cd34371e174&mode=admin',
            },
            {
                _id: {
                    $oid: '658a66a8fb793c9a8bc7',
                },
                name: 'Hospital',
                key: '6598d1ae99ff82590a42',
                image:
                    'https://cloud.appwrite.io/v1/storage/buckets/6594fb42c37c28fbf4e8/files/6598d1ae99ff82590a42/view?project=658ea9568cd34371e174&mode=admin',
            },
        ]
        //@todo need to implement api
        // axios.get<AxiosResponse<any>>("/userview")

    }
}

export default homeRepo
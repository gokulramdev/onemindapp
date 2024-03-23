export type categoryList = category[]

export interface category {
    name: string
    key: string
    image: string
    id: string
}


export type locationList = location[]

export interface location {
    name: string
    id: string
}


export type newsList = news[]

export interface news {
    isViewed: any
    title: string
    location: string
    time: string
    description: string
    key: string
    image: string
    id: string
}

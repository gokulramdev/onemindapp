import { useQuery } from "@tanstack/react-query";
import repo from "../repo";
import _ from "lodash";

interface Props {
    isEnabled: boolean
}

export const useGetNewsList = ({ isEnabled = false }: Props) => {

    const getLatestNewsQueryHelper =
        useQuery({
            queryKey: ['get_news'],
            queryFn: repo.getnewsList,
            enabled: isEnabled,
        })

    return { getLatestNewsQueryHelper }
}


export const useGetLatestNewDetail = ({ isEnabled = false }: Props) => {

    const getLatestNewDetailQueryHelper =
        useQuery({
            queryKey: ['get_latest_news_detail'],
            queryFn: () => repo.getNewsDetails({ id: 1 }),
            enabled: isEnabled,
        })

    return { getLatestNewDetailQueryHelper }
}


export const useGetLocation = ({ isEnabled = false }: Props) => {

    const getLocationQueryHelper =
        useQuery({
            queryKey: ['get_location'],
            queryFn: () => repo.getLocations(),
            enabled: isEnabled,
        })
    return { getLocationQueryHelper }
}


export const useGetCategory = ({ isEnabled = false }: Props) => {

    const getCategoryQueryHelper =
        useQuery({
            queryKey: ['get_category'],
            queryFn: () => repo.getCategory(),
            enabled: isEnabled,
        })

    return { getCategoryQueryHelper }
}


interface HomeDetailsProps {
    queryParams: {
        locationid: string
        categoryid: string
    },
    isEnabled: boolean
}
export const useGetHomeSearchDetail = ({ queryParams, isEnabled = false }: HomeDetailsProps) => {

    const getCategoryQueryHelper =
        useQuery({
            queryKey: ['get_home_search', ..._.values(queryParams)],
            queryFn: () => repo.getHomeSearchDetail(queryParams),
            enabled: isEnabled,
        })

    return { getCategoryQueryHelper }
}
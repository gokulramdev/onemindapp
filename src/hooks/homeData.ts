import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import repo from "../repo";

interface Props {
    isEnabled: boolean
}

export const useGetLatestNews = ({ isEnabled = false }: Props) => {

    const getLatestNewsQueryHelper =
        useQuery({
            queryKey: ['get_latest_news'],
            queryFn: repo.getLatestnews,
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
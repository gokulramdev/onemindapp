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


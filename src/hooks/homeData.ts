import { useMutation, useQuery } from "@tanstack/react-query";
import repo from "../repo";
import _ from "lodash";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

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

interface NewsDetailsProps {
    queryParams: {
        locationid: string
        categoryid: string
    },
    isEnabled: boolean
}

export const useGetLatestNewDetail = ({ queryParams, isEnabled = false }: NewsDetailsProps) => {

    const getLatestNewDetailQueryHelper =
        useQuery({
            queryKey: ['get_latest_news_detail', ..._.values(queryParams)],
            queryFn: () => repo.getNewsDetails(queryParams),
            enabled: isEnabled,
        })

    return { getLatestNewDetailQueryHelper }
}

export const useGetLiveTelecast = ({ isEnabled = false }: Props) => {

    const getLiveTelecastQueryHelper =
        useQuery({
            queryKey: ['get_live_telecast'],
            queryFn: repo.getLivetelecast,
            enabled: isEnabled,
        })

    return { getLiveTelecastQueryHelper }
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

    const getBusinessQueryHelper =
        useQuery({
            queryKey: ['get_home_search', ..._.values(queryParams)],
            queryFn: () => repo.getHomeSearchDetail(queryParams),
            enabled: isEnabled,
        })

    return { getBusinessQueryHelper }
}


export const useUploadResume = () => {

    const uploadResumeMutationHelper = useMutation({
        mutationFn: repo.uploadResume,
        onSuccess: (response) => {
            Alert.alert("ok")
        },
        onError: (error) => {
            return error
        },
    })
    return { uploadResumeMutationHelper }
}


export const useUserEnquiry = () => {

    const navigation = useNavigation()

    const userEnquiryMutationHelper = useMutation({
        mutationFn: repo.userEnquiry,
        onSuccess: (response) => {
            navigation.goBack()
        },
        onError: (error) => {
            return error
        },
    })
    return { userEnquiryMutationHelper }
}


export const useentrevoretEnquiry = () => {

    const navigation = useNavigation()

    const entrevoretEnquiryMutationHelper = useMutation({
        mutationFn: repo.entrevoretEnquiry,
        onSuccess: (response) => {
            navigation.goBack()
        },
        onError: (error) => {
            return error
        },
    })
    return { entrevoretEnquiryMutationHelper }
}

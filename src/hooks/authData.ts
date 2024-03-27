import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import repo from "../repo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { setData } from "./useToken";
import { useAtom } from "jotai";
import { tokenAtom } from "../store/tokenAtom";
import { setAuthToken } from "../constants/axios";
import Toast from 'react-native-toast-message';

interface Props {
    isEnabled: boolean
}

export const useAuthLogin = () => {
    const navigation = useNavigation()
    const [userToken, setToken] = useAtom(tokenAtom)

    const loginMutationHelper = useMutation({
        mutationFn: repo.login,
        onSuccess: async (res) => {
            setData(res?.data.authToken)
            setToken(res?.data.authToken)
            setAuthToken(res?.data.authToken)
            navigation.navigate('home' as never)
        },
        onError: (error: any) => {
            console.log("Hello_success",)

            Toast.show({
                type: 'error',
                text1: 'Invaild',

            });
            return error
        },
    })
    return { loginMutationHelper }
}

export const useAuthRegister = () => {
    const navigation = useNavigation()

    const registerMutationHelper = useMutation({
        mutationFn: repo.register,
        onSuccess: (response) => {
            navigation.navigate('login' as never)
        },
        onError: (error) => {
            return error
        },
    })
    return { registerMutationHelper }
}


export const useAuthResetpassword = () => {
    const navigation = useNavigation()

    const restpasswordMutationHelper = useMutation({
        mutationFn: repo.resetpassword,
        onSuccess: (response) => {
            navigation.navigate('otpsreen' as never)
        },
        onError: (error) => {
            return error
        },
    })
    return { restpasswordMutationHelper }
}

export const useAuthOtpReset = () => {
    const navigation = useNavigation()

    const OtprestMutationHelper = useMutation({
        mutationFn: repo.resetpassword,
        onSuccess: (response) => {
            navigation.navigate('otpsreen' as never)
        },
        onError: (error) => {
            return error
        },
    })
    return { OtprestMutationHelper }
}



export const useGetProfile = ({ isEnabled = false }: Props) => {

    const getProfileQueryHelper =
        useQuery({
            queryKey: ['get_profile'],
            queryFn: repo.getProfile,
            enabled: isEnabled,
        })

    return { getProfileQueryHelper }
}




import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import repo from "../repo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { setData } from "./useToken";
import { useAtom } from "jotai";
import { tokenAtom } from "../store/tokenAtom";


export const useAuthLogin = () => {
    const navigation = useNavigation()
    const [userToken, setToken] = useAtom(tokenAtom)

    const loginMutationHelper = useMutation({
        mutationFn: repo.login,
        onSuccess: async (res) => {
            setData(res?.data.authToken)
            setToken(res?.data.authToken)
            navigation.navigate('homemain' as never)
        },
        onError: (error) => {
            return error
        },
    })
    return { loginMutationHelper }
}

export const useAuthRegister = () => {

    const registerMutationHelper = useMutation({
        mutationFn: repo.register,
        onSuccess: (response) => {
        },
        onError: (error) => {
            return error
        },
    })
    return { registerMutationHelper }
}
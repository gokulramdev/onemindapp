import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import repo from "../repo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { setData } from "./useToken";
import { useAtom } from "jotai";
import { tokenAtom } from "../store/tokenAtom";
import { setAuthToken } from "../constants/axios";
import { resetUserDataAtom } from "../store/resetUserDataAtom";
import { showToast } from './functions'
import { Alert } from "react-native";

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
    const [_, setResetUserData] = useAtom(resetUserDataAtom)

    const restpasswordMutationHelper = useMutation({
        mutationFn: repo.resetpassword,
        onSuccess: (response) => {
            navigation.navigate('otpsreen' as never)
            setResetUserData(response?.data)
        },
        onError: (error) => {
            return error
        },
    })
    return { restpasswordMutationHelper }
}

export const useAuthResendOtp = () => {
    const navigation = useNavigation()

    const resendOtpMutationHelper = useMutation({
        mutationFn: repo.resendOTP,
        onSuccess: (response) => {

        },
        onError: (error) => {
            return error
        },
    })
    return { resendOtpMutationHelper }
}

export const useAuthOtpVerify = () => {
    const navigation = useNavigation()

    const otpVerifyMutationHelper = useMutation({
        mutationFn: repo.codeVerification,
        onSuccess: (response) => {
            navigation.navigate("newpassword" as never)
        },
        onError: (error) => {
            return error
        },
    })
    return { otpVerifyMutationHelper }
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



export const useNewPassword = () => {
    const navigation = useNavigation()

    const newPasswordMutationHelper = useMutation({
        mutationFn: repo.newPassword,
        onSuccess: (response) => {
            navigation.navigate("login" as never)
        },
        onError: (error) => {
            return error
        },
    })
    return { newPasswordMutationHelper }
}

export const useChangePassword = () => {
    const navigation = useNavigation()

    const changePasswordMutationHelper = useMutation({
        mutationFn: repo.changePassword,
        onSuccess: (response) => {
            navigation.navigate("home" as never)
        },
        onError: (error) => {
            return error
        },
    })
    return { changePasswordMutationHelper }
}



export const useDeleteUser = () => {
    const navigation = useNavigation()

    const deleteuserMutationHelper = useMutation({
        mutationFn: repo.deletAccount,
        onSuccess: (response) => {
            navigation.navigate("home" as never)
        },
        onError: (error) => {
            return error
        },
    })
    return { deleteuserMutationHelper }
}



export const useDeletAvatar = () => {
    const navigation = useNavigation()

    const deletAvatarMutationHelper = useMutation({
        mutationFn: repo.deletAvatar,
        onSuccess: (response) => {
        },
        onError: (error) => {
            return error
        },
    })
    return { deletAvatarMutationHelper }
}



export const useUploadAvatar = () => {
    const navigation = useNavigation()

    const uploadAvatarMutationHelper = useMutation({
        mutationFn: repo.uploadAvatar,
        onSuccess: (response) => {
        },
        onError: (error) => {
            return error
        },
    })
    return { uploadAvatarMutationHelper }
}


export const useUpdateProfile = () => {
    const navigation = useNavigation()

    const updateProfileMutationHelper = useMutation({
        mutationFn: repo.updateProfile,
        onSuccess: (response) => {
        },
        onError: (error) => {
            return error
        },
    })
    return { updateProfileMutationHelper }
}





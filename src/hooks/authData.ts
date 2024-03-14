import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import repo from "../repo";


export const useAuthLogin = () => {

    const loginMutationHelper = useMutation({
        mutationFn: repo.login,
        onSuccess: (response) => {
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
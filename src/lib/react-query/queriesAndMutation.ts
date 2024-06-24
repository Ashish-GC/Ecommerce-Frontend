import { useMutation } from "@tanstack/react-query"
import { getCurrentUser, loginUser, registerUser, verifyUserEmail } from "../api/api"
import { loginUserDataType, registerUserDataType, verifyEmailType } from "@/types"


export const registerUserQuery= ()=>{
 return useMutation({
    mutationFn:(data:registerUserDataType)=>registerUser(data)
 })
}

export const verifyUserEmailQuery=()=>{
    return useMutation({
        mutationFn:(data:verifyEmailType)=>verifyUserEmail(data)
    })
}

export const loginUserQuery=()=>{
    return useMutation({
        mutationFn:(data:loginUserDataType)=>loginUser(data)
    })
}

export const getCurrentUserQuery=()=>{
    return useMutation({
        mutationFn:getCurrentUser
    })
}

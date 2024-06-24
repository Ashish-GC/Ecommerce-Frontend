import {
  loginUserDataType,
  registerUserDataType,
  verifyEmailType,
} from "@/types";
import axios from "axios";
import { server } from "./routes";
import { toast } from "@/components/ui/use-toast";

// Authentication
export const registerUser = async (userData: registerUserDataType) => {
  try {
    const response = await axios(`${server}/user/register`, {
      method: "POST",
      data: userData,
    });

    if (!response) {
      throw new Error("unable to register user");
    }
    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast({
        variant: "destructive",
        title: error.response?.data.message,
      });
    }

    throw new Error("Unable to register User");
  }
};

export const verifyUserEmail = async (verifyEmail: verifyEmailType) => {
  try {
    const response = await axios(
      `${server}/user/verify-user?username=${verifyEmail.username}`,
      {
        method: "POST",
        data: { verifyCode: verifyEmail.verifyCode },
      }
    );
    if (!response) {
      throw new Error("unable to verify email");
    }
    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast({
        variant: "destructive",
        title: error.response?.data.message,
      });
    }
    throw new Error("Unable to verify email");
  }
};

export const loginUser = async (userData: loginUserDataType) => {
  try {
    const response = await axios(`${server}/user/login`, {
      method: "POST",
      data: userData,
      withCredentials:true
    });
    if (!response) {
      throw new Error("unable to login user");
    }
    return response.data.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      toast({
        variant: "destructive",
        title: error.response?.data.message,
      });
    }

    throw new Error(`unable to login user ${error}`);
  }
};


// Authorization
export const getCurrentUser=async()=>{
  try {
    const response = await axios(`${server}/user/get-current-user`,{
      method:"GET",
      withCredentials:true
    })
    console.log(response);

    return response.data.data
  
  } catch (error) {

    if (axios.isAxiosError(error)) {
      toast({
        variant: "destructive",
        title: error.response?.data.message,
      });
  }
  throw new Error("Unable to get user")
}
}

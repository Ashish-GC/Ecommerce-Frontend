import classes from "./Login.module.css";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Link, useNavigate } from "react-router-dom";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import { useState,useContext } from "react";
import { loginUserQuery } from "@/lib/react-query/queriesAndMutation";
import { Loader2 } from "lucide-react";
import { userContext } from "@/context/UserContext";


function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const {setUser,setIsAuthenticated} = useContext(userContext)

  const {mutateAsync:loginUser,isPending,isError,error}=loginUserQuery();

   const navigate=useNavigate()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      creator: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
       const response= await loginUser(data);

       if(!response){
        throw new Error("unable to login")
       }

       // set  access tokens 
         localStorage.setItem("accessToken",response.accessToken) 

       // store user data in user context for authorization
              setUser(response.user)
              setIsAuthenticated(true)
              
       //reset form 
       form.reset();

       // navigate to home 
        navigate("/")
        

  }

  const saveUserDetailsHandler = () => {
    // on click of check box remember me save user details
  };

  return (
    <>
    
      <h1 className="mt-2 text-base text-center md:text-2xl  font-semibold">
        Login
      </h1>

      <div className={classes.main}>
        <h1 className="mt-3 mb-3 text-center text-[0.8rem] md:text-[1rem] font-semibold">
          Great to have you back!
        </h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className={classes.form}>
            <FormField
              control={form.control}
              name="creator"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <div className="flex justify-between">
                      <p className="text-xs md:text-sm">
                        Username or email{" "}
                        <span className="text-red-500">*</span>
                      </p>
                      <div className="flex gap-1 items-center ">
                        <input
                          type="checkbox"
                          onClick={saveUserDetailsHandler}
                          className="cursor-pointer"
                        />
                        <label
                          htmlFor="checkbox"
                          className="text-[0.57rem] md:text-xs cursor-pointer"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                  </FormLabel>
                  <FormControl>
                    <input
                      className={classes.input}
                      placeholder="enter your username or email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <div className="flex justify-between ">
                      <p className="text-xs md:text-sm">
                        Password <span className="text-red-500">*</span>
                      </p>
                      <p className="text-[0.65rem] md:text-xs hover:text-red-500 cursor-pointer">
                        <Link to="/my-account/lost-password">?Lost</Link>
                      </p>
                    </div>
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <input
                        className={classes.input}
                        type={showPassword ? "text" : "password"}
                        placeholder="enter your password"
                        {...field}
                      />
                      <p
                        onClick={() =>
                          setShowPassword((prevState) => {
                            return !prevState;
                          })
                        }
                        className="absolute top-1/4 right-3 cursor-pointer"
                      >
                        {!showPassword && <LuEyeOff />}
                        {showPassword && <LuEye />}
                      </p>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="bg-red-400 hover:bg-red-500 text-white"
              type="submit"
            >
             {!isPending && "SIGN IN TO YOUR ACCOUNT"} 
             {isPending && <Loader2/>}
            </Button>
          </form>
        </Form>
        <div className="mt-1">
          <p className="text-gray-500 text-xs md:text-sm">
            Not a member ?
            <Link
              to="/my-account/register"
              className="underline hover:text-red-500 ml-1"
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;

// const passwordValidation = new RegExp(
//   /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
// );

const FormSchema = z.object({
  creator: z.string().min(2, {
    message: "Username or email must be at least 2 characters.",
  }),
  password: z.string().min(2, { message: "Must have at least 2 character" }),
  // .regex(passwordValidation, {
  //   message: "Your password is not valid",
  // }),
});

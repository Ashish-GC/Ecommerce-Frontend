import classes from "./Register.module.css";
import { useState } from "react";
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
import { LuEye, LuEyeOff } from "react-icons/lu";
import { registerUserQuery } from "@/lib/react-query/queriesAndMutation";
import { Loader2 } from "lucide-react";


function Register() {
  
  const [showPassword, setShowPassword] = useState(false);

 const {mutateAsync:registerUser,isPending,error}= registerUserQuery();

 const navigate = useNavigate()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
       const user = await registerUser(data);
           console.log(user);

           if(!user){
            throw new Error("Unable to register user")
           }

            form.reset();
            navigate(`/my-account/verify-code/${user.username}`)
  }

  return (
    <>
      <h1 className="mt-2 text-base text-center md:text-2xl  font-semibold">
         Register
      </h1>
      <div className={classes.main}>
        <h1 className="mt-3 mb-3 text-center text-[0.8rem] md:text-[1rem] font-semibold">
          Great to see you here!
        </h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className={classes.form}>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <p className="text-sm md:text-base">
                      Username <span className="text-red-500">*</span>
                    </p>
                  </FormLabel>
                  <FormControl>
                    <input
                      type="text"
                      className={classes.input}
                      // placeholder="enter your  email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <p className="text-sm md:text-base">
                      Email address <span className="text-red-500">*</span>
                    </p>
                  </FormLabel>
                  <FormControl>
                    <input
                      type="email"
                      className={classes.input}
                      // placeholder="enter your  email"
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
              {!isPending && "SETUP YOUR ACCOUNT"} 
             {isPending && <Loader2/>}
            </Button>
          </form>
        </Form>

        <div className="mt-1">
          <p className="text-gray-500 text-xs md:text-sm">
            Already got an account ?
            <Link
              to="/my-account/login"
              className="underline hover:text-red-500 ml-1"
            >
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;


const FormSchema = z.object({
  email: z.string().email({ message: "Enter a valid email address." }),
  username: z
    .string()
    .min(4, { message: "username should be greater than 4 letters" }),
  password: z
    .string()
    .min(6, { message: "password should be 6 characters long" })
    .regex(/(?=.*?[A-Za-z])/,{message:"Password should contain at least one letter"})
    .regex(/(?=.*?[0-9])/,{message: "Password should contain at least one number"})
    .regex(/(?=.*?[#?!@$%^&*-])/,{message:"Password should contain at least one special character"}),
});
